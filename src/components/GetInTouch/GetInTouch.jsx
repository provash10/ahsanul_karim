"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { titleFadeUp, leftSlideIn, rightSlideIn, inputFocus } from "@/app/animations/getInTouchAnimate/getInTouchAnimate";
import { sendEmail } from "@/components/EmailService/emailService";
import toast from "react-hot-toast";

const contactItems = [
  { icon: <FaEnvelope className="text-blue-500" />, text: "ahsanuldigital@gmail.com" },
  { icon: <FaPhoneAlt className="text-green-500" />, text: "+8801721821288" },
  { icon: <FaWhatsapp className="text-green-600" />, text: "+8801721821288" },
  { icon: <FaMapMarkerAlt className="text-red-500" />, text: "Dhaka, Bangladesh" },
];

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", href: "https://facebook.com/ahsanuldigital",   bg: "bg-[#1877F2]/20 hover:bg-[#1877F2]",   border: "border-[#1877F2]/50", text: "text-[#1877F2] hover:text-white" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://linkedin.com/in/ahsanuldigital", bg: "bg-[#0A66C2]/20 hover:bg-[#0A66C2]",   border: "border-[#0A66C2]/50", text: "text-[#0A66C2] hover:text-white" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com/ahsanuldigital",  bg: "bg-[#E1306C]/20 hover:bg-[#E1306C]",   border: "border-[#E1306C]/50", text: "text-[#E1306C] hover:text-white" },
  { icon: <FaXTwitter />,  label: "X.COM",     href: "https://x.com/ahsanuldigital",          bg: "bg-[#14171A]/60 hover:bg-[#14171A]",   border: "border-white/20",     text: "text-white hover:text-white" },
  { icon: <FaYoutube />,   label: "YouTube",   href: "https://www.youtube.com/@AhsanulDigital", bg: "bg-[#FF0000]/20 hover:bg-[#FF0000]", border: "border-[#FF0000]/50", text: "text-[#FF0000] hover:text-white" },
  { icon: <FaThreads />,   label: "Threads",   href: "https://threads.com/ahsanuldigital",    bg: "bg-[#101010]/60 hover:bg-[#101010]",   border: "border-white/20",     text: "text-white hover:text-white" },
];

