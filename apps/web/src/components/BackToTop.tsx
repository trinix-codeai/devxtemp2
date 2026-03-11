import { useState, useEffect } from "react";

export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-coral-500 text-white shadow-glow text-xl transition-all duration-300 hover:bg-coral-600 hover:scale-110 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
        >
            ↑
        </button>
    );
}
