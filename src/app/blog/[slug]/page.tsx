"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { blogPosts as FALLBACK_POSTS } from "@/data/blogData";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string;
  content_html: string | null;
  author: string;
  created_at: string;
};

function formatDate(raw: string): string {
  if (!raw) return "";
  if (isNaN(Date.parse(raw))) return raw;
  return new Date(raw).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [post, setPost]       = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Try API first
        const res = await fetch(`${BACKEND_URL}/api/public/blogs?slug=${slug}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        if (data.success && data.post) {
          setPost(data.post);
        } else {
          // Fall back to local blogData
          const fallback = FALLBACK_POSTS.find((p: any) => p.slug === slug);
          if (fallback) {
            setPost({
              id:           fallback.id,
              title:        fallback.title,
              slug:         fallback.slug,
              excerpt:      fallback.excerpt,
              category:     fallback.category,
              image_url:    fallback.image,
              content_html: null,
              author:       "V Dental Team",
              created_at:   fallback.date ?? "",
            });
          } else {
            setNotFound(true);
          }
        }
      } catch {
        // API failed — try local fallback
        const fallback = FALLBACK_POSTS.find((p: any) => p.slug === slug);
        if (fallback) {
          setPost({
            id:           fallback.id,
            title:        fallback.title,
            slug:         fallback.slug,
            excerpt:      fallback.excerpt,
            category:     fallback.category,
            image_url:    fallback.image,
            content_html: null,
            author:       "V Dental Team",
            created_at:   fallback.date ?? "",
          });
        } else {
          setNotFound(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  // ── Loading ───────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-[#F2FBF7]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-8">
          <div className="h-8 w-32 rounded-full bg-[#005C96]/5 animate-pulse" />
          <div className="h-12 w-full rounded-2xl bg-[#005C96]/5 animate-pulse" />
          <div className="h-6 w-48 rounded-full bg-[#005C96]/5 animate-pulse" />
          <div className="w-full aspect-[21/9] rounded-[2rem] bg-[#005C96]/5 animate-pulse" />
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-4 w-full rounded bg-[#005C96]/5 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── Not found ─────────────────────────────────────────────────────────────
  if (notFound || !post) {
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

  // ── Article ───────────────────────────────────────────────────────────────
  return (
    <article className="min-h-screen pt-32 pb-24 bg-[#F2FBF7] relative overflow-hidden">
      <AnimatedBackground count={10} />

      {/* Header */}
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
              <span>{formatDate(post.created_at)}</span>
            </div>
            {post.author && (
              <>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500/30" />
                <span>{post.author}</span>
              </>
            )}
          </div>
        </motion.div>
      </header>

      {/* Featured image */}
      <motion.div
        className="container mx-auto px-6 md:px-12 max-w-5xl mb-16 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full aspect-[21/9] relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
          <Image
            src={post.image_url}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#E5E7EB] shadow-xl"
        >
          {/* Excerpt always shown */}
          <p className="text-xl md:text-2xl text-text-primary/90 font-light mb-10 leading-relaxed">
            {post.excerpt}
          </p>

          {/* DB content_html if available, otherwise fallback prose */}
          {post.content_html ? (
            <div
              className="prose prose-lg prose-headings:font-display prose-headings:text-[#083D5B] prose-p:text-text-primary/80 prose-a:text-[#005C96] prose-li:text-text-primary/80 max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content_html }}
            />
          ) : (
            <div className="prose prose-lg prose-headings:font-display prose-headings:text-[#083D5B] prose-p:text-text-primary/80 prose-a:text-[#005C96] prose-li:text-text-primary/80 max-w-none">
              <h2>The Importance of Advanced Dental Care</h2>
              <p>
                Maintaining excellent oral health is about much more than simply achieving
                a bright smile. It plays a critical role in your overall well-being. Whether
                you are considering preventative measures, restorative treatments, or a complete
                cosmetic transformation, understanding your options is the first step toward a
                healthier, more confident you.
              </p>
              <h3>Why Choose Specialized Treatment?</h3>
              <p>
                Every smile is unique, and so are the challenges that come with it. Specialized
                treatments offer targeted solutions tailored to your specific anatomy and
                aesthetic goals.
              </p>
              <ul>
                <li><strong>Precision and Comfort:</strong> Modern techniques minimize discomfort and recovery time.</li>
                <li><strong>Long-lasting Results:</strong> High-quality materials ensure your treatment stands the test of time.</li>
                <li><strong>Holistic Approach:</strong> We consider how your dental health impacts your overall well-being.</li>
              </ul>
              <h2>What to Expect During Your Journey</h2>
              <p>
                From your initial consultation to the final reveal, our expert team is dedicated
                to guiding you through every step of the process with compassion and precision.
              </p>
              <blockquote>
                "A healthy smile is the foundation of confidence. It's not just about aesthetics —
                it's about restoring function and joy to our patients' lives."
              </blockquote>
              <p>
                If you have any questions or are ready to take the next step, our specialists
                are here to help you design a customized treatment plan.
              </p>
            </div>
          )}

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-[#083D5B] font-medium">
              <Share2 className="w-5 h-5" />
              <span>Share this article</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank")}
                className="w-10 h-10 rounded-full bg-[#005C96]/10 text-[#005C96] flex items-center justify-center hover:bg-[#005C96] hover:text-white transition-all duration-300"
              >
                <FaFacebook className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, "_blank")}
                className="w-10 h-10 rounded-full bg-[#005C96]/10 text-[#005C96] flex items-center justify-center hover:bg-[#005C96] hover:text-white transition-all duration-300"
              >
                <FaTwitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, "_blank")}
                className="w-10 h-10 rounded-full bg-[#005C96]/10 text-[#005C96] flex items-center justify-center hover:bg-[#005C96] hover:text-white transition-all duration-300"
              >
                <FaLinkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}