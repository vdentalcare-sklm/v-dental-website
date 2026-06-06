"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function VideoLibrary() {
  const featuredVideo = {
    id: "GOupmSjkaBM",
    title: "V Dental Hospitals - Advanced Dental Care in Vizag, Vizianagaram & Srikakulam",
    thumbnail: "https://img.youtube.com/vi/GOupmSjkaBM/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=GOupmSjkaBM"
  };

  const videos = [
    {
      id: "zJg_f4pI0p0",
      title: "Best Dental Hospital in Visakhapatnam | V Dental Hospitals",
      duration: "1:02",
      thumbnail: "https://img.youtube.com/vi/zJg_f4pI0p0/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=zJg_f4pI0p0"
    },
    {
      id: "0h7-z6V9wD8",
      title: "Patient Review on Dental Implants at V Dental",
      duration: "0:45",
      thumbnail: "https://img.youtube.com/vi/0h7-z6V9wD8/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=0h7-z6V9wD8"
    },
    {
      id: "F7i3w_uV_2U",
      title: "Painless Root Canal Treatment | Expert Dentists",
      duration: "1:15",
      thumbnail: "https://img.youtube.com/vi/F7i3w_uV_2U/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=F7i3w_uV_2U"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background text-white overflow-hidden border-t border-white/5 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaYoutube className="w-5 h-5 text-red-500" />
              <h3 className="text-brand-400 font-medium tracking-[0.2em] text-sm uppercase">
                Video Library & Insights
              </h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Watch & Learn
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Discover expert insights, treatment overviews, and inspiring patient stories from the V Dental specialists.
            </p>
          </motion.div>
        </div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <a href={featuredVideo.link} target="_blank" rel="noopener noreferrer" className="block w-full aspect-video glass rounded-3xl overflow-hidden relative group cursor-pointer border border-white/10 hover:border-brand-500/40 transition-colors shadow-2xl">
            {/* Using YouTube Thumbnail */}
            <Image 
              src={featuredVideo.thumbnail} 
              alt={featuredVideo.title} 
              fill 
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-600/80 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-500 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(14,111,165,0.6)]">
                 <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <span className="bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">Featured</span>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white">{featuredVideo.title}</h3>
            </div>
          </a>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                <div className="w-full aspect-video rounded-2xl overflow-hidden relative mb-4 glass border border-white/5 group-hover:border-brand-500/30 transition-colors">
                  <Image 
                    src={video.thumbnail} 
                    alt={video.title} 
                    fill 
                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-brand-600/90 group-hover:border-brand-500 transition-all duration-300">
                       <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-medium text-white backdrop-blur-md">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-lg font-medium text-white group-hover:text-brand-300 transition-colors line-clamp-2">
                  {video.title}
                </h4>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <a 
            href="https://www.youtube.com/@vdentalhospitals/featured" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(14,111,165,0.4)] hover:shadow-[0_0_30px_rgba(14,111,165,0.6)] hover:-translate-y-1"
          >
            <FaYoutube className="w-5 h-5" />
            <span>Visit Our YouTube Channel</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
