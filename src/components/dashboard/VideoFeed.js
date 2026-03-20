import Image from 'next/image';
import { Pause, Maximize, Settings2 } from 'lucide-react';

export default function VideoFeed() {
  return (
    <div className="flex-1 bg-[var(--color-slate-800)] rounded-xl border border-[var(--color-slate-700)] overflow-hidden flex flex-col relative group">
      {/* Video Content Area */}
      <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
        {/* Placeholder for Next/Image asset - easily droppable */}
        <div className="absolute inset-0 opacity-40">
           {/* 
             User Request: structure the Next/Image component to drop in the 'conveyor-belt.png' asset later.
             I will add the Image component with a fallback color until the asset is placed.
           */}
           <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 relative z-0">
             {/* 
               <Image 
                 src="/conveyor-belt.png" 
                 alt="Conveyor Belt Feed" 
                 fill 
                 className="object-cover"
               /> 
             */}
           </div>
        </div>

        {/* Overlays (Simulating Detections) */}
        <div className="absolute inset-0 z-10 pointer-events-none p-8 flex items-center justify-center space-x-12">
          
          {/* Overlay Box 1 */}
          <div className="w-48 h-72 border-2 border-[var(--color-brand-neon)] relative bg-[var(--color-brand-neon)]/5">
            <div className="absolute -top-6 left-0 bg-[var(--color-brand-neon)] text-black text-[9px] font-bold px-2 py-1 tracking-wider uppercase">
              Pass [99.9%]
            </div>
          </div>

          {/* Overlay Box 2 */}
          <div className="w-48 h-72 border-2 border-[var(--color-brand-neon)] relative bg-[var(--color-brand-neon)]/5">
            <div className="absolute -top-6 left-0 bg-[var(--color-brand-neon)] text-black text-[9px] font-bold px-2 py-1 tracking-wider uppercase">
              Pass [99.7%]
            </div>
          </div>

          {/* Overlay Box 3 - Defect */}
          <div className="w-48 h-72 border-2 border-[var(--color-brand-red)] relative bg-[var(--color-brand-red)]/5">
            <div className="absolute -top-6 left-0 bg-[var(--color-brand-red)] text-white text-[9px] font-bold px-2 py-1 tracking-wider uppercase">
              Defect [Critical]
            </div>
            {/* Inner Defect Highlight */}
            <div className="absolute inset-y-1/3 inset-x-8 border-2 border-[var(--color-brand-red)]/50 rounded-full"></div>
          </div>

        </div>

        {/* Telemetry Overlay */}
        <div className="absolute top-4 left-4 z-20 flex space-x-2">
          <div className="bg-[var(--color-slate-800)]/80 backdrop-blur-sm text-white text-xs px-3 py-1 font-mono rounded">
            CAM_04_NORTH
          </div>
          <div className="bg-[var(--color-slate-800)]/80 backdrop-blur-sm text-[var(--color-slate-400)] text-xs px-3 py-1 font-mono rounded">
            60 FPS
          </div>
        </div>
        
        <div className="absolute bottom-16 left-4 z-20 text-[10px] text-[var(--color-slate-300)] font-mono flex flex-col space-y-1">
           <p>LAT: 52.3676° N</p>
           <p>LONG: 4.9041° E</p>
           <p>THERMAL: 24.2°C</p>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div className="h-20 bg-[var(--color-slate-900)] border-t border-[var(--color-slate-800)] flex items-center justify-between px-6 shrink-0 z-20">
        <div className="flex items-center space-x-4">
          <button className="w-12 h-12 bg-[var(--color-brand-neon)] rounded-lg flex items-center justify-center hover:bg-[var(--color-brand-neon)]/80 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.4)]">
            <Pause className="w-5 h-5 text-black fill-black" />
          </button>
          <div>
            <h3 className="text-white font-semibold flex items-center">
              Main Bottling Array 
            </h3>
            <p className="text-xs text-[var(--color-slate-400)] mt-0.5">Real-time inference active</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-[var(--color-slate-800)] hover:bg-[var(--color-slate-700)] text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors uppercase tracking-wider">
            <span>Adjust Focus</span>
          </button>
          <button className="flex items-center space-x-2 bg-[var(--color-brand-neon)] hover:bg-[var(--color-brand-neon)]/90 text-black text-xs font-bold px-4 py-2.5 rounded transition-colors shadow-[0_0_10px_rgba(0,229,255,0.3)] uppercase tracking-wider">
            <span>Full Screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
