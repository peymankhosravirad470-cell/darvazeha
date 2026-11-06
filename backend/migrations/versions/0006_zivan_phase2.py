"""زیوان فاز ۲ — گروه‌ها، مسابقهٔ قدم گروهی، چالش دوستانه، مأموریت‌ها،
مأموریت اجتماعی جمعی، لحظه‌ها (گالری خصوصی) و حلقهٔ تمرین.

Forward-only safe روی PostgreSQL عملیاتی: هر CREATE TABLE و هر ADD COLUMN
با کنترل inspector انجام می‌شود — استقرارِ نیمه‌اعمال‌شده باعث شکست بوت
نمی‌شود. جدول لحظه‌ها هیچ ستون مختصاتی ندارد؛ عکس فقط برای صاحبش است.
"""
from alembic import op
import sqlalchemy as sa

revision = "0006_zivan_phase2"
down_revision = "0005_zivan_activity"
branch_labels = None
depends_on = None


def _table_exists(bind, name: str) -> bool:
    return name in sa.inspect(bind).get_table_names()


def _column_exists(bind, table: str, column: str) -> bool:
    return column in [c["name"] for c in sa.inspect(bind).get_columns(table)]


def upgrade():
    bind = op.get_bind()

    # ستون پیوند اختیاری جلسه (حلقهٔ تمرین) — add-only
    if _table_exists(bind, "zivan_activity_sessions") and not _column_exists(
            bind, "zivan_activity_sessions", "link_id"):
        op.add_column(
            "zivan_activity_sessions",
            sa.Column("link_id", sa.String(length=80), nullable=True))
        op.create_index(
            "ix_zivan_activity_sessions_link_id",
            "zivan_activity_sessions", ["link_id"])

    if not _table_exists(bind, "zivan_groups"):
        op.create_table(
            "zivan_groups",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("name", sa.String(length=80), nullable=False),
            sa.Column("owner_account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False),
            sa.Column("invite_code", sa.String(length=12), nullable=False,
                      unique=True),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        )
        op.create_index("ix_zivan_groups_owner_account_id", "zivan_groups",
                        ["owner_account_id"])
        op.create_index("ix_zivan_groups_invite_code", "zivan_groups",
                        ["invite_code"], unique=True)

    if not _table_exists(bind, "zivan_group_members"):
        op.create_table(
            "zivan_group_members",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("group_id", sa.String(length=80),
                      sa.ForeignKey("zivan_groups.id"), nullable=False, index=True),
            sa.Column("account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False, index=True),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
            sa.UniqueConstraint("group_id", "account_id", name="uq_group_member"),
        )

    if not _table_exists(bind, "zivan_races"):
        op.create_table(
            "zivan_races",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("group_id", sa.String(length=80),
                      sa.ForeignKey("zivan_groups.id"), nullable=False, index=True),
            sa.Column("title", sa.String(length=80), nullable=False),
            sa.Column("metric", sa.String(length=20), nullable=False,
                      server_default="steps"),
            sa.Column("status", sa.String(length=20), nullable=False,
                      server_default="active", index=True),
            sa.Column("started_at", sa.DateTime(timezone=True), nullable=False),
            sa.Column("ends_at", sa.DateTime(timezone=True), nullable=False, index=True),
            sa.Column("finished_at", sa.DateTime(timezone=True), nullable=True),
            sa.Column("created_by", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        )

    if not _table_exists(bind, "zivan_challenges"):
        op.create_table(
            "zivan_challenges",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("metric", sa.String(length=20), nullable=False),
            sa.Column("target", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("creator_account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False),
            sa.Column("opponent_account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=True),
            sa.Column("status", sa.String(length=20), nullable=False,
                      server_default="open", index=True),
            sa.Column("started_at", sa.DateTime(timezone=True), nullable=False),
            sa.Column("ends_at", sa.DateTime(timezone=True), nullable=False, index=True),
            sa.Column("settled_at", sa.DateTime(timezone=True), nullable=True),
            sa.Column("winner_account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=True),
            sa.Column("result", sa.JSON(), nullable=False, server_default=sa.text("'{}'")),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        )
        op.create_index("ix_zivan_challenges_creator_account_id", "zivan_challenges",
                        ["creator_account_id"])
        op.create_index("ix_zivan_challenges_opponent_account_id", "zivan_challenges",
                        ["opponent_account_id"])

    if not _table_exists(bind, "zivan_social_missions"):
        op.create_table(
            "zivan_social_missions",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("title", sa.String(length=120), nullable=False),
            sa.Column("description", sa.String(length=300), nullable=False,
                      server_default=""),
            sa.Column("metric", sa.String(length=20), nullable=False),
            sa.Column("goal", sa.Integer(), nullable=False),
            sa.Column("status", sa.String(length=20), nullable=False,
                      server_default="active", index=True),
            sa.Column("started_at", sa.DateTime(timezone=True), nullable=False),
            sa.Column("ends_at", sa.DateTime(timezone=True), nullable=False, index=True),
            sa.Column("completed_at", sa.DateTime(timezone=True), nullable=True),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        )

    if not _table_exists(bind, "zivan_social_contributions"):
        op.create_table(
            "zivan_social_contributions",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("mission_id", sa.String(length=80),
                      sa.ForeignKey("zivan_social_missions.id"),
                      nullable=False, index=True),
            sa.Column("session_id", sa.String(length=80),
                      sa.ForeignKey("zivan_activity_sessions.id"), nullable=False),
            sa.Column("account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False, index=True),
            sa.Column("value", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
            sa.UniqueConstraint("mission_id", "session_id", name="uq_mission_session"),
        )

    if not _table_exists(bind, "zivan_mission_progress"):
        op.create_table(
            "zivan_mission_progress",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False, index=True),
            sa.Column("mission_code", sa.String(length=40), nullable=False),
            sa.Column("period_key", sa.String(length=20), nullable=False),
            sa.Column("claimed_at", sa.DateTime(timezone=True), nullable=True),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
            sa.UniqueConstraint("account_id", "mission_code", "period_key",
                                name="uq_mission_period"),
        )

    if not _table_exists(bind, "zivan_moments"):
        op.create_table(
            "zivan_moments",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False, index=True),
            sa.Column("caption", sa.String(length=200), nullable=False,
                      server_default=""),
            sa.Column("content_type", sa.String(length=30), nullable=False),
            sa.Column("size_bytes", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("image", sa.LargeBinary(), nullable=False),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        )

    if not _table_exists(bind, "zivan_workouts"):
        op.create_table(
            "zivan_workouts",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("title", sa.String(length=80), nullable=False),
            sa.Column("protocol", sa.String(length=40), nullable=False),
            sa.Column("owner_account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False),
            sa.Column("invite_code", sa.String(length=12), nullable=False,
                      unique=True),
            sa.Column("status", sa.String(length=20), nullable=False,
                      server_default="open", index=True),
            sa.Column("started_at", sa.DateTime(timezone=True), nullable=False),
            sa.Column("ends_at", sa.DateTime(timezone=True), nullable=False),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        )
        op.create_index("ix_zivan_workouts_owner_account_id", "zivan_workouts",
                        ["owner_account_id"])
        op.create_index("ix_zivan_workouts_invite_code", "zivan_workouts",
                        ["invite_code"], unique=True)

    if not _table_exists(bind, "zivan_workout_members"):
        op.create_table(
            "zivan_workout_members",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("workout_id", sa.String(length=80),
                      sa.ForeignKey("zivan_workouts.id"), nullable=False, index=True),
            sa.Column("account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False, index=True),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
            sa.UniqueConstraint("workout_id", "account_id", name="uq_workout_member"),
        )


def downgrade():
    bind = op.get_bind()
    for table in ("zivan_workout_members", "zivan_workouts", "zivan_moments",
                  "zivan_mission_progress", "zivan_social_contributions",
                  "zivan_social_missions", "zivan_challenges", "zivan_races",
                  "zivan_group_members", "zivan_groups"):
        if _table_exists(bind, table):
            op.drop_table(table)
    if _table_exists(bind, "zivan_activity_sessions") and _column_exists(
            bind, "zivan_activity_sessions", "link_id"):
        op.drop_index("ix_zivan_activity_sessions_link_id",
                      table_name="zivan_activity_sessions")
        op.drop_column("zivan_activity_sessions", "link_id")
