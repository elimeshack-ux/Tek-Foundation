import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Loader2, ArrowRight, Download, Share2, Mail } from 'lucide-react';

interface LocationState {
  amount: number;
  email: string;
  name: string;
}

const BankTransferConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  // Default state if accessed directly without navigation state
  const donorName = state?.name || 'Donor';
  const donorEmail = state?.email || 'donor@example.com';
  const amount = state?.amount || 5000;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConfirm = () => {
    setIsLoading(true);

    // Simulate API call / Webhook trigger
    setTimeout(() => {
      // Log confirmation timestamp (mock)
      console.log(`Transfer confirmed by ${donorEmail} at ${new Date().toISOString()}`);
      
      setIsLoading(false);
      setIsSuccess(true);

      // Auto-redirect after 2 seconds
      setTimeout(() => {
        navigate('/donation-success', { 
          state: { 
            amount, 
            email: donorEmail, 
            name: donorName 
          } 
        });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-[500px] bg-white rounded-xl shadow-xl overflow-hidden"
      >
        {/* Header Section */}
        <div className="bg-[#2D5A3D] p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4 text-white"
          >
            <CheckCircle size={32} strokeWidth={2} />
          </motion.div>
          <h1 className="font-heading font-bold text-2xl mb-1">
            Confirm Your Transfer
          </h1>
          <p className="text-white/90 text-sm">
            Help us verify your donation
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-center">
          {!isSuccess ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Thank you for choosing to support TEK Foundation via bank transfer.
              </p>
              <p className="text-gray-600 mb-8 text-sm">
                Once you've completed the transfer of <span className="font-bold text-[#2D5A3D]">₦{Number(amount).toLocaleString()}</span>, simply click the button below to notify our team.
              </p>

              <button 
                onClick={handleConfirm}
                disabled={isLoading}
                className="w-full bg-[#2D5A3D] hover:bg-[#1E3A2B] text-white font-bold py-4 rounded-xl shadow-md transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 mb-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={24} className="animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Yes, I've Made the Transfer
                  </>
                )}
              </button>

              <div className="bg-gray-50 rounded-lg p-4 text-xs text-gray-500 border border-gray-100">
                <p className="mb-2">
                  Our team will verify your donation within 24 hours and send your receipt to <span className="font-bold text-gray-700">{donorEmail}</span>.
                </p>
                <p className="flex items-center justify-center gap-1">
                  Questions? Contact us at <a href="mailto:tekfoundationnigeria@gmail.com" className="text-[#2D5A3D] hover:underline">tekfoundationnigeria@gmail.com</a>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <CheckCircle size={32} />
              </div>
              <h2 className="font-heading font-bold text-xl text-[#2D5A3D] mb-2">Thank you!</h2>
              <p className="text-gray-600">
                We've been notified and will verify your transfer shortly.
              </p>
              <p className="text-sm text-gray-400 mt-4">Redirecting...</p>
            </motion.div>
          )}
        </div>

        {/* Footer Actions (Similar to Thank You Page) */}
        {!isSuccess && (
          <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col gap-3">
            <Link to="/" className="w-full bg-white border border-gray-200 hover:border-[#2D5A3D] text-gray-600 hover:text-[#2D5A3D] font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
              Return to Home
            </Link>
            
            <div className="grid grid-cols-2 gap-3">
              <button disabled className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed font-medium text-xs">
                <Download size={14} /> Download Receipt
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-white transition-colors text-gray-600 font-medium text-xs">
                <Share2 size={14} /> Share Impact
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BankTransferConfirmation;
