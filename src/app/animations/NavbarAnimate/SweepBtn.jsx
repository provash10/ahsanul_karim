"use client";

import { motion, useAnimation } from "motion/react";

export function SweepLinkBtn({ href, children, className, target, rel, style }) {
    const sweepControls = useAnimation();
    const handleHover = () => {
        sweepControls.start({
            x: ["-100%", "200%"],
            transition: { duration: 0.5, ease: "easeInOut" }
        });
    };
    return (
        <a
            href={href}
            target={target}
            rel={rel}
            style={style}
            className={`relative overflow-hidden btn font-bold ${className}`}
            onMouseEnter={handleHover}
        >
            <span className="relative z-10">{children}</span>
            <motion.span
                animate={sweepControls}
                initial={{ x: "-100%" }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                    width: "60%", top: 0, bottom: 0,
                }}
            />
        </a>
    );
}

export function SweepBtn({ onClick, children, className }) {
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
            className={`relative overflow-hidden btn font-bold ${className}`}
            onMouseEnter={handleHover}
        >
            <span className="relative z-10">{children}</span>
            <motion.span
                animate={sweepControls}
                initial={{ x: "-100%" }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
                    width: "60%", top: 0, bottom: 0,
                }}
            />
        </button>
    );
}
