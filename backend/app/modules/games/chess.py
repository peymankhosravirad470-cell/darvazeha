"""موتور شطرنج در آرگاد — قوانین کامل با python-chess، اعتبارسنجی کامل سمت سرور.

قوانین واقعی و کامل: حرکت قانونی، کیش، مات، پات، سه‌بار تکرار، قاعدهٔ ۵۰ حرکت،
قدرت‌ناقص، آن‌پاسان، قلعه، ارتقا. سرور مرجع است؛ کلاینت فقط UCI حرکت می‌فرستد.

ساعت مسابقه سمت سرور شمرده می‌شود (اختیاری؛ اگر initial_seconds > 0).
قطع اتصال: مهلت ۶۰ ثانیه؛ پس از آن باخت فنی.
"""
from __future__ import annotations

import chess
from typing import Any

from app.modules.games import GameEngine

WHITE = "white"
BLACK = "black"

DISCONNECT_FORFEIT_SECONDS = 60.0


class ChessEngine(GameEngine):
    game_id = "chess"
    min_players = 2
    max_players = 2

    def __init__(self, room: Any, hub: Any):
        super().__init__(room, hub)
        cfg = room.config or {}
        self.initial_seconds = float(cfg.get("initial_seconds", 0))  # 0 = بدون ساعت
        self.increment_seconds = float(cfg.get("increment_seconds", 0))
        self.board = chess.Board()
        self.colors: dict[str, str] = {}  # account_id → white/black
        self.history_san: list[str] = []
        self.winner: str | None = None      # white | black | draw
        self.result_reason: str | None = None
        self.white_time = self.initial_seconds
        self.black_time = self.initial_seconds
        self.last_ts = 0.0
        self.disconnected_since: dict[str, float] = {}
        self.draw_offered_by: str | None = None

    # --- helpers -------------------------------------------------------
    def color_of(self, account_id: str) -> str | None:
        return self.colors.get(account_id)

    def opponent_id(self, account_id: str) -> str | None:
        my = self.color_of(account_id)
        if my is None:
            return None
        for account, color in self.colors.items():
            if color != my:
                return account
        return None

    def _remaining(self, account_id: str, now: float) -> float:
        """زمان باقیماندهٔ نوبت‌دار — بدون تغییر وضعیت."""
        color = self.color_of(account_id)
        base = self.white_time if color == WHITE else self.black_time
        if self.initial_seconds <= 0 or base is None:
            return float("inf")
        if self.board.turn == (chess.WHITE if color == WHITE else chess.BLACK) and not self.winner:
            return base - max(0.0, now - self.last_ts)
        return base

    def _spend_turn_time(self, now: float) -> None:
        if self.initial_seconds <= 0:
            return
        elapsed = max(0.0, now - self.last_ts)
        if self.board.turn == chess.WHITE:
            self.white_time -= elapsed
        else:
            self.black_time -= elapsed
        self.last_ts = now

    # --- lifecycle -------------------------------------------------------
    async def start(self) -> None:
        seated = [p.account_id for p in self.room.presences.values() if p.seat is not None]
        seated.sort(key=lambda a: self.room.presences[a].seat or 0)
        self.colors[seated[0]] = WHITE
        self.colors[seated[1]] = BLACK
        self.last_ts = self.hub.now()
        await self._public({"type": "match_start",
                            "white": seated[0], "black": seated[1],
                            "clock": {"initial": self.initial_seconds, "increment": self.increment_seconds}})

    async def _public(self, event: dict) -> None:
        await self.hub.broadcast(self.room, {"t": "event", "event": event})

    async def _private(self, account_id: str, event: dict) -> None:
        await self.hub.send_to(self.room, account_id, {"t": "event", "event": event})

    # --- actions ----------------------------------------------------------
    async def handle_action(self, presence: Any, action: dict) -> None:
        account_id = presence.account_id
        kind = action.get("type")
        now = self.hub.now()
        if kind == "move":
            await self._handle_move(account_id, str(action.get("move", "")), now)
        elif kind == "resign":
            await self._resign(account_id)
        elif kind == "offer_draw":
            await self._offer_draw(account_id)
        elif kind == "accept_draw":
            await self._accept_draw(account_id)
        else:
            await self._private(account_id, {"type": "rejected", "reason": "unknown_action"})

    async def _handle_move(self, account_id: str, move_uci: str, now: float) -> None:
        color = self.color_of(account_id)
        if self.winner:
            await self._private(account_id, {"type": "rejected", "reason": "match_over"})
            return
        if color is None:
            await self._private(account_id, {"type": "rejected", "reason": "spectator"})
            return
        expected = WHITE if self.board.turn == chess.WHITE else BLACK
        if color != expected:
            await self._private(account_id, {"type": "rejected", "reason": "not_your_turn"})
            return
        try:
            move = self.board.parse_uci(move_uci)  # اعتبارسنجی کامل قانونی بودن
        except ValueError:
            await self._private(account_id, {"type": "rejected", "reason": "illegal_move", "move": move_uci})
            return
        self._spend_turn_time(now)
        if self.initial_seconds > 0:
            remaining = self.white_time if color == WHITE else self.black_time
            if remaining <= 0:
                await self._finish(WHITE if color == BLACK else BLACK, "timeout")
                return
            if color == WHITE:
                self.white_time += self.increment_seconds
            else:
                self.black_time += self.increment_seconds
        san = self.board.san(move)
        self.board.push(move)
        self.history_san.append(san)
        self.draw_offered_by = None
        await self._public({"type": "move", "by": account_id, "san": san, "uci": move_uci,
                            "fen": self.board.fen(),
                            "check": self.board.is_check(),
                            "clock": self._clock_state(now)})
        if self.board.is_checkmate():
            await self._finish(WHITE if self.board.turn == chess.BLACK else BLACK, "checkmate")
            return
        if self.board.is_stalemate():
            await self._finish("draw", "stalemate")
            return
        if self.board.is_insufficient_material():
            await self._finish("draw", "insufficient_material")
            return
        # ادعاهای خودکار تساوی (سه‌بار تکرار / پنجاه حرکت) برای سادگی تجربه
        if self.board.can_claim_threefold_repetition():
            await self._finish("draw", "threefold_repetition")
            return
        if self.board.can_claim_fifty_moves():
            await self._finish("draw", "fifty_move")
            return

    async def _resign(self, account_id: str) -> None:
        color = self.color_of(account_id)
        if color is None or self.winner:
            return
        await self._finish(WHITE if color == BLACK else BLACK, "resignation")

    async def _offer_draw(self, account_id: str) -> None:
        if self.color_of(account_id) is None or self.winner:
            return
        self.draw_offered_by = account_id
        opponent = self.opponent_id(account_id)
        if opponent:
            await self._private(opponent, {"type": "draw_offer", "from": account_id})

    async def _accept_draw(self, account_id: str) -> None:
        if self.winner or self.draw_offered_by is None or self.draw_offered_by == account_id:
            return
        if self.color_of(account_id) is None:
            return
        await self._finish("draw", "agreement")

    # --- finish ------------------------------------------------------------
    async def _finish(self, winner: str, reason: str) -> None:
        if self.winner:
            return
        self.winner = winner
        self.result_reason = reason
        rewards: dict[str, int] = {}
        for account_id, color in self.colors.items():
            if winner == "draw":
                rewards[account_id] = 25
            elif color == winner:
                rewards[account_id] = 50
            else:
                rewards[account_id] = 10
        pgn_headers = {"Result": self._pgn_result(), "Reason": reason}
        await self.hub.finish_match(self.room, {
            "game": "chess",
            "winner": winner,
            "reason": reason,
            "winners": [] if winner == "draw" else [a for a, c in self.colors.items() if c == winner],
            "rewards": rewards,
            "moves_san": self.history_san,
            "pgn": self.board.pgn(headers=pgn_headers) if hasattr(self.board, "pgn") else None,
            "final_fen": self.board.fen(),
        })

    def _pgn_result(self) -> str:
        if self.winner == "draw":
            return "1/2-1/2"
        return "1-0" if self.winner == WHITE else "0-1"

    def _clock_state(self, now: float) -> dict | None:
        if self.initial_seconds <= 0:
            return None
        return {
            "white": self.white_time if self.board.turn != chess.WHITE else max(0.0, self.white_time - (now - self.last_ts)),
            "black": self.black_time if self.board.turn != chess.BLACK else max(0.0, self.black_time - (now - self.last_ts)),
        }

    # --- tick ----------------------------------------------------------------
    async def tick(self, now: float) -> None:
        if self.winner:
            return
        # ساعت نوبت‌دار
        if self.initial_seconds > 0:
            turn_color = WHITE if self.board.turn == chess.WHITE else BLACK
            remaining = self.white_time if turn_color == WHITE else self.black_time
            elapsed = max(0.0, now - self.last_ts)
            if remaining - elapsed <= 0:
                loser = [a for a, c in self.colors.items() if c == turn_color]
                if loser:
                    self._spend_turn_time(now)
                    await self._finish(WHITE if turn_color == BLACK else BLACK, "timeout")
                    return
        # مهلت قطع اتصال
        for account_id, since in list(self.disconnected_since.items()):
            if account_id in self.disconnected_since and self.hub.now() - since > DISCONNECT_FORFEIT_SECONDS:
                del self.disconnected_since[account_id]
                await self._finish(WHITE if self.color_of(account_id) == BLACK else BLACK, "forfeit_disconnect")
                return

    # --- presence ---------------------------------------------------------
    def on_disconnect(self, presence: Any, permanent: bool) -> None:
        if permanent:
            if not self.winner and presence.account_id in self.colors:
                # خروج صریح = باخت فنی فوری (همگام با ماندگاری عضویت)
                import asyncio
                color = self.color_of(presence.account_id)
                asyncio.ensure_future(self._finish(WHITE if color == BLACK else BLACK, "forfeit_leave"))
        else:
            if presence.account_id in self.colors and self.disconnected_since.get(presence.account_id) is None:
                self.disconnected_since[presence.account_id] = self.hub.now()

    def on_reconnect(self, presence: Any) -> None:
        self.disconnected_since.pop(presence.account_id, None)

    # --- snapshot ----------------------------------------------------------
    def snapshot_for(self, account_id: str | None) -> dict:
        now = self.hub.now()
        turn = WHITE if self.board.turn == chess.WHITE else BLACK
        my_color = self.color_of(account_id) if account_id else None
        white_id = next((a for a, c in self.colors.items() if c == WHITE), None)
        black_id = next((a for a, c in self.colors.items() if c == BLACK), None)
        snap: dict = {
            "game": "chess",
            "fen": self.board.fen(),
            "turn": turn,
            "check": self.board.is_check(),
            "history_san": self.history_san,
            "white": white_id,
            "black": black_id,
            "winner": self.winner,
            "reason": self.result_reason,
            "clock": self._clock_state(now),
        }
        if my_color:
            legal = []
            if not self.winner and my_color == turn:
                legal = sorted(m.uci() for m in self.board.legal_moves)
            snap["you"] = {"color": my_color, "legal_moves": legal}
        else:
            snap["you"] = {"color": None, "legal_moves": []}
        return snap
