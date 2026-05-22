export const hoverScale = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97, transition: { type: "spring", stiffness: 300, damping: 20 } },
    transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverLift = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { y: -8 },
    whileTap: { y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } },
    transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverGlow = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05, y: -5 },
    whileTap: { scale: 0.97, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } },
    transition: { duration: 0.3, ease: "easeOut" }
};
