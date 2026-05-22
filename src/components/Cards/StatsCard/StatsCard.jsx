"use client";

import React from "react";
import { FaUsers, FaUserCheck, FaAward, FaHeartbeat } from "react-icons/fa";
import { motion } from "motion/react";
import useNumCount from "@/app/animations/numCount/numCount";
import { labelVariants } from "@/app/animations/statsTextAnimate/statsTextAnimate";

const stats = [
    { label: "Happy Clients", target: 200, suffix: "+", icon: <FaUsers />, accent: "text-blue-400" },
    { label: "Project Completed", target: 250, suffix: "+", icon: <FaUserCheck />, accent: "text-emerald-400" },
    { label: "Success Rate", target: 99, suffix: "%", icon: <FaAward />, accent: "text-orange-400" },
    { label: "Rating", target: 4.9, suffix: "/5", icon: <FaHeartbeat />, accent: "text-rose-400" }
];

const StatItem = ({ stat }) => {
    const { count, ref, startCount } = useNumCount(stat.target);
    return (
        <motion.div
            ref={ref}
            onMouseEnter={startCount}
            initial="rest"
            whileHover="hover"
            className="relative group p-6 lg:p-8 rounded-3xl bg-[#0a192f] border border-slate-700/60 transition-all duration-500 hover:shadow-[0_0_40px_-8px_rgba(59,130,246,0.5),0_40px_80px_-20px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:border-blue-500/60 overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]"
        >
            <div className="flex flex-col items-center gap-4 relative z-10">
                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center text-3xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 bg-white/5 border border-white/10 ${stat.accent}`}>
                    {stat.icon}
                </div>
                <div className="text-center">
                    <h3 className="text-2xl lg:text-4xl font-[1000] text-white mb-2 leading-none tracking-tighter">
                        {count}{stat.suffix}
                    </h3>
                    <motion.p
                        variants={labelVariants}
                        className="text-gray-400 font-black uppercase tracking-[0.2em] text-[9px] lg:text-[10px] leading-none opacity-80"
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 px-4 md:px-16 py-6 bg-[#060d1f] rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] border border-slate-800/60">
            {stats.map((stat, idx) => (
                <StatItem key={idx} stat={stat} />
            ))}
        </div>
    );
};

export default StatsCard;
