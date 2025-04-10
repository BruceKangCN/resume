-- Table: public.employments

-- DROP TABLE IF EXISTS public.employments;

CREATE TABLE IF NOT EXISTS public.employments
(
    id integer NOT NULL DEFAULT nextval('employments_id_seq'::regclass),
    company_name text COLLATE pg_catalog."default" NOT NULL,
    positon text COLLATE pg_catalog."default" NOT NULL,
    positon_desc text COLLATE pg_catalog."default" NOT NULL DEFAULT ''::text,
    CONSTRAINT employments_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.employments
    OWNER to postgres;

COMMENT ON COLUMN public.employments.company_name
    IS '公司名称';

COMMENT ON COLUMN public.employments.positon
    IS '职位';

COMMENT ON COLUMN public.employments.positon_desc
    IS '职位描述';