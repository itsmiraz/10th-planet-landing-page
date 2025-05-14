import logo from "@/assets/images/logo.png";
import FrIcon from "@/assets/icons/fracias.svg";
import UKIcon from "@/assets/icons/uk.svg";
import Divider from "@/assets/icons/divider.svg";

const Header = () => {
  const navLinks = [
    { label: "About", link: "#about" },
    { label: "Program", link: "#program" },
    { label: "Instructors", link: "#instructors" },
    { label: "Gallery", link: "#gallery" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <div className="flex pt-[17px] max-w-[1440px] mx-auto px-10 font-jakarta justify-between items-center">
      <div className="flex gap-x-[47px] items-center">
        <img src={logo} alt="" />
        <ul className="flex items-center gap-x-[44px]  ">
          {navLinks.map((item) => (
            <li className="text-[20px] ">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-x-4 items-center">
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
    </div>
  );
};

export default Header;
