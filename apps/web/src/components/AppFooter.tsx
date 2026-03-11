import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Careers", to: "#" },
    { label: "Press", to: "#" },
  ],
  Experience: [
    { label: "Destinations", to: "/destinations" },
    { label: "Packages", to: "/packages" },
    { label: "Group Tours", to: "#" },
    { label: "Gift Cards", to: "#" },
  ],
  Support: [
    { label: "Help Center", to: "/contact" },
    { label: "Contact Us", to: "/contact" },
    { label: "Privacy Policy", to: "#" },
    { label: "Terms of Service", to: "#" },
  ],
};

const socials = [
  { icon: "📸", label: "Instagram", href: "#" },
  { icon: "📘", label: "Facebook", href: "#" },
  { icon: "🐦", label: "Twitter", href: "#" },
  { icon: "📌", label: "Pinterest", href: "#" },
];

export function AppFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-neutral-950 text-neutral-400">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-coral-500/50 to-transparent" />

      <div className="container-shell py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-coral-500 text-white text-lg transition-transform group-hover:scale-105">
                ✈
              </span>
              <span className="font-heading text-xl font-bold text-white">
                Trinix Travel
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7">
              Crafting extraordinary travel experiences for discerning explorers
              worldwide. Your journey starts here.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-neutral-800 text-sm transition-all hover:bg-coral-500 hover:text-white hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors hover:text-coral-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Mini */}
        <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl bg-neutral-900 p-8 md:flex-row md:justify-between">
          <div>
            <h4 className="font-heading text-lg font-bold text-white">
              Get travel inspiration in your inbox
            </h4>
            <p className="mt-1 text-sm text-neutral-500">
              No spam. Only handpicked destinations and insider tips.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-neutral-800 px-5 py-3 text-sm text-white placeholder:text-neutral-500 border border-neutral-700 focus:border-coral-500 focus:ring-1 focus:ring-coral-500 outline-none transition-colors"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 md:flex-row">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Trinix Travel. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-neutral-600">
            <Link to="#" className="hover:text-neutral-400">Privacy</Link>
            <Link to="#" className="hover:text-neutral-400">Terms</Link>
            <Link to="#" className="hover:text-neutral-400">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
