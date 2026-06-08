"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogData";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-[#F2FBF7] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-display font-semibold text-[#083D5B] mb-6">
          Post Not Found
        </h1>
        <p className="text-lg text-text-primary/70 mb-8 max-w-md mx-auto">
          We couldn't find the article you were looking for. It may have been moved or deleted.
        </p>
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#005C96] hover:bg-[#004A7A] text-white rounded-full font-medium transition-all duration-300 shadow-xl hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-24 bg-[#F2FBF7] relative overflow-hidden">
      <AnimatedBackground count={10} />
      
      {/* Article Header */}
      <header className="container mx-auto px-6 md:px-12 max-w-4xl mb-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#005C96] hover:text-[#5AA647] font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>
          
          <div className="mb-6">
            <span className="px-4 py-1.5 bg-[#005C96]/10 text-[#005C96] rounded-full text-sm font-medium border border-[#005C96]/20">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-[#083D5B] mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-text-primary/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Featured Image */}
      <motion.div 
        className="container mx-auto px-6 md:px-12 max-w-5xl mb-16 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full aspect-[21/9] relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay" />
        </div>
      </motion.div>

      {/* Article Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass rounded-3xl p-8 md:p-12 border border-[#E5E7EB] shadow-xl prose prose-lg prose-headings:font-display prose-headings:text-[#083D5B] prose-p:text-text-primary/80 prose-a:text-[#005C96] hover:prose-a:text-[#5AA647] prose-li:text-text-primary/80 max-w-none"
        >
          <p className="lead text-xl md:text-2xl text-text-primary/90 font-light mb-10 leading-relaxed">
            {post.excerpt}
          </p>

          <h2>The Importance of Advanced Dental Care</h2>
          <p>
            Maintaining excellent oral health is about much more than simply achieving a bright smile. It plays a critical role in your overall well-being. Whether you are considering preventative measures, restorative treatments, or a complete cosmetic transformation, understanding your options is the first step toward a healthier, more confident you.
          </p>
          
          <h3>Why Choose Specialized Treatment?</h3>
          <p>
            Every smile is unique, and so are the challenges that come with it. Specialized treatments like the ones discussed in this article offer targeted solutions tailored to your specific anatomy and aesthetic goals. 
          </p>
          <ul>
            <li><strong>Precision and Comfort:</strong> Modern techniques minimize discomfort and recovery time.</li>
            <li><strong>Long-lasting Results:</strong> High-quality materials ensure your treatment stands the test of time.</li>
            <li><strong>Holistic Approach:</strong> We consider how your dental health impacts your overall facial structure and well-being.</li>
          </ul>

          <h2>What to Expect During Your Journey</h2>
          <p>
            Embarking on a dental health journey should be an empowering experience. At V Dental, we prioritize patient education and transparency. From your initial consultation to the final reveal, our expert team is dedicated to guiding you through every step of the process with compassion and precision.
          </p>

          <blockquote>
            "A healthy smile is the foundation of confidence. It's not just about aesthetics; it's about restoring function and joy to our patients' lives."
          </blockquote>

          <p>
            If you have any questions or are ready to take the next step, our specialists are here to help you design a customized treatment plan that perfectly aligns with your needs.
          </p>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-[#083D5B] font-medium">
              <Share2 className="w-5 h-5" />
              <span>Share this article</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-[#005C96]/10 text-[#005C96] flex items-center justify-center hover:bg-[#005C96] hover:text-white transition-all duration-300">
                <FaFacebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#005C96]/10 text-[#005C96] flex items-center justify-center hover:bg-[#005C96] hover:text-white transition-all duration-300">
                <FaTwitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#005C96]/10 text-[#005C96] flex items-center justify-center hover:bg-[#005C96] hover:text-white transition-all duration-300">
                <FaLinkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
