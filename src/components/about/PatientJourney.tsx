"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PatientJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const steps = [
    { num: "01", title: "Consultation" },
    { num: "02", title: "Diagnosis & Digital Evaluation" },
    { num: "03", title: "Personalized Treatment Planning" },
    { num: "04", title: "Treatment Execution" },
    { num: "05", title: "Smile Transformation" },
    { num: "06", title: "Long-Term Care & Follow-Up" },
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-surface text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Your Journey to a <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Confident Smile</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line for mobile, Horizontal for desktop */}
          <div className="absolute left-6 md:left-0 top-0 bottom-0 md:top-12 md:bottom-auto w-[2px] md:w-full md:h-[2px] bg-white/10" />
          
          <motion.div 
            className="absolute left-6 md:left-0 top-0 bottom-0 md:top-12 md:bottom-auto w-[2px] md:w-full md:h-[2px] bg-gradient-to-b md:bg-gradient-to-r from-brand-300 to-brand-600 origin-top md:origin-left"
            style={{ 
              scaleY: typeof window !== 'undefined' && window.innerWidth < 768 ? scrollYProgress : 1,
              scaleX: typeof window !== 'undefined' && window.innerWidth >= 768 ? scrollYProgress : 1,
            }}
          />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex md:flex-col items-center md:text-center gap-6 md:gap-8 w-full md:w-auto relative"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-surface border-2 border-brand-500/50 flex items-center justify-center text-brand-400 font-medium text-lg md:text-xl relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {step.num}
                </div>
                
                <div className="md:w-32">
                  <h3 className="text-lg md:text-base font-medium text-gray-200 leading-tight">
                    {step.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
