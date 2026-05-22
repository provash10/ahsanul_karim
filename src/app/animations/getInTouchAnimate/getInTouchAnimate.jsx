export const titleFadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    whileHover: { opacity: 1, y: 0, scale: 1.03, transition: { duration: 0.3 } },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const leftSlideIn = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    whileHover: { x: -6, transition: { duration: 0.3, ease: "easeOut" } },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
};

export const rightSlideIn = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    whileHover: { x: 6, transition: { duration: 0.3, ease: "easeOut" } },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 }
};

export const inputFocus = {
    whileFocus: { scale: 1.02, transition: { duration: 0.2 } }
};
