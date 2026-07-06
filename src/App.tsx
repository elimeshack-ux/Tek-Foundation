/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import OurWork from './pages/OurWork';
import ProgramGallery from './pages/ProgramGallery';
import GetInvolved from './pages/GetInvolved';
import News from './pages/News';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import DonationSuccess from './pages/DonationSuccess';
import BankTransferConfirmation from './pages/BankTransferConfirmation';
import VolunteerSuccess from './pages/VolunteerSuccess';

import BlogPost from './pages/BlogPost';
import TeamCategory from './pages/TeamCategory';
import TeamMemberBio from './pages/TeamMemberBio';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/bank-transfer-confirmation" element={<BankTransferConfirmation />} />
          <Route path="/volunteer-success" element={<VolunteerSuccess />} />
          
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team/:teamId" element={<TeamCategory />} />
            <Route path="/team/:teamId/:memberId" element={<TeamMemberBio />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/work/gallery/:programId" element={<ProgramGallery />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/news-and-stories" element={<News />} />
            <Route path="/news/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
