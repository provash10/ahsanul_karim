"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { rotateAuto } from "@/app/animations/rotateImg/rotateImg";
import { cardVariants, titleVariants } from "@/app/animations/servicesTitleAnimate/servicesTitleAnimate";
import { FaFacebook, FaGoogle, FaChartLine, FaCogs, FaShoppingCart, FaYoutube } from "react-icons/fa";

const services = [
  { title: "Facebook Ads Expert", icon: <FaFacebook className="text-blue-400 text-5xl" />, bg: "bg-blue-950 border-blue-600/60 hover:border-blue-400", desc: ["Facebook Ads Campaign Setup & Management", "Advanced Audience Targeting & Retargeting", "High-Converting Ad Creative Strategy", "Facebook Pixel & Conversion Tracking Setup", "Sales Funnel & Lead Generation Strategy", "Ads Optimization & ROAS Scaling"] },
  { title: "Google Ads Expert", icon: <FaGoogle className="text-red-400 text-5xl" />, bg: "bg-red-950 border-red-600/60 hover:border-red-400", desc: ["Google Ads Campaign Setup & Management", "Keyword Research & Targeting Strategy", "Search, Display & YouTube Ads Setup", "Conversion Tracking & GTM Setup", "Ads Optimization & Quality Score Improvement", "ROI & Conversion Rate Optimization"] },
  { title: "Conversion Tracking Expert", icon: <FaChartLine className="text-green-400 text-5xl" />, bg: "bg-green-950 border-green-600/60 hover:border-green-400", desc: ["Facebook Pixel Setup & Event Tracking", "Conversion API (CAPI) Integration", "Google Ads Conversion Tracking Setup", "Google Tag Manager (GTM) Configuration", "Server-Side Tracking Setup", "Data Accuracy & Tracking Optimization"] },
  { title: "Server-Side Tracking Expert", icon: <FaCogs className="text-slate-300 text-5xl" />, bg: "bg-slate-800 border-slate-600/60 hover:border-slate-400", desc: ["Server-Side Tracking Setup (GTM Server)", "Facebook CAPI via Server-Side", "GA4 Server-Side Integration", "First-Party Data Tracking Setup", "Data Accuracy & Privacy Compliance", "Tracking Optimization & Debugging"] },
  { title: "Shopify Store Design Expert", icon: <FaShoppingCart className="text-yellow-400 text-5xl" />, bg: "bg-yellow-950 border-yellow-600/60 hover:border-yellow-400", desc: ["Shopify Store Setup & Configuration", "Responsive & Mobile-Friendly Design", "Product Page Optimization", "Custom Theme Design & Customization", "Sales Funnel & Checkout Optimization", "App Integration & Performance Optimization"] },
  { title: "YouTube Marketing Expert", icon: <FaYoutube className="text-red-500 text-5xl" />, bg: "bg-red-950 border-red-700/60 hover:border-red-500", desc: ["YouTube Channel Setup & Optimization", "Video Ads Campaign Setup", "Targeted Audience Research & Retargeting", "Video SEO & Thumbnail Strategy", "Performance Tracking & Analytics", "Ad Optimization for Max Conversions"] },
];

const SingleCard = ({ service }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  const triggerAnim = () => {
    service.desc.forEach((_, i) => {
      controls.start((j) =>
        j === i ? { x: [-30, 0], opacity: 1, transition: { duration: 0.3, ease: "easeOut", delay: i * 0.08 } } : {}
      );
    });
  };

  React.useEffect(() => {
    if (inView) triggerAnim();
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      onHoverStart={triggerAnim}
      onTouchStart={triggerAnim}
      className={`${service.bg} border p-6 rounded-2xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] transition text-white hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.3)] hover:-translate-y-1`}
    >
      <div className="mb-4 flex justify-center">
        <motion.div animate={rotateAuto.animate} transition={rotateAuto.transition}>
          {service.icon}
        </motion.div>
      </div>

      <motion.h3 variants={titleVariants} className="text-lg font-semibold text-center mb-3">
        {service.title}
      </motion.h3>

      <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
        {service.desc.map((item, i) => (
          <motion.li key={i} custom={i} animate={controls} initial={{ x: 0, opacity: 1 }}>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const words = [
  { text: "Facebook", color: "text-blue-400" },
  { text: "|", color: "text-gray-500" },
  { text: "Instagram", color: "text-pink-400" },
  { text: "|", color: "text-gray-500" },
  { text: "Google", color: "text-red-400" },
  { text: "|", color: "text-gray-500" },
  { text: "Shopify", color: "text-yellow-400" },
  { text: "|", color: "text-gray-500" },
  { text: "YouTube", color: "text-red-500" },
];

const ServiceCard = () => {
  const controls = useAnimation();
  const titleControls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  const triggerAnim = async () => {
    titleControls.start({
      rotate: [0, -180, -360],
      transition: { duration: 0.8, ease: "easeOut" }
    });
    await controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: i * 0.1 }
    }));
    controls.start((i) => ({
      y: [0, -6, 0],
      transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
    }));
  };

  React.useEffect(() => {
    if (inView) triggerAnim();
  }, [inView]);

  return (
    <div className="px-4 py-8 sm:py-10 bg-[#060d1f] rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] border border-slate-800/60">
      <div ref={ref} className="text-center mb-10" onMouseEnter={triggerAnim} onTouchStart={triggerAnim}>
        <motion.h2 animate={titleControls} initial={{ fontWeight: 700 }} className="text-3xl font-bold text-white mb-4">Services</motion.h2>
        <p className="text-gray-400 flex flex-wrap justify-center gap-1">
          {words.map((word, i) => (
            <motion.span key={i} custom={i} animate={controls} initial={{ opacity: 1, y: 0 }} className={word.color}>
              {word.text}
            </motion.span>
          ))}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <SingleCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
