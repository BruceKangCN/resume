-- Table: test.fields_projects

-- DROP TABLE IF EXISTS test.fields_projects;

CREATE TABLE IF NOT EXISTS test.fields_projects
(
    fields_id integer NOT NULL,
    project_id integer NOT NULL,
    CONSTRAINT fields_projects_fields_id_fkey FOREIGN KEY (fields_id)
        REFERENCES test.fields (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT fields_projects_project_id_fkey FOREIGN KEY (project_id)
        REFERENCES test.projects (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS test.fields_projects
    OWNER to postgres;
-- Index: uidx_fields_proj_fields__7e34cd

-- DROP INDEX IF EXISTS test.uidx_fields_proj_fields__7e34cd;

CREATE UNIQUE INDEX IF NOT EXISTS uidx_fields_proj_fields__7e34cd
    ON test.fields_projects USING btree
    (fields_id ASC NULLS LAST, project_id ASC NULLS LAST)
    TABLESPACE pg_default;