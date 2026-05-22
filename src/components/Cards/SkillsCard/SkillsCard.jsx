"use client";

import React from "react";
import { motion, useAnimation } from "motion/react";
import {
  FaFacebookF,
  FaGoogle,
  FaChartLine,
  FaServer,
  FaShopify,
  FaProjectDiagram,
  FaYoutube
} from "react-icons/fa";

const skills = [
  { name: "Facebook Ads", icon: <FaFacebookF className="text-blue-400 text-5xl" />, bg: "bg-blue-950 border-blue-600/50" },
  { name: "Google Ads", icon: <FaGoogle className="text-red-400 text-5xl" />, bg: "bg-red-950 border-red-600/50" },
  { name: "Conversion Tracking", icon: <FaChartLine className="text-green-400 text-5xl" />, bg: "bg-green-950 border-green-600/50" },
  { name: "Server-side Tracking", icon: <FaServer className="text-purple-400 text-5xl" />, bg: "bg-purple-950 border-purple-600/50" },
  { name: "Facebook CAPI", icon: <FaProjectDiagram className="text-yellow-400 text-5xl" />, bg: "bg-yellow-950 border-yellow-600/50" },
  { name: "Shopify Design", icon: <FaShopify className="text-teal-400 text-5xl" />, bg: "bg-teal-950 border-teal-600/50" },
  { name: "YouTube Ads", icon: <FaYoutube className="text-red-500 text-5xl" />, bg: "bg-red-950 border-red-700/50" },
];

const SkillsCard = () => {
  const controls = useAnimation();
  const titleControls = useAnimation();

  const handleHoverStart = () => {
    titleControls.start({
      rotate: [0, 360],
      transition: { duration: 1.5, ease: "easeInOut" }
    });

    controls.start((i) => ({
      rotate: 45,
      transition: { duration: 0.3, ease: "easeOut", delay: i * 0.05 }
    }));
  };

  const handleHoverEnd = () => {
    controls.start((i) => ({
      rotate: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: i * 0.05 }
    }));
  };

  return (
    <div
      id="skills"
      className="p-4 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,25,47,0.85), rgba(10,25,47,0.85)), url('/assets/skills-bg.png')"
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.h2
        animate={titleControls}
        initial={{ rotate: 0 }}
        className="text-4xl text-white text-center font-bold m-4"
      >
        Skills
      </motion.h2>

      <div className="flex items-center justify-center flex-wrap gap-3 py-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            animate={controls}
            initial={{ rotate: 0 }}
            whileInView={{
              rotate: [45, 0],
              transition: { duration: 0.5, ease: "easeOut", delay: index * 0.08 }
            }}
            viewport={{ once: false }}
            className={`${skill.bg} border rounded-xl flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 flex flex-col justify-center items-center p-2 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_-6px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all duration-300`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              {skill.icon}
            </motion.div>

            <motion.h3
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
              className="text-white text-sm font-bold text-center mt-1"
            >
              {skill.name}
            </motion.h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;