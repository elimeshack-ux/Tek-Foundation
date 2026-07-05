import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ProgramGalleryCards from '../components/ProgramGalleryCards';

const OurWork = () => {
  return (
    <div className="pt-20">
      <h1 className="visually-hidden-important">Our Work — Food Distribution, Community Outreach and Sustainable Solutions</h1>
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
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Aid-A-Meal Africa</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Aid-A-Meal Africa is the Foundation's flagship hunger-response initiative designed to provide consistent and dignified access to quality meals for individuals experiencing food insecurity. The initiative aims to ensure that at least one person receives a meal every day while building partnerships that can scale the program across Africa.
              </p>
              <ul className="space-y-3 mb-8">
                {["Partnerships with restaurants, FMCGs & vendors", "Pilot phase at YABATECH & UNILAG", "Web & mobile app for donor sponsorship tracking"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold mb-8">
                <div className="font-bold text-3xl text-forest mb-1 flex items-center">
                  2 Pilot Campuses
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">IN LAGOS STATE</div>
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
              <img src="/images/gallery/aid-a-meal/photo3.jpg" alt="Aid-A-Meal Africa" referrerPolicy="no-referrer" className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover" />
            </motion.div>
          </div>

          {/* Program 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/images/gallery/project-santa/photo1.jpg" alt="Project Santa" referrerPolicy="no-referrer" className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gold/20 text-gold font-bold px-4 py-1 rounded-full text-sm mb-4">Program 02</div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Project Santa</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Project Santa is an annual outreach program held during the Christmas season to share relief materials with vulnerable communities, including widows, orphans, vulnerable women, and underserved families.
              </p>
              <ul className="space-y-3 mb-8">
                {["Foodstuff & groceries distribution", "Cooked meals for vulnerable families", "Essential household supplies"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold mb-8">
                <div className="font-bold text-3xl text-forest mb-1 flex items-center">
                  Annual Outreach
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">EVERY CHRISTMAS SEASON</div>
              </div>
              <Link to="/get-involved" className="bg-forest hover:bg-deep-green text-white px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center">
                Support This Program <ArrowRight size={18} className="ml-2" />
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
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Project RACK</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Project RACK is a quarterly community initiative designed to identify individuals working hard to make ends meet despite difficult circumstances. The Foundation listens to their stories and provides targeted support to help them sustain their businesses or livelihoods.
              </p>
              <ul className="space-y-3 mb-8">
                {["Small business funding", "Tools or equipment support", "Market merchandise purchase & redistribution"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold mb-8">
                <div className="font-bold text-3xl text-forest mb-1 flex items-center">
                  ₦50,000 – ₦100,000
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">PER INTERVENTION CYCLE</div>
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
              <img src="/images/gallery/project-rack/photo1.jpg" alt="Project RACK" referrerPolicy="no-referrer" className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover" />
            </motion.div>
          </div>

          {/* Program 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="/images/gallery/excelher-featured.jpg" alt="ExcelHER Initiative" referrerPolicy="no-referrer" className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gold/20 text-gold font-bold px-4 py-1 rounded-full text-sm mb-4">Program 04</div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">ExcelHER Initiative</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ExcelHER is a biannual program which focuses on inspiring and empowering young girls through mentorship, mindset transformation, and educational support.
              </p>
              <ul className="space-y-3 mb-8">
                {["School outreach programs", "Inspirational talks", "Mini scholarships for exceptional students"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold mb-8">
                <div className="font-bold text-3xl text-forest mb-1 flex items-center">
                  Biannual Program
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">GIRL-CHILD EMPOWERMENT</div>
              </div>
              <Link to="/get-involved" className="bg-forest hover:bg-deep-green text-white px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center">
                Support This Program <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Program 5 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="inline-block bg-gold/20 text-gold font-bold px-4 py-1 rounded-full text-sm mb-4">Program 05</div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Project GFL</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Project GFL is an annual outreach initiative that supports mothers raising children with cerebral palsy, providing emotional encouragement, relief materials, and community awareness.
              </p>
              <ul className="space-y-3 mb-8">
                {["Emotional encouragement & support networks", "Relief materials for caregivers", "Community awareness about cerebral palsy"].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-gold mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-cream p-6 rounded-xl border-l-4 border-gold mb-8">
                <div className="font-bold text-3xl text-forest mb-1 flex items-center">
                  Annual Support
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">FOR CEREBRAL PALSY FAMILIES</div>
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
              <img src="/images/gallery/project-gfl/photo1.jpg" alt="Project GFL" referrerPolicy="no-referrer" className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover" />
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
                  <img src={`https://picsum.photos/seed/face${story}/100/100`} alt="Beneficiary" referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover" />
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
      <ProgramGalleryCards />
    </div>
  );
};

export default OurWork;