const LeftCard = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  const triggerAnim = () => {
    controls.start((i) => ({
      x: [-30, 0],
      transition: { duration: 0.3, ease: "easeOut", delay: i * 0.08 }
    }));
  };

  useEffect(() => { if (inView) triggerAnim(); }, [inView]);

  return (
    <motion.div
      ref={ref}
      {...leftSlideIn}
      onHoverStart={triggerAnim}
      onTouchStart={triggerAnim}
      className="w-full flex-1 bg-[#0a192f] p-4 sm:p-6 rounded-2xl border border-slate-700/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]"
    >
      <motion.h3 custom={0} animate={controls} initial={{ x: 0 }} className="text-xl text-white font-semibold mb-4">Let's Connect</motion.h3>
      <motion.p custom={1} animate={controls} initial={{ x: 0 }} className="text-white mb-6">
        Feel free to reach out through any channel. I'm always excited to discuss new projects and opportunities.
      </motion.p>

      <div className="space-y-4 text-gray-300">
        {contactItems.map((item, i) => (
          <motion.p key={i} custom={i + 2} animate={controls} initial={{ x: 0 }} className="flex items-center gap-3">
            {item.icon}
            {item.text}
          </motion.p>
        ))}
      </div>

      <div className="mt-6">
        <motion.h4 custom={6} animate={controls} initial={{ x: 0 }} className="text-white text-center font-semibold mb-3">Follow Me</motion.h4>
        <div className="grid grid-cols-2 gap-3">
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              custom={i + 7}
              animate={controls}
              initial={{ x: 0 }}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 sm:gap-8 text-sm font-bold transition-all px-3 py-2 rounded-xl border ${s.bg} ${s.border} ${s.text}`}
            >
              <motion.span
                className={`w-8 h-8 rounded-full border ${s.border} flex items-center justify-center text-base flex-shrink-0`}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                {s.icon}
              </motion.span>
              <span className="text-xs sm:text-sm font-bold">{s.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const RightCard = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const triggerAnim = () => {
    controls.start((i) => ({
      x: [30, 0],
      transition: { duration: 0.3, ease: "easeOut", delay: i * 0.08 }
    }));
  };

  useEffect(() => { if (inView) triggerAnim(); }, [inView]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendEmail(form);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (err) {
      console.error("EmailJS Error status:", err?.status);
      console.error("EmailJS Error text:", err?.text);
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      ref={ref}
      {...rightSlideIn}
      onHoverStart={triggerAnim}
      onTouchStart={triggerAnim}
      className="w-full flex-1 bg-white p-6 rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.15)] border border-gray-100"
    >
      <motion.h3 custom={0} animate={controls} initial={{ x: 0 }} className="text-xl font-semibold mb-4">Send Me a Message</motion.h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div custom={1} animate={controls} initial={{ x: 0 }}>
          <label className="block text-sm font-bold">Your Name</label>
          <motion.input {...inputFocus} type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </motion.div>
        <motion.div custom={2} animate={controls} initial={{ x: 0 }}>
          <label className="block text-sm font-bold">Your Email</label>
          <motion.input {...inputFocus} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Enter your email" className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </motion.div>
        <motion.div custom={3} animate={controls} initial={{ x: 0 }}>
          <label className="block text-sm font-bold">Subject</label>
          <motion.input {...inputFocus} type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?" className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </motion.div>
        <motion.div custom={4} animate={controls} initial={{ x: 0 }}>
          <label className="block text-sm font-bold">Message</label>
          <motion.textarea {...inputFocus} rows="3" name="message" value={form.message} onChange={handleChange} required placeholder="Tell me about your project or just say hello!" className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></motion.textarea>
        </motion.div>
        <motion.div custom={5} animate={controls} initial={{ x: 0 }}>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full font-bold bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && <p className="text-green-600 text-sm mt-2 text-center">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Try again.</p>}
        </motion.div>
      </form>
    </motion.div>
  );
};

const GetInTouch = () => {
  const titleControls = useAnimation();
  const paraControls = useAnimation();
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: false, margin: "-60px" });
  const [hoverKey, setHoverKey] = useState(0);

  const triggerTitle = React.useCallback(async () => {
    await Promise.all([
      titleControls.start({
        opacity: 1, x: 0,
        transition: { duration: 0.7, ease: "easeOut" }
      }),
      paraControls.start({
        opacity: 1, x: 0,
        transition: { duration: 0.7, ease: "easeOut", delay: 0.15 }
      }),
    ]);
    titleControls.start({
      y: [0, -6, 0],
      transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }
    });
    paraControls.start({
      y: [0, -6, 0],
      transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3, delay: 0.1 }
    });
  }, [titleControls, paraControls]);

  useEffect(() => { if (titleInView) triggerTitle(); }, [titleInView, triggerTitle]);

  const handleHover = () => {
    setHoverKey(k => k + 1);
  };

  return (
    <section id="contact" className="py-8 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#060d1f] rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] border border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-8 md:mb-12"
          onMouseEnter={handleHover}
          onTouchStart={handleHover}
        >
          <motion.h2
            key={`title-${hoverKey}`}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            initial={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.7, ease: "easeOut", y: { duration: 1.2, repeat: Infinity, repeatDelay: 3, delay: 0.8 } }}
            className="text-white text-2xl sm:text-3xl font-bold"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            key={`para-${hoverKey}`}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            initial={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15, y: { duration: 1.2, repeat: Infinity, repeatDelay: 3, delay: 1.0 } }}
            className="text-white mt-3 max-w-2xl mx-auto"
          >
            I'm always open to discussing new opportunities and exciting projects.
            Let's connect and create something amazing together!
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <LeftCard />
          <RightCard />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;


