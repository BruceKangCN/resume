import { getLocale } from "$lib/paraglide/runtime";
import { loadFields } from "$lib/server/util.js";

export const load = async () => {
    const lang = getLocale();
    const fields = await loadFields(lang);

    return { fields };
};
