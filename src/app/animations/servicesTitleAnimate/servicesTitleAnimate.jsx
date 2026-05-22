export const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -5, transition: { duration: 0.3, ease: "easeOut" } }
};

export const titleVariants = {
    rest: { opacity: 0.7, y: 10 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

export const headingDrop = {
    initial: { opacity: 0, y: -60, rotate: -180, fontWeight: 400 },
    animate: { opacity: 1, y: 0, rotate: 0, fontWeight: 700, transition: { duration: 0.8, ease: "easeOut" } }
};

export const dancingText = {
    animate: {
        y: [0, -8, 0],
        transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
    }
};
