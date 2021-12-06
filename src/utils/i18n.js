import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ["fr", "en"],
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
          "Email address": "Email address",
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
          // User Landing Page
          "Welcome to the Gamer's eLearning 3.0":
            "Welcome to the Gamer's eLearning 3.0",
          "Join our Online Courses community and become a pro game":
            "Join our Online Courses community and become a pro game",
          "Win your games": "Win your games",
          "Be part of our community": "Be part of our community",
          "Evaluation of courses": "Evaluation of courses",
          "Evaluate the courses for continous improvement of the creators":
            "Evaluate the courses for continous improvement of the creators",
          "Community Development": "Community Development",
          "Participates in the growth of the community and its economy":
            "Participates in the growth of the community and its economy",
          "Collaboration Between Users": "Collaboration Between Users",
          "Informez les créateurs de contenu des meilleurs sujets à traiter":
            "Informez les créateurs de contenu des meilleurs sujets à traiter",
          // content landing
          "Teach what you are": "Teach what you are",
          "good at": "good at",
          "Its time to make your hobbie an asset":
            "Its time to make your hobbie an asset",
          "Get Started": "Get Started",
          "Content Creators in our Community":
            "Content Creators in our Community",
          "Serve The Community By Creating Relevont Video Content":
            "Serve The Community By Creating Relevont Video Content",
          "Be A Pillor In The Progress Of Gamers At Their Own Pace":
            "Be A Pillor In The Progress Of Gamers At Their Own Pace",
          "Listening To The Community About Their Needs":
            "Listening To The Community About Their Needs",
          "Participate In The Moderation And Validtion Of Content":
            "Participate In The Moderation And Validtion Of Content",
          "Our Partners": "Our Partners",
          "Become our partners biggest ambassador":
            "Become our partners biggest ambassador",
          "Adantages Passtotrip": "Adantages Passtotrip",
          "The first gaming online course creation platform  open to all":
            "The first gaming online course creation platform  open to all",
          "Content Creators are free to cover any game":
            "Content Creators are free to cover any game",
          "The monetization for each content created is immediate and easy to understand":
            "The monetization for each content created is immediate and easy to understand",
          "Each user has the opportunity to acquire a real expert status within the community":
            "Each user has the opportunity to acquire a real expert status within the community",
          "Monitization Process": "Monitization Process",
          "Prepare a Course": "Prepare a Course",
          "The creator prepares and registers his cours":
            "The creator prepares and registers his cours",
          "Submit Evaluation": "Submit Evaluation",
          "He submits the course for evaluation":
            "He submits the course for evaluation",
          "Get Validated": "Get Validated",
          "The course is validated by the evaluator":
            "The course is validated by the evaluator",
          Publish: "Publish",
          "Sign up here": "Sign up here",
          Email: "Email",
          "Register as a beta tester": "Register as a beta tester",
          "I agree passtotrip": "I agree passtotrip",
          "Privacy Policy": "Privacy Policy",
          "and agree to receive upcoming passtotrip updates":
            "and agree to receive upcoming passtotrip updates",
          Subscribe: "Subscribe",
          // partner landing
          "Partner with Us": "Partner with Us",
          "Here what we can create together":
            "Here what we can create together",
          "Become a Partner": "Become a Partner",
          "Many ways to become a partner": "Many ways to become a partner",
          Integration: "Integration",
          "Integrate our catalog of partner offers available to subscribers":
            "Integrate our catalog of partner offers available to subscribers",
          "Co- Marketing Compaigns": "Co- Marketing Compaigns",
          "Become an advertiser by placing advertisements in the content":
            "Become an advertiser by placing advertisements in the content",
          "Live Events": "Live Events",
          "Make your future game known to our audience":
            "Make your future game known to our audience",
          "Enjoy Gamers Hearing": "Enjoy Gamers Hearing",
          "Enjoy a gamer’s hearing and communicate with them":
            "Enjoy a gamer’s hearing and communicate with them",
          "Acquire New Status": "Acquire New Status",
          "Acquire the status of an active player in the gaming market":
            "Acquire the status of an active player in the gaming market",
          "Test your games": "Test your games",
          "be able to test your game with a community of experts":
            "be able to test your game with a community of experts",
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
          "Email address": "Adresse email",
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
          // User Landing Page
          "Welcome to the Gamer's eLearning 3.0":
            "Bienvenue dans le eLearning3.0 dédié au gaming",
          "Join our Online Courses community and become a pro game":
            "Rejoignez notre communauté de cours en ligne et devenez un joueur pro !",
          "Win your games": "Remportez vos parties",
          "Be part of our community": "Rejoignez la communauté Passtotrip",
          "Evaluation of courses": "Évaluation des cours",
          "Evaluate the courses for continous improvement of the creators":
            "Donnez votre avis sur la qualité de chaque cours suivi",
          "Community Development": "Développement de la communauté",
          "Participates in the growth of the community and its economy":
            "Participez à la croissance et la rémunération de la communauté",
          "Collaboration Between Users": "Collaboration entre utilisateurs",
          "Informez les créateurs de contenu des meilleurs sujets à traiter":
            "Informez les créateurs de contenu des meilleurs sujets à traiter",
          // content landing
          "Teach what you are": "Montrez ce que vous",
          "good at": "savez-faire !",
          "Its time to make your hobbie an asset":
            "Il est temps de faire de votre passion un atout !",
          "Get Started": "Nous rejoindre",
          "Content Creators in our Community":
            "Le role  d'un créateur de contenu",
          "Serve The Community By Creating Relevont Video Content":
            "Dynamiser la communauté en proposant un contenu pertinent",
          "Be A Pillor In The Progress Of Gamers At Their Own Pace":
            "Devenir le meilleur atout des Gamers dans leur progression personnelle",
          "Listening To The Community About Their Needs":
            "Rester à l'écoute des sujets attendus par la communauté",
          "Participate In The Moderation And Validtion Of Content":
            "Prendre part à la modération et à la validation du contenu",
          "Our Partners": "Nos Partenaires",
          "Become our partners biggest ambassador":
            "Devenez le meilleur ambassadeur de nos partenaires !",
          "Adantages Passtotrip": "Remportez vos parties",
          "The first gaming online course creation platform  open to all":
            "Creation de cours en ligne ouverte à tous",
          "Content Creators are free to cover any game":
            "Liberté de sujet ou de franchise de jeu abordés",
          "The monetization for each content created is immediate and easy to understand":
            "Monetisation immediate et transparente",
          "Each user has the opportunity to acquire a real expert status within the community":
            "Acquisition d'un statut d'expert ",
          "Monitization Process": "Acquisition d'un statut d'expert ",
          "Prepare a Course": "Préparation du cours",
          "The creator prepares and registers his cours":
            "Le créateur est libre de traiter le sujet qu’il souhaite",
          "Submit Evaluation": "Evaluation puis validation",
          "He submits the course for evaluation":
            "Le contenu est moderé et validé par nos experts",
          "Get Validated": "Mise en ligne",
          "The course is validated by the evaluator":
            "Le créateur de contenu suit les performances de son activité",
          Publish: "Publier",
          "Sign up here": "Lancez-vous !",
          Email: "Adresse email",
          "Register as a beta tester": "S'inscrire comme bêta testeur",
          "I agree passtotrip": "je suis d'accord passtotrip",
          "Privacy Policy": "Politique de confidentialité",
          "and agree to receive upcoming passtotrip updates":
            "et acceptez de recevoir les prochaines mises à jour de passtotrip",
          Subscribe: "S’inscrire",
          // partner landing
          "Partner with Us": "Devenons partenaires",
          "Here what we can create together":
            "Voici ce que nous pouvons créer ensemble",
          "Become a Partner": "Devenir partenaire",
          "Many ways to become a partner": "Pourquoi devenir partenaire",
          Integration: "Intégration",
          "Integrate our catalog of partner offers available to subscribers":
            "Intégrez notre catalogue d’offres partenaires dédiées à nos abonnés",
          "Co- Marketing Compaigns": "Campagnes Marketing",
          "Become an advertiser by placing advertisements in the content":
            "Devenez un annonceur en positionnant votre produit dans nos contenus",
          "Live Events": "Partagez vos actualités",
          "Make your future game known to our audience":
            "Informez nos utilisateurs de vos prochaines actualités",
          "Enjoy Gamers Hearing": "Accédez à la communauté",
          "Enjoy a gamer’s hearing and communicate with them":
            "Interagissez avec les memebres de notre communauté de gamers",
          "Acquire New Status": "Renforcez votre notorieté",
          "Acquire the status of an active player in the gaming market":
            "Consolidez votre image auprés de la communauté de gamers",
          "Test your games": "Recrutez des bêta testeurs",
          "be able to test your game with a community of experts":
            "Soumettez vos jeux à notre communauté de gamers experts",
        },
      },
    },

    fallbackLng: "fr",
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
