"use client";

import { motion, useAnimation } from "motion/react";

export default function NavbarHireBtn({ onClick }) {
    const sweepControls = useAnimation();

    const handleHover = () => {
        sweepControls.start({
            x: ["-100%", "200%"],
            transition: { duration: 0.5, ease: "easeInOut" }
        });
    };

    return (
        <button
            onClick={onClick}
            className="relative overflow-hidden btn font-bold px-3 py-1 rounded"
            onMouseEnter={handleHover}
        >
            <span className="relative z-10">Hire Me</span>
            <motion.span
                animate={sweepControls}
                initial={{ x: "-100%" }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                    width: "60%",
                    top: 0,
                    bottom: 0,
                }}
            />
        </button>
    );
}
