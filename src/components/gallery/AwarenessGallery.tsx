"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

type GalleryImage = {
  id: number;
  image_url: string;
  alt_text: string;
};

const FALLBACK_IMAGES: GalleryImage[] = [
  { id: 1,  image_url: "/images/education/flyer-1.png",  alt_text: "Good Oral Health" },
  { id: 2,  image_url: "/images/education/flyer-2.png",  alt_text: "World Environment Day" },
  { id: 3,  image_url: "/images/education/flyer-3.png",  alt_text: "World Bicycle Day" },
  { id: 4,  image_url: "/images/education/flyer-4.jpg",  alt_text: "Your Teeth Need Discipline" },
  { id: 5,  image_url: "/images/education/flyer-5.png",  alt_text: "World No Tobacco Day" },
  { id: 6,  image_url: "/images/education/flyer-6.jpg",  alt_text: "Teeth Whitening" },
  { id: 7,  image_url: "/images/education/flyer-7.png",  alt_text: "Dental Implants" },
  { id: 8,  image_url: "/images/education/flyer-8.png",  alt_text: "Keep Your Teeth Healthy" },
  { id: 9,  image_url: "/images/education/flyer-9.png",  alt_text: "Looking for Aligners?" },
  { id: 10, image_url: "/images/education/flyer-10.png", alt_text: "Dentalcare Experience" },
];

export default function AwarenessGallery() {
  const [images, setImages]               = useState<GalleryImage[]>(FALLBACK_IMAGES);
  const [loading, setLoading]             = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/public/gallery`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (data.success && Array.isArray(data.images) && data.images.length > 0) {
          setImages(data.images);
        }
        // If API returns empty, fallback images stay as-is
      } catch {
        console.warn("Could not fetch gallery images, using fallback.");
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  const openLightbox  = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedIndex]);

  return (
    <section className="py-24 md:py-32 bg-[#F2FBF7] text-text-primary overflow-hidden border-t border-[#E5E7EB]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-[#005C96] font-medium tracking-[0.2em] text-sm uppercase mb-4">
              Dental Awareness & Patient Education
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Empowering Smiles Through Knowledge
            </h2>
            <p className="text-lg text-text-primary/70 leading-relaxed">
              Explore educational insights, oral health awareness tips, and patient-focused
              information curated by V Dental.
            </p>
          </motion.div>
        </div>

        {/* Masonry Grid — skeleton while loading */}
        {loading ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="break-inside-avoid w-full rounded-2xl bg-[#005C96]/5 animate-pulse"
                style={{ height: i % 2 === 0 ? "320px" : "260px" }}
              />
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((image, idx) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 9) * 0.1 }}
                className="break-inside-avoid relative group cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative w-full rounded-2xl overflow-hidden border border-[#E5E7EB] group-hover:border-brand-500/30 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2">
                  <Image
                    src={image.image_url}
                    alt={image.alt_text}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#005C96]/90 p-4 rounded-full transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors z-[60]"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors z-[60] hidden md:block"
              onClick={showPrev}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-colors z-[60] hidden md:block"
              onClick={showNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex].image_url}
                alt={images[selectedIndex].alt_text}
                width={1200}
                height={900}
                className="object-contain max-h-[85vh] w-auto drop-shadow-2xl rounded-xl"
                sizes="100vw"
                priority
              />
              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-1.5 rounded-full backdrop-blur-sm">
                {selectedIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}