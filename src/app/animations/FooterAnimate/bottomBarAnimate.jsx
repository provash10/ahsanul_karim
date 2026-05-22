"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const NameToggle = ({ href, className }) => {
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(true);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setShow(p => !p), 2500);
        return () => clearInterval(timer);
    }, []);

    if (!mounted) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                Ahsanul Karim
            </a>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative inline-block overflow-hidden ${className}`}
            style={{ minWidth: "180px" }}
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
                        Ahsanul Karim
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
                        Digital Marketing Expert !!!
                    </motion.span>
                )}
            </AnimatePresence>
        </a>
    );
};
