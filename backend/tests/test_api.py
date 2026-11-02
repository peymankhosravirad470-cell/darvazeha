import hashlib, hmac, json, time
from urllib.parse import urlencode
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from app.core import database
from app.core.config import settings
from app.core.database import Base, get_db
from app.main import app

def make_init_data(token, uid=654321):
    values={"auth_date":str(int(time.time())),"query_id":"api-test-query","user":json.dumps({"id":uid,"first_name":"بازیکن آزمایشی","username":"test_player"},separators=(",",":"))}
    check="\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret=hmac.new(token.encode(),b"WebAppData",hashlib.sha256).digest()
    values["hash"]=hmac.new(secret,check.encode(),hashlib.sha256).hexdigest()
    return urlencode(values)

@pytest.fixture()
def client():
    engine=create_engine("sqlite://",connect_args={"check_same_thread":False},poolclass=StaticPool)
    factory=sessionmaker(bind=engine,autoflush=False,autocommit=False)
    database._engine, database._factory = engine, factory
    Base.metadata.create_all(engine)
    def override_db():
        db=factory()
        try: yield db
        finally: db.close()
    app.dependency_overrides[get_db]=override_db
    old=(settings.bale_bot_token,settings.session_secret,settings.bale_webhook_secret)
    settings.bale_bot_token="api-test-token"
    settings.session_secret="api-test-session-secret-which-is-long"
    settings.bale_webhook_secret="api-test-webhook-secret"
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()
    settings.bale_bot_token,settings.session_secret,settings.bale_webhook_secret=old
    engine.dispose()
    database._engine=database._factory=None

def test_login_world_progress_and_contact_webhook(client):
    response=client.post("/api/v1/auth/bale",json={"init_data":make_init_data("api-test-token")})
    assert response.status_code == 200, response.text
    token=response.json()["access_token"]
    headers={"Authorization":f"Bearer {token}"}
    legacy=client.post("/api/v1/progress/migrate",headers=headers,json={
      "event_id":"legacy-import-test-001",
      "legacy_state":{"unlocked":13,"visited":[1,2,13],"missions":8,"stars":99,"balance":{"wins":4}}
    })
    assert legacy.status_code == 202
    assert legacy.json()["server_unlocked"] == 1
    assert legacy.json()["visited"] == [1]
    before_contact=client.post("/api/v1/progress/events",headers=headers,json={"event_id":"before-contact-001","event_type":"balance_game","result":"win","progress":100,"attempts":1,"wins":1,"losses":0})
    assert before_contact.status_code == 403
    world=client.get("/api/v1/world/territories",headers=headers)
    assert world.status_code == 200
    assert world.json()["total"] == 77
    assert len(world.json()["territories"]) == 77
    assert world.json()["territories"][0]["unlocked"] is True
    assert world.json()["territories"][1]["unlocked"] is False
    update={"update_id":1,"message":{"from":{"id":654321},"contact":{"user_id":654321,"phone_number":"+989121234567"}}}
    contact=client.post("/api/v1/integrations/bale/webhook/api-test-webhook-secret",json=update)
    assert contact.status_code == 200
    assert contact.json()["verified"] is True
    me=client.get("/api/v1/players/me",headers=headers)
    assert me.status_code == 200
    assert me.json()["user"]["phone_verified"] is True
    event=client.post("/api/v1/progress/events",headers=headers,json={
      "event_id":"balance-event-test-001","event_type":"balance_game","result":"win",
      "progress":100,"attempts":1,"wins":1,"losses":0
    })
    assert event.status_code == 202
    assert event.json()["reward_granted"] is False
