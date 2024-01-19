import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    // fallbackLng: "en",
    fallbackLng: "ja",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Edit and save to reload.",
            part2: "Learn React",
          },
        },
      },
      ja: {
        translation: {
          description: {
            part1: "編集やで",
            part2: "りあくとー",
          },
        },
      },
    },
  });

export default i18n;
