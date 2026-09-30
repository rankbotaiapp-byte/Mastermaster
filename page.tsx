import HeroWidget from '@/components/HeroWidget';
import { HeroConfig, Grade } from '@/lib/types';
type SP = Record<string, string | undefined>;
export default async function Widget({ searchParams }: { searchParams: Promise<SP> }) {
  const q = await searchParams;
  const cfg: HeroConfig = { userId: q.userId ?? 'demo', brand: q.brand ?? 'Your Brand', niche: q.niche ?? 'Luxury Real Estate', grade: (q.grade as Grade) ?? 'golden', speed: Number(q.speed) || 1, particles: Math.min(Number(q.particles) || 24, 80) };
  return <div className="h-screen"><HeroWidget cfg={cfg} utm={{ city: q.city, service: q.service }} /></div>;
}
