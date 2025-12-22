import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
  presets: [presetWind4()],
  shortcuts: {
    "resume-card-cell": "flex items-center",
    "resume-card-label": "font-bold text-base whitespace-pre",
  },
});
