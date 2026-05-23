"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SweepLinkBtn } from "@/app/animations/NavbarAnimate/SweepBtn";
import {
    ccsLeftSlide,
    ccsRightSlide,
    ccsDance,
    ccsWordContainer,
    ccsWordItem,
    ccsSentenceDance,
    ccsBtnContainer,
} from "@/app/animations/customCareAnimate/CustomCareAnimate";

const sentence =
    "Get a personalized marketing plan designed to boost your sales and conversions.";

const words = sentence.split(" ");

const WHATSAPP_NUMBER = "+8801721821288";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const CustomCareSolution = () => {
    const [hoverKey, setHoverKey] = useState(0);

    return (
        /* 🔵 MAIN BACKGROUND (first image) */
        <div
            className="px-4 py-4 sm:px-6 lg:px-8 rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] border border-slate-800/60 bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{
                backgroundImage: "url('/assets/custombg.jpg')", // 👉 MAIN BG (change if needed)
            }}
        >
            {/* dark overlay for main bg */}
            <div className="absolute inset-0 bg-black/55 pointer-events-none" />

            {/* gradient border wrapper */}
            <div className="relative p-[2px] sm:p-[3px] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4.5rem] bg-gradient-to-br from-blue-700/60 via-blue-900/40 to-[#0a1122]/80">

                {/* 🟣 CONTENT BOX (SECOND IMAGE BACKGROUND HERE) */}
                <div
                    className="relative backdrop-blur-2xl rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4.4rem] px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-white bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/custombg2.png')", // 👉 INNER BG
                    }}
                >

                    {/* inner dark overlay */}
                    <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4.4rem]" />

                    {/* text section */}
                    <div className="relative text-center lg:text-left space-y-3 sm:space-y-4 max-w-full lg:max-w-2xl">

                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
                            variants={ccsDance}
                            animate="animate"
                        >
                            <motion.span
                                className="inline-block"
                                variants={ccsLeftSlide}
                                initial="initial"
                                animate="animate"
                            >
                                Need a{" "}
                                <span className="text-orange-400 italic underline">
                                    Custom
                                </span>{" "}
                            </motion.span>

                            <motion.span
                                className="inline-block"
                                variants={ccsRightSlide}
                                initial="initial"
                                animate="animate"
                            >
                                Marketing Strategy?
                            </motion.span>
                        </motion.h2>

                        {/* animated sentence */}
                        <motion.div
                            className="text-gray-300 text-sm sm:text-base md:text-lg font-medium"
                            variants={ccsSentenceDance}
                            animate="animate"
                            onHoverStart={() => setHoverKey(k => k + 1)}
                        >
                            <motion.span
                                key={hoverKey}
                                className="inline-block"
                                variants={ccsWordContainer}
                                initial="initial"
                                animate="animate"
                            >
                                {words.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        variants={ccsWordItem}
                                        className="inline-block mr-[0.3em]"
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* button */}
                    <motion.div
                        className="relative flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto"
                        variants={ccsBtnContainer}
                        initial="initial"
                        animate="animate"
                    >
                        <SweepLinkBtn
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-blue-600/10 border border-blue-500/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg hover:bg-green-600/20 transition-all text-center"
                        >
                            Contact Support
                        </SweepLinkBtn>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default CustomCareSolution;