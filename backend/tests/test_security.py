import hashlib, hmac, json, time
from urllib.parse import urlencode
import pytest
from app.core.security import AuthenticationError, validate_bale_init_data

def signed(token="test-token", auth_date=None):
    values={"auth_date":str(auth_date or int(time.time())),"query_id":"q-test","user":json.dumps({"id":12345,"first_name":"Tester"},separators=(",",":"))}
    check="\n".join(f"{k}={values[k]}" for k in sorted(values))
    secret=hmac.new(token.encode(),b"WebAppData",hashlib.sha256).digest()
    values["hash"]=hmac.new(secret,check.encode(),hashlib.sha256).hexdigest()
    return urlencode(values)

def test_valid_signature():
    assert validate_bale_init_data(signed(),bot_token="test-token")["user"]["id"] == 12345

def test_tampering_rejected():
    with pytest.raises(AuthenticationError):
        validate_bale_init_data(signed().replace("Tester","BadActor"),bot_token="test-token")

def test_expired_rejected():
    with pytest.raises(AuthenticationError):
        validate_bale_init_data(signed(auth_date=int(time.time())-1000),bot_token="test-token")

def test_duplicate_fields_rejected():
    with pytest.raises(AuthenticationError):
        validate_bale_init_data(signed()+"&auth_date=1",bot_token="test-token")
