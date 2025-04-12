from fastapi import APIRouter
from resume_transporter.models import Field, Employment, Project, get_conn

router = APIRouter()


@router.get("/fields")
async def get_fields(lang: str | None = None):
    return await Field.all().using_db(get_conn(lang))
