"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, Map } from "lucide-react";

export default function ContactPage() {
  const branches = [
    {
      name: "Visakhapatnam",
      address: "Opp. Baker's Den, Beside Ramakrishna Printers, Sankaramatam Main Road, Visakhapatnam, Andhra Pradesh – 530016",
      phones: ["+91 81796 22722", "+91 79892 16351"],
      primaryPhone: "+918179622722",
      mapUrl: "#"
    },
    {
      name: "Vizianagaram",
      address: "PSR Complex, Lower Tankbund Road, RTC Complex Area, Siddarth Nagar, Balaji Nagar, Vizianagaram, Andhra Pradesh – 535001",
      phones: ["+91 88866 76687"],
      primaryPhone: "+918886676687",
      mapUrl: "#"
    },
    {
      name: "Srikakulam",
      address: "Above Eye Max Opticals, Krishna Park Junction, Srikakulam, Andhra Pradesh – 532001",
      phones: ["+91 81423 81021"],
      primaryPhone: "+918142381021",
      mapUrl: "#"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-background text-white min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Our <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Locations</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            Find a V Dental Care branch near you. We are ready to provide world-class dental care with advanced technology and expert specialists.
          </p>
        </motion.div>
      </section>

      {/* Branch Locator */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * idx }}
              className="group flex flex-col p-8 rounded-3xl bg-surface/80 backdrop-blur-xl border border-white/10 hover:border-brand-500/50 transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-medium text-white group-hover:text-brand-300 transition-colors">
                  {branch.name}
                </h2>
              </div>
              
              <div className="flex flex-col gap-6 flex-grow relative z-10">
                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Address</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    V Dental Hospitals<br />
                    {branch.address}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Contact</h4>
                  {branch.phones.map((phone, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-gray-300 font-light mb-1">
                      <Phone className="w-4 h-4 text-brand-400" />
                      <span>{phone}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 relative z-10">
                <a 
                  href={`tel:${branch.primaryPhone}`} 
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a 
                  href={branch.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium border border-white/10 hover:border-white/20 transition-all"
                >
                  <Map className="w-4 h-4 text-brand-400" />
                  <span>Directions</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Contact Info */}
      <section className="container mx-auto px-6 md:px-12 mt-24 max-w-4xl text-center relative z-10">
        <h3 className="text-2xl font-light text-white mb-8">Central Support</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-12 text-gray-400 font-light">
          <div>
            <p className="text-sm uppercase tracking-widest mb-2 text-brand-400">Email Us</p>
            <a href="mailto:info@vdentalcare.in" className="text-xl hover:text-white transition-colors">info@vdentalcare.in</a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest mb-2 text-brand-400">Working Hours</p>
            <p className="text-xl">Monday – Sunday <br/> 9:00 AM – 9:00 PM</p>
          </div>
        </div>
      </section>
    </div>
  );
}
