import GlowImg from "@/assets/images/red-glow.png";
import legImg from "@/assets/images/legLocks.png";
import noGiImg from "@/assets/images/noGi.png";
import openMatImg from "@/assets/images/openMat.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const trainingEvents = [
  {
    title: "No Gi",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod id tellus quis vulputate in fermentum lacinia pharetra aliquet. Nullam eget lacus est arcu scelerisque pharetra.",
    image: noGiImg,
  },
  {
    title: "Advanced Leg Locks",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod id tellus quis vulputate in fermentum lacinia pharetra aliquet. Nullam eget lacus est arcu scelerisque pharetra.",
    image: legImg,
  },
  {
    title: "Open Mat",
    description:
      "Lorem ipsum dolor sit amet consectetur. Euismod id tellus quis vulputate in fermentum lacinia pharetra aliquet. Nullam eget lacus est arcu scelerisque pharetra.",
    image: openMatImg,
  },
];
const Program = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-[70px] md:pt-[195px] px-[20px] overflow-hidden relative pb-[117px] font-jakarta"
    >
      <h1 className="text-[34px] md:text-[50px] uppercase  pb-[27px] font-extrabold text-center leading-[100%]">
        Our Program
      </h1>
      <div className="w-[96px] h-[8px]  bg-[#F58215] mx-auto"></div>
      <p className="text-[18px] md:text-[24px] text-center pt-[38px] leading-[146%]">
        At 10th Planet Montreal, we bring a modern, no-gi approach to Brazilian
        Jiu-Jitsu, rooted <br className="md:block hidden" /> in the innovative
        system developed by <span className="font-bold">Eddie Bravo</span>. Our
        academy is built for practitioners of <br className="md:block hidden" />{" "}
        all levels, from beginners looking to start their Jiu-Jitsu journey to
        experienced grapplers <br className="md:block hidden" /> seeking to
        refine their skills in a competitive environment.
      </p>

      <div className="mt-[79px] justify-center flex md:flex-row flex-col gap-[36px]">
        {trainingEvents.map((item, i) => (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: i * 0.3, ease: "easeOut" }}
            className="rounded-[16px] max-w-[410px] py-[32px] md:py-[0px] h-fit md:h-[448px] px-[28px] md:px-[32px] font-jakarta flex flex-col justify-center items-center programCardBg"
            key={i}
          >
            <img className="w-[91px]" src={item.image} alt="" />
            <h1 className="text-[32px] text-center pt-[34px] pb-[15px] font-bold leading-[100%]">
              {item.title}
            </h1>
            <p className="text-[16px] md:text-[20px] text-center">{item.description}</p>
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
