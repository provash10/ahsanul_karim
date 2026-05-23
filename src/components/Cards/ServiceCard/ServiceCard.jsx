"use client";

import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { rotateAuto } from "@/app/animations/rotateImg/rotateImg";
import { cardVariants, titleVariants } from "@/app/animations/servicesTitleAnimate/servicesTitleAnimate";

import Image from "next/image";
import smfb from '../../../../public/assets/smfb.png';
import smgoogle from '../../../../public/assets/smgoogle.png';
import smincreasearrow from '../../../../public/assets/smincreasearrow.png';
import smsetting from '../../../../public/assets/smsetting.png';
import smshopify from '../../../../public/assets/smshopify.png';
import smytube from '../../../../public/assets/smytube.png';

const services = [
  {
    title: "Facebook Ads Expert",
    icon: <Image src={smfb} alt="Facebook" className="w-14 h-14 object-contain" />,
    bg: "bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-700 border-blue-500/60 hover:border-cyan-300",
    desc: [
      "Facebook Ads Campaign Setup & Management",
      "Advanced Audience Targeting & Retargeting",
      "High-Converting Ad Creative Strategy",
      "Facebook Pixel & Conversion Tracking Setup",
      "Sales Funnel & Lead Generation Strategy",
      "Ads Optimization & ROAS Scaling"
    ]
  },

  {
    title: "Google Ads Expert",
    icon: <Image src={smgoogle} alt="Google" className="w-14 h-14 object-contain" />,
    bg: "bg-gradient-to-br from-red-950 via-red-800 to-orange-700 border-red-500/60 hover:border-orange-300",
    desc: [
      "Google Ads Campaign Setup & Management",
      "Keyword Research & Targeting Strategy",
      "Search, Display & YouTube Ads Setup",
      "Conversion Tracking & GTM Setup",
      "Ads Optimization & Quality Score Improvement",
      "ROI & Conversion Rate Optimization"
    ]
  },

  {
    title: "Conversion Tracking Expert",
    icon: <Image src={smincreasearrow} alt="Tracking" className="w-14 h-14 object-contain" />,
    bg: "bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 border-green-500/60 hover:border-emerald-300",
    desc: [
      "Facebook Pixel Setup & Event Tracking",
      "Conversion API (CAPI) Integration",
      "Google Ads Conversion Tracking Setup",
      "Google Tag Manager (GTM) Configuration",
      "Server-Side Tracking Setup",
      "Data Accuracy & Tracking Optimization"
    ]
  },

  {
    title: "Server-Side Tracking Expert",
    icon: <Image src={smsetting} alt="Server Side" className="w-14 h-14 object-contain" />,
    bg: "bg-gradient-to-br from-orange-950 via-orange-800 to-amber-600 border-orange-500/60 hover:border-amber-300",
    desc: [
      "Server-Side Tracking Setup (GTM Server)",
      "Facebook CAPI via Server-Side",
      "GA4 Server-Side Integration",
      "First-Party Data Tracking Setup",
      "Data Accuracy & Privacy Compliance",
      "Tracking Optimization & Debugging"
    ]
  },

  {
    title: "Shopify Store Design Expert",
    icon: <Image src={smshopify} alt="Shopify" className="w-14 h-14 object-contain" />,
    bg: "bg-gradient-to-br from-yellow-900 via-yellow-700 to-lime-500 border-yellow-500/60 hover:border-lime-300",
    desc: [
      "Shopify Store Setup & Configuration",
      "Responsive & Mobile-Friendly Design",
      "Product Page Optimization",
      "Custom Theme Design & Customization",
      "Sales Funnel & Checkout Optimization",
      "App Integration & Performance Optimization"
    ]
  },

  {
    title: "YouTube Marketing Expert",
    icon: <Image src={smytube} alt="YouTube" className="w-14 h-14 object-contain" />,
    bg: "bg-gradient-to-br from-red-950 via-red-700 to-pink-600 border-red-500/60 hover:border-pink-300",
    desc: [
      "YouTube Channel Setup & Optimization",
      "Video Ads Campaign Setup",
      "Targeted Audience Research & Retargeting",
      "Video SEO & Thumbnail Strategy",
      "Performance Tracking & Analytics",
      "Ad Optimization for Max Conversions"
    ]
  }
];

const SingleCard = ({ service }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });

  const triggerAnim = () => {
    service.desc.forEach((_, i) => {
      controls.start((j) =>
        j === i
          ? { x: [-30, 0], opacity: 1, transition: { duration: 0.3, ease: "easeOut", delay: i * 0.08 } }
          : {}
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
  { text: "Facebook", color: "text-transparent bg-clip-text bg-gradient-to-r from-[#1877F2] to-[#00C6FF] font-extrabold" },
  { text: "|", color: "text-gray-500 font-bold" },
  { text: "Instagram", color: "text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] font-extrabold" },
  { text: "|", color: "text-gray-500 font-bold" },
  { text: "Google", color: "text-transparent bg-clip-text bg-gradient-to-r from-[#EA4335] via-[#FBBC05] to-[#4285F4] font-extrabold" },
  { text: "|", color: "text-gray-500 font-bold" },
  { text: "Shopify", color: "text-transparent bg-clip-text bg-gradient-to-r from-[#95BF47] to-[#5E8E3E] font-extrabold" },
  { text: "|", color: "text-gray-500 font-bold" },
  { text: "YouTube", color: "text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FF4500] font-extrabold" },
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
    <div
      className="px-4 py-8 sm:py-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] border border-slate-800/80 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(3, 8, 16, 0.94) 0%, rgba(10, 25, 47, 0.88) 50%, rgba(3, 8, 16, 0.94) 100%), url('/assets/servicebg.png')"
      }}
    >
      {/* Decorative gradient light spots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div ref={ref} className="text-center mb-10 relative z-10" onMouseEnter={triggerAnim} onTouchStart={triggerAnim}>
        <motion.h2 
          animate={titleControls} 
          initial={{ fontWeight: 700 }} 
          className="inline-block px-8 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-2xl sm:text-3xl font-bold mb-6 shadow-lg shadow-blue-500/20 border border-white/10"
        >
          Services
        </motion.h2>

        <p className="text-lg sm:text-xl md:text-2xl flex flex-wrap justify-center gap-1.5 sm:gap-2.5 select-none font-bold">
          {words.map((word, i) => (
            <motion.span key={i} custom={i} animate={controls} initial={{ opacity: 1, y: 0 }} className={`inline-block ${word.color}`}>
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