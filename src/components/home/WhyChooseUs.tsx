"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Stethoscope, CreditCard, ClipboardCheck, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Safety Guidelines",
      description: "Strict sterilization protocols and hygiene standards designed to ensure maximum patient safety and infection control throughout every treatment.",
      icon: ShieldCheck,
    },
    {
      title: "Experienced Doctors",
      description: "Highly skilled and experienced dental professionals committed to delivering precise, reliable, and compassionate care for every patient.",
      icon: Stethoscope,
    },
    {
      title: "Finance Options",
      description: "Flexible financing and EMI options available through trusted partners, helping patients receive treatment without financial stress.",
      icon: CreditCard,
    },
    {
      title: "Individualized Treatment Plans",
      description: "Every smile is unique. Personalized treatment plans are carefully designed based on individual dental needs, goals, and long-term oral health.",
      icon: ClipboardCheck,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-brand-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-full"
          >
            {/* Background Decorative Element */}
            <div className="absolute -left-6 -top-6 w-full h-full border border-brand-500/20 rounded-3xl" />
            
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[85%] h-[75%] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.15)] z-10">
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay z-10" />
              <Image
                src="/images/luxury_dental_clinic_interior_1780051710680.png"
                alt="Luxury Dental Clinic Interior"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Overlapping Image */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 z-20">
              <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay z-10" />
              <Image
                src="/images/dentist_patient_smile_luxury_1780051728041.png"
                alt="Smiling Patient with Dentist"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Floating Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 bg-surface/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl z-30"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-500/20 text-brand-400">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-3xl font-light text-white">10,000<span className="text-brand-400">+</span></p>
                  <p className="text-sm text-gray-400">Happy Smiles</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-brand-400 font-medium tracking-[0.2em] text-sm uppercase mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-brand-400"></span>
                Why Choose Us
              </h3>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                Exceptional Dental Care Designed Around <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Your Smile</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                Experience a new standard of dental care where cutting-edge technology meets luxurious comfort. We believe your journey to a perfect smile should be as remarkable as the results.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-brand-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500" />
                  
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/20 group-hover:text-brand-300 transition-all duration-300">
                      <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-200 mb-2 group-hover:text-white transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors font-light">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
