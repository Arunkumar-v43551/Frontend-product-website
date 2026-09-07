import { Target, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  { 
    num: '01', 
    title: 'Plan', 
    icon: Target, 
    description: 'Turn high-level goals into clear projects and actionable breakdown tasks automatically.', 
    hueA: 340, 
    hueB: 10 
  },
  { 
    num: '02', 
    title: 'Automate', 
    icon: Zap, 
    description: 'Let NOVA handle repetitive status updates, cross-tool notifications, and workflows.', 
    hueA: 20, 
    hueB: 40 
  },
  { 
    num: '03', 
    title: 'Grow', 
    icon: TrendingUp, 
    description: 'Use intelligent insights and velocity tracking to continuously improve how your team ships.', 
    hueA: 205, 
    hueB: 245 
  },
];

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAFAFA] dark:bg-[#0D0D0E] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill-primary mb-4 inline-flex">Simple Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.18] mb-4">
            From idea to impact in three simple steps.
          </h2>
          <p className="text-[17px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            A streamlined process built to turn complex initiatives into predictable, measurable outcomes.
          </p>
        </div>

        {/* Vertically Stacked Animated Cards Container */}
        <div className="w-full max-w-[500px] mx-auto pb-[100px]">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const background = `linear-gradient(306deg, ${hue(s.hueA)}, ${hue(s.hueB)})`;

            return (
              <motion.div
                key={s.num}
                className="relative flex justify-center items-center overflow-hidden pt-5 mb-[-120px]"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ amount: 0.8 }}
              >
                {/* Asymmetric SVG Clip-path Background Splash */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background, 
                    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 480 830 C 480 841.046 471.046 850 460 850 L 20 850 C 8.954 850 0 841.046 0 830 Z")` 
                  }} 
                />
                
                {/* The Popping Card */}
                <motion.div
                  variants={cardVariants}
                  className="bg-[#f5f5f5] dark:bg-[#111113] flex flex-col justify-center items-center rounded-[20px] text-center px-8 relative"
                  style={{
                    width: 300,
                    height: 430,
                    boxShadow: "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
                    transformOrigin: "10% 60%",
                  }}
                >
                  <div className="w-16 h-16 bg-white dark:bg-white/5 border border-[#E5E7EB] dark:border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Icon className="w-7 h-7 text-[#111111] dark:text-[#A79BFF]" />
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-white dark:bg-white/5 rounded-full text-[12px] font-bold tracking-[0.15em] text-[#6B7280] dark:text-[#9CA3AF] uppercase mb-4 shadow-sm border border-[#E5E7EB] dark:border-transparent">
                    STEP {s.num}
                  </span>
                  
                  <h3 className="text-2xl font-black text-[#111111] dark:text-white mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  
                  <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
