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
      heroSubtitle: "Best Source of No Gi Jiu Jitsu in Montreal",
      subscribe: "Subscribe",
      schedule: "Schedule",
      scheduleLink: "/horaire3.jpg",
      programTitle: "Our Program",
      programDescription:
        "At 10th Planet Montreal, we bring a modern, no-gi approach to Brazilian Jiu Jitsu, rooted<br/> in the innovative system developed by <strong>Eddie Bravo</strong>. Our academy is built for practitioners of <br/>all levels, from beginners looking to start their Jiu Jitsu journey to experienced grapplers <br/>seeking to refine their skills in a competitive environment.",
      events: {
        noGi: {
          title: "No Gi",
          desc: "Train without the gi in a system focused on control, submissions, and real-world grappling. Build core skills through drills, techniques, and live training for all levels.",
        },
        legLocks: {
          title: "Leg Locks",
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
        "Help your kid build confidence, discipline, and athleticism in a fun and structured no-gi environment. Our kid's program teaches real Jiu Jitsu skills through movement, games, and teamwork.",
      price: "110$",
      perMonth: "Per<br/>Month",
      instructorsSectionTitle: "OUR INSTRUCTORS",
      instructors: [
        {
          name: "Professor Louis Ho",
          belt: "Black Belt",
          description:
            "Louis Ho, AKA \"Street\", is the Head Instructor at 10th Planet Montreal. He holds a 3rd degree Black Belt directly under legendary Jiu Jitsu practitioner, Eddie Bravo. He also holds the distinction of being the first 10th Planet Jiu Jitsu Black Belt in Canada. He also holds a Black Belt in Brazilian Jiu Jitsu under ADCC and World Champion, Pablo Popovitch. Louis is a seasoned competitor and a pioneer in the Montreal grappling scene. What sets Louis apart from many senior instructors from other academies is that he will roll with ALL HIS STUDENTS day in and day out.",
        },
        {
          name: "Luca Martone-Martel",
          belt: "Black Belt",
          description:
            "Luca Martone-Martel began his Jiu-Jitsu journey in 2019 and has been training at 10th Planet Montreal ever since. He quickly built an impressive competitive record, highlighted by a bronze medal at the IBJJF European Championship and a silver medal at the IBJJF World Championship. In 2025, Luca earned his black belt, making him one of the top rising talents to emerge from Montreal. Ever since 2022, he's been head coach for our kids program here at 10th Planet Montreal.",
        },
        {
          name: "Marky",
          belt: "Black Belt",
          description:
            "Marc has been training since 2014, and has been a black belt under Louis Ho since 2024. As a teacher, he likes to focus on fundamental concepts that can be widely applied and understood. As a training partner, Marc has been described as a smooth roll, but he'll definitely arm bar you if you are not careful.",
        },
        {
          name: "Chris",
          belt: "Brown Belt",
          description:
            "Chris Camacho leads the Thursday Fundamentals class at 10th Planet Montreal, where his teaching focuses on the \"how\" and \"why\" behind each technique. Known for making new movements easy to digest, Chris helps students build a strong foundation rooted in efficiency and long-term success. His instruction emphasizes timeless fundamentals that continue to deliver at every level of the game.",
        },
        {
          name: "Fyl",
          belt: "Brown Belt",
          description:
            "Fyl is a brown belt at 10th Planet Montreal known for his balanced game that seamlessly transitions from standing to ground. His style is deeply rooted in technical precision, favoring a repertoire designed for smaller grapplers and constantly refined to reflect the latest meta shifts. Fyl has a gift for simplifying complex concepts, making him an exceptional guide for newer students. Passionate about the art behind the techniques, he focuses on high-efficiency movements that work against larger opponents.",
        },
        {
          name: "Kamran",
          belt: "Brown Belt",
          description:
            "Kamran, a brown belt under Louis Ho, leads a constraint-led Jiu Jitsu class every Sunday. With an academic background and a passion for innovative teaching methods, he offers a once per week all encompassing class—covering everything from stand-up to ground techniques. Kamran is committed to his students' growth, always available to support their technical development and deepen their understanding of the art.",
        },
      ],

      galleryTitle: "GALLERY",
      galleryDescription:
        'Take a look inside our world. From training sessions to competitions, our <br class="lg:block hidden" /> gallery highlights the energy, focus, and community of 10th Planet Montreal.',
      contact: {
        title: "Contact Us",
        form: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          message: "Message",
          send: "Send",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Something went wrong. Please try again later.",
          errors: {
            firstName: "First name is required.",
            lastName: "Last name is required.",
            email: {
              required: "Email is required.",
              invalid: "Email is invalid."
            },
            message: "Message is required."
          }
        },
        info: {
          email: "Email",
          address: "Address",
          phone: "Phone"
        }
      }
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
      heroSubtitle: "La source #1 de Jiu Jitsu No Gi à Montréal",
      subscribe: "S'abonner",
      schedule: "Horaire",
      scheduleLink: "/horaire3fr.jpg",
      programTitle: "Notre Programme",
      programDescription:
        "Chez 10th Planet Montréal, nous adoptons une approche moderne du Jiu Jitsu brésilien No Gi, <br/>ancrée dans le système innovant développé par <strong>Eddie Bravo</strong>. Notre académie est conçue pour les <br/>pratiquants de tous niveaux, des débutants qui commencent leur parcours aux grapplers expérimentés <br/>cherchant à perfectionner leurs compétences dans un environnement compétitif.",
      events: {
        noGi: {
          title: "No Gi",
          desc: "Entraînez-vous No Gi avec un système axé sur le contrôle, les soumissions et le grappling réel. Développez des compétences essentielles grâce aux exercices, techniques et entraînements en direct pour tous les niveaux.",
        },
        legLocks: {
          title: "Clés de Jambes",
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
          "Rejoignez notre équipe et entraînez-vous dans l'un des systèmes no-gi les plus progressifs au monde. Que vous soyez débutant ou grappler expérimenté, notre abonnement mensuel vous donne un accès complet à tous les cours.",
        perMonth: "Par<br/>mois",
      },
      kidClassTitle: "Rejoignez La Classe Enfant",
      kidClassDescription:
        "Aidez votre enfant à développer confiance, discipline et athlétisme dans un environnement No Gi amusant et structuré. Notre programme pour enfant enseigne de véritables compétences en Jiu Jitsu à travers le mouvement, les jeux et le travail d'équipe.",
      price: "110$",
      perMonth: "Par<br/>mois",
      instructorsSectionTitle: "NOS INSTRUCTEURS",
      instructors: [
        {
          name: "Professeur Louis Ho",
          belt: "Ceinture Noire",
          description:
            "Louis Ho, alias \"Street\", est l'instructeur principal de 10th Planet Montréal. Il détient une ceinture noire 3e degré directement sous la direction du légendaire pratiquant de Jiu Jitsu, Eddie Bravo. Il a également la distinction d'être la première ceinture noire 10th Planet Jiu Jitsu au Canada. Il détient également une ceinture noire en Jiu Jitsu brésilien sous la direction du champion ADCC et mondial, Pablo Popovitch. Louis est un compétiteur chevronné et un pionnier de la scène du grappling montréalaise. Ce qui distingue Louis de nombreux instructeurs seniors d'autres académies, c'est qu'il s'entraîne avec TOUS SES ÉLÈVES jour après jour.",
        },
        {
          name: "Luca Martone-Martel",
          belt: "Ceinture Noire",
          description:
            "Luca Martone-Martel a commencé son parcours en Jiu Jitsu en 2019 et s'entraîne depuis à 10th Planet Montréal. Il a rapidement bâti un palmarès compétitif impressionnant, marqué par une médaille de bronze aux Championnats d'Europe IBJJF et une médaille d'argent aux Championnats du Monde IBJJF. En 2025, Luca a obtenu sa ceinture noire, devenant ainsi l'une des meilleures promesses montantes à émerger de Montréal. Depuis 2022, il est l'entraîneur principal de notre programme pour enfants ici à 10th Planet Montréal.",
        },
        {
          name: "Marky",
          belt: "Ceinture Noire",
          description:
            "Marc s'entraîne depuis 2014 et est ceinture noire sous Louis Ho depuis 2024. En tant qu'enseignant, il aime se concentrer sur les concepts fondamentaux qui peuvent être largement appliqués et compris. En tant que partenaire d'entraînement, Marc est décrit comme un rouleur fluide, mais il vous fera certainement une clé de bras si vous n'êtes pas attentif.",
        },
        {
          name: "Chris",
          belt: "Ceinture Brun",
          description:
            "Chris Camacho dirige le cours des fondamentaux du jeudi à 10th Planet Montréal, où son enseignement se concentre sur le \"comment\" et le \"pourquoi\" derrière chaque technique. Reconnu pour rendre les nouveaux mouvements faciles à assimiler, Chris aide les étudiants à construire une base solide ancrée dans l'efficacité et le succès à long terme. Son instruction met l'accent sur les fondamentaux intemporels qui continuent de porter leurs fruits à tous les niveaux du jeu.",
        },
        {
          name: "Fyl",
          belt: "Ceinture Brun",
          description:
            "Fyl est une ceinture brun à 10th Planet Montréal, reconnu pour son jeu équilibré qui passe harmonieusement du combat debout au sol. Son style est profondément ancré dans la précision technique, privilégiant un répertoire conçu pour les grapplers plus petits et constamment affiné pour refléter les dernières évolutions du meta. Fyl a un don pour simplifier les concepts complexes, ce qui en fait un guide exceptionnel pour les nouveaux étudiants. Passionné par l'art derrière les techniques, il se concentre sur les mouvements à haute efficacité qui fonctionnent contre des adversaires plus grands.",
        },
        {
          name: "Kamran",
          belt: "Ceinture Brun",
          description:
            "Kamran, ceinture brun sous Louis Ho, dirige un cours de Jiu Jitsu basé sur les contraintes chaque dimanche. Avec une formation académique et une passion pour les méthodes d'enseignement innovantes, il propose un cours hebdomadaire complet—couvrant tout, des techniques debout aux techniques au sol. Kamran est engagé dans la croissance de ses étudiants, toujours disponible pour soutenir leur développement technique et approfondir leur compréhension de l'art.",
        },
      ],
      galleryTitle: "GALERIE",
      galleryDescription:
        "Découvrez notre univers. Des séances d'entraînement aux compétitions, notre <br class=\"md:block hidden\" /> galerie met en lumière l'énergie, la concentration et la communauté de 10th Planet Montréal.",
      contact: {
        title: "Contactez-nous",
        form: {
          firstName: "Prénom",
          lastName: "Nom",
          email: "Courriel",
          message: "Message",
          send: "Envoyer",
          sending: "Envoi en cours...",
          success: "Message envoyé avec succès !",
          error: "Une erreur s'est produite. Veuillez réessayer plus tard.",
          errors: {
            firstName: "Le prénom est requis.",
            lastName: "Le nom est requis.",
            email: {
              required: "Le courriel est requis.",
              invalid: "Le courriel est invalide."
            },
            message: "Le message est requis."
          }
        },
        info: {
          email: "Courriel",
          address: "Adresse",
          phone: "Téléphone"
        }
      }
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
