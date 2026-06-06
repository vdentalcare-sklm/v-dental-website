"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const treatments = [
  {
    id: 1,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions designed to restore function, confidence, and natural aesthetics.",
    slug: "dental-implants",
    image: "/images/treatments/dental-implants.png"
  },
  {
    id: 2,
    title: "Braces & Aligners",
    description: "Advanced orthodontic solutions including braces and clear aligners for perfectly aligned smiles.",
    slug: "braces-aligners",
    image: "/images/treatments/braces-aligners.png"
  },
  {
    id: 3,
    title: "Smile Makeover",
    description: "Comprehensive smile transformation treatments designed to enhance aesthetics and confidence.",
    slug: "smile-makeover",
    image: "/images/treatments/smile-makeover.png"
  },
  {
    id: 4,
    title: "Restorations",
    description: "Restore damaged or decayed teeth using modern restorative dental treatments and advanced materials.",
    slug: "restorations",
    image: "/images/treatments/restorations.png"
  },
  {
    id: 5,
    title: "Wisdom Teeth",
    description: "Safe and comfortable wisdom tooth evaluation and extraction procedures performed by experienced specialists.",
    slug: "wisdom-teeth",
    image: "/images/treatments/wisdom-teeth.png"
  },
  {
    id: 6,
    title: "Gum Care",
    description: "Specialized treatments focused on gum health, infection control, and long-term oral wellness.",
    slug: "gum-care",
    image: "/images/treatments/gum-care.png"
  }
];

export default function TreatmentShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragged, setDragged] = useState(false);

  const handleMouseDown = (e: MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    setDragged(true);
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (e: MouseEvent) => {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
              Curated <span className="text-brand-400">Treatments</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Discover our signature procedures designed to enhance your natural beauty and ensure optimal oral health. Every treatment is tailored specifically to you.
            </p>
          </div>
          <Link href="/treatments" className="group flex items-center gap-2 text-brand-300 hover:text-brand-400 font-medium transition-colors">
            View All Treatments
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative w-full">
        {/* Left/Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 md:gap-8 px-6 md:px-32 py-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} touch-pan-x`}
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {[...treatments, ...treatments].map((treatment, i) => (
            <Link 
              href={`/treatments/${treatment.slug}`} 
              key={`${treatment.id}-${i}`}
              onClick={handleClick}
              draggable={false}
              className="snap-center shrink-0"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative w-[320px] md:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden glass p-8 flex flex-col justify-end border border-white/5 hover:border-brand-500/30 transition-colors"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-3xl">
                  <Image 
                    src={treatment.image} 
                    alt={treatment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
                
                <div className="relative z-10 pointer-events-none">
                  <h3 className="text-3xl font-display font-semibold text-white mb-4 group-hover:text-brand-300 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-foreground/70 mb-8 line-clamp-3">
                    {treatment.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                    Explore Procedure
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
