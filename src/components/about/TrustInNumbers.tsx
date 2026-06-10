"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function TrustInNumbers() {
  const stats = [
    { value: 11000, suffix: "+", label: "Happy Smiles" },
    { value: 17, suffix: "+", label: "Years of Experience" },
    { value: 1000, suffix: "+", label: "Implant Cases" },
    { value: 98, suffix: "%", label: "Patient Satisfaction" },
  ];

  return (
    <section className="py-24 bg-[#FAFAF7] text-text-primary border-y border-[#E5E7EB]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center flex flex-col items-center justify-center gap-2"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-light text-[#083D5B]">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-text-secondary text-sm md:text-base font-light tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
