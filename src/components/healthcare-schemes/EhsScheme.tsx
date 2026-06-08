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
    <section className="py-24 bg-[#F2FBF7] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col items-center gap-10 max-w-4xl mx-auto text-center">

          {/* Main Content */}
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
              Cashless Dental Care For <br className="hidden md:block"/>
              <span className="font-medium text-[#005C96]">Eligible Beneficiaries</span>
            </h2>
            
            <p className="text-lg text-text-primary/70 leading-relaxed mb-6 max-w-2xl mx-auto">
              V Dental Care is associated with various government and healthcare empanelments to support beneficiaries under the Employees Health Scheme (EHS).
            </p>
            <p className="text-lg text-text-primary/70 leading-relaxed mb-6 max-w-2xl mx-auto">
              The scheme aims to provide cashless treatment facilities and reduce the burden of medical expenses for eligible employees, pensioners, and their dependent family members.
            </p>
            <p className="text-lg text-text-primary/70 leading-relaxed mb-10 max-w-2xl mx-auto">
              Our experienced team assists patients throughout the process, ensuring smooth treatment planning, documentation support, and access to quality dental care.
            </p>

            <h3 className="text-xl font-medium text-[#083D5B] mb-6">Who Can Benefit</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto text-left">
              {beneficiaries.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-sm border border-black/5">
                  <div className="w-2 h-2 rounded-full bg-[#5AA647]" />
                  <span className="text-sm font-medium text-text-primary/80">{item}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-medium text-[#083D5B] mb-8">Features & Benefits of EHS</h3>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-[#EAF5FB] p-6 rounded-2xl flex flex-col gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#005C96]/5 rounded-xl flex items-center justify-center mb-1">
                    {feature.icon}
                  </div>
                  <h4 className="text-[#083D5B] font-medium">{feature.title}</h4>
                  <p className="text-text-primary/60 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
