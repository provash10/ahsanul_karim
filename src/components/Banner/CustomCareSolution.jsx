'use client';

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
    ccsBtnItem,
} from "@/app/animations/customCareAnimate/CustomCareAnimate";

const sentence = "Get a personalized marketing plan designed to boost your sales and conversions.";
const words = sentence.split(" ");

const WHATSAPP_NUMBER = "+8801721821288"; 
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const CustomCareSolution = () => {
    const [hoverKey, setHoverKey] = useState(0);
    return (
        <div className="px-4 sm:px-6 lg:px-8 bg-[#060d1f] rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] border border-slate-800/60">
            <div className="relative p-[2px] sm:p-[3px] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4.5rem] bg-gradient-to-br from-blue-700/60 via-blue-900/40 to-[#0a1122] shadow-[0_0_60px_-10px_rgba(59,130,246,0.4),0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-blue-600/30 overflow-hidden">

                <div className="relative bg-[#0a1122]/90 backdrop-blur-3xl rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4.4rem] px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-white">

                    {/* Background effect */}
                    <div className="hidden sm:block absolute top-0 right-0 w-[60%] h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

                    {/* Text */}
                    <div className="text-center lg:text-left space-y-3 sm:space-y-4 max-w-full lg:max-w-2xl">

                        {/* Heading with left + right slide then dance */}
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
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
                                <span className="text-orange-400 italic underline decoration-white/10 underline-offset-4 sm:underline-offset-8">
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

                        {/* Paragraph - word by word, re-triggers on hover */}
                        <motion.div
                            className="text-gray-400 text-sm sm:text-base md:text-lg font-medium opacity-80 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0 cursor-default"
                            variants={ccsSentenceDance}
                            animate="animate"
                            onHoverStart={() => setHoverKey(k => k + 1)}
                            onTouchStart={() => setHoverKey(k => k + 1)}
                        >
                            <motion.span
                                key={hoverKey}
                                className="inline-block"
                                variants={ccsWordContainer}
                                initial="initial"
                                animate="animate"
                            >
                                {words.map((word, i) => (
                                    <motion.span key={i} variants={ccsWordItem} className="inline-block mr-[0.3em]">
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </motion.div>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto"
                        variants={ccsBtnContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {/* <motion.button
                            className="w-full sm:w-auto bg-white text-blue-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg hover:bg-orange-500 hover:text-white transition-all shadow-xl relative overflow-hidden"
                            variants={ccsBtnItem}
                            whileHover="whileHover"
                            whileTap="whileTap"
                        >
                            <span className="relative z-10">Get Started</span>
                        </motion.button> */}

                        <SweepLinkBtn
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-blue-600/10 border border-blue-500/20 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-2xl sm:rounded-3xl text-base sm:text-lg hover:bg-green-600/20 hover:border-green-500/40 transition-all text-center"
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
