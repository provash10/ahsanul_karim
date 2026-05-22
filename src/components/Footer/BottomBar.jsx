"use client";

import Link from "next/link";
import { MdOutlineCopyright } from "react-icons/md";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { NameToggle } from "@/app/animations/FooterAnimate/bottomBarAnimate";

const colors = ["#f97316", "#3b82f6", "#10b981", "#a855f7", "#ef4444", "#eab308"];

export default function BottomBar() {
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setColorIndex(i => (i + 1) % colors.length);
        }, 800);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="border-t border-slate-800 mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4 text-xs font-semibold uppercase tracking-widest text-gray-500">

                {/* Left - Ahsanul / Digital Marketing Expert toggle */}
                <div className="text-center sm:text-left">
                    <NameToggle
                        href="https://facebook.com/ahsanuldigital"
                        className="text-white hover:text-blue-400 transition-colors"
                    />
                </div>

                {/* Right - Copyright + Developed By */}
                <p className="flex flex-wrap items-center gap-1 justify-center sm:justify-end text-center">
                    Copyright <MdOutlineCopyright className="text-sm" /> {new Date().getFullYear()} | All Rights Reserved.
                </p>
            </div>
        </div>
    );
}
