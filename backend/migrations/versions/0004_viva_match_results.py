"""VIVA live matches — match_results table.

Server-persisted results for realtime matches (Mafia in Dezhmar, Chess in
Argad). Each finished match writes exactly one row; token rewards reference
it through the unique reference_id in token_ledger, so a repeated finish can
never double-pay.

Forward-only safe on production PostgreSQL: plain CREATE TABLE IF NOT EXISTS
guarded by an inspector check — a partially-applied rollout cannot fail boot.
"""
from alembic import op
import sqlalchemy as sa

revision = "0004_viva_match_results"
down_revision = "0003_player_home_base"
branch_labels = None
depends_on = None


def _table_exists(bind, name: str) -> bool:
    return name in sa.inspect(bind).get_table_names()


def upgrade():
    bind = op.get_bind()
    if not _table_exists(bind, "match_results"):
        op.create_table(
            "match_results",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("game", sa.String(length=30), nullable=False, index=True),
            sa.Column("room_id", sa.String(length=80), nullable=False, index=True),
            sa.Column("player_count", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("config", sa.JSON(), nullable=False),
            sa.Column("result", sa.JSON(), nullable=False),
            sa.Column("started_at", sa.DateTime(timezone=True), nullable=True),
            sa.Column("finished_at", sa.DateTime(timezone=True), nullable=False),
        )


def downgrade():
    bind = op.get_bind()
    if _table_exists(bind, "match_results"):
        op.drop_table("match_results")
