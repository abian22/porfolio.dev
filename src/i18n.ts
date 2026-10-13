import i18next from "i18next";
import en from "../public/locales/en/translation.json";
import es from "../public/locales/es/translation.json";

if (!i18next.isInitialized) {
  i18next.init({
    lng: "es",
    fallbackLng: "es",
    initImmediate: false,
    interpolation: { escapeValue: false },
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
  });
}

export default i18next;
export const t = i18next.t.bind(i18next);
export const changeLanguage = i18next.changeLanguage.bind(i18next);
