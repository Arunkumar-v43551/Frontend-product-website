import { useState } from 'react';
import { X, Sparkles, Play, Check } from 'lucide-react';

const steps = ['Use case', 'Team size', 'Watch demo'];

export function DemoModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [useCase, setUseCase] = useState('');
  const [teamSize, setTeamSize] = useState('');

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Request a demo"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full sm:max-w-md bg-white dark:bg-[#111113] rounded-t-3xl sm:rounded-2xl border-t sm:border border-[#E5E7EB] dark:border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E7EB] dark:border-white/8">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#111111] dark:bg-[#6D5EF5] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-[15px] text-[#111111] dark:text-white">Get NOVA for free</span>
          </div>
          <button onClick={onClose} aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F4] dark:bg-white/10 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111111] dark:hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Steps */}
        <div className="flex items-center gap-2 px-6 pt-5">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                i < step ? 'bg-emerald-500 text-white' : i === step ? 'bg-[#111111] dark:bg-[#6D5EF5] text-white' : 'bg-[#F5F5F4] dark:bg-white/10 text-[#9CA3AF]'
              }`}>
                {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </div>
              <span className={`text-xs font-medium truncate ${i === step ? 'text-[#111111] dark:text-white' : 'text-[#9CA3AF]'}`}>{s}</span>
              {i < steps.length - 1 && <div className="flex-1 h-px bg-[#E5E7EB] dark:bg-white/10 ml-auto" />}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-4">
          {step === 0 && (
            <>
              <h3 className="text-lg font-bold text-[#111111] dark:text-white">What are you building?</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Product development', 'Engineering sprints', 'Marketing campaigns', 'Operations & growth'].map(opt => (
                  <button key={opt} onClick={() => setUseCase(opt)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      useCase === opt
                        ? 'border-[#111111] dark:border-[#6D5EF5] bg-[#F5F5F4] dark:bg-[#6D5EF5]/15 text-[#111111] dark:text-[#A79BFF]'
                        : 'border-[#E5E7EB] dark:border-white/10 text-[#374151] dark:text-[#D1D5DB] hover:border-[#D1D5DB] dark:hover:border-white/20'
                    }`}>
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <h3 className="text-lg font-bold text-[#111111] dark:text-white">How large is your team?</h3>
              <div className="grid grid-cols-2 gap-2">
                {['Just me', '2–10', '11–50', '50+'].map(opt => (
                  <button key={opt} onClick={() => setTeamSize(opt)}
                    className={`p-3 rounded-xl border text-sm font-semibold transition-all ${
                      teamSize === opt
                        ? 'border-[#111111] dark:border-[#6D5EF5] bg-[#F5F5F4] dark:bg-[#6D5EF5]/15 text-[#111111] dark:text-[#A79BFF]'
                        : 'border-[#E5E7EB] dark:border-white/10 text-[#374151] dark:text-[#D1D5DB] hover:border-[#D1D5DB] dark:hover:border-white/20'
                    }`}>
                    {opt}
                  </button>
                ))}
              </div>
            </>
          )}
          {step === 2 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#111111] dark:bg-gradient-to-tr dark:from-[#6D5EF5] dark:to-[#9333EA] flex items-center justify-center mx-auto shadow-lg">
                <Play className="w-7 h-7 text-white fill-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#111111] dark:text-white">You're all set! 🎉</h3>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">Your personalized demo is ready. Start your free 14-day trial with no credit card required.</p>
              </div>
              <button onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#111111] dark:bg-[#6D5EF5] text-white font-bold hover:bg-[#1C1C1C] dark:hover:bg-[#5B4CE0] transition-colors">
                Launch NOVA workspace →
              </button>
            </div>
          )}
        </div>

        {step < 2 && (
          <div className="px-6 pb-6 flex justify-between items-center">
            <button onClick={() => step > 0 ? setStep(s => s - 1) : onClose()}
              className="text-sm text-[#9CA3AF] hover:text-[#6B7280] dark:hover:text-[#D1D5DB] transition-colors font-medium">
              {step === 0 ? 'Cancel' : 'Back'}
            </button>
            <button
              onClick={() => step === 0 ? (useCase && setStep(1)) : setStep(2)}
              disabled={step === 0 ? !useCase : !teamSize}
              className="px-5 py-2.5 rounded-xl bg-[#111111] dark:bg-[#6D5EF5] text-white text-sm font-bold hover:bg-[#1C1C1C] dark:hover:bg-[#5B4CE0] disabled:opacity-40 disabled:cursor-not-allowed transition-all">
              {step < steps.length - 2 ? 'Continue →' : 'See demo →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
