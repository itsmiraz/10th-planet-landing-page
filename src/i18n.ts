import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  ENG: {
    translation: {
      nav: {
        about: "About",
        program: "Program",
        instructors: "Instructors",
        gallery: "Gallery",
        contact: "Contact",
      },
      heroSubtitle: "Best Source of No-Gi Jiu Jitsu in Montreal",
      heroTitle: "10th Planet Jiu- Jitsu\nMontreal",
      subscribe: "Subscribe",
      schedule: "Schedule",
      programTitle: "Our Program",
      programDescription:
        "At 10th Planet Montreal, we bring a modern, no-gi approach to Brazilian Jiu-Jitsu, rooted<br/>in the innovative system developed by <strong>Eddie Bravo</strong>. Our academy is built for practitioners of<br/>all levels, from beginners looking to start their Jiu-Jitsu journey to experienced grapplers<br/>seeking to refine their skills in a competitive environment.",
      events: {
        noGi: {
          title: "No Gi",
          desc: "Train without the gi in a system focused on control, submissions, and real-world grappling. Build core skills through drills, techniques, and live training for all levels.",
        },
        legLocks: {
          title: "Advanced Leg Locks",
          desc: "Refine your lower-body game with leg locks, entries, and control systems. Learn to attack safely and effectively using modern submission tactics.",
        },
        openMat: {
          title: "Open Mat",
          desc: "Spar, drill, or flow roll at your own pace. Open mat lets you apply what you've learned, test new techniques, and gain valuable mat time with teammates.",
        },
      },
      levelUp: {
        title: "Ready to level up?",
        description:
          "Join our team and train under one of the most progressive no-gi systems in the world.Whether you're a beginner or a seasoned grappler, our monthly membership gives you full access to all classes.",
        perMonth: "Per<br/>Month",
      },
      kidClassTitle: "Join The Kid Class",
      kidClassDescription:
        "Help your child build confidence, discipline, and athleticism in a fun and structured no-gi environment. Our kid’s program teaches real Jiu-Jitsu skills through movement, games, and teamwork.",
      price: "110$",
      perMonth: "Per<br/>Month",
      instructorsSectionTitle: "OUR INSTRUCTORS",
      instructors: [
        {
          name: "Professor Louis Ho",
          belt: "Black Belt",
          description:
            "Louis Ho is the head instructor at 10th Planet Jiu Jitsu Montreal. He is a three-time Canadian Jiu Jitsu Champion, a U.S. National Jiu Jitsu Champion, and an FFC Submission of the Night Superfight Champion. Louis is one of Eddie Bravo’s first black belts and holds the distinction of being the first 10th Planet Jiu Jitsu Black Belt in Canada.",
        },
        {
          name: "Luca",
          belt: "Black Belt",
          description:
            "Luca is an experienced instructor at 10th Planet Jiu Jitsu Montreal, known for his technical expertise and dedication to teaching the next generation of grapplers.",
        },
      ],

      galleryTitle: "GALLERY",
      galleryDescription:
        'Take a look inside our world. From training sessions to competitions, our <br class="md:block hidden" /> gallery highlights the energy, focus, and community of 10th Planet Montreal.',
      ////
    },
  },
  FR: {
    translation: {
      nav: {
        about: "À propos",
        program: "Programme",
        instructors: "Instructeurs",
        gallery: "Galerie",
        contact: "Contact",
      },
      heroSubtitle: "La meilleure source de Jiu Jitsu No-Gi à Montréal",
      heroTitle: "10e Planète Jiu-Jitsu\nMontréal",
      subscribe: "S'abonner",
      schedule: "Planifier",
      programTitle: "Notre Programme",
      programDescription:
        "Chez 10th Planet Montréal, nous adoptons une approche moderne du Jiu-Jitsu brésilien sans kimono,<br/> ancrée dans le système innovant développé par <strong>Eddie Bravo</strong>.Notre académie est conçue pour les<br/> pratiquants de tous niveaux, des débutants qui commencent leur parcoursaux grapplers expérimentés <br/> cherchant à perfectionner leurs compétences dans un environnement compétitif.",
      events: {
        noGi: {
          title: "Sans Kimono",
          desc: "Entraînez-vous sans kimono avec un système axé sur le contrôle, les soumissions et le grappling réel. Développez des compétences essentielles grâce aux exercices, techniques et entraînements en direct pour tous les niveaux.",
        },
        legLocks: {
          title: "Clés de Jambes Avancées",
          desc: "Affinez votre jeu de jambes avec des clés, des entrées et des systèmes de contrôle. Apprenez à attaquer de manière sûre et efficace avec des techniques de soumission modernes.",
        },
        openMat: {
          title: "Open Mat",
          desc: "Sparring, drills ou flow roll à votre rythme. L'open mat vous permet d'appliquer ce que vous avez appris, tester de nouvelles techniques et accumuler du temps sur le tapis avec vos partenaires.",
        },
      },
      levelUp: {
        title: "Prêt à passer au niveau supérieur ?",
        description:
          "Rejoignez notre équipe et entraînez-vous dans l’un des systèmes no-gi les plus progressifs au monde. Que vous soyez débutant ou grappler expérimenté, notre abonnement mensuel vous donne un accès complet à tous les cours.",
        perMonth: "Par<br/>mois",
      },
      kidClassTitle: "Rejoignez La Classe Enfant",
      kidClassDescription:
        "Aidez votre enfant à développer confiance, discipline et athlétisme dans un environnement no-gi amusant et structuré. Notre programme pour enfants enseigne de véritables compétences en Jiu-Jitsu à travers le mouvement, les jeux et le travail d'équipe.",
      price: "110$",
      perMonth: "Par<br/>mois",
      instructorsSectionTitle: "NOS INSTRUCTEURS",
      instructors: [
        {
          name: "Professeur Louis Ho",
          belt: "Ceinture Noire",
          description:
            "Louis Ho est l'instructeur principal de 10th Planet Jiu Jitsu Montréal. Il est triple champion canadien de Jiu Jitsu, champion national américain de Jiu Jitsu et champion FFC Submission of the Night Superfight. Louis est l’un des premiers ceintures noires d’Eddie Bravo et détient la distinction d’être la première ceinture noire 10th Planet Jiu Jitsu au Canada.",
        },
        {
          name: "Luca",
          belt: "Ceinture Noire",
          description:
            "Luca est un instructeur expérimenté à 10th Planet Jiu Jitsu Montréal, reconnu pour son expertise technique et son dévouement à enseigner à la prochaine génération de grapplers.",
        },
      ],
      galleryTitle: "GALERIE",
      galleryDescription:
        "Découvrez notre univers. Des séances d'entraînement aux compétitions, notre <br class=\"md:block hidden\" /> galerie met en lumière l'énergie, la concentration et la communauté de 10th Planet Montréal.",
      ///
    },
  },
};

i18n
  .use(LanguageDetector) // detects browser language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "ENG",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
