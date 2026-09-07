import { Play, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup.jsx';

export function Hero({ onOpenDemo }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-white dark:bg-[#0D0D0E]">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="pill-primary">
            <Sparkles className="w-3.5 h-3.5" />
            The Intelligent Workspace
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-tight leading-[1.08] text-[#111111] dark:text-white mb-6">
            Build Better.{' '}
            <span className="text-gradient-primary">Work Smarter.</span>
          </h1>
          <p className="text-[17px] sm:text-[19px] text-[#6B7280] dark:text-[#9CA3AF] leading-[1.65] max-w-2xl mx-auto mb-9">
            NOVA brings projects, automation, insights, and collaboration into one intelligent workspace — so your team can focus on meaningful work instead of busywork.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <button onClick={onOpenDemo}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111111] dark:bg-[#6D5EF5] text-white text-[15px] font-bold hover:bg-[#1C1C1C] dark:hover:bg-[#5B4CE0] active:scale-[0.98] transition-all shadow-md dark:shadow-[#6D5EF5]/25">
              Start for free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={onOpenDemo}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#E5E7EB] dark:border-white/15 bg-white dark:bg-white/5 text-[#374151] dark:text-[#D1D5DB] text-[15px] font-semibold hover:border-[#D1D5DB] dark:hover:border-white/25 hover:bg-[#F9FAFB] dark:hover:bg-white/10 transition-all">
              <Play className="w-4 h-4 fill-[#111111] dark:fill-[#6D5EF5] text-[#111111] dark:text-[#6D5EF5]" />
              Watch demo
            </button>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-[13px] text-[#9CA3AF] dark:text-[#6B7280]">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
            No credit card required · Free 14-day trial
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="mt-14 sm:mt-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-black/5 dark:from-[#6D5EF5]/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
