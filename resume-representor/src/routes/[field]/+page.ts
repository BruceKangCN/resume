import { json } from "@sveltejs/kit";
import { getLocale } from "$lib/paraglide/runtime";
import { PUBLIC_BACKEND_BASE_URL } from "$env/static/public";

// resume page should be non-intereactive
export const csr = false;

export async function load({ params, fetch }) {
    const lang = getLocale();

    const url = `${PUBLIC_BACKEND_BASE_URL}/bio/${params.field}?lang=${lang}`;
    const resp = await fetch(url)
    const bio: App.Bio = await resp.json()

    return json(bio);
}
