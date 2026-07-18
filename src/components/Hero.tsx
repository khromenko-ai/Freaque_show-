import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { useI18n } from '../i18n';
import heroImageBase from '../assets/images/hero_cyberpunk_condesa_1784347004932.jpg';
import heroLogoIsolated from '../assets/images/freaque_logo_isolated_1784344244779.jpg';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const { lang, setLang, t } = useI18n();

  return (
    <section ref={ref} className="relative w-full flex flex-col overflow-hidden bg-[#050505] min-h-screen">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Base dark static image */}
        <img 
          src={heroImageBase} 
          alt="FREAQUE Base" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Dark gradient for text readability at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
        
        {/* Background Atmospheric Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff4e00] rounded-full blur-[150px] opacity-20 z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00f2ff] rounded-full blur-[180px] opacity-20 z-10 pointer-events-none"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-[#ff00ff] rounded-full blur-[120px] opacity-30 z-10 pointer-events-none"></div>
      </motion.div>

      <nav className="absolute top-0 w-full z-30 flex items-center justify-between px-6 md:px-12 py-8">
        <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-white/50 z-50">
          <button onClick={() => setLang('ESP')} className={`transition-colors ${lang === 'ESP' ? 'text-white' : 'hover:text-white'}`}>ESP</button>
          <span className="text-white/20">/</span>
          <button onClick={() => setLang('ENG')} className={`transition-colors ${lang === 'ENG' ? 'text-white' : 'hover:text-white'}`}>ENG</button>
          <span className="text-white/20">/</span>
          <button onClick={() => setLang('РУС')} className={`transition-colors ${lang === 'РУС' ? 'text-white' : 'hover:text-white'}`}>РУС</button>
        </div>
        <button className="px-6 py-2 border-2 border-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all hidden sm:block pointer-events-auto">
          {t('hero', 'tickets')}
        </button>
      </nav>

      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none pt-12 mix-blend-screen">
        <img 
          src={heroLogoIsolated} 
          alt="FREAQUE Neon" 
          className="w-[60%] md:w-[45%] lg:w-[35%] h-auto neon-overlay-flicker mb-8" 
          style={{ mixBlendMode: 'screen', filter: 'contrast(1.5)' }}
        />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none pt-12">
        {/* Invisible spacer for logo */}
        <div className="w-[60%] md:w-[45%] lg:w-[35%] h-auto mb-8 invisible">
          <img src={heroLogoIsolated} alt="" className="w-full h-auto" />
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[#ff4e00] font-bold tracking-[0.4em] mb-12 text-sm md:text-sm uppercase drop-shadow-md text-center px-4"
        >
          {t('hero', 'subtitle')}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="px-8 py-4 border-2 border-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all pointer-events-auto bg-black/30 backdrop-blur-sm"
        >
          {t('hero', 'cta')}
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 z-20 flex justify-center w-full"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </motion.div>

      {/* Side Decoration Line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10 hidden lg:flex flex-col items-center justify-center z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] my-4 shadow-[0_0_8px_#00f2ff]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20 my-4"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20 my-4"></div>
      </div>
    </section>
  );
}
