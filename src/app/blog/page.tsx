"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { blogPosts } from "@/data/blogData";

const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter(post => post.id !== featuredPost.id);

  const filteredPosts = useMemo(() => {
    return regularPosts.filter(post => {
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, regularPosts]);

  const isFiltering = activeCategory !== "All" || searchQuery.length > 0;

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
            Insights, trends, and expert advice on luxury cosmetic dentistry, advanced treatments, and oral wellness.
          </p>

          {/* Filter Bar */}
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

      {/* Featured Article (Only show if not actively filtering) */}
      {!isFiltering && (
        <section className="container mx-auto px-6 md:px-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href={`/blog/${featuredPost.slug}`} className="block glass rounded-[2rem] overflow-hidden border border-[#E5E7EB] hover:border-brand-500/40 transition-colors duration-500 group cursor-pointer shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                  <Image 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F2FBF7]/20 to-transparent md:hidden" />
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
                      <Calendar className="w-4 h-4" /> {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-primary/50">
                      <Clock className="w-4 h-4" /> {featuredPost.readTime}
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

      {/* Blog Grid */}
      <section className="container mx-auto px-6 md:px-12">
        {isFiltering && (
          <h3 className="text-2xl font-display font-semibold text-text-primary mb-8">
            Search Results <span className="text-text-primary/40 text-lg font-normal">({filteredPosts.length})</span>
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
              {filteredPosts.map((post, i) => (
                <motion.div
                  layout
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <Link href={`/blog/${post.slug}`} className="block glass rounded-3xl overflow-hidden h-full flex flex-col group border border-[#E5E7EB] hover:border-brand-500/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(14,111,165,0.15)] hover:-translate-y-1">
                    
                    {/* Image */}
                    <div className="w-full aspect-[4/3] bg-white relative overflow-hidden">
                       <Image 
                         src={post.image} 
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
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-xs text-text-primary/50">
                            <Calendar className="w-3.5 h-3.5" /> {post.date}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-text-primary/50">
                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#005C96]/20 flex items-center justify-center text-[#005C96] group-hover:bg-[#005C96] group-hover:text-text-primary transition-all duration-300">
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
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-24 glass rounded-3xl border border-[#E5E7EB]"
          >
            <p className="text-xl text-text-primary/50">No articles found matching your criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-6 px-6 py-2 bg-[#005C96]/5 hover:bg-[#005C96]/10 text-text-primary rounded-full transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
