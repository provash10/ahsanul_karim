"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "motion/react";

import bannerImg6 from "../../../public/assets/bannerImg6.png";

import { RotatingTextRight } from "@/app/animations/bannerAnimate/bannerAnimate";
import { SweepLinkBtn } from "@/app/animations/NavbarAnimate/SweepBtn";

const Banner = () => {
    const digitalCtrl = useAnimation();
    const brandCtrl = useAnimation();
    const growCtrl = useAnimation();

    const ref = useRef(null);

    const inView = useInView(ref, {
        once: false,
        margin: "-60px",
    });

    const triggerAnim = useCallback(() => {
        digitalCtrl.start({
            x: [-60, 10, 0],
            rotate: [-10, 5, 0],
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        });

        brandCtrl.start({
            x: [80, -5, 0],
            opacity: [0, 1],
            transition: {
                duration: 0.7,
                ease: "easeOut",
                delay: 0.3,
            },
        });

        growCtrl.start({
            x: [60, 0],
            opacity: [0, 1],
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5,
            },
        });
    }, [digitalCtrl, brandCtrl, growCtrl]);

    useEffect(() => {
        if (inView) triggerAnim();
    }, [inView, triggerAnim]);

    return (
        <section
            ref={ref}
            onMouseEnter={triggerAnim}
            className="relative w-full overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src={bannerImg6}
                    alt="Banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,16,0.45),rgba(3,8,16,0.82))]" />
            </div>

            {/* Main Content */}
            <div
                className="
                relative
                z-10
                mx-auto
                max-w-7xl
                px-4

                py-24 sm:py-28 lg:py-24

                flex
                flex-col
                justify-center
                gap-12

                items-center
                text-center

                lg:grid
                lg:grid-cols-[1.05fr_0.95fr]
                lg:items-center
                lg:text-left
                "
            >
                {/* Left */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.h1
                        animate={digitalCtrl}
                        initial={{ x: 0 }}
                        className="
                        max-w-xl
                        text-3xl
                        font-bold
                        italic
                        leading-tight
                        text-white
                        sm:text-4xl
                        md:text-5xl
                        lg:text-6xl
                        lg:-skew-x-12
                    "
                    >
                        Digital Marketing{" "}
                        <span className="text-orange-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                            Expert
                        </span>
                    </motion.h1>

                    <p
                        className="
                        mt-5
                        max-w-xl
                        text-sm
                        leading-relaxed
                        text-gray-200
                        font-medium
                        sm:text-base
                        md:text-lg
                        lg:text-xl
                    "
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-orange-400 text-xl font-bold sm:text-2xl md:text-3xl">
                            Ahsanul Karim
                        </span>
                        <span className="block mt-2">
                            I help businesses grow with smart ads,
                            tracking, and Shopify solutions.
                        </span>
                    </p>

                    {/* Buttons */}
                    <div
                        className="
                        mt-6
                        flex
                        w-full
                        flex-col
                        items-center
                        gap-3
                        sm:flex-row
                        sm:flex-wrap
                        sm:justify-center
                        lg:justify-start
                    "
                    >
                        <SweepLinkBtn
                            href="#contact"
                            className="
                            w-56
                            sm:w-auto
                            rounded-xl
                            px-6
                            py-3
                            text-sm
                            sm:text-base
                            font-bold
                            text-white
                            text-center
                        "
                            style={{
                                background:
                                    "linear-gradient(135deg,#2563eb,#f97316)",
                            }}
                        >
                            Let&apos;s Contact Us
                        </SweepLinkBtn>

                        <SweepLinkBtn
                            href="https://www.fiverr.com/s/387lEbL"
                            target="_blank"
                            className="
                            w-56
                            sm:w-auto
                            rounded-xl
                            px-6
                            py-3
                            text-sm
                            sm:text-base
                            font-bold
                            text-white
                            text-center
                        "
                            style={{
                                background:
                                    "linear-gradient(135deg,#1DBF73,#0F9D58)",
                            }}
                        >
                            Fiverr
                        </SweepLinkBtn>
                    </div>
                </div>

                {/* Right */}
                {/* Right */}
                <div className="flex flex-col justify-center items-center gap-6 text-center">
                    <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
                        <RotatingTextRight
                            items={["Facebook Ads", "Google Ads"]}
                            className="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
                font-bold
                leading-tight
            "
                            interval={3500}
                        />

                        <RotatingTextRight
                            items={[
                                "Conversion Tracking",
                                "Server Side Tracking",
                            ]}
                            className="
                mt-5
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
                font-bold
                leading-tight
            "
                            interval={3900}
                        />

                        <RotatingTextRight
                            items={[
                                "Shopify Design",
                                "YouTube Marketing",
                            ]}
                            className="
                mt-5
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                xl:text-5xl
                font-bold
                leading-tight
            "
                            interval={4500}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;

