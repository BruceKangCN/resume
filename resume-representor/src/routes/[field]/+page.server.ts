import { getLocale, type Locale } from "$lib/paraglide/runtime";
import { BACKEND_BASE_URL } from "$env/static/private";

// resume page should be non-intereactive
export const csr = false;

export async function load({ params, fetch }) {
    const lang = getLocale();

    const url = `${BACKEND_BASE_URL}/resume/${params.field}?lang=${lang}`;
    const resp = await fetch(url)
    const resumeWithoutBio: Omit<App.Resume, "bio"> = await resp.json()

    const bioResp = await fetch("/bio.json");
    const bioDict: Record<Locale, App.Bio> = await bioResp.json()
    const bio = bioDict[lang];

    const resume: App.Resume = { ...resumeWithoutBio, bio };

    return { resume };
}
