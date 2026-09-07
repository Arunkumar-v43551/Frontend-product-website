import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { LogoCloud } from './components/LogoCloud.jsx';
import { Features } from './components/Features.jsx';
import { ProductShowcase } from './components/ProductShowcase.jsx';
import { HowItWorks } from './components/HowItWorks.jsx';
import { Stats } from './components/Stats.jsx';
import { Solutions } from './components/Solutions.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { Pricing } from './components/Pricing.jsx';
import { FAQ } from './components/FAQ.jsx';
import { CTA } from './components/CTA.jsx';
import { Footer } from './components/Footer.jsx';
import { DemoModal } from './components/DemoModal.jsx';
import { BackToTop } from './components/BackToTop.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('nova-theme') === 'dark' ||
        (!localStorage.getItem('nova-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
    }
    return false;
  });

  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('nova-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('nova-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#FAFAF9] dark:bg-[#0D0D0E] text-[#111111] dark:text-[#F4F4F5] font-sans antialiased overflow-x-hidden">
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(d => !d)} onOpenDemo={() => setDemoOpen(true)} />
      <main>
        <Hero onOpenDemo={() => setDemoOpen(true)} />
        <LogoCloud />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <Stats />
        <Solutions />
        <Testimonials />
        <Pricing onOpenDemo={() => setDemoOpen(true)} />
        <FAQ />
        <CTA onOpenDemo={() => setDemoOpen(true)} />
      </main>
      <Footer />
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <BackToTop />
    </div>
  );
}
