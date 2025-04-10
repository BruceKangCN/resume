-- Table: public.fields

-- DROP TABLE IF EXISTS public.fields;

CREATE TABLE IF NOT EXISTS public.fields
(
    id integer NOT NULL,
    field_name text COLLATE pg_catalog."default" NOT NULL,
    salary_desc text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    skill_desc text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    CONSTRAINT fields_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.fields
    OWNER to postgres;

COMMENT ON COLUMN public.fields.field_name
    IS '领域名称';

COMMENT ON COLUMN public.fields.salary_desc
    IS '用于描述期望薪资的字符串，例如 "8-10k"';

COMMENT ON COLUMN public.fields.skill_desc
    IS '能力描述，例如擅长做什么工作，会使用什么工具';