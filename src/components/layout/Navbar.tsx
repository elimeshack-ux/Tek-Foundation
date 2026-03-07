import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'News & Stories', path: '/news-and-stories' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-white">
            <img 
              src="https://lh3.googleusercontent.com/d/1q_3Vo7U9HviBsQofRwcdMMhgeefi0LDg" 
              alt="TEK Foundation Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className={cn("font-heading font-bold text-xl lg:text-2xl", scrolled ? "text-forest" : "text-white")}>
            TEK Foundation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-gold",
                location.pathname === link.path 
                  ? "text-gold" 
                  : (scrolled ? "text-deep-green" : "text-white/90")
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/get-involved"
            className="bg-gold hover:bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Heart size={16} fill="currentColor" />
            Get Involved
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 text-gold"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? "text-forest" : "text-white"} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-forest/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-2xl font-heading font-bold transition-colors",
                    location.pathname === link.path ? "text-gold" : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/get-involved"
                className="bg-gold text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg mt-4"
              >
                Get Involved
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
