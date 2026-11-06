"""پیشخوان بازی‌های زندهٔ VIVA — رجیستری موتورها و محدودیت‌های هر بازی.

افزودن بازی جدید = نوشتن یک موتور جدید و ثبت آن در اینجا؛
هیچ بازی قبلی بازنویسی نمی‌شود (ماژولار بودن الزامی دستور معماری).
"""
from __future__ import annotations

from typing import Any, Callable

# game_id → (min_players, max_players) روی صندلی‌ها
GAME_LIMITS: dict[str, tuple[int, int]] = {
    "mafia": (5, 12),
    "chess": (2, 2),
}

_ENGINES: dict[str, Callable[[Any, Any], Any]] = {}


def register_engine(game_id: str, factory: Callable[[Any, Any], Any]) -> None:
    _ENGINES[game_id] = factory


def create_engine(game_id: str, room: Any, hub: Any) -> Any:
    if game_id not in _ENGINES:
        if game_id == "mafia":
            from app.modules.games.mafia import MafiaEngine
            register_engine("mafia", lambda room_, hub_: MafiaEngine(room_, hub_))
        elif game_id == "chess":
            from app.modules.games.chess import ChessEngine
            register_engine("chess", lambda room_, hub_: ChessEngine(room_, hub_))
        else:
            raise KeyError(f"بازی شناخته‌شده نیست: {game_id}")
    return _ENGINES[game_id](room, hub)


class GameEngine:
    """پروتکل مشترک همهٔ موتورهای بازی — منطق کامل سمت سرور، مستقل از رابط."""

    game_id = "base"
    min_players = 2
    max_players = 12

    def __init__(self, room: Any, hub: Any):
        self.room = room
        self.hub = hub

    async def start(self) -> None:
        raise NotImplementedError

    async def handle_action(self, presence: Any, action: dict) -> None:
        raise NotImplementedError

    async def tick(self, now: float) -> None:
        """فازهای زمانی — هر ثانیه از حلقهٔ هاب صدا زده می‌شود."""

    def snapshot_for(self, account_id: str | None) -> dict:
        raise NotImplementedError

    def on_disconnect(self, presence: Any, permanent: bool) -> None:
        """اتصال قطع شد؛ permanent یعنی خروج صریح از اتاق."""

    def on_reconnect(self, presence: Any) -> None:
        """اتصالِ همان عضو دوباره برقرار شد."""

    def on_join_late(self, presence: Any) -> None:
        """عضو تازه در حین مسابقه — پیش‌فرض: تماشاگر."""
