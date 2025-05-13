import { defineConfig } from "unocss";
import presetWind4 from "@unocss/preset-wind4";

export default defineConfig({
    presets: [presetWind4()],
    shortcuts: {
        "resume-card-cell": "flex items-center",
        "resume-card-label": "font-bold text-base whitspace-pre",
    },
});
