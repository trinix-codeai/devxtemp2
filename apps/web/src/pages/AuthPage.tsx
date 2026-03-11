import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Mode = "login" | "register" | "reset";

export function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [resetSent, setResetSent] = useState(false);
  const pageRef = useScrollReveal<HTMLDivElement>({ origin: "bottom" });

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center">
      <div className="container-shell grid lg:grid-cols-2 gap-0 overflow-hidden rounded-4xl shadow-soft-xl max-w-5xl mx-auto" ref={pageRef}>
        {/* Left Visual */}
        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80"
            alt="Travel dreaming"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/60" />
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <h2 className="font-heading text-2xl font-bold">Start your journey</h2>
            <p className="mt-2 text-white/70 text-sm">Join 50,000+ travelers who trust Trinix for their premium travel experiences.</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white dark:bg-neutral-900 p-8 md:p-12 sr-item">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral-500 text-white text-sm">✈</span>
            <span className="font-heading font-bold">Trinix Travel</span>
          </Link>

          {mode === "login" && (
            <>
              <h1 className="font-heading text-2xl font-bold">Welcome back</h1>
              <p className="mt-1 text-sm text-neutral-400">Sign in to manage your trips and bookings.</p>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 py-3 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  <span>🔵</span> Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 py-3 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  <span>🟦</span> Facebook
                </button>
              </div>

              <div className="flex items-center gap-4 my-6">
                <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
                <span className="text-xs text-neutral-400">or continue with email</span>
                <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Email</label>
                  <input type="email" placeholder="you@example.com" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Password</label>
                  <input type="password" placeholder="••••••••" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-coral-500" /> <span className="text-neutral-500">Remember me</span>
                  </label>
                  <button type="button" onClick={() => setMode("reset")} className="text-coral-500 font-medium hover:underline">Forgot password?</button>
                </div>
                <button type="submit" className="btn-primary w-full py-3.5">Sign In</button>
              </form>

              <p className="mt-6 text-sm text-center text-neutral-400">
                Don't have an account?{" "}
                <button onClick={() => setMode("register")} className="text-coral-500 font-semibold hover:underline">Sign Up</button>
              </p>
            </>
          )}

          {mode === "register" && (
            <>
              <h1 className="font-heading text-2xl font-bold">Create account</h1>
              <p className="mt-1 text-sm text-neutral-400">Start planning your dream trips today.</p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 py-3 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  <span>🔵</span> Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 py-3 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  <span>🟦</span> Facebook
                </button>
              </div>

              <div className="flex items-center gap-4 my-6">
                <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
                <span className="text-xs text-neutral-400">or register with email</span>
                <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">First Name</label>
                    <input type="text" placeholder="John" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Last Name</label>
                    <input type="text" placeholder="Doe" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Email</label>
                  <input type="email" placeholder="you@example.com" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Password</label>
                  <input type="password" placeholder="Min 8 characters" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                </div>
                <label className="flex items-start gap-2 text-xs text-neutral-400 cursor-pointer">
                  <input type="checkbox" className="accent-coral-500 mt-0.5" />
                  <span>I agree to the <a href="#" className="text-coral-500 hover:underline">Terms of Service</a> and <a href="#" className="text-coral-500 hover:underline">Privacy Policy</a></span>
                </label>
                <button type="submit" className="btn-primary w-full py-3.5">Create Account</button>
              </form>

              <p className="mt-6 text-sm text-center text-neutral-400">
                Already have an account?{" "}
                <button onClick={() => setMode("login")} className="text-coral-500 font-semibold hover:underline">Sign In</button>
              </p>
            </>
          )}

          {mode === "reset" && (
            <>
              <h1 className="font-heading text-2xl font-bold">Reset password</h1>
              <p className="mt-1 text-sm text-neutral-400">Enter your email and we'll send you a reset link.</p>

              {resetSent ? (
                <div className="mt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <span className="text-3xl text-emerald-500">✉️</span>
                  </div>
                  <p className="font-heading font-bold">Check your inbox!</p>
                  <p className="text-sm text-neutral-400 mt-2">We've sent a password reset link to your email.</p>
                  <button onClick={() => { setMode("login"); setResetSent(false); }} className="btn-primary mt-6">Back to Sign In</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setResetSent(true); }} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-500 uppercase mb-1">Email</label>
                    <input type="email" placeholder="you@example.com" required className="w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-sm outline-none focus:border-coral-500 transition-colors" />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3.5">Send Reset Link</button>
                </form>
              )}

              {!resetSent && (
                <p className="mt-6 text-sm text-center text-neutral-400">
                  Remember your password?{" "}
                  <button onClick={() => setMode("login")} className="text-coral-500 font-semibold hover:underline">Sign In</button>
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
