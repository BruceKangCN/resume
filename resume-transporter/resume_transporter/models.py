from tortoise.models import Model
from tortoise import fields


class Field(Model):
    id = fields.IntField(primary_key=True)
    field_name = fields.TextField()
    salary_desc = fields.TextField()
    skill_desc = fields.TextField()

    employments = fields.ManyToManyField("resume-transporter.Employment", related_name="employments")
    projects = fields.ManyToManyField("resume-transporter.Project", related_name="projects")

    class Meta:
        table = "fields"


class Employment(Model):
    id = fields.IntField(primary_key=True)
    company_name = fields.TextField()
    position = fields.TextField()
    position_desc = fields.TextField()

    class Meta:
        table = "employments"


class Project(Model):
    id = fields.IntField(primary_key=True)
    project_name = fields.TextField()
    project_desc = fields.TextField()
    start_date = fields.DateField()
    end_date = fields.DateField()

    class Meta:
        table = "projects"
