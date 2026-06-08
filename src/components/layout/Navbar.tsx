"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Gallery", href: "/gallery" },
    { name: "Schemes", href: "/healthcare-schemes" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass border-b border-brand-200 py-3 shadow-sm" : "bg-white py-5 shadow-sm"
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <motion.img 
              layoutId="brand-logo"
              src="/images/logo-english.png" 
              alt="V Dental Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <div className="flex gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[16px] font-medium text-text-primary hover:text-[#005C96] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005C96] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <Link
              href="/appointment"
              className="bg-[#0B5D8C] hover:bg-[#084A70] text-white text-[16px] font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="font-display font-semibold text-2xl">
                V<span className="text-brand-400">Dental</span>
              </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-brand-900" />
              </button>
            </div>
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display text-text-primary hover:text-brand-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="mt-8 flex flex-col gap-4"
              >
                <a 
                  href="tel:+918179622722"
                  className="flex items-center justify-center gap-2 text-brand-600 bg-brand-50 border border-brand-200 font-medium py-4 rounded-full"
                >
                  <Phone className="w-5 h-5" />
                  Call Support
                </a>
                <Link
                  href="/appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-[#005C96] hover:bg-[#0077B6] text-white font-medium py-4 rounded-full transition-colors"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
