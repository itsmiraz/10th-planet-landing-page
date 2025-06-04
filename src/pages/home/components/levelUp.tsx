import React from "react";
import PoweredByPaypal from "@/assets/images/poweredByPaypal.png";
import PoweredByPaypal2 from "@/assets/images/Powered-By-PayPal-Logo.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/buttons";
import { Trans, useTranslation } from "react-i18next";
const LevelUp = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { t } = useTranslation();
  return (
    <div
      id="about"
      ref={ref}
      className="pt-[70px] md:pt-[15px] px-[20px] font-jakarta pb-[20px]"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#191919] w-full md:max-w-[1308px] mx-auto gap-[21px] md:gap-20 flex md:flex-row flex-col justify-between items-start md:items-end rounded-[24px] px-[20px] py-[40px] md:p-[50px]"
      >
        <div className="md:text-start text-center w-full">
          <h2 className="text-[24px] md:text-[36px] font-semibold leading-[100%]">
            {t("levelUp.title")}
          </h2>
          <p className="text-[16px] md:text-[22px] py-[18px] md:py-[8px] lg:max-w-[805px]">
            <Trans i18nKey="levelUp.description" components={{ br: <br className="lg:block hidden" /> }} />
          </p>
          <div className="flex flex-wrap  justify-center md:justify-start items-center gap-6">
            <div className="flex items-center gap-x-2 ">
              <h2 className="text-[56px] leading-[110%] items-center font-bold">
                130$
              </h2>
              <p className="text-[18px] text-start leading-[100%]">
                {" "}
                <Trans i18nKey="levelUp.perMonth" components={{ br: <br /> }} />
              </p>
            </div>

            <Button 
              className="w-full md:w-fit" 
              variant="solid"
              onClick={() => window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RKFTX7UJMLXQ8", "_blank")}
            >
              {t("subscribe")}
            </Button>
          </div>
        </div>
        <div className="p-4 w-full md:w-fit  rounded-[10px] bg-white flex  justify-center md:justify-end items-center">
          <img
            className="md:w-[300px] bg-red-white w-[121px]"
            src={PoweredByPaypal2}
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LevelUp;
