"""Official realm → lands structure (۷ امپراتوری × ۱۱ سرزمین = ۷۷).

Single authoritative mirror of the game's official data (src-gates/data.ts)
for SERVER-SIDE validation. Used to validate the home base registration:
a land must really belong to its realm — a mismatched pair is rejected.

This is static, versioned game data (not a database table); when a future
release changes the world structure, this mapping changes with it.
"""

REALM_LANDS: dict[str, tuple[str, ...]] = {
    "targon": (
        "t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9", "t10", "t11",
    ),
    "dezhmaar": (
        "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11",
    ),
    "argad": (
        "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11",
    ),
    "mardak": (
        "m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10", "m11",
    ),
    "vergad": (
        "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11",
    ),
    "zardak": (
        "z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8", "z9", "z10", "z11",
    ),
    "tarmad": (
        "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11",
    ),
}

TOTAL_REALMS = len(REALM_LANDS)
TOTAL_LANDS = sum(len(lands) for lands in REALM_LANDS.values())


def is_valid_home(realm: str, land: str) -> bool:
    """A home base is valid only when the land officially belongs to the realm."""
    return land in REALM_LANDS.get(realm, ())
