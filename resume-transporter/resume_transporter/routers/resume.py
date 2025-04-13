from fastapi import APIRouter
from resume_transporter.models import Field, Employment, Project, get_conn

router = APIRouter()


@router.get("/resume/{field_name}")
async def get_bio_by_field_name(field_name: str, lang: str | None = None):
    conn = get_conn(lang)

    field = await Field.get(field_name=field_name, using_db=conn)

    await field.fetch_related("employments", "projects")
    employments: list[Employment] = await field.employments.all().using_db(conn)
    projects: list[Project] = await field.projects.all().using_db(conn)

    return {
        "field": field,
        "employments": employments,
        "projects": projects,
    }
