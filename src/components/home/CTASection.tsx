"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden glass p-12 md:p-24 text-center"
        >
          {/* Abstract background inside CTA */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 to-background z-0" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/20 rounded-full blur-[100px] z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/20 rounded-full blur-[100px] z-0" />
          
          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-brand-500/20 rounded-2xl flex items-center justify-center mb-8">
              <Calendar className="w-8 h-8 text-brand-400" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-6 leading-tight">
              Ready to redefine your smile?
            </h2>
            
            <p className="text-xl text-foreground/80 mb-12">
              Book a private consultation with our specialists to explore how we can elevate your natural beauty.
            </p>
            
            <Link
              href="/appointment"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-background rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-brand-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
