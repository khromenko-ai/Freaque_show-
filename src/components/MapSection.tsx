import { motion, AnimatePresence } from 'motion/react';
import { useState, ReactNode, FC } from 'react';
import { useI18n } from '../i18n';

import mapImg1 from '../assets/images/mex_high_freq_1784344254793.jpg';
import mapImg2 from '../assets/images/mex_mid_freq_1784344264339.jpg';
import mapImg3 from '../assets/images/mex_low_freq_1784344273360.jpg';

import charImg1 from '../assets/images/mex_char_high_1784344282419.jpg';
import charImg2 from '../assets/images/mex_char_low_1784344291474.jpg';
import abstractPlan from '../assets/images/abstract_floor_plan_1784346252883.jpg';

interface FloatingNodeProps {
  children: ReactNode;
  x: string;
  y: string;
  onClick: () => void;
}

const FloatingNode: FC<FloatingNodeProps> = ({ children, x, y, onClick }) => {
  const baseX = parseFloat(x);
  const baseY = parseFloat(y);
  
  return (
    <motion.div 
      className="absolute cursor-pointer z-20"
      onClick={onClick}
      animate={{ 
        left: [`${baseX}%`, `${baseX + 6}%`, `${baseX - 4}%`, `${baseX + 2}%`, `${baseX}%`],
        top: [`${baseY}%`, `${baseY - 5}%`, `${baseY + 7}%`, `${baseY - 2}%`, `${baseY}%`]
      }}
      transition={{ duration: 25 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
      style={{ x: '-50%', y: '-50%' }}
    >
      {children}
    </motion.div>
  );
};

export function MapSection() {
  const { t } = useI18n();
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [activeChar, setActiveChar] = useState<string | null>(null);

  const locations = [
    {
      id: "high_freq",
      title: t('map', 'loc1_title'),
      description: t('map', 'loc1_desc'),
      image: mapImg1,
      color: "#ff00ff",
      x: "20%",
      y: "30%"
    },
    {
      id: "mid_freq",
      title: t('map', 'loc2_title'),
      description: t('map', 'loc2_desc'),
      image: mapImg2,
      color: "#00f2ff",
      x: "70%",
      y: "40%"
    },
    {
      id: "low_freq",
      title: t('map', 'loc3_title'),
      description: t('map', 'loc3_desc'),
      image: mapImg3,
      color: "#ff4e00",
      x: "45%",
      y: "75%"
    }
  ];

  const characters = [
    {
      id: "host_high",
      name: t('map', 'char1_name'),
      role: t('map', 'char1_role'),
      bio: t('map', 'char1_bio'),
      image: charImg1,
      x: "35%",
      y: "20%"
    },
    {
      id: "host_low",
      name: t('map', 'char2_name'),
      role: t('map', 'char2_role'),
      bio: t('map', 'char2_bio'),
      image: charImg2,
      x: "80%",
      y: "60%"
    }
  ];

  const selectedLoc = locations.find(l => l.id === activeLocation);
  const selectedChar = characters.find(c => c.id === activeChar);

  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            {t('map', 'title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#00f2ff] to-[#ff4e00]">{t('map', 'titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('map', 'subtitle')}</p>
        </motion.div>

        <div className="relative w-full flex-1 min-h-[60vh] bg-[#111] rounded-2xl border border-white/10 overflow-hidden group">
          {/* Abstract Floor Plan Background */}
          <div className="absolute inset-0 bg-black">
            <img src={abstractPlan} alt="Floor Plan" className="w-full h-full object-cover opacity-30 mix-blend-screen grayscale" />
          </div>
          
          {/* Location Nodes */}
          {locations.map((loc) => (
            <FloatingNode 
              key={loc.id} 
              x={loc.x} 
              y={loc.y} 
              onClick={() => { setActiveLocation(loc.id); setActiveChar(null); }}
            >
              <div className="relative flex flex-col items-center group/node">
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover/node:scale-110" style={{ borderColor: loc.color }}>
                  <div className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: loc.color }} />
                </div>
                <span className="absolute top-full mt-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity" style={{ color: loc.color }}>
                  {loc.title}
                </span>
                {activeLocation === loc.id && (
                  <div className="absolute inset-0 rounded-full animate-ping opacity-50" style={{ backgroundColor: loc.color }} />
                )}
              </div>
            </FloatingNode>
          ))}

          {/* Character Nodes */}
          {characters.map((char) => (
            <FloatingNode 
              key={char.id} 
              x={char.x} 
              y={char.y} 
              onClick={() => { setActiveChar(char.id); setActiveLocation(null); }}
            >
              <div className="relative flex flex-col items-center group/node">
                <div className="w-12 h-12 rounded-sm rotate-45 flex items-center justify-center border-2 border-white/50 bg-black/50 backdrop-blur-sm transition-all duration-300 group-hover/node:scale-110 group-hover/node:border-white">
                  <div className="w-2 h-2 rounded-full bg-white -rotate-45" />
                </div>
                <span className="absolute top-full mt-4 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity text-white/70">
                  {char.name}
                </span>
                {activeChar === char.id && (
                  <div className="absolute inset-0 rounded-sm rotate-45 animate-ping opacity-50 border-2 border-white" />
                )}
              </div>
            </FloatingNode>
          ))}

          {/* Details Overlay (Location or Character) */}
          <AnimatePresence>
            {(activeLocation || activeChar) && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute top-4 right-4 bottom-4 w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-white/10 p-6 flex flex-col z-30"
              >
                <button 
                  onClick={() => { setActiveLocation(null); setActiveChar(null); }}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {selectedLoc && (
                  <>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2" style={{ color: selectedLoc.color }}>{t('map', 'loc_title')}</h3>
                    <h4 className="text-3xl font-black uppercase mb-4">{selectedLoc.title}</h4>
                    <p className="text-gray-400 text-sm mb-6 flex-1">{selectedLoc.description}</p>
                    <div className="w-full h-48 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 z-10" />
                      <img src={selectedLoc.image} alt={selectedLoc.title} className="w-full h-full object-cover scale-105 animate-[pulse_4s_ease-in-out_infinite]" />
                    </div>
                  </>
                )}

                {selectedChar && (
                  <>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2 text-white/50">{t('map', 'char_title')}</h3>
                    <h4 className="text-3xl font-black uppercase mb-1">{selectedChar.name}</h4>
                    <p className="text-[#00f2ff] text-xs font-bold uppercase tracking-widest mb-6">{selectedChar.role}</p>
                    <p className="text-gray-400 text-sm mb-6 flex-1">{selectedChar.bio}</p>
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-white/20">
                      <img src={selectedChar.image} alt={selectedChar.name} className="w-full h-full object-cover" />
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
