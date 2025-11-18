import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-neutral-200/70 dark:border-neutral-800 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Glasmint, Inc.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-300">Privacy</a>
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-300">Terms</a>
            <a href="#" className="hover:text-neutral-700 dark:hover:text-neutral-300">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App