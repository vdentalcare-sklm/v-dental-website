"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DoctorsPreview() {
  const doctors = [
    {
      name: "Dr. John Madugula",
      designation: "Managing Director",
      description: "Leading V Dental with a vision of delivering world-class dental care through advanced technology, ethical treatment practices, and patient-centered excellence.",
      image: "/images/team/dr-john-madugula.jpg",
    },
    {
      name: "Mr. Ramesh K M K",
      designation: "Director",
      description: "Driving operational excellence and strategic growth while ensuring a seamless patient experience across all V Dental locations.",
      image: "/images/team/mr-ramesh.jpg",
    },
    {
      name: "Dr. Anita Madugula",
      designation: "Chief Dental Surgeon & Dental Implantologist",
      description: "Specializing in advanced dental implantology and comprehensive smile rehabilitation with a strong focus on precision, aesthetics, and patient comfort.",
      image: "/images/team/dr-anita.png",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h3 className="text-brand-400 font-medium tracking-[0.2em] text-sm uppercase mb-4">
              Meet The Experts
            </h3>
            <h2 className="text-3xl md:text-5xl font-light leading-tight">
              Meet The Leaders <br className="hidden md:block" />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Behind V Dental</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative glass p-6 rounded-[2rem] border border-white/5 hover:border-brand-500/40 hover:shadow-[0_0_40px_rgba(14,111,165,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-white/[0.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-display font-semibold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {doctor.name}
                </h3>
                <p className="inline-block text-brand-400 text-sm font-medium mb-4 uppercase tracking-wider">
                  {doctor.designation}
                </p>
                <div className="h-[1px] w-12 bg-white/10 mb-4 group-hover:w-full group-hover:bg-brand-500/30 transition-all duration-500"></div>
                <p className="text-foreground/70 font-light text-sm leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
