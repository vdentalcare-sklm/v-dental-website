"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { blogPosts as FALLBACK_POSTS } from "@/data/blogData";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  image_url: string;
  author: string;
  is_featured: boolean;
  created_at: string;
};

// Map fallback blogData shape to BlogPost shape
const FALLBACK: BlogPost[] = FALLBACK_POSTS.map((p: any) => ({
  id:         p.id,
  title:      p.title,
  slug:       p.slug,
  excerpt:    p.excerpt,
  category:   p.category,
  image_url:  p.image,
  author:     "V Dental Team",
  is_featured: p.featured ?? false,
  created_at: p.date ?? "",
}));

export default function BlogPage() {
  const [posts, setPosts]               = useState<BlogPost[]>(FALLBACK);
  const [loading, setLoading]           = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/public/blogs`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (data.success && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts);
        }
      } catch {
        console.warn("Could not fetch blog posts, using fallback.");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(posts.map(p => p.category).filter(Boolean)))];
  }, [posts]);

  const featuredPost = useMemo(() => {
    return posts.find(p => p.is_featured) ?? posts[0];
  }, [posts]);

  const regularPosts = useMemo(() => {
    return posts.filter(p => p.id !== featuredPost?.id);
  }, [posts, featuredPost]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return regularPosts;
    return regularPosts.filter(p => p.category === activeCategory);
  }, [activeCategory, regularPosts]);

  const isFiltering = activeCategory !== "All";

  function formatDate(raw: string): string {
    if (!raw) return "";
    // Already formatted (fallback posts have "Jun 12, 2026")
    if (isNaN(Date.parse(raw))) return raw;
    return new Date(raw).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="pt-32 pb-24 bg-[#F2FBF7] min-h-screen relative overflow-hidden">
      <AnimatedBackground count={15} />

      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-12 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-text-primary mb-6">
            The <span className="text-[#005C96]">Journal</span>
          </h1>
          <p className="text-xl text-text-primary/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Insights, trends, and expert advice on cosmetic dentistry, advanced treatments,
            and oral wellness.
          </p>

          {/* Category filter */}
          <div className="flex justify-center bg-[#005C96]/10 p-2 rounded-2xl border border-[#005C96]/20 backdrop-blur-sm mx-auto max-w-max">
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto hide-scrollbar">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#005C96] text-white shadow-md"
                      : "text-text-primary/70 hover:bg-[#005C96]/10 hover:text-text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Loading skeleton */}
      {loading && (
        <section className="container mx-auto px-6 md:px-12 mb-24">
          <div className="w-full aspect-[2/1] rounded-[2rem] bg-[#005C96]/5 animate-pulse mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-3xl bg-[#005C96]/5 animate-pulse h-80" />
            ))}
          </div>
        </section>
      )}

      {!loading && (
        <>
          {/* Featured post — only when not filtering */}
          {!isFiltering && featuredPost && (
            <section className="container mx-auto px-6 md:px-12 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="block rounded-[2rem] overflow-hidden border border-[#E5E7EB] hover:border-brand-500/40 transition-colors duration-500 group cursor-pointer shadow-2xl bg-white/80 backdrop-blur-xl"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                      <Image
                        src={featuredPost.image_url}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                    </div>
                    <div className="p-8 md:p-16 flex flex-col justify-center">
                      <div className="mb-6 flex items-center gap-3">
                        <span className="px-4 py-1.5 bg-[#005C96]/20 text-[#005C96] rounded-full text-sm font-medium border border-brand-500/20">
                          Featured • {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-semibold text-text-primary mb-6 group-hover:text-[#5AA647] transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-text-primary/70 leading-relaxed mb-8">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 mt-auto">
                        <div className="flex items-center gap-2 text-sm text-text-primary/50">
                          <Calendar className="w-4 h-4" />
                          {formatDate(featuredPost.created_at)}
                        </div>
                        <div className="ml-auto flex items-center gap-2 text-[#005C96] font-medium group-hover:translate-x-2 transition-transform duration-300">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </section>
          )}

          {/* Blog grid */}
          <section className="container mx-auto px-6 md:px-12">
            {isFiltering && (
              <h3 className="text-2xl font-display font-semibold text-text-primary mb-8">
                {activeCategory}{" "}
                <span className="text-text-primary/40 text-lg font-normal">
                  ({filteredPosts.length})
                </span>
              </h3>
            )}

            {!isFiltering && (
              <h3 className="text-2xl font-display font-semibold text-text-primary mb-8">
                Latest Articles
              </h3>
            )}

            {filteredPosts.length > 0 ? (
              <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredPosts.map((post) => (
                    <motion.div
                      layout
                      key={post.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block rounded-3xl overflow-hidden h-full flex flex-col group border border-[#E5E7EB] hover:border-brand-500/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(14,111,165,0.15)] hover:-translate-y-1 bg-white/80 backdrop-blur-xl"
                      >
                        <div className="w-full aspect-[4/3] bg-white relative overflow-hidden">
                          <Image
                            src={post.image_url}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#F2FBF7]/90 via-background/20 to-transparent z-10" />
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1.5 bg-[#F2FBF7]/80 backdrop-blur-md rounded-full text-xs font-medium text-text-primary border border-[#E5E7EB]">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-8 flex flex-col flex-1 relative z-20 -mt-6">
                          <h2 className="text-xl font-display font-semibold text-text-primary mb-4 group-hover:text-[#5AA647] transition-colors line-clamp-2">
                            {post.title}
                          </h2>
                          <p className="text-text-primary/70 leading-relaxed mb-8 flex-1 line-clamp-3 text-sm">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between pt-6 border-t border-[#E5E7EB]">
                            <div className="flex items-center gap-2 text-xs text-text-primary/50">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(post.created_at)}
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#005C96]/20 flex items-center justify-center text-[#005C96] group-hover:bg-[#005C96] group-hover:text-white transition-all duration-300">
                              <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 rounded-3xl border border-[#E5E7EB] bg-white/80"
              >
                <p className="text-xl text-text-primary/50">
                  No articles found in this category.
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="mt-6 px-6 py-2 bg-[#005C96]/5 hover:bg-[#005C96]/10 text-text-primary rounded-full transition-colors"
                >
                  Clear Filter
                </button>
              </motion.div>
            )}
          </section>
        </>
      )}
    </div>
  );
}