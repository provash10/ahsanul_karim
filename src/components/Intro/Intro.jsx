"use client";

import React from "react";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <div className="fixed inset-0 bg-[#030810] flex flex-col items-center justify-center z-50 overflow-hidden px-4">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_50%)] pointer-events-none" />

      <div className="relative flex flex-col items-center gap-3 sm:gap-4 max-w-[90%]">

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{
            opacity: [0, 1, 1],
            scale: [0.95, 1, 1.05],
            y: 0,
          }}
          transition={{
            duration: 2.8,
            ease: "easeInOut",
          }}
          className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            font-extrabold
            tracking-[4px]
            sm:tracking-[8px]
            uppercase
            text-center
            select-none
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-blue-400
            via-indigo-400
            to-purple-400
            drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]
          "
        >
          AHSANUL DIGITAL
        </motion.h1>

        {/* Subtitle */}
        <p
          className="
            text-sm
            sm:text-base
            md:text-lg
            text-center
            max-w-[320px]
            sm:max-w-[500px]
            font-medium
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-cyan-300
            via-blue-300
            to-purple-300
          "
        >
          Grow Your Business With Confidence & 100% Satisfaction
        </p>

        {/* Loader */}
        <div className="w-40 sm:w-56 md:w-64 h-[3px] bg-white/10 rounded-full overflow-hidden mt-4 relative">
          <motion.div
            className="
              absolute
              top-0
              left-0
              h-full
              rounded-full
              bg-gradient-to-r
              from-blue-500
              via-indigo-500
              to-purple-500
            "
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
          />
        </div>

      </div>
    </div>
  );
}