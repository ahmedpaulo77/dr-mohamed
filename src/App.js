import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Doctor from './pages/Doctor';
import BeforeAfter from './pages/BeforeAfter';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import ScrollToTop from './ScrollToTop'; // استدعاء المكون الجديد هنا
import './App.css';

function App() {
  return (
    <HashRouter>
      {/* وضع المكون هنا لضمان عمل السكرول لأول الصفحة مع كل تنقل */}
      <ScrollToTop />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/before-after" element={<BeforeAfter />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
      {/* زر الواتساب العائم */}
      <a
        href="https://wa.me/201206560418?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
        target="_blank"
        rel="noreferrer"
        className="wa-float"
      >
        <i className="ti ti-brand-whatsapp"></i>
      </a>
    </HashRouter>
  );
}

export default App;