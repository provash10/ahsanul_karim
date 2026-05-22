// "Need a Custom" - slides in from left
export const ccsLeftSlide = {
    initial: { opacity: 0, x: -120 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

// "Marketing Strategy" - slides in from right
export const ccsRightSlide = {
    initial: { opacity: 0, x: 120 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 } }
};

// Heading dance loop after entering
export const ccsDance = {
    animate: {
        y: [0, -10, 0, -6, 0],
        transition: { duration: 1.4, ease: "easeInOut", delay: 1.0, repeat: Infinity, repeatDelay: 3.5 }
    }
};

// Paragraph - word by word stagger container
export const ccsWordContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
};

// Each word fades + slides up
export const ccsWordItem = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
};

// Full sentence dance - alltime loop
export const ccsSentenceDance = {
    animate: {
        y: [0, -5, 0, -3, 0],
        transition: { duration: 1.8, ease: "easeInOut", delay: 2.0, repeat: Infinity, repeatDelay: 1.5 }
    }
};

// Buttons - bounce in from bottom
export const ccsBtnContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } }
};

export const ccsBtnItem = {
    initial: { opacity: 0, y: 40, scale: 0.85 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "backOut" } },
    whileHover: { scale: 1.06, y: -3, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
};
