import { defineConfig, presetWind4 } from "unocss";

export default defineConfig({
  presets: [presetWind4()],
  rules: [
    [
      "rsm-layout-a4",
      {
        width: "210mm",
        padding: "10mm",
      },
    ],
    [
      "rsm-layout-photo",
      {
        width: "35mm",
        height: "45mm",
        "object-fit": "cover",
      },
    ],
  ],
  shortcuts: {
    "rsm-card-cell": "flex items-center",
    "rsm-card-label": "font-bold text-base whitespace-pre",
  },
});
