"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

// Placeholder data for dynamic routing with expanded details
const treatmentData = {
  "veneers": {
    title: "Porcelain Veneers",
    description: "Transform your smile with ultra-thin, custom-made porcelain shells that perfect shape, size, and color. Achieve the flawless, radiant smile you've always desired.",
    extendedDescription: "Veneers are one of the most transformative treatments in cosmetic dentistry. They can correct a multitude of aesthetic concerns, from severe discoloration and chips to minor misalignments and gaps. Our master ceramists handcraft each veneer to perfectly complement your facial structure, ensuring a completely natural look.",
    image: "/images/treatments/smile-makeover.png",
    benefits: [
      "Stain-resistant premium porcelain material",
      "Custom-shaded to match natural teeth perfectly",
      "Requires minimal to no enamel removal",
      "Highly durable results lasting 10-15+ years",
      "Corrects multiple aesthetic issues simultaneously",
      "Strengthens the front surface of teeth"
    ],
    process: [
      { step: "01", title: "Comprehensive Consultation", desc: "We discuss your aesthetic goals, take digital impressions, and use advanced software to design your perfect smile before any work begins." },
      { step: "02", title: "Gentle Preparation", desc: "Your teeth are gently prepared by removing a fraction of a millimeter of enamel. A precise impression is taken for our master ceramist." },
      { step: "03", title: "Trial Smile", desc: "You'll wear temporary veneers that replicate your new design, allowing you to test-drive your new smile while the permanent ones are crafted." },
      { step: "04", title: "Final Bonding", desc: "Your custom porcelain veneers are permanently bonded seamlessly to your teeth, instantly transforming your appearance." }
    ],
    faq: [
      { q: "How long do porcelain veneers last?", a: "With proper oral hygiene and regular dental checkups, high-quality porcelain veneers can last 10 to 15 years, and often much longer." },
      { q: "Does getting veneers hurt?", a: "The procedure is minimally invasive. We use local anesthesia during the preparation phase to ensure you are completely comfortable and pain-free." },
      { q: "Can I eat normally with veneers?", a: "Yes! Once permanently bonded, your veneers function like natural teeth. However, we recommend avoiding biting into extremely hard objects like ice or hard candies to prevent chipping." }
    ]
  },
  "dental-implants": {
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions designed to restore function, confidence, and natural aesthetics.",
    extendedDescription: "Dental implants are the gold standard for replacing missing teeth. They consist of a biocompatible titanium post that is surgically placed into the jawbone, acting as a sturdy foundation for a custom-made crown. This not only restores your smile but also prevents bone loss and preserves facial structure.",
    image: "/images/treatments/dental-implants-v2.png",
    benefits: [
      "Looks, feels, and functions like natural teeth",
      "Prevents bone loss and preserves jawbone health",
      "Permanent and durable solution",
      "Does not require altering adjacent healthy teeth",
      "Restores full chewing power",
      "Improves speech and comfort"
    ],
    process: [
      { step: "01", title: "Comprehensive Evaluation", desc: "We take 3D scans and evaluate your jawbone density to ensure you are a candidate for implants and plan the precise placement." },
      { step: "02", title: "Implant Placement", desc: "The titanium implant is surgically placed into the jawbone. This procedure is performed with precision and under local anesthesia for comfort." },
      { step: "03", title: "Osseointegration", desc: "Over the next few months, the implant fuses with the jawbone, creating a strong, permanent foundation." },
      { step: "04", title: "Abutment & Crown", desc: "Once healed, an abutment is attached, followed by the placement of your custom-crafted, natural-looking porcelain crown." }
    ],
    faq: [
      { q: "How long do dental implants last?", a: "With excellent oral hygiene and regular dental visits, the implant post can last a lifetime, while the crown may need replacement after 10-15 years due to normal wear." },
      { q: "Is the implant procedure painful?", a: "Most patients report that the procedure is less painful than a tooth extraction. We use local anesthesia and offer sedation options to ensure your absolute comfort." },
      { q: "Am I a good candidate for dental implants?", a: "Most adults with good general and oral health, and adequate jawbone density, are good candidates. If you have bone loss, we may recommend a bone graft before placement." }
    ]
  },
  "wisdom-teeth": {
    title: "Wisdom Teeth",
    description: "Safe and comfortable wisdom tooth evaluation and extraction procedures performed by experienced specialists.",
    extendedDescription: "Wisdom tooth extraction is a common procedure designed to prevent or resolve issues like impaction, crowding, and infection. Our highly skilled oral surgeons use the latest techniques to ensure the process is as smooth, comfortable, and painless as possible.",
    image: "/images/treatments/wisdom-teeth-v2.png",
    benefits: [
      "Prevents future pain and infection",
      "Protects alignment of other teeth",
      "Perforomed by experienced specialists",
      "Multiple sedation options available"
    ],
    process: [
      { step: "01", title: "Thorough Evaluation", desc: "We use panoramic X-rays or 3D imaging to assess the position of the wisdom teeth." },
      { step: "02", title: "Customized Plan", desc: "We discuss sedation options and walk you through the precise extraction procedure." },
      { step: "03", title: "Safe Extraction", desc: "The teeth are carefully and safely removed while you remain completely comfortable." },
      { step: "04", title: "Smooth Recovery", desc: "We provide comprehensive aftercare instructions and medications to ensure quick healing." }
    ],
    faq: [
      { q: "Will I be awake during the procedure?", a: "We offer several sedation options, from local anesthesia to IV sedation. We'll help you choose the best option for your comfort level." },
      { q: "How long does the recovery take?", a: "Most patients resume normal activities within 3 to 4 days, though full healing of the gum tissue takes a few weeks." },
      { q: "What can I eat after the extraction?", a: "Stick to soft foods like yogurt, applesauce, and smoothies for the first few days. Avoid using straws, as the suction can disturb the healing site." }
    ]
  }
};

