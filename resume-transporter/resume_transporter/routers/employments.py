from fastapi import APIRouter
from resume_transporter.models import Employment, get_conn

router = APIRouter()


@router.get("/employments")
async def get_employments(lang: str | None = None):
    return await Employment.all().using_db(get_conn(lang))
