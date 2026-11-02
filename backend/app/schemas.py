from pydantic import BaseModel, Field

class BaleAuthRequest(BaseModel):
    init_data: str = Field(min_length=1, max_length=16384)

class ProgressSnapshot(BaseModel):
    visited: list[int] = Field(default_factory=list, max_length=77)

class GameEventRequest(BaseModel):
    event_id: str = Field(min_length=8, max_length=80)
    event_type: str = Field(pattern="^balance_game$")
    result: str = Field(pattern="^(win|loss|reset|progress)$")
    progress: float = Field(default=0, ge=0, le=100)
    attempts: int = Field(default=0, ge=0, le=1000000)
    wins: int = Field(default=0, ge=0, le=1000000)
    losses: int = Field(default=0, ge=0, le=1000000)