export default function TreatmentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const data = treatmentData[slug as keyof typeof treatmentData] || {
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: "Experience premium cosmetic dentistry tailored to your unique facial aesthetics and oral health needs.",
    extendedDescription: "Our bespoke approach to your dental treatment ensures that every aspect is meticulously planned. We leverage state-of-the-art technology and evidence-based techniques to provide lasting, beautiful results that enhance both function and aesthetics.",
    image: `/images/treatments/${slug}.png`,
    benefits: [
      "Fully customized treatment plan", 
      "Premium, biocompatible materials", 
      "Expert application by specialists",
      "Long-lasting and predictable results"
    ],
    process: [
      { step: "01", title: "Detailed Consultation", desc: "Initial assessment, diagnostic imaging, and discussion of your goals." },
      { step: "02", title: "Treatment Planning", desc: "We present a tailored plan outlining timeline, costs, and expected outcomes." },
      { step: "03", title: "Expert Procedure", desc: "Our specialists execute the treatment with precision and a focus on your comfort." },
      { step: "04", title: "Aftercare & Follow-up", desc: "Comprehensive post-treatment care to ensure optimal healing and longevity." }
    ],
    faq: [
      { q: "How do I prepare for this treatment?", a: "During your initial consultation, we will provide you with specific, easy-to-follow instructions tailored to your personalized procedure." },
      { q: "Is this treatment covered by insurance?", a: "Coverage varies significantly by provider and plan. Our dedicated concierge team will help you navigate your benefits and explore flexible financing options." },
      { q: "What is the typical recovery time?", a: "Recovery depends on the complexity of your individual case. We will discuss this with you in detail beforehand and provide all necessary aftercare support." }
    ]
  };

  return (
    <div className="pb-24 relative overflow-hidden bg-[#F2FBF7] min-h-screen">
      <AnimatedBackground theme="light" count={25} />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 border-b border-[#E5E7EB]/50 bg-white/40 backdrop-blur-sm z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EAF5FB]/50 to-transparent pointer-events-none" />
        
        <div className="container relative mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/treatments" className="inline-flex items-center gap-2 text-[#0B5D8C] hover:text-[#5A9A43] font-medium mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Treatments
            </Link>
            <h1 className="text-5xl md:text-7xl font-light text-[#083D5B] mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container relative z-10 mx-auto px-6 md:px-12 py-24 grid md:grid-cols-12 gap-16">
        
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
              <h2 className="text-3xl font-light text-[#083D5B] mb-6">Overview</h2>
              {data.image && (
                <div className="w-full h-80 md:h-[450px] relative rounded-3xl overflow-hidden mb-8 shadow-md">
                  <Image src={data.image} alt={data.title} fill className="object-cover" />
                </div>
              )}
              <div className="prose prose-lg max-w-none text-[#475569]">
                <p>
                  At V Dental Care, our approach to {data.title.toLowerCase()} is rooted in the 
                  pursuit of perfection. We understand that your smile is your signature. Our master 
                  ceramists and cosmetic specialists work in unison to craft results that are not 
                  just beautiful, but flawlessly natural.
                </p>
                <p className="mt-4">
                  {data.extendedDescription}
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
              <h2 className="text-3xl font-light text-[#083D5B] mb-8">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle2 className="w-6 h-6 text-[#5AA647] shrink-0" />
                    <span className="text-[#1E293B] font-medium">{benefit}</span>
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
              <h2 className="text-3xl font-light text-[#083D5B] mb-12">The Process</h2>
              <div className="space-y-12">
                {data.process.map((step, i) => (
                  <div key={i} className="flex gap-8 relative group">
                    {/* Line Connector */}
                    {i !== data.process.length - 1 && (
                      <div className="absolute left-6 top-16 bottom-[-3rem] w-px bg-[#0B5D8C]/20 transition-colors" />
                    )}
                    
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0B5D8C]/20 flex items-center justify-center shrink-0 text-[#0B5D8C] font-bold relative z-10 shadow-sm group-hover:border-[#5AA647] group-hover:text-[#5AA647] transition-colors">
                      {step.step}
                    </div>
                    
                    <div className="pt-1">
                      <h3 className="text-2xl font-medium text-[#083D5B] mb-3">{step.title}</h3>
                      <p className="text-[#475569] leading-relaxed text-lg">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* FAQs */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-light text-[#083D5B] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {data.faq.map((faq, i) => (
                  <details key={i} className="group bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-[#083D5B] text-lg">
                      {faq.q}
                      <span className="transition group-open:rotate-180">
                        <ChevronDown className="w-5 h-5 text-[#0B5D8C]" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-[#475569] leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
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
            className="sticky top-32 bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white shadow-lg"
          >
            <h3 className="text-2xl font-light text-[#083D5B] mb-4">
              Begin Your Journey
            </h3>
            <p className="text-[#475569] mb-8">
              Schedule a private consultation to discuss {data.title.toLowerCase()} with our master specialists.
            </p>
            <Link
              href="/appointment"
              className="block w-full text-center bg-[#0B5D8C] text-white hover:bg-[#5A9A43] font-medium py-4 rounded-full transition-all shadow-lg shadow-[#0B5D8C]/20 hover:-translate-y-1"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
