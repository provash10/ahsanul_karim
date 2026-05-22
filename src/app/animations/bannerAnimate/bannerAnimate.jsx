// Digital, Marketing, Expert - stagger slide in from left with skew
export const heroTextContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

export const heroTextItem = {
    initial: { opacity: 0, x: -80, skewX: -10 },
    animate: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

// Subscribe button - bounce in from bottom
export const subscribeBtn = {
    initial: { opacity: 0, y: 60, scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "backOut", delay: 0.8 } },
    whileHover: { scale: 1.08, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
};

// Ahsanul Digital title - fade + slide up
export const brandTitle = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 1 } }
};

// Click . Convert . Grow - each word pops in with scale
export const taglineContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } }
};

export const taglineItem = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } }
};

// "Grow Your Business With Me" - typewriter feel, slide from right
export const growText = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.6 } }
};

// Image - zoom in + continuous float
export const bannerImage = {
    initial: { opacity: 0, scale: 0.7, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.9, ease: "easeOut", delay: 0.5 } }
};

export const imageFloat = {
    animate: { y: [0, -12, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

// Digital - rotate + slide from left
export const digitalHover = {
    initial: { opacity: 1, x: 0, rotate: 0 },
    hover: { x: [-60, 10, 0], rotate: [-10, 5, 0], transition: { duration: 0.6, ease: "easeOut" } }
};

// Marketing - scale bounce from bottom
export const marketingHover = {
    initial: { opacity: 1, y: 0, scale: 1 },
    hover: { y: [-40, 8, 0], scale: [0.8, 1.1, 1], transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } }
};

// Expert - flip from right
export const expertHover = {
    initial: { opacity: 1, x: 0, rotateY: 0 },
    hover: { x: [60, -10, 0], rotateY: [90, -10, 0], transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
};

// Logo - fade drop from top
export const logoAnim = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Logo - continuous top to bottom bounce, stays within banner
export const logoBounce = {
    animate: { y: [0, 200, 0] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
};

// Banner icon - alltime 360 rotate
export const iconRotate = {
    animate: { rotate: 360 },
    transition: { duration: 3, repeat: Infinity, ease: "linear" }
};

// Ahsanul Digital - hover: letter spacing expand
export const brandTitleHover = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 1 } },
    whileHover: { letterSpacing: "0.08em", scale: 1.04, transition: { duration: 0.3 } }
};

// Click.Convert.Grow container - hover stagger re-animate
export const taglineHoverContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } }
};

export const taglineHoverItem = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "backOut" } },
    whileHover: { scale: 1.2, y: -4, transition: { duration: 0.2 } }
};

// Grow Your Business With Me - hover glow pulse
export const growTextHover = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1.6 } },
    whileHover: { scale: 1.05, textShadow: "0 0 12px rgba(255,255,255,0.6)", transition: { duration: 0.3 } }
};

// Rotating text component - shows one item at a time, right to left
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const RotatingText = ({ items, className = "", interval = 3000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    return (
        <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ opacity: 0, x: 100, color: "#ffffff" }}
                    animate={{ opacity: 1, x: 0, color: "#f97316" }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={className}
                    style={{ background: "linear-gradient(90deg, #ffffff, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                    {items[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};

export const RotatingTextRight = ({ items, className = "", interval = 3000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    return (
        <div className="overflow-hidden relative text-left">
            <AnimatePresence mode="wait">
                <motion.p
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={className}
                    style={{ background: "linear-gradient(90deg, #f97316, #ffffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                >
                    {items[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};

// Services list - right to left stagger
export const servicesListContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
};

export const servicesListItem = {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
