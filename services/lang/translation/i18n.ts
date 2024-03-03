import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./pt.json";

export const defaultNS = "pt";

export const resources = {
  pt: { pt },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  defaultNS,
  lng: "pt",
  ns: ["pt"]
});

export default i18next;