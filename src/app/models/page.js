'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { Filter, Code, Search, Image as ImageIcon, Eye, Download, Box, Trash2 } from 'lucide-react';

// Mock data for the dense image grid
const MOCK_DEFECTS = Array.from({ length: 24 }).map((_, i) => ({
  id: `DEF-${1000 + i}`,
  type: ['Scratch', 'Dent', 'Oxidation', 'Micro-crack', 'Solder Bridge'][Math.floor(Math.random() * 5)],
  severity: ['Low', 'Medium', 'High', 'Critical'][Math.floor(Math.random() * 4)],
  confidence: (Math.random() * 20 + 80).toFixed(1), // 80 - 100
  date: new Date(Date.now() - Math.random() * 10000000000).toISOString().split('T')[0],
  image: `https://picsum.photos/seed/${1000 + i}/300/300?grayscale` // Placeholder grayscale
}));

export default function SyntheticDefectLibrary() {
  const [selectedAsset, setSelectedAsset] = useState(MOCK_DEFECTS[0]);
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Scratch', 'Dent', 'Oxidation', 'Micro-crack', 'Solder Bridge'];

  const filteredDefects = activeFilter === 'All' 
    ? MOCK_DEFECTS 
    : MOCK_DEFECTS.filter(d => d.type === activeFilter);

  return (
    <>
      <Header />
      <main className="flex-1 flex overflow-hidden">
        
        {/* Left/Main Content: Grid & Filters */}
        <div className="flex-1 p-6 flex flex-col h-full overflow-hidden">
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">Synthetic Defect Library</h1>
              <p className="text-sm text-[var(--color-slate-400)] mt-1">Manage and inspect generated and captured defect models.</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-[var(--color-slate-500)]" />
                <input 
                  type="text" 
                  placeholder="Search assets..." 
                  className="bg-[var(--color-slate-800)] border border-[var(--color-slate-700)] text-sm text-white rounded-md pl-9 pr-4 py-2 focus:outline-none focus:border-[var(--color-brand-neon)] w-64"
                />
              </div>
              <button className="bg-[var(--color-slate-800)] border border-[var(--color-slate-700)] text-white p-2 rounded-md hover:bg-[var(--color-slate-700)] transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filter Toggles */}
          <div className="flex items-center space-x-2 mb-6 overflow-x-auto pb-2 custom-scrollbar shrink-0">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                  activeFilter === filter 
                    ? 'bg-[var(--color-brand-neon)]/10 border-[var(--color-brand-neon)] text-[var(--color-brand-neon)]' 
                    : 'bg-[var(--color-slate-800)] border-[var(--color-slate-700)] text-[var(--color-slate-400)] hover:text-white hover:border-[var(--color-slate-500)]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Dense Image Grid */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {filteredDefects.map((defect) => (
                <div 
                  key={defect.id}
                  onClick={() => setSelectedAsset(defect)}
                  className={`relative group cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    selectedAsset.id === defect.id 
                      ? 'border-[var(--color-brand-neon)] shadow-[0_0_15px_rgba(0,229,255,0.3)] scale-[1.02]' 
                      : 'border-[var(--color-slate-800)] hover:border-[var(--color-slate-600)]'
                  }`}
                >
                  <div className="aspect-square bg-[var(--color-slate-800)] relative">
                    {/* Fake defect image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={defect.image} 
                      alt={defect.id} 
                      className={`w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity ${defect.type === 'Scratch' ? 'mix-blend-screen' : ''}`}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3 backdrop-blur-sm">
                      <button className="p-2 bg-[var(--color-slate-700)] rounded hover:bg-[var(--color-brand-neon)] hover:text-black text-white transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-[var(--color-slate-700)] rounded hover:bg-[var(--color-brand-neon)] hover:text-black text-white transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Meta tags */}
                    <div className="absolute top-2 left-2 flex gap-1">
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                        defect.severity === 'Critical' ? 'bg-red-500/80 text-white' : 
                        defect.severity === 'High' ? 'bg-orange-500/80 text-white' : 
                        defect.severity === 'Medium' ? 'bg-yellow-500/80 text-black' : 
                        'bg-green-500/80 text-white'
                      }`}>
                        {defect.severity.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className={`p-2 bg-[var(--color-slate-900)] border-t ${selectedAsset.id === defect.id ? 'border-[var(--color-brand-neon)]' : 'border-[var(--color-slate-800)]'}`}>
                    <p className="text-xs font-mono text-[var(--color-brand-neon)]">{defect.id}</p>
                    <p className="text-[10px] text-[var(--color-slate-400)] truncate">{defect.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: JSON Asset Inspector */}
        <div className="w-80 bg-[var(--color-slate-800)] border-l border-[var(--color-slate-700)] h-full flex flex-col shrink-0 hidden lg:flex">
          <div className="p-4 border-b border-[var(--color-slate-700)] flex items-center justify-between">
            <h2 className="text-sm font-semibold flex items-center text-white">
              <Code className="w-4 h-4 mr-2 text-[var(--color-brand-neon)]" />
              Inspector
            </h2>
            <div className="flex gap-2">
              <button className="text-[var(--color-slate-400)] hover:text-white transition-colors">
                <Box className="w-4 h-4" />
              </button>
              <button className="text-[var(--color-slate-400)] hover:text-white transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
            {/* Minimal Asset Preview */}
            <div className="w-full aspect-video bg-black rounded-lg border border-[var(--color-slate-700)] overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedAsset.image} alt="Preview" className="w-full h-full object-cover opacity-90" />
              <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-[10px] text-[var(--color-brand-neon)] font-mono border border-[var(--color-brand-neon)]/30 backdrop-blur-md">
                {selectedAsset.id}
              </div>
            </div>

            {/* Properties */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-slate-500)] mb-3 font-semibold">Properties</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-slate-400)]">Type</span>
                  <span className="text-white font-medium">{selectedAsset.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-slate-400)]">Severity</span>
                  <span className={`${
                    selectedAsset.severity === 'Critical' ? 'text-red-400' : 
                    selectedAsset.severity === 'High' ? 'text-orange-400' : 
                    selectedAsset.severity === 'Medium' ? 'text-yellow-400' : 
                    'text-green-400'
                  } font-medium`}>{selectedAsset.severity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-slate-400)]">Confidence</span>
                  <span className="text-[var(--color-brand-neon)] font-mono">{selectedAsset.confidence}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--color-slate-400)]">Date</span>
                  <span className="text-white text-xs">{selectedAsset.date}</span>
                </div>
              </div>
            </div>

            {/* JSON Viewer */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[var(--color-slate-500)] mb-3 font-semibold">Raw Metadata</h3>
              <div className="bg-[#0d121c] p-3 rounded-md border border-[var(--color-slate-700)]/50 font-mono text-[11px] leading-relaxed overflow-x-auto text-[var(--color-slate-300)]">
                <span className="text-pink-400">{'{'}</span><br/>
                &nbsp;&nbsp;<span className="text-blue-300">"assetId"</span>: <span className="text-green-300">"{selectedAsset.id}"</span>,<br/>
                &nbsp;&nbsp;<span className="text-blue-300">"class"</span>: <span className="text-green-300">"{selectedAsset.type.toLowerCase()}"</span>,<br/>
                &nbsp;&nbsp;<span className="text-blue-300">"boundingBox"</span>: <span className="text-pink-400">{'['}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-300">124</span>, <span className="text-orange-300">45</span>, <span className="text-orange-300">200</span>, <span className="text-orange-300">89</span><br/>
                &nbsp;&nbsp;<span className="text-pink-400">{']'}</span>,<br/>
                &nbsp;&nbsp;<span className="text-blue-300">"metrics"</span>: <span className="text-pink-400">{'{'}</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"area"</span>: <span className="text-orange-300">3344.5</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">"perimeter"</span>: <span className="text-orange-300">245.8</span><br/>
                &nbsp;&nbsp;<span className="text-pink-400">{'}'}</span><br/>
                <span className="text-pink-400">{'}'}</span>
              </div>
            </div>
            
          </div>
        </div>

      </main>
    </>
  );
}
