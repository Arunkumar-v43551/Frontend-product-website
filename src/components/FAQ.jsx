import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Is there a free plan?', a: "Yes! NOVA's Starter plan is completely free forever with up to 5 projects and limited AI features. No credit card required to start." },
  { q: 'Can I change plans at any time?', a: "Absolutely. You can upgrade, downgrade, or cancel at any time from account settings. When upgrading, you'll be billed a prorated amount." },
  { q: 'Does NOVA integrate with tools we already use?', a: "NOVA integrates with 50+ popular tools including GitHub, Slack, Figma, Linear, Notion, Jira, Google Workspace, and Zapier. More integrations are added monthly." },
  { q: 'How does the AI project planning work?', a: "You describe a project goal in plain language and NOVA's AI engine uses your historical delivery data, team capacity, and best practices to generate a structured plan with milestones, epics, and assigned tasks." },
  { q: "Is my team's data secure?", a: "Yes. NOVA is SOC 2 Type II certified, uses end-to-end TLS encryption, and stores data in ISO 27001-certified data centers. We never sell or share your data." },
  { q: 'What kind of support do you offer?', a: "Starter plans include community support. Professional plans include priority email support with a 4-hour SLA. Business plans include a dedicated CSM and 24/7 phone support." },
];

export function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(prev => prev === i ? null : i);

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#0D0D0E]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <span className="pill-primary mb-4 inline-flex">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.18] mb-4">
                Common questions answered.
              </h2>
              <p className="text-[15px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                Can't find what you're looking for?{' '}
                <a href="mailto:hello@nova.so" className="font-semibold text-[#111111] dark:text-[#A79BFF] hover:underline">Chat with us</a>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((f, i) => (
              <div key={i}
                className={`rounded-2xl border transition-all duration-200 ${
                  open === i
                    ? 'border-[#111111]/15 dark:border-[#6D5EF5]/30 bg-[#F5F5F4] dark:bg-[#6D5EF5]/8'
                    : 'border-[#E5E7EB] dark:border-white/8 bg-[#F9FAFB] dark:bg-[#111113] hover:border-[#D1D5DB] dark:hover:border-white/15'
                }`}>
                <button onClick={() => toggle(i)} aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className={`text-[15px] font-semibold ${open === i ? 'text-[#111111] dark:text-[#A79BFF]' : 'text-[#111111] dark:text-white'}`}>{f.q}</span>
                  <ChevronDown className={`w-4.5 h-4.5 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180 text-[#111111] dark:text-[#6D5EF5]' : 'text-[#9CA3AF]'}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[14px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
