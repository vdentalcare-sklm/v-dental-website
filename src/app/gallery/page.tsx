"use client";

import { motion } from "framer-motion";
import MeetTheTeam from "@/components/gallery/MeetTheTeam";
import AwarenessGallery from "@/components/gallery/AwarenessGallery";
import VideoLibrary from "@/components/gallery/VideoLibrary";

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-0 bg-background">
      {/* 1. Gallery Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6">
            The <span className="text-brand-400">Gallery</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Witness the artistry of our work, explore educational resources, and meet the professionals behind every masterpiece.
          </p>
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
