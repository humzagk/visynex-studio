'use client';

import { useEffect, useState } from 'react';

export default function LiveActivityLog() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const res = await fetch('/api/logs');
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setLogs(data.data);
        } else {
          // If no data, use some realistic mock data to match the UI until DB is seeded
          setLogs([
            { _id: '1', timestamp: new Date('2026-03-20T14:23:01'), title: 'Micro-leak detected', status: 'CRITICAL', lineNumber: 4, defectType: 'Sensor B-12 • Batch #8821' },
            { _id: '2', timestamp: new Date('2026-03-20T14:22:45'), title: 'Fill level verified', status: 'PASS', lineNumber: 4, defectType: 'Unit #142479 • Optical OK' },
            { _id: '3', timestamp: new Date('2026-03-20T14:22:12'), title: 'Belt speed adjusted', status: 'NOTICE', lineNumber: 4, defectType: 'Auto-sync with Line 3 (+2.5m/s)' },
            { _id: '4', timestamp: new Date('2026-03-20T14:21:58'), title: 'Label misalignment', status: 'CRITICAL', lineNumber: 4, defectType: 'Unit #142472 • Diverted to Rework' },
            { _id: '5', timestamp: new Date('2026-03-20T14:21:30'), title: 'Cap torque inspection', status: 'PASS', lineNumber: 4, defectType: 'Nominal 12Nm • Verified' },
            { _id: '6', timestamp: new Date('2026-03-20T14:21:15'), title: 'Surface scan complete', status: 'PASS', lineNumber: 4, defectType: 'Glass integrity 100%' }
          ]);
        }
      } catch (error) {
        console.error("Error fetching logs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLogs();
  }, []);

  const getStatusStyles = (status) => {
    if (status === 'CRITICAL') return 'bg-[var(--color-brand-red)]/20 text-[var(--color-brand-red)] border-[var(--color-brand-red)]/30';
    if (status === 'PASS') return 'bg-[var(--color-brand-neon)]/10 text-[var(--color-brand-neon)] border-[var(--color-brand-neon)]/20';
    if (status === 'NOTICE') return 'bg-[#3b82f6]/20 text-[#3b82f6] border-[#3b82f6]/30';
    return 'bg-slate-700 text-slate-300 border-slate-600';
  };

  const formatTime = (dateObj) => {
    try {
      const d = new Date(dateObj);
      return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
    } catch {
      return "00:00:00";
    }
  };

  return (
    <div className="w-80 bg-[var(--color-slate-900)] border-l border-[var(--color-slate-800)] h-full overflow-hidden flex flex-col shrink-0">
      <div className="p-6 border-b border-[var(--color-slate-800)] flex items-center justify-between shrink-0">
        <h2 className="text-white font-semibold">Live Activity Log</h2>
        <span className="text-[9px] font-bold tracking-wider uppercase bg-[var(--color-slate-800)] text-[var(--color-brand-neon)] px-2 py-1 rounded">Streaming</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
        {loading ? (
          <div className="text-center text-slate-500 text-sm mt-10 font-mono animate-pulse">Establishing stream...</div>
        ) : (
          logs.map((log) => (
            <div key={log._id} className="bg-[var(--color-slate-800)]/50 rounded-lg p-4 border border-[var(--color-slate-700)]/50 hover:border-[var(--color-slate-600)] transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] text-[var(--color-slate-400)] font-mono">{formatTime(log.timestamp)}</span>
                <span className={`text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${getStatusStyles(log.status)}`}>
                  {log.status}
                </span>
              </div>
              <h4 className="text-sm text-white font-medium mb-1 mt-1 leading-tight group-hover:text-[var(--color-brand-neon)] transition-colors">{log.title}</h4>
              <p className="text-[10px] text-[var(--color-slate-400)]">
                {typeof log.lineNumber === 'number' && `Line ${log.lineNumber} • `} 
                {log.defectType}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t border-[var(--color-slate-800)] shrink-0 bg-[var(--color-slate-900)]">
        <button className="w-full flex items-center justify-center space-x-2 bg-transparent hover:bg-[var(--color-slate-800)] text-[var(--color-slate-300)] border border-[var(--color-slate-700)] hover:text-white text-xs font-semibold px-4 py-3 rounded transition-colors uppercase tracking-wider">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          <span>Export Full Log</span>
        </button>
      </div>
    </div>
  );
}
