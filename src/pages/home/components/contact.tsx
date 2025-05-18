import EmailIcon from "@/assets/icons/email.svg";
import AddressIcon from "@/assets/icons/location.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import GlowImg from "@/assets/images/red-glow.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="font-jakarta px-[20px] overflow-hidden relative"
    >
      <h1 className="text-[32px] md:text-[50px] uppercase  pb-[27px] font-extrabold text-center leading-[100%]">
        Contact US
      </h1>
      <div className="w-[96px] h-[8px]  bg-[#F58215] mx-auto"></div>

      <div className="pt-[70px] space-y-[15px] mx-auto max-w-[867px]">
        <div className="flex md:flex-row flex-col gap-[38px]">
          <div className="w-full">
            <label className="text-[16px] mb-[10px] " htmlFor="">
              First Name
            </label>
            <input
              className="w-full  mt-[10px] border p-[14px] rounded-[4px]  border-[#737373] bg-transparent focus:outline-none "
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <label className="text-[16px]   mb-[10px] " htmlFor="">
              Last Name
            </label>
            <input
              className="w-full border  mt-[10px] p-[14px] rounded-[4px]  border-[#737373] bg-transparent focus:outline-none "
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div>
          <label className="text-[16px] mb-[10px] " htmlFor="">
            Email
          </label>
          <input
            className="w-full  border mt-[10px] p-[14px] rounded-[4px]  border-[#737373] bg-transparent focus:outline-none "
            type="text"
            name=""
            id=""
          />
        </div>
        <div>
          <label className="text-[16px]  " htmlFor="">
            Message
          </label>
          <textarea
            className="w-full bg-transparent mt-[10px] border h-[135px] p-[14px] rounded-[4px]  border-[#737373] focus:outline-none "
            name=""
            id=""
          />
        </div>
        <button className="bg-[#F58215] mx-auto flex justify-center h-fit leading-[100%] px-12 py-[14px] rounded-[9px] text-[#FFFFFF] text-[22px]">
          Send
        </button>
      </div>

      <div className="flex md:flex-row flex-col  justify-center items-center md:items-start gap-10 mt-[74px] mb-[127px] ">
        <div className="flex gap-[20px] flex-col justify-center items-center">
          <EmailIcon />
          <div className="text-center">
            <p className="text-[20px] text-bold">Email:</p>
            <p className="text-[22px]">10thplanetjjmtl@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-[20px] flex-col justify-center items-center">
          <AddressIcon />
          <div className="text-center">
            <p className="text-[20px] text-bold">Address :</p>

            <p className="text-[22px]">
              6723 Boulevard Monk <br />
              Montreal, Quebec, H4E 3J2
            </p>
          </div>
        </div>
        <div className="flex gap-[20px] flex-col justify-center items-center">
          <PhoneIcon />
          <div className="text-center">
            <p className="text-[20px] text-bold">Phone :</p>
            <p className="text-[22px]">(514) 516-4922</p>
          </div>
        </div>
      </div>

      <img
        src={GlowImg}
        className="absolute -left-[400px] top-1/2 transform -translate-y-1/2"
        alt=""
      />
      <img
        src={GlowImg}
        className="absolute -right-[400px] top-1/2 transform -translate-y-1/2"
        alt=""
      />
    </motion.div>
  );
};

export default Contact;
