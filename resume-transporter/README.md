# Resume Transporter

A FastAPI back end with Tortoise ORM to fetch resume data.

## I18N

Data are stored the same database but different schemas per language. All schemas
have the same tables with structures defined by `resume_transporter/models.py`.

User should define a connection in `db.yaml` for every language. User can pass a
`lang` search parameter whose value is a connection name to query data for a
specific language. If no `lang` parameter is passed, the default connection is
used.
