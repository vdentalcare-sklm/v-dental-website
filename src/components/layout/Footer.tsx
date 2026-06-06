import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/images/logo-telugu.png" 
                alt="V Dental Telugu Logo" 
                className="h-20 md:h-28 w-auto object-contain bg-white/5 rounded-2xl p-3 backdrop-blur-sm"
              />
            </Link>
            <p className="text-foreground/60 max-w-sm mb-8 leading-relaxed">
              Experience the intersection of luxury and advanced dentistry. We craft radiant, 
              natural smiles using state-of-the-art technology in a serene environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-500 hover:text-white transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-500 hover:text-white transition-all">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-500 hover:text-white transition-all">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-foreground/60 hover:text-brand-400 transition-colors">About Clinic</Link></li>
              <li><Link href="/treatments" className="text-foreground/60 hover:text-brand-400 transition-colors">Treatments</Link></li>
              <li><Link href="/gallery" className="text-foreground/60 hover:text-brand-400 transition-colors">Before & After</Link></li>
              <li><Link href="/blog" className="text-foreground/60 hover:text-brand-400 transition-colors">The Journal</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-lg">Quick Contact</h4>
            <ul className="space-y-3 text-foreground/60 text-sm">
              <li>📞 +91 81796 22722 (Vizag)</li>
              <li>📞 +91 88866 76687 (Vizianagaram)</li>
              <li>📞 +91 81423 81021 (Srikakulam)</li>
              <li className="pt-2">✉ <a href="mailto:info@vdentalcare.in" className="hover:text-brand-400 transition-colors">info@vdentalcare.in</a></li>
              <li>🕒 Mon – Sun | 9 AM – 9 PM</li>
            </ul>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href="tel:+918179622722" className="text-brand-400 hover:text-brand-300 font-medium transition-colors">Call Now</a>
              <Link href="/appointment" className="text-brand-400 hover:text-brand-300 font-medium transition-colors">Book Appointment</Link>
              <Link href="/contact" className="text-brand-400 hover:text-brand-300 font-medium transition-colors">Get Directions</Link>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/40">
          <p>&copy; {new Date().getFullYear()} V Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
