FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
WORKDIR /app

# Build context is the repository root; Dockerfile path is backend/Dockerfile.
COPY backend/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/app ./app
COPY index.html ./web/index.html
COPY game/ ./web/game/
COPY backend/migrations ./migrations
COPY backend/alembic.ini ./alembic.ini

EXPOSE 8000

# Apply versioned schema changes before serving traffic. exec makes Uvicorn
# receive container stop signals directly; PORT can be supplied by the host.
CMD ["sh", "-c", "alembic upgrade head && exec uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
