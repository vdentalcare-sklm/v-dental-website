"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award, Smile } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-background overflow-hidden text-white pt-20 pb-16">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about_hero_bg_1780052779011.png"
          alt="Luxury Dental Clinic"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070A]/80 via-[#07070A]/60 to-[#07070A]" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-900/20 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-900/20 border border-brand-500/30 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-brand-300 text-sm font-medium tracking-widest uppercase">
              About V Dental
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            Redefining Modern Dentistry Through <br className="hidden md:block" />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">
              Expertise, Technology & Compassion
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl mb-16">
            At V Dental, we combine advanced dental technology, experienced specialists, and personalized care to create healthy, confident smiles for every patient.
          </p>

          {/* Floating Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
            >
              <Award className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="text-white font-medium text-lg mb-1">15+ Years of Excellence</h3>
              <p className="text-gray-400 text-sm">Trusted by families</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
            >
              <Smile className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="text-white font-medium text-lg mb-1">10,000+ Happy Smiles</h3>
              <p className="text-gray-400 text-sm">Transforming lives daily</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm"
            >
              <ShieldCheck className="w-8 h-8 text-brand-400 mb-4" />
              <h3 className="text-white font-medium text-lg mb-1">Advanced Solutions</h3>
              <p className="text-gray-400 text-sm">Implants & Multi-Speciality</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
