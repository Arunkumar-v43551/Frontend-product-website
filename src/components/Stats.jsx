import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Activity } from 'lucide-react';

function LiveCounter({ value, suffix, decimals, isVisible, liveTick = false, tickRange = 0.5 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const steps = 60;
    const stepMs = 1800 / steps;
    let step = 0;
    let timer;
    
    timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCount(value * ease);
      
      if (step >= steps) { 
        clearInterval(timer); 
        setCount(value);
        
        if (liveTick) {
          setInterval(() => {
            const fluctuation = (Math.random() * tickRange * 2) - tickRange;
            setCount(prev => Math.max(0, value + fluctuation));
          }, 2500);
        }
      }
    }, stepMs);
    
    return () => clearInterval(timer);
  }, [isVisible, value, liveTick, tickRange]);

  return (
    <span className="font-mono tabular-nums tracking-tight text-[#111111] dark:text-white">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      <span className="text-[#6B7280] dark:text-[#A79BFF] ml-0.5">{suffix}</span>
    </span>
  );
}

function LineChart({ isVisible }) {
  const pathData = "M 0 80 C 20 70, 40 85, 60 50 C 80 15, 100 60, 120 20 C 140 -20, 160 30, 200 10";
  const areaData = `${pathData} L 200 100 L 0 100 Z`;

  return (
    <div className="w-full h-full relative">
      <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.0" />
          </linearGradient>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--primary-label-dark)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
        </defs>
        {[20, 50, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="200" y2={y} className="stroke-[#E5E7EB] dark:stroke-white/10" strokeWidth="0.5" strokeDasharray="2 4" />
        ))}
        <path d={areaData} fill="url(#area-grad)" className={`chart-area-fade ${isVisible ? 'active' : ''}`} />
        <path d={pathData} fill="none" stroke="url(#line-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`chart-line-draw ${isVisible ? 'active' : ''}`} />
        <circle cx="200" cy="10" r="4" style={{ fill: 'var(--primary)' }} className={`chart-area-fade transition-all duration-300 hover:r-6 hover:fill-white hover:stroke-[var(--primary)] hover:stroke-2 cursor-pointer ${isVisible ? 'active' : ''}`} />
      </svg>
    </div>
  );
}

function BarChart({ isVisible }) {
  const data = [
    { day: 'Mon', h: 30 }, { day: 'Tue', h: 50 }, { day: 'Wed', h: 40 },
    { day: 'Thu', h: 70 }, { day: 'Fri', h: 90 }, { day: 'Sat', h: 100 },
  ];

  return (
    <div className="w-full h-full flex items-end justify-between gap-2 sm:gap-3 pt-6 pb-2">
      {data.map((d, i) => (
        <div key={d.day} className="flex-1 flex flex-col items-center gap-2 relative group h-full justify-end">
          <div className="absolute -top-8 bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
            {d.h} hrs
          </div>
          <div className="w-full rounded-t-md bg-[#F5F5F4] dark:bg-white/10 relative overflow-hidden h-[85%]">
            <div 
              className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111111] to-[#4B5563] dark:from-[#5B4CE0] dark:to-[#9333EA] rounded-t-md chart-bar-grow group-hover:brightness-125 transition-all ${isVisible ? 'active' : ''}`}
              style={{ height: `${d.h}%`, transitionDelay: `${i * 100}ms` }}
            />
          </div>
          <span className="text-[10px] font-medium text-[#9CA3AF] uppercase tracking-wider">{d.day}</span>
        </div>
      ))}
    </div>
  );
}

function SmallLineChart({ isVisible }) {
  const pathData = "M 0 40 C 20 40, 40 20, 60 30 C 80 40, 100 10, 120 20 C 140 30, 160 5, 200 0";
  
  return (
    <div className="w-full h-[60px] relative mt-4 opacity-50">
      <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <path d={pathData} fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`chart-line-draw ${isVisible ? 'active' : ''}`} style={{ transitionDelay: '0.4s' }} />
      </svg>
    </div>
  );
}

