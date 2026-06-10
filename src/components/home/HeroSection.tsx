"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, ArrowDown } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function HeroSection() {
  const treatments = [
    { name: "Dental Implants", link: "/treatments/dental-implants" },
    { name: "Braces & Aligners", link: "/treatments/orthodontics" },
    { name: "Smile Makeovers", link: "/treatments/cosmetic" },
    { name: "Root Canal", link: "/treatments/endodontics" },
    { name: "Wisdom Teeth", link: "/treatments/oral-surgery" },
    { name: "Laser Dental Treatments", link: "/treatments/laser" },
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-[#EAF5FB] via-white to-[#F1F8F2]">
      <AnimatedBackground theme="light" count={20} />
      
      {/* Gentle curved background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[120%] bg-[#0B5D8C]/[0.02] rounded-l-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B5D8C]/10 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5A9A43] animate-pulse" />
              <span className="text-[#0B5D8C] text-sm font-semibold tracking-wide uppercase">Premium Dental Hospital</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-[1.1] mb-6 text-[#083D5B]">
              Advanced Dentistry.<br />
              <span className="font-medium text-[#0B5D8C]">Personalized Care.</span>
            </h1>

            <p className="text-xl text-[#475569] mb-8 max-w-xl leading-relaxed">
              Experience world-class dental care in a state-of-the-art facility. We combine precision technology with genuine compassion to create confident smiles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link 
                href="/appointment" 
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B5D8C] text-white rounded-full font-semibold text-lg overflow-hidden transition-all hover:bg-[#084A70] shadow-md hover:shadow-xl"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 pt-6 border-t border-[#0B5D8C]/10 text-sm font-medium text-[#1E293B]">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span>11000+ Happy Smiles</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <span>17+ Years Experience</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <div className="flex items-center gap-2 text-[#5A9A43]">
                <span>Srikakulam • Vizianagaram • Vizag</span>
              </div>
            </div>

            {/* Treatment Quick Preview */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#64748B] mb-3 uppercase tracking-wider">Specialized Treatments</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {treatments.map((t, i) => (
                  <Link 
                    key={i} 
                    href={t.link}
                    className="px-4 py-2 rounded-full bg-white border border-[#E2E8F0] text-[#0F172A] text-sm font-medium transition-all shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#0B5D8C] hover:text-[#0B5D8C] hover:bg-[#F8FAFC]"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Imagery & Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[650px] w-full flex items-center justify-center mt-10 lg:mt-0"
          >
            {/* Main Image */}
            <div className="relative w-full max-w-[550px] aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <Image
                src="/images/clinic_hero.png"
                alt="State of the art dental clinic at V Dental Care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Subtle inner shadow overlay */}
              <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none" />
            </div>

            {/* Floating Credibility Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-12 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-20 max-w-[240px]"
            >
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="font-semibold text-[#083D5B] leading-tight mb-1">Trusted by Thousands</p>
              <p className="text-xs text-[#64748B]">Book a consultation within minutes.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Encouragement */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748B] hover:text-[#0B5D8C] transition-colors cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Discover Our Care</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
