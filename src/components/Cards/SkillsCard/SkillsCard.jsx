"use client";

import React from "react";
import { motion, useAnimation } from "motion/react";
import Image from "next/image";

import smfb from "../../../../public/assets/smfb.png";
import smgoogle from "../../../../public/assets/smgoogle.png";
import smshopify from "../../../../public/assets/smshopify.png";
import smyoutube from "../../../../public/assets/smytube.png";
import smserverbg from "../../../../public/assets/smserverbg.png";
import smfbcapi from "../../../../public/assets/smfbcapi.png";

import smincrease from "../../../../public/assets/smincreasearrow.png";

const skills = [
  {
    name: "Facebook Ads",
    img: smfb,
    bg: "bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-700 border-blue-500/50"
  },
  {
    name: "Google Ads",
    img: smgoogle,
    bg: "bg-gradient-to-br from-red-950 via-red-800 to-orange-700 border-red-500/50"
  },
  {
    name: "Conversion Tracking",
    img: smincrease,
    bg: "bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 border-green-500/50"
  },
  {
    name: "Server-side Tracking",
    img: smserverbg,
    bg: "bg-gradient-to-br from-purple-950 via-purple-800 to-fuchsia-700 border-purple-500/50"
  },
  {
    name: "Facebook CAPI",
    img: smfbcapi,
    bg: "bg-gradient-to-br from-yellow-900 via-yellow-700 to-amber-500 border-yellow-500/50"
  },
  {
    name: "Shopify Design",
    img: smshopify,
    bg: "bg-gradient-to-br from-teal-950 via-teal-800 to-cyan-600 border-teal-500/50"
  },
  {
    name: "YouTube Ads",
    img: smyoutube,
    bg: "bg-gradient-to-br from-red-950 via-red-700 to-pink-600 border-red-500/50"
  },
];

const SkillsCard = () => {
  const controls = useAnimation();
  const titleControls = useAnimation();

  const handleHoverStart = () => {
    titleControls.start({
      rotate: [0, 360],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    });

    controls.start((i) => ({
      rotate: 45,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: i * 0.05,
      },
    }));
  };

  const handleHoverEnd = () => {
    controls.start((i) => ({
      rotate: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: i * 0.05,
      },
    }));
  };

  return (
    <div
      id="skills"
      className="relative overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-4 sm:p-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,25,47,0.85), rgba(10,25,47,0.85)), url('/assets/skills-bg.png')",
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Center Title */}
      <div className="flex justify-center mb-6">
        <motion.h2
          animate={titleControls}
          initial={{ fontWeight: 700 }}
          className="
            px-6 sm:px-8
            py-2.5
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            text-xl
            sm:text-2xl
            md:text-3xl
            font-bold
            shadow-lg
            shadow-blue-500/20
            border
            border-white/10
            text-center
          "
        >
          Skills
        </motion.h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 py-2 sm:gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            animate={controls}
            initial={{ rotate: 0 }}
            whileInView={{
              rotate: [45, 0],
              transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              },
            }}
            viewport={{ once: false }}
            className={`${skill.bg} flex h-20 w-20 sm:h-28 sm:w-28 flex-shrink-0 flex-col items-center justify-center rounded-xl border p-2 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-6px_rgba(59,130,246,0.5)]`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Image
                src={skill.img}
                alt={skill.name}
                width={45}
                height={45}
                className="object-contain"
              />
            </motion.div>

            <motion.h3
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              className="mt-1 text-center text-[0.65rem] font-bold text-white sm:text-sm"
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