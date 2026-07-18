import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ActSectionProps {
  actNumber: string;
  title: string;
  description: string;
  imageSrcs: string[];
  reverse?: boolean;
  colorHex?: string;
}

export function ActSection({ actNumber, title, description, imageSrcs, reverse = false, colorHex = "#00f2ff" }: ActSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % imageSrcs.length);
  };

  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + imageSrcs.length) % imageSrcs.length);
  };

  useEffect(() => {
    if (imageSrcs.length <= 1) return;
    const timer = setInterval(() => {
      nextImage();
    }, 4000);
    return () => clearInterval(timer);
  }, [imageSrcs.length]);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      nextImage();
    } else if (info.offset.x > 50) {
      prevImage();
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen py-24 px-6 md:px-12 flex items-center bg-[#050505] overflow-hidden">
      {/* Background glow matching the act color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ backgroundColor: colorHex }}
      />

      <div className={`max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Text Content */}
        <div className={`flex flex-col justify-center ${reverse ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 
              className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4"
              style={{ color: colorHex }}
            >
              {actNumber}
            </h3>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6">
              {title}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
              {description}
            </p>
            <div 
              className="w-16 h-1 transition-all duration-500" 
              style={{ backgroundColor: colorHex }}
            />
          </motion.div>
        </div>

        {/* Image / Visual */}
        <div className={`relative h-[50vh] lg:h-[70vh] w-full rounded-2xl border border-white/10 p-2 overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] group ${reverse ? 'lg:order-1' : ''}`}>
          <div 
            className="absolute inset-0 blur-2xl opacity-20 transition-opacity duration-700 group-hover:opacity-40"
            style={{ backgroundColor: colorHex }}
          />
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#050505]">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentImageIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ y: imageY }}
                src={imageSrcs[currentImageIdx]}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover scale-[1.2] cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
              />
            </AnimatePresence>
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />
            
            {imageSrcs.length > 1 && (
              <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                <button onClick={prevImage} className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextImage} className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors backdrop-blur-md">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
