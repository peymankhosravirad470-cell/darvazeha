from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import update
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.dependencies import current_user
from app.models import AccountBalance, PlayerAccount
from app.modules.realms import is_valid_home
from app.schemas import HomeBaseRequest

router = APIRouter(prefix="/players", tags=["Players"])

def _home_of(account: PlayerAccount) -> dict | None:
    if not account.home_realm or not account.home_land:
        return None
    return {"realm": account.home_realm, "land": account.home_land}

@router.get("/me")
def get_me(user=Depends(current_user), db: Session = Depends(get_db)):
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    balance = db.query(AccountBalance).filter(AccountBalance.account_id == account.id).one()
    return {
        "user": {
            "bale_user_id": user.bale_user_id,
            "first_name": user.first_name,
            "username": user.username,
            "photo_url": user.photo_url,
            "phone_verified": user.phone_verified_at is not None,
            "phone_verified_at": user.phone_verified_at,
        },
        "player": {
            "id": account.id,
            "display_name": account.display_name,
            "status": account.status,
            "token_balance": balance.token_balance,
        },
    }

@router.get("/me/home")
def get_home_base(user=Depends(current_user), db: Session = Depends(get_db)):
    """پایگاه خانگیِ حسابِ احراز‌شده (مبنای مالکیت: توکن سرور، نه هیچ شناسهٔ کلاینت)."""
    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()
    return {"home": _home_of(account)}

@router.put("/me/home", status_code=201)
def register_home_base(body: HomeBaseRequest, user=Depends(current_user), db: Session = Depends(get_db)):
    """ثبت اولین پایگاه خانگی حساب.

    قواعد (طبق دستور):
    - فقط وقتی پایگاه خالی باشد ثبت می‌شود؛ انتخاب قبلی هرگز جایگزین نمی‌شود.
    - ثبت اتمیک است: UPDATE مشروط به «home_realm IS NULL» در یک دستور —
      در درخواست‌های هم‌زمان دقیقاً یک برنده دارد (قفل ردیف پایگاه داده).
    - مالکیت از توکن احراز‌شده تعیین می‌شود؛ شناسهٔ بازیکنِ ارسالی کلاینت ملاک نیست.
    - رابطهٔ سرزمین و امپراتوری با دادهٔ رسمی ۷×۱۱ اعتبارسنجی می‌شود.
    """
    if not is_valid_home(body.realm, body.land):
        raise HTTPException(
            status_code=422,
            detail="سرزمین و امپراتوری با ساختار رسمی ۷×۱۱ هم‌خوانی ندارند.",
        )

    account = db.query(PlayerAccount).filter(PlayerAccount.user_id == user.id).one()

    # Compare-and-set: exactly one concurrent request can win this UPDATE.
    result = db.execute(
        update(PlayerAccount)
        .where(
            PlayerAccount.id == account.id,
            PlayerAccount.home_realm.is_(None),
            PlayerAccount.home_land.is_(None),
        )
        .values(home_realm=body.realm, home_land=body.land)
    )
    db.commit()

    if result.rowcount == 1:
        return {"created": True, "home": {"realm": body.realm, "land": body.land}}

    # Lost the race (or already registered): re-read the authoritative value.
    db.expire(account)
    existing = _home_of(account)
    if existing:
        raise HTTPException(
            status_code=409,
            detail={
                "message": "پایگاه خانگی این حساب قبلاً ثبت شده و قابل جایگزینی نیست.",
                "home": existing,
            },
        )
    # Account row exists (we queried it), so this state is not reachable in
    # practice; keep a defensive 500-free response that asks the client to retry.
    raise HTTPException(status_code=409, detail="ثبت پایگاه هم‌زمان ناموفق بود؛ دوباره تلاش کنید.")
