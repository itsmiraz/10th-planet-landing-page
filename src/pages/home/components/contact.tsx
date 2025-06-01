import EmailIcon from "@/assets/icons/email.svg";
import AddressIcon from "@/assets/icons/location.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import GlowImg from "@/assets/images/red-glow.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/buttons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSending(true);
    emailjs
      .sendForm(
        "service_2bm0hu4",     // Replace with your EmailJS Service ID
        "template_g9pzj46",    // Replace with your EmailJS Template ID
        formRef.current!,
        "mCFnCpa4ZuCRPF-xk" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setSuccessMessage("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setIsSending(false);
        setErrors({});
      })
      .catch(() => {
        setSuccessMessage("Something went wrong. Please try again later.");
        setIsSending(false);
      });
  };

  return (
    <motion.div
      id="contact"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: inView ? 0 : 80, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="font-jakarta px-[20px] overflow-hidden relative"
    >
      <h1 className="text-[32px] md:text-[50px] uppercase pb-[27px] font-extrabold text-center leading-[100%]">
        Contact US
      </h1>
      <div className="w-[96px] h-[8px] bg-[#F58215] mx-auto" />

      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="pt-[70px] space-y-[15px] mx-auto max-w-[867px]"
      >
        <div className="flex md:flex-row flex-col gap-[38px]">
          <div className="w-full">
            <label className="text-[16px] mb-[10px]">First Name</label>
            <input
              className="w-full mt-[10px] border p-[14px] rounded-[4px] border-[#737373] bg-transparent focus:outline-none"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div className="w-full">
            <label className="text-[16px] mb-[10px]">Last Name</label>
            <input
              className="w-full mt-[10px] border p-[14px] rounded-[4px] border-[#737373] bg-transparent focus:outline-none"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="text-[16px] mb-[10px]">Email</label>
          <input
            className="w-full border mt-[10px] p-[14px] rounded-[4px] border-[#737373] bg-transparent focus:outline-none"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="text-[16px]">Message</label>
          <textarea
            className="w-full bg-transparent mt-[10px] border h-[135px] p-[14px] rounded-[4px] border-[#737373] focus:outline-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex justify-center items-center mt-4">
          <Button variant="solid" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </Button>
        </div>

        {successMessage && (
          <p className="text-center text-green-500 text-lg mt-4">{successMessage}</p>
        )}
      </form>

      {/* Contact Info Section */}
      <div className="flex max-w-[967px] mx-auto md:flex-row flex-col justify-center items-center md:items-start gap-10 mt-[74px] mb-[127px]">
        <div className="flex w-full gap-[20px] flex-col justify-center items-center">
          <EmailIcon />
          <div className="text-center">
            <p className="text-[20px] font-bold">Email:</p>
            <p className="text-[22px]">10thplanetjjmtl@gmail.com</p>
          </div>
        </div>
        <div className="flex w-full gap-[20px] flex-col justify-center items-center">
          <div className="text-white">
            <AddressIcon />
          </div>
          <div className="text-center">
            <p className="text-[20px] font-bold">Address :</p>
            <p className="text-[22px]">
              6723 Boulevard Monk <br />
              Montreal, Quebec, H4E 3J2
            </p>
          </div>
        </div>
        <div className="flex w-full gap-[20px] flex-col justify-center items-center">
          <div className="text-white">
            <PhoneIcon />
          </div>
          <div className="text-center">
            <p className="text-[20px] font-bold">Phone :</p>
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
