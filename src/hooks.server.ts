import type { Handle } from "@sveltejs/kit";
import { paraglideMiddleware } from "$lib/paraglide/server";

export const handle: Handle = ({ event, resolve }) => {
    return paraglideMiddleware(event.request, ({ request, locale }) => {
        event.request = request;

        return resolve(event, {
            transformPageChunk: ({ html }) => {
                html = html.replace("%paraglide.lang%", locale);
                return html;
            }
        });
    });
};
