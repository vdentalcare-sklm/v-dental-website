"use client";

import { motion } from "framer-motion";
import { Building2, Stethoscope, MessageSquare, MonitorCheck, HeartPulse } from "lucide-react";

export default function WhatMakesUsDifferent() {
  const features = [
    {
      title: "Dental Specialties Under One Roof",
      description: "Comprehensive care across multiple dental disciplines.",
      icon: Building2,
    },
    {
      title: "World-Class Implant Solutions",
      description: "Advanced implant systems delivered by experienced implantologists.",
      icon: Stethoscope,
    },
    {
      title: "Complimentary Consultations",
      description: "Transparent guidance before beginning treatment.",
      icon: MessageSquare,
    },
    {
      title: "Advanced Infrastructure",
      description: "Modern equipment and technology designed for precise care.",
      icon: MonitorCheck,
    },
    {
      title: "Patient-First Philosophy",
      description: "Every recommendation is made with the patient's long-term well-being in mind.",
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F2FBF7] text-text-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            What Makes Us <span className="font-medium text-[#083D5B]">Different</span>
          </h2>
        </motion.div>

        {/* Horizontal Scroll Area */}
        <div className="flex overflow-x-auto pb-12 -mx-6 px-6 lg:mx-0 lg:px-0 hide-scrollbar gap-6 snap-x snap-mandatory">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/10 group-hover:to-transparent transition-all duration-500 rounded-3xl pointer-events-none" />
              
              <div className="w-16 h-16 rounded-2xl bg-[#005C96]/10 flex items-center justify-center text-[#005C96] mb-8 group-hover:scale-110 group-hover:bg-[#005C96]/20 group-hover:text-[#5AA647] transition-all duration-300">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-medium text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary font-light leading-relaxed group-hover:text-text-secondary transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
