import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, DM_Sans, Caveat } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-display' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-script' });

export const metadata: Metadata = {
  title: 'Katie Kelly | FinTech Operations Leader',
  description:
    'Katie Kelly is a FinTech operations leader specializing in scaling growth-stage platforms through team building and operational excellence.',
  metadataBase: new URL('https://www.katiekelly.com'),
  openGraph: {
    title: 'Katie Kelly | FinTech Operations Leader',
    description:
      'Scaling growth-stage FinTech platforms with a focus on client delivery, operational efficiency, and team building.',
    url: 'https://www.katiekelly.com',
    siteName: 'Katie Kelly',
    locale: 'en_US',
    type: 'website',
  },
  keywords: ['FinTech', 'Operations', 'Leadership', 'Katie Kelly', 'Client Delivery', 'Platform Scaling'],
  twitter: {
    card: 'summary_large_image',
    title: 'Katie Kelly | FinTech Operations Leader',
    description:
      'Scaling growth-stage FinTech platforms with a focus on client delivery, operational efficiency, and team building.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${caveat.variable}`}>
      <body className="min-h-screen bg-charcoal font-sans text-white">
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
