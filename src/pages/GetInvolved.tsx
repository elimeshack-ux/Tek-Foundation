import { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Heart, Hand, Users, Megaphone, CheckCircle, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const GetInvolved = () => {
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState<number | string>(5000);
  const [customAmount, setCustomAmount] = useState('');

  const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleDonate = () => {
    const amount = donationAmount === 'custom' ? Number(customAmount) : Number(donationAmount);
    if (amount > 0) {
      navigate('/checkout', { state: { amount } });
    }
  };

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Outreach Volunteer',
    message: ''
  });

  const handleVolunteerSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/volunteer-success', { 
      state: { 
        name: volunteerForm.name, 
        email: volunteerForm.email, 
        volunteerType: volunteerForm.type 
      } 
    });
  };

  const handleVolunteerChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVolunteerForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Get Involved | Donate, Volunteer & Partner | TEK Foundation"
        description="Join TEK Foundation in the fight against hunger. Donate, volunteer, or partner with us to make a tangible difference in Nigeria."
        canonical="https://www.tekfoundation.org/get-involved"
      />
      {/* HERO SECTION */}
      <section className="bg-forest text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-4xl md:text-6xl mb-4"
          >
            Get Involved
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto text-white/90"
          >
            There are many ways to make a difference. Join us in our mission to end hunger.
          </motion.p>
        </div>
      </section>

      {/* DONATE SECTION */}
      <section className="py-20 bg-white" id="donate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gold p-6 text-center text-white">
              <h2 className="font-heading font-bold text-3xl">Your Donation Makes a Difference</h2>
              <p className="opacity-90">Securely support our cause today.</p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { amount: 1000, label: "1 Meal" },
                  { amount: 5000, label: "1 Week of Meals" },
                  { amount: 20000, label: "1 Month Support" }
                ].map((tier) => (
                  <button
                    key={tier.amount}
                    onClick={() => setDonationAmount(tier.amount)}
                    className={`p-6 rounded-xl border-2 transition-all text-center ${
                      donationAmount === tier.amount 
                        ? 'border-forest bg-forest/5 text-forest' 
                        : 'border-gray-200 hover:border-forest/50'
                    }`}
                  >
                    <div className="font-bold text-2xl mb-1">₦{tier.amount.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">{tier.label}</div>
                  </button>
                ))}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2">Or Enter Custom Amount (₦)</label>
                <input 
                  type="number" 
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="e.g. 10000"
                  className={`w-full p-4 rounded-xl border-2 focus:outline-none focus:border-forest transition-colors ${donationAmount === 'custom' ? 'border-forest' : 'border-gray-200'}`}
                />
              </div>

              <button 
                onClick={handleDonate}
                className="w-full bg-forest hover:bg-deep-green text-white font-bold text-xl py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Donate Now
              </button>
              
              <div className="mt-6 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                <ShieldCheck size={14} />
                <span>Secure payment processing via Paystack. Transparency guaranteed.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER SECTION */}
      <section className="py-20 bg-cream" id="volunteer">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-6">Join Our Volunteer Team</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our volunteers are the heartbeat of TEK Foundation. Whether you have a few hours a week or specific skills to offer, we have a place for you.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  { title: "Outreach Volunteer", desc: "Help distribute food and engage with communities on the ground." },
                  { title: "Skills-Based Volunteer", desc: "Offer your expertise in marketing, finance, logistics, or healthcare." },
                  { title: "Virtual Volunteer", desc: "Support our operations remotely through research, social media, or admin." }
                ].map((type, i) => (
                  <div key={i} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center shrink-0 text-forest">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-green">{type.title}</h4>
                      <p className="text-sm text-gray-600">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-heading font-bold text-2xl text-deep-green mb-6">Volunteer Application</h3>
              <form className="space-y-4" onSubmit={handleVolunteerSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={volunteerForm.name}
                    onChange={handleVolunteerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent" 
                    required 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={volunteerForm.email}
                      onChange={handleVolunteerChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={volunteerForm.phone}
                      onChange={handleVolunteerChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Volunteer Type</label>
                  <select 
                    name="type"
                    value={volunteerForm.type}
                    onChange={handleVolunteerChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent"
                  >
                    <option>Outreach Volunteer</option>
                    <option>Skills-Based Volunteer</option>
                    <option>Virtual Volunteer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Availability & Message</label>
                  <textarea 
                    name="message"
                    value={volunteerForm.message}
                    onChange={handleVolunteerChange}
                    rows={4} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest focus:border-transparent" 
                    placeholder="Tell us about yourself and when you can help..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-gold hover:bg-yellow-500 text-white font-bold py-3 rounded-lg transition-colors">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER WITH US SECTION */}
      <section className="py-20 bg-white" id="partner">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-forest mb-4">Partner With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Collaboration amplifies impact. We work with corporations, other NGOs, and media outlets to reach more people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Hand, title: "Corporate Partnership", desc: "Sponsor a program or organize employee volunteering days." },
              { icon: Users, title: "NGO Collaboration", desc: "Join forces on projects to maximize resource efficiency." },
              { icon: Megaphone, title: "Media Partnership", desc: "Help us tell our story and raise awareness for the cause." }
            ].map((partner, i) => (
              <div key={i} className="p-8 border border-gray-200 rounded-xl hover:border-gold transition-colors hover:shadow-lg group">
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 text-forest group-hover:bg-gold group-hover:text-white transition-colors">
                  <partner.icon size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl text-deep-green mb-3">{partner.title}</h3>
                <p className="text-gray-600 mb-6">{partner.desc}</p>
              </div>
            ))}
          </div>
          
          <Link to="/contact" className="inline-block bg-forest text-white px-8 py-3 rounded-full font-bold hover:bg-deep-green transition-colors">
            Contact Us to Partner
          </Link>
        </div>
      </section>

      {/* FUNDRAISE SECTION */}
      <section className="py-20 bg-forest text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Start Your Own Fundraiser</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Celebrate your birthday, run a marathon, or host a dinner to raise funds for TEK Foundation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 text-left">
            {[
              { step: "1", title: "Register", desc: "Sign up on our fundraising platform." },
              { step: "2", title: "Personalize", desc: "Create your campaign page and set a goal." },
              { step: "3", title: "Share", desc: "Spread the word to friends and family." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-4xl font-bold text-gold opacity-50">{item.step}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to="/contact" className="inline-block bg-gold hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg">
            Start Fundraising
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
