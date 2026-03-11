import type { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  title?: string;
  eyebrow?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function Section({
  title,
  eyebrow,
  description,
  action,
  className = "",
  children
}: SectionProps) {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="container-shell">
        {title || eyebrow || action ? (
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              {eyebrow ? (
                <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                  {eyebrow}
                </span>
              ) : null}
              {title ? <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2> : null}
              {description ? <p className="mt-3 text-slate-500">{description}</p> : null}
            </div>
            {action}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
