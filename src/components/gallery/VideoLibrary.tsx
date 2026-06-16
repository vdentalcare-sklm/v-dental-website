"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

type Video = {
  id: number;
  youtube_id: string;
  title: string;
  duration: string | null;
  is_featured: boolean;
  display_order: number;
};

type VideoData = {
  featured: Video | null;
  videos: Video[];
};

const FALLBACK_DATA: VideoData = {
  featured: {
    id: 1,
    youtube_id: "zv-JOOeqXO4",
    title: "Best Dental Hospital in Visakhapatnam | V Dental Hospitals",
    duration: null,
    is_featured: true,
    display_order: 0,
  },
  videos: [
    {
      id: 2,
      youtube_id: "GOupmSjkaBM",
      title: "V Dental Hospitals - Advanced Dental Care in Srikakulam, Vizianagaram & Vizag",
      duration: "1:02",
      is_featured: false,
      display_order: 1,
    },
    {
      id: 3,
      youtube_id: "7rYOp1lXw_o",
      title: "Patient Review on Dental Implants at V Dental",
      duration: "0:45",
      is_featured: false,
      display_order: 2,
    },
    {
      id: 4,
      youtube_id: "fHRgBU58UZg",
      title: "Painless Root Canal Treatment | Expert Dentists",
      duration: "1:15",
      is_featured: false,
      display_order: 3,
    },
  ],
};

function getThumbnail(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

function getYouTubeLink(youtubeId: string) {
  return `https://youtu.be/${youtubeId}`;
}

export default function VideoLibrary() {
  const [data, setData]       = useState<VideoData>(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/public/videos`);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (json.success) {
          // Only override if API actually has content
          const hasFeatured = json.featured !== null;
          const hasVideos   = Array.isArray(json.videos) && json.videos.length > 0;
          if (hasFeatured || hasVideos) {
            setData({
              featured: json.featured ?? FALLBACK_DATA.featured,
              videos:   hasVideos ? json.videos : FALLBACK_DATA.videos,
            });
          }
        }
      } catch {
        console.warn("Could not fetch videos, using fallback.");
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  const { featured, videos } = data;

  return (
    <section className="py-24 md:py-32 bg-[#F2FBF7] text-text-primary overflow-hidden border-t border-[#E5E7EB] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#005C96]/5 rounded-full hidden pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Header */}
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
              Discover expert insights, treatment overviews, and inspiring patient stories
              from the V Dental specialists.
            </p>
          </motion.div>
        </div>

        {loading ? (
          <div className="space-y-8">
            <div className="w-full aspect-video rounded-3xl bg-[#005C96]/5 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-full aspect-video rounded-2xl bg-[#005C96]/5 animate-pulse" />
                  <div className="h-4 w-full rounded bg-[#005C96]/5 animate-pulse" />
                  <div className="h-3 w-2/3 rounded bg-[#005C96]/5 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Featured Video */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <button
                  onClick={() => window.open(getYouTubeLink(featured.youtube_id), "_blank")}
                  className="block w-full aspect-video rounded-3xl overflow-hidden relative group cursor-pointer border border-[#E5E7EB] hover:border-brand-500/40 transition-colors shadow-2xl"
                >
                  <Image
                    src={getThumbnail(featured.youtube_id)}
                    alt={featured.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#005C96]/80 backdrop-blur-md flex items-center justify-center group-hover:bg-[#005C96] group-hover:scale-110 transition-all duration-500 shadow-xl">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-left">
                    <span className="bg-[#005C96] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
                      Featured
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-white">
                      {featured.title}
                    </h3>
                  </div>
                </button>
              </motion.div>
            )}

            {/* Video Grid */}
            {videos.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {videos.map((video, idx) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <button
                      onClick={() => window.open(getYouTubeLink(video.youtube_id), "_blank")}
                      className="group cursor-pointer block w-full text-left"
                    >
                      <div className="w-full aspect-video rounded-2xl overflow-hidden relative mb-4 border border-[#E5E7EB] group-hover:border-brand-500/30 transition-colors">
                        <Image
                          src={getThumbnail(video.youtube_id)}
                          alt={video.title}
                          fill
                          className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-[#005C96]/90 group-hover:border-brand-500 transition-all duration-300">
                            <Play className="w-5 h-5 text-white ml-1" />
                          </div>
                        </div>

                        {video.duration && (
                          <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-medium text-white backdrop-blur-md">
                            {video.duration}
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-medium text-text-primary group-hover:text-[#5AA647] transition-colors line-clamp-2">
                        {video.title}
                      </h4>
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <button
            onClick={() => window.open("https://www.youtube.com/@vdentalhospitals/featured", "_blank")}
            className="group flex items-center gap-3 px-8 py-4 bg-[#005C96] hover:bg-[#004A7A] text-white rounded-full font-medium transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            <FaYoutube className="w-5 h-5 text-red-400" />
            <span>Visit Our YouTube Channel</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}