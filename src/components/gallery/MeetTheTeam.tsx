"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MeetTheTeam() {
  const team = [
    {
      name: "Dr. Vijay Krishna",
      role: "BDS, MDS – Orthodontics",
      image: "/images/team/vijay.jpg",
    },
    {
      name: "Dr. Gupta Kandukuri",
      role: "BDS, MDS – Periodontics",
      image: "/images/team/gupta.png",
    },
    {
      name: "Ms. Vidya",
      role: "Front Office",
      image: "/images/team/vidya.jpg",
    },
    {
      name: "Mrs. Revathi",
      role: "Operations Wing",
      image: "/images/team/revathi.png",
    }
  ];

  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#F2FBF7] text-text-primary overflow-hidden">
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
              OUR TEAM
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-text-primary mb-6">
              Meet The Experts Behind Every Smile
            </h2>
            <p className="text-lg text-text-primary/70 leading-relaxed">
              A dedicated team of specialists and professionals committed to delivering exceptional dental care with expertise, compassion, and precision.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Container with Hover Elevation */}
              <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-white border border-[#E5E7EB] hover:border-brand-500/30 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:-translate-y-2">
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-[#005C96]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Gradient fade at bottom for luxury feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F2FBF7]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              
              <div className="text-center px-4">
                <h3 className="text-xl md:text-2xl font-display font-medium text-text-primary mb-2 group-hover:text-[#5AA647] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#005C96] text-sm md:text-base">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
