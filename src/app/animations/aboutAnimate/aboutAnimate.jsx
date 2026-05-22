// Text - slide up + fade
export const textSlideUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
};

// Role - delay fade
export const roleFade = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut", delay: 0.3 }
};

// Image - zoom + float
export const imageZoomFloat = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
};

export const floatAnimation = {
    animate: { y: [0, -10, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

// Buttons - hover scale
export const buttonHover = {
    whileHover: { scale: 1.08, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
};

// Stagger container
export const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15 } }
};

// Stagger child
export const staggerChild = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
