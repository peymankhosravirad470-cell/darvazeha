"""Repair world_territories when an older deployment recorded an incomplete schema.

Some deployments may have stamped the initial revision while the table was
absent. This forward-only repair makes that specific missing table recoverable.
"""
from alembic import op
import sqlalchemy as sa

revision = "0002_repair_world_territories"
down_revision = "0001_initial"
branch_labels = None
depends_on = None


def upgrade():
    bind = op.get_bind()
    if sa.inspect(bind).has_table("world_territories"):
        return

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


def downgrade():
    # Deliberately retain the repaired table: it is part of the initial schema
    # and may be referenced by player_territory_progress.
    pass
