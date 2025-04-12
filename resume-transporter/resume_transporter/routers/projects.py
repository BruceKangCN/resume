from fastapi import APIRouter
from resume_transporter.models import Project, get_conn

router = APIRouter()


@router.get("/fields")
async def get_projects(lang: str | None):
    return await Project.all().using_db(get_conn(lang))
