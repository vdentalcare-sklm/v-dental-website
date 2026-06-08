"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function AwarenessGallery() {
  const flyers = [
    { id: 1, src: "/images/education/flyer-1.png", alt: "Good Oral Health", aspect: "aspect-[4/5]" },
    { id: 2, src: "/images/education/flyer-2.png", alt: "World Environment Day", aspect: "aspect-[4/5]" },
    { id: 3, src: "/images/education/flyer-3.png", alt: "World Bicycle Day", aspect: "aspect-[4/5]" },
    { id: 4, src: "/images/education/flyer-4.jpg", alt: "Your Teeth Need Discipline", aspect: "aspect-square" },
    { id: 5, src: "/images/education/flyer-5.png", alt: "World No Tobacco Day", aspect: "aspect-[4/5]" },
    { id: 6, src: "/images/education/flyer-6.jpg", alt: "Teeth Whitening", aspect: "aspect-square" },
    { id: 7, src: "/images/education/flyer-7.png", alt: "Dental Implants", aspect: "aspect-square" },
    { id: 8, src: "/images/education/flyer-8.png", alt: "Keep Your Teeth Healthy", aspect: "aspect-square" },
    { id: 9, src: "/images/education/flyer-9.png", alt: "Looking for Aligners?", aspect: "aspect-square" },
    { id: 10, src: "/images/education/flyer-10.png", alt: "Dentalcare Experience", aspect: "aspect-square" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % flyers.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + flyers.length) % flyers.length);
    }
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  return (
    <section className="py-24 md:py-32 bg-[#F2FBF7] text-text-primary overflow-hidden border-t border-[#E5E7EB]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header Section */}
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
              Explore educational insights, oral health awareness tips, and patient-focused information curated by V Dental.
            </p>
          </motion.div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {flyers.map((flyer, idx) => (
            <motion.div
              key={flyer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <div className={`relative w-full rounded-2xl overflow-hidden glass border border-[#E5E7EB] group-hover:border-brand-500/30 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2 ${flyer.aspect}`}>
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-[#005C96]/90 p-4 rounded-full text-text-primary transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
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
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-text-primary/50 hover:text-text-primary bg-[#005C96]/5 hover:bg-[#005C96]/10 p-3 rounded-full transition-colors z-[60]"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-text-primary/50 hover:text-text-primary bg-[#005C96]/5 hover:bg-[#005C96]/10 p-4 rounded-full transition-colors z-[60] hidden md:block"
              onClick={showPrev}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-text-primary/50 hover:text-text-primary bg-[#005C96]/5 hover:bg-[#005C96]/10 p-4 rounded-full transition-colors z-[60] hidden md:block"
              onClick={showNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-5xl h-full max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={flyers[selectedIndex].src}
                  alt={flyers[selectedIndex].alt}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
