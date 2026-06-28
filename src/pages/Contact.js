import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <main className="page">
      <div className="page-header contact-header">
        <h1>تواصل معنا</h1>
        <p>نحن هنا لخدمتك على مدار الساعة</p>
      </div>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="ti ti-phone"></i>
              </div>
              <div>
                <h3>اتصل بنا</h3>
                <p>0133245406</p>
                <p>01098615561</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon whatsapp-icon">
                <i className="ti ti-brand-whatsapp"></i>
              </div>
              <div>
                <h3>واتساب</h3>
                <a
                  href="https://wa.me/201206560418?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
                  target="_blank"
                  rel="noreferrer"
                  className="wa-link"
                >
                  ابدأ محادثة
                </a>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="ti ti-map-pin"></i>
              </div>
              <div>
                <h3>العنوان</h3>
                <p>نهاية شارع المرور خلف مستشفي حميات بنها بجوار مكتبة سمارت</p>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="ti ti-clock"></i>
              </div>
              <div>
                <h3>ساعات العمل</h3>
                <p>السبت - الخميس: 10 ص - 9 م</p>
              </div>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="موقع العيادة"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.234!2d31.1800!3d30.4667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI4JzAwLjEiTiAzMcKwMTAnNDguMCJF!5e0!3m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{border: 0, borderRadius: '16px'}}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;