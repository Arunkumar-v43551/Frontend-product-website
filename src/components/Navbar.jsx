import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

export function Navbar({ darkMode, onToggleTheme, onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/92 dark:bg-[#0D0D0E]/92 backdrop-blur-xl border-b border-[#E5E7EB] dark:border-white/10 shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-[10px] bg-[#111111] dark:bg-[#6D5EF5] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-[17px] font-bold tracking-tight text-[#111111] dark:text-white">NOVA</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(l => (
              <a key={l.label} href={l.href}
                className="text-[13.5px] font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111111] dark:hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button onClick={onToggleTheme} aria-label="Toggle theme"
              className="p-2 rounded-lg text-[#6B7280] dark:text-[#9CA3AF] hover:bg-[#F5F5F4] dark:hover:bg-white/10 transition-colors">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="#pricing"
              className="px-3.5 py-2 text-[13.5px] font-medium text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111111] dark:hover:text-white transition-colors">
              Sign in
            </a>
            <button onClick={onOpenDemo}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#111111] dark:bg-[#6D5EF5] text-white text-[13.5px] font-semibold hover:bg-[#1C1C1C] dark:hover:bg-[#5B4CE0] active:scale-[0.98] transition-all shadow-sm dark:shadow-[#6D5EF5]/25">
              Get started
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-1">
            <button onClick={onToggleTheme} aria-label="Toggle theme"
              className="p-2 rounded-lg text-[#6B7280] dark:text-[#9CA3AF]">
              {darkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <button onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu" aria-expanded={mobileOpen}
              className="p-2 rounded-lg text-[#6B7280] dark:text-[#9CA3AF]">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/96 dark:bg-[#0D0D0E]/96 backdrop-blur-xl border-b border-[#E5E7EB] dark:border-white/10 px-5 py-5 space-y-4">
          {navLinks.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-[#374151] dark:text-[#D1D5DB] hover:text-[#111111] dark:hover:text-[#A79BFF] transition-colors py-1">
              {l.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E7EB] dark:border-white/10 space-y-2">
            <button onClick={() => { setMobileOpen(false); onOpenDemo(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#111111] dark:bg-[#6D5EF5] text-white text-sm font-bold">
              Get started free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
