import { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const plans = [
  {
    id: 'starter', name: 'Starter', monthly: 0, annual: 0,
    description: 'For individuals and small teams getting started.',
    features: ['5 active projects', 'AI task suggestions (limited)', 'Basic workflows', '3 integrations', '5 GB storage'],
    cta: 'Get started free',
  },
  {
    id: 'pro', name: 'Professional', monthly: 24, annual: 18, highlight: true,
    description: 'The ideal plan for growing product teams.',
    features: ['Unlimited projects', 'Full AI planning & automation', 'Advanced analytics', '50+ integrations', '100 GB storage', 'Priority support', 'Custom templates'],
    cta: 'Start free trial',
  },
  {
    id: 'business', name: 'Business', monthly: 49, annual: 38,
    description: 'Advanced controls and customizations for organizations.',
    features: ['Everything in Pro', 'Custom AI model training', 'SAML SSO', 'Audit logs', 'SLA guarantees', 'Dedicated CSM', 'Unlimited storage'],
    cta: 'Contact sales',
  },
];

export function Pricing({ onOpenDemo }) {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F9FAFB] dark:bg-[#111113] border-t border-[#E5E7EB] dark:border-white/8">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="pill-primary mb-4 inline-flex">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.18] mb-4">
            Simple, predictable pricing.
          </h2>
          <p className="text-[17px] text-[#6B7280] dark:text-[#9CA3AF]">No hidden fees. Cancel anytime.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-7">
            <span className={`text-sm font-medium ${!annual ? 'text-[#111111] dark:text-white' : 'text-[#9CA3AF]'}`}>Monthly</span>
            <button onClick={() => setAnnual(a => !a)} role="switch" aria-checked={annual}
              className={`w-11 h-6 rounded-full flex items-center transition-colors ${annual ? 'bg-[#111111] dark:bg-[#6D5EF5]' : 'bg-[#E5E7EB] dark:bg-white/15'}`}>
              <span className={`w-4 h-4 rounded-full bg-white shadow-sm mx-0.5 transition-transform ${annual ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-[#111111] dark:text-white' : 'text-[#9CA3AF]'}`}>
              Annual
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">Save 25%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map(p => (
            <div key={p.id}
              className={`relative rounded-2xl p-7 flex flex-col ${
                p.highlight
                  ? 'bg-[#111111] dark:bg-[#6D5EF5] text-white shadow-2xl shadow-black/20 dark:shadow-[#6D5EF5]/25 scale-[1.02]'
                  : 'bg-white dark:bg-[#0D0D0E] border border-[#E5E7EB] dark:border-white/8'
              }`}>
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#111111] dark:text-[#6D5EF5] text-xs font-bold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />Most popular
                  </span>
                </div>
              )}

              <div className="mb-7">
                <h3 className={`text-lg font-bold mb-1 ${p.highlight ? 'text-white' : 'text-[#111111] dark:text-white'}`}>{p.name}</h3>
                <p className={`text-sm ${p.highlight ? 'text-white/70' : 'text-[#6B7280] dark:text-[#9CA3AF]'}`}>{p.description}</p>
              </div>

              <div className="mb-7">
                <div className="flex items-end gap-1.5">
                  <span className={`text-5xl font-extrabold tracking-tight ${p.highlight ? 'text-white' : 'text-[#111111] dark:text-white'}`}>
                    ${annual ? p.annual : p.monthly}
                  </span>
                  <span className={`text-sm mb-2 ${p.highlight ? 'text-white/50' : 'text-[#9CA3AF]'}`}>/mo</span>
                </div>
                {annual && p.annual > 0 && (
                  <p className={`text-xs mt-1 ${p.highlight ? 'text-white/50' : 'text-[#9CA3AF]'}`}>
                    Billed annually (${p.annual * 12}/yr)
                  </p>
                )}
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${p.highlight ? 'bg-white/20' : 'bg-[#F5F5F4] dark:bg-white/10'}`}>
                      <Check className={`w-2.5 h-2.5 ${p.highlight ? 'text-white' : 'text-[#111111] dark:text-[#A79BFF]'}`} />
                    </div>
                    <span className={p.highlight ? 'text-white/90' : 'text-[#374151] dark:text-[#D1D5DB]'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button onClick={onOpenDemo}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all active:scale-[0.98] ${
                  p.highlight
                    ? 'bg-white text-[#111111] hover:bg-white/90'
                    : 'bg-[#111111] dark:bg-[#6D5EF5] text-white hover:bg-[#1C1C1C] dark:hover:bg-[#5B4CE0]'
                }`}>
                {p.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
