-- Table: public.projects

-- DROP TABLE IF EXISTS public.projects;

CREATE TABLE IF NOT EXISTS public.projects
(
    id integer NOT NULL,
    project_name text COLLATE pg_catalog."default" NOT NULL,
    project_desc text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    start_date date NOT NULL,
    end_date date NOT NULL,
    CONSTRAINT projects_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.projects
    OWNER to postgres;

COMMENT ON COLUMN public.projects.project_name
    IS '项目名称';

COMMENT ON COLUMN public.projects.project_desc
    IS '项目描述';

COMMENT ON COLUMN public.projects.start_date
    IS '项目起始日期';

COMMENT ON COLUMN public.projects.end_date
    IS '项目结束日期';