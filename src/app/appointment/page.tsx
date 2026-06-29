"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

const FALLBACK_BRANCHES = [
  {
    id: 1,
    name: "Srikakulam Branch",
    address: "Above Eye Max Opticals, Krishna Park Junction, Srikakulam, Andhra Pradesh – 532001",
    phone: "+91 95505 08480",
    hours: "Mon – Sun | 9:00 AM – 9:00 PM",
    map_src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.889397637841!2d83.9!3d18.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v3",
    is_main: true,
  },
  {
    id: 2,
    name: "Vizianagaram Branch",
    address: "PSR Complex, Lower Tankbund Road, RTC Complex Area, Siddarth Nagar, Balaji Nagar, Vizianagaram, Andhra Pradesh – 535001",
    phone: "+91 88866 76687",
    hours: "Mon – Sun | 9:00 AM – 9:00 PM",
    map_src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.889397637841!2d83.4!3d18.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v2",
    is_main: false,
  },
  {
    id: 3,
    name: "Visakhapatnam Branch",
    address: "Opp. Baker's Den, Beside Ramakrishna Printers, Sankaramatam Main Road, Visakhapatnam, Andhra Pradesh – 530016",
    phone: "+91 81796 22722",
    hours: "Mon – Sun | 9:00 AM – 9:00 PM",
    map_src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.889397637841!2d83.3087268!3d17.7289568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1",
    is_main: false,
  },
];

const TREATMENTS = [
  { value: "General Consultation", label: "General Consultation" },
  { value: "Porcelain Veneers",    label: "Porcelain Veneers" },
  { value: "Invisalign",           label: "Invisalign" },
  { value: "Teeth Whitening",      label: "Teeth Whitening" },
  { value: "Dental Implants",      label: "Dental Implants" },
  { value: "Smile Makeover",       label: "Smile Makeover" },
];

type Branch = {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  map_src: string;
  is_main: boolean;
};

type FormState = "idle" | "loading" | "success" | "error";

export default function AppointmentPage() {
  const [branches, setBranches]         = useState<Branch[]>(FALLBACK_BRANCHES);
  const [name, setName]                 = useState("");
  const [phone, setPhone]               = useState("");
  const [email, setEmail]               = useState("");
  const [treatment, setTreatment] = useState("");
  const [formState, setFormState]       = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchBranches() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/public/branches`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
if (data.success && Array.isArray(data.branches) && data.branches.length > 0) {
          setBranches(data.branches);
        }
      } catch {
        console.warn("Could not fetch branches from API, using fallback.");
      }
    }
    fetchBranches();
  }, []);

  async function handleSubmit() {
    setErrorMessage("");

    if (!name.trim()) {
      setFormState("error");
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!phone.trim()) {
      setFormState("error");
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (!treatment.trim()) {
      setFormState("error");
      setErrorMessage("Please enter your treatment of interest.");
      return;
    }

    setFormState("loading");

    try {
      const res = await fetch(`${BACKEND_URL}/api/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:   name.trim(),
          phone:  phone.trim(),
          email:  email.trim() || null,
          reason: treatment,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormState("success");
} catch (err) {
      setFormState("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMessage(message);
    }
  }

