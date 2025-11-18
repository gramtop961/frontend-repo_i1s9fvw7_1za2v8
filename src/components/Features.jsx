import { Shield, CreditCard, BarChart3, Clock3 } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank-grade security",
    desc: "Encrypted by default with continuous monitoring and SOC 2 alignment.",
  },
  {
    icon: CreditCard,
    title: "Global payments",
    desc: "Accept cards and wallets in 135+ currencies with one API.",
  },
  {
    icon: BarChart3,
    title: "Real-time analytics",
    desc: "Track MRR, churn, and cohorts with live dashboards.",
  },
  {
    icon: Clock3,
    title: "5-minute setup",
    desc: "Drop-in components and go live the same day.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Everything you need to grow</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">A complete toolkit to handle subscriptions, billing, and insights without the heavy lift.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white grid place-items-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
