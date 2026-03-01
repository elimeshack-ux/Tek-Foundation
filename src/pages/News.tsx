import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';

const News = () => {
  const categories = ["All", "Impact Stories", "News & Updates", "Educational", "Partnerships", "Volunteer Stories"];
  
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <div className="pt-20">
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
        {blogPosts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400">No stories published yet. Check back soon!</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* MAIN CONTENT */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {featuredPost && (
                <Link to={`/blog/${featuredPost.slug}`} className="block mb-12 group cursor-pointer">
                  <div className="rounded-2xl overflow-hidden shadow-lg mb-6 relative">
                    <img 
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
                  <Link key={post.id} to={`/blog/${post.slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border border-gray-100 block">
                    <div className="h-48 overflow-hidden">
                      <img 
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
              {blogPosts.length > 10 && (
                <div className="flex justify-center gap-2">
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-colors">1</button>
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-forest hover:text-white hover:border-forest transition-colors"><ArrowRight size={16} /></button>
                </div>
              )}
            </div>
  
            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                <h3 className="font-heading font-bold text-xl text-deep-green mb-6 pb-2 border-b border-gray-100">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <button className="flex justify-between items-center text-gray-600 hover:text-gold transition-colors group w-full text-left">
                        <span>{cat}</span>
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
        )}
      </div>
    </div>
  );
};

export default News;
