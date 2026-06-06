"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-900/30 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--color-background))]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-semibold tracking-tight text-white mb-8 leading-tight max-w-6xl"
        >
          Transforming Smiles Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Expertise, Technology & Care</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-foreground/70 max-w-3xl mb-12 leading-relaxed"
        >
          Experience world-class dental care delivered through advanced technology, skilled specialists, and personalized treatment plans. At V Dental, every smile is cared for with precision, comfort, and compassion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link
            href="/appointment"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-brand-600 text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
          >
            <span className="relative z-10">Design Your Smile</span>
            <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <Link
            href="/treatments"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:border-brand-500/50 hover:bg-white/10 text-white rounded-full font-medium transition-all"
          >
            Explore Treatments
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
