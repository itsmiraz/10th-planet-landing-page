import logo from "@/assets/images/logo.png";
import FacebookIcon from "@/assets/icons/fbWhite.svg";
import InstaIcon from "@/assets/icons/instaWhite.svg";
import WhatsAppIcon from "@/assets/icons/whatsAppWhite.svg";
import MailIcon from "@/assets/icons/emailWhite.svg";
const Footer = () => {
  const navLinks = [
    { label: "About", link: "#about" },
    { label: "Program", link: "#program" },
    { label: "Instructors", link: "#instructors" },
    { label: "Gallery", link: "#gallery" },
    { label: "Contact", link: "#contact" },
  ];
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/10thplanetmontreal",
      label: "Facebook",
    },
    {
      icon: <InstaIcon />,
      link: "https://www.instagram.com/10pmontreal",
      label: "Instagram",
    },
    {
      icon: <WhatsAppIcon />,
      link: "tel:+15145164922",
      label: "Phone",
    },
  ];
  return (
    <div className="footerBg flex flex-col pt-[14px] pb-[52px] px-[20px] justify-center items-center">
      <img src={logo} className="w-[100px] md:w-[140px]" alt="10th Planet Footer Logo" />
      <div className="flex justify-center pt-[20px]  gap-x-[14px] items-center">
        {socialLinks.map((item, i) => (
          <a 
            key={i} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* <ul className="flex flex-wrap justify-center items-center gap-x-[44px] gap-y-[30px]  pt-[39px] pb-[60px] ">
        {navLinks.map((item) => (
          <li className="text-[20px] ">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul> */}
      <p className="text-center pt-[40px]">
        10th Planet Jiu Jitsu Montreal © 2025 All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
