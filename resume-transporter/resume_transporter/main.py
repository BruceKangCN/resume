from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from tortoise.contrib.fastapi import RegisterTortoise, tortoise_exception_handlers

from .routers import fields, employments, projects, resume


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    async with RegisterTortoise(app=app, config_file="db.yaml"):
        yield


app = FastAPI(
    lifespan=lifespan,
    exception_handlers=tortoise_exception_handlers(),
)

ORIGINS = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(fields.router)
app.include_router(employments.router)
app.include_router(projects.router)
app.include_router(resume.router)
