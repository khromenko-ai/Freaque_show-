import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useI18n } from '../i18n';

export function ReviewsSection() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      quote: t('reviews', 'rev1_quote'),
      name: "ALEX_NEO",
      color: "#ff00ff"
    },
    {
      id: 2,
      quote: t('reviews', 'rev2_quote'),
      name: "RHYTHM_MUSE",
      color: "#00f2ff"
    },
    {
      id: 3,
      quote: t('reviews', 'rev3_quote'),
      name: "VOID_WALKER",
      color: "#ff4e00"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            {t('reviews', 'title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#ff4e00]">{t('reviews', 'titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="relative h-[400px] flex items-center justify-center">
          {reviews.map((review, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  scale: isActive ? 1 : 0.8,
                  y: isActive ? 0 : 20,
                  zIndex: isActive ? 10 : 0
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`absolute inset-0 max-w-3xl mx-auto flex flex-col items-center justify-center text-center p-8 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                {/* Abstract graphic representing emotion */}
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-50 animate-pulse" style={{ backgroundColor: review.color }} />
                  <div className="absolute inset-2 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
                  <div className="absolute inset-4 border border-white/50 rounded-full animate-ping" style={{ animationDuration: '3s', borderColor: review.color }} />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-light italic mb-8 leading-relaxed">
                  "{review.quote}"
                </h3>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-1" style={{ backgroundColor: review.color }} />
                  <span className="text-sm font-bold uppercase tracking-widest text-white/80">{review.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-4 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-1 transition-all duration-300 ${index === activeIndex ? 'bg-white' : 'bg-white/20 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
