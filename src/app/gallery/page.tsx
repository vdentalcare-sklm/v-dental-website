"use client";

import { motion } from "framer-motion";
import MeetTheTeam from "@/components/gallery/MeetTheTeam";
import AwarenessGallery from "@/components/gallery/AwarenessGallery";
import VideoLibrary from "@/components/gallery/VideoLibrary";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-0 bg-[#F2FBF7] relative overflow-hidden">
      <AnimatedBackground count={45} />
      {/* 1. Gallery Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-0 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-white">
            <span className="text-[#083D5B] text-sm font-medium tracking-wide">📸 Our Gallery</span>
          </div>
        </motion.div>
      </section>

      {/* 2. Meet The Team */}
      <MeetTheTeam />

      {/* 3. Dental Awareness & Patient Education */}
      <AwarenessGallery />

      {/* 4. Video Library & Dental Insights */}
      <VideoLibrary />
    </div>
  );
}
