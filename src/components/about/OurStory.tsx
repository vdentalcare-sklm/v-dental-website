"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-full py-24 md:py-32 bg-surface overflow-hidden text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] md:h-[700px] w-full rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay z-10" />
            {/* The actual filename will be injected/corrected if needed, currently using a placeholder pattern */}
            <Image
              src="/images/about_our_story_clinic_1780052795560.png"
              alt="Premium Dental Clinic Interior"
              fill
              className="object-cover transition-transform duration-[2000ms] hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl z-20 pointer-events-none" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-brand-400 font-medium tracking-[0.2em] text-sm uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-brand-400"></span>
                Our Story
              </h3>
              
              <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                Built Around One Mission — <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Better Smiles, Better Lives</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="space-y-6 text-gray-400 text-lg font-light leading-relaxed"
            >
              <p>
                V Dental was established with a vision to bring world-class dental care closer to every patient. By combining modern infrastructure, advanced technology, and highly skilled specialists, we strive to deliver exceptional treatment experiences while maintaining the highest standards of ethics and patient care.
              </p>
              <p>
                Every smile we transform represents our commitment to excellence, trust, and long-term oral health.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
