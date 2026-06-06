"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, Heart, Smile, MonitorCheck, Users } from "lucide-react";

export default function OurPromise() {
  const promises = [
    {
      title: "Transparent Communication",
      description: "We ensure every patient fully understands their treatment options before making decisions.",
      icon: MessageCircle,
    },
    {
      title: "Ethical Recommendations",
      description: "We recommend only what is genuinely needed for long-term oral health.",
      icon: ShieldCheck,
    },
    {
      title: "Long-Term Oral Health Focus",
      description: "Our treatments are designed not just for today, but for years of healthy smiles.",
      icon: Heart,
    },
    {
      title: "Comfortable Treatment Experience",
      description: "Creating a stress-free and welcoming environment for patients of all ages.",
      icon: Smile,
    },
    {
      title: "Advanced Clinical Standards",
      description: "Utilizing modern technology, precision techniques, and strict protocols.",
      icon: MonitorCheck,
    },
    {
      title: "Continuous Patient Support",
      description: "Guiding patients throughout their dental journey, even after treatment completion.",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-4">
            Our Promise <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">To Every Patient</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            The values that guide every consultation, treatment, and smile transformation at V Dental.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promises.map((promise, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-brand-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-transparent transition-all duration-500 rounded-3xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 group-hover:bg-brand-500/20 group-hover:text-brand-300 transition-all duration-300">
                <promise.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3">
                {promise.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                {promise.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
