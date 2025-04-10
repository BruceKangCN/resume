FROM ghcr.io/astral-sh/uv:0.6.14-python3.12-bookworm-slim

EXPOSE 8000

ENV UVI_COMPILE_BYTECODE=1 UV_LINK_MODE=copy PATH="/app/.venv/bin:${PATH}"

WORKDIR /app

COPY [ \
    "pyproject.toml", \
    ".python-version", \
    "uv.lock", \
    "db.yaml", \
    "migration.py", \
    "./" \
]

COPY resume_transporter resume_transporter

RUN uv sync --frozen --no-install-project --no-dev --no-cache

ENTRYPOINT []

CMD [ "uvicorn", "resume_transporter.main:app", "--host", "0.0.0.0" ]
