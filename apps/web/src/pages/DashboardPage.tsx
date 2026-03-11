import { useState } from "react";
import { Link } from "react-router-dom";
import { destinations, packages } from "../data/mockData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const sidebarItems = [
  { icon: "📊", label: "Overview", key: "overview" },
  { icon: "📅", label: "Bookings", key: "bookings" },
  { icon: "❤️", label: "Wishlist", key: "wishlist" },
  { icon: "👤", label: "Profile", key: "profile" },
  { icon: "⚙️", label: "Settings", key: "settings" },
];

const bookings = [
  { id: "BK-001", dest: "Santorini, Greece", date: "Apr 12 – Apr 17, 2026", status: "Confirmed", price: "$1,499" },
  { id: "BK-002", dest: "Kyoto, Japan", date: "Jun 3 – Jun 10, 2026", status: "Pending", price: "$2,120" },
  { id: "BK-003", dest: "Maldives", date: "Aug 20 – Aug 26, 2026", status: "Completed", price: "$3,440" },
];

const statusColor: Record<string, string> = {
  Confirmed: "badge-success",
  Pending: "badge-warning",
  Completed: "badge-ocean",
};

export function DashboardPage() {
  const [tab, setTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const contentRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  return (
    <div className="pt-24 pb-20">
      <div className="container-shell lg:flex lg:gap-8">
        {/* Sidebar */}
        <aside className={`lg:w-64 shrink-0 ${sidebarOpen ? "block" : "hidden lg:block"}`}>
          <div className="card-surface p-4 space-y-1 sticky top-24">
            {/* User */}
            <div className="flex items-center gap-3 p-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-coral grid place-items-center text-white font-bold text-lg">J</div>
              <div>
                <p className="font-heading font-semibold text-sm">John Doe</p>
                <p className="text-xs text-neutral-400">john@example.com</p>
              </div>
            </div>
            {sidebarItems.map((item) => (
              <button
                key={item.key}
                onClick={() => { setTab(item.key); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${tab === item.key
                    ? "bg-coral-50 dark:bg-coral-900/20 text-coral-500"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
              >
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
          </div>
        </aside>

        <button
          className="lg:hidden mb-6 btn-ghost border border-neutral-200 dark:border-neutral-700 w-full"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Hide Menu" : "Show Menu"}
        </button>

        {/* Main Content */}
        <div className="flex-1" ref={contentRef}>
          {tab === "overview" && (
            <div className="sr-item space-y-8">
              <h1 className="text-display-sm font-heading">Welcome back, John!</h1>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="card-surface p-6 text-center"><p className="text-3xl font-heading font-bold text-coral-500">3</p><p className="text-sm text-neutral-500 mt-1">Total Bookings</p></div>
                <div className="card-surface p-6 text-center"><p className="text-3xl font-heading font-bold text-coral-500">{destinations.slice(0, 4).length}</p><p className="text-sm text-neutral-500 mt-1">Wishlist Items</p></div>
                <div className="card-surface p-6 text-center"><p className="text-3xl font-heading font-bold text-coral-500">2</p><p className="text-sm text-neutral-500 mt-1">Upcoming Trips</p></div>
              </div>
              <div className="card-surface p-6">
                <h2 className="font-heading font-bold text-lg mb-4">Recent Bookings</h2>
                <div className="space-y-3">
                  {bookings.slice(0, 2).map((b) => (
                    <div key={b.id} className="flex items-center justify-between p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50">
                      <div>
                        <p className="font-semibold text-sm">{b.dest}</p>
                        <p className="text-xs text-neutral-400">{b.date}</p>
                      </div>
                      <span className={`badge ${statusColor[b.status]}`}>{b.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "bookings" && (
            <div className="sr-item">
              <h1 className="text-display-sm font-heading mb-6">My Bookings</h1>
              <div className="space-y-4">
                {bookings.map((b) => (
                  <div key={b.id} className="card-surface p-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="font-heading font-bold">{b.dest}</p>
                      <p className="text-sm text-neutral-400">{b.date}</p>
                      <p className="text-xs text-neutral-400 mt-1">Ref: {b.id}</p>
                    </div>
                    <div className="text-right">
                      <span className={`badge ${statusColor[b.status]} mb-2`}>{b.status}</span>
                      <p className="font-heading font-bold text-coral-500">{b.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "wishlist" && (
            <div className="sr-item">
              <h1 className="text-display-sm font-heading mb-6">My Wishlist</h1>
              <div className="grid sm:grid-cols-2 gap-6">
                {destinations.slice(0, 4).map((d) => (
                  <div key={d.id} className="card-surface overflow-hidden group">
                    <div className="relative overflow-hidden aspect-video">
                      <img src={d.hero.url} alt={d.hero.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <button className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 dark:bg-neutral-800/90 text-red-500 text-lg hover:scale-110 transition-transform" aria-label="Remove from wishlist">
                        ❤️
                      </button>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading font-bold">{d.name}</h3>
                      <p className="text-sm text-neutral-400">{d.country} · From ${d.priceFrom.toLocaleString()}</p>
                      <Link to={`/destinations/${d.slug}`} className="btn-primary mt-4 text-xs px-5 py-2">View Details</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "profile" && (
            <div className="sr-item">
              <h1 className="text-display-sm font-heading mb-6">Edit Profile</h1>
              <div className="card-surface p-8 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-gradient-coral grid place-items-center text-white font-bold text-2xl">J</div>
                    <button className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-xs shadow-sm hover:scale-105 transition-transform" aria-label="Change avatar">
                      📷
                    </button>
                  </div>
                  <div><p className="font-heading font-bold text-lg">John Doe</p><p className="text-sm text-neutral-400">Member since 2024</p></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "First Name", value: "John" },
                    { label: "Last Name", value: "Doe" },
                    { label: "Email", value: "john@example.com" },
                    { label: "Phone", value: "+1 555 123 4567" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">{f.label}</label>
                      <input defaultValue={f.value} className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                    </div>
                  ))}
                </div>
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          )}

          {tab === "settings" && (
            <div className="sr-item">
              <h1 className="text-display-sm font-heading mb-6">Settings</h1>
              <div className="card-surface p-8 space-y-6">
                {[
                  { label: "Email Notifications", desc: "Receive booking confirmations and updates", checked: true },
                  { label: "Marketing Emails", desc: "Travel deals, inspiration, and newsletters", checked: false },
                  { label: "SMS Notifications", desc: "Important trip reminders and alerts", checked: true },
                ].map((s) => (
                  <label key={s.label} className="flex items-center justify-between">
                    <div><p className="font-heading font-semibold text-sm">{s.label}</p><p className="text-xs text-neutral-400">{s.desc}</p></div>
                    <input type="checkbox" defaultChecked={s.checked} className="h-5 w-5 accent-coral-500" />
                  </label>
                ))}
                <div className="border-t border-neutral-100 dark:border-neutral-700 pt-6">
                  <h3 className="font-heading font-bold text-red-500 text-sm">Danger Zone</h3>
                  <p className="text-xs text-neutral-400 mt-1">Delete your account and all associated data.</p>
                  <button className="mt-3 rounded-full border border-red-300 dark:border-red-800 px-5 py-2 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">Delete Account</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
