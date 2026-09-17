import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'All In Remodeling | Inland Empire Kitchen, Bath & Outdoor Contractors',
  description: 'Owner-supervised kitchen remodeling, luxury bathroom conversions, custom pergolas, and whole-home renovations in Rialto, Rancho Cucamonga, Redlands, and Inland Empire.',
  icons: {
    icon: '/assets/all-in-remodeling/brand/favicon.ico',
  },
  openGraph: {
    title: 'All In Remodeling | Don’t Just Picture The Remodel. See What We’ve Built.',
    description: 'Rialto & Inland Empire remodeling planned clearly and built with owner-level attention by Abraham Amouri.',
    images: ['/assets/all-in-remodeling/hero/hero-kitchen-luxury.jpg'],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0e17] text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
