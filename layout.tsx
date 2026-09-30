import './globals.css';
export const metadata = { title: 'Cinematic Web-Conversion Engine' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
