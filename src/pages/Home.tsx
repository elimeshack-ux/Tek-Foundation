import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Users, Handshake, Utensils, Sprout, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import CountUp from '../components/ui/CountUp';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Get latest 3 blog posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, 3);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "TEK Foundation",
    "url": "https://www.tekfoundation.org",
    "logo": "https://www.tekfoundation.org/images/tek-logo.png",
    "description": "A Nigerian NGO dedicated to tackling poverty and food insecurity through dignified food access, community outreach, and sustainable empowerment.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://www.instagram.com/tek_foundation",
      "https://www.linkedin.com/company/tek-foundation"
    ]
  };

  return (
    <div className="overflow-hidden">
      <h1 className="visually-hidden-important">TEK Foundation — Fighting Hunger & Food Insecurity in Nigeria</h1>
      <SEO 
        title="TEK Foundation | Fighting Hunger & Poverty in Nigeria"
        description="TEK Foundation is a Lagos-based NGO providing monthly food packages, community outreach, and sustainable solutions to tackle food insecurity across Nigeria. Join us in building a hunger-free Nigeria."
        canonical="https://www.tekfoundation.org/"
        schema={orgSchema}
      />
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1rEhjJGgOBPur6CtSVQ_HpEXyKVlr3Rui" 
            alt="Community food distribution" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight"
          >
            Tackling Poverty & <br/>Food Insecurity in Nigeria
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl mb-8 max-w-3xl mx-auto font-light"
          >
            Every family deserves dignified access to food. Join us in building a Nigeria where no one goes hungry.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/get-involved" 
              className="bg-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-forest text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              TEK Foundation is dedicated to tackling poverty and food insecurity in Nigeria by expanding dignified access to food and empowerment through accountable systems and strategic partnerships.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Utensils, title: "Provide Meals", desc: "Ensuring no family goes to bed hungry through direct food assistance." },
              { icon: Sprout, title: "Create Solutions", desc: "Empowering communities with sustainable agriculture and skills." },
              { icon: Handshake, title: "Build Partnerships", desc: "Collaborating with stakeholders to maximize impact and reach." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-cream p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6 text-forest">
                  <item.icon size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl text-deep-green mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. IMPACT STATISTICS SECTION */}
      <section className="py-20 bg-forest text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
            {[
              { number: 5000, suffix: "+", label: "Meals Served" },
              { number: 20, suffix: "+", label: "Communities Reached" },
              { number: 100, suffix: "+", label: "Active Volunteers" },
              { number: 50, suffix: "+", label: "Corporate Partners" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-heading font-bold text-3xl md:text-4xl text-gold mb-2 flex justify-center items-center">
                  <CountUp to={stat.number} />{stat.suffix}
                </div>
                <div className="text-sm md:text-base font-medium opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/our-work" 
              className="inline-flex items-center text-gold hover:text-white transition-colors font-semibold group">
              See Our Full Impact Report 
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-4">What We Do</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Food Distribution", 
                desc: "Monthly food packages delivered directly to families in need.",
                image: "https://lh3.googleusercontent.com/d/1LIMKgTBXm8S0boxTc-77ktmVGw427A9t"
              },
              { 
                title: "Community Outreach", 
                desc: "On-the-ground engagement with vulnerable communities.",
                image: "https://lh3.googleusercontent.com/d/1QA5wXpWrQU7K_JPNEmksXtVhDFGFMIWy"
              },
              { 
                title: "Sustainable Solutions", 
                desc: "Long-term programs that empower communities to achieve food security.",
                image: "https://lh3.googleusercontent.com/d/1svG-yehYtVYjDrCnTpGjGIPrLyjSXzl-"
              }
            ].map((program, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-bold text-xl text-deep-green mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.desc}</p>
                  <Link to="/our-work" className="text-forest font-bold hover:text-gold transition-colors inline-flex items-center">
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LATEST STORIES SECTION */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-2">Latest Stories</h2>
              <div className="w-20 h-1 bg-gold rounded-full"></div>
            </div>
            <Link to="/news-and-stories" className="hidden md:inline-flex items-center text-forest font-semibold hover:text-gold transition-colors">
              View All Stories <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.imageAlt} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">{post.category}</div>
                  <Link to={`/blog/${post.slug}`} className="block">
                    <h3 className="font-heading font-bold text-lg text-deep-green mb-3 hover:text-gold transition-colors line-clamp-2">{post.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {post.metaDescription}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="text-forest font-semibold text-sm hover:text-gold transition-colors mt-auto inline-flex items-center">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center md:hidden">
            <Link to="/news-and-stories" className="btn-secondary inline-flex items-center">
              View All Stories <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CALL-TO-ACTION SECTION */}
      <section className="py-24 bg-forest text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl md:text-5xl mb-6"
          >
            Be Part of the Solution
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90"
          >
            Whether you donate, volunteer, or spread the word, every action brings us closer to a hunger-free Nigeria.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/get-involved" 
              className="bg-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105"
            >
              Donate Now
            </Link>
            <Link 
              to="/get-involved" 
              className="bg-white text-forest hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105"
            >
              Volunteer
            </Link>
            <Link 
              to="/get-involved" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="visually-hidden-important" aria-hidden="true">
        TEK Foundation is a Nigerian non-governmental organisation dedicated to tackling poverty and food insecurity in Nigeria. Based in Lagos, we operate monthly food distribution outreaches that deliver nutritious food packages directly to vulnerable families in underserved communities. Our work is built on three pillars: providing meals and sustainable solutions, tackling poverty and food insecurity, and empowering communities through accountable systems. We serve families in communities across Lagos including Ajegunle, Mushin, Makoko, and beyond. Over 25 million Nigerians are at risk of acute food insecurity. TEK Foundation exists to close the gap between need and response — one family, one meal, one community at a time. Whether you are looking to donate, volunteer, or partner with us as a corporate sponsor fulfilling your CSR mandate, TEK Foundation welcomes you. Together we can build a Nigeria where no family goes to bed hungry. Follow us on Instagram at tek_foundation and on LinkedIn at TEK Foundation for regular updates, impact stories, and community news.
      </div>
    </div>
  );
};

export default Home;
