import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { useEffect } from 'react';
import Logo from '@/components/ui/Logo';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-3xl font-bold text-forest mb-4">Article Not Found</h1>
        <Link to="/news-and-stories" className="text-gold hover:underline">Back to News & Stories</Link>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.featuredImage,
    "author": {
      "@type": "Organization",
      "name": "TEK Foundation",
      "url": "https://www.tekfoundation.org"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TEK Foundation",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.tekfoundation.org/images/logo-tek.png"
      }
    },
    "datePublished": post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.tekfoundation.org/news/${post.slug}`
    }
  };

  // Get related articles (excluding current one)
  const relatedArticles = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="pt-20">
      <SEO 
        title={post.pageTitle || `${post.title} | TEK Foundation`}
        description={post.metaDescription}
        canonical={`https://www.tekfoundation.org/news/${post.slug}`}
        ogType="article"
        ogImage={post.featuredImage}
        schema={articleSchema}
      />

      <article>
        {/* Header Section */}
        <div className="bg-cream py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/news-and-stories" className="inline-flex items-center text-forest font-semibold mb-6 hover:text-gold transition-colors">
              <ArrowLeft size={18} className="mr-2" /> Back to News
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gold text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-deep-green mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <User size={18} className="text-gold" />
                <span className="font-semibold text-forest">TEK Foundation</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-gold" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-gold" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 max-w-5xl -mt-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={post.featuredImage} 
              alt={post.imageAlt} 
              referrerPolicy="no-referrer"
              className="w-full h-[300px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 max-w-3xl mb-16">
          <div 
            className="prose prose-lg prose-headings:font-heading prose-headings:text-deep-green prose-a:text-gold hover:prose-a:text-forest prose-img:rounded-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Share Section */}
          <div className="border-t border-b border-gray-200 py-8 my-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="font-heading font-bold text-xl text-deep-green flex items-center gap-2">
              <Share2 size={20} /> Share this article
            </h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                <Linkedin size={18} />
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-cream p-8 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <Logo className="w-20 h-20 shrink-0 shadow-sm" textClassName="text-2xl" />
            <div>
              <h3 className="font-heading font-bold text-xl text-deep-green mb-2">About TEK Foundation</h3>
              <p className="text-gray-600">
                We are a Nigerian NGO dedicated to tackling poverty and food insecurity through dignified food access, community outreach, and sustainable empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-forest text-white py-16 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading font-bold text-3xl mb-4">Help Us Write More Success Stories</h2>
            <p className="text-lg opacity-90 mb-8">
              Your support enables us to continue our work in communities across Nigeria. Join us in making a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved" className="bg-gold hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg">
                Donate Now
              </Link>
              <Link to="/get-involved" className="bg-transparent border-2 border-white hover:bg-white hover:text-forest text-white px-8 py-3 rounded-full font-bold transition-colors">
                Volunteer
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="font-heading font-bold text-3xl text-deep-green mb-10 text-center">Related Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map(article => (
                  <Link key={article.id} to={`/news/${article.slug}`} className="group block">
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={article.featuredImage} 
                          alt={article.imageAlt} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{article.category}</div>
                        <h3 className="font-heading font-bold text-lg text-deep-green mb-3 group-hover:text-gold transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <div className="mt-auto text-sm text-gray-500 flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
