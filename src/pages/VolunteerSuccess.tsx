import { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Heart, ArrowRight, CheckCircle, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import XIcon from '../components/ui/XIcon';

const VolunteerSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, volunteerType } = location.state || { 
    name: 'Volunteer', 
    email: 'volunteer@example.com', 
    volunteerType: 'General Volunteer' 
  };
  
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults, 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('/');
    }
  }, [countdown, navigate]);

  const getDynamicMessage = () => {
    switch (volunteerType) {
      case 'Outreach Volunteer':
        return "Get ready to make a direct impact in communities!";
      case 'Skills-Based Volunteer':
        return "We're excited to leverage your expertise!";
      case 'Virtual Volunteer':
        return "Welcome to our digital volunteer force!";
      default:
        return "Thank you for joining our mission!";
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-[500px] w-full rounded-2xl shadow-xl overflow-hidden text-center relative"
      >
        {/* Header Section */}
        <div className="bg-[#2D5A3D] p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#2D5A3D]"
          >
            <Heart size={40} fill="#2D5A3D" strokeWidth={0} />
          </motion.div>
          <h1 className="font-heading font-bold text-2xl mb-2">Application Received!</h1>
          <p className="text-white/90 text-sm">Thank you for your interest in volunteering</p>
        </div>

        {/* Card Body */}
        <div className="p-8">
          <p className="text-gray-700 mb-4 text-lg">
            Dear <span className="font-bold text-[#2D5A3D]">{name}</span>,
          </p>
          <p className="text-gray-600 mb-4">
            We've received your application to join our volunteer team as a <span className="font-bold text-[#2D5A3D]">{volunteerType}</span>.
          </p>
          <p className="text-[#2D5A3D] font-medium italic mb-6">
            "{getDynamicMessage()}"
          </p>
          
          <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100 text-sm text-gray-600">
            Our team is reviewing your application and will send a response to <span className="font-bold text-gray-800">{email}</span> within 48-72 hours.
          </div>

          {/* Steps */}
          <div className="flex justify-between items-start mb-8 text-xs text-gray-500 px-2">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-full bg-[#2D5A3D] text-white flex items-center justify-center font-bold">1</div>
              <span className="font-bold text-gray-700">Review</span>
              <span className="text-center leading-tight">We review your skills</span>
            </div>
            <div className="w-full h-[2px] bg-gray-200 mt-4 mx-2"></div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">2</div>
              <span className="font-bold text-gray-700">Contact</span>
              <span className="text-center leading-tight">We email next steps</span>
            </div>
            <div className="w-full h-[2px] bg-gray-200 mt-4 mx-2"></div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold">3</div>
              <span className="font-bold text-gray-700">Onboard</span>
              <span className="text-center leading-tight">Welcome to TEK!</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 mb-8">
            <Link to="/" className="block w-full bg-[#2D5A3D] hover:bg-[#1E3A2B] text-white font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
              Return to Homepage
            </Link>
            <Link to="/get-involved" className="block w-full text-[#2D5A3D] font-bold text-sm hover:underline flex items-center justify-center gap-1">
              Explore Other Ways to Help <ArrowRight size={14} />
            </Link>
          </div>

          {/* Social & Footer */}
          <div className="border-t border-gray-100 pt-6">
            <p className="text-xs text-gray-500 mb-3">While you wait, follow us for updates:</p>
            <div className="flex justify-center gap-4 mb-6">
              <a href="https://web.facebook.com/tekfoundationng/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2D5A3D] transition-colors"><Facebook size={20} /></a>
              <a href="https://instagram.com/tek_foundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2D5A3D] transition-colors"><Instagram size={20} /></a>
              <a href="https://x.com/Tek_foundation1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2D5A3D] transition-colors"><XIcon size={20} /></a>
              <a href="https://linkedin.com/company/tek-foundation" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2D5A3D] transition-colors"><Linkedin size={20} /></a>
            </div>
            
            <p className="text-xs text-gray-400 flex items-center justify-center gap-1 mb-1">
              <Mail size={12} /> Questions? Email us at tekfoundationnigeria@gmail.com
            </p>
            <p className="text-xs text-[#2D5A3D] font-bold">Together, we're ending hunger in Nigeria.</p>
            
            <div className="mt-4 text-[10px] text-gray-400">
              Redirecting to home in {countdown}s...
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VolunteerSuccess;
