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
        leftControls.start({ y: [0, -6, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } });
        rightControls.start({ y: [0, -6, 0], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 } });
    };

    useEffect(() => { if (inView) triggerAnim(); }, [inView]);
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
    },
    {
        name: "Daniel Smith",
        role: "Affiliate Marketer",
        review: "My campaigns were not converting before, but after his optimization, I started getting profitable results. Truly impressed with his expertise.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1502767089025-6572583495b4?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Sophia Brown",
        role: "Small Business Owner",
        review: "He helped me grow my local business through Facebook Ads. I started getting real customers instead of just clicks. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Chris Evans",
        role: "Digital Product Seller",
        review: "The funnel and tracking setup he created was outstanding. I finally understand my audience behavior and increased my conversions significantly.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Ayesha Rahman",
        role: "Fashion Brand Owner",
        review: "Amazing experience! My brand visibility and sales both increased after running ads with his strategy. Very cooperative and skilled person.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?q=80&w=2000&auto=format&fit=crop"
    },
    {
        name: "Rahim Uddin",
        role: "Local Business Owner",
        review: "He set up everything from pixel to ads perfectly. Now I get consistent leads every day. Best investment for my business so far.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2000&auto=format&fit=crop"
    }
];

    const scrollReviews = [...reviews, ...reviews];

    return (
        <section ref={ref} className="py-6 sm:py-8 bg-[#f0f6ff] relative overflow-hidden rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.15)] border border-blue-100/60" onMouseEnter={triggerAnim}>
            <div className="container mx-auto px-4 relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-[1000] text-gray-900 leading-[1] tracking-tighter">
                        <motion.span animate={leftControls} initial={{ x: 0, opacity: 1 }} className="inline-block">Review From Our </motion.span>
                        <motion.span animate={rightControls} initial={{ x: 0, opacity: 1 }} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">Trusted Community</motion.span>
                    </h2>
                </div>

                <div className="relative overflow-hidden mt-4">
                    <div className="flex gap-4 md:gap-6 animate-scroll hover:[animation-play-state:paused]">
                        {scrollReviews.map((item, idx) => (
                            <div key={idx} className="flex-shrink-0 w-[75vw] md:w-[400px] lg:w-[420px] flex flex-col h-full group bg-[#0a1122] p-6 md:p-8 rounded-[2.5rem] border border-slate-700/60 transition-all duration-500 hover:shadow-[0_0_40px_-8px_rgba(59,130,246,0.4)] hover:border-blue-500/60 overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="bg-white/5 text-blue-400 p-4 rounded-[1.2rem] text-xl border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg">
                                        <FaQuoteLeft />
                                    </div>
                                    <div className="flex gap-1 pt-4 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`${i < item.rating ? "text-orange-400" : "text-slate-800"}`} />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed mb-6 min-h-[100px] opacity-90 italic">
                                    "{item.review}"
                                </p>

                                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-slate-800/50">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl animate-pulse opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 border-slate-700 transition-transform duration-500 group-hover:scale-105 relative z-10 shadow-xl">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="text-left leading-none">
                                        <h4 className="font-[1000] text-white text-base md:text-lg mb-1 group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{item.name}</h4>
                                        <p className="text-gray-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 8px)); }
                }
                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 35s linear infinite;
                }
                @media (min-width: 768px) {
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-50% - 12px)); }
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;