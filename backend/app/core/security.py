import base64, hashlib, hmac, json, secrets, time
from urllib.parse import parse_qsl
from app.core.config import settings

class AuthenticationError(ValueError):
    pass

def validate_bale_init_data(init_data: str, bot_token: str | None = None, now: int | None = None) -> dict:
    token = bot_token if bot_token is not None else settings.bale_bot_token
    if not token or not init_data or len(init_data) > 16384:
        raise AuthenticationError("Missing token or invalid initData")
    try:
        pairs = parse_qsl(init_data, keep_blank_values=True, strict_parsing=True)
    except ValueError as exc:
        raise AuthenticationError("Malformed initData") from exc
    data = {}
    for key, value in pairs:
        if key in data:
            raise AuthenticationError("Duplicate initData field")
        data[key] = value
    received = data.pop("hash", None)
    if not received or len(received) != 64:
        raise AuthenticationError("Missing or invalid hash")
    check = "\n".join(f"{k}={data[k]}" for k in sorted(data))
    # Bale docs specify HMAC_SHA256(bot_token, "WebAppData") as the secret derivation.
    secret = hmac.new(token.encode(), b"WebAppData", hashlib.sha256).digest()
    expected = hmac.new(secret, check.encode(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(expected, received.lower()):
        raise AuthenticationError("initData signature mismatch")
    try:
        auth_date = int(data["auth_date"])
        user = json.loads(data["user"])
        uid = int(user["id"])
    except (KeyError, ValueError, TypeError, json.JSONDecodeError) as exc:
        raise AuthenticationError("Missing user or auth_date") from exc
    current = int(time.time()) if now is None else now
    age = current - auth_date
    if age < -30 or age > settings.init_data_max_age_seconds or uid <= 0:
        raise AuthenticationError("initData expired or invalid")
    return {"user": user, "auth_date": auth_date, "query_id": data.get("query_id")}

def _b64(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def issue_session_token(user_id: str, session_id: str, exp: int) -> str:
    payload = _b64(json.dumps({"sub": user_id, "sid": session_id, "exp": exp}, separators=(",", ":")).encode())
    sig = hmac.new(settings.session_secret.encode(), payload.encode(), hashlib.sha256).digest()
    return payload + "." + _b64(sig)

def verify_session_token(token: str) -> dict:
    try:
        payload, signature = token.split(".", 1)
        expected = _b64(hmac.new(settings.session_secret.encode(), payload.encode(), hashlib.sha256).digest())
        if not hmac.compare_digest(expected, signature):
            raise AuthenticationError("Invalid signature")
        raw = base64.urlsafe_b64decode(payload + "=" * (-len(payload) % 4))
        data = json.loads(raw)
        if int(data["exp"]) <= int(time.time()):
            raise AuthenticationError("Session expired")
        return data
    except AuthenticationError:
        raise
    except Exception as exc:
        raise AuthenticationError("Malformed token") from exc

def new_session_id() -> str:
    return secrets.token_urlsafe(24)
