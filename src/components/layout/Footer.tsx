import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 text-gray-300 relative overflow-hidden">
      <AnimatedBackground theme="dark" count={8} />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-16">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col">
            <Link href="/" className="inline-block mb-8 w-fit">
              <div className="p-6 rounded-[1.5rem] bg-white/5 backdrop-blur-md shadow-md border border-white/10 transition-transform hover:-translate-y-1">
                <img 
                  src="/images/logo-telugu.png" 
                  alt="V Dental Telugu Logo" 
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-300 max-w-sm mb-8 leading-relaxed">
              Experience the intersection of luxury and advanced dentistry. We craft radiant, 
              natural smiles using state-of-the-art technology in a serene environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#7CC45B] hover:bg-[#7CC45B] hover:text-white hover:border-[#7CC45B] transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#7CC45B] hover:bg-[#7CC45B] hover:text-white hover:border-[#7CC45B] transition-all">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#7CC45B] hover:bg-[#7CC45B] hover:text-white hover:border-[#7CC45B] transition-all">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="flex flex-col md:pl-8">
            <h4 className="font-semibold text-white mb-6 text-lg uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-300 hover:text-[#7CC45B] transition-colors font-medium">About Clinic</Link></li>
              <li><Link href="/treatments" className="text-gray-300 hover:text-[#7CC45B] transition-colors font-medium">Treatments</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-[#7CC45B] transition-colors font-medium">Before & After</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-[#7CC45B] transition-colors font-medium">The Journal</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div className="flex flex-col">
            <h4 className="font-semibold text-white mb-6 text-lg uppercase tracking-wider text-sm">Contact Information</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#7CC45B] mt-1">📞</span>
                <div>
                  <p className="font-medium">+91 81423 81021 <span className="text-white/60 text-sm font-normal">(Srikakulam)</span> <span className="text-[#5AA647] text-xs ml-1 font-semibold border border-[#5AA647]/30 px-1 rounded">Main</span></p>
                  <p className="font-medium">+91 88866 76687 <span className="text-white/60 text-sm font-normal">(Vizianagaram)</span></p>
                  <p className="font-medium">+91 81796 22722 <span className="text-white/60 text-sm font-normal">(Vizag)</span></p>
                </div>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <span className="text-[#7CC45B]">✉</span>
                <a href="mailto:info@vdentalcare.in" className="hover:text-[#7CC45B] transition-colors font-medium">info@vdentalcare.in</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#7CC45B]">🕒</span>
                <span className="font-medium">Mon – Sun | 9 AM – 9 PM</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm">
              <Link href="/appointment" className="inline-flex justify-center items-center px-6 py-2.5 bg-[#7CC45B] text-white rounded-full font-semibold hover:bg-[#5AA647] transition-colors shadow-md">
                Book Appointment
              </Link>
              <Link href="/contact" className="inline-flex justify-center items-center px-6 py-2.5 border border-gray-300/30 text-gray-300 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Get Directions
              </Link>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} V Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#7CC45B] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#7CC45B] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

