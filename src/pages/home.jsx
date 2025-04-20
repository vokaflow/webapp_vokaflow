
import React from 'react';
import { Hero } from '@/components/hero';
import { InfoSections } from '@/components/info-sections';
import { CTASection } from '@/components/cta-section';
import { Benefits } from '@/components/benefits';
import { VideoSection } from '@/components/video-section';
import { Features } from '@/components/features';
import { Newsletter } from '@/components/newsletter';
import { ValueProposition } from '@/components/value-proposition';

export function Home() {
  return (
    <main>
      <Hero />
      <InfoSections />
      <CTASection />
      <Benefits />
      <ValueProposition />
      <VideoSection />
      <Features />
      <Newsletter />
    </main>
  );
}
