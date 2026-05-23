"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import profileImg from "../../../../public/assets/ahsanuldm.png";
import { imageZoomFloat, floatAnimation } from "@/app/animations/aboutAnimate/aboutAnimate";
import HireMeModal from "@/components/Modal/HireMeModal";
import { SweepLinkBtn, SweepBtn } from "@/app/animations/NavbarAnimate/SweepBtn";

const AboutMe = () => {
  const controls = useAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  const runAnimation = async () => {
    await controls.start((i) => ({
      y: [-20, 0],
      opacity: [0, 1],
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.1 }
    }));

    controls.start((i) => ({
      y: [0, -6, 0],
      transition: { duration: 1.5, repeat: 3, ease: "easeInOut", delay: i * 0.1 }
    }));
  };

  React.useEffect(() => {
    if (inView) runAnimation();
  }, [inView]);

  return (
    <section
      ref={ref}
      id="about"
      className="py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] border border-slate-800/50 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10,25,47,0.85), rgba(10,25,47,0.85)), url('/assets/aboutme-bg.png')"
      }}
      onMouseEnter={runAnimation}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <motion.div {...imageZoomFloat}>
            <motion.div {...floatAnimation}>
              <Image
                src={profileImg}
                alt="profileImg"
                width={280}
                height={280}
                className="w-48 sm:w-64 md:w-72 lg:w-[280px] h-auto"
              />
            </motion.div>
          </motion.div>

          <motion.h2
            custom={0}
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-bold mt-4 text-white px-4 sm:px-8"
          >
            Hi, I'm Ahsanul !
          </motion.h2>

          <motion.p
            custom={1}
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
            className="
    text-white
    mt-2
    px-4
    sm:px-8
    text-center
    md:text-left
    ml-0
    md:ml-8
  "
          >
            Digital Marketing Expert.
          </motion.p>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center md:text-left">
          <motion.h3
            custom={2}
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl font-semibold mb-4 text-white"
          >
            About Me
          </motion.h3>

          <motion.p
            custom={3}
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
            className="text-white leading-relaxed mb-2"
          >
            I am a results-driven Digital Marketing Expert specializing in Ads Management, Conversion Tracking, Shopify Store Design, and YouTube Marketing.
            I help businesses grow their sales, generate more leads, and maximize ROI through data-driven strategies and optimized campaigns.
          </motion.p>

          <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <SweepLinkBtn
              href="https://docs.google.com/presentation/d/1ldNwNjpT-uIm9rbGf6D1ds6hzs-X8qPI/export/pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-orange-400 transition"
            >
              Download Resume
            </SweepLinkBtn>

            <SweepBtn
              onClick={() => setModalOpen(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-orange-400 transition"
            >
              Hire Me
            </SweepBtn>
          </div>

          <HireMeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;