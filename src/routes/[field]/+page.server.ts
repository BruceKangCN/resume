import { getLocale } from "$lib/paraglide/runtime";
import { loadBio, loadExperiences, loadFields } from "$lib/server";

export async function load({ params }) {
  const lang = getLocale();
  const fieldName = params.field;

  const fields = await loadFields(lang);
  const field = fields[fieldName];

  const exp = await loadExperiences(lang, field);

  const bio = await loadBio(lang);

  return { bio, field, ...exp };
}
