"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock, CheckSquare, HeartHandshake, Smile } from "lucide-react";
import Image from "next/image";

const benefits = [
  {
    title: "0% Interest",
    description: "Pay only for your treatment with no hidden interest charges.",
    icon: <ShieldCheck className="w-6 h-6 text-[#5AA647]" />
  },
  {
    title: "Affordable Monthly Payments",
    description: "Spread treatment expenses into comfortable installments.",
    icon: <CheckSquare className="w-6 h-6 text-[#5AA647]" />
  },
  {
    title: "Immediate Access To Care",
    description: "Begin treatment without waiting to arrange full payment.",
    icon: <Clock className="w-6 h-6 text-[#5AA647]" />
  },
  {
    title: "Flexible Payment Solutions",
    description: "Suitable for a wide range of dental treatments.",
    icon: <HeartHandshake className="w-6 h-6 text-[#5AA647]" />
  },
  {
    title: "Transparent Process",
    description: "Simple approvals with clear payment structures.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#5AA647]" />
  },
  {
    title: "Peace Of Mind",
    description: "Focus on your smile while managing finances comfortably.",
    icon: <Smile className="w-6 h-6 text-[#5AA647]" />
  }
];

const partners = [
  "Sai Roshini", "Bajaj Finserv", "HDFC ERGO", "Major Bank Credit Cards"
];

export default function NoCostEmi() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5AA647]/10 text-[#5AA647] font-medium text-sm mb-6 border border-[#5AA647]/20">
              NO COST EMI / 0% EMI
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-[#083D5B] mb-6 leading-tight">
              0% No Cost EMI – <br className="hidden md:block"/>
              <span className="font-medium text-[#5AA647]">Smile Today, Pay Comfortably</span>
            </h2>
            
            <p className="text-lg text-text-primary/70 leading-relaxed mb-6">
              At V Dental Care, we believe that financial limitations should never prevent anyone from receiving quality dental treatment.
            </p>
            <p className="text-lg text-text-primary/70 leading-relaxed mb-6">
              Whether you require dental implants, smile makeovers, orthodontic treatment, root canal therapy, or preventive dental care, our No Cost EMI options allow you to begin treatment immediately and pay conveniently over time without additional interest charges.
            </p>
            <p className="text-lg text-text-primary/70 leading-relaxed mb-10">
              Unlike traditional EMI plans that often include high interest rates and hidden fees, our No Cost EMI facility allows patients to spread treatment costs into manageable monthly installments while paying only the actual treatment amount.
            </p>

            <h3 className="text-xl font-medium text-[#083D5B] mb-6">Available Through</h3>
            <div className="flex flex-wrap gap-4 mb-12">
              {partners.map((partner, idx) => (
                <div key={idx} className="bg-[#F8FCFF] border border-[#EAF5FB] px-6 py-3 rounded-xl shadow-sm text-text-primary/80 font-medium">
                  {partner}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-medium text-[#083D5B] mb-8">Benefits of No Cost EMI</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#F8FCFF] border border-[#EAF5FB] p-6 rounded-2xl flex flex-col gap-3 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2">
                    {benefit.icon}
                  </div>
                  <h4 className="text-[#083D5B] font-medium text-lg">{benefit.title}</h4>
                  <p className="text-text-primary/70 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative"
          >
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl bg-[#EAF5FB]">
              <Image 
                src="/images/schemes/bajaj-emi.png" 
                alt="No Cost EMI Options" 
                fill 
                className="object-contain"
              />
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#EAF5FB] to-[#F1F8F2] rounded-full blur-3xl opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
