import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import CountUp from '../components/ui/CountUp';

const OurWork = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Our Work | Food Distribution, Outreach & Empowerment | TEK Foundation"
        description="From monthly food distributions to community outreach programs, discover how TEK Foundation creates lasting impact in underserved communities across Nigeria."
        canonical="https://www.tekfoundation.org/our-work"
      />
      {/* HERO SECTION */}
      <section className="bg-forest text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-6xl mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-white/90"
          >
            Through our targeted programs, we are building a hunger-free Nigeria, one community at a time.
          </motion.p>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-24">
          {/* Program 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-gold/20 text-gold font-bold px-4 py-1 rounded-full text-sm mb-4">Program 01</div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Food Distribution Program</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our flagship initiative focuses on immediate hunger relief. We identify vulnerable households and provide them with monthly food packages containing essential staples like rice, beans, oil, and garri.
              </p>
              <ul className="space-y-3 mb-8">
                {["Nutritious balanced meals", "Monthly delivery schedule", "Focus on widows and elderly"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold mb-8">
                <div className="font-bold text-3xl text-forest mb-1 flex items-center">
                  <CountUp to={5000} />+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Meals Served Annually</div>
              </div>
              <Link to="/get-involved" className="bg-forest hover:bg-deep-green text-white px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center">
                Support This Program <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img src="https://lh3.googleusercontent.com/d/1LIMKgTBXm8S0boxTc-77ktmVGw427A9t" alt="Food Distribution" className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover" />
            </motion.div>
          </div>

          {/* Program 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://lh3.googleusercontent.com/d/1QA5wXpWrQU7K_JPNEmksXtVhDFGFMIWy" alt="Community Outreach" className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gold/20 text-gold font-bold px-4 py-1 rounded-full text-sm mb-4">Program 02</div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Community Outreach</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We go beyond food. Our outreach teams engage with communities to understand their unique challenges, providing health screenings, nutritional education, and emotional support.
              </p>
              <ul className="space-y-3 mb-8">
                {["Health & wellness checks", "Nutritional workshops", "Community listening sessions"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold mb-8">
                <div className="font-bold text-3xl text-forest mb-1 flex items-center">
                  <CountUp to={20} />+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Communities Reached</div>
              </div>
              <Link to="/get-involved" className="bg-forest hover:bg-deep-green text-white px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center">
                Volunteer With Us <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Program 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-gold/20 text-gold font-bold px-4 py-1 rounded-full text-sm mb-4">Program 03</div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Sustainable Solutions</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To truly end hunger, we must empower families to feed themselves. We provide small business grants, agricultural training, and vocational skills to help beneficiaries become self-reliant.
              </p>
              <ul className="space-y-3 mb-8">
                {["Small business grants", "Urban farming training", "Vocational skills workshops"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold mb-8">
                <div className="font-bold text-3xl text-forest mb-1 flex items-center">
                  <CountUp to={150} />+
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">Families Empowered</div>
              </div>
              <Link to="/get-involved" className="bg-forest hover:bg-deep-green text-white px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center">
                Partner For Impact <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img src="https://lh3.googleusercontent.com/d/1svG-yehYtVYjDrCnTpGjGIPrLyjSXzl-" alt="Sustainable Solutions" className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-4">Success Stories</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((story) => (
              <motion.div 
                key={story}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-md relative"
              >
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gold text-white flex items-center justify-center rounded-full text-4xl font-serif font-bold">"</div>
                <p className="text-gray-600 italic mb-6 mt-4">
                  "The food package came just when I had lost all hope. TEK Foundation didn't just give me food; they gave me the strength to keep going for my children."
                </p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/face${story}/100/100`} alt="Beneficiary" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-deep-green">Mrs. Adebayo</h4>
                    <p className="text-xs text-gray-500 uppercase">Beneficiary, Lagos</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-4">Gallery</h2>
            <p className="text-gray-600">Glimpses of our impact on the ground.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://lh3.googleusercontent.com/d/1OHiRj6NiUgblDmUbk5NVfhb5ewslR5V3",
              "https://lh3.googleusercontent.com/d/1Q557IGIqOfiza7ezixBVCns7we9VDn_b",
              "https://lh3.googleusercontent.com/d/1Fhhp2-HB8b4Skzv7ktqHfcyZ2wl9KgvO",
              "https://lh3.googleusercontent.com/d/1ydenDohOX9FLtbN5Ix8D3JNAuvwFa2bn",
              "https://lh3.googleusercontent.com/d/19-mvgdSSZs59cVeUwvNi7fjkySRTgKA2",
              "https://lh3.googleusercontent.com/d/1txe-T6lFEmqZD_b0TkBCQMAMntEcPrFK",
              "https://lh3.googleusercontent.com/d/1n-lzmoWQb8fiiYT5fxRFFzjaLcqrAtcd",
              "https://lh3.googleusercontent.com/d/1svG-yehYtVYjDrCnTpGjGIPrLyjSXzl-"
            ].map((imgUrl, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl overflow-hidden shadow-sm cursor-pointer ${
                  index === 0 || index === 7 
                    ? 'col-span-2 row-span-2 h-[25rem] md:h-[33rem]' 
                    : 'col-span-1 row-span-1 h-48 md:h-64'
                }`}
              >
                <img 
                  src={imgUrl} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
