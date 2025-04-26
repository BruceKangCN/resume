import type { PathLike } from "node:fs";
import { readFile } from "node:fs/promises";
import { parse } from "smol-toml";
import { getLocale, type Locale } from "$lib/paraglide/runtime";

async function readToString(path: PathLike) {
    const buf = await readFile(path);
    return buf.toString();
}

export async function loadBio(
    locale: Locale = getLocale(),
): Promise<Resume.Bio> {
    const doc = await readToString(`data/${locale}/bio.toml`);
    return parse(doc) as unknown as Resume.Bio;
}

type EmploymentTable = Record<string, Resume.EmploymentDetail>;

export async function loadEmployments(
    locale: Locale,
): Promise<EmploymentTable> {
    const doc = await readToString(`data/${locale}/employments.toml`);
    return parse(doc) as unknown as EmploymentTable;
}

type ProjectTable = Record<string, Resume.ProjectDetail>;

export async function loadProjects(locale: Locale): Promise<ProjectTable> {
    const doc = await readToString(`data/${locale}/projects.toml`);
    return parse(doc) as unknown as ProjectTable;
}

type FieldTable = Record<string, Resume.FieldDetail>;

export async function loadFields(locale: Locale): Promise<FieldTable> {
    const doc = await readToString(`data/${locale}/fields.toml`);
    return parse(doc) as unknown as FieldTable;
}

export async function getFieldNames(locale: Locale): Promise<string[]> {
    const fields = await loadFields(locale);
    return Object.keys(fields);
}

export async function loadField(
    locale: Locale,
    detail: Resume.FieldDetail,
): Promise<Resume.FieldInfo> {
    // load employment table to get details
    const employments: Record<string, Resume.EmploymentDetail> = {};
    const employmentTable = await loadEmployments(locale);
    for (const name of detail.employments) {
        employments[name] = employmentTable[name];
    }

    // load project table to get details
    const projects: Record<string, Resume.ProjectDetail> = {};
    const projectTable = await loadProjects(locale);
    for (const name of detail.projects) {
        projects[name] = projectTable[name];
    }

    return { ...detail, employments, projects };
}
