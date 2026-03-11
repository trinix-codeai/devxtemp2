import { useEffect, useRef } from "react";
import anime from "animejs";
import { team, stats } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);
  useEffect(() => {
    if (!ref.current || counted.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !counted.current) {
        counted.current = true;
        anime({
          targets: { v: 0 }, v: value, round: 1, easing: "easeOutExpo", duration: 2000,
          update(a) { if (ref.current) ref.current.textContent = `${Math.round(Number(a.animations[0].currentValue)).toLocaleString()}${suffix}`; },
        });
      }
    }, { threshold: 0.5 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value, suffix]);
  return <span ref={ref} className="block font-heading text-4xl md:text-5xl font-bold text-coral-500">0{suffix}</span>;
}

const timeline = [
  { year: "2018", title: "Founded", desc: "Started with a vision to redefine luxury travel." },
  { year: "2019", title: "First 100 Clients", desc: "Reached our first milestone with rave reviews." },
  { year: "2021", title: "Global Expansion", desc: "Expanded operations to 45+ countries." },
  { year: "2023", title: "Industry Award", desc: "Won Forbes Travel Award for Innovation." },
  { year: "2025", title: "12K+ Travelers", desc: "Surpassed 12,000 happy travelers worldwide." },
];

export function AboutPage() {
  const heroRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });
  const teamRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });
  const timelineRef = useScrollReveal<HTMLDivElement>({ origin: "left" });

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="container-shell mb-16" ref={heroRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="sr-item">
            <span className="badge badge-coral mb-4 inline-block">Our Story</span>
            <h1 className="text-display-sm md:text-display-md font-heading">
              We Believe Travel<br />Changes Everything
            </h1>
            <p className="mt-6 text-neutral-500 dark:text-neutral-400 leading-relaxed text-lg">
              Founded in 2018, Trinix Travel was born from a simple belief: that travel, done right,
              has the power to transform lives. We don't just book trips — we craft immersive
              experiences that connect people with cultures, landscapes, and each other.
            </p>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Our team of passionate travel experts spans 15 countries and brings decades of
              combined experience in luxury hospitality, adventure tourism, and cultural curation.
            </p>
          </div>
          <div className="sr-item relative">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
              alt="Travel road"
              className="rounded-3xl object-cover w-full aspect-[4/5] shadow-soft-xl"
            />
            <div className="absolute -bottom-6 -left-6 card-surface p-5 shadow-soft-lg">
              <p className="font-heading text-2xl font-bold text-coral-500">8+</p>
              <p className="text-xs text-neutral-500">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900/50">
        <div className="container-shell grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <span className="mt-2 block text-sm text-neutral-500">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" ref={timelineRef}>
        <div className="container-narrow">
          <h2 className="text-display-sm font-heading text-center mb-14 sr-item">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-coral-200 dark:bg-coral-800" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`sr-item relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                  <p className="font-heading text-sm text-coral-500 font-bold">{item.year}</p>
                  <h3 className="font-heading text-lg font-bold mt-1">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                </div>
                <div className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-coral-500 text-white text-sm font-bold shadow-glow">
                  {item.year.slice(-2)}
                </div>
                <div className="flex-1 md:hidden">
                  <p className="font-heading text-sm text-coral-500 font-bold">{item.year}</p>
                  <h3 className="font-heading text-lg font-bold mt-1">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-900/50" ref={teamRef}>
        <div className="container-shell">
          <h2 className="text-display-sm font-heading text-center mb-14 sr-item">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="sr-item group card-surface overflow-hidden text-center">
                <div className="overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold">{member.name}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
