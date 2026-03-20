'use client';

import { Bell, Settings, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-20 border-b border-[var(--color-slate-800)] flex items-center justify-between px-8 bg-[var(--color-slate-900)]/80 backdrop-blur-md sticky top-0 z-10 w-full">
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <span className="text-xl text-[var(--color-brand-neon)] font-mono">04</span>
          <div className="w-2 h-2 rounded-full bg-[var(--color-brand-neon)] shadow-[0_0_8px_rgba(0,229,255,0.8)] ml-4 mr-2"></div>
          <span className="text-[11px] text-[var(--color-brand-neon)] tracking-widest font-bold font-mono">LIVE FEED</span>
        </div>
        <div className="h-4 w-px bg-[var(--color-slate-700)]"></div>
        <span className="text-[11px] text-[var(--color-slate-400)] tracking-widest font-mono uppercase">Network: Stable 1.2ms</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="w-4 h-4 text-[var(--color-slate-400)] absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search parameters..." 
            className="bg-[var(--color-slate-800)] border border-[var(--color-slate-700)] text-sm text-[var(--color-slate-300)] rounded-md pl-10 pr-4 py-2 w-64 focus:outline-none focus:border-[var(--color-brand-neon)] focus:ring-1 focus:ring-[var(--color-brand-neon)] focus:ring-opacity-50 transition-all placeholder:text-[var(--color-slate-500)]"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-[var(--color-slate-400)] hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-0.5 w-2 h-2 rounded-full bg-[var(--color-brand-neon)] shadow-[0_0_6px_rgba(0,229,255,0.9)]"></div>
          </button>
          <button className="text-[var(--color-slate-400)] hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
