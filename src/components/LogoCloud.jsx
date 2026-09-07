const logos = [
  { name: 'ARC', symbol: '△' },
  { name: 'LUMA', symbol: '◆' },
  { name: 'VERTEX', symbol: '⬡' },
  { name: 'NORTHSTAR', symbol: '✦' },
  { name: 'ORBIT', symbol: '◎' },
  { name: 'KINETIC', symbol: '⚡' },
];

export function LogoCloud() {
  // Duplicate logos for seamless infinite scrolling
  const scrollLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-y border-[#E5E7EB] dark:border-white/8 bg-[#FAFAF9] dark:bg-[#0D0D0E] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-[#9CA3AF] mb-8">
          Trusted by teams building what comes next
        </p>
        
        {/* Mask to fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#FAFAF9] dark:from-[#0D0D0E] to-transparent z-10 pointer-events-none mt-12" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#FAFAF9] dark:from-[#0D0D0E] to-transparent z-10 pointer-events-none mt-12" />

        <div className="flex w-[200%] sm:w-[150%] md:w-[100%]">
          <div className="flex items-center justify-around w-full animate-marquee gap-8 pr-8">
            {scrollLogos.map(({ name, symbol }, i) => (
              <div key={`${name}-${i}`} className="flex items-center gap-2 flex-shrink-0 opacity-50 hover:opacity-90 transition-opacity duration-200 cursor-default group">
                <span className="text-base text-[#9CA3AF] group-hover:text-[#6D5EF5] transition-colors">{symbol}</span>
                <span className="font-black text-[13.5px] tracking-[0.12em] text-[#6B7280] dark:text-[#9CA3AF] group-hover:text-[#111111] dark:group-hover:text-white transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
