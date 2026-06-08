"use client";

import { motion } from "framer-motion";
import { Star, Shield, Lightbulb, Heart } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Excellence",
      description: "Delivering the highest standards of dental care.",
      icon: Star,
    },
    {
      title: "Integrity",
      description: "Ethical and transparent treatment recommendations.",
      icon: Shield,
    },
    {
      title: "Innovation",
      description: "Using advanced technology to improve outcomes.",
      icon: Lightbulb,
    },
    {
      title: "Compassion",
      description: "Treating every patient with genuine care and respect.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#083D5B] text-white overflow-hidden relative">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#91C6E6]/5 rounded-full hidden pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h3 className="text-[#91C6E6] font-medium tracking-[0.2em] text-sm uppercase mb-4">
            Our Core Values
          </h3>
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            The Foundation of <span className="font-semibold text-[#91C6E6]">V Dental</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#91C6E6]/30 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#91C6E6]/0 to-[#91C6E6]/0 group-hover:from-[#91C6E6]/5 group-hover:to-transparent transition-all duration-500 rounded-3xl pointer-events-none" />
              
              <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/60 mb-6 group-hover:scale-110 group-hover:text-[#91C6E6] group-hover:border-[#91C6E6]/30 group-hover:bg-[#91C6E6]/10 transition-all duration-300">
                <val.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3">
                {val.title}
              </h3>
              <p className="text-[#C2E1F2] font-light leading-relaxed transition-colors">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
