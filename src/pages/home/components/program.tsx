import GlowImg from "@/assets/images/red-glow.png";
import legImg from "@/assets/images/legLocks.png";
import noGiImg from "@/assets/images/noGi.png";
import openMatImg from "@/assets/images/openMat.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
const trainingEvents = [
  {
    title: "No Gi",
    description:
      "Train without the gi in a system focused on control, submissions, and real-world grappling. Build core skills through drills, techniques, and live training for all levels.",
    image: noGiImg,
  },
  {
    title: "Leg Locks",
    description:
      "Refine your lower-body game with leg locks, entries, and control systems. Learn to attack safely and effectively using modern submission tactics.",
    image: legImg,
  },
  {
    title: "Open Mat",
    description:
      "Spar, drill, or flow roll at your own pace. Open mat lets you apply what you've learned, test new techniques, and gain valuable mat time with teammates.",
    image: openMatImg,
  },
];
const Program = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -20% 0px",
  });
  const { t } = useTranslation();

  const trainingEvents = [
    {
      key: "noGi",
      image: noGiImg,
    },
    {
      key: "legLocks",
      image: legImg,
    },
    {
      key: "openMat",
      image: openMatImg,
    },
  ];

  return (
    <motion.div
      id="program"
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-[70px] md:pt-[195px] px-[20px] overflow-hidden relative pb-[117px] font-jakarta"
    >
      <h1 className="text-[34px] md:text-[50px] uppercase pb-[27px] font-extrabold text-center leading-[100%]">
        {t("programTitle")}
      </h1>
      <div className="w-[96px] h-[8px] bg-[#F58215] mx-auto"></div>

      <p className="text-[18px] md:text-[24px] text-center pt-[38px] leading-[146%] whitespace-pre-line">
        <Trans
          i18nKey="programDescription"
          components={{
            strong: <span className="font-bold" />,
            br: <br className="xl:block hidden" />,
          }}
        />
      </p>

      <div className="mt-[79px] justify-center flex flex-wrap md:flex-row flex-col gap-[36px]">
        {trainingEvents.map(({ key, image }, i) => (
          <motion.div
            key={key}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: i * 0.3, ease: "easeOut" }}
            className="rounded-[16px] max-w-[410px] py-[32px] md:py-[0px] h-fit md:h-[448px] px-[28px] md:px-[32px] font-jakarta flex flex-col justify-center items-center programCardBg"
          >
            <img className="w-[91px]" src={image} alt="" />
            <h1 className="text-[32px] text-center pt-[34px] pb-[15px] font-bold leading-[100%]">
              {t(`events.${key}.title`)}
            </h1>
            <p className="text-[16px] md:text-[20px] text-center">
              {t(`events.${key}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>

      <img
        src={GlowImg}
        className="absolute -left-[400px] top-1/4 transform -translate-y-1/2"
        alt=""
      />
      <img
        src={GlowImg}
        className="absolute -right-[400px] top-1/4 transform -translate-y-1/2"
        alt=""
      />
      <img
        src={GlowImg}
        className="absolute -left-[400px] -bottom-40 "
        alt=""
      />
      <img
        src={GlowImg}
        className="absolute -right-[400px]  -bottom-40  "
        alt=""
      />
    </motion.div>
  );
};

export default Program;
