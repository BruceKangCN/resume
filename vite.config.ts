import { paraglideVitePlugin } from "@inlang/paraglide-js";
import UnoCSS from "@unocss/svelte-scoped/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    UnoCSS(),
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/lib/paraglide",
      strategy: ["url", "preferredLanguage", "baseLocale"],
      urlPatterns: [
        {
          pattern: "/:path(.*)?",
          localized: [
            ["en-US", "/en-US/:path(.*)?"],
            ["zh-CN", "/zh-CN/:path(.*)?"],
          ],
        },
      ],
    }),
    sveltekit(),
  ],
});
