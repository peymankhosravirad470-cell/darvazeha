"""زیوان — جلسهٔ فعالیت بدنی (پیاده‌روی/دویدن) با اعتبارسنجی سرور.

Forward-only safe روی PostgreSQL عملیاتی: CREATE TABLE با کنترل
inspector — استقرارِ نیمه‌اعمال‌شده باعث شکست بوت نمی‌شود.
حریم خصوصی: هیچ ستون مختصات خام وجود ندارد؛ مسیر تقطیع‌شده در JSON
فقط با رضایت صریح کاربر ذخیره می‌شود.
"""
from alembic import op
import sqlalchemy as sa

revision = "0005_zivan_activity"
down_revision = "0004_viva_match_results"
branch_labels = None
depends_on = None


def _table_exists(bind, name: str) -> bool:
    return name in sa.inspect(bind).get_table_names()


def upgrade():
    bind = op.get_bind()
    if not _table_exists(bind, "zivan_activity_sessions"):
        op.create_table(
            "zivan_activity_sessions",
            sa.Column("id", sa.String(length=80), primary_key=True),
            sa.Column("account_id", sa.String(length=36),
                      sa.ForeignKey("player_accounts.id"), nullable=False, index=True),
            sa.Column("hall", sa.String(length=40), nullable=False, index=True),
            sa.Column("activity", sa.String(length=20), nullable=False),
            sa.Column("consent", sa.Boolean(), nullable=False, server_default=sa.text("false")),
            sa.Column("status", sa.String(length=20), nullable=False,
                      server_default="active", index=True),
            sa.Column("distance_m", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("steps", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("duration_s", sa.Integer(), nullable=False, server_default="0"),
            sa.Column("valid", sa.Boolean(), nullable=False, server_default=sa.text("false")),
            sa.Column("reject_reason", sa.String(length=40), nullable=True),
            sa.Column("validation_stats", sa.JSON(), nullable=False, server_default=sa.text("'{}'")),
            sa.Column("path", sa.JSON(), nullable=False, server_default=sa.text("'[]'")),
            sa.Column("started_at", sa.DateTime(timezone=True), nullable=False, index=True),
            sa.Column("finished_at", sa.DateTime(timezone=True), nullable=True),
            sa.Column("created_at", sa.DateTime(timezone=True), nullable=False),
        )


def downgrade():
    bind = op.get_bind()
    if _table_exists(bind, "zivan_activity_sessions"):
        op.drop_table("zivan_activity_sessions")
