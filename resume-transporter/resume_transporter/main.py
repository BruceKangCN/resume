from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI
from tortoise.contrib.fastapi import RegisterTortoise, tortoise_exception_handlers

from .routers import fields, employments, projects


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    async with RegisterTortoise(app=app, config_file="db.yaml"):
        yield


app = FastAPI(
    lifespan=lifespan,
    exception_handlers=tortoise_exception_handlers(),
)

app.include_router(fields.router)
app.include_router(employments.router)
app.include_router(projects.router)
