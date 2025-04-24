import { getLocale } from "$lib/paraglide/runtime";
import { BACKEND_BASE_URL } from "$env/static/private";
import { loadBio } from "$lib/server/util";

// resume page should be non-intereactive
export const csr = false;

export async function load({ params, fetch }) {
    const lang = getLocale();

    const url = `${BACKEND_BASE_URL}/resume/${params.field}?lang=${lang}`;
    const resp = await fetch(url)
    const { field, employments, projects }: App.Resume = await resp.json()

    const bio = await loadBio(lang);

    return { bio, field, employments, projects };
}
