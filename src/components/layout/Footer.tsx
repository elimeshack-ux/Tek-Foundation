import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://lh3.googleusercontent.com/d/1rc_UZZ6o7oTJr5pTsHn5R1qaFBbC0rO9" 
                alt="TEK Foundation Logo" 
                className="transparent-logo object-contain"
                style={{ height: '100px', width: 'auto' }}
                referrerPolicy="no-referrer"
              />
              <span className="font-heading font-bold text-xl">TEK Foundation</span>
            </div>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Tackling poverty and food insecurity in Nigeria by expanding dignified access to food and empowerment through accountable systems and strategic partnerships.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/tek_foundation" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/tek-foundation" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-gold transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/tek_foundation" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-gold transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://facebook.com/tek_foundation" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-gold transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/80 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/our-work" className="text-white/80 hover:text-gold transition-colors">Our Work</Link></li>
              <li><Link to="/get-involved" className="text-white/80 hover:text-gold transition-colors">Get Involved</Link></li>
              <li><Link to="/news-and-stories" className="text-white/80 hover:text-gold transition-colors">News & Stories</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-gold shrink-0 mt-1" size={18} />
                <a href="mailto:tekfoundationnigeria@gmail.com" className="text-white/80 hover:text-gold transition-colors break-all">tekfoundationnigeria@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-gold shrink-0 mt-1" size={18} />
                <a href="tel:+2349161315025" className="text-white/80 hover:text-gold transition-colors">+234 916 131 5025</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-gold shrink-0 mt-1" size={18} />
                <span className="text-white/80">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-gold">Newsletter</h3>
            <p className="text-white/80 mb-4 text-sm">Subscribe to receive updates on our impact and upcoming events.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-gold hover:bg-yellow-500 text-white font-bold py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} TEK Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
