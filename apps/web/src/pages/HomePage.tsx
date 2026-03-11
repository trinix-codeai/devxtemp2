import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import anime from "animejs";
import { destinations, packages, testimonials, experienceCategories, stats } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* ── Stat counter animation ───────────────────────────────────── */
function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!ref.current || counted.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          anime({
            targets: { val: 0 },
            val: value,
            round: 1,
            easing: "easeOutExpo",
            duration: 2000,
            update(anim) {
              if (ref.current) {
                const obj = anim.animations[0];
                ref.current.textContent = `${Math.round(Number(obj.currentValue)).toLocaleString()}${suffix}`;
              }
            },
          });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <div className="text-center">
      <span ref={ref} className="block font-heading text-3xl font-bold text-white md:text-4xl">
        0{suffix}
      </span>
      <span className="mt-1 block text-sm text-white/70">{label}</span>
    </div>
  );
}

/* ── Stars ─────────────────────────────────────────────────────── */
function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars text-sm" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(Math.floor(rating))}
      {rating % 1 >= 0.5 ? "½" : ""}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════════
   HOME PAGE
   ══════════════════════════════════════════════════════════════════ */
export function HomePage() {
  const destRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });
  const pkgRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });
  const expRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });
  const blogRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Stats Bar ─────────────────────────────────────────── */}
      <section className="relative -mt-14 z-10">
        <div className="container-shell">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-3xl bg-gradient-brand p-8 shadow-soft-xl">
            {stats.map((s) => (
              <AnimatedStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Destinations ──────────────────────────────────────── */}
      <section className="section-padding" ref={destRef}>
        <div className="container-shell">
          <div className="text-center mb-14 sr-item">
            <span className="badge badge-coral mb-3 inline-block">Popular Destinations</span>
            <h2 className="text-display-sm md:text-display-md font-heading">
              Where would you like to go?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-neutral-500 dark:text-neutral-400">
              Discover handpicked destinations curated by our travel experts for unforgettable experiences.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.slice(0, 4).map((d) => (
              <Link
                key={d.id}
                to={`/destinations/${d.slug}`}
                className="sr-item group relative overflow-hidden rounded-3xl aspect-[3/4] bg-neutral-200 dark:bg-neutral-800"
              >
                <img
                  src={d.hero.url}
                  alt={d.hero.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-card" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-white">{d.name}</h3>
                  <p className="text-white/70 text-sm">{d.country}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-white font-semibold text-sm">
                      From <span className="text-coral-400">${d.priceFrom.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center gap-1 text-sm text-white/80">
                      <Stars rating={d.rating} /> {d.rating}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-xs font-medium text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View Tours →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/destinations" className="btn-primary">
              Explore All Destinations →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Experience Categories ─────────────────────────────── */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900/50" ref={expRef}>
        <div className="container-shell">
          <div className="text-center mb-12 sr-item">
            <h2 className="text-display-sm font-heading">Travel by Experience</h2>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">Find your perfect type of adventure</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {experienceCategories.map((cat) => (
              <Link
                key={cat.label}
                to="/packages"
                className="sr-item group card-surface flex flex-col items-center p-6 text-center hover:border-coral-200 dark:hover:border-coral-800"
              >
                <span className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {cat.icon}
                </span>
                <span className="font-heading text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                  {cat.label}
                </span>
                <span className="mt-1 text-xs text-neutral-400">{cat.count} tours</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Packages ─────────────────────────────────── */}
      <section className="section-padding" ref={pkgRef}>
        <div className="container-shell">
          <div className="text-center mb-14 sr-item">
            <span className="badge badge-ocean mb-3 inline-block">Featured Packages</span>
            <h2 className="text-display-sm md:text-display-md font-heading">
              Curated Travel Packages
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-neutral-500 dark:text-neutral-400">
              All-inclusive experiences designed for maximum enjoyment and zero hassle.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(0, 3).map((pkg) => (
              <Link
                key={pkg.id}
                to={`/packages/${pkg.slug}`}
                className="sr-item group card-surface overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={pkg.hero.url}
                    alt={pkg.hero.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {pkg.originalPrice && (
                    <span className="absolute top-4 right-4 badge bg-red-500 text-white text-xs font-bold">
                      {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                    </span>
                  )}
                  <span className="absolute top-4 left-4 badge bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 text-xs">
                    {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white group-hover:text-coral-500 transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{pkg.summary}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-neutral-400">
                        📅 {pkg.durationDays} days
                      </span>
                      {pkg.mealsIncluded && (
                        <span className="flex items-center gap-1 text-xs text-neutral-400">
                          🍽️ Meals
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-sm">
                      <Stars rating={pkg.rating} /> <span className="text-neutral-500 text-xs">{pkg.rating}</span>
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-700 pt-4">
                    <div>
                      {pkg.originalPrice && (
                        <span className="text-xs text-neutral-400 line-through mr-2">
                          ${pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-lg font-bold text-coral-500">
                        ${pkg.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-neutral-400"> / person</span>
                    </div>
                    <span className="text-sm font-medium text-coral-500 opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      Book Now →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/packages" className="btn-primary">
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── Newsletter ────────────────────────────────────────── */}
      <NewsletterSection />
    </>
  );
}

/* ── Hero Section ─────────────────────────────────────────────── */
function HeroSection() {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroContentRef.current) return;
    anime({
      targets: heroContentRef.current.querySelectorAll(".hero-anim"),
      opacity: [0, 1],
      translateY: [40, 0],
      easing: "easeOutCubic",
      duration: 1000,
      delay: anime.stagger(200, { start: 300 }),
    });
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background Video Placeholder — gradient fallback */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80"
          alt="Hero background — tropical paradise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container-shell relative z-10" ref={heroContentRef}>
        <div className="max-w-3xl">
          <span className="hero-anim inline-block rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-5 py-2 text-xs font-medium text-white/90 mb-6 opacity-0">
            ✨ Award-Winning Travel Experiences
          </span>
          <h1 className="hero-anim text-display-lg md:text-display-xl font-display text-white leading-tight opacity-0">
            Discover the world's most{" "}
            <span className="text-gradient bg-gradient-coral bg-clip-text text-transparent">
              extraordinary
            </span>{" "}
            places
          </h1>
          <p className="hero-anim mt-6 max-w-xl text-lg text-white/80 leading-relaxed opacity-0">
            Handcrafted luxury travel experiences for discerning explorers.
            Let our experts design your perfect journey.
          </p>
          <div className="hero-anim mt-8 flex flex-wrap gap-4 opacity-0">
            <Link to="/destinations" className="btn-primary text-base px-8 py-4">
              Explore Destinations
            </Link>
            <Link to="/packages" className="btn-outline text-base px-8 py-4">
              View Packages
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hero-anim mt-12 max-w-4xl opacity-0">
          <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <input
                type="text"
                placeholder="Where to?"
                className="rounded-xl bg-white/90 dark:bg-neutral-800 px-5 py-3.5 text-sm text-neutral-800 dark:text-white placeholder:text-neutral-400 outline-none"
                aria-label="Destination search"
              />
              <input
                type="date"
                className="rounded-xl bg-white/90 dark:bg-neutral-800 px-5 py-3.5 text-sm text-neutral-800 dark:text-white outline-none"
                aria-label="Travel date"
              />
              <select
                className="rounded-xl bg-white/90 dark:bg-neutral-800 px-5 py-3.5 text-sm text-neutral-800 dark:text-white outline-none appearance-none"
                aria-label="Number of guests"
                defaultValue=""
              >
                <option value="" disabled>Guests</option>
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3-5 Guests</option>
                <option>6+ Guests</option>
              </select>
              <button className="btn-primary rounded-xl py-3.5 text-base">
                🔍 Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs">Scroll to explore</span>
          <span className="block h-8 w-5 rounded-full border-2 border-white/30 relative">
            <span className="absolute top-1 left-1/2 -translate-x-1/2 h-2 w-1 rounded-full bg-white/60 animate-bounce" />
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ─────────────────────────────────────────────── */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useScrollReveal<HTMLElement>({ origin: "bottom" });

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900/50" ref={sectionRef}>
      <div className="container-narrow text-center sr-item">
        <span className="badge badge-coral mb-3 inline-block">Testimonials</span>
        <h2 className="text-display-sm font-heading">What Our Travelers Say</h2>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="relative min-h-[200px]" key={t.id}>
            <img
              src={t.avatar}
              alt={t.name}
              className="mx-auto h-20 w-20 rounded-full object-cover border-4 border-white dark:border-neutral-700 shadow-soft"
            />
            <Stars rating={t.rating} />
            <blockquote className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 italic">
              &ldquo;{t.body}&rdquo;
            </blockquote>
            <div className="mt-4">
              <p className="font-heading font-semibold text-neutral-900 dark:text-white">{t.name}</p>
              <p className="text-sm text-neutral-500">{t.location}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-coral-500" : "w-2.5 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Newsletter ────────────────────────────────────────────────── */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>({ origin: "bottom" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container-shell sr-item">
        <div className="rounded-4xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            alt="Beach newsletter background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/80 backdrop-blur-sm" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 p-10 md:p-16 items-center">
            <div>
              <h2 className="text-display-sm font-heading text-white">
                Get Travel Inspiration in Your Inbox
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Join 50,000+ travelers. Receive handpicked destinations, exclusive deals,
                and insider tips. No spam — only the good stuff.
              </p>
            </div>
            <div>
              {submitted ? (
                <div className="text-center py-8">
                  <span className="text-5xl mb-4 block">✓</span>
                  <p className="text-xl font-heading text-white font-bold">You're in!</p>
                  <p className="text-white/70 mt-2">Welcome to the Trinix community.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 px-6 py-4 text-white placeholder:text-white/50 outline-none focus:border-coral-400 focus:ring-1 focus:ring-coral-400 transition-colors"
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" className="btn-primary w-full py-4 text-base">
                    Subscribe Now →
                  </button>
                  <p className="text-xs text-white/50 text-center">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
