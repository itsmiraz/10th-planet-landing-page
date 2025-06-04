import KidClassImg from "@/assets/images/kidClass.png";
import AnimatedText from "@/components/ui/animatedText";
import { Button } from "@/components/ui/buttons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const KidClass = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="mt-[200px] mb-[170px] font-jakarta px-[20px]"
    >
      <div className="flex lg:flex-row flex-col-reverse gap-[0px] xl:gap-[160px] justify-between bg-gradient-to-r from-[#12100E] to-[#171717] rounded-[16px] md:rounded-none mx-auto max-w-[1250px]">
        <div className="py-[48px] md:py-[69px] px-[20px] md:text-start text-center md:px-[67px]">
          <AnimatedText className="text-[32px] pb-[25px] font-bold ">
            <>{t("kidClassTitle")}</>
          </AnimatedText>
      <p className="text-[18px] md:text-[22px] max-w-[620px]">
            {t("kidClassDescription")}
          </p>
          <div className="flex md:flex-row flex-col mt-[20px] items-center md:items-center gap-6">
            <div className="flex items-center gap-x-2 ">
              <h2 className="text-[56px] leading-[110%] items-center font-bold">
                {t("price")}
              </h2>
              <p
                className="text-[18px] leading-[100%]"
                dangerouslySetInnerHTML={{ __html: t("perMonth") }}
              />
            </div>
            <Button
              className="w-full md:w-fit"
              variant="solid"
              onClick={() =>
                window.open(
                  "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F6F266TGA3GD2",
                  "_blank"
                )
              }
            >
              {t("subscribe")}
            </Button>
          </div>
        </div>
        <div className="px-[22px] overflow-hidden lg:pt-0 lg:px-0 pt-[44px]">
          <img
            className="h-full w-full object-cover lg:rounded-none rounded-[24px]"
            src={KidClassImg}
            alt=""
          />
        </div>
      </div>
    </motion.div>
  );
};

export default KidClass;
