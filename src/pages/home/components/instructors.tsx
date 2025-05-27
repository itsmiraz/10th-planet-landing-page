import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BlackBeltIcon from "@/assets/icons/blackBeltIcon.svg";
import BrownBeltIcon from "@/assets/icons/brownBeltIcon.svg";
import TitleIcon from "@/assets/icons/title.svg";
import instructor1 from "@/assets/images/instructor1.png";
import instructor2 from "@/assets/images/instructor2.png";

// Assuming you use react-i18next or a similar i18n hook
import { useTranslation } from "react-i18next";

const Instructors = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { t } = useTranslation();

const instructors = t("instructors", { returnObjects: true }) as Array<{
  name: string;
  belt: string;
  description: string;
}>;

  return (
    <motion.div
      id="instructors"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="pt-[109px] overflow-hidden font-jakarta"
    >
      <h1 className="text-[34px] md:text-[50px] uppercase pb-[27px] font-extrabold text-center leading-[100%]">
        {t("instructorsSectionTitle")}
      </h1>
      <div className="w-[96px] h-[8px] bg-[#F58215] mx-auto"></div>

      <div className="pt-[108px] space-y-[87px]">
        {instructors.map((instructor, idx) => (
          <div
            key={idx}
            className={`flex gap-10 md:flex-row flex-col px-[20px] mx-auto md:max-w-[1250px] gap-x-[71px] items-center justify-between`}
          >
            <div className="relative w-[252px] md:w-[336px] md:h-[300px]">
              <div className="absolute z-20 -top-8 -right-8">
                {idx === 0 ? <BlackBeltIcon /> : <BrownBeltIcon />}
              </div>
              <div className="w-[252px] h-[225px] mx-auto flex justify-center items-center md:w-[336px] md:h-[300px] relative overflow-hidden rounded-[24px]">
                <img
                  src={idx === 0 ? instructor1 : instructor2}
                  className="rounded-[24px] h-full object-cover w-full"
                  alt={instructor.name}
                />
              </div>
            </div>

            <div className="w-full md:w-fit">
              <div className="flex md:flex-row flex-col pb-[20px] justify-between items-center">
                <h2 className="text-[30px] md:text-[40px] uppercase leading-[100%] md:pb-0 pb-[30px] font-bold text-center md:text-start">
                  {instructor.name}
                </h2>
                <span className={`flex leading-[100%] items-center font-bold gap-x-2 text-[18px] md:text-[24px] px-[26px] py-2 rounded-[12px] ${
                  idx === 0 ? "bg-[#1B1B1B]" : "bg-[#744A30]"
                }`}>
                  <TitleIcon />
                  {instructor.belt}
                </span>
              </div>
              <p className="text-[16px] md:text-[22px] md:text-start text-center text-white leading-[142%]">
                {instructor.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Instructors;
