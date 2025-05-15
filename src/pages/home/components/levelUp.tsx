import React from "react";
import PoweredByPaypal from "@/assets/images/poweredByPaypal.png";
const LevelUp = () => {
  return (
    <div className="pt-[233px] font-jakarta pb-[20px]">
      <div className="bg-[#191919] max-w-[1308px] mx-auto flex justify-between items-end rounded-[24px] p-[50px]">
        <div>
          <h2 className="text-[36px] font-semibold leading-[100%]">
            Ready to level up?
          </h2>
          <p className="text-[22px] py-[8px] max-w-[805px]">
            Lorem ipsum dolor sit amet consectetur. Euismod id tellus quis
            vulputate in fermentum lacinia pharetra aliquet. Nullam eget lacus
            est arcu scelerisque pharetra. Sed enim phasellus scelerisque ac
            ipsum vulputate.
          </p>
          <div className="flex items-center gap-x-6">
            <div className="flex items-center gap-x-2 ">
              <h2 className="text-[56px] leading-[110%] items-center font-bold">130$</h2>
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
      </div>
    </div>
  );
};

export default LevelUp;
