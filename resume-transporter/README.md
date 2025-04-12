# Resume Transporter

A FastAPI back end with Tortoise ORM to fetch resume data.

## I18N

Data are stored the same database but different schemas per language. All schemas
have the same tables with structures defined by `resume_transporter/models.py`.

You should define a connection in `db.yaml` for every language. You can pass a
`lang` search parameter whose value is a connection name to query data for a
specific language. If no `lang` parameter is passed, the default connection is
used.

You can create tables in default database and schema by running `migration.py`
script. To create additional schemas for other languages, you can either create
it manually, or:

1. rename the original default schema to some else name

2. create a new schema with the default name

3. run `migration.py` script again

4. rename the newly created schema to a proper name matching your connections
configuration

5. repeat step 2 to 4 to create all needed schemas

6. restore the name of the original default schema
