"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

export default function SchemesCTA() {
  return (
    <section className="py-24 bg-[#083D5B] relative overflow-hidden text-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-[#0B5D8C] rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[120%] bg-[#5AA647] rounded-full blur-[100px] opacity-30 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            Let's Make Your Smile <br/>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A3D9A5] to-white">More Accessible</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
            Whether you're looking for flexible payment options or healthcare scheme support, our team is here to help you receive the care you deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/appointment" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5AA647] hover:bg-[#4a8f3a] text-white rounded-full font-medium transition-all shadow-lg hover:-translate-y-1"
            >
              <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book Consultation
            </Link>
            
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white rounded-full font-medium transition-all hover:bg-white/5 hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
