import instructor1 from "@/assets/images/instructor1.png";
import instructor2 from "@/assets/images/instructor2.png";
import BlackBeltIcon from "@/assets/icons/blackBeltIcon.svg";
import BrownBeltIcon from "@/assets/icons/brownBeltIcon.svg";
import TitleIcon from "@/assets/icons/title.svg";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

const Instructors = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      id="instructors"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="pt-[109px] overflow-hidden font-jakarta"
    >
      {" "}
      <h1 className="text-[34px] md:text-[50px] uppercase  pb-[27px] font-extrabold text-center leading-[100%]">
        OUR INSTRUCTORS
      </h1>
      <div className="w-[96px] h-[8px]  bg-[#F58215] mx-auto"></div>
      <div className="pt-[108px] space-y-[87px]">
        {/* First instructor */}
        <div className="flex gap-10 md:flex-row flex-col px-[20px] mx-auto   md:max-w-[1250px] gap-x-[71px] items-center justify-between">
          <div className="relative w-[252px] md:w-[336px] md:h-[300px]">
            <div className="absolute z-20 -top-8 -right-8">
              <BlackBeltIcon />
            </div>
            <div className="w-[252px]  h-[225px] mx-auto flex justify-center items-center md:w-[336px] md:h-[300px]  relative overflow-hidden  rounded-[24px]">
              <img
                src={instructor1}
                className="rounded-[24px]  h-full object-cover w-full "
                alt=""
              />
            </div>
          </div>
          <div className="w-full  md:w-fit">
            <div className="flex md:flex-row flex-col pb-[20px] justify-between items-center">
              <h2 className="text-[30px] md:text-start text-center md:text-[40px]  uppercase leading-[100%] md:pb-0 pb-[30px] font-bold">
                Profess <br className="md:hidden block" /> or Louis Ho
              </h2>
              <span className="flex leading-[100%] font-bold gap-x-2  text-[18px] items-center md:text-[24px] bg-[#1B1B1B] px-[26px] py-2 rounded-[12px]">
                <TitleIcon />
                Black Belt
              </span>
            </div>
            <p className="text-[16px] md:text-[22px] md:text-start text-center text-white leading-[142%]">
            Louis Ho is the head instructor at 10th Planet Jiu Jitsu Montreal. He is a three time Canadian Jiu Jitsu Champion. He is a U.S. National Jiu Jitsu Champion. He is an FFC Submission of the Night Superfight Champion. Louis is one of Eddie Bravo’s first black belts and holds the distinction of being the first 10th Planet Jiu Jitsu Black Belt in Canada.
            </p>
          </div>
        </div>
        {/* 2nd Instrucure */}
        <div className="flex mx-auto md:flex-row flex-col md:max-w-[1250px] gap-10 px-[20px] gap-x-[71px] items-center justify-between">
          <div className="relative w-[252px] md:w-[336px] md:h-[300px]">
            <div className="absolute z-20 -top-8 -right-8">
              <BrownBeltIcon />
            </div>
            <div className="w-[252px]  h-[225px] mx-auto flex justify-center items-center md:w-[336px] md:h-[300px]  relative overflow-hidden  rounded-[24px]">
              <img
                src={instructor2}
                className="rounded-[24px] h-full object-cover w-full "
                alt=""
              />
            </div>
          </div>
          <div className="w-fit">
            <div className="flex md:flex-row flex-col pb-[20px] justify-between items-center">
              <h2 className="text-[30px] md:text-[40px] uppercase leading-[100%]  md:pb-0 pb-[30px] font-bold">
                Luca
              </h2>
              <span className="flex leading-[100%] items-center font-bold gap-x-2 text-[18px] md:text-[24px] bg-[#744A30] px-[26px] py-2 rounded-[12px]">
                <TitleIcon />
                Black Belt
              </span>
            </div>
            <p className="text-[16px] md:text-start text-center md:text-[22px] text-white leading-[142%]">
              Louis Ho is the head instructor at 10th Planet Jiu Jitsu Montreal.
              He is a three time Canadian Jiu Jitsu Champion. He is a U.S.
              National Jiu Jitsu Champion. He is an FFC Submission of the Night
              Superfight Champion. Louis is one of Eddie Bravo’s first black
              belts and holds the distinction of being the first 10th Planet Jiu
              Jitsu Black Belt in Canada.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </motion.div>
  );
};

export default Instructors;
