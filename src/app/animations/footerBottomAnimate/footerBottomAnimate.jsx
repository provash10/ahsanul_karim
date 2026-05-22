"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export const designBySlide = {
    initial: { opacity: 1, x: 0 },
    animate: {
        opacity: 1,
        x: [0, 8, 0],
        transition: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }
    }
};

export const copyrightDance = {
    animate: {
        y: [0, -6, 0, 6, 0],
        transition: { duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }
    }
};

export const arrowIcon = (delay = 0) => ({
    animate: {
        x: [-6, 6, -6],
        opacity: [0.3, 1, 0.3],
        transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 3, delay }
    }
});

export const ProvashToggle = ({ href, className }) => {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setShow(prev => !prev);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    if (!mounted) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                style={{ minWidth: "70px", display: "inline-block" }}
            >
                Provash
            </a>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative inline-block overflow-hidden ${className}`}
            style={{ minWidth: "70px", display: "inline-block" }}
        >
            <AnimatePresence mode="wait">
                {show ? (
                    <motion.span
                        key="name"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="block"
                    >
                        Provash
                    </motion.span>
                ) : (
                    <motion.span
                        key="click"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="block text-blue-400"
                    >
                        Click Me
                    </motion.span>
                )}
            </AnimatePresence>
        </a>
    );
};

export const AhsanulToggle = ({ href, className }) => {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setShow(prev => !prev);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    if (!mounted) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                Ahsanul
            </a>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative inline-block overflow-hidden ${className}`}
            style={{ minWidth: "160px", display: "inline-block" }}
        >
            <AnimatePresence mode="wait">
                {show ? (
                    <motion.span
                        key="name"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="block"
                    >
                        Ahsanul
                    </motion.span>
                ) : (
                    <motion.span
                        key="title"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="block text-orange-400"
                    >
                        Digital Marketing Expert
                    </motion.span>
                )}
            </AnimatePresence>
        </a>
    );
};
