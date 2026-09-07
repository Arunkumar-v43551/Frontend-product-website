import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA({ onOpenDemo }) {
  return (
    <section className="py-20 sm:py-28 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
      {/* Purple glow only visible in dark mode */}
      <div className="absolute inset-0 dark:flex hidden items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-[#6D5EF5]/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white text-[11px] font-semibold tracking-wider uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Get Started Today
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold tracking-tight text-white leading-[1.1] mb-6 max-w-4xl mx-auto">
          Your most productive team starts with{' '}
          <span className="text-gradient-primary">NOVA.</span>
        </h2>
        <p className="text-[17px] sm:text-[19px] text-white/55 leading-relaxed max-w-2xl mx-auto mb-10">
          Join over 10,000 teams using NOVA to ship faster, automate smarter, and collaborate effortlessly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button onClick={onOpenDemo}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-[#111111] dark:text-[#111111] text-[16px] font-bold hover:bg-white/90 active:scale-[0.98] transition-all shadow-xl shadow-black/30">
            Start for free — no card needed
            <ArrowRight className="w-5 h-5" />
          </button>
          <button onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-4 rounded-xl border border-white/20 text-white text-[16px] font-semibold hover:border-white/35 hover:bg-white/8 transition-all">
            Talk to sales
          </button>
        </div>
        <p className="mt-5 text-sm text-white/40">Free 14-day trial · No credit card required · Cancel anytime</p>
      </div>
    </section>
  );
}
