import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, CreditCard, Smartphone, Building, CheckCircle, ArrowLeft, Loader2, ShieldCheck } from 'lucide-react';

// Define types for form data
interface CheckoutForm {
  fullName: string;
  email: string;
  phone: string;
  isDedicated: boolean;
  dedicateTo: string;
  paymentMethod: 'paystack' | 'flutterwave' | 'bank_transfer';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  saveCard: boolean;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get amount from navigation state or default to 5000
  const initialAmount = location.state?.amount || 5000;
  
  const [amount, setAmount] = useState<number>(Number(initialAmount));
  const [isRecurring, setIsRecurring] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutForm, string>>>({});
  
  const [formData, setFormData] = useState<CheckoutForm>({
    fullName: '',
    email: '',
    phone: '',
    isDedicated: false,
    dedicateTo: '',
    paymentMethod: 'paystack',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    saveCard: false
  });

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'cardNumber') {
      // Format card number with spaces
      const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
      const matches = v.match(/\d{4,16}/g);
      const match = matches && matches[0] || '';
      const parts = [];
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      if (parts.length) {
        setFormData(prev => ({ ...prev, [name]: parts.join(' ') }));
      } else {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else if (name === 'expiryDate') {
      // Format expiry date MM/YY
      let v = value.replace(/\D/g, '');
      if (v.length >= 2) {
        v = v.substring(0, 2) + '/' + v.substring(2, 4);
      }
      setFormData(prev => ({ ...prev, [name]: v }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
    
    // Clear error when user types
    if (errors[name as keyof CheckoutForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof CheckoutForm, string>> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    if (formData.paymentMethod !== 'bank_transfer') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      
      if (formData.paymentMethod === 'bank_transfer') {
        navigate('/bank-transfer-confirmation', { 
          state: { 
            amount, 
            email: formData.email,
            name: formData.fullName
          } 
        });
      } else {
        navigate('/donation-success', { 
          state: { 
            amount, 
            email: formData.email,
            name: formData.fullName
          } 
        });
      }
    }, 2000);
  };

  const processingFee = amount * 0.015;
  const total = amount + processingFee;

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-sans text-[#1E3A2B]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1rc_UZZ6o7oTJr5pTsHn5R1qaFBbC0rO9" 
              alt="TEK Foundation Logo" 
              className="transparent-logo object-contain"
              style={{ height: '80px', width: 'auto' }}
              referrerPolicy="no-referrer"
            />
            <span className="font-heading font-bold text-lg md:text-xl text-[#2D5A3D]">TEK Foundation</span>
          </Link>
          
          <div className="flex items-center gap-2 text-sm font-medium text-[#2D5A3D] bg-[#2D5A3D]/10 px-3 py-1 rounded-full">
            <Lock size={14} />
            <span className="hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
        <div className="h-1 bg-[#E5E5E5]">
          <div className="h-full w-1/2 bg-[#D4A574]"></div>
        </div>
        <div className="bg-[#2D5A3D] text-white text-xs py-1 text-center font-medium">
          Step 1 of 2: Payment Details
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN - Order Summary */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32 border border-gray-100">
              <h2 className="font-heading font-bold text-xl mb-6 text-[#2D5A3D]">Donation Summary</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-600 mb-2">Amount (₦)</label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {[1000, 5000, 20000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setAmount(val)}
                      className={`py-2 px-1 rounded-lg text-sm font-bold border transition-colors ${
                        amount === val 
                          ? 'bg-[#2D5A3D] text-white border-[#2D5A3D]' 
                          : 'bg-white text-gray-600 border-gray-200 hover:border-[#D4A574]'
                      }`}
                    >
                      ₦{val.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent outline-none transition-all font-bold text-lg"
                    min="100"
                  />
                </div>
                {amount < 100 && <p className="text-red-500 text-xs mt-1">Minimum donation is ₦100</p>}
              </div>

              <div className="bg-[#F5F5DC] p-4 rounded-lg mb-6 border border-[#D4A574]/30">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-[#D4A574] rounded-full flex items-center justify-center text-white shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D5A3D] text-sm mb-1">Your Impact</h4>
                    <p className="text-sm text-gray-700 leading-snug">
                      Your ₦{amount.toLocaleString()} donation helps provide meals and support to families in need across Nigeria.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="recurring" 
                    checked={isRecurring}
                    onChange={(e) => setIsRecurring(e.target.checked)}
                    className="w-4 h-4 text-[#2D5A3D] focus:ring-[#2D5A3D] border-gray-300 rounded"
                  />
                  <label htmlFor="recurring" className="text-sm font-medium text-gray-700 cursor-pointer">Make this a monthly donation</label>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>₦{amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Processing Fee (1.5%)</span>
                  <span>₦{processingFee.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-[#2D5A3D] pt-2 border-t border-gray-100 mt-2">
                  <span>Total</span>
                  <span>₦{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Checkout Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Donor Information */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="font-heading font-bold text-xl mb-6 text-[#2D5A3D] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#2D5A3D] text-white text-xs flex items-center justify-center">1</span>
                  Donor Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                    placeholder="+234 800 000 0000"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <input 
                    type="checkbox" 
                    id="dedicated" 
                    name="isDedicated"
                    checked={formData.isDedicated}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#2D5A3D] focus:ring-[#2D5A3D] border-gray-300 rounded"
                  />
                  <label htmlFor="dedicated" className="text-sm font-medium text-gray-700 cursor-pointer">Dedicate this donation</label>
                </div>

                {formData.isDedicated && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden"
                  >
                    <label className="block text-sm font-bold text-gray-700 mb-2">Dedicate To (Name)</label>
                    <input 
                      type="text" 
                      name="dedicateTo"
                      value={formData.dedicateTo}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent outline-none transition-all"
                      placeholder="Name of honoree"
                    />
                  </motion.div>
                )}
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="font-heading font-bold text-xl mb-6 text-[#2D5A3D] flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#2D5A3D] text-white text-xs flex items-center justify-center">2</span>
                  Payment Method
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { id: 'paystack', name: 'Paystack', icon: CreditCard, desc: 'Cards, USSD, Bank' },
                    { id: 'flutterwave', name: 'Flutterwave', icon: Smartphone, desc: 'Intl Cards, Mobile Money' },
                    { id: 'bank_transfer', name: 'Bank Transfer', icon: Building, desc: 'Manual Transfer' }
                  ].map((method) => (
                    <div 
                      key={method.id}
                      onClick={() => setFormData(prev => ({ ...prev, paymentMethod: method.id as any }))}
                      className={`cursor-pointer p-4 rounded-xl border-2 transition-all relative ${
                        formData.paymentMethod === method.id 
                          ? 'border-[#2D5A3D] bg-[#2D5A3D]/5 shadow-sm' 
                          : 'border-gray-100 hover:border-[#D4A574] hover:shadow-sm bg-gray-50'
                      }`}
                    >
                      {formData.paymentMethod === method.id && (
                        <div className="absolute top-2 right-2 text-[#2D5A3D]">
                          <CheckCircle size={16} fill="currentColor" className="text-white" />
                        </div>
                      )}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                        formData.paymentMethod === method.id ? 'bg-[#2D5A3D] text-white' : 'bg-white text-gray-500'
                      }`}>
                        <method.icon size={20} />
                      </div>
                      <h3 className="font-bold text-[#2D5A3D] text-sm">{method.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{method.desc}</p>
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {formData.paymentMethod === 'bank_transfer' ? (
                    <motion.div
                      key="bank"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-[#F5F5DC] p-6 rounded-xl border border-[#D4A574]/30"
                    >
                      <h4 className="font-bold text-[#2D5A3D] mb-4">Bank Account Details</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between border-b border-[#D4A574]/20 pb-2">
                          <span className="text-gray-600">Bank Name</span>
                          <span className="font-bold">Guaranty Trust Bank (GTB)</span>
                        </div>
                        <div className="flex justify-between border-b border-[#D4A574]/20 pb-2">
                          <span className="text-gray-600">Account Name</span>
                          <span className="font-bold">TEK Foundation</span>
                        </div>
                        <div className="flex justify-between pb-2">
                          <span className="text-gray-600">Account Number</span>
                          <span className="font-bold text-lg tracking-wider">0123456789</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4 bg-white/50 p-3 rounded border border-[#D4A574]/20">
                        Please use your name as the transfer reference. After transfer, click "Complete Donation" to notify us.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="card"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Card Number</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            maxLength={19}
                            className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent outline-none transition-all font-mono ${errors.cardNumber ? 'border-red-500' : 'border-gray-200'}`}
                            placeholder="0000 0000 0000 0000"
                          />
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <CreditCard size={20} />
                          </div>
                        </div>
                        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Date</label>
                          <input 
                            type="text" 
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            maxLength={5}
                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent outline-none transition-all text-center ${errors.expiryDate ? 'border-red-500' : 'border-gray-200'}`}
                            placeholder="MM/YY"
                          />
                          {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">CVV</label>
                          <input 
                            type="text" 
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            maxLength={3}
                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent outline-none transition-all text-center ${errors.cvv ? 'border-red-500' : 'border-gray-200'}`}
                            placeholder="123"
                          />
                          {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          id="saveCard" 
                          name="saveCard"
                          checked={formData.saveCard}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#2D5A3D] focus:ring-[#2D5A3D] border-gray-300 rounded"
                        />
                        <label htmlFor="saveCard" className="text-sm font-medium text-gray-700 cursor-pointer">Save card for future donations</label>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Security Badge */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck size={16} className="text-[#2D5A3D]" />
                    <span>Secured by 256-bit SSL encryption</span>
                  </div>
                  <div className="flex gap-2 opacity-60 grayscale hover:grayscale-0 transition-all">
                    {/* Placeholder for payment logos */}
                    <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
                    <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">MC</div>
                    <div className="h-6 w-10 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">VERVE</div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="sticky bottom-4 z-40 bg-[#F5F5DC]/90 backdrop-blur-sm p-4 rounded-xl border border-[#D4A574]/20 shadow-lg md:static md:bg-transparent md:p-0 md:border-0 md:shadow-none">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-[#2D5A3D] hover:bg-[#1E3A2B] text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={24} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Donation ₦{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </>
                  )}
                </button>
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 mb-2">Your donation is tax-deductible. Receipt will be sent to your email.</p>
                  <Link to="/get-involved" className="text-[#2D5A3D] text-sm font-semibold hover:text-[#D4A574] transition-colors inline-flex items-center gap-1">
                    <ArrowLeft size={14} /> Return to donation options
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
          Questions? Contact us at <a href="mailto:tekfoundationnigeria@gmail.com" className="text-[#2D5A3D] hover:underline">tekfoundationnigeria@gmail.com</a>
        </div>
      </main>
      
      {/* Hidden CSRF Token Placeholder */}
      <input type="hidden" name="csrf_token" value="placeholder_token" />
    </div>
  );
};

export default Checkout;
