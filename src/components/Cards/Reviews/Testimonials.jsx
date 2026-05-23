"use client";

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const leftControls = useAnimation();
    const rightControls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-80px" });

    const triggerAnim = async () => {
        await Promise.all([
            leftControls.start({ x: [-200, 0], opacity: 1, transition: { duration: 1, ease: "easeOut" } }),
            rightControls.start({ x: [200, 0], opacity: 1, transition: { duration: 1, ease: "easeOut" } }),
        ]);

        leftControls.start({
            y: [0, -6, 0],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
        });

        rightControls.start({
            y: [0, -6, 0],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
        });
    };

    useEffect(() => {
        if (inView) triggerAnim();
    }, [inView]);

    const reviews = [
        {
            name: "Michael Carter",
            role: "Ecommerce Store Owner",
            review: "Working with Ahsanul was a game changer for my Shopify store. Within just a few weeks, my sales increased significantly and my ROAS improved by 3x.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "David Miller",
            role: "Startup Founder",
            review: "I struggled with Facebook Ads before, but after working with him, everything changed. The targeting and strategy were spot on, and I finally started getting consistent leads.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Emily Rodriguez",
            role: "Online Business Owner",
            review: "His conversion tracking setup was flawless. I can now clearly see where my sales are coming from and optimize my campaigns better than ever before.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "James Wilson",
            role: "Dropshipping Entrepreneur",
            review: "The Google Ads campaigns he set up delivered amazing results. My cost per conversion dropped and my revenue increased within the first month.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Olivia Grace",
            role: "Brand Owner",
            review: "Highly professional and results-driven. He understands digital marketing deeply and helped scale my brand with smart strategies and proper tracking.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    const scrollReviews = [...reviews, ...reviews];

    return (
        <section
            ref={ref}
            onMouseEnter={triggerAnim}
            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.8)]"
        >

            {/* 🎥 Background Image (Parallax feel) */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-110 transition-transform duration-700"
                style={{
                    backgroundImage: "url('/assets/reviewsbg.png')",
                }}
            />

            {/* 🌑 Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />

            {/* 🌌 Glow layer */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.18),transparent_45%)]" />

            <div className="relative z-10 py-6 sm:py-10 px-4 sm:px-6">

                {/* Title */}
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-[1000] text-white tracking-tighter">
                        <motion.span animate={leftControls} className="inline-block">
                            Review From Our{" "}
                        </motion.span>

                        <motion.span
                            animate={rightControls}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-pink-400"
                        >
                            Trusted Community
                        </motion.span>
                    </h2>
                </div>

                {/* Scroll Section */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-4 md:gap-6 animate-scroll hover:[animation-play-state:paused]">

                        {scrollReviews.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 w-[75vw] md:w-[400px] lg:w-[420px] p-6 md:p-8 rounded-[2rem] border border-white/10 backdrop-blur-xl bg-white/5 transition-all duration-500 hover:scale-[1.02] hover:border-blue-400/40 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.6)]"
                            >
                                {/* Quote + Stars */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 rounded-xl bg-white/10 text-blue-400 border border-white/10">
                                        <FaQuoteLeft />
                                    </div>

                                    <div className="flex gap-1 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={i < item.rating ? "text-orange-400" : "text-gray-700"}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Review text */}
                                <p className="text-gray-300 text-base md:text-lg italic leading-relaxed mb-6 min-h-[100px]">
                                    "{item.review}"
                                </p>

                                {/* User */}
                                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover border border-white/20"
                                    />

                                    <div>
                                        <h4 className="text-white font-extrabold uppercase tracking-tight">
                                            {item.name}
                                        </h4>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Scroll animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 10px)); }
                }

                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 35s linear infinite;
                }
            `}</style>

        </section>
    );
};

export default Testimonials;