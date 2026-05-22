"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const useNumCount = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    const startCount = useCallback(() => {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
    }, [target, duration]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCount();
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [startCount]);

    return { count, ref, startCount };
};

export default useNumCount;
