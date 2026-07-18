import { motion } from 'motion/react';
import { useI18n } from '../i18n';
import rhythmImage from '../assets/images/rhythm_moir_fourier_visualization_1784401851056.jpg';

export function PhilosophySection() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center items-center bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff4e00] blur-[150px] opacity-5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Quote Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-12">
              {t('philosophy', 'title')} <span className="text-[#ff4e00] block">{t('philosophy', 'titleHighlight')}</span>
            </h2>
            
            <div className="relative pl-6 md:pl-10 border-l-2 border-[#ff4e00]/50 mb-8">
              <span className="absolute -left-[32px] md:-left-[40px] top-0 text-[#ff4e00]/20 text-6xl md:text-8xl font-serif leading-none">"</span>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-6 italic">
                {t('philosophy', 'quote_p1')}
              </p>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed italic">
                {t('philosophy', 'quote_p2')}
              </p>
            </div>
            
            <div className="pl-6 md:pl-10 mt-8">
              <p className="text-[#ff4e00] font-bold uppercase tracking-widest text-sm md:text-base">
                {t('philosophy', 'author')}
              </p>
              <p className="text-gray-500 font-light text-sm mt-1">
                {t('philosophy', 'book')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="relative w-full h-[50vh] lg:h-[80vh] order-1 lg:order-2 rounded-2xl border border-white/10 p-2 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] group">
          <div className="absolute inset-0 bg-[#00f2ff] blur-2xl opacity-10 transition-opacity duration-700 group-hover:opacity-20" />
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#050505]">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={rhythmImage}
              alt="Rhythm and Moiré Visualization"
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
