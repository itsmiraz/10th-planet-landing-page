import backGroundImage from "@/assets/images/herobg.webp";
import Header from "@/components/ui/header";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/animatedText";
import { Button } from "@/components/ui/buttons";
import { useTranslation } from "react-i18next";
import logo from "@/assets/images/10plogo-2.png";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { t } = useTranslation();
  
  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url(${backGroundImage})` }}
      className="h-[600px]  lg:h-[800px] md:h-screen font-jakarta items-center bg-no-repeat bg-cover bg-center "
    >
      <Header />
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="bg-[#000000]/20 min-w-[280px] w-fit mt-[101px] md:mt-[91px] px-[20px] md:px-[40px] py-[8px] text-[16px] md:text-[22px] leading-[100%] mx-auto rounded-full text-center">
          {t("heroSubtitle")}
        </p>
        <div className="pt-[28px] pb-[50px] flex justify-center">
          <img 
            src={logo} 
            alt="10th Planet Montreal" 
            className="w-[350px] md:w-[500px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
          />
        </div>
        <div className="flex justify-center gap-x-4 items-center px-[20px] max-w-[600px] mx-auto">
          <Button 
            variant="solid" 
            onClick={() => window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RKFTX7UJMLXQ8", "_blank")}
          >
            {t("subscribe")}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.open(t("scheduleLink"), "_blank")}
          >
            {t("schedule")}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
