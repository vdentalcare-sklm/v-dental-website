"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Link from "next/link";
import Image from "next/image";

export default function SchemesHero() {
  return (
    <section 
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EAF5FB 0%, #F1F8F2 50%, #F8FCFF 100%)"
      }}
    >
      <AnimatedBackground theme="light" count={20} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center gap-10 max-w-4xl mx-auto text-center">
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.04)] mb-8 border border-white"
            >
              <span className="text-[#083D5B] text-sm font-medium tracking-wide">✨ Affordable Dental Care & Healthcare Benefits</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#083D5B] mb-8 leading-[1.15]">
              Smile Now, <br className="hidden lg:block" />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B5D8C] to-[#5A9A43]">Pay Comfortably</span>
            </h1>

            <p className="text-xl text-[#1E293B] leading-relaxed mb-10 max-w-2xl mx-auto">
              Quality dental care should be accessible to everyone. Explore our flexible payment solutions and healthcare support programs designed to make advanced dental treatments more affordable and stress-free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/appointment" 
                className="px-8 py-4 bg-[#0B5D8C] text-white rounded-full font-medium transition-all hover:bg-[#5A9A43] shadow-lg shadow-[#0B5D8C]/20 hover:-translate-y-0.5 text-center"
              >
                Book Consultation
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-[#0B5D8C] border border-[#0B5D8C]/20 rounded-full font-medium transition-all hover:border-[#5A9A43] hover:text-[#5A9A43] shadow-sm hover:-translate-y-0.5 text-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
