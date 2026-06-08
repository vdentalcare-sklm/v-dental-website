"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function VideoLibrary() {
  const featuredVideo = {
    id: "zv-JOOeqXO4",
    title: "Best Dental Hospital in Visakhapatnam | V Dental Hospitals",
    thumbnail: "https://img.youtube.com/vi/zv-JOOeqXO4/hqdefault.jpg",
    link: "https://youtu.be/zv-JOOeqXO4?si=tfAmFd5il2IIuLAP"
  };

  const videos = [
    {
      id: "GOupmSjkaBM",
      title: "V Dental Hospitals - Advanced Dental Care in Srikakulam, Vizianagaram & Vizag",
      duration: "1:02",
      thumbnail: "https://img.youtube.com/vi/GOupmSjkaBM/hqdefault.jpg",
      link: "https://youtu.be/GOupmSjkaBM?si=WXJoFgd9VW14eATA"
    },
    {
      id: "7rYOp1lXw_o",
      title: "Patient Review on Dental Implants at V Dental",
      duration: "0:45",
      thumbnail: "https://img.youtube.com/vi/7rYOp1lXw_o/hqdefault.jpg",
      link: "https://youtu.be/7rYOp1lXw_o?si=Vzz19X4kQfMKItL8"
    },
    {
      id: "fHRgBU58UZg",
      title: "Painless Root Canal Treatment | Expert Dentists",
      duration: "1:15",
      thumbnail: "https://img.youtube.com/vi/fHRgBU58UZg/hqdefault.jpg",
      link: "https://youtu.be/fHRgBU58UZg?si=CU5pb-K2a656DhAD"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F2FBF7] text-text-primary overflow-hidden border-t border-[#E5E7EB] relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#005C96]/5 rounded-full hidden pointer-events-none" />

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
              <h3 className="text-[#005C96] font-medium tracking-[0.2em] text-sm uppercase">
                Video Library & Insights
              </h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Watch & Learn
            </h2>
            <p className="text-lg text-text-primary/70 leading-relaxed">
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
          <a href={featuredVideo.link} target="_blank" rel="noopener noreferrer" className="block w-full aspect-video glass rounded-3xl overflow-hidden relative group cursor-pointer border border-[#E5E7EB] hover:border-brand-500/40 transition-colors shadow-2xl">
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
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#005C96]/80 backdrop-blur-md flex items-center justify-center group-hover:bg-[#005C96] group-hover:scale-110 transition-all duration-500 shadow-xl">
                 <Play className="w-8 h-8 md:w-10 md:h-10 text-text-primary ml-2" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
              <span className="bg-[#005C96] text-text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">Featured</span>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-text-primary">{featuredVideo.title}</h3>
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
                <div className="w-full aspect-video rounded-2xl overflow-hidden relative mb-4 glass border border-[#E5E7EB] group-hover:border-brand-500/30 transition-colors">
                  <Image 
                    src={video.thumbnail} 
                    alt={video.title} 
                    fill 
                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-[#005C96]/90 group-hover:border-brand-500 transition-all duration-300">
                       <Play className="w-5 h-5 text-text-primary ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-medium text-text-primary backdrop-blur-md">
                    {video.duration}
                  </div>
                </div>
                <h4 className="text-lg font-medium text-text-primary group-hover:text-[#5AA647] transition-colors line-clamp-2">
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
            className="group flex items-center gap-3 px-8 py-4 bg-[#005C96] hover:bg-[#005C96] text-white rounded-full font-medium transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            <FaYoutube className="w-5 h-5 text-red-500" />
            <span>Visit Our YouTube Channel</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
