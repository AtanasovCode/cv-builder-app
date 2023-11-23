import { useRef } from "react";


const useSmoothScroll = () => {
    const targetRef = useRef();
    let animationFrameId;

    const smoothScroll = (start, end, duration) => {
        const startTime = performance.now();
        const animateScroll = (timestamp) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const scrollTop = start + (end - start) * progress;

            targetRef.current.scrollTop = scrollTop;

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animateScroll);
            }
        };

        animateScroll(startTime);
    };

    const handleScroll = (e, deltaMultiplier = 2, scrollDuration = 300) => {
        const delta = e.deltaY;
        cancelAnimationFrame(animationFrameId);

        const startScrollTop = targetRef.current.scrollTop;
        const endScrollTop = startScrollTop + delta * deltaMultiplier;

        smoothScroll(startScrollTop, endScrollTop, scrollDuration);
    };

    return { targetRef, handleScroll };
};

export default useSmoothScroll;