export function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#0D0D0E] relative overflow-hidden border-y border-[#E5E7EB] dark:border-white/8">
      <div className="hidden dark:block absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[400px] bg-[#6D5EF5]/15 rounded-full blur-[120px]" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-14 lg:mb-20">
          <div className="pill-primary mb-5 inline-flex">
            <Activity className="w-3.5 h-3.5 text-[#111111] dark:text-[#A79BFF] animate-pulse" />
            Live Metrics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#111111] dark:text-white leading-[1.18] mb-4">
            Built for teams that move fast.
          </h2>
          <p className="text-[17px] text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed">
            Quantifiable efficiency gains delivered to product-led organizations worldwide. See how NOVA accelerates delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          
          {/* Card 1: Line Chart */}
          <div className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111113] border border-[#E5E7EB] dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none flex flex-col justify-between h-[360px] ${visible ? 'stagger-1' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-1">Team Velocity</h3>
                <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">Story points completed per sprint.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-[#111111] dark:text-[#A79BFF] text-sm font-bold bg-[#F5F5F4] dark:bg-[#6D5EF5]/10 px-2.5 py-1 rounded-lg border border-[#E5E7EB] dark:border-[#6D5EF5]/20">
                  <ArrowUpRight className="w-4 h-4" /> 
                  <LiveCounter value={18.5} suffix="%" decimals={1} isVisible={visible} liveTick={true} tickRange={0.3} />
                </span>
              </div>
            </div>
            <div className="h-full w-full mt-auto">
              <LineChart isVisible={visible} />
            </div>
          </div>

          {/* Card 2: Bar Chart */}
          <div className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111113] border border-[#E5E7EB] dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none flex flex-col justify-between h-[360px] ${visible ? 'stagger-2' : 'opacity-0'}`}>
            <div className="mb-2">
              <h3 className="text-lg font-bold text-[#111111] dark:text-white mb-1">Hours Saved</h3>
              <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF]">Time recovered from manual workflows.</p>
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <LiveCounter value={32} suffix="%" decimals={0} isVisible={visible} liveTick={true} tickRange={1} />
            </div>
            <div className="h-full w-full mt-auto">
              <BarChart isVisible={visible} />
            </div>
          </div>

          {/* Card 3: Adoption */}
          <div className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111113] border border-[#E5E7EB] dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none flex flex-col justify-between h-[360px] group hover:border-[#D1D5DB] dark:hover:border-white/20 transition-colors relative overflow-hidden ${visible ? 'stagger-3' : 'opacity-0'}`}>
            <div>
              <p className="text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] mb-1 uppercase tracking-wider">Adoption</p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-white">Active organizations</h3>
              <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mt-2 max-w-[200px]">Growing steadily across enterprise and startups.</p>
            </div>
            <div className="mt-auto">
              <div className="text-5xl sm:text-[64px] font-extrabold tracking-tight">
                <LiveCounter value={10423} suffix="+" decimals={0} isVisible={visible} liveTick={true} tickRange={12} />
              </div>
              <SmallLineChart isVisible={visible} />
            </div>
          </div>

          {/* Card 4: Reliability */}
          <div className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111113] border border-[#E5E7EB] dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-none flex flex-col justify-between h-[360px] group hover:border-[#D1D5DB] dark:hover:border-white/20 transition-colors relative overflow-hidden ${visible ? 'stagger-4' : 'opacity-0'}`}>
            <div>
              <p className="text-[14px] font-semibold text-[#6B7280] dark:text-[#9CA3AF] mb-1 uppercase tracking-wider">Reliability</p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] dark:text-white">Platform uptime guarantee</h3>
              <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mt-2 max-w-[200px]">Zero downtime deployments with global edge caching.</p>
            </div>
            <div className="mt-auto">
              <div className="text-5xl sm:text-[64px] font-extrabold tracking-tight flex items-center gap-4">
                <LiveCounter value={99.9} suffix="%" decimals={2} isVisible={visible} liveTick={true} tickRange={0.05} />
                <div className="w-4 h-4 rounded-full bg-[#111111] dark:bg-[#6D5EF5] animate-pulse shadow-[0_0_15px_rgba(17,17,17,0.5)] dark:shadow-[0_0_15px_rgba(109,94,245,0.5)]" />
              </div>
              <SmallLineChart isVisible={visible} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
