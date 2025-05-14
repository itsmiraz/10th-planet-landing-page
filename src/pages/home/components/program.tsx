import GlowImg from '@/assets/images/red-glow.png'
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

      <img src={GlowImg} className="absolute -left-[400px] top-1/2 transform -translate-y-1/2" alt="" />
      <img src={GlowImg} className="absolute -right-[400px] top-1/2 transform -translate-y-1/2" alt="" />
    </div>
  );
};

export default Program;
