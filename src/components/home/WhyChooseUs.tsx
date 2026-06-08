"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Stethoscope, CreditCard, ClipboardCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Uncompromising Safety",
      description: "Strict sterilization protocols ensuring maximum patient safety.",
      icon: ShieldCheck,
    },
    {
      title: "Leading Specialists",
      description: "Highly skilled dental professionals delivering precise, expert care.",
      icon: Stethoscope,
    },
    {
      title: "Transparent Care",
      description: "Clear, upfront treatment plans with flexible financing options.",
      icon: CreditCard,
    },
    {
      title: "Personalized Precision",
      description: "Treatments carefully designed based on your unique dental profile.",
      icon: ClipboardCheck,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-[#083D5B] text-white">
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
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[85%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/luxury_dental_clinic_interior_1780051710680.png"
                alt="Luxury Dental Clinic Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Overlapping Image */}
            <div className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl border-[8px] border-[#083D5B] z-20">
              <Image
                src="/images/dentist_patient_smile_luxury_1780051728041.png"
                alt="Smiling Patient with Dentist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-[#91C6E6] font-semibold tracking-[0.15em] text-sm uppercase mb-4 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#91C6E6]"></span>
                The V Dental Standard
              </h3>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-white">
                Exceptional Care, <br/>
                <span className="font-medium text-white">Without Compromise</span>
              </h2>
              <p className="text-[#C2E1F2] text-lg leading-relaxed mb-12">
                Experience a new standard of dental care where medical excellence meets premium hospitality. We believe your journey to a perfect smile should be safe, comfortable, and remarkable.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  className="flex flex-col p-8 rounded-[1.5rem] bg-white text-[#1E293B] shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EAF5FB] flex items-center justify-center text-[#0B5D8C] mb-6">
                    <feature.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
