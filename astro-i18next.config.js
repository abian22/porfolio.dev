import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadLocale(lng) {
  return JSON.parse(
    readFileSync(
      resolve(process.cwd(), "public/locales", lng, "translation.json"),
      "utf8"
    )
  );
}

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "es",
  locales: ["es", "en"],
  i18nextServerPlugins: {
    fsBackend: null,
  },
  i18nextServer: {
    resources: {
      es: { translation: loadLocale("es") },
      en: { translation: loadLocale("en") },
    },
  },
};
