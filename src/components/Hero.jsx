import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-white to-sky-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 h-96 w-96 rounded-full bg-fuchsia-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-28">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
          >
            The modern fintech stack for scaling SaaS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg leading-7 text-neutral-600 dark:text-neutral-300 max-w-xl"
          >
            Launch payments, subscriptions, and analytics in minutes with a glassmorphic 3D experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 transition">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg bg-white/70 backdrop-blur text-neutral-900 px-5 py-3 text-sm font-medium shadow ring-1 ring-black/5 hover:bg-white/90 transition">
              See features
            </a>
          </motion.div>
          <p className="mt-4 text-xs text-neutral-500">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
