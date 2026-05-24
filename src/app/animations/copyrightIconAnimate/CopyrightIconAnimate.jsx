"use client";

import { motion } from "motion/react";
import { MdOutlineCopyright } from "react-icons/md";

export function AnimatedCopyrightIcon() {
    return (
        <motion.span
            className="inline-block text-white drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
            animate={{ rotate: 360 }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            <MdOutlineCopyright className="text-sm" />
        </motion.span>
    );
}
