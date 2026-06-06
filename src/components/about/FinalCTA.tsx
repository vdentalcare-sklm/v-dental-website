"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-surface text-white overflow-hidden">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070A] to-[#0E0E14]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[30rem] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Your Journey to a <br className="hidden md:block" />
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">
              Healthier, More Confident Smile
            </span> Starts Here
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-12 leading-relaxed">
            Experience modern dentistry delivered with expertise, technology, and genuine care.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact" 
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
