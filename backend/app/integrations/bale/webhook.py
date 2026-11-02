import hmac, re
from fastapi import APIRouter, Depends, Header, HTTPException, Request
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.database import get_db
from app.models import User, utcnow

router = APIRouter(prefix="/integrations/bale", tags=["Bale integration"])

@router.post("/webhook")
async def bale_webhook(request: Request, x_bale_webhook_secret: str | None = Header(default=None), db: Session = Depends(get_db)):
    # The configured secret header must be verified against the deployed Bale webhook setup.
    if not settings.bale_webhook_secret or not x_bale_webhook_secret or not hmac.compare_digest(settings.bale_webhook_secret, x_bale_webhook_secret):
        raise HTTPException(status_code=401, detail="Webhook authentication failed")
    update = await request.json()
    message = update.get("message") or update.get("edited_message") or {}
    contact, sender = message.get("contact") or {}, message.get("from") or {}
    if not contact or not sender:
        return {"ok": True, "ignored": True}
    try:
        sender_id, contact_user_id = int(sender["id"]), int(contact["user_id"])
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
