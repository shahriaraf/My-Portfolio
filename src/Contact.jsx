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
        setStatus("Sent ✅");
        e.target.reset();
      })
      .catch(() => setStatus("Failed to send message ❌"));
  };

  return (
    <motion.section
     className='bg-gradient-to-r from-black via-[#06202B] to-[#1e3640] mx-30 rounded-4xl border border-[#1e3640] mt-10'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className='pl-[350px] pt-5 text-white flex justify-start items-center'>
        <p className='uppercase text-xl px-2 rounded-full bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent font-semibold flex items-center gap-2'>
          <i className="fas fa-envelope bg-gradient-to-r from-[#077A7D] via-[#7AE2CF] to-[#7AE2CF] bg-clip-text text-transparent"></i> Contact
        </p>
      </div>
      <hr className="border-t border-[#077A7D] my-4 w-1/5 ml-80" />
      <br /><br />

      <div className="pl-[320px]">
        <h2 className="text-4xl font-bold text-center text-[#85C5FF] mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 items-start">
          {/* Left: Contact Info */}
          <motion.div
            className="space-y-4 bg-[#101026] rounded-2xl shadow-md"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-envelope text-xl text-[#85C5FF]"></i>
              <a
                href="mailto:shahriaraf01@gmail.com"
                className="text-sm text-[#85C5FF] hover:text-[#a7dcff] transition"
              >
                shahriaraf01@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <i className="fa-solid fa-phone text-xl text-[#85C5FF]"></i>
              <a
                href="tel:+8801726649175"
                className="text-sm text-[#85C5FF] hover:text-[#a7dcff] transition"
              >
                +880 1726 649175
              </a>
            </div>

            <div className="flex items-center gap-4">
              <i className="fa-brands fa-whatsapp text-xl text-[#85C5FF]"></i>
              <a
                href="https://wa.me/8801726649175"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#85C5FF] hover:text-[#a7dcff] transition"
              >
                WhatsApp: +880 1726 649175
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="bg-[#101026] rounded-2xl shadow-md text-[#85C5FF]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 bg-transparent border-b-2 border-[#85C5FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#85C5FF]"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 bg-transparent border-b-2 border-[#85C5FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#85C5FF]"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-3 bg-transparent border-b-2 border-[#85C5FF] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#85C5FF]"
              ></textarea>

              <button
                type="submit"
                className="w-full border border-[#85C5FF] text-lg font-medium py-3 rounded-xl hover:bg-[#85C5FF] hover:text-black transition"
              >
                Send Message <i className="fa-solid fa-paper-plane ml-2"></i>
              </button>
            </form>

            {status && (
              <p className="mt-4 text-center text-lg font-medium text-[#85C5FF]">
                {status}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
