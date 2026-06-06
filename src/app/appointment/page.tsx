"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, MessageSquare } from "lucide-react";

export default function AppointmentPage() {
  const branches = [
    {
      name: "Visakhapatnam Branch",
      address: "Opp. Baker's Den, Beside Ramakrishna Printers, Sankaramatam Main Road, Visakhapatnam, Andhra Pradesh – 530016",
      phone: "+91 81796 22722",
      hours: "Mon – Sun | 9:00 AM – 9:00 PM",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.889397637841!2d83.3087268!3d17.7289568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1"
    },
    {
      name: "Vizianagaram Branch",
      address: "PSR Complex, Lower Tankbund Road, RTC Complex Area, Siddarth Nagar, Balaji Nagar, Vizianagaram, Andhra Pradesh – 535001",
      phone: "+91 88866 76687",
      hours: "Mon – Sun | 9:00 AM – 9:00 PM",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.889397637841!2d83.4!3d18.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v2"
    },
    {
      name: "Srikakulam Branch",
      address: "Above Eye Max Opticals, Krishna Park Junction, Srikakulam, Andhra Pradesh – 532001",
      phone: "+91 81423 81021",
      hours: "Mon – Sun | 9:00 AM – 9:00 PM",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.889397637841!2d83.9!3d18.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v3"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-background text-white min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-16 max-w-4xl text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Book <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Consultation</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
            Take the first step towards your perfect smile. Schedule a private consultation 
            with our specialists at any of our luxury clinic branches.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-8 bg-surface/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Treatment of Interest</label>
                  <select className="w-full bg-surface-hover border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors appearance-none">
                    <option value="consultation">General Consultation</option>
                    <option value="veneers">Porcelain Veneers</option>
                    <option value="invisalign">Invisalign</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="makeover">Smile Makeover</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Preferred Location</label>
                  <select className="w-full bg-surface-hover border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors appearance-none">
                    <option value="vizag">Visakhapatnam</option>
                    <option value="vizianagaram">Vizianagaram</option>
                    <option value="srikakulam">Srikakulam</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors resize-none"
                  placeholder="Tell us about your smile goals..."
                />
              </div>

              <button 
                type="button"
                className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                Request Appointment
              </button>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5 lg:col-span-4 flex flex-col justify-center space-y-8"
          >
            <div className="bg-surface/80 p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent pointer-events-none" />
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-light text-white mb-3">Need immediate assistance?</h3>
                <p className="text-gray-400 font-light text-sm mb-8">
                  Our concierge team is available via WhatsApp for priority booking and urgent queries.
                </p>
                <a 
                  href="https://wa.me/918179622722" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 border border-[#25D366]/30"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-900/40 to-[#0E0E14] p-8 rounded-3xl border border-white/5 text-center">
               <h3 className="text-xl font-light text-white mb-2">Central Support</h3>
               <p className="text-gray-400 font-light mb-4">info@vdentalcare.in</p>
               <p className="text-gray-400 font-light text-sm">Mon – Sun | 9:00 AM – 9:00 PM</p>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Locations Section */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light">
            Our <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-600">Locations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-surface/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden flex flex-col group hover:border-brand-500/50 transition-all duration-300"
            >
              <div className="w-full h-48 md:h-56 relative bg-white/5">
                <iframe 
                  src={branch.mapSrc} 
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-8 flex flex-col gap-6 flex-grow relative">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h3 className="text-xl font-medium text-white relative z-10">{branch.name}</h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-3 text-gray-400 font-light">
                    <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                    <span className="text-sm leading-relaxed">{branch.address}</span>
                  </div>
                  <div className="flex gap-3 text-gray-400 font-light items-center">
                    <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                    <span className="text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex gap-3 text-gray-400 font-light items-center">
                    <Clock className="w-5 h-5 text-brand-400 shrink-0" />
                    <span className="text-sm">{branch.hours}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
