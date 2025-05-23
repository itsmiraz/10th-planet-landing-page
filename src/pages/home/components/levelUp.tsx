import React from "react";
import PoweredByPaypal from "@/assets/images/poweredByPaypal.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const LevelUp = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="pt-[150px] md:pt-[233px] px-[20px] font-jakarta pb-[20px]"
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
            Lorem ipsum dolor sit amet consectetur. Euismod id tellus quis
            vulputate in fermentum lacinia pharetra aliquet. Nullam eget lacus
            est arcu scelerisque pharetra. Sed enim phasellus scelerisque ac
            ipsum vulputate.
          </p>
          <div className="flex flex-wrap  justify-center md:justify-start items-center gap-6">
            <div className="flex justify-center items-center gap-x-2 ">
              <h2 className="text-[42px] md:text-[56px] leading-[110%] items-center font-bold">
                130$
              </h2>
              <p className="text-[13px] text-start md:text-[18px] leading-[100%]">
                {" "}
                Per <br /> Month
              </p>
            </div>
            <button className="bg-[#F58215] h-fit leading-[100%] px-8 py-[14px] rounded-[9px] text-[#fffff] w-full md:w-fit text-[22px]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="md:bg-transparent rounded-[10px] bg-white w-full flex  justify-center md:justify-end items-center">
          <img className="md:w-fit w-[121px]" src={PoweredByPaypal} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default LevelUp;
