import { Layers, Code2, Briefcase, FlaskConical } from 'lucide-react';

const solutions = [
  {
    icon: Layers, title: 'Product Teams', tag: 'Popular',
    description: 'Manage roadmaps, user stories, sprint cycles, and stakeholder updates from one living workspace.',
    items: ['Live roadmap views', 'Sprint velocity tracking', 'User story templates', 'Stakeholder reports'],
  },
  {
    icon: Code2, title: 'Engineering Teams',
    description: 'Link PRs, issues, and deploys to NOVA tasks for a complete view of your delivery pipeline.',
    items: ['GitHub & Jira sync', 'Code review workflows', 'Release planning', 'On-call schedules'],
  },
  {
    icon: Briefcase, title: 'Marketing & Growth',
    description: 'Plan campaigns, manage content calendars, and track performance KPIs without spreadsheets.',
    items: ['Campaign management', 'Content calendar', 'OKR tracking', 'Launch coordination'],
  },
  {
    icon: FlaskConical, title: 'Research & Design',
    description: 'Centralize user research, design specs, and feedback loops into structured, searchable projects.',
    items: ['Research repos', 'Design system docs', 'Feedback tagging', 'Handoff workflows'],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#F9FAFB] dark:bg-[#111113] border-y border-[#E5E7EB] dark:border-white/8">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="pill-primary mb-4 inline-flex">Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.18] mb-4">
            Built for every team, not just one.
          </h2>
          <p className="text-[17px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            Specialized workflows for product, engineering, marketing, and design — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {solutions.map(s => {
            const Icon = s.icon;
            return (
              <div key={s.title}
                className="group p-7 rounded-2xl bg-white dark:bg-[#0D0D0E] border border-[#E5E7EB] dark:border-white/8 hover:border-[#D1D5DB] dark:hover:border-white/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-200 cursor-default">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-[#F5F5F4] dark:bg-white/8 border border-[#E5E7EB] dark:border-white/8 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-5 h-5 text-[#111111] dark:text-[#A79BFF]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-[#111111] dark:text-white">{s.title}</h3>
                      {s.tag && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#111111] dark:bg-[#6D5EF5] text-white">{s.tag}</span>
                      )}
                    </div>
                    <p className="text-[13.5px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">{s.description}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {s.items.map(i => (
                    <li key={i} className="px-2.5 py-1 rounded-lg bg-[#F5F5F4] dark:bg-white/8 border border-[#E5E7EB] dark:border-white/8 text-[11.5px] font-medium text-[#6B7280] dark:text-[#9CA3AF]">{i}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
