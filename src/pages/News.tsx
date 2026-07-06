import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import excelherFlyer from '../assets/images/excelher_flyer_1783292887443.jpg';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  
  const categories = [
    "All", 
    "Impact Stories", 
    "News & Updates", 
    "Education & Awareness", 
    "Partnerships", 
    "Volunteer Stories"
  ];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);
  
  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <div className="pt-20">
      <h1 className="visually-hidden-important">News and Stories — Impact Stories and Articles from TEK Foundation</h1>
      <SEO 
        title="News & Stories | Impact Stories & Articles | TEK Foundation"
        description="Read the latest impact stories, articles, and updates from TEK Foundation — Nigeria's community-driven NGO fighting hunger and poverty one family at a time."
        canonical="https://www.tekfoundation.org/news-and-stories"
      />
      {/* HERO SECTION */}
      <section className="bg-cream py-20 text-center border-b border-gray-200">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-6xl text-forest mb-4"
          >
            News & Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-gray-600"
          >
            Read about the lives we're touching and the latest updates from our team.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* MAIN CONTENT */}
          <div className="lg:col-span-3">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-cream rounded-2xl border border-dashed border-gray-200">
                <h2 className="text-2xl font-bold text-gray-400 mb-2">No stories in this category yet. Check back soon!</h2>
                <p className="text-gray-500 mb-6">There are currently no articles in the "{selectedCategory}" category.</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="bg-forest hover:bg-deep-green text-white px-6 py-2 rounded-full font-bold transition-colors text-sm shadow-sm"
                >
                  View All Stories
                </button>
              </div>
            ) : (
              <>
                {/* Featured Post */}
                {featuredPost && (
                  <Link to={`/news/${featuredPost.slug}`} className="block mb-12 group cursor-pointer">
                    <div className="rounded-2xl overflow-hidden shadow-lg mb-6 relative">
                      <img loading="lazy" 
                        src={featuredPost.featuredImage} 
                        alt={featuredPost.imageAlt} 
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Featured
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><User size={14} /> TEK Foundation</span>
                      <span className="flex items-center gap-1"><Tag size={14} /> {featuredPost.category}</span>
                    </div>
                    <h2 className="font-heading font-bold text-3xl text-deep-green mb-4 group-hover:text-gold transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-4 line-clamp-3">
                      {featuredPost.metaDescription}
                    </p>
                    <span className="text-forest font-bold inline-flex items-center group-hover:translate-x-2 transition-transform">
                      Read Full Story <ArrowRight size={18} className="ml-2" />
                    </span>
                  </Link>
                )}
    
                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {otherPosts.map((post) => (
                    <Link key={post.id} to={`/news/${post.slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border border-gray-100 block">
                      <div className="h-48 overflow-hidden">
                        <img loading="lazy" 
                          src={post.featuredImage} 
                          alt={post.imageAlt} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                          <span className="text-gold font-bold uppercase">{post.category}</span>
                          <span>•</span>
                          <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                        </div>
                        <h3 className="font-heading font-bold text-xl text-deep-green mb-3 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.metaDescription}
                        </p>
                        <span className="text-forest text-sm font-bold hover:underline">Read More</span>
                      </div>
                    </Link>
                  ))}
                </div>
    
                {/* Pagination (Placeholder for now) */}
                {filteredPosts.length > 10 && (
                  <div className="flex justify-center gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-colors">1</button>
                    <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-colors"><ArrowRight size={16} /></button>
                  </div>
                )}
              </>
            )}
          </div>
  
          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-heading font-bold text-xl text-deep-green mb-6 pb-2 border-b border-gray-100">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`flex justify-between items-center transition-colors group w-full text-left py-2 px-3 rounded-lg text-sm ${
                        selectedCategory === cat 
                          ? "text-gold font-bold bg-gold/5" 
                          : "text-gray-600 hover:text-gold hover:bg-gray-50"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        selectedCategory === cat 
                          ? "bg-gold/10 text-gold" 
                          : "bg-gray-100 text-gray-500 group-hover:bg-gold/10 group-hover:text-gold"
                      }`}>
                        {cat === "All" 
                          ? blogPosts.length 
                          : blogPosts.filter(p => p.category === cat).length}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
  
              <div className="mt-10">
                <h3 className="font-heading font-bold text-xl text-deep-green mb-6 pb-2 border-b border-gray-100">Newsletter</h3>
                <p className="text-sm text-gray-500 mb-4">Subscribe to get the latest stories delivered to your inbox.</p>
                <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg mb-3 text-sm" />
                <button className="w-full bg-forest text-white py-3 rounded-lg font-bold text-sm hover:bg-deep-green transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
  
        </div>
      </div>

      {/* UPCOMING EVENTS SECTION */}
      <section id="events" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-4">Upcoming Events</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-md border border-gold/10">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              {/* Event Content Details */}
              <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gold uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping"></span>
                    Ongoing
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-deep-green mb-3">
                    "Project ExcelHer Initiative"
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    An inspiring outreach program focused on mentoring, mindset transformation, and empowering young girls in Nigeria.
                  </p>
                  
                  {/* Proposed Date Format */}
                  <div className="bg-cream/60 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gold/5 flex items-start gap-3">
                    <Calendar className="text-gold mt-0.5 shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-deep-green text-sm">Proposed Date</div>
                      <div className="text-xs text-gray-500 font-mono mt-0.5">TBA (To be communicated soon)</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    onClick={() => setIsFlyerOpen(true)}
                    className="w-full sm:w-auto bg-forest hover:bg-deep-green text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-sm text-center cursor-pointer"
                  >
                    View Flyer Details
                  </button>
                </div>
              </div>

              {/* Flyer Thumbnail on the Right */}
              <div className="p-8 md:p-12 md:col-span-5 bg-cream/40 flex justify-center items-center border-t md:border-t-0 md:border-l border-gold/10 h-full min-h-[320px]">
                <div 
                  onClick={() => setIsFlyerOpen(true)}
                  className="relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-md max-w-[240px] border border-gray-100 transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  <img 
                    src={excelherFlyer} 
                    alt="Project ExcelHer Initiative Outreach Flyer" 
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white gap-2">
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider">
                      Click to Enlarge
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLYER LIGHTBOX MODAL */}
      {isFlyerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 flex flex-col items-center"
          >
            <button 
              onClick={() => setIsFlyerOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <div className="text-center mt-2 mb-4 px-8">
              <h4 className="font-heading font-bold text-xl text-deep-green">"Project ExcelHer Initiative" Flyer</h4>
              <p className="text-xs text-gray-500 mt-1">Proposed Date: TBA (To be communicated soon)</p>
            </div>

            <div className="relative w-full max-h-[70vh] overflow-hidden rounded-2xl border border-gray-100">
              <img 
                src={excelherFlyer} 
                alt="Project ExcelHer Initiative Outreach Flyer" 
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[70vh] object-contain mx-auto"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default News;
