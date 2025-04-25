import { getLocale } from "$lib/paraglide/runtime";
import { getFieldNames } from "$lib/server/util.js";

export const load = async () => {
    const lang = getLocale();
    const fields = await getFieldNames(lang);

    return { fields };
};
