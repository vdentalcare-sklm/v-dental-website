"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const treatments = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions designed to restore function, confidence, and natural aesthetics.",
    features: ["Natural appearance", "Permanent solution", "Preserves bone"],
    image: "/images/treatments/dental-implants.png"
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    description: "Advanced orthodontic solutions including braces and clear aligners for perfectly aligned smiles.",
    features: ["Custom fit", "Discreet options", "Predictable results"],
    image: "/images/treatments/braces-aligners.png"
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    description: "Comprehensive smile transformation treatments designed to enhance aesthetics and confidence.",
    features: ["Personalized", "Comprehensive", "Aesthetic focus"],
    image: "/images/treatments/smile-makeover.png"
  },
  {
    id: "restorations",
    title: "Restorations",
    description: "Restore damaged or decayed teeth using modern restorative dental treatments and advanced materials.",
    features: ["Durable materials", "Natural look", "Restores function"],
    image: "/images/treatments/restorations.png"
  },
  {
    id: "wisdom-teeth",
    title: "Wisdom Teeth",
    description: "Safe and comfortable wisdom tooth evaluation and extraction procedures performed by experienced specialists.",
    features: ["Safe extraction", "Pain management", "Quick recovery"],
    image: "/images/treatments/wisdom-teeth.png"
  },
  {
    id: "gum-care",
    title: "Gum Care & Periodontal",
    description: "Specialized treatments focused on gum health, infection control, and long-term oral wellness.",
    features: ["Infection control", "Deep cleaning", "Long-term health"],
    image: "/images/treatments/gum-care.png"
  }
];

export default function TreatmentsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm font-medium text-brand-100">Our Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6">
            Bespoke <span className="text-brand-400">Treatments</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Explore our curated selection of premium dental procedures. Each treatment is tailored to 
            your unique anatomy and aesthetic goals.
          </p>
        </motion.div>
      </section>

      {/* Treatments List */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-8">
          {treatments.map((treatment, i) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/treatments/${treatment.id}`} className="group block">
                <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 border border-white/5 hover:border-brand-500/40 transition-all duration-500">
                  
                  {/* Premium Image Container */}
                  <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl bg-surface relative overflow-hidden flex-shrink-0 border border-white/5 group-hover:border-brand-500/30 transition-colors">
                    <Image 
                      src={treatment.image} 
                      alt={treatment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-900/20 to-transparent pointer-events-none mix-blend-overlay" />
                  </div>

                  <div className="flex flex-col justify-center flex-1">
                    <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4 group-hover:text-brand-300 transition-colors">
                      {treatment.title}
                    </h2>
                    <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-2xl">
                      {treatment.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                      {treatment.features.map(feature => (
                        <span key={feature} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-white/80">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-2 text-brand-400 font-medium">
                      <span className="relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Discover Details</span>
                        <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">Discover Details</span>
                      </span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
