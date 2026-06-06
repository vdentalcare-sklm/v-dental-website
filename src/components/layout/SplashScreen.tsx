"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("v-dental-splash-seen");
    if (!hasSeenSplash) {
      setShowSplash(true);
      sessionStorage.setItem("v-dental-splash-seen", "true");
      
      // Hide splash after 2.5 seconds to allow animation
      setTimeout(() => {
        setShowSplash(false);
      }, 2500);
    }
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-500/20 rounded-full blur-[80px]"
          />
          
          {/* Logo with layoutId for smooth transition to navbar */}
          <motion.img
            layoutId="brand-logo"
            src="/images/logo-english.png"
            alt="V Dental Logo"
            className="w-[20rem] md:w-[32rem] object-contain z-10 bg-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-sm shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-brand-300 font-light tracking-widest text-xs md:text-sm z-10 uppercase text-center max-w-xs md:max-w-none"
          >
            Multi Speciality Cosmetic & Implant Center
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
