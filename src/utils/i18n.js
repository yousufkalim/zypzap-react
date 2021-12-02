import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          // header
          "Become Content Creator": "Become Content Creator",
          "Get Early Access": "Get Early Access",
          // landing page
          "Welcome to the": "Welcome to the",
          "Gamer's eLearning 3.0": "Gamer's eLearning 3.0",
          "Join our Online Courses community and reach your goal":
            "Join our Online Courses community and reach your goal",
          "Early access to courses": "Early access to courses",
          "Become content creator": "Become content creator",
          "What we offer": "What we offer",
          "I am Gamer": "I am Gamer",
          "It is a long established fact that a reader will be distracted by the readable content of a page this is whe":
            "It is a long established fact that a reader will be distracted by the readable content of a page this is whe",
          "I AM Content Creator": "I AM Content Creator",
          "It is a long established fact that a reader will be distracted by the readable content of a page this is whe":
            "It is a long established fact that a reader will be distracted by the readable content of a page this is whe",
          // blogs on landing page
          "Our Blog": "Our Blog",
          Loading: "Loading",
          "View all": "View all",
        },
      },
      fr: {
        translations: {
          // header
          "Become Content Creator": "Devenir un créateur de contenu",
          "Get Early Access": "S'inscrire",
          // landing page
          "Welcome to the": "Bienvenue dans le",
          "Gamer's eLearning 3.0": "eLearning3.0 dédié au gaming",
          "Join our Online Courses community and reach your goal":
            "Inscrivez vous dés maintenant et beneficiez gratuitement de toutes les fonctionnalités Passtotrip pendant un mois !",
          "Early access to courses": "S'inscrire",
          "Become content creator": "Devenir un créateur de contenu",
          "What we offer": "Découvrez nos offres",
          "I am Gamer": "Je suis un Gamer",
          "It is a long established fact that a reader will be distracted by the readable content of a page this is whe":
            "Suivez les cours de votre choix et commencez à scorer",
          "I AM Content Creator": "Je suis un créateur de contenu",
          "It is a long established fact that a reader will be distracted by the readable content of a page this is whe":
            "Créez vos cours et monetisez votre expertise",
          // blogs on landing page
          "Our Blog": "Découvrez notre blog",
          Loading: "Chargement en cours",
          "View all": "Voir plus",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
