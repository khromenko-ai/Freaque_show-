import { motion } from 'motion/react';
import { useI18n } from '../i18n';

export function TicketsSection() {
  const { t } = useI18n();
  return (
    <section className="relative py-32 px-6 md:px-12 flex items-center justify-center bg-[#050505] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#ff00ff] blur-[200px] opacity-10 pointer-events-none rounded-full" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col items-center text-center"
        >
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
            {t('tickets', 'title')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#ff00ff] to-[#ff4e00]">{t('tickets', 'titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('tickets', 'standard_desc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            <button className="px-10 py-4 border-2 border-[#ff4e00] bg-[#ff4e00]/10 text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#ff4e00] hover:text-white transition-all shadow-[0_0_20px_rgba(255,78,0,0.3)] min-w-[200px]">
              {t('tickets', 'buy')}
            </button>
            <button className="px-10 py-4 border-2 border-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all min-w-[200px]">
              {t('tickets', 'benefits')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
