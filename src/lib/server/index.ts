import { readFile } from "node:fs/promises";
import { parse } from "smol-toml";
import { getLocale, type Locale } from "$lib/paraglide/runtime";

export async function loadBio(
  locale: Locale = getLocale(),
): Promise<Resume.Bio> {
  const doc = await readFile(`data/${locale}/bio.toml`, {
    encoding: "utf-8",
  });
  return parse(doc) as unknown as Resume.Bio;
}

export type EmploymentTable = Record<string, Resume.Employment>;

export async function loadEmployments(
  locale: Locale,
): Promise<EmploymentTable> {
  const doc = await readFile(`data/${locale}/employments.toml`, {
    encoding: "utf-8",
  });
  return parse(doc) as unknown as EmploymentTable;
}

export type ProjectTable = Record<string, Resume.Project>;

export async function loadProjects(locale: Locale): Promise<ProjectTable> {
  const doc = await readFile(`data/${locale}/projects.toml`, {
    encoding: "utf-8",
  });
  return parse(doc) as unknown as ProjectTable;
}

export type FieldTable = Record<string, Resume.Field>;

export async function loadFields(locale: Locale): Promise<FieldTable> {
  const doc = await readFile(`data/${locale}/fields.toml`, {
    encoding: "utf-8",
  });
  return parse(doc) as unknown as FieldTable;
}

export interface Career {
  employments: EmploymentTable;
  projects: ProjectTable;
}

/**
 * load employments and projects corresponding to a specific field.
 */
export async function loadCareer(
  locale: Locale,
  field: Resume.Field,
): Promise<Career> {
  // load and filter employment table
  const employments: Record<string, Resume.Employment> = {};
  const employmentTable = await loadEmployments(locale);
  for (const name of field.employments) {
    employments[name] = employmentTable[name];
  }

  // load and filter project table
  const projects: Record<string, Resume.Project> = {};
  const projectTable = await loadProjects(locale);
  for (const name of field.projects) {
    projects[name] = projectTable[name];
  }

  return { employments, projects };
}
