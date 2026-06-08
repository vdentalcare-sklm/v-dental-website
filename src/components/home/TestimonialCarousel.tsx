"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The level of care and precision at V Dental is unparalleled. From the moment I walked in, I felt confident I was in the hands of true medical professionals.",
    author: "Kavitha Reddy",
    treatment: "Full Mouth Rehabilitation",
    rating: 5,
  },
  {
    id: 2,
    quote: "Exceptional facility and outstanding doctors. They took the time to thoroughly explain every step of my implant procedure. Truly a premium experience.",
    author: "Srinivasa Rao",
    treatment: "Dental Implants",
    rating: 5,
  },
  {
    id: 3,
    quote: "As someone with severe dental anxiety, the calm, professional, and luxurious environment completely put me at ease. The results are flawless.",
    author: "Priya Krishnan",
    treatment: "Cosmetic Dentistry",
    rating: 5,
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-[#EAF5FB]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-[#0B5D8C] font-semibold tracking-[0.15em] text-sm uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-[#0B5D8C]"></span>
            Patient Stories
            <span className="w-12 h-[1px] bg-[#0B5D8C]"></span>
          </h3>
          <h2 className="text-4xl md:text-5xl font-light text-[#083D5B] mb-6">
            Words from Our <span className="font-medium">Patients</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden px-4 py-8">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] p-10 md:p-16 shadow-lg border border-gray-100 flex flex-col items-center text-center relative"
            >
              <Quote className="w-16 h-16 text-[#C2E1F2] mb-8" />
              
              <p className="text-2xl md:text-3xl text-[#1E293B] font-light leading-relaxed mb-10 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div>
                <h4 className="text-xl font-semibold text-[#083D5B] mb-1">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-[#475569] font-medium">
                  {testimonials[currentIndex].treatment}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-[#0B5D8C] text-[#0B5D8C] flex items-center justify-center transition-colors hover:bg-[#0B5D8C] hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-[#0B5D8C]" : "bg-[#C2E1F2]"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-[#0B5D8C] text-[#0B5D8C] flex items-center justify-center transition-colors hover:bg-[#0B5D8C] hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
