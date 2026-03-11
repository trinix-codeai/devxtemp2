import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { navigation } from "../lib/navigation";

export function AppHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
          ? "py-2 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl shadow-soft border-b border-neutral-200/50 dark:border-neutral-700/50"
          : "py-4 bg-transparent"
        }`}
    >
      <div className="container-shell flex items-center justify-between">
        {/* Logo */}
        <Link
          className="flex items-center gap-3 group"
          to="/"
          onClick={() => setOpen(false)}
        >
          <span
            className={`grid h-11 w-11 place-items-center rounded-2xl text-lg transition-all duration-300 group-hover:scale-105 ${scrolled
                ? "bg-brand text-white"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30"
              }`}
          >
            ✈
          </span>
          <span
            className={`font-heading text-lg font-bold transition-colors duration-300 ${scrolled ? "text-brand dark:text-white" : "text-white"
              }`}
          >
            Trinix Travel
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${scrolled
                  ? isActive
                    ? "text-coral-500 bg-coral-50 dark:bg-coral-900/20"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-brand dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  : isActive
                    ? "text-white bg-white/20 backdrop-blur-sm"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className={`grid h-10 w-10 place-items-center rounded-full text-sm transition-all duration-300 ${scrolled
                ? "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-400"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Search */}
          <button
            aria-label="Search"
            className={`hidden sm:grid h-10 w-10 place-items-center rounded-full text-sm transition-all duration-300 ${scrolled
                ? "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-400"
                : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
          >
            🔍
          </button>

          {/* Sign In */}
          <Link
            className={`hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${scrolled
                ? "bg-coral-500 text-white hover:bg-coral-600 shadow-md hover:shadow-glow"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
              }`}
            to="/auth"
          >
            Sign In
          </Link>

          {/* Mobile Toggle */}
          <button
            aria-expanded={open}
            aria-label="Toggle navigation"
            className={`grid h-10 w-10 place-items-center rounded-full lg:hidden transition-all duration-300 ${scrolled
                ? "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
                : "text-white hover:bg-white/10"
              }`}
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container-shell py-4 space-y-1 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${isActive
                  ? "text-coral-500 bg-coral-50 dark:bg-coral-900/20"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`
              }
              onClick={() => setOpen(false)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            className="block rounded-2xl bg-coral-500 px-4 py-3 text-center text-sm font-semibold text-white mt-2"
            onClick={() => setOpen(false)}
            to="/auth"
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
