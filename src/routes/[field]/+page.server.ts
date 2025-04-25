import { getLocale } from "$lib/paraglide/runtime";
import { loadBio, loadField, loadFields } from "$lib/server/util";

// resume page should be non-intereactive
export const csr = false;

export async function load({ params }) {
    const lang = getLocale();
    const fieldName = params.field;

    const fields = await loadFields(lang);
    const detail = fields[fieldName];

    const fieldInfo = await loadField(lang, detail);

    const bio = await loadBio(lang);

    return { bio, fieldInfo };
}
