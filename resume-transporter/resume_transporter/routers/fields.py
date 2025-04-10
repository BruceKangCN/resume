from fastapi import APIRouter
from resume_transporter.models import Field, Employment, Project
from pydantic import BaseModel

router = APIRouter()


@router.get("/fields")
async def get_fields():
    return await Field.all()


@router.get("/field/{id}")
async def get_bio_by_field_id(id: int):
    field = await Field.get(id=id)

    await field.fetch_related("employments", "projects")
    employments: list[Employment] = await field.employments.all()
    projects: list[Project] = await field.projects.all()

    return {
        "field": field,
        "employments": employments,
        "projects": projects,
    }
