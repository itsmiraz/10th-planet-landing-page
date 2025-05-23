import backGroundImage from "@/assets/images/herobg.webp";
import Header from "@/components/ui/header";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/animatedText";
const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url(${backGroundImage})` }}
      className="h-[800px] md:h-screen font-jakarta items-center bg-no-repeat bg-cover bg-center "
    >
      <Header />
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="bg-[#FFFFFF]/5 w-fit mt-[101px]  md:mt-[91px]  px-0 md:px-[40px] py-[8px] text-[16px] md:text-[22px] leading-[100%] mx-auto rounded-full text-center">
          Best Source of No-Gi Jiu Jitsu in Montreal
        </p>
        <AnimatedText className="text-center pt-[28px] pb-[50px] text-[36px] md:text-[52px] font-bold ">
          <>
            10th Planet Jiu-
            Jitsu <br className="hidden md:block " /> Montreal
          </>
        </AnimatedText>
        <div className="flex justify-center gap-x-4 items-center">
          <button className="bg-[#F58215] leading-[100%] text-[22px] px-[24px] py-[14px] rounded-[9px]">
            Subscribe
          </button>
          <button className="border border-white leading-[100%] text-[22px] px-[24px] py-[14px] rounded-[9px]">
            Schedule
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
