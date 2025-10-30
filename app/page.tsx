import type { Metadata } from 'next';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { FindMe } from './components/FindMe';

export const metadata: Metadata = {
  title: 'Katie Kelly | Scaling Growth-Stage FinTech Platforms',
  description: "Discover Katie Kelly's portfolio, experience, and insights on fintech operations leadership.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <FindMe />
    </>
  );
}
