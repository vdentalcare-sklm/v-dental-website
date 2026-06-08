"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Multi-Speciality Dental Care",
  "Advanced Dental Technology",
  "Experienced Specialists",
  "Patient-Centered Approach",
  "Multiple Branch Locations",
  "Affordable Treatment Solutions"
];

export default function WhyVDentalSchemes() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#083D5B] mb-12">
            Why Choose <span className="font-medium text-[#005C96]">V Dental Care</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-[#F8FCFF] border border-[#EAF5FB] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <CheckCircle2 className="w-6 h-6 text-[#5AA647] shrink-0" />
                <span className="text-[#083D5B] font-medium text-left">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
