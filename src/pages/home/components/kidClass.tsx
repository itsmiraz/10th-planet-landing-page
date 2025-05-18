import KidClassImg from "@/assets/images/kidClass.png";

const KidClass = () => {
  return (
    <div className="flex md:flex-row flex-col mt-[200px] mb-[170px] font-jakarta gap-[40px] md:gap-[160px] justify-between  bg-gradient-to-r from-[#12100E] to-[#171717]">
      <div className="py-[69px] px-[20px] md:text-start text-center md:px-[67px]">
        <h2 className="text-[32px] pb-[25px] font-bold ">Join The Kid Class</h2>
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
          <button className="bg-[#F58215] h-fit leading-[100%] px-8 py-[14px] rounded-[9px] text-[#FFFFFF] text-[22px]">
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <img className="h-full" src={KidClassImg} alt="" />
      </div>
    </div>
  );
};

export default KidClass;
