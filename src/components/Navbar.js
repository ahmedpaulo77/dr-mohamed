import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/images/2.jpg'} alt="لوجو" />
          <div className="logo-text">
            <span className="logo-name">د. محمد عمر مصطفى</span>
            <span className="logo-sub">استشاري طب وجراحة العيون</span>
          </div>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? 'ti ti-x' : 'ti ti-menu-2'}></i>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link></li>
          <li><Link to="/doctor" onClick={() => setMenuOpen(false)}>عن الدكتور</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>خدماتنا</Link></li>
          <li><Link to="/before-after" onClick={() => setMenuOpen(false)}>عملاؤنا</Link></li>
          <li><Link to="/booking" onClick={() => setMenuOpen(false)}>احجز موعد</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>تواصل معنا</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;