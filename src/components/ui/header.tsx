import logo from "@/assets/images/logo.png";
import FrIcon from "@/assets/icons/fracias.svg";
import UKIcon from "@/assets/icons/uk.svg";
import Divider from "@/assets/icons/divider.svg";
import Close from "@/assets/icons/close.svg";
import Menu from "@/assets/icons/menu.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const navLinks = [
    { label: "About", link: "#about" },
    { label: "Program", link: "#program" },
    { label: "Instructors", link: "#instructors" },
    { label: "Gallery", link: "#gallery" },
    { label: "Contact", link: "#contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const menuVariants = {
    hidden: { scale: 0, opacity: 0, originX: 1, originY: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.3 },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <div className="flex pt-[17px] max-w-[1440px] mx-auto px-[20px] md:px-10 font-jakarta justify-between items-center">
      <div className="flex gap-x-[47px] items-center">
        <img src={logo} className="md:w-fit w-[100px]" alt="" />
        <ul className="hidden md:flex  items-center gap-x-[44px]  ">
          {navLinks.map((item) => (
            <li className="text-[20px] ">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden block z-40 relative">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close /> : <Menu />}
        </button>
      </div>

      <div className="hidden md:flex gap-x-4 items-center">
        <div className="flex  text-[20px] items-center px-x-[17px] py-[10px] gap-2">
          <FrIcon />
          <p>Francais’</p>
        </div>
        <Divider />
        <div className="flex text-[20px]  items-center  px-x-[17px] py-[10px] gap-2">
          <p>English</p>
          <UKIcon />
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="fixed inset-0 bg-black z-30 flex flex-col items-center justify-center space-y-6 text-xl font-medium text-white md:hidden"
        >
          {navLinks.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
            >
              <a href={item.link} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Header;
