import { json } from "@sveltejs/kit";

// resume page should be non-intereactive
export const csr = false;

export async function load({ params, fetch }) {
    console.log({ params, fetch });

    return json({});
}
