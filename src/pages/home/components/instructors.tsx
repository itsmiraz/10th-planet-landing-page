import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BlackBeltIcon from "@/assets/icons/blackBeltIcon.svg";
import BrownBeltIcon from "@/assets/icons/brownBeltIcon.svg";
import TitleIcon from "@/assets/icons/title.svg?url";
import louis from "@/assets/images/louis.png";
import luca from "@/assets/images/luca.png";
import chris from "@/assets/images/chris.png";
import kamran from "@/assets/images/kamran.png";
import fyl from "@/assets/images/fyl.png";
import marky from "@/assets/images/marky.png";

// Assuming you use react-i18next or a similar i18n hook
import { useTranslation } from "react-i18next";

const Instructors = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });
  const { t } = useTranslation();

  const instructors = t("instructors", { returnObjects: true }) as Array<{
    name: string;
    belt: string;
    description: string;
  }>;

  const getInstructorImage = (name: string) => {
    if (name.includes("Louis")) return louis;
    if (name.includes("Luca")) return luca;
    if (name.includes("Chris")) return chris;
    if (name.includes("Kamran")) return kamran;
    if (name.includes("Fyl")) return fyl;
    if (name.includes("Marky") || name.includes("Marc")) return marky;
    return louis; // fallback
  };

  const formatDescription = (description: string, isLuca: boolean) => {
    if (isLuca) {
      return description
        .replace(
          "Jiu-Jitsu journey",
          '<span class="italic">Jiu-Jitsu journey</span>'
        )
        .replace(
          "10th Planet Montreal",
          '<span class="font-bold">10th Planet Montreal</span>'
        )
        .replace(
          "bronze medal at the IBJJF European Championship",
          '<span class="font-bold">bronze medal at the IBJJF European Championship</span>'
        )
        .replace(
          "silver medal at the IBJJF World Championship",
          '<span class="font-bold">silver medal at the IBJJF World Championship</span>'
        )
        .replace(
          "black belt",
          '<span class="font-bold">black belt</span>'
        )
        .replace(
          "head coach for our kids program",
          '<span class="font-bold">head coach for our kids program</span>'
        )
        .replace(
          "parcours en Jiu-Jitsu",
          '<span class="italic">parcours en Jiu-Jitsu</span>'
        )
        .replace(
          "10th Planet Montréal",
          '<span class="font-bold">10th Planet Montréal</span>'
        )
        .replace(
          "médaille de bronze aux Championnats d'Europe IBJJF",
          '<span class="font-bold">médaille de bronze aux Championnats d&apos;Europe IBJJF</span>'
        )
        .replace(
          "médaille d'argent aux Championnats du Monde IBJJF",
          '<span class="font-bold">médaille d&apos;argent aux Championnats du Monde IBJJF</span>'
        )
        .replace(
          "ceinture noire",
          '<span class="font-bold">ceinture noire</span>'
        )
        .replace(
          "entraîneur principal de notre programme pour enfants",
          '<span class="font-bold">entraîneur principal de notre programme pour enfants</span>'
        );
    } else if (description.includes("Chris Camacho")) {
      return description
        .replace(
          "Thursday Fundamentals class",
          '<span class="font-bold">Thursday Fundamentals class</span>'
        )
        .replace(
          "how",
          '<span class="italic">how</span>'
        )
        .replace(
          "why",
          '<span class="italic">why</span>'
        )
        .replace(
          "10th Planet Montreal",
          '<span class="font-bold">10th Planet Montreal</span>'
        )
        .replace(
          "cours des fondamentaux du jeudi",
          '<span class="font-bold">cours des fondamentaux du jeudi</span>'
        )
        .replace(
          "comment",
          '<span class="italic">comment</span>'
        )
        .replace(
          "pourquoi",
          '<span class="italic">pourquoi</span>'
        )
        .replace(
          "10th Planet Montréal",
          '<span class="font-bold">10th Planet Montréal</span>'
        );
    } else if (description.includes("Fyl")) {
      return description
        .replace(
          "balanced game",
          '<span class="italic">balanced game</span>'
        )
        .replace(
          "technical precision",
          '<span class="font-bold">technical precision</span>'
        )
        .replace(
          "smaller grapplers",
          '<span class="italic">smaller grapplers</span>'
        )
        .replace(
          "10th Planet Montreal",
          '<span class="font-bold">10th Planet Montreal</span>'
        )
        .replace(
          "jeu équilibré",
          '<span class="italic">jeu équilibré</span>'
        )
        .replace(
          "précision technique",
          '<span class="font-bold">précision technique</span>'
        )
        .replace(
          "grapplers plus petits",
          '<span class="italic">grapplers plus petits</span>'
        )
        .replace(
          "10th Planet Montréal",
          '<span class="font-bold">10th Planet Montréal</span>'
        );
    } else if (description.includes("Kamran")) {
      return description
        .replace(
          "constraint-led Jiu-Jitsu class",
          '<span class="font-bold">constraint-led Jiu-Jitsu class</span>'
        )
        .replace(
          "academic background",
          '<span class="italic">academic background</span>'
        )
        .replace(
          "innovative teaching methods",
          '<span class="font-bold">innovative teaching methods</span>'
        )
        .replace(
          "10th Planet Montreal",
          '<span class="font-bold">10th Planet Montreal</span>'
        )
        .replace(
          "cours de Jiu-Jitsu basé sur les contraintes",
          '<span class="font-bold">cours de Jiu-Jitsu basé sur les contraintes</span>'
        )
        .replace(
          "formation académique",
          '<span class="italic">formation académique</span>'
        )
        .replace(
          "méthodes d'enseignement innovantes",
          '<span class="font-bold">méthodes d&apos;enseignement innovantes</span>'
        )
        .replace(
          "10th Planet Montréal",
          '<span class="font-bold">10th Planet Montréal</span>'
        );
    } else if (description.includes("Marc")) {
      return description
        .replace(
          "training since 2014",
          '<span class="font-bold">training since 2014</span>'
        )
        .replace(
          "black belt under Louis Ho",
          '<span class="font-bold">black belt under Louis Ho</span>'
        )
        .replace(
          "fundamental concepts",
          '<span class="italic">fundamental concepts</span>'
        )
        .replace(
          "smooth roll",
          '<span class="italic">smooth roll</span>'
        )
        .replace(
          "s'entraîne depuis 2014",
          '<span class="font-bold">s&apos;entraîne depuis 2014</span>'
        )
        .replace(
          "ceinture noire sous Louis Ho",
          '<span class="font-bold">ceinture noire sous Louis Ho</span>'
        )
        .replace(
          "concepts fondamentaux",
          '<span class="italic">concepts fondamentaux</span>'
        )
        .replace(
          "rouleur fluide",
          '<span class="italic">rouleur fluide</span>'
        );
    } else {
      return description
        .replace(
          '"Street"',
          '<span class="italic">"Street"</span>'
        )
        .replace(
          "Eddie Bravo",
          '<span class="font-bold">Eddie Bravo</span>'
        )
        .replace(
          "Pablo Popovitch",
          '<span class="font-bold">Pablo Popovitch</span>'
        )
        .replace(
          "ALL HIS STUDENTS",
          '<span class="font-bold">ALL HIS STUDENTS</span>'
        )
        .replace(
          "TOUS SES ÉLÈVES",
          '<span class="font-bold">TOUS SES ÉLÈVES</span>'
        );
    }
  };

  const getBeltIcon = (name: string) => {
    if (name === "Fyl" || name === "Kamran" || name === "Chris") {
      return <BrownBeltIcon />;
    }
    return <BlackBeltIcon />;
  };

  const getBeltColor = (name: string) => {
    if (name === "Fyl" || name === "Kamran" || name === "Chris") {
      return "bg-[#744A30]";
    }
    return "bg-[#1B1B1B]";
  };

  return (
    <motion.div
      id="instructors"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="pt-[109px] font-jakarta"
    >
      <h1 className="text-[34px] md:text-[50px] uppercase pb-[27px] font-extrabold text-center leading-[100%]">
        {t("instructorsSectionTitle")}
      </h1>
      <div className="w-[96px] h-[8px] bg-[#F58215] mx-auto"></div>

      <div className="pt-[108px] space-y-[87px] px-[20px]">
        {instructors.map((instructor, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="flex gap-10 lg:flex-row flex-col mx-auto lg:max-w-[1250px] gap-x-[71px] items-center justify-between"
          >
            <div className="relative w-[252px] md:w-[336px] md:h-[300px]">
              <div className="absolute z-20 -top-8 -right-8">
                {getBeltIcon(instructor.name)}
              </div>
              <div className="w-[252px] h-[225px] mx-auto flex justify-center items-center md:w-[336px] md:h-[300px] relative overflow-hidden rounded-[24px]">
                <img
                  src={getInstructorImage(instructor.name)}
                  className="rounded-[24px] h-full object-cover w-full"
                  alt={instructor.name}
                />
              </div>
            </div>

            <div className="w-full lg:w-fit">
              <div className="flex lg:flex-row flex-col pb-[20px] justify-between items-center">
                <h2 className="text-[30px] lg:text-[40px] uppercase leading-[100%] lg:pb-0 pb-[30px] font-bold text-center lg:text-start">
                  {instructor.name}
                </h2>
                <div className={`flex leading-[100%] items-center font-bold gap-x-2 text-[18px] md:text-[24px] px-[26px] py-2 rounded-[12px] ${getBeltColor(instructor.name)}`}>
                  <img className="md:w-[31px] w-[24px]" src={TitleIcon} alt="" />
                  <p className="whitespace-nowrap">{instructor.belt}</p>
                </div>
              </div>
              <p 
                className="text-[16px] md:text-[22px] lg:text-start text-center text-white leading-[142%]"
                dangerouslySetInnerHTML={{ 
                  __html: formatDescription(instructor.description, instructor.name.includes("Luca"))
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Instructors;
