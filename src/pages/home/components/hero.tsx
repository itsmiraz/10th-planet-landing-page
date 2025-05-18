import backGroundImage from "@/assets/images/herobg.webp";
import Header from "@/components/ui/header";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backGroundImage})` }}
      className="h-[700px] font-jakarta items-center bg-no-repeat bg-cover bg-center "
    >
      
      <Header/>
      <div>
        <p className="bg-[#FFFFFF]/5 w-fit mt-[40px] md:mt-[91px]  md:px-[40px] py-[8px] text-[22px] leading-[100%] mx-auto rounded-full text-center">Best Source of No-Gi Jiu Jitsu in Montreal</p>
        <h1 className="text-center pt-[28px] pb-[50px] text-[42px] md:text-[52px] font-bold ">
          10th Planet Jiu-Jitsu <br /> Montreal
        </h1>
        <div className="flex justify-center gap-x-4 items-center">
          <button className="bg-[#F58215] leading-[100%] text-[22px] px-[24px] py-[14px] rounded-[9px]">Subscribe</button>
          <button className="border border-white leading-[100%] text-[22px] px-[24px] py-[14px] rounded-[9px]">Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
