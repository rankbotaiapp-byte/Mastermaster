'use client';
import { useState } from 'react';
import Controls from '@/components/dashboard/Controls';
import PreviewStage from '@/components/dashboard/PreviewStage';
import ExportModal from '@/components/dashboard/ExportModal';
import { HeroConfig } from '@/lib/types';
export default function Dashboard() {
  const [cfg, setCfg] = useState<HeroConfig>({ userId: 'usr_demo', brand: 'Summit Realty', niche: 'Luxury Real Estate', grade: 'golden', speed: 1, particles: 24 });
  const [open, setOpen] = useState(false);
  return (
    <main className="mx-auto max-w-7xl p-4 lg:p-8">
      <header className="mb-6 flex items-center justify-between"><h1 className="text-xl font-semibold">Cinematic Web-Conversion Engine</h1><button onClick={() => setOpen(true)} className="rounded-lg bg-white px-4 py-2 font-semibold text-black">Export embed</button></header>
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"><Controls cfg={cfg} set={(p) => setCfg((c) => ({ ...c, ...p }))} /></aside>
        <PreviewStage cfg={cfg} />
      </div>
      {open && <ExportModal cfg={cfg} onClose={() => setOpen(false)} />}
    </main>
  );
}
