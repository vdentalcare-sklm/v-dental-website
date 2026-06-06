"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function JourneyOfExcellence() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const milestones = [
    {
      title: "Foundation of V Dental",
      description: "Beginning a vision to provide world-class dental care."
    },
    {
      title: "Advanced Technology Adoption",
      description: "Investing in modern dental equipment and precision diagnostics."
    },
    {
      title: "Expansion of Specialized Services",
      description: "Bringing multiple dental specialties under one roof."
    },
    {
      title: "Thousands of Smiles Restored",
      description: "Helping patients regain confidence through quality care."
    },
    {
      title: "Trusted Name in Dentistry",
      description: "Building long-lasting relationships through ethical and patient-focused treatment."
    },
    {
      title: "Continuing the Legacy",
      description: "Constantly evolving to deliver the future of modern dentistry."
    }
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-surface text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4">
            Our Journey of <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Excellence</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            A commitment to innovation, expertise, and exceptional patient care that continues to grow with every smile we transform.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line base */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* Animated vertical line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-500 via-brand-400 to-brand-500 origin-top shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {milestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty space for desktop alignment */}
                  <div className="hidden md:block md:w-1/2" />
                  
                  {/* Node */}
                  <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-surface border-2 border-brand-500 shadow-[0_0_10px_rgba(139,92,246,0.6)] z-20" />
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-brand-500/30 transition-all duration-300">
                      <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
