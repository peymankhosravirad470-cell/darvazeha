"""Player home base (پایگاه خانگی) — two persistent columns on the account.

home_realm / home_land store the one-time empire + land choice of the player's
account, so the same account recovers its home base on any device after a
fresh login (server is the single source of truth).

Forward-only safe on the production PostgreSQL database: plain ADD COLUMN of
nullable VARCHAR columns — no table rewrite, no default backfill, and guarded
by an inspector check so a partially-applied rollout cannot fail the boot.
"""
from alembic import op
import sqlalchemy as sa

revision = "0003_player_home_base"
down_revision = "0002_repair_world_territories"
branch_labels = None
depends_on = None


def _existing_columns(bind) -> set[str]:
    return {col["name"] for col in sa.inspect(bind).get_columns("player_accounts")}


def upgrade():
    bind = op.get_bind()
    columns = _existing_columns(bind)
    if "home_realm" not in columns:
        op.add_column(
            "player_accounts",
            sa.Column("home_realm", sa.String(length=40), nullable=True),
        )
    if "home_land" not in columns:
        op.add_column(
            "player_accounts",
            sa.Column("home_land", sa.String(length=40), nullable=True),
        )


def downgrade():
    bind = op.get_bind()
    columns = _existing_columns(bind)
    if "home_land" in columns:
        op.drop_column("player_accounts", "home_land")
    if "home_realm" in columns:
        op.drop_column("player_accounts", "home_realm")
