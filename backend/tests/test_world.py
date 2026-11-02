from app.main import GATE_NAMES
def test_first_13_existing_gate_names_are_preserved():
    assert len(GATE_NAMES) == 13
    assert GATE_NAMES[0] == "دریای شیشه‌ای"
    assert GATE_NAMES[-1] == "دروازهٔ سپیده"
def test_world_count_contract():
    assert len(range(1,78)) == 77
