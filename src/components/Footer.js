import React from 'react';
import logoImg from '../images/2.jpg'; // استيراد اللوجو من مكانه الجديد في الـ src
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-info">
            {/* استخدام المتغير الجديد للوجو هنا بدلاً من PUBLIC_URL */}
            <img src={logoImg} alt="لوجو" />
            <div>
              <span className="footer-name">د. محمد عمر مصطفى</span>
              <p>استشاري طب وجراحة العيون</p>
            </div>
          </div>
          
          {/* سكشن أيقونات السوشيال ميديا المضاف حديثاً */}
          <div className="footer-socials">
            <a href="https://web.facebook.com/profile.php?id=100082552579886&sk=photos&locale=ar_AR" target="_blank" rel="noreferrer" className="social-icon facebook">
              <i className="ti ti-brand-facebook"></i>
            </a>
            <a href="https://wa.me/201206560418" target="_blank" rel="noreferrer" className="social-icon whatsapp">
              <i className="ti ti-brand-whatsapp"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram">
              <i className="ti ti-brand-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>روابط سريعة</h4>
          <ul>
            <li><a href="#/">الرئيسية</a></li>
            <li><a href="#/doctor">عن الدكتور</a></li>
            <li><a href="#/services">خدماتنا</a></li>
            <li><a href="#/before-after">عملاؤنا</a></li>
            <li><a href="#/booking">احجز موعد</a></li>
            <li><a href="#/contact">تواصل معنا</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>تواصل معنا</h4>
          <p><i className="ti ti-phone"></i> 0133245406 - 01098615561</p>
          <p><i className="ti ti-brand-whatsapp"></i> 01206560418</p>
          <p><i className="ti ti-map-pin"></i> نهاية شارع المرور خلف مستشفي حميات بنها</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 د. محمد عمر مصطفى. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}

export default Footer;