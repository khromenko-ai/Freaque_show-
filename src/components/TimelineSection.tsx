import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useI18n } from '../i18n';

import timelineImg1 from '../assets/images/timeline_1_arrival_1784342555267.jpg';
import timelineImg2 from '../assets/images/timeline_2_immersion_1784342565931.jpg';
import timelineImg3 from '../assets/images/timeline_3_climax_1784342575405.jpg';

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const { t } = useI18n();

  const timelineSteps = [
    {
      id: 1,
      title: t('timeline', 'step1_title'),
      description: t('timeline', 'step1_desc'),
      image: timelineImg1,
      color: "#ff00ff",
      phase: t('timeline', 'step1_phase')
    },
    {
      id: 2,
      title: t('timeline', 'step2_title'),
      description: t('timeline', 'step2_desc'),
      image: timelineImg2,
      color: "#00f2ff",
      phase: t('timeline', 'step2_phase')
    },
    {
      id: 3,
      title: t('timeline', 'step3_title'),
      description: t('timeline', 'step3_desc'),
      image: timelineImg3,
      color: "#ff4e00",
      phase: t('timeline', 'step3_phase')
    }
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 bg-[#050505] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            {t('timeline', 'title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00f2ff]">{t('timeline', 'titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t('timeline', 'subtitle')}</p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ff00ff] via-[#00f2ff] to-[#ff4e00] transform origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>

          <div className="space-y-24">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Marker point */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full -translate-x-1/2 z-10 border-4 border-[#050505]"
                    style={{ backgroundColor: step.color }}
                  >
                    <div className="absolute inset-0 rounded-full animate-ping opacity-50" style={{ backgroundColor: step.color }} />
                  </motion.div>

                  {/* Content (alternating sides on desktop) */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-2" style={{ color: step.color }}>
                        {step.phase}
                      </h3>
                      <h4 className="text-3xl md:text-4xl font-black uppercase mb-4">{step.title}</h4>
                      <p className="text-gray-400 mb-8">{step.description}</p>
                      
                      <div className={`w-full h-48 md:h-64 rounded-xl overflow-hidden border border-white/10 group relative`}>
                        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-xl" style={{ backgroundColor: step.color }} />
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 opacity-60"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
