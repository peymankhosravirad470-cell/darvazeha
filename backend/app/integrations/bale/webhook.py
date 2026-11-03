import hmac, logging, re
import httpx
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.database import get_db
from app.models import User, utcnow

logger = logging.getLogger("darvazeha.bale")

router = APIRouter(prefix="/integrations/bale", tags=["Bale integration"])

BALE_API_BASE = "https://tapi.bale.ai"

WELCOME_TEXT = (
    "سلام! به «هفتاد و هفت سرزمین» خوش آمدید 🏰\n"
    "هفتاد و هفت سرزمین پشت دروازه‌ها منتظر شماست.\n"
    "برای شروع بازی، دکمهٔ زیر را بزنید:"
)

def _client_factory() -> httpx.AsyncClient:
    return httpx.AsyncClient(timeout=httpx.Timeout(3.0))

def _public_base_url(request: Request) -> str:
    """Mini App address of this deployment, derived from the incoming webhook request.

    Bale always delivers updates over HTTPS, so the Host header of the webhook
    request is exactly the public origin users must open. No hardcoded domain.
    """
    proto = request.headers.get("x-forwarded-proto", "https")
    host = request.headers.get("host", "")
    return f"{proto}://{host}" if host else ""

async def _send_start_welcome(chat_id: int, base_url: str) -> bool:
    """Reply to /start with a greeting and a web_app button that opens the Mini App.

    Failures are logged and swallowed: a broken reply channel must never turn the
    webhook into a 5xx, otherwise Bale would retry and spam the endpoint.
    """
    token = settings.bale_bot_token.strip()
    if not token:
        logger.warning("bale sendMessage skipped: BALE_BOT_TOKEN is not configured")
        return False
    if not base_url:
        logger.error("bale sendMessage skipped: public base URL missing from request headers")
        return False
    payload = {
        "chat_id": chat_id,
        "text": WELCOME_TEXT,
        "reply_markup": {
            "inline_keyboard": [
                [{"text": "🎮 ورود به بازی", "web_app": {"url": base_url}}]
            ]
        },
    }
    try:
        async with _client_factory() as client:
            response = await client.post(f"{BALE_API_BASE}/bot{token}/sendMessage", json=payload)
    except httpx.HTTPError as exc:
        logger.error("bale sendMessage transport error: %s", exc)
        return False
    if response.status_code != 200:
        # Log only the response body; never log the URL (it contains the bot token).
        logger.error(
            "bale sendMessage failed: status=%s body=%s",
            response.status_code, response.text[:300],
        )
        return False
    return True

@router.post("/webhook/{secret}")
async def bale_webhook(secret: str, request: Request, db: Session = Depends(get_db)):
    # Bale's reviewed webhook documentation guarantees an HTTPS URL, not a custom
    # secret header. Protect this endpoint with a high-entropy secret URL segment.
    if not settings.bale_webhook_secret or not hmac.compare_digest(settings.bale_webhook_secret, secret):
        raise HTTPException(status_code=401, detail="Webhook authentication failed")
    update = await request.json()
    message = update.get("message") or update.get("edited_message") or {}
    text = (message.get("text") or "").strip()
    if text == "/start" or text.startswith("/start "):
        chat = message.get("chat") or {}
        try:
            chat_id = int(chat["id"])
        except (KeyError, TypeError, ValueError):
            return {"ok": True, "ignored": True}
        greeted = await _send_start_welcome(chat_id, _public_base_url(request))
        return {"ok": True, "greeted": greeted}
    contact, sender = message.get("contact") or {}, message.get("from") or {}
    if not contact or not sender:
        return {"ok": True, "ignored": True}
    try:
        sender_id = int(sender["id"])
        contact_user_id = int(contact["user_id"])
        phone = str(contact["phone_number"])
    except (KeyError, TypeError, ValueError):
        return {"ok": True, "ignored": True}
    if sender_id != contact_user_id:
        return {"ok": True, "verified": False, "reason": "contact_owner_mismatch"}
    normalized = re.sub(r"[^+0-9]", "", phone)
    if len(re.sub(r"\D", "", normalized)) < 8 or len(normalized) > 20:
        return {"ok": True, "verified": False, "reason": "invalid_phone"}
    user = db.query(User).filter(User.bale_user_id == sender_id).first()
    if not user:
        return {"ok": True, "verified": False, "reason": "player_not_registered"}
    user.phone_e164, user.phone_verified_at = normalized, utcnow()
    db.commit()
    return {"ok": True, "verified": True}
