import { useParams, Link } from "react-router-dom";
import { posts } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug) ?? posts[0];
  const related = posts.filter((p) => p.id !== post.id).slice(0, 2);
  const sectionRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  return (
    <div className="pt-20 pb-20">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <img src={post.hero.url} alt={post.hero.alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-card" />
        <div className="absolute bottom-0 left-0 right-0 container-shell pb-8">
          <Link to="/blog" className="text-white/70 text-sm hover:text-white transition-colors">← Back to Blog</Link>
          <span className="badge bg-coral-500 text-white text-xs mt-3 inline-block">{post.category}</span>
          <h1 className="mt-2 text-display-sm md:text-display-md font-heading text-white max-w-3xl">{post.title}</h1>
          <p className="mt-3 text-white/60 text-sm">{post.readTime}</p>
        </div>
      </section>

      <div className="container-narrow mt-12" ref={sectionRef}>
        <div className="lg:flex lg:gap-12">
          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:w-56 shrink-0">
            <div className="sticky top-24 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">Contents</h4>
              {["Introduction", "Key Insights", "Practical Tips", "Conclusion"].map((item) => (
                <button key={item} className="block text-sm text-neutral-500 hover:text-coral-500 transition-colors text-left">
                  {item}
                </button>
              ))}
            </div>
          </aside>

          {/* Article Content */}
          <article className="flex-1 sr-item prose-spacing">
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 mb-8">
              {post.excerpt} This article explores the latest trends and insights that are shaping the future of premium travel experiences worldwide.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4 mt-10">Introduction</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              The travel industry has undergone a remarkable transformation in recent years. As discerning travelers seek more authentic and meaningful experiences, the way we approach travel planning and destination selection has evolved dramatically. This shift represents not just a change in consumer behavior, but a fundamental reimagining of what luxury travel means in the modern era.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4 mt-10">Key Insights</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              Our research across thousands of premium bookings reveals several compelling patterns. First, travelers are increasingly prioritizing experiences over material luxury. Second, sustainability has moved from a nice-to-have to a must-have criterion. Third, personalization at scale is becoming the new standard for high-end travel services.
            </p>

            <div className="card-surface p-6 my-8 border-l-4 border-coral-500">
              <p className="text-neutral-600 dark:text-neutral-300 italic">
                "The future of travel belongs to those who can create deeply personal experiences that respect both the traveler and the destination."
              </p>
              <p className="mt-2 text-sm font-semibold text-coral-500">— Travel Industry Report 2026</p>
            </div>

            <h2 className="font-heading text-2xl font-bold mb-4 mt-10">Practical Tips</h2>
            <ul className="space-y-3 mb-6">
              {["Research local customs and etiquette before visiting", "Book during shoulder season for better rates and fewer crowds", "Choose accommodations run by local families for authentic experiences", "Pack light and invest in quality over quantity", "Always purchase comprehensive travel insurance"].map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="text-coral-500 mt-0.5">✓</span>
                  <span className="text-neutral-600 dark:text-neutral-300">{tip}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4 mt-10">Conclusion</h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              As the travel landscape continues to evolve, staying informed and adaptable is key. Whether you're planning your first international trip or your fiftieth, the principles of thoughtful, responsible travel remain constant. Embrace the journey, respect the destination, and create memories that last a lifetime.
            </p>

            {/* Author Bio */}
            <div className="card-surface p-6 mt-12 flex items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80"
                alt="Author"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-bold">Alexandra Hart</p>
                <p className="text-sm text-neutral-500">Founder & Chief Experience Officer at Trinix Travel. 15+ years curating premium travel experiences across 60 countries.</p>
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="mt-16 border-t border-neutral-200 dark:border-neutral-700 pt-12">
            <h2 className="font-heading text-xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group card-surface overflow-hidden">
                  <div className="overflow-hidden aspect-video">
                    <img src={p.hero.url} alt={p.hero.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <span className="badge badge-coral text-xs mb-2">{p.category}</span>
                    <h3 className="font-heading font-bold group-hover:text-coral-500 transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-neutral-400">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
