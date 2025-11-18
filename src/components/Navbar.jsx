import { Menu, Star, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b border-white/10 bg-white/60 dark:bg-neutral-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-sm grid place-items-center text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">Glasmint</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-neutral-900 dark:hover:text-white transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white text-sm">Sign in</a>
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-800 transition">
            <Star className="h-4 w-4" />
            Start free
          </a>
        </div>
        <button className="md:hidden p-2 rounded-lg border border-neutral-200/50 dark:border-neutral-800">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
