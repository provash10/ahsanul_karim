"use client";

import React from "react";
import { FaUsers, FaUserCheck, FaAward, FaHeartbeat } from "react-icons/fa";
import { motion } from "motion/react";
import useNumCount from "@/app/animations/numCount/numCount";
import { labelVariants } from "@/app/animations/statsTextAnimate/statsTextAnimate";
import statsbg from '../../../../public/assets/statsbg.png';
const stats = [
    { 
        label: "Happy Clients", 
        target: 200, 
        suffix: "+", 
        icon: <FaUsers />, 
        accent: "text-blue-400", 
        bgGrad: "bg-gradient-to-br from-blue-500/10 via-blue-900/5 to-cyan-500/5 hover:from-blue-500/20 hover:via-blue-900/10 hover:to-cyan-500/15", 
        borderHover: "hover:border-blue-400/40", 
        shadowHover: "hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]",
        iconBg: "bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40",
        glowGrad: "from-blue-500/20 via-transparent to-cyan-500/10"
    },
    { 
        label: "Project Completed", 
        target: 250, 
        suffix: "+", 
        icon: <FaUserCheck />, 
        accent: "text-emerald-400", 
        bgGrad: "bg-gradient-to-br from-emerald-500/10 via-emerald-900/5 to-teal-500/5 hover:from-emerald-500/20 hover:via-emerald-900/10 hover:to-teal-500/15", 
        borderHover: "hover:border-emerald-400/40", 
        shadowHover: "hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]",
        iconBg: "bg-emerald-500/10 border border-emerald-500/20 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40",
        glowGrad: "from-emerald-500/20 via-transparent to-teal-500/10"
    },
    { 
        label: "Success Rate", 
        target: 99, 
        suffix: "%", 
        icon: <FaAward />, 
        accent: "text-orange-400", 
        bgGrad: "bg-gradient-to-br from-orange-500/10 via-orange-900/5 to-amber-500/5 hover:from-orange-500/20 hover:via-orange-900/10 hover:to-amber-500/15", 
        borderHover: "hover:border-orange-400/40", 
        shadowHover: "hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)]",
        iconBg: "bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 group-hover:border-orange-500/40",
        glowGrad: "from-orange-500/20 via-transparent to-amber-500/10"
    },
    { 
        label: "Rating", 
        target: 4.9, 
        suffix: "/5", 
        icon: <FaHeartbeat />, 
        accent: "text-rose-400", 
        bgGrad: "bg-gradient-to-br from-rose-500/10 via-rose-900/5 to-pink-500/5 hover:from-rose-500/20 hover:via-rose-900/10 hover:to-pink-500/15", 
        borderHover: "hover:border-rose-400/40", 
        shadowHover: "hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.5)]",
        iconBg: "bg-rose-500/10 border border-rose-500/20 group-hover:bg-rose-500/20 group-hover:border-rose-500/40",
        glowGrad: "from-rose-500/20 via-transparent to-pink-500/10"
    }
];

const StatItem = ({ stat }) => {
    const { count, ref, startCount } = useNumCount(stat.target);

    return (
        <motion.div
            ref={ref}
            onMouseEnter={startCount}
            initial="rest"
            whileHover="hover"
            className={`relative group p-6 lg:p-8 rounded-3xl border border-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${stat.bgGrad} ${stat.borderHover} ${stat.shadowHover}`}
        >
            {/* glow effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${stat.glowGrad}`} />

            <div className="flex flex-col items-center gap-4 relative z-10">
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${stat.iconBg} ${stat.accent}`}>
                    {stat.icon}
                </div>

                <div className="text-center">
                    <h3 className="text-2xl lg:text-4xl font-extrabold text-white mb-2 leading-none tracking-tight">
                        {count}{stat.suffix}
                    </h3>

                    <motion.p
                        variants={labelVariants}
                        className="text-gray-300 font-bold uppercase tracking-[0.25em] text-[10px] lg:text-xs opacity-80"
                    >
                        {stat.label}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

const StatsCard = () => {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{
                    backgroundImage: "url('/assets/statsbg.png')",
                }}
            />

            {/* dark overlay + gradient animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />

            {/* animated light glow */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.2),transparent_45%)]" />

            {/* content */}
            <div className="relative z-10 grid grid-cols-1 gap-4 px-4 py-8 sm:grid-cols-2 md:gap-6 md:px-8 lg:grid-cols-4 lg:px-10">
                {stats.map((stat, idx) => (
                    <StatItem key={idx} stat={stat} />
                ))}
            </div>
        </div>
    );
};

export default StatsCard;