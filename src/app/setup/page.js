'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import { UploadCloud, CheckCircle, ChevronDown, List, Settings } from 'lucide-react';

export default function SetupWizard() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // simulate upload
      setUploadedImage(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">Setup Wizard</h1>
              <p className="text-sm text-[var(--color-slate-400)]">Configure new training pipelines based on golden samples.</p>
            </div>
            <button className="bg-[var(--color-brand-neon)] text-black font-semibold py-2 px-6 rounded hover:bg-[#00cce6] transition-colors shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              Start Training
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Dropdowns & settings */}
            <div className="md:col-span-1 space-y-6">
              
              <div className="bg-[var(--color-slate-800)] p-6 rounded-lg border border-[var(--color-slate-700)] shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-brand-neon)] to-transparent opacity-50"></div>
                
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <List className="w-5 h-5 mr-2 text-[var(--color-brand-neon)]" />
                  Material Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--color-slate-400)] mb-1.5">Material Type</label>
                    <div className="relative">
                      <select className="w-full bg-[var(--color-slate-900)] border border-[var(--color-slate-700)] text-white text-sm rounded-md focus:border-[var(--color-brand-neon)] focus:ring-1 focus:ring-[var(--color-brand-neon)] outline-none py-2 px-3 appearance-none cursor-pointer">
                        <option>Aluminium Alloy 6061</option>
                        <option>Steel Carbon grade</option>
                        <option>Titanium Grade 5</option>
                        <option>FR4 PCB</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-[var(--color-slate-400)] pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--color-slate-400)] mb-1.5">Surface Finish</label>
                    <div className="relative">
                      <select className="w-full bg-[var(--color-slate-900)] border border-[var(--color-slate-700)] text-white text-sm rounded-md focus:border-[var(--color-brand-neon)] focus:ring-1 focus:ring-[var(--color-brand-neon)] outline-none py-2 px-3 appearance-none cursor-pointer">
                        <option>Matte / Sandbox</option>
                        <option>Brushed</option>
                        <option>Polished</option>
                        <option>Anodized</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-[var(--color-slate-400)] pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[var(--color-slate-400)] mb-1.5">Expected Defects</label>
                    <div className="relative">
                      <select className="w-full bg-[var(--color-slate-900)] border border-[var(--color-slate-700)] text-white text-sm rounded-md focus:border-[var(--color-brand-neon)] focus:ring-1 focus:ring-[var(--color-brand-neon)] outline-none py-2 px-3 appearance-none cursor-pointer">
                        <option>Scratches, Dents</option>
                        <option>Oxidation</option>
                        <option>Micro-cracks</option>
                        <option>Solder Bridges</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-[var(--color-slate-400)] pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-[var(--color-slate-800)] p-6 rounded-lg border border-[var(--color-slate-700)] shadow-lg">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-[var(--color-brand-neon)]" />
                  Scanner Config
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-slate-300)]">Exposure</span>
                    <span className="text-sm font-mono text-[var(--color-brand-neon)]">1.2ms</span>
                  </div>
                  <input type="range" className="w-full accent-[var(--color-brand-neon)] bg-[var(--color-slate-700)] rounded-lg appearance-none h-1 cursor-pointer" min="0" max="100" defaultValue="40" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-slate-300)]">Gain</span>
                    <span className="text-sm font-mono text-[var(--color-brand-neon)]">2.4dB</span>
                  </div>
                  <input type="range" className="w-full accent-[var(--color-brand-neon)] bg-[var(--color-slate-700)] rounded-lg appearance-none h-1 cursor-pointer" min="0" max="100" defaultValue="25" />
                </div>
              </div>
            </div>

            {/* Right Column - Upload Zone */}
            <div className="md:col-span-2">
              <div className="bg-[var(--color-slate-800)] p-6 rounded-lg border border-[var(--color-slate-700)] shadow-lg h-full flex flex-col">
                <h2 className="text-lg font-semibold text-white mb-4">Golden Sample Upload</h2>
                <p className="text-sm text-[var(--color-slate-400)] mb-6">Upload an ideal, defect-free sample to serve as the baseline for the vision model.</p>
                
                <div 
                  className={`flex-1 min-h-[300px] border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all duration-300 relative overflow-hidden ${
                    dragActive ? 'border-[var(--color-brand-neon)] bg-[var(--color-brand-neon)]/5 scale-[1.02]' 
                    : uploadedImage ? 'border-[var(--color-slate-600)] bg-[var(--color-slate-900)]' 
                    : 'border-[var(--color-slate-600)] hover:border-[var(--color-slate-500)] bg-[var(--color-slate-900)] hover:bg-[var(--color-slate-800)]/50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {uploadedImage ? (
                    <div className="absolute inset-0 w-full h-full p-2">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={uploadedImage} alt="Golden sample" className="w-full h-full object-contain rounded-lg shadow-inner" />
                      <div className="absolute top-4 right-4 bg-green-500/20 text-green-400 p-2 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <button 
                        onClick={() => setUploadedImage(null)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[var(--color-slate-800)] border border-[var(--color-slate-600)] text-white px-4 py-2 rounded-md hover:bg-[var(--color-slate-700)] transition-colors text-sm shadow-lg"
                      >
                        Remove Sample
                      </button>
                    </div>
                  ) : (
                    <div className="text-center p-6 cursor-pointer pointer-events-none">
                      <div className="w-16 h-16 bg-[var(--color-slate-800)] rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--color-slate-700)] shadow-lg group-hover:scale-110 transition-transform">
                        <UploadCloud className={`w-8 h-8 ${dragActive ? 'text-[var(--color-brand-neon)]' : 'text-[var(--color-slate-400)]'}`} />
                      </div>
                      <p className="text-white font-medium mb-1">Drag and drop your scanned image</p>
                      <p className="text-xs text-[var(--color-slate-400)] mb-4">Supports high-res TIFF, PNG, or standard JPEG</p>
                      
                      <label className="cursor-pointer inline-block bg-[var(--color-slate-800)] hover:bg-[var(--color-slate-700)] border border-[var(--color-slate-600)] text-white text-sm px-4 py-2 rounded-md transition-colors pointer-events-auto">
                        Browse Files
                        <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setUploadedImage(URL.createObjectURL(e.target.files[0]));
                          }
                        }} />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
