import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { CheckCircle, ArrowRight, Download, Share2, X, Link as LinkIcon, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { jsPDF } from 'jspdf';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const DonationSuccess = () => {
  const location = useLocation();
  const { amount, email, name } = location.state || { amount: 5000, email: 'donor@example.com', name: 'Donor' };
  
  const [transactionId] = useState(`TEK-${Math.floor(Math.random() * 1000000)}`);
  const [date] = useState(new Date().toLocaleDateString());
  const [showShareModal, setShowShareModal] = useState(false);

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

  const shareUrl = window.location.origin;
  const shareText = `I just donated ₦${Number(amount).toLocaleString()} to TEK Foundation to help provide meals to families in need! Join me in making a difference.`;

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
              <button 
                onClick={() => setShowShareModal(true)}
                className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 font-medium text-sm"
              >
                <Share2 size={16} /> Share Impact
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Share Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl text-gray-800">Share Impact</h3>
                <button onClick={() => setShowShareModal(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-xl flex flex-col items-center gap-3 transition-all hover:scale-105 shadow-sm"
                >
                  <WhatsAppIcon />
                  <span className="font-medium">WhatsApp</span>
                </a>
                
                <a 
                  href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0088cc] hover:bg-[#007dbb] text-white p-4 rounded-xl flex flex-col items-center gap-3 transition-all hover:scale-105 shadow-sm"
                >
                  <TelegramIcon />
                  <span className="font-medium">Telegram</span>
                </a>

                <a 
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white p-4 rounded-xl flex flex-col items-center gap-3 transition-all hover:scale-105 shadow-sm"
                >
                  <Twitter size={24} />
                  <span className="font-medium">Twitter</span>
                </a>

                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(shareText + ' ' + shareUrl);
                    alert('Link copied to clipboard!');
                    setShowShareModal(false);
                  }}
                  className="bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-xl flex flex-col items-center gap-3 transition-all hover:scale-105 shadow-sm"
                >
                  <LinkIcon size={24} />
                  <span className="font-medium">Copy Link</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DonationSuccess;
