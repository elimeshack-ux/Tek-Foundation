import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, ShieldCheck, Leaf, Users, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="About TEK Foundation | Our Mission, Vision & Team"
        description="Learn about TEK Foundation — a Nigerian NGO dedicated to ending hunger through dignified food access, community empowerment, and sustainable development."
        canonical="https://www.tekfoundation.org/about"
      />
      {/* HERO SECTION */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1OLhI0vN_5rqjwONl1iYk7S8Spd9Kq-cq" 
            alt="TEK Foundation Team" 
            className="w-full h-full object-cover object-[center_25%]"
          />
          <div className="absolute inset-0 bg-forest/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4">About TEK Foundation</h1>
          <div className="flex justify-center items-center gap-2 text-white/80 text-sm font-semibold uppercase tracking-wider">
            <span>Home</span>
            <span>&gt;</span>
            <span className="text-gold">About Us</span>
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
                Founded in Lagos, Nigeria, TEK Foundation emerged from a simple yet powerful observation: that hunger is not just about a lack of food, but a lack of access and opportunity.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a small group of volunteers distributing meals on weekends has grown into a structured organization committed to systemic change. We believe that by addressing immediate hunger while simultaneously building long-term capacity, we can break the cycle of poverty.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-serif-italic border-l-4 border-gold pl-6 py-2 bg-cream/50 rounded-r-lg">
                "We don't just feed people; we nourish hope and empower futures."
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl z-0"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1q_3Vo7U9HviBsQofRwcdMMhgeefi0LDg" 
                alt="Our founding story" 
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
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-forest"
            >
              <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mb-6 text-forest">
                <Leaf size={32} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-deep-green mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                TEK Foundation is dedicated to tackling poverty and food insecurity in Nigeria by expanding dignified access to food and empowerment through accountable systems and strategic partnerships.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-2xl shadow-md border-t-4 border-gold"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 text-gold">
                <Star size={32} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-deep-green mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A Nigeria where every individual has dignified access to nutritious food and the opportunity to thrive, free from the constraints of poverty and hunger.
              </p>
            </motion.div>
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
              { icon: Heart, title: "Compassion", desc: "We serve with empathy and kindness." },
              { icon: ShieldCheck, title: "Accountability", desc: "We are transparent in all our actions." },
              { icon: Leaf, title: "Sustainability", desc: "We build long-term solutions." },
              { icon: Users, title: "Collaboration", desc: "We work together for greater impact." },
              { icon: Star, title: "Excellence", desc: "We strive for the highest standards." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-cream transition-colors group"
              >
                <div className="w-14 h-14 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors shadow-md">
                  <value.icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-lg text-deep-green mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </motion.div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <motion.div 
                key={member}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-gold transition-colors"
              >
                <img 
                  src={`https://picsum.photos/seed/person${member}/400/400`} 
                  alt="Team Member" 
                  className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-xl mb-1">Team Member {member}</h3>
                  <p className="text-gold text-sm font-medium uppercase tracking-wider mb-3">Position Title</p>
                  <p className="text-white/70 text-sm">Dedicated to making a difference in our community.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-12">Our Partners</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="flex items-center justify-center p-8 border border-gray-100 rounded-xl">
                <div className="text-2xl font-bold text-gray-400">PARTNER LOGO</div>
              </div>
            ))}
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
