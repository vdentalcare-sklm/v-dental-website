"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, Stethoscope, Microscope, Users, Star } from "lucide-react";
import Image from "next/image";

const beneficiaries = [
  "Andhra Pradesh Government Employees",
  "Retired Government Employees",
  "Pensioners",
  "Eligible Dependent Family Members"
];

const features = [
  {
    title: "Cashless Treatment Support",
    description: "Receive eligible dental treatments without immediate out-of-pocket expenses.",
    icon: <ShieldCheck className="w-5 h-5 text-[#005C96]" />
  },
  {
    title: "Reduced Financial Stress",
    description: "Avoid reimbursement-related challenges.",
    icon: <Heart className="w-5 h-5 text-[#005C96]" />
  },
  {
    title: "Experienced Dental Specialists",
    description: "Treatment provided by qualified and experienced dental professionals.",
    icon: <Stethoscope className="w-5 h-5 text-[#005C96]" />
  },
  {
    title: "Advanced Technology",
    description: "Access modern dental equipment and techniques.",
    icon: <Microscope className="w-5 h-5 text-[#005C96]" />
  },
  {
    title: "Patient Assistance",
    description: "Support throughout treatment and documentation procedures.",
    icon: <Users className="w-5 h-5 text-[#005C96]" />
  },
  {
    title: "Comprehensive Dental Care",
    description: "Access a wide range of eligible dental services.",
    icon: <Star className="w-5 h-5 text-[#005C96]" />
  }
];

export default function EhsScheme() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F2FBF7] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="bg-white border border-[#005C96]/10 shadow-[0_20px_60px_-15px_rgba(0,92,150,0.15)] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#005C96] to-[#5AA647]" />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#005C96]/10 text-[#005C96] font-medium text-sm mb-6 border border-[#005C96]/20">
                EMPLOYEES HEALTH SCHEME (EHS)
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-[#083D5B] mb-6 leading-tight">
                Employees Health Scheme (EHS) – <br className="hidden md:block"/>
                <span className="font-medium text-[#005C96]">Cashless Dental Care</span>
              </h2>
              
              <p className="text-lg text-text-primary/70 leading-relaxed mb-6">
                V Dental Care is associated with various government and healthcare empanelments to support beneficiaries under the Employees Health Scheme (EHS).
              </p>
              <p className="text-lg text-text-primary/70 leading-relaxed mb-8">
                The scheme aims to provide cashless treatment facilities and reduce the burden of medical expenses for eligible employees, pensioners, and their dependent family members.
              </p>

              <h3 className="text-xl font-medium text-[#083D5B] mb-6">Who Can Benefit</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {beneficiaries.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#F8FCFF] px-5 py-4 rounded-xl border border-[#005C96]/5 hover:border-[#005C96]/20 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#5AA647] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#083D5B]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full flex flex-col items-center justify-center relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl z-10">
                <Image 
                  src="/images/ap-gov-logo.png" 
                  alt="Andhra Pradesh Government Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              {/* Decorative background shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[400px] max-h-[400px] bg-gradient-to-tr from-[#005C96]/15 to-[#5AA647]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="mt-8 text-center px-6 py-3 bg-white/90 backdrop-blur-md border border-[#005C96]/10 rounded-2xl shadow-sm z-10">
                <p className="text-sm font-semibold text-[#083D5B]">Authorized EHS Provider</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full pt-10 border-t border-[#005C96]/10"
          >
            <h3 className="text-2xl font-medium text-[#083D5B] mb-8 text-center lg:text-left">Features & Benefits of EHS</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="bg-[#F8FCFF] border border-[#EAF5FB] p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center mb-1 text-[#005C96]">
                    {feature.icon}
                  </div>
                  <h4 className="text-[#083D5B] font-medium text-lg">{feature.title}</h4>
                  <p className="text-text-primary/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
