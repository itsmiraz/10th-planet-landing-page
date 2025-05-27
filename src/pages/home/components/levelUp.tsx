import React from "react";
import PoweredByPaypal from "@/assets/images/poweredByPaypal.png";
import PoweredByPaypal2 from "@/assets/images/Powered-By-PayPal-Logo.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/buttons";
const LevelUp = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      id="about"
      ref={ref}
      className="pt-[100px] md:pt-[170px] px-[20px] font-jakarta pb-[20px]"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#191919] w-full md:max-w-[1308px] mx-auto gap-[21px] md:gap-20 flex md:flex-row flex-col justify-between items-start md:items-end rounded-[24px] px-[20px] py-[40px] md:p-[50px]"
      >
        <div className="md:text-start text-center w-full">
          <h2 className="text-[24px] md:text-[36px] font-semibold leading-[100%]">
            Ready to level up?
          </h2>
          <p className="text-[16px] md:text-[22px] py-[18px] md:py-[8px] md:max-w-[805px]">
          Join our team and train under one of the most progressive no-gi systems in the world. Whether you're a beginner or a seasoned grappler, our monthly membership gives you full access to all classes.
          </p>
          <div className="flex flex-wrap  justify-center md:justify-start items-center gap-6">
            <div className="flex items-center gap-x-2 ">
              <h2 className="text-[56px] leading-[110%] items-center font-bold">
                130$
              </h2>
              <p className="text-[18px] text-start leading-[100%]">
                {" "}
                Per <br /> Month
              </p>
            </div>
        
            <Button className="w-full md:w-fit" variant="solid">Subscribe</Button>
          </div>
        </div>
        <div className="p-4 w-full md:w-fit  rounded-[10px] bg-white flex  justify-center md:justify-end items-center">
          <img className="md:w-[300px] w-[121px]" src={PoweredByPaypal2} alt="" />
          {/* <img className="md:w-fit w-[121px] block md:hidden " src={PoweredByPaypal2} alt="" /> */}
        </div>
      </motion.div>
    </div>
  );
};

export default LevelUp;
