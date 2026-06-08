"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-transparent text-[#083D5B] relative overflow-hidden">
      <AnimatedBackground theme="light" count={15} />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Your Journey to a <br className="hidden md:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B5D8C] to-[#5A9A43]">
              Healthier, More Confident Smile
            </span> Starts Here
          </h2>
          
          <p className="text-xl text-[#475569] font-light max-w-2xl mb-12 leading-relaxed">
            Experience modern dentistry delivered with expertise, technology, and genuine care.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <Link 
              href="/contact" 
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0B5D8C] text-white rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105 shadow-lg shadow-[#0B5D8C]/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-[#5A9A43] opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Book Consultation</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/contact" 
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-semibold text-lg bg-white border-2 border-[#0B5D8C]/20 text-[#0B5D8C] transition-all hover:border-[#5A9A43] hover:text-[#5A9A43] shadow-sm hover:-translate-y-1"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
