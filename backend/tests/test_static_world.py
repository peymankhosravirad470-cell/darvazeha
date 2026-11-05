"""قراردادهای اتصال جهان تارگون به مسیر واقعی مینی‌اپ بله (مرحلهٔ ۳).

این آزمون‌ها سه لایه را پوشش می‌دهند:
۱) ایمیج: Dockerfile باید game/ را داخل مسیر سروشده کپی کند و .dockerignore
   مانع ورود .secrets/.git به context ساخت باشد.
۲) صفحهٔ بازی: SDK رسمی بله باید لود شود (منبع initData برای کیف پول
   فقط-خواندنی) و ۱۱ ناحیهٔ رسمی تارگون با نام‌های مصوب ثبت باشند.
۳) مینی‌اپ: منوی اصلی باید دقیقاً سه گزینه داشته باشد (هفت امپراتوری /
   نقشهٔ کل مناطق / پروفایل و تنظیمات)، دسترسی به نسخهٔ پیشین در پروفایل حفظ
   شود و هر سه صفحه واقعاً از StaticFiles سرو شوند.
"""
from pathlib import Path

import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.core import database
from app.core.database import Base, get_db
from app.main import app

REPO_ROOT = Path(__file__).resolve().parents[2]

OFFICIAL_REGIONS = [
    "سپیده‌دم",
    "دهکده آذرین",
    "میدان هم‌پیمانان",
    "بازار کهن",
    "دشت سبز",
    "جنگل زمرد",
    "رود روشن",
    "کوهستان سنگ‌نگهبان",
    "دژ نگهبان",
    "ویرانه‌های خاموش",
    "دروازه سرخ",
]


# ── لایهٔ ۱: ایمیج ────────────────────────────────────────────────────
def test_dockerfile_copies_root_index_into_web():
    text = (REPO_ROOT / "backend" / "Dockerfile").read_text(encoding="utf-8")
    assert "COPY index.html ./web/index.html" in text


def test_dockerfile_copies_game_into_web():
    text = (REPO_ROOT / "backend" / "Dockerfile").read_text(encoding="utf-8")
    assert "COPY game/ ./web/game/" in text


def test_dockerignore_keeps_secrets_out_of_build_context():
    f = REPO_ROOT / ".dockerignore"
    assert f.exists(), ".dockerignore must exist"
    text = f.read_text(encoding="utf-8")
    assert ".secrets" in text
    assert ".git" in text


# ── لایهٔ ۲: صفحهٔ بازی ───────────────────────────────────────────────
def test_game_page_loads_official_bale_sdk():
    text = (REPO_ROOT / "game" / "index.html").read_text(encoding="utf-8")
    assert "https://tapi.bale.ai/miniapp.js" in text


def test_game_page_registers_all_eleven_official_regions():
    text = (REPO_ROOT / "game" / "index.html").read_text(encoding="utf-8")
    missing = [name for name in OFFICIAL_REGIONS if name not in text]
    assert missing == [], f"missing official regions: {missing}"


def test_game_page_has_return_link_to_miniapp():
    text = (REPO_ROOT / "game" / "index.html").read_text(encoding="utf-8")
    assert 'id="btn-targon-gates"' in text
    assert 'href="/"' in text


def test_game_page_wallet_is_read_only_from_backend():
    text = (REPO_ROOT / "game" / "index.html").read_text(encoding="utf-8")
    assert "/api/v1/auth/bale" in text
    assert "/api/v1/players/me" in text


# ── لایهٔ ۳: مینی‌اپ و سرو واقعی مسیرها ───────────────────────────────
def test_root_index_links_to_targon_world():
    """منوی اصلی جدید: دقیقاً سه گزینه — نسخهٔ پیشین از پروفایل در دسترس است."""
    text = (REPO_ROOT / "index.html").read_text(encoding="utf-8")
    assert text.count('id="menu-') == 3  # فقط سه گزینهٔ اصلی
    assert 'id="menu-empires"' in text and "/game/gates/index.html" in text
    assert "ورود به هفت امپراتوری" in text
    assert 'id="menu-map"' in text and "/game/map/index.html" in text
    assert 'id="menu-profile"' in text and "/game/profile/index.html" in text
    # گزینهٔ اصلی اضافهٔ «اتصال سرور» ممنوع است — فقط نشان کوچک وضعیت
    assert 'id="cloud-action"' not in text
    assert 'id="status-badge"' in text
    # حفظ نسخهٔ پیشین: دسترسی به جهان تارگون قدیمی حالا از پروفایل است
    profile = (REPO_ROOT / "game" / "profile" / "index.html").read_text(encoding="utf-8")
    assert "/game/index.html" in profile
    assert "جهان تارگون" in profile


@pytest.fixture()
def client():
    engine = create_engine(
        "sqlite://", connect_args={"check_same_thread": False}, poolclass=StaticPool
    )
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
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()


def test_static_root_serves_miniapp_with_targon_entry(client):
    response = client.get("/")
    assert response.status_code == 200
    assert "ورود به هفت امپراتوری" in response.text
    assert "/game/gates/index.html" in response.text
    # نسخهٔ پیشین از پروفایل در دسترس است (هر دو واقعاً سرو می‌شوند)
    profile = client.get("/game/profile/index.html")
    assert profile.status_code == 200
    assert "/game/index.html" in profile.text


def test_static_serves_targon_world_at_game_index_html(client):
    response = client.get("/game/index.html")
    assert response.status_code == 200
    assert "miniapp.js" in response.text
    for name in OFFICIAL_REGIONS:
        assert name in response.text
