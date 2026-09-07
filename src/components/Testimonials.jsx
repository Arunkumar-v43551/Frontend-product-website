import { useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Before NOVA, our team lived across five different tools. Now everything happens in one place with zero context switching. Our velocity is up 40% since adopting it.',
    name: 'Maya Chen', role: 'Head of Product', company: 'Vertex Systems', initials: 'MC',
  },
  {
    quote: "NOVA's AI Copilot flagged a sprint blocker three days before our engineering team noticed it. That single insight saved our quarterly launch timeline.",
    name: 'Daniel Park', role: 'VP Engineering', company: 'ARC Labs', initials: 'DP',
  },
  {
    quote: "We evaluated 6 platforms. NOVA was the only one that felt genuinely designed for how modern product teams actually work — not how PMs worked in 2015.",
    name: 'Sofia Ramirez', role: 'CEO & Co-Founder', company: 'Luma Health', initials: 'SR',
  },
  {
    quote: 'The automation builder alone replaced two entire admin workflows. My team stopped complaining about Slack noise overnight.',
    name: 'James Okonkwo', role: 'Engineering Manager', company: 'Orbit Commerce', initials: 'JO',
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-[#0D0D0E]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="pill-primary mb-4 inline-flex">Customer Love</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.18]">
            Teams that ship faster, love NOVA.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: selector */}
          <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-3">
            {testimonials.map((t, i) => (
              <button key={t.name} onClick={() => setActive(i)}
                className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                  active === i
                    ? 'border-[#111111]/20 dark:border-[#6D5EF5]/35 bg-[#F5F5F4] dark:bg-[#6D5EF5]/10 shadow-sm'
                    : 'border-[#E5E7EB] dark:border-white/8 bg-[#F9FAFB] dark:bg-[#111113] hover:border-[#D1D5DB] dark:hover:border-white/15'
                }`}>
                <div className={`w-9 h-9 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm ${
                  active === i ? 'bg-[#111111] dark:bg-[#6D5EF5]' : 'bg-[#374151] dark:bg-white/15'
                }`}>
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold text-[#111111] dark:text-white truncate">{t.name}</p>
                  <p className="text-[11px] text-[#9CA3AF] truncate">{t.role}, {t.company}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: quote */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-2xl border border-[#E5E7EB] dark:border-white/10 bg-[#F9FAFB] dark:bg-[#111113]">
              <Quote className="w-8 h-8 text-[#111111]/15 dark:text-[#6D5EF5]/30 mb-5" />
              <p className="text-xl sm:text-2xl font-medium text-[#111111] dark:text-white leading-[1.55] mb-7">
                "{current.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#111111] dark:bg-[#6D5EF5] text-white text-sm font-bold flex items-center justify-center shadow-sm">
                  {current.initials}
                </div>
                <div>
                  <p className="text-[14px] font-bold text-[#111111] dark:text-white">{current.name}</p>
                  <p className="text-[12px] text-[#9CA3AF]">{current.role} · {current.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
