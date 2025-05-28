import Logo from "@/assets/images/logo.png";
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
  return (
    <div className="footerBg flex flex-col pt-[14px] pb-[52px] px-[20px] justify-center items-center">
      <img src={Logo} alt="" />
      <div className="flex justify-center pt-[20px]  gap-x-[14px] items-center">
        {socialLinks.map((item, i) => (
          <div key={i}>
            <span key={i}>{item.icon}</span>
          </div>
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
        10th Planet Jiu Jitsu Montreal © 2025 All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
