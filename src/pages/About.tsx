import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Leaf, Users, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="pt-20">
      <h1 className="visually-hidden-important">About TEK Foundation — Our Mission, Vision and Team</h1>
      <SEO 
        title="About TEK Foundation | Our Mission, Vision & Team"
        description="Learn about TEK Foundation — a Nigerian NGO dedicated to ending hunger through dignified food access, community empowerment, and sustainable development across Lagos and beyond."
        canonical="https://www.tekfoundation.org/about"
      />
      {/* HERO SECTION */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img loading="lazy" 
            src="/images/hero-about.jpg" 
            alt="TEK Foundation Team" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 32%', transform: 'scale(1.1)', transformOrigin: 'center 32%' }}
          />
          <div className="absolute inset-0 bg-deep-green/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4">About TEK Foundation</h1>
          <div className="flex justify-center items-center gap-2 text-white/80 text-sm font-semibold tracking-wider">
            <span style={{ color: 'white' }}>Our story.</span>
            <span style={{ color: '#F4C542' }}>Our mission.</span>
            <span style={{ color: 'white' }}>Our people.</span>
          </div>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gold rounded-full mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Some stories begin with a plan. Ours began with a calling.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                TEK Foundation was born from a simple act of obedience to God's leading. With no grand strategy or abundant resources, it began with a desire to share whatever was available with those in need at the end of each year. It was never about the size of the gift; it was about ensuring that someone, somewhere, felt seen, valued, and loved.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At the heart of TEK Foundation is a simple but profound belief: <strong className="font-bold text-forest">"No matter how little, you can aid a smile."</strong> We believe that kindness is not measured by the abundance of our resources but by the willingness of our hearts. After all, <em className="italic">if you cannot give from your little, you will not give when you have much.</em> True generosity begins long before abundance, it begins with compassion.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a personal act of kindness has grown into a movement dedicated to restoring hope, empowering communities, and inspiring a culture of generosity. Every outreach, every life impacted, and every smile restored reminds us that lasting change often begins with one person choosing to care.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, TEK Foundation continues to champion purposeful acts of kindness, proving that ordinary people can make an extraordinary difference when they choose compassion over convenience. Because when one person chooses to care, a smile is restored. And when many choose to care, communities are transformed.
              </p>
              
              <div className="my-8 border-l-4 border-gold pl-6 py-3 bg-cream/50 rounded-r-lg">
                <p className="text-xl text-forest font-bold leading-relaxed italic">
                  "No matter how little, you can aid a smile."
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <p className="text-lg font-bold text-gray-900">
                  Mrs. Timinimi Ediseimokumor Ikechukwu
                </p>
                <p className="text-sm font-bold text-gold italic">
                  Founder, TEK Foundation
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl z-0"></div>
              <img loading="lazy" 
                src="/images/founder.jpg" 
                alt="Our founding story" 
                referrerPolicy="no-referrer"
                className="rounded-2xl shadow-xl relative z-10 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-gold"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                <Star size={32} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-deep-green mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To build trusted, scalable hunger-response and empowerment infrastructure across Africa, ensuring that no individual is trapped by hunger or economic vulnerability.
              </p>
            </div>

            <div 
              className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-forest"
            >
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mb-6 text-forest">
                <Leaf size={32} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-deep-green mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide structured, dignified access to food and empowerment opportunities for underserved individuals through accountable systems and strategic partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Heart, title: "Dignity First", desc: "We protect the identity and privacy of beneficiaries." },
              { icon: ShieldCheck, title: "Accountability", desc: "Every intervention is trackable and measurable." },
              { icon: Leaf, title: "Sustainability Over Noise", desc: "We build systems, not seasonal charity." },
              { icon: Users, title: "Strategic Partnerships", desc: "Collaboration drives scale." },
              { icon: Star, title: "Impact-Driven Decisions", desc: "Data and outcomes guide growth." }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:bg-cream transition-colors group"
              >
                <div className="w-14 h-14 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors shadow-md">
                  <value.icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-lg text-deep-green mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-forest text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "/images/teams/team_board.jpg", title: "The Board", link: "/team/board" },
              { image: "/images/teams/team_executive.jpg", title: "Executive Team", link: "/team/executive" },
              { image: "/images/teams/team_programs.jpg", title: "Programs Team", link: "/team/programs" },
              { image: "/images/teams/team_media.jpg", title: "Media & Publicity Team", link: "/team/media" },
              { image: "/images/teams/team_product.jpg", title: "Product Team", link: "/team/product" },
              { image: "/images/teams/team_operations.jpg", title: "Operations Team", link: "/team/operations" }
            ].map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={category.link} className="block group h-full">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold transition-all duration-300 group-hover:-translate-y-1 h-64 flex items-center justify-center text-center">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10" />
                    <div className="relative z-20 px-6">
                      <h3 className="font-heading font-bold text-2xl text-white">{category.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-12">Our Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-12">
            <div className="flex items-center justify-center p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all bg-white w-full max-w-lg aspect-square">
              <img loading="lazy" 
                src="/images/partners/partner1.jpg" 
                alt="ZenithPro Energy Ltd" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all bg-white w-full max-w-lg aspect-square">
              <img loading="lazy" 
                src="/images/partners/partner2.jpg" 
                alt="S. Efejuku & Co" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all bg-white w-full max-w-lg aspect-square">
              <img loading="lazy" 
                src="/images/partners/lawma.png" 
                alt="Lagos Waste Management Authority (LAWMA)" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 border-2 border-forest text-forest font-bold rounded-full hover:bg-forest hover:text-white transition-colors">
            Become a Partner <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
