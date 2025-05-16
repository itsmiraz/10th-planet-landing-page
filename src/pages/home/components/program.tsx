import GlowImg from "@/assets/images/red-glow.png";
import legImg from "@/assets/images/legLocks.png";
import noGiImg from "@/assets/images/noGi.png";
import openMatImg from "@/assets/images/openMat.png";

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
  return (
    <div className="pt-[195px] overflow-hidden relative pb-[117px] font-jakarta">
      <h1 className="text-[50px] uppercase  pb-[27px] font-extrabold text-center leading-[100%]">
        Our Program
      </h1>
      <div className="w-[96px] h-[8px]  bg-[#F58215] mx-auto"></div>
      <p className="text-[24px] text-center pt-[38px] leading-[146%]">
        At 10th Planet Montreal, we bring a modern, no-gi approach to Brazilian
        Jiu-Jitsu, rooted <br /> in the innovative system developed by{" "}
        <span className="font-bold">Eddie Bravo</span>. Our academy is built for
        practitioners of <br /> all levels, from beginners looking to start
        their Jiu-Jitsu journey to experienced grapplers <br /> seeking to
        refine their skills in a competitive environment.
      </p>

      <div className="mt-[79px] justify-center flex gap-x-[36px]">
        {trainingEvents.map((item, i) => (
          <div
            className="rounded-[16px] max-w-[410px] h-[448px] px-[32px] font-jakarta flex flex-col justify-center items-center programCardBg"
            key={i}
          >
            <img className="w-[91px]" src={item.image} alt="" />
            <h1 className="text-[32px] pt-[34px] pb-[15px] font-bold leading-[100%]">
              {item.title}
            </h1>
            <p className="text-[20px] text-center">{item.description}</p>
          </div>
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
    </div>
  );
};

export default Program;