function handleBookAnother() {
    setFormState("idle");
    setName("");
    setPhone("");
    setEmail("");
    setTreatment("");
    setErrorMessage("");
  }

  return (
    <div className="pt-32 pb-24 bg-[#F2FBF7] text-text-primary min-h-screen">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 md:px-12 mb-16 max-w-4xl text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Book{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#005C96] to-[#5AA647]">
              Consultation
            </span>
          </h1>
          <p className="text-xl text-text-secondary font-light leading-relaxed max-w-2xl">
            Take the first step towards your perfect smile. Schedule a private consultation
            with our specialists at any of our clinic branches.
          </p>
        </motion.div>
      </section>

      {/* ── Form + Sidebar ─────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24">

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-8 bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-[#E5E7EB]"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-6"
              >
                <div className="w-20 h-20 rounded-full bg-[#5AA647]/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-[#5AA647]" />
                </div>
                <h3 className="text-2xl font-medium text-text-primary">
                  Request Received!
                </h3>
                <p className="text-text-secondary font-light leading-relaxed max-w-sm">
                  We've sent you a WhatsApp message. Please check your phone to
                  choose your preferred branch, date, and time slot.
                </p>
                <button
                  onClick={handleBookAnother}
                  className="mt-4 px-8 py-3 bg-[#005C96]/10 hover:bg-[#005C96]/20 text-[#005C96] rounded-xl font-medium transition-colors"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <div className="space-y-8">

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={formState === "loading"}
                    placeholder="Priya Sharma"
                    className="w-full bg-white/[0.02] border border-[#E5E7EB] rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#005C96] focus:ring-1 focus:ring-[#005C96] transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Phone + Email */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={formState === "loading"}
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/[0.02] border border-[#E5E7EB] rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#005C96] focus:ring-1 focus:ring-[#005C96] transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">
                      Email{" "}
                      <span className="text-text-secondary/40 text-xs font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={formState === "loading"}
                      placeholder="priya@example.com"
                      className="w-full bg-white/[0.02] border border-[#E5E7EB] rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#005C96] focus:ring-1 focus:ring-[#005C96] transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

{/* Treatment */}
<div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">
                    Treatment of Interest <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    disabled={formState === "loading"}
                    placeholder="e.g. Dental Implants, Teeth Whitening..."
                    className="w-full bg-white/[0.02] border border-[#E5E7EB] rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-[#005C96] focus:ring-1 focus:ring-[#005C96] transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Error */}
                {formState === "error" && errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMessage}
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={formState === "loading"}
                  className="w-full bg-[#005C96] hover:bg-[#004A7A] text-white font-medium py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Request Appointment"
                  )}
                </button>

                <p className="text-center text-xs text-text-secondary/50">
                  After submitting, you'll receive a WhatsApp message to complete your booking.
                </p>
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5 lg:col-span-4 flex flex-col justify-center space-y-8"
          >


<div className="bg-white/80 p-8 rounded-3xl border border-[#E5E7EB] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/10 to-transparent pointer-events-none" />
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-light text-text-primary mb-3">
                  Need immediate assistance?
                </h3>
                <p className="text-text-secondary font-light text-sm mb-8">
                  Our team is available via WhatsApp for priority booking and urgent queries.
                </p>
                <button
                  onClick={() => window.open("https://wa.me/919550508480", "_blank")}
                  className="w-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 border border-[#25D366]/30"
                >
                  <MessageSquare className="w-5 h-5" />
                  Message on WhatsApp
                </button>
              </div>
            </div>

            <div className="bg-[#005C96]/5 p-8 rounded-3xl border border-[#005C96]/20 text-center">
              <h3 className="text-xl font-medium text-[#005C96] mb-2">Central Support</h3>
              <p className="text-text-primary mb-4">info@vdentalcare.in</p>
              <p className="text-text-secondary font-light text-sm">
                Mon – Sun | 9:00 AM – 9:00 PM
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Locations ──────────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light">
            Our{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#005C96] to-[#5AA647]">
              Locations
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#E5E7EB] overflow-hidden flex flex-col group hover:border-brand-500/50 transition-all duration-300"
            >
              {branch.map_src && (
                <div className="w-full h-48 md:h-56 relative bg-[#005C96]/5">
                  <iframe
                    src={branch.map_src}
                    title={branch.name}
                    className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              )}

              <div className="p-8 flex flex-col gap-6 flex-grow relative">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex items-center gap-3">
                  <h3 className="text-xl font-medium text-text-primary">
                    {branch.name}
                  </h3>
                  {branch.is_main && (
                    <span className="bg-[#5AA647]/10 text-[#5AA647] text-xs font-semibold px-2 py-1 rounded-full border border-[#5AA647]/20">
                      Main Center
                    </span>
                  )}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="flex gap-3 text-text-secondary font-light">
                    <MapPin className="w-5 h-5 text-[#005C96] shrink-0" />
                    <span className="text-sm leading-relaxed">{branch.address}</span>
                  </div>
                  <div className="flex gap-3 text-text-secondary font-light items-center">
                    <Phone className="w-5 h-5 text-[#005C96] shrink-0" />
                    <span className="text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex gap-3 text-text-secondary font-light items-center">
                    <Clock className="w-5 h-5 text-[#005C96] shrink-0" />
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