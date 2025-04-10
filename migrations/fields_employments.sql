-- Table: test.fields_employments

-- DROP TABLE IF EXISTS test.fields_employments;

CREATE TABLE IF NOT EXISTS test.fields_employments
(
    fields_id integer NOT NULL,
    employment_id integer NOT NULL,
    CONSTRAINT fields_employments_employment_id_fkey FOREIGN KEY (employment_id)
        REFERENCES test.employments (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT fields_employments_fields_id_fkey FOREIGN KEY (fields_id)
        REFERENCES test.fields (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS test.fields_employments
    OWNER to postgres;
-- Index: uidx_fields_empl_fields__2e0891

-- DROP INDEX IF EXISTS test.uidx_fields_empl_fields__2e0891;

CREATE UNIQUE INDEX IF NOT EXISTS uidx_fields_empl_fields__2e0891
    ON test.fields_employments USING btree
    (fields_id ASC NULLS LAST, employment_id ASC NULLS LAST)
    TABLESPACE pg_default;