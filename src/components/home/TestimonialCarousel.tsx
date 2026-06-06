"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "The level of care and detail at V Dental is unmatched. My smile makeover was a truly luxurious experience from start to finish.",
    treatment: "Smile Makeover"
  },
  {
    id: 2,
    name: "Michael Chang",
    text: "I used to dread the dentist, but the ambiance and professionalism here completely changed my perspective. Flawless veneers.",
    treatment: "Veneers"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    text: "State-of-the-art facility with a team that treats you like royalty. The Invisalign process was seamless.",
    treatment: "Invisalign"
  }
];

export default function TestimonialCarousel() {
  return (
    <section className="py-24 relative overflow-hidden bg-surface">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
            Stories of <span className="text-brand-400">Transformation</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Hear from our patients who have experienced the V Dental difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="glass p-8 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="w-10 h-10 text-brand-500/20 absolute top-8 right-8 group-hover:text-brand-500/40 transition-colors" />
              
              <div className="flex flex-col h-full justify-between gap-8 relative z-10">
                <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-brand-400">{testimonial.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
