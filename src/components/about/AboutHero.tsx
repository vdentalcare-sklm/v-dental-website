"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section 
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #EAF5FB 0%, #F1F8F2 50%, #F8FCFF 100%)"
      }}
    >
      <AnimatedBackground theme="light" count={25} />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Cards */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:flex absolute top-[10%] left-[2%] lg:left-[5%] bg-white px-5 py-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] items-center gap-3 border border-white/80 z-20"
        >
          <span className="text-xl">⭐</span>
          <span className="text-sm font-semibold text-[#083D5B]">5000+ Happy Smiles</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden lg:flex absolute top-[40%] right-[1%] lg:right-[3%] bg-white px-5 py-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] items-center gap-3 border border-white/80 z-20"
        >
          <span className="text-xl">🏥</span>
          <span className="text-sm font-semibold text-[#083D5B]">Advanced Dental Technology</span>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hidden md:flex absolute bottom-[15%] left-[2%] lg:left-[5%] bg-white px-5 py-3 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] items-center gap-3 border border-white/80 z-20"
        >
          <span className="text-xl">🦷</span>
          <span className="text-sm font-semibold text-[#083D5B]">Multi-Speciality Care</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.04)] mb-8 border border-white"
        >
          <span className="text-[#083D5B] text-sm font-medium tracking-wide">✨ About V Dental Care</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-light text-[#083D5B] mb-8 leading-[1.15] max-w-4xl"
        >
          Your Journey to a <br className="hidden md:block" />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B5D8C] to-[#5A9A43]">Healthier</span>, More <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0B5D8C] to-[#5A9A43]">Confident Smile</span>
        </motion.h1>

        {/* Description Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[rgba(255,255,255,0.7)] backdrop-blur-[10px] rounded-[24px] p-6 md:p-8 max-w-2xl mx-auto shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white mb-10"
        >
          <p className="text-lg md:text-xl text-[#1E293B] leading-relaxed">
            V Dental is a premier private dental hospital committed to delivering excellence through highly specialized doctors, state-of-the-art facilities, and a relentless focus on patient comfort.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link 
            href="/appointment" 
            className="px-8 py-4 bg-[#0B5D8C] text-white rounded-full font-medium transition-all hover:bg-[#5A9A43] hover:-translate-y-0.5 shadow-lg shadow-[#0B5D8C]/20"
          >
            Book Consultation
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white text-[#0B5D8C] border border-[#0B5D8C]/20 rounded-full font-medium transition-all hover:border-[#5A9A43] hover:text-[#5A9A43] shadow-sm hover:-translate-y-0.5"
          >
            Find a Clinic
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
