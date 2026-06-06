"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Placeholder data for dynamic routing
const treatmentData = {
  "veneers": {
    title: "Porcelain Veneers",
    description: "Transform your smile with ultra-thin, custom-made porcelain shells that perfect shape, size, and color.",
    benefits: [
      "Stain-resistant porcelain material",
      "Custom-shaded to match natural teeth",
      "Requires minimal enamel removal",
      "Durable results lasting 10-15 years"
    ],
    process: [
      { step: "01", title: "Consultation & Design", desc: "We discuss your goals and digitally design your perfect smile." },
      { step: "02", title: "Preparation", desc: "Teeth are gently prepared, and an impression is taken for the master ceramist." },
      { step: "03", title: "Final Placement", desc: "Your custom veneers are bonded seamlessly to your teeth." }
    ]
  }
};

export default function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const data = treatmentData[slug as keyof typeof treatmentData] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "Experience premium cosmetic dentistry tailored to your unique facial aesthetics.",
    benefits: ["Customized treatment plan", "Premium materials", "Expert application"],
    process: [
      { step: "01", title: "Consultation", desc: "Initial assessment." },
      { step: "02", title: "Procedure", desc: "Expert execution." }
    ]
  };

  return (
    <div className="pb-24">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/20 to-background" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]" />
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/treatments" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-medium mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Treatments
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 py-24 grid md:grid-cols-12 gap-16">
        
        {/* Main Content */}
        <div className="md:col-span-8 space-y-24">
          
          {/* Overview */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-semibold text-white mb-6">Overview</h2>
              <div className="prose prose-invert prose-lg max-w-none text-foreground/80">
                <p>
                  At V Dental Care, our approach to {data.title.toLowerCase()} is rooted in the 
                  pursuit of perfection. We understand that your smile is your signature. Our master 
                  ceramists and cosmetic specialists work in unison to craft results that are not 
                  just beautiful, but flawlessly natural.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Benefits */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-semibold text-white mb-8">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-6 glass rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-brand-400 shrink-0" />
                    <span className="text-white/90 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Process */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-semibold text-white mb-12">The Process</h2>
              <div className="space-y-12">
                {data.process.map((step, i) => (
                  <div key={i} className="flex gap-8 relative group">
                    {/* Line Connector */}
                    {i !== data.process.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-white/10 group-hover:bg-brand-500/30 transition-colors" />
                    )}
                    
                    <div className="w-12 h-12 rounded-full glass border border-brand-500/30 flex items-center justify-center shrink-0 text-brand-300 font-display font-bold relative z-10 bg-background">
                      {step.step}
                    </div>
                    
                    <div className="pt-2">
                      <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32 glass rounded-3xl p-8 border border-brand-500/20"
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-4">
              Begin Your Journey
            </h3>
            <p className="text-foreground/70 mb-8">
              Schedule a private consultation to discuss {data.title.toLowerCase()} with our specialists.
            </p>
            <Link
              href="/appointment"
              className="block w-full text-center bg-brand-600 hover:bg-brand-500 text-white font-medium py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
