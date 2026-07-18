/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Hero } from './components/Hero';
import { ActSection } from './components/ActSection';
import { TimelineSection } from './components/TimelineSection';
import { MapSection } from './components/MapSection';
import { ReviewsSection } from './components/ReviewsSection';
import { TicketsSection } from './components/TicketsSection';
import { useI18n } from './i18n';

// Imports of generated images
import act1Image from './assets/images/mex_high_freq_1784344254793.jpg';
import act2Image from './assets/images/mex_mid_freq_1784344264339.jpg';
import act3Image from './assets/images/mex_low_freq_1784344273360.jpg';
import heroLogoIsolated from './assets/images/freaque_logo_isolated_1784344244779.jpg';

// Old images for slider
import starsImage from './assets/images/high_freq_strobe_1784343187532.jpg';
import forestImage from './assets/images/mid_freq_choreography_1784343198330.jpg';
import moonImage from './assets/images/low_freq_ice_1784343208144.jpg';

export default function App() {
  const { t } = useI18n();

  return (
    <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#ff4e00]/50 selection:text-white">
      <Hero />
      
      <ActSection 
        actNumber={t('acts', 'act1_num')}
        title={t('acts', 'act1_title')}
        description={t('acts', 'act1_desc')}
        imageSrcs={[act1Image, starsImage]}
        colorHex="#ff00ff"
      />

      <ActSection 
        actNumber={t('acts', 'act2_num')}
        title={t('acts', 'act2_title')}
        description={t('acts', 'act2_desc')}
        imageSrcs={[act2Image, forestImage]}
        reverse
        colorHex="#00f2ff"
      />

      <ActSection 
        actNumber={t('acts', 'act3_num')}
        title={t('acts', 'act3_title')}
        description={t('acts', 'act3_desc')}
        imageSrcs={[act3Image, moonImage]}
        colorHex="#ff4e00"
      />

      <TimelineSection />
      
      <MapSection />
      
      <ReviewsSection />

      <TicketsSection />

      <footer className="relative z-10 px-6 md:px-12 py-16 flex flex-col items-center justify-center bg-[#050505] border-t border-white/10 text-center gap-12">
        <div className="w-48 md:w-64 relative mix-blend-screen">
          <img src={heroLogoIsolated} alt="FREAQUE Neon" className="w-full h-auto object-contain neon-overlay-flicker" style={{ mixBlendMode: 'screen', filter: 'contrast(1.5)' }} />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{t('footer', 'org_label')}</span>
            <span className="text-sm font-bold uppercase tracking-widest">FREAQUE STUDIO</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">{t('footer', 'dates_label')}</span>
            <span className="text-sm font-bold uppercase tracking-widest">{t('footer', 'dates_val')}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mt-4">
          <div className="w-12 h-[1px] bg-white/20 hidden md:block"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 text-center">{t('footer', 'cta')}</span>
          <div className="w-12 h-[1px] bg-white/20 hidden md:block"></div>
        </div>
      </footer>
    </main>
  );
}
