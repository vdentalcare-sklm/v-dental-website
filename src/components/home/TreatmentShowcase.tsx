"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const treatments = [
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking replacement teeth anchored securely in your jawbone, restoring both function and aesthetics seamlessly.",
    image: "/images/treatments/dental-implants-v2.png",
    link: "/treatments/dental-implants"
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with porcelain veneers, professional whitening, and comprehensive smile makeovers tailored to your facial aesthetics.",
    image: "/images/treatments/smile-makeover.png",
    link: "/treatments/cosmetic"
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "State-of-the-art clear aligners and modern orthodontic solutions to straighten your teeth discreetly and comfortably.",
    image: "/images/treatments/braces-aligners.png",
    link: "/treatments/orthodontics"
  }
];

export default function TreatmentShowcase() {
  return (
    <section className="py-20 md:py-32 bg-[#FAFAF7] text-[#1E293B]">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-[#0B5D8C] font-semibold tracking-[0.15em] text-sm uppercase mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-[#0B5D8C]"></span>
            Specialized Care
            <span className="w-12 h-[1px] bg-[#0B5D8C]"></span>
          </h3>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-[#083D5B]">
            Comprehensive <span className="font-medium">Treatments</span>
          </h2>
          <p className="text-lg text-[#475569]">
            We offer a full spectrum of advanced dental procedures under one roof, utilizing the latest in medical technology.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-md border border-gray-100 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-[#083D5B]">
                  {treatment.title}
                </h3>
                <p className="text-[#475569] mb-8 flex-grow leading-relaxed">
                  {treatment.description}
                </p>
                
                <Link
                  href={treatment.link}
                  className="inline-flex items-center gap-2 text-[#0B5D8C] font-medium transition-colors hover:text-[#084A70]"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/treatments"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#0B5D8C] text-[#0B5D8C] rounded-full font-medium transition-all hover:bg-[#0B5D8C] hover:text-white"
          >
            View All Treatments
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

