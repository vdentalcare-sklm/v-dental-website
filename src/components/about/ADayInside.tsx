"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ADayInside() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    { 
      num: "01", 
      title: "Arrival & Welcome",
      description: "Patients are greeted in a comfortable, modern environment designed to make them feel at ease."
    },
    { 
      num: "02", 
      title: "Consultation",
      description: "Understanding concerns, goals, and expectations through detailed discussions."
    },
    { 
      num: "03", 
      title: "Diagnosis & Digital Evaluation",
      description: "Comprehensive examination using modern diagnostic technology."
    },
    { 
      num: "04", 
      title: "Personalized Treatment Planning",
      description: "Customized solutions tailored to individual needs and smile goals."
    },
    { 
      num: "05", 
      title: "Treatment Experience",
      description: "Expert care delivered with precision, comfort, and attention to detail."
    },
    { 
      num: "06", 
      title: "Follow-Up & Long-Term Care",
      description: "Continuous support to ensure lasting oral health and confidence."
    },
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4">
            A Day Inside <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">V Dental</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            From your first visit to your final smile transformation, experience a patient journey designed around comfort, precision, and care.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline lines */}
          <div className="absolute left-[39px] md:left-0 top-0 bottom-0 md:top-12 md:bottom-auto w-[2px] md:w-full md:h-[2px] bg-white/10" />
          
          <motion.div 
            className="absolute left-[39px] md:left-0 top-0 bottom-0 md:top-12 md:bottom-auto w-[2px] md:w-full md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-brand-300 to-brand-600 origin-top md:origin-left"
            style={{ 
              scaleY: typeof window !== 'undefined' && window.innerWidth < 768 ? scrollYProgress : 1,
              scaleX: typeof window !== 'undefined' && window.innerWidth >= 768 ? scrollYProgress : 1,
            }}
          />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex md:flex-col md:items-center text-left md:text-center gap-6 w-full md:w-[220px] lg:w-[260px] relative group"
              >
                <div className="w-20 h-20 shrink-0 rounded-full bg-background border-2 border-white/10 group-hover:border-brand-500/50 flex items-center justify-center text-white/50 group-hover:text-brand-400 font-medium text-xl transition-colors duration-300 relative z-10 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {step.num}
                </div>
                
                <div className="flex flex-col gap-2 pt-2 md:pt-4">
                  <h3 className="text-lg font-medium text-gray-200 leading-tight group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
