import KidClassImg from "@/assets/images/kidClass.png";
import AnimatedText from "@/components/ui/animatedText";
import { Button } from "@/components/ui/buttons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const KidClass = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="flex md:flex-row  px-[15px] md:px-0 rounded-[16px] md:rounded-none flex-col-reverse mt-[200px] mb-[170px] font-jakarta gap-[0px] md:gap-[160px] justify-between  bg-gradient-to-r from-[#12100E] to-[#171717]"
    >
      <div className="py-[48px] md:py-[69px] px-[20px] md:text-start text-center md:px-[67px]">
        <AnimatedText className="text-[32px] pb-[25px] font-bold ">
          <>Join The Kid Class</>
        </AnimatedText>
        <p className="text-[18px] md:text-[22px] max-w-[620px]">
          Lorem ipsum dolor sit amet consectetur. Euismod id tellus quis
          vulputate in fermentum lacinia pharetra aliquet. Nullam eget lacus est
          arcu scelerisque pharetra. Sed enim phasellus scelerisque
        </p>
        <div className="flex md:flex-row flex-col  mt-[20px] items-center  md:items-center gap-6">
          <div className="flex items-center gap-x-2 ">
            <h2 className="text-[56px] leading-[110%] items-center font-bold">
              110$
            </h2>
            <p className="text-[18px] leading-[100%]">
              {" "}
              Per <br /> Month
            </p>
          </div>
          {/* <button className="bg-[#F58215] md:w-fit w-full h-fit leading-[100%] px-8 py-[14px] rounded-[9px] text-[#FFFFFF] text-[22px]">
            Subscribe
          </button> */}
          <Button variant="solid">

            Subscribe
          </Button>
        
        </div>
      </div>
      <div className="px-[22px] md:pt-0 md:px-0 pt-[44px]">
        <img className="h-full md:rounded-none rounded-[24px]" src={KidClassImg} alt="" />
      </div>
    </motion.div>
  );
};

export default KidClass;
