from fastapi import APIRouter
from resume_transporter.models import Employment

router = APIRouter()


@router.get("/employments")
async def get_employments():
    return await Employment.all()
