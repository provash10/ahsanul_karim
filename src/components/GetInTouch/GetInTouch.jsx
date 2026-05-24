"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import {
  titleFadeUp,
  leftSlideIn,
  rightSlideIn,
  inputFocus,
} from "@/app/animations/getInTouchAnimate/getInTouchAnimate";
import { sendEmail } from "@/components/EmailService/emailService";
import toast from "react-hot-toast";

/* ---------------- CONTACT DATA ---------------- */

const contactItems = [
  { icon: <FaEnvelope className="text-blue-500" />, text: "ahsanuldigital@gmail.com" },
  { icon: <FaPhoneAlt className="text-green-500" />, text: "+8801721821288" },
  { icon: <FaWhatsapp className="text-green-600" />, text: "+8801721821288" },
  { icon: <FaMapMarkerAlt className="text-red-500" />, text: "Dhaka, Bangladesh" },
];

const socialLinks = [
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    href: "https://facebook.com/ahsanuldigital",
    bg: "bg-gradient-to-r from-[#1877F2] to-[#00C6FF]",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahsanuldigital",
    bg: "bg-gradient-to-r from-[#0A66C2] to-[#0077B5]",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://instagram.com/ahsanuldigital",
    bg: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
  },
  {
    icon: <FaXTwitter />,
    label: "X",
    href: "https://x.com/ahsanuldigital",
    bg: "bg-gradient-to-r from-[#14171A] to-[#2c3e50]",
  },
  {
    icon: <FaYoutube />,
    label: "YouTube",
    href: "https://www.youtube.com/@AhsanulDigital",
    bg: "bg-gradient-to-r from-[#FF0000] to-[#FF4500]",
  },
  {
    icon: <FaThreads />,
    label: "Threads",
    href: "https://threads.com/ahsanuldigital",
    bg: "bg-gradient-to-r from-[#101010] to-[#303030]",
  },
];

/* ---------------- LEFT CARD ---------------- */

const LeftCard = ({ isSectionHovered }) => {
  const controls = useAnimation();
  const socialControls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });

  const trigger = () => {
    controls.start((i) => ({
      opacity: [0, 1],
      x: [-20, 0],
      transition: { duration: 0.3, delay: i * 0.06 },
    }));
  };

  useEffect(() => {
    if (inView) trigger();
  }, [inView]);

  useEffect(() => {
    if (isSectionHovered) {
      socialControls.set({
        opacity: 0,
        y: -30,
      });
      socialControls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.25, 1, 0.5, 1],
          delay: i * 0.08,
        },
      }));
    } else {
      socialControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [isSectionHovered, socialControls]);

  return (
    <motion.div
      ref={ref}
      variants={leftSlideIn}
      initial="initial"
      whileInView="animate"
      whileHover="whileHover"
      viewport={{ once: false, amount: 0.1 }}
      className="w-full flex-1 bg-[#0a192f] p-5 rounded-2xl border border-slate-700 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] transition hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.2)]"
      onHoverStart={trigger}
    >
      <h3 className="text-xl text-white font-semibold mb-3">
        Let&apos;s Connect
      </h3>

      <p className="text-white mb-5 text-sm">
        Feel free to reach out anytime.
      </p>

      <div className="space-y-3 text-gray-300">
        {contactItems.map((item, i) => (
          <motion.p
            key={i}
            custom={i}
            animate={controls}
            initial={{ opacity: 0, x: -20 }}
            className="flex gap-2"
          >
            {item.icon}
            {item.text}
          </motion.p>
        ))}
      </div>

      <div className="mt-6">
        <h4 className="text-white font-semibold text-center mb-3">
          Follow Me
        </h4>

        <div className="grid grid-cols-2 gap-2 justify-items-center">
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              custom={i}
              initial={{ opacity: 1, y: 0 }}
              animate={socialControls}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${s.bg} text-white flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold shadow-md w-full max-w-[140px] sm:max-w-[160px]`}
            >
              {s.icon}
              {s.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- RIGHT CARD ---------------- */

const RightCard = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(form);
      toast.success("Message sent!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Error sending message");
    }
  };

  return (
    <motion.div
      variants={rightSlideIn}
      initial="initial"
      whileInView="animate"
      whileHover="whileHover"
      viewport={{ once: false, amount: 0.1 }}
      className="w-full flex-1 bg-white p-5 rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.2)] border border-slate-100"
    >
      <h3 className="text-xl font-semibold mb-4 text-slate-800">Send Message</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <motion.input
          {...inputFocus}
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
          className="w-full border p-2 rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
        />

        <motion.input
          {...inputFocus}
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full border p-2 rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
        />

        <motion.textarea
          {...inputFocus}
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Write Your Message"
          rows={5}
          className="w-full border p-2 rounded text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-200"
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold shadow-md transition-colors"
        >
          Send
        </motion.button>
      </form>
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const GetInTouch = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="contact"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative py-10 px-4 rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url('/assets/getintouchbg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-6xl mx-auto">

        {/* TITLE (SKILLS STYLE) */}
        <div className="text-center mb-10">

          <div className="flex justify-center mb-4">
            <motion.h2
              variants={titleFadeUp}
              initial="initial"
              whileInView="animate"
              whileHover="whileHover"
              viewport={{ once: false, amount: 0.1 }}
              className="
                px-6 sm:px-8
                py-2.5
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                text-white
                text-xl sm:text-2xl md:text-3xl
                font-bold
                border border-white/10
                shadow-lg shadow-blue-500/20
                cursor-default
              "
            >
              Get In Touch
            </motion.h2>
          </div>

          <motion.p
            variants={titleFadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-white max-w-2xl mx-auto text-sm sm:text-base"
          >
            I'm always open to new opportunities and projects.
          </motion.p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          <LeftCard isSectionHovered={isHovered} />
          <RightCard />
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;