import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CheckCircle, ArrowRight, Download, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { jsPDF } from 'jspdf';

const DonationSuccess = () => {
  const location = useLocation();
  const { amount, email, name } = location.state || { amount: 5000, email: 'donor@example.com', name: 'Donor' };
  
  const [transactionId] = useState(`TEK-${Math.floor(Math.random() * 1000000)}`);
  const [date] = useState(new Date().toLocaleDateString());

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

    return () => clearInterval(interval);
  }, []);

  const handleDownloadReceipt = () => {
    const doc = new jsPDF();

    // Add logo/header
    doc.setFillColor(45, 90, 61); // #2D5A3D
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('TEK Foundation', 105, 25, { align: 'center' });
    
    // Receipt Title
    doc.setTextColor(45, 90, 61);
    doc.setFontSize(20);
    doc.text('Donation Receipt', 105, 60, { align: 'center' });

    // Details
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');

    const startY = 80;
    const lineHeight = 10;

    doc.text(`Date: ${date}`, 20, startY);
    doc.text(`Transaction ID: ${transactionId}`, 20, startY + lineHeight);
    doc.text(`Donor Name: ${name}`, 20, startY + lineHeight * 2);
    doc.text(`Donor Email: ${email}`, 20, startY + lineHeight * 3);
    
    doc.setFont('helvetica', 'bold');
    doc.text(`Amount Donated: NGN ${Number(amount).toLocaleString()}`, 20, startY + lineHeight * 4);

    // Footer
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for your generous support!', 105, 150, { align: 'center' });
    doc.text('TEK Foundation - Tackling poverty and food insecurity in Nigeria', 105, 155, { align: 'center' });

    doc.save(`TEK-Receipt-${transactionId}.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white max-w-lg w-full rounded-2xl shadow-xl overflow-hidden text-center relative"
      >
        <div className="bg-[#2D5A3D] p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#2D5A3D]"
          >
            <CheckCircle size={48} strokeWidth={3} />
          </motion.div>
          <h1 className="font-heading font-bold text-3xl mb-2">Thank You!</h1>
          <p className="text-white/90">Your donation was successful.</p>
        </div>

        <div className="p-8">
          <p className="text-gray-600 mb-6">
            Dear <span className="font-bold text-[#2D5A3D]">{name}</span>, your generous donation of <span className="font-bold text-[#2D5A3D]">₦{Number(amount).toLocaleString()}</span> will help us provide meals to families in need.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100 text-left text-sm">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-mono font-bold text-gray-700">{transactionId}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Date</span>
              <span className="font-medium text-gray-700">{date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="font-medium text-gray-700">{email}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link to="/" className="w-full bg-[#2D5A3D] hover:bg-[#1E3A2B] text-white font-bold py-3 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
              Return to Home <ArrowRight size={18} />
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={handleDownloadReceipt}
                className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium text-sm"
              >
                <Download size={16} /> Download Receipt
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium text-sm">
                <Share2 size={16} /> Share Impact
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DonationSuccess;
