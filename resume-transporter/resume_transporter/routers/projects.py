from fastapi import APIRouter
from resume_transporter.models import Project

router = APIRouter()


@router.get("/fields")
async def get_porjects():
    return await Project.all()
