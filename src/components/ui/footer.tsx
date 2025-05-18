import Logo from "@/assets/images/logo.png";
const Footer = () => {
  const navLinks = [
    { label: "About", link: "#about" },
    { label: "Program", link: "#program" },
    { label: "Instructors", link: "#instructors" },
    { label: "Gallery", link: "#gallery" },
    { label: "Contact", link: "#contact" },
  ];
  return (
    <div className="footerBg flex flex-col pt-[14px] pb-[52px] px-[20px] justify-center items-center">
      <img src={Logo} alt="" />
      <ul className="flex flex-wrap justify-center items-center gap-x-[44px] gap-y-[30px]  pt-[39px] pb-[60px] ">
        {navLinks.map((item) => (
          <li className="text-[20px] ">
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
      <p className="text-center">10th Planet Jiu Jitsu Montreal © 2025 All rights reserved.</p>
    </div>
  );
};

export default Footer;
