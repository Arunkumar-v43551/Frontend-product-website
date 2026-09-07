import { Sparkles, Globe, Mail, Rss } from 'lucide-react';

const cols = [
  { title: 'Product', links: ['Features', 'Solutions', 'Pricing', 'Changelog', 'Roadmap'] },
  { title: 'Developers', links: ['API Reference', 'Integrations', 'Status Page', 'Open Source', 'SDKs'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'DPA'] },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] text-[#6B7280] pt-16 pb-8 border-t border-white/8">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[10px] bg-white flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#111111]" />
              </div>
              <span className="text-white font-bold text-[17px] tracking-tight">NOVA</span>
            </div>
            <p className="text-sm leading-relaxed text-[#6B7280] max-w-[240px]">
              The AI-powered workspace built for teams that ship what matters.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, Mail, Rss].map((Icon, i) => (
                <a key={i} href="#" aria-label={`Social link ${i}`}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[#6B7280] hover:text-white hover:border-white/25 transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#9CA3AF] mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-[#6B7280] hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 text-[12.5px]">
          <p>© {new Date().getFullYear()} NOVA, Inc. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-[#9CA3AF]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
