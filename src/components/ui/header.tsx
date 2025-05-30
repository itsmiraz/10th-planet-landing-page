import logo from "@/assets/images/logo.png";
import FrIcon from "@/assets/icons/fracias.svg";
import UKIcon from "@/assets/icons/uk.svg";
import Divider from "@/assets/icons/divider.svg";
import Close from "@/assets/icons/close.svg";
import Menu from "@/assets/icons/menu.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstaIcon from "@/assets/icons/insta.svg";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import MailIcon from "@/assets/icons/emailO.svg";
import CanadaIcon from "@/assets/icons/canadaIcon.svg";
import FranceIcon from "@/assets/icons/france.svg";
import ChevronDown from "@/assets/icons/dropdownIcon.svg";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation();
  const navLinks = [
    { label: t("nav.about"), link: "#about" },
    { label: t("nav.program"), link: "#program" },
    { label: t("nav.instructors"), link: "#instructors" },
    { label: t("nav.gallery"), link: "#gallery" },
    { label: t("nav.contact"), link: "#contact" },
  ];
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com",
      label: "Facebook",
    },
    {
      icon: <InstaIcon />,
      link: "https://www.instagram.com",
      label: "Instagram",
    },
    {
      icon: <WhatsAppIcon />,
      link: "https://wa.me/your-number",
      label: "WhatsApp",
    },
    {
      icon: <MailIcon />,
      link: "mailto:your-email@example.com",
      label: "Email",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",
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
      <div className="flex z-30 gap-x-[47px] items-center">
        <img src={logo} className="md:w-fit w-[100px]" alt="" />
        <ul className="hidden md:flex  items-center gap-x-[44px]  ">
          {navLinks.map((item) => (
            <li key={item.label} className="text-[20px] relative group">
              <a
                href={item.link}
                className="hover:text-orange-500 transition-colors duration-300 ease-out"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden flex  items-center gap-3 z-40 relative">
        <LanguageSelector />

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Close /> : <Menu />}
        </button>
      </div>

      <div className="hidden md:flex gap-x-4 items-center">
        <div className="flex gap-6  justify-between items-center">
          <div className="flex  gap-x-[14px] items-center">
            {socialLinks.map((item, i) => (
              <div key={i}>
                <span key={i}>{item.icon}</span>
              </div>
            ))}
          </div>
          <LanguageSelector />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="absolute md:hidden px-[32px] pt-[124px] pb-[24px] w-full bg-[#545556] top-0 left-0 z-20"
          >
            <div className="space-y-[24px]">
              {navLinks.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={linkVariants}
                >
                  <a href={item.link} onClick={() => setIsOpen(false)}>
                    <span className="text-[16px]">{item.label}</span>
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="flex mt-[37px] justify-between items-center">
              <div className="flex  gap-x-[14px] items-center">
                {socialLinks.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={linkVariants}
                  >
                    <span key={i}>{item.icon}</span>
                  </motion.div>
                ))}
              </div>

              {/* <LanguageSelector /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    code: "ENG",
    icon: <CanadaIcon />,
  });

  // Inside your component
  const { i18n } = useTranslation();
  const languages = [
    { code: "ENG", icon: <CanadaIcon /> },
    { code: "FR", icon: <FranceIcon /> },
  ];

  const toggleDropdown = () => setOpen(!open);
  const selectLanguage = (lang) => {
    setSelected(lang);
    setOpen(false);
    i18n.changeLanguage(lang.code);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="bg-[#FFFFFF]/20 gap-x-2 flex justify-center items-center rounded-[6px] py-2 px-3 w-fit cursor-pointer select-none"
      >
        <p>{selected.code}</p>
        {selected.icon}
        <div className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <ChevronDown />
        </div>
      </div>

      {open && (
        <div className="absolute top-full mt-2 left-0 z-50 bg-[#FFFFFF]/20 backdrop-blur-xl rounded-md shadow-lg">
          {languages.map((lang, i) => (
            <div
              key={i}
              onClick={() => selectLanguage(lang)}
              className="px-3 py-2 justify-between cursor-pointer hover:bg-white/30 flex gap-x-2 items-center text-white text-sm"
            >
              <span>{lang.code}</span>
              {lang.icon}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
