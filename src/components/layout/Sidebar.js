'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Cuboid, GraduationCap, Rocket } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Models', href: '/models', icon: Cuboid },
    { name: 'Training', href: '/training', icon: GraduationCap },
    { name: 'Deploy', href: '/deploy', icon: Rocket },
  ];

  return (
    <div className="w-64 bg-[var(--color-slate-900)] border-r border-[var(--color-slate-800)] h-screen flex flex-col justify-between hidden md:flex shrink-0">
      <div>
        <div className="p-6 mb-4">
          <h1 className="text-xl font-bold text-white tracking-widest">
            Visynex Studio
          </h1>
          <p className="text-[10px] text-[var(--color-brand-neon)] tracking-widest mt-1 uppercase font-semibold">
            Industrial AI
          </p>
        </div>

        <nav className="flex flex-col space-y-2 mt-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center px-6 py-3 border-l-[3px] transition-all duration-300 ${
                  isActive
                    ? 'border-[var(--color-brand-neon)] text-[var(--color-brand-neon)] bg-[var(--color-slate-800)]/30'
                    : 'border-transparent text-[var(--color-slate-400)] hover:text-white hover:bg-[var(--color-slate-800)]/50'
                }`}
              >
                <Icon className={`w-5 h-5 mr-4 ${isActive ? 'drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]' : ''}`} />
                <span className="font-medium text-sm">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-6 mb-4 flex items-center">
        <div className="w-10 h-10 rounded-md bg-[#ffd1b3] flex items-center justify-center mr-3 shrink-0">
          <span className="text-[10px] font-mono text-black">mc</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Marcus Chen</p>
          <p className="text-[10px] text-[var(--color-slate-400)] uppercase tracking-widest mt-0.5">Plant Supervisor</p>
        </div>
      </div>
    </div>
  );
}
