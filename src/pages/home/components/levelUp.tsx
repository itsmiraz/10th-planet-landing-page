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
        className="bg-[#191919] w-full md:max-w-[1308px] mx-auto gap-20 flex md:flex-row flex-col justify-between items-start md:items-end rounded-[24px] px-[20px] py-[40px] md:p-[50px]"
      >
        <div className=" w-full">
          <h2 className="text-[36px] font-semibold leading-[100%]">
            Ready to level up?
          </h2>
          <p className="text-lg md:text-[22px] py-[12px] md:py-[8px] md:max-w-[805px]">
            Lorem ipsum dolor sit amet consectetur. Euismod id tellus quis
            vulputate in fermentum lacinia pharetra aliquet. Nullam eget lacus
            est arcu scelerisque pharetra. Sed enim phasellus scelerisque ac
            ipsum vulputate.
          </p>
          <div className="flex flex-wrap  items-center gap-6">
            <div className="flex items-center gap-x-2 ">
              <h2 className="text-[56px] leading-[110%] items-center font-bold">
                130$
              </h2>
              <p className="text-[18px] leading-[100%]">
                {" "}
                Per <br /> Month
              </p>
            </div>
            <button className="bg-[#FFFFFF] h-fit leading-[100%] px-8 py-[14px] rounded-[9px] text-[#202020] text-[22px]">
              Subscribe
            </button>
          </div>
        </div>
        <img src={PoweredByPaypal} alt="" />
      </motion.div>
    </div>
  );
};

export default LevelUp;
