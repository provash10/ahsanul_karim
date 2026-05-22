export const descVariants = {
    rest: { opacity: 1, x: 0 },
    hover: (i) => ({
        opacity: 1,
        x: [-30, 0],
        transition: { duration: 0.3, ease: "easeOut", delay: i * 0.08 }
    })
};
