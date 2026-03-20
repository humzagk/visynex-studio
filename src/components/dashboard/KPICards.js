import { CheckCircle2, AlertTriangle, TrendingUp, Banknote } from 'lucide-react';

export default function KPICards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {/* ITEMS INSPECTED */}
      <div className="bg-[var(--color-slate-900)] rounded-lg p-5 border border-[var(--color-slate-800)] relative overflow-hidden flex flex-col justify-between group">
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-brand-neon)] shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
        <div className="absolute top-0 left-0 w-8 h-1 bg-[var(--color-brand-neon)]"></div>
        <div className="absolute bottom-0 left-0 w-8 h-1 bg-[var(--color-brand-neon)]"></div>
        
        <p className="text-[10px] text-[var(--color-slate-400)] tracking-[0.2em] uppercase font-semibold mb-2 ml-2">Items Inspected Today</p>
        <div className="flex items-end justify-between ml-2">
          <h2 className="text-4xl font-bold text-white tracking-tight">142,482</h2>
          <div className="w-6 h-6 rounded-full bg-[var(--color-brand-neon)]/20 flex items-center justify-center mb-1">
            <CheckCircle2 className="w-4 h-4 text-[var(--color-brand-neon)]" />
          </div>
        </div>
        <div className="mt-4 flex items-center ml-2">
          <div className="h-[3px] bg-[var(--color-brand-neon)] w-1/2 drop-shadow-[0_0_4px_rgba(0,229,255,0.8)]"></div>
          <div className="h-[3px] bg-[var(--color-slate-700)] w-1/2"></div>
        </div>
      </div>

      {/* DEFECTS PREVENTED */}
      <div className="bg-[var(--color-slate-900)] rounded-lg p-5 border border-[var(--color-slate-800)] relative overflow-hidden flex flex-col justify-between group">
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-brand-red)] shadow-[0_0_8px_rgba(255,77,77,0.8)]"></div>
        <div className="absolute top-0 left-0 w-8 h-1 bg-[var(--color-brand-red)]"></div>
        
        <p className="text-[10px] text-[var(--color-slate-400)] tracking-[0.2em] uppercase font-semibold mb-2 ml-2">Defects Prevented</p>
        <div className="flex items-end justify-between ml-2">
          <h2 className="text-4xl font-bold text-white tracking-tight">1,842</h2>
          <AlertTriangle className="w-5 h-5 text-[var(--color-brand-red)] mb-1" />
        </div>
        <div className="mt-4 flex items-center ml-2">
          <div className="h-[3px] bg-[var(--color-brand-red)] w-1/4 drop-shadow-[0_0_4px_rgba(255,77,77,0.8)]"></div>
          <div className="h-[3px] bg-[var(--color-slate-700)] w-3/4"></div>
        </div>
      </div>

      {/* CONFIDENCE SCORE */}
      <div className="bg-[var(--color-slate-900)] rounded-lg p-5 border border-[var(--color-slate-800)] relative overflow-hidden flex flex-col justify-between group">
        <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-brand-neon)] shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
        <div className="absolute top-0 left-0 w-8 h-1 bg-[var(--color-brand-neon)]"></div>
        
        <p className="text-[10px] text-[var(--color-slate-400)] tracking-[0.2em] uppercase font-semibold mb-2 ml-2">Confidence Score</p>
        <div className="flex items-end justify-between ml-2">
          <h2 className="text-4xl font-bold text-white tracking-tight">99.8%</h2>
          <TrendingUp className="w-5 h-5 text-[var(--color-brand-neon)] mb-1" />
        </div>
        <div className="mt-4 flex items-center ml-2">
          <div className="h-[3px] bg-[var(--color-brand-neon)] w-11/12 drop-shadow-[0_0_4px_rgba(0,229,255,0.8)]"></div>
          <div className="h-[3px] bg-[var(--color-slate-700)] w-1/12"></div>
        </div>
      </div>

      {/* SPOILAGE SAVED */}
      <div className="bg-[var(--color-slate-900)] rounded-lg p-5 border border-[var(--color-slate-800)] relative overflow-hidden flex flex-col justify-between group">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#3b82f6] shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
        <div className="absolute top-0 left-0 w-8 h-1 bg-[#3b82f6]"></div>
        
        <p className="text-[10px] text-[var(--color-slate-400)] tracking-[0.2em] uppercase font-semibold mb-2 ml-2">Spoilage Saved</p>
        <div className="flex items-end justify-between ml-2">
          <h2 className="text-4xl font-bold text-white tracking-tight">€12,402</h2>
          <Banknote className="w-5 h-5 text-[#3b82f6] mb-1" />
        </div>
        <div className="mt-4 flex items-center ml-2">
          <p className="text-xs text-[#3b82f6] font-semibold">+12% vs yesterday</p>
        </div>
      </div>
    </div>
  );
}
