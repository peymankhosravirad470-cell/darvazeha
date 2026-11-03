import json
import httpx
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from app.core import database
from app.core.config import settings
from app.core.database import Base, get_db
from app.integrations.bale import webhook as bale_webhook_module
from app.main import app

SECRET = "test-webhook-secret"


def _bale_transport_handler(sent):
    def handler(request: httpx.Request) -> httpx.Response:
        sent.append(json.loads(request.content))
        return httpx.Response(200, json={"ok": True, "result": {"message_id": 99}})
    return handler


@pytest.fixture()
def client(monkeypatch):
    engine = create_engine("sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool)
    factory = sessionmaker(bind=engine, autoflush=False, autocommit=False)
    database._engine, database._factory = engine, factory
    Base.metadata.create_all(engine)

    def override_db():
        db = factory()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_db
    old = (settings.bale_bot_token, settings.bale_webhook_secret)
    settings.bale_bot_token = "api-test-token"
    settings.bale_webhook_secret = SECRET
    sent = []
    monkeypatch.setattr(
        bale_webhook_module, "_client_factory",
        lambda: httpx.AsyncClient(transport=httpx.MockTransport(_bale_transport_handler(sent))),
    )
    with TestClient(app) as test_client:
        yield test_client, sent
    app.dependency_overrides.clear()
    settings.bale_bot_token, settings.bale_webhook_secret = old
    engine.dispose()
    database._engine = database._factory = None


def _post(test_client, payload):
    return test_client.post(f"/api/v1/integrations/bale/webhook/{SECRET}", json=payload)


def test_start_receives_welcome_with_web_app_button(client):
    test_client, sent = client
    response = _post(test_client, {"update_id": 1, "message": {
        "message_id": 10, "text": "/start",
        "chat": {"id": 777, "type": "private"},
        "from": {"id": 777, "first_name": "تستر"},
    }})
    assert response.status_code == 200
    assert response.json() == {"ok": True, "greeted": True}
    assert len(sent) == 1
    body = sent[0]
    assert body["chat_id"] == 777
    assert "هفتاد و هفت سرزمین" in body["text"]
    button = body["reply_markup"]["inline_keyboard"][0][0]
    assert button["text"] == "🎮 ورود به بازی"
    # Mini App URL comes from the webhook request Host header, not a hardcoded domain.
    assert button["web_app"]["url"] == "https://testserver"


def test_start_with_deep_link_payload_is_greeted(client):
    test_client, sent = client
    response = _post(test_client, {"update_id": 2, "message": {
        "message_id": 11, "text": "/start ref123",
        "chat": {"id": 778, "type": "private"},
    }})
    assert response.status_code == 200
    assert response.json() == {"ok": True, "greeted": True}
    assert len(sent) == 1


def test_plain_text_message_is_ignored_without_reply(client):
    test_client, sent = client
    response = _post(test_client, {"update_id": 3, "message": {
        "message_id": 12, "text": "سلام",
        "chat": {"id": 779, "type": "private"},
    }})
    assert response.status_code == 200
    assert response.json() == {"ok": True, "ignored": True}
    assert sent == []


def test_start_without_bale_token_returns_ok_without_send(client, monkeypatch):
    test_client, sent = client
    monkeypatch.setattr(settings, "bale_bot_token", "")
    response = _post(test_client, {"update_id": 4, "message": {
        "message_id": 13, "text": "/start",
        "chat": {"id": 780, "type": "private"},
    }})
    assert response.status_code == 200
    assert response.json() == {"ok": True, "greeted": False}
    assert sent == []


def test_bale_api_failure_is_swallowed_and_never_500(client, monkeypatch):
    test_client, _ = client

    def failing_handler(request: httpx.Request) -> httpx.Response:
        return httpx.Response(400, json={"ok": False, "description": "chat not found"})

    monkeypatch.setattr(
        bale_webhook_module, "_client_factory",
        lambda: httpx.AsyncClient(transport=httpx.MockTransport(failing_handler)),
    )
    response = _post(test_client, {"update_id": 5, "message": {
        "message_id": 14, "text": "/start",
        "chat": {"id": 781, "type": "private"},
    }})
    assert response.status_code == 200
    assert response.json() == {"ok": True, "greeted": False}


def test_wrong_secret_is_rejected_before_any_processing(client):
    test_client, sent = client
    response = test_client.post(
        "/api/v1/integrations/bale/webhook/not-the-real-secret",
        json={"update_id": 6, "message": {"text": "/start", "chat": {"id": 1}}},
    )
    assert response.status_code == 401
    assert sent == []
