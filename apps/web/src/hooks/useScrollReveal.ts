import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

/**
 * Hook that applies ScrollReveal animation to a container element.
 * All direct children matching `selector` get the reveal treatment.
 */
export function useScrollReveal<T extends HTMLElement>(
    options: scrollReveal.ScrollRevealObjectOptions = {},
    selector = ".sr-item"
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        if (!ref.current) return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const sr = ScrollReveal({
            distance: "30px",
            duration: 800,
            easing: "cubic-bezier(0.5, 0, 0, 1)",
            interval: 120,
            reset: false,
            ...options,
        });

        sr.reveal(`${getQuerySelector(ref.current)} ${selector}`);

        return () => sr.destroy();
    }, []);

    return ref;
}

function getQuerySelector(el: HTMLElement): string {
    if (el.id) return `#${el.id}`;
    // Fallback: add a unique id
    const uid = `sr-${Math.random().toString(36).slice(2, 9)}`;
    el.id = uid;
    return `#${uid}`;
}
