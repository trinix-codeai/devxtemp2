import { useEffect, useRef, useCallback } from "react";
import anime from "animejs";

/**
 * Returns a ref and a play() function.
 * Attach the ref to the element you want to animate.
 * Call play() whenever you want to trigger the animation.
 */
export function useAnime(params: anime.AnimeParams) {
    const ref = useRef<HTMLElement>(null);
    const animationRef = useRef<anime.AnimeInstance | null>(null);

    const play = useCallback(() => {
        if (!ref.current) return;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        animationRef.current = anime({
            targets: ref.current,
            ...params,
        });
    }, []);

    useEffect(() => {
        return () => {
            animationRef.current?.pause();
        };
    }, []);

    return { ref, play };
}

/**
 * Stagger-animate a list of children matching `selector` inside a container.
 */
export function useAnimeStagger(
    selector: string,
    params: Omit<anime.AnimeParams, "targets"> = {}
) {
    const ref = useRef<HTMLElement>(null);

    const play = useCallback(() => {
        if (!ref.current) return;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        anime({
            targets: ref.current.querySelectorAll(selector),
            opacity: [0, 1],
            translateY: [30, 0],
            easing: "easeOutCubic",
            duration: 700,
            delay: anime.stagger(100),
            ...params,
        });
    }, []);

    useEffect(() => {
        play();
    }, [play]);

    return ref;
}
