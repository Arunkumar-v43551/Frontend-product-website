import { useState } from 'react';
import { CheckCircle2, ArrowRight, Sparkles, FolderKanban, Zap, BarChart3, MessageSquare } from 'lucide-react';

const tabs = [
  { id: 'projects', label: 'Projects', icon: FolderKanban, title: 'AI Sprint Engine', metric: 'Auto-allocates 92% of tasks', preview: 'Goal: Launch Mobile App v2.0 → AI Breakdown: 14 user stories, 3 epics, assigned across 4 devs.' },
  { id: 'automation', label: 'Automation', icon: Zap, title: 'Zero-Code Workflows', metric: '1,400+ triggers fired weekly', preview: 'If Figma spec updated → Auto-generate design tokens PR on GitHub & notify #frontend Slack channel.' },
  { id: 'insights', label: 'Insights', icon: BarChart3, title: 'Predictive Velocity', metric: 'Identifies blockers 3 days early', preview: '⚠ Warning: Backend API integration is lagging 2 days behind. Recommended re-allocation from design team.' },
  { id: 'collab', label: 'Collaboration', icon: MessageSquare, title: 'Team Memory', metric: '100% decision audit trail', preview: 'AI summary: Decided to adopt GraphQL schema over REST for v2 API. See full discussion thread →' },
];

const benefits = ['Less busywork & manual admin', 'Faster execution & decisions', 'Better team alignment across squads'];

export function ProductShowcase() {
  const [active, setActive] = useState('projects');
  const current = tabs.find(t => t.id === active);

  return (
    <section id="product" className="py-20 sm:py-28 bg-[#F9FAFB] dark:bg-[#111113] border-y border-[#E5E7EB] dark:border-white/8">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Product UI */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-2xl border border-[#E5E7EB] dark:border-white/10 bg-white dark:bg-[#0D0D0E] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:shadow-none">
              <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[#E5E7EB] dark:border-white/8">
                {tabs.map(t => {
                  const Icon = t.icon;
                  return (
                    <button key={t.id} onClick={() => setActive(t.id)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        active === t.id
                          ? 'bg-[#111111] dark:bg-[#6D5EF5] text-white shadow-sm'
                          : 'bg-[#F5F5F4] dark:bg-white/8 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111111] dark:hover:text-white'
                      }`}>
                      <Icon className="w-3.5 h-3.5" />{t.label}
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 p-5 rounded-xl bg-[#F9FAFB] dark:bg-[#111113] border border-[#E5E7EB] dark:border-white/8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#111111] dark:bg-[#6D5EF5]/15 text-white dark:text-[#A79BFF]">{current.title}</span>
                  <span className="text-[11px] text-[#9CA3AF] font-medium">{current.metric}</span>
                </div>
                <div className="p-4 rounded-lg bg-white dark:bg-[#0D0D0E] border border-[#E5E7EB] dark:border-white/8 font-mono text-xs sm:text-[13px] text-[#374151] dark:text-[#D1D5DB] leading-relaxed">
                  {current.preview}
                </div>
                <div className="flex items-center justify-between mt-4 text-[11px] text-[#9CA3AF]">
                  <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#111111] dark:text-[#6D5EF5]" />NOVA Engine v4.2</span>
                  <span className="text-emerald-500 font-medium">● Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="pill-primary">One Workspace</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.18]">
              Your entire workflow, finally in sync.
            </h2>
            <p className="text-[15.5px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
              NOVA connects project planning, automated workflows, intelligent analytics, and team communication into a single unified space. No more context switching.
            </p>
            <div className="space-y-3">
              {benefits.map(b => (
                <div key={b} className="flex items-center gap-3 text-[14px] font-medium text-[#374151] dark:text-[#D1D5DB]">
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />{b}
                </div>
              ))}
            </div>
            <a href="#features"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] dark:bg-[#6D5EF5] text-white text-[14px] font-bold hover:bg-[#1C1C1C] dark:hover:bg-[#5B4CE0] transition-colors shadow-sm dark:shadow-[#6D5EF5]/25">
              Explore the platform <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
