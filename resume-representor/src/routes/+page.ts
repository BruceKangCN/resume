import { getLocale } from "$lib/paraglide/runtime";
import { PUBLIC_BACKEND_BASE_URL } from "$env/static/public";

export const load = async ({ fetch }) => {
    const lang = getLocale();
    const url = `${PUBLIC_BACKEND_BASE_URL}/fields?lang=${lang}`;
    const resp = await fetch(url);
    const fields: App.Field[] = await resp.json();

    return { fields };
}
