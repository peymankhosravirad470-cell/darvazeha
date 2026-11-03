"""Initial player and world schema.

This revision is intentionally a frozen schema snapshot. Do not import current
ORM metadata here: future model changes must be represented by new revisions.
"""
from alembic import op
import sqlalchemy as sa

revision = "0001_initial"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "users",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("bale_user_id", sa.Integer(), nullable=False),
        sa.Column("first_name", sa.String(length=120), nullable=False),
        sa.Column("username", sa.String(length=120), nullable=True),
        sa.Column("photo_url", sa.Text(), nullable=True),
        sa.Column("phone_e164", sa.String(length=20), nullable=True),
        sa.Column("phone_verified_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("phone_e164"),
    )
    op.create_index("ix_users_bale_user_id", "users", ["bale_user_id"], unique=True)

    op.create_table(
        "world_territories",
        sa.Column("id", sa.Integer(), nullable=False),
        sa.Column("slug", sa.String(length=80), nullable=False),
        sa.Column("title_fa", sa.String(length=120), nullable=False),
        sa.Column("release_status", sa.String(length=20), nullable=False),
        sa.Column("is_gate", sa.Boolean(), nullable=False),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("slug"),
    )

    op.create_table(
        "player_accounts",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("user_id", sa.String(length=36), nullable=False),
        sa.Column("display_name", sa.String(length=80), nullable=False),
        sa.Column("status", sa.String(length=20), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("user_id"),
    )

    op.create_table(
        "player_progress",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("account_id", sa.String(length=36), nullable=False),
        sa.Column("unlocked_territory", sa.Integer(), nullable=False),
        sa.Column("visited_territories", sa.JSON(), nullable=False),
        sa.Column("missions_completed", sa.Integer(), nullable=False),
        sa.Column("stars", sa.Integer(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["account_id"], ["player_accounts.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("account_id"),
    )

    op.create_table(
        "player_territory_progress",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("account_id", sa.String(length=36), nullable=False),
        sa.Column("territory_id", sa.Integer(), nullable=False),
        sa.Column("status", sa.String(length=20), nullable=False),
        sa.Column("progress_data", sa.JSON(), nullable=False),
        sa.Column("completed_at", sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(["account_id"], ["player_accounts.id"]),
        sa.ForeignKeyConstraint(["territory_id"], ["world_territories.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("account_id", "territory_id", name="uq_player_territory"),
    )

    op.create_table(
        "auth_sessions",
        sa.Column("id", sa.String(length=80), nullable=False),
        sa.Column("user_id", sa.String(length=36), nullable=False),
        sa.Column("expires_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("revoked_at", sa.DateTime(timezone=True), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["user_id"], ["users.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_auth_sessions_user_id", "auth_sessions", ["user_id"], unique=False)

    op.create_table(
        "game_events",
        sa.Column("id", sa.String(length=80), nullable=False),
        sa.Column("account_id", sa.String(length=36), nullable=False),
        sa.Column("event_type", sa.String(length=40), nullable=False),
        sa.Column("payload", sa.JSON(), nullable=False),
        sa.Column("trust_level", sa.String(length=30), nullable=False),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["account_id"], ["player_accounts.id"]),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index("ix_game_events_account_id", "game_events", ["account_id"], unique=False)

    op.create_table(
        "account_balances",
        sa.Column("id", sa.String(length=36), nullable=False),
        sa.Column("account_id", sa.String(length=36), nullable=False),
        sa.Column("token_balance", sa.Integer(), nullable=False),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["account_id"], ["player_accounts.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("account_id"),
    )

    op.create_table(
        "token_ledger",
        sa.Column("id", sa.String(length=80), nullable=False),
        sa.Column("account_id", sa.String(length=36), nullable=False),
        sa.Column("amount", sa.Integer(), nullable=False),
        sa.Column("reason", sa.String(length=80), nullable=False),
        sa.Column("reference_id", sa.String(length=80), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        sa.ForeignKeyConstraint(["account_id"], ["player_accounts.id"]),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("reference_id"),
    )
    op.create_index("ix_token_ledger_account_id", "token_ledger", ["account_id"], unique=False)


def downgrade():
    # Explicit reverse dependency order; never drop whatever happens to be
    # present in current ORM metadata at downgrade time.
    op.drop_table("token_ledger")
    op.drop_table("account_balances")
    op.drop_index("ix_game_events_account_id", table_name="game_events")
    op.drop_table("game_events")
    op.drop_index("ix_auth_sessions_user_id", table_name="auth_sessions")
    op.drop_table("auth_sessions")
    op.drop_table("player_territory_progress")
    op.drop_table("player_progress")
    op.drop_table("player_accounts")
    op.drop_table("world_territories")
    op.drop_index("ix_users_bale_user_id", table_name="users")
    op.drop_table("users")
