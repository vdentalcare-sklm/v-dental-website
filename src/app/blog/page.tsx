"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Signs You May Need Dental Implants",
    excerpt: "Missing teeth can affect both your confidence and oral health. Learn the signs that indicate dental implants may be the ideal long-term solution.",
    category: "Dental Implants",
    date: "Jun 12, 2026",
    readTime: "4 min read",
    image: "/images/blog/implants.png",
    slug: "signs-you-may-need-dental-implants"
  },
  {
    id: 2,
    title: "Braces vs Clear Aligners: Which Is Right for You?",
    excerpt: "Explore the key differences between traditional braces and modern clear aligners to find the best treatment for your smile goals.",
    category: "Orthodontics",
    date: "May 28, 2026",
    readTime: "5 min read",
    image: "/images/blog/aligners.png",
    slug: "braces-vs-clear-aligners"
  },
  {
    id: 3,
    title: "How Professional Teeth Cleaning Protects Your Oral Health",
    excerpt: "Routine dental cleanings help prevent gum disease, cavities, and long-term dental complications while keeping your smile healthy.",
    category: "Preventive Dentistry",
    date: "May 15, 2026",
    readTime: "3 min read",
    image: "/images/blog/cleaning.png",
    slug: "how-professional-teeth-cleaning-protects-your-oral-health"
  },
  {
    id: 4,
    title: "Understanding Wisdom Tooth Removal",
    excerpt: "Learn when wisdom teeth need to be removed, common symptoms, and what to expect during the recovery process.",
    category: "Oral Surgery",
    date: "May 02, 2026",
    readTime: "6 min read",
    image: "/images/blog/wisdom.png",
    slug: "understanding-wisdom-tooth-removal"
  },
  {
    id: 5,
    title: "The Complete Guide to Smile Makeovers",
    excerpt: "Discover how multiple cosmetic and restorative procedures can work together to create a confident, natural-looking smile.",
    category: "Cosmetic Dentistry",
    date: "Apr 20, 2026",
    readTime: "7 min read",
    image: "/images/blog/makeover.png",
    slug: "complete-guide-to-smile-makeovers",
    featured: true
  },
  {
    id: 6,
    title: "Why Gum Health Matters More Than You Think",
    excerpt: "Healthy gums are the foundation of a healthy smile. Understand the warning signs of gum disease and how to prevent it.",
    category: "Periodontics",
    date: "Apr 10, 2026",
    readTime: "4 min read",
    image: "/images/blog/gum.png",
    slug: "why-gum-health-matters"
  },
  {
    id: 7,
    title: "Dental Care Tips Every Parent Should Know",
    excerpt: "Simple preventive habits can help children maintain healthy teeth and avoid common dental issues from an early age.",
    category: "Pediatric Dentistry",
    date: "Mar 25, 2026",
    readTime: "5 min read",
    image: "/images/blog/pediatric.png",
    slug: "dental-care-tips-every-parent-should-know"
  },
  {
    id: 8,
    title: "How Technology Is Transforming Modern Dentistry",
    excerpt: "From digital scans to advanced implant procedures, discover how modern technology improves comfort, accuracy, and results.",
    category: "Dental Technology",
    date: "Mar 12, 2026",
    readTime: "5 min read",
    image: "/images/blog/tech.png",
    slug: "how-technology-is-transforming-modern-dentistry"
  }
];

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
    <div className="pt-32 pb-24 bg-background min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-16 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-white mb-6">
            The <span className="text-brand-400">Journal</span>
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Insights, trends, and expert advice on luxury cosmetic dentistry, advanced treatments, and oral wellness.
          </p>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-surface/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-foreground/40" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-foreground/40 focus:outline-none focus:border-brand-500/50 transition-colors"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category 
                      ? "bg-brand-600 text-white shadow-[0_0_15px_rgba(14,111,165,0.4)]" 
                      : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-white"
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
            <div className="glass rounded-[2rem] overflow-hidden border border-white/5 hover:border-brand-500/40 transition-colors duration-500 group cursor-pointer shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                  <Image 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent md:hidden" />
                </div>
                <div className="p-8 md:p-16 flex flex-col justify-center">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="px-4 py-1.5 bg-brand-600/20 text-brand-400 rounded-full text-sm font-medium border border-brand-500/20">
                      Featured • {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6 group-hover:text-brand-300 transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-foreground/50">
                      <Calendar className="w-4 h-4" /> {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/50">
                      <Clock className="w-4 h-4" /> {featuredPost.readTime}
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-brand-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="container mx-auto px-6 md:px-12">
        {isFiltering && (
          <h3 className="text-2xl font-display font-semibold text-white mb-8">
            Search Results <span className="text-foreground/40 text-lg font-normal">({filteredPosts.length})</span>
          </h3>
        )}
        
        {!isFiltering && (
          <h3 className="text-2xl font-display font-semibold text-white mb-8">
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
                  <div className="glass rounded-3xl overflow-hidden h-full flex flex-col group border border-white/5 hover:border-brand-500/40 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(14,111,165,0.15)] hover:-translate-y-1">
                    
                    {/* Image */}
                    <div className="w-full aspect-[4/3] bg-surface relative overflow-hidden">
                       <Image 
                         src={post.image} 
                         alt={post.title} 
                         fill 
                         className="object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                       <div className="absolute top-4 left-4 z-20">
                         <span className="px-3 py-1.5 bg-background/80 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                           {post.category}
                         </span>
                       </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1 relative z-20 -mt-6">
                      <h2 className="text-xl font-display font-semibold text-white mb-4 group-hover:text-brand-300 transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-foreground/70 leading-relaxed mb-8 flex-1 line-clamp-3 text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between pt-6 border-t border-white/5">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-xs text-foreground/50">
                            <Calendar className="w-3.5 h-3.5" /> {post.date}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-foreground/50">
                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-brand-600/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-24 glass rounded-3xl border border-white/5"
          >
            <p className="text-xl text-foreground/50">No articles found matching your criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-6 px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
