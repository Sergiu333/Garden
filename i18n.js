import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./src/locales/en.json";
import roTranslations from "./src/locales/ro.json";
import ruTranslations from "./src/locales/ru.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
            ro: {
                translation: roTranslations,
            },
            ru: {
                translation: ruTranslations,
            },
        },
        lng: "ro",
        fallbackLng: "ro",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
