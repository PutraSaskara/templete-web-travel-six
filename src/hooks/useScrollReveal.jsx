import { useEffect, useRef, useState } from 'react';

/**
 * Hook for scroll-triggered reveal animations
 * Uses CSS transitions instead of keyframe animations to prevent flicker
 * @param {Object} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - ref to attach, and whether element is visible
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -30px 0px',
                ...options,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isVisible];
}

/**
 * Component wrapper for scroll reveal animations
 * Uses CSS transitions for smooth, flicker-free animations
 */
export function ScrollReveal({
    children,
    animation = 'fade-in-up',
    delay = 0,
    className = '',
    ...props
}) {
    const [ref, isVisible] = useScrollReveal();

    // Use transition-based styles instead of keyframe animations to prevent flicker
    const getAnimationStyles = () => {
        const baseTransition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
        const transitionDelay = delay ? `${delay}ms` : '0ms';

        if (!isVisible) {
            // Initial hidden state
            switch (animation) {
                case 'fade-in-up':
                    return {
                        opacity: 0,
                        transform: 'translateY(30px)',
                        transition: baseTransition,
                        transitionDelay,
                    };
                case 'fade-in-down':
                    return {
                        opacity: 0,
                        transform: 'translateY(-30px)',
                        transition: baseTransition,
                        transitionDelay,
                    };
                case 'fade-in-left':
                    return {
                        opacity: 0,
                        transform: 'translateX(-30px)',
                        transition: baseTransition,
                        transitionDelay,
                    };
                case 'fade-in-right':
                    return {
                        opacity: 0,
                        transform: 'translateX(30px)',
                        transition: baseTransition,
                        transitionDelay,
                    };
                case 'scale-in':
                    return {
                        opacity: 0,
                        transform: 'scale(0.95)',
                        transition: baseTransition,
                        transitionDelay,
                    };
                case 'fade-in':
                default:
                    return {
                        opacity: 0,
                        transition: baseTransition,
                        transitionDelay,
                    };
            }
        }

        // Visible state - animate to final position
        return {
            opacity: 1,
            transform: 'translateY(0) translateX(0) scale(1)',
            transition: baseTransition,
            transitionDelay,
        };
    };

    return (
        <div
            ref={ref}
            className={className}
            style={getAnimationStyles()}
            {...props}
        >
            {children}
        </div>
    );
}
