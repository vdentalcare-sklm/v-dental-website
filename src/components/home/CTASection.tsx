"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function CTASection() {
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light mb-8 leading-tight">
            Ready to experience the standard of <br className="hidden md:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B5D8C] to-[#5A9A43]">premium dental care?</span>
          </h2>
          
          <p className="text-xl text-[#475569] mb-12 max-w-2xl leading-relaxed">
            Schedule a private consultation with our specialists and take the first step towards your perfect smile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center px-10 py-5 bg-[#0B5D8C] text-white rounded-full font-semibold text-lg transition-all hover:bg-[#5A9A43] shadow-lg shadow-[#0B5D8C]/20 hover:-translate-y-1"
            >
              Request an Appointment
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-[#0B5D8C]/20 text-[#0B5D8C] rounded-full font-semibold text-lg transition-all hover:border-[#5A9A43] hover:text-[#5A9A43] shadow-sm hover:-translate-y-1"
            >
              Contact Our Clinic
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
