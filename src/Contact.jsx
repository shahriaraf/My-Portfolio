import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm("service_a609f54", "template_nbhb31q", formRef.current, "DXMrIyiC32rc37Gkd")
      .then(() => {
        setStatus("Sent");
        e.target.reset();
      })
      .catch(() => setStatus("Failed to send message ❌"));
  };
  const backgroundImageu = {
    backgroundImage: "url('https://i.ibb.co.com/ynf2kph9/starsky1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <motion.section
      className="pt-40 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={backgroundImageu}
    >
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#85C5FF]">Get In Touch</h2>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-envelope text-2xl text-[#85C5FF]"></i>
              <a href="mailto:shahriaraf01@gmail.com" className="text-lg text-[#85C5FF] hover:text-[#6498c9] transition">
                shahriaraf01@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-phone text-2xl text-[#85C5FF]"></i>
              <a href="tel:+8801726649175" className="text-lg text-[#85C5FF] hover:text-[#6498c9] transition">
                +880 1726 649175
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4">
              <i className="fa-brands fa-whatsapp text-2xl text-[#85C5FF]"></i>
              <a href="https://wa.me/8801726649175" target="_blank" rel="noopener noreferrer" className="text-lg text-[#85C5FF] hover:text-[#6498c9] transition">
                WhatsApp: +880 1726 649175
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-lg text-[#85C5FF]">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 border-b-2 border-[#85C5FF] rounded-xl focus:ring-2 focus:ring-[#85C5FF] outline-none"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 border-b-2 border-[#85C5FF] rounded-xl focus:ring-2 focus:ring-[#85C5FF] outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 border-b-2 border-[#85C5FF] rounded-xl focus:ring-2 focus:ring-[#85C5FF] outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full border border-[#85C5FF] text-lg font-medium py-3 hover:text-black  focus:text-black active:text-black"
                onTouchStart={(e) => e.currentTarget.classList.add("text-black")}
                onTouchEnd={(e) => e.currentTarget.classList.remove("text-black")}
              >
                Send Message <i className="fa-solid ml-1.5 text-lg fa-paper-plane"></i>
              </button>
            </form>

            {status && <p className="mt-4 text-center text-lg font-medium">{status}</p>}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
