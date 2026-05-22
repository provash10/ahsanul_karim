"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'motion/react';
import bannerImg6 from '../../../public/assets/bannerImg6.png';
import { RotatingTextRight } from '@/app/animations/bannerAnimate/bannerAnimate';
import { SweepLinkBtn } from '@/app/animations/NavbarAnimate/SweepBtn';
import { SiUpwork } from 'react-icons/si';
import { TbBrandFiverr } from "react-icons/tb";
import Link from 'next/link';

const Banner = () => {
    const digitalCtrl = useAnimation();
    const expertCtrl = useAnimation();
    const brandCtrl = useAnimation();
    const growCtrl = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-60px" });

    const triggerAnim = () => {
        digitalCtrl.start({
            x: [-60, 10, 0],
            rotate: [-10, 5, 0],
            transition: { duration: 0.6, ease: "easeOut" }
        });

        brandCtrl.start({
            x: [80, -5, 0],
            opacity: [0, 1],
            transition: { duration: 0.7, ease: "easeOut", delay: 0.3 }
        });

        growCtrl.start({
            x: [60, 0],
            opacity: [0, 1],
            transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
        });
    };

    useEffect(() => {
        if (inView) triggerAnim();
    }, [inView]);

    return (
        <div ref={ref} className="relative w-full" onMouseEnter={triggerAnim}>

            {/* Background Image */}
            <Image
                src={bannerImg6}
                alt="Banner"
                width={1376}
                height={768}
                className="w-full h-auto block"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col md:flex-row items-start justify-between px-4 sm:px-8 md:px-16 py-8 md:py-14">

                {/* LEFT */}
                <div className='w-full md:w-[40%] text-left mt-24 md:mt-28 lg:mt-32'>
                    <motion.h1
                        animate={digitalCtrl}
                        initial={{ x: 0 }}
                        className='text-2xl sm:text-3xl md:text-4xl font-bold italic -skew-x-12 text-white leading-tight'
                    >
                        Digital Marketing <span>Expert</span>
                    </motion.h1>

                    <p className='text-2xl text-gray-200 mt-6 font-bold'>
                        Hi, I'm <span className='text-4xl text-orange-400'>Ahsanul Karim</span> <br />
                        — I help businesses grow with smart ads, tracking, <br /> and Shopify solutions.
                    </p>

                    <div className='flex gap-3 mt-5'>
                        <SweepLinkBtn
                            href="#contact"
                            className="px-4 py-2 text-white text-xl font-bold rounded-xl"
                            style={{ background: 'linear-gradient(135deg, #2563eb, #f97316)' }}
                        >
                            Let's Contact Us
                        </SweepLinkBtn>

                        <SweepLinkBtn
                            href="#about"
                            className="px-4 py-2 text-white text-xl font-bold rounded-xl"
                            style={{ background: 'linear-gradient(135deg, #f97316, #2563eb)' }}
                        >
                            More About Us
                        </SweepLinkBtn>
                    </div>
                </div>

                {/* CENTER */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center">

                    {/*  Click Convert Grow (NOW LOWER) */}
                    <motion.div
                        animate={growCtrl}
                        className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] mt-24"
                    >
                        <svg viewBox="0 0 400 180" className="w-full fill-none">
                            <defs>
                                <linearGradient id="curve-text-grad">
                                    <stop offset="0%" stopColor="#60a5fa" />
                                    <stop offset="50%" stopColor="#ffffff" />
                                    <stop offset="100%" stopColor="#fb923c" />
                                </linearGradient>
                            </defs>

                            <path id="curve-grow" d="M 20,160 Q 200,-40 380,160" />

                            <text fill="url(#curve-text-grad)" style={{ fontSize: "28px" }}>
                                <textPath href="#curve-grow" startOffset="50%" textAnchor="middle">
                                    Click. Convert. Grow
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>

                    {/* NAME  */}
                    <motion.h1
                        animate={brandCtrl}
                        className="text-sm sm:text-3xl md:text-4xl font-black uppercase tracking-widest mt-4"
                        style={{
                            background: 'linear-gradient(135deg, #FFE082, #FF8F00)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Ahsanul Karim
                    </motion.h1>

                    {/* Fiverr & Upwork (UNCHANGED POSITION) */}
                    <div className="flex gap-4 mt-18">

                        {/* Fiverr Button Link */}
                        <Link
                            href="https://www.fiverr.com"
                            target="_blank"
                            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))",
                                border: "1.5px solid #1dbf73",
                                color: "#0f3d2e",
                                fontWeight: "700",
                                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
                                boxShadow: "0 6px 18px rgba(29,191,115,0.25)",
                                backdropFilter: "blur(12px)"
                            }}
                        >
                            Fiverr
                        </Link>

                        {/* Upwork Button Link */}
                        <Link
                            href="https://www.upwork.com"
                            target="_blank"
                            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                            style={{
                                background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.55))",
                                border: "1.5px solid #14A800",
                                color: "#0b3d1f",
                                fontWeight: "700",
                                textShadow: "0 1px 2px rgba(0,0,0,0.15)",
                                boxShadow: "0 6px 18px rgba(20,168,0,0.25)",
                                backdropFilter: "blur(12px)"
                            }}
                        >
                            Upwork
                        </Link>

                    </div>

                    {/*  Grow Your Business (NOW UP) */}
                    <motion.div
                        animate={growCtrl}
                        className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] -mt-22"
                    >
                        <svg viewBox="0 0 400 140" className="w-full fill-none">
                            <defs>
                                <linearGradient id="reverse-curve-text-grad">
                                    <stop offset="0%" stopColor="#fb923c" />
                                    <stop offset="100%" stopColor="#60a5fa" />
                                </linearGradient>
                            </defs>

                            <path id="curve-grow-reverse" d="M 20,15 Q 200,225 380,15" />

                            <text fill="url(#reverse-curve-text-grad)" style={{ fontSize: "20px" }}>
                                <textPath href="#curve-grow-reverse" startOffset="50%" textAnchor="middle">
                                    Grow Your Business With Me
                                </textPath>
                            </text>
                        </svg>
                    </motion.div>
                </div>

                {/* RIGHT */}
                <div className='mt-48'>
                    <RotatingTextRight
                        items={["Facebook Ads", "Google Ads"]}
                        className="text-sm sm:text-xl md:text-4xl font-bold"
                        interval={3500}
                    />

                    <RotatingTextRight
                        items={["Conversion Tracking", "Server Side Tracking"]}
                        className="text-sm sm:text-xl md:text-4xl font-bold m-5"
                        interval={3900}
                    />

                    <RotatingTextRight
                        items={["Shopify Design", "YouTube Marketing"]}
                        className="text-sm sm:text-xl md:text-4xl font-bold"
                        interval={4500}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;

