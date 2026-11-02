from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    app_env: str = "development"
    database_url: str = "sqlite:///./local.db"
    bale_bot_token: str = ""
    bale_webhook_secret: str = ""
    session_secret: str = "development-only-change-this-secret-32-bytes"
    init_data_max_age_seconds: int = 300
    session_ttl_seconds: int = 3600
    model_config = SettingsConfigDict(env_file=".env", extra="ignore", case_sensitive=False)

settings = Settings()
