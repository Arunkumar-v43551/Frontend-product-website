import { useState } from 'react';
import {
  Search, Bell, CheckCircle2, Circle, LayoutDashboard, FolderKanban, CheckSquare,
  Zap, BarChart2, Users2, Sparkles, ArrowUpRight, ChevronDown, Filter
} from 'lucide-react';

export function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('overview');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finalize dark mode color contrast tokens', project: 'Design System', completed: true, assignee: 'Alex R.' },
    { id: 2, title: 'Review auto-generated PR #389 from NOVA AI', project: 'Core Engine', completed: false, assignee: 'Maya C.' },
    { id: 3, title: 'Deploy zero-downtime database migration', project: 'Infrastructure', completed: false, assignee: 'David S.' },
  ]);

  const toggleTask = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const tabActive = 'bg-[#111111] dark:bg-[#6D5EF5] text-white';
  const tabInactive = 'text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F5F5F4] dark:hover:bg-white/5 hover:text-[#111111] dark:hover:text-white';

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Floating badges */}
      <div className="hidden lg:flex items-center gap-2.5 absolute -top-4 -right-4 z-20 bg-white dark:bg-[#1C1C1F] px-3.5 py-2 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-[#E5E7EB] dark:border-white/10 animate-float text-xs">
        <div className="w-5 h-5 rounded-md bg-[#F5F5F4] dark:bg-[#6D5EF5]/20 text-[#111111] dark:text-[#A79BFF] flex items-center justify-center shrink-0">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <span className="font-medium text-[#111111] dark:text-white">NOVA AI synthesized 14 PRs</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200/60 dark:border-emerald-500/20">Ready</span>
      </div>
      <div className="hidden lg:flex items-center gap-2.5 absolute -bottom-4 -left-4 z-20 bg-white dark:bg-[#1C1C1F] px-3.5 py-2 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-[#E5E7EB] dark:border-white/10 animate-float-delayed text-xs">
        <div className="w-5 h-5 rounded-md bg-[#F5F5F4] dark:bg-purple-500/20 text-[#374151] dark:text-purple-400 flex items-center justify-center shrink-0">
          <Zap className="w-3.5 h-3.5" />
        </div>
        <span className="font-medium text-[#111111] dark:text-white">Workflow triggered: Auto-delegated to Maya</span>
      </div>

      {/* Main window */}
      <div className="rounded-2xl bg-white dark:bg-[#111113] border border-[#E5E7EB] dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.10)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Top bar */}
        <div className="bg-[#F9FAFB] dark:bg-[#0D0D0E] border-b border-[#E5E7EB] dark:border-white/8 px-5 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="h-4 w-px bg-[#E5E7EB] dark:bg-white/10 mx-1 hidden sm:block" />
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#111111] dark:text-white">
              <span className="text-[#9CA3AF] hidden sm:inline">Acme Labs /</span>
              <span>NOVA Workspace</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" />
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-white/5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] dark:border-white/10 text-xs text-[#9CA3AF] w-60">
            <Search className="w-3.5 h-3.5 shrink-0" />
            <span className="flex-1 truncate">Search tasks, epics, docs...</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#F5F5F4] dark:bg-white/10 text-[10px] border border-[#E5E7EB] dark:border-white/10">⌘K</kbd>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Notifications" className="relative p-1.5 rounded-lg text-[#9CA3AF] hover:bg-[#F5F5F4] dark:hover:bg-white/10 transition-colors">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#111111] dark:bg-[#6D5EF5]" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#111111] to-[#4B5563] dark:from-[#6D5EF5] dark:to-[#9333EA] text-white flex items-center justify-center text-[10px] font-bold shadow-sm">AR</div>
              <span className="text-xs font-medium text-[#374151] dark:text-[#D1D5DB] hidden md:inline">Alex Rivera</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px]">
          {/* Sidebar */}
          <aside className="hidden md:block md:col-span-3 lg:col-span-2 border-r border-[#E5E7EB] dark:border-white/8 p-4 bg-[#FAFAFA] dark:bg-[#0D0D0E]">
            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#9CA3AF] px-2 mb-1.5">Workspace</p>
                <nav className="space-y-0.5">
                  {[
                    { tab: 'overview', icon: LayoutDashboard, label: 'Overview' },
                    { tab: 'projects', icon: FolderKanban, label: 'Projects', badge: '12' },
                    { tab: 'tasks', icon: CheckSquare, label: 'Tasks', badge: tasks.filter(t => !t.completed).length },
                  ].map(({ tab, icon: Icon, label, badge }) => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${activeTab === tab ? tabActive : tabInactive}`}>
                      <div className="flex items-center gap-2"><Icon className="w-3.5 h-3.5" />{label}</div>
                      {badge !== undefined && (
                        <span className={`text-[10px] px-1.5 rounded-full ${activeTab === tab ? 'bg-white/20 text-white' : 'bg-[#F5F5F4] dark:bg-white/10 text-[#6B7280] dark:text-[#9CA3AF]'}`}>{badge}</span>
                      )}
                    </button>
                  ))}
                  <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                    <div className="flex items-center gap-2"><Zap className="w-3.5 h-3.5" />Automations</div>
                    <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/20 px-1 py-0.5 rounded border border-emerald-200/50 dark:border-emerald-500/20">LIVE</span>
                  </div>
                  {[{ icon: BarChart2, label: 'Analytics' }, { icon: Users2, label: 'Team' }].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-medium text-[#6B7280] dark:text-[#9CA3AF]">
                      <Icon className="w-3.5 h-3.5" />{label}
                    </div>
                  ))}
                </nav>
              </div>
              <div className="p-3 rounded-xl bg-[#F5F5F4] dark:bg-[#6D5EF5]/10 border border-[#E5E7EB] dark:border-[#6D5EF5]/20">
                <div className="flex items-center gap-1.5 font-bold text-[#111111] dark:text-[#A79BFF] text-xs mb-1">
                  <Sparkles className="w-3.5 h-3.5" />AI Copilot
                </div>
                <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] leading-snug">Velocity trending 18% higher. No blockers detected.</p>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-1 md:col-span-9 lg:col-span-10 p-5 sm:p-6 space-y-5 bg-white dark:bg-[#111113]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E7EB] dark:border-white/8">
              <div>
                <h3 className="text-base font-bold text-[#111111] dark:text-white">Good morning, Alex 👋</h3>
                <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-0.5">Here is your team's execution overview for today.</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-200/60 dark:border-emerald-500/20 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />All 4 teams in sync
              </span>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Active Projects', value: '12', sub: '3 due for milestone review', trend: '+2 this week', trendClass: 'text-emerald-600 dark:text-emerald-400' },
                { label: 'Tasks Completed', value: '142', sub: null, progress: 84, trend: '84%', trendClass: 'text-[#111111] dark:text-[#A79BFF]' },
                { label: 'Team Velocity', value: '48 pts', sub: 'Highest pace in 6 sprints', trend: '↑ +18%', trendClass: 'text-emerald-600 dark:text-emerald-400' },
              ].map(({ label, value, sub, progress, trend, trendClass }) => (
                <div key={label} className="p-4 rounded-xl border border-[#E5E7EB] dark:border-white/8 bg-[#FAFAFA] dark:bg-[#0D0D0E] hover:border-[#D1D5DB] dark:hover:border-white/20 transition-colors">
                  <div className="flex items-center justify-between text-xs text-[#9CA3AF] mb-1">
                    <span>{label}</span>
                    <span className={`font-semibold text-[11px] ${trendClass}`}>{trend}</span>
                  </div>
                  <div className="text-2xl font-bold text-[#111111] dark:text-white">{value}</div>
                  {progress !== undefined && (
                    <div className="mt-2 h-1.5 bg-[#E5E7EB] dark:bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#111111] dark:bg-[#6D5EF5] rounded-full" style={{ width: `${progress}%` }} />
                    </div>
                  )}
                  {sub && <div className="text-[11px] text-[#9CA3AF] mt-1">{sub}</div>}
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF]">Priority Milestones</h4>
                <span className="text-xs font-medium text-[#111111] dark:text-[#A79BFF] cursor-pointer hover:underline">View Gantt</span>
              </div>
              {[
                { name: 'Mobile App 2.0 Launch', lead: 'Maya Chen · 92% milestones reached', progress: 92, badge: 'In Review', badgeClass: 'bg-amber-50 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-200/60 dark:border-amber-500/20', barClass: 'bg-amber-500' },
                { name: 'Automated AI Triage Engine', lead: 'Autonomous PR routing & blocker predictions', progress: 74, badge: 'Active Sprint', badgeClass: 'bg-[#F5F5F4] dark:bg-[#6D5EF5]/15 text-[#111111] dark:text-[#A79BFF] border-[#E5E7EB] dark:border-[#6D5EF5]/30', barClass: 'bg-[#111111] dark:bg-[#6D5EF5]' },
              ].map(({ name, lead, progress, badge, badgeClass, barClass }) => (
                <div key={name} className="p-3.5 rounded-xl border border-[#E5E7EB] dark:border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-[#0D0D0E]">
                  <div className="min-w-0 space-y-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold text-[#111111] dark:text-white">{name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${badgeClass}`}>{badge}</span>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF]">{lead}</p>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-40 shrink-0">
                    <div className="flex-1 h-1.5 bg-[#E5E7EB] dark:bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${barClass}`} style={{ width: `${progress}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-[#6B7280] dark:text-[#9CA3AF] w-8 text-right">{progress}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tasks */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF]">Today's Tasks</h4>
                  <span className="text-[10px] text-[#9CA3AF]">· click to toggle</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#9CA3AF]"><Filter className="w-3 h-3" />Filter</div>
              </div>
              <div className="divide-y divide-[#F5F5F4] dark:divide-white/5 border border-[#E5E7EB] dark:border-white/8 rounded-xl overflow-hidden">
                {tasks.map(task => (
                  <div key={task.id} onClick={() => toggleTask(task.id)}
                    className="p-3 flex items-center justify-between gap-3 hover:bg-[#FAFAFA] dark:hover:bg-white/3 transition-colors cursor-pointer group bg-white dark:bg-transparent">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <button type="button" aria-label={`Toggle ${task.title}`}
                        className="text-[#D1D5DB] group-hover:text-[#111111] dark:group-hover:text-[#6D5EF5] transition-colors shrink-0">
                        {task.completed
                          ? <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          : <Circle className="w-4 h-4 transition-colors" />}
                      </button>
                      <span className={`text-xs font-medium truncate ${task.completed ? 'line-through text-[#9CA3AF]' : 'text-[#111111] dark:text-white group-hover:text-[#111111] dark:group-hover:text-[#A79BFF] transition-colors'}`}>
                        {task.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F5F5F4] dark:bg-white/8 text-[#6B7280] dark:text-[#9CA3AF] font-medium">{task.project}</span>
                      <span className="text-[10px] text-[#9CA3AF] hidden sm:inline">{task.assignee}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
