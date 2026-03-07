import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="pt-20">
      <h1 className="visually-hidden-important">Contact TEK Foundation — Donate, Volunteer or Partner With Us</h1>
      <SEO 
        title="Contact TEK Foundation | Partner, Volunteer or Donate"
        description="Get in touch with TEK Foundation to donate, volunteer, or explore partnership opportunities. Together we can build a hunger-free Nigeria."
        canonical="https://www.tekfoundation.org/contact"
      />
      {/* HERO SECTION */}
      <section className="bg-forest text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-6xl mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-white/90"
          >
            We'd love to hear from you. Whether you have a question, want to volunteer, or just want to say hello.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO & FORM SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-8">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Have questions about our programs? Want to partner with us? Reach out using the contact information below or fill out the form.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-green text-lg mb-1">Email Us</h4>
                    <a href="mailto:tekfoundationnigeria@gmail.com" className="text-gray-600 hover:text-gold transition-colors">tekfoundationnigeria@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-green text-lg mb-1">Call Us</h4>
                    <a href="tel:+2349161315025" className="text-gray-600 hover:text-gold transition-colors">+234 916 131 5025</a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-green text-lg mb-1">Visit Us</h4>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                    <p className="text-sm text-gray-500 mt-1">Office Hours: Mon-Fri, 9AM-5PM WAT</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-deep-green text-lg mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, link: "https://instagram.com/tek_foundation" },
                    { icon: Linkedin, link: "https://linkedin.com/company/tek-foundation" },
                    { icon: Facebook, link: "https://facebook.com/tek_foundation" },
                    { icon: Twitter, link: "https://twitter.com/tek_foundation" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-forest text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cream p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="font-heading font-bold text-2xl text-deep-green mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="John Doe" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input type="email" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="+234..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <div className="relative">
                    <select className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all appearance-none bg-white">
                      <option>General Inquiry</option>
                      <option>Donation Support</option>
                      <option>Volunteer Opportunities</option>
                      <option>Partnership Proposal</option>
                      <option>Media Inquiry</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea rows={5} className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="w-full bg-gold hover:bg-yellow-500 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MAP SECTION (Placeholder) */}
      <section className="h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
          <p className="text-gray-500 font-bold text-xl">Google Maps Integration Placeholder</p>
        </div>
        {/* In a real app, you would embed a Google Map iframe here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728925574366!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1625000000000!5m2!1sen!2sng" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Map Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
