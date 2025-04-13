from enum import Enum
from tortoise.models import Model
from tortoise import fields, connections


class Field(Model):
    id = fields.IntField(primary_key=True)
    field_name = fields.TextField()
    position_desc = fields.TextField()  # description for expected positions
    salary_desc = fields.TextField()  # description for expected salary
    skill_desc = fields.TextField()  # self introduction

    employments = fields.ManyToManyField("resume-transporter.Employment", related_name="employments")
    projects = fields.ManyToManyField("resume-transporter.Project", related_name="projects")

    class Meta:
        table = "fields"


class Employment(Model):
    id = fields.IntField(primary_key=True)
    company_name = fields.TextField()
    position = fields.TextField()
    position_desc = fields.TextField()
    start_date = fields.DateField()
    end_date = fields.DateField(null=True)

    class Meta:
        table = "employments"


class Project(Model):
    id = fields.IntField(primary_key=True)
    project_name = fields.TextField()
    project_desc = fields.TextField()
    start_date = fields.DateField()
    end_date = fields.DateField(null=True)

    class Meta:
        table = "projects"


def get_conn(lang: str | None):
    """
    get a proper connection according to `lang`

    returns `None` if `lang` is `None`.
    """

    if lang is None:
        return None

    return connections.get(lang)
