import { Sparkles, Zap, TrendingUp, Users, Bot, LayoutGrid, BarChart3, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 'ai-planning', title: 'AI Project Planning', isFeatured: true, tag: 'Core Engine',
    icon: Sparkles,
    description: 'Turn high-level goals into structured milestones, epics, and sprint tasks in seconds. The AI understands your team context and delivery history.',
  },
  { id: 'automation', title: 'Smart Automation', icon: Zap, description: 'Automate repetitive workflows without writing complex rules. Set triggers in plain language.' },
  { id: 'insights', title: 'Intelligent Insights', icon: TrendingUp, description: 'Predictive velocity analytics, bottleneck detection, and actionable health scores.' },
  { id: 'collab', title: 'Unified Collaboration', icon: Users, description: 'Keep discussions, docs, tasks, and decisions neatly linked — not fragmented across five apps.' },
  { id: 'assistant', title: 'AI Assistant', icon: Bot, description: 'Get instant context-aware answers, meeting summaries, and priority recommendations.' },
  { id: 'templates', title: 'Workflow Templates', icon: LayoutGrid, description: 'Launch battle-tested workflows with ready-to-use templates for every team and process.' },
  { id: 'reporting', title: 'Real-time Reporting', icon: BarChart3, description: 'Live executive dashboards that auto-sync with sprint cycles and milestone commitments.' },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-white dark:bg-[#0D0D0E]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="pill-primary mb-4 inline-flex">Powerful Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#111111] dark:text-white leading-[1.15] mb-4">
            Everything your team needs to move faster.
          </h2>
          <p className="text-[17px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            One intelligent workspace designed to remove friction from your team's workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(f => {
            const Icon = f.icon;
            return (
              <div key={f.id}
                className={`group relative p-6 sm:p-7 rounded-2xl border cursor-default transition-all duration-200 hover:-translate-y-1 ${
                  f.isFeatured
                    ? 'sm:col-span-2 lg:col-span-2 bg-[#F9FAFB] dark:bg-[#6D5EF5]/5 border-[#E5E7EB] dark:border-[#6D5EF5]/25 hover:border-[#D1D5DB] dark:hover:border-[#6D5EF5]/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_12px_30px_rgba(109,94,245,0.12)]'
                    : 'bg-[#F9FAFB] dark:bg-[#111113] border-[#E5E7EB] dark:border-white/8 hover:border-[#D1D5DB] dark:hover:border-white/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]'
                }`}>
                {f.tag && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#111111] dark:bg-[#6D5EF5] text-white mb-4">
                    {f.tag}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-white dark:bg-white/8 border border-[#E5E7EB] dark:border-white/8 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5 text-[#111111] dark:text-[#A79BFF]" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-2">{f.title}</h3>
                <p className="text-[13.5px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">{f.description}</p>
                {f.isFeatured && (
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#111111] dark:text-[#A79BFF] group-hover:gap-2.5 transition-all">
                    Explore AI Planner <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
