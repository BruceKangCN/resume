import { getLocale } from "$lib/paraglide/runtime";
import { BACKEND_BASE_URL } from "$env/static/private";

export const load = async ({ fetch }) => {
    const lang = getLocale();
    const url = `${BACKEND_BASE_URL}/fields?lang=${lang}`;
    const resp = await fetch(url);
    const fields: App.Field[] = await resp.json();

    return { fields };
}
