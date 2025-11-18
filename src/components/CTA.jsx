export default function CTA() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-sky-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-10 text-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Start processing in minutes
          </h3>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Transparent pricing. No hidden fees. Free sandbox while you build.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 transition">
              Create account
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white/70 backdrop-blur text-neutral-900 px-5 py-3 text-sm font-medium shadow ring-1 ring-black/5 hover:bg-white/90 transition">
              Contact sales
            </a>
          </div>
          <p className="mt-3 text-xs text-neutral-500">Backed by 99.99% uptime SLA</p>
        </div>
      </div>
    </section>
  );
}
