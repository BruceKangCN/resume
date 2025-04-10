# Resume

A web based resume representing app.

structure:
- `resume-representor`: a SvelteKit based front end
- `resume-transporter`: a FastAPI based back end
- database: PostgreSQL

## Usage

1. in `resuse-transporter` directory, copy `db.example.yaml` to `db.yaml`.

2. modify configurations in `db.yaml` if needed.

3. set the value of `RESUME_DB_PASSWORD` environment variable to the value of
`connections.default.credentials.password` field in `db.yaml`.

4. run the app with docker compose:

    ```shell
    $ docker compose up -d
    ```

## Table Structure

see `resume-transporter/resuse_transporter/models.py`
