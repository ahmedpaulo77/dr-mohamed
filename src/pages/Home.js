import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../images/1.jpg'; // استيراد الصورة الثابتة من مكانها الجديد في الـ src
import './Home.css';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay"></div>
        {/* استخدام المتغير الجديد هنا كخلفية */}
        <img src={heroImg} alt="د. محمد عمر مصطفى" className="hero-bg" />
        
        <div className="hero-content">
          {/* النصوص دي هتظهر في الموبايل بس عشان الصورة بتصغر، وتختفي في الكمبيوتر */}
          <div className="hero-text-mobile">
            <h1>د. محمد عمر مصطفى</h1>
            <p>استشاري طب وجراحة العيون</p>
            <p className="hero-sub">زمالة المجلس العالمي لطب وجراحة العيون - كامبريدج، انجلترا</p>
          </div>

          {/* الأزرار هتكون ظاهرة في الاتنين ومكانها متظبط بالـ CSS */}
          <div className="hero-btns">
            <Link to="/booking" className="btn-primary">
              <i className="ti ti-calendar"></i>
              <span>احجز موعدك الآن</span>
            </Link>
            <a 
              href="https://wa.me/201206560418?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <i className="ti ti-brand-whatsapp"></i>
              <span>تواصل معنا</span>
            </a>
          </div>
        </div>
      </section>

      {/* باقي السكاشن كما هي بدون تعديل */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">+20</span>
              <span className="stat-label">سنة خبرة</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">+5000</span>
              <span className="stat-label">عملية ناجحة</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">+10000</span>
              <span className="stat-label">مريض سعيد</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">8</span>
              <span className="stat-label">تخصصات</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">لماذا تختار د. محمد عمر مصطفى؟</h2>
          <p className="section-subtitle">خبرة تمتد لأكثر من 20 عاماً في طب وجراحة العيون</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="ti ti-certificate"></i>
              </div>
              <h3>مؤهلات دولية</h3>
              <p>زمالة المجلس العالمي لطب وجراحة العيون من كامبريدج، انجلترا</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="ti ti-device-heart-monitor"></i>
              </div>
              <h3>أحدث التقنيات</h3>
              <p>نستخدم أحدث أجهزة التشخيص والعلاج لضمان أفضل النتائج</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="ti ti-heart-handshake"></i>
              </div>
              <h3>رعاية متكاملة</h3>
              <p>متابعة دقيقة قبل وأثناء وبعد العلاج لضمان راحة المريض</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="ti ti-clock"></i>
              </div>
              <h3>مواعيد مرنة</h3>
              <p>نوفر مواعيد تناسب جدولك اليومي بدون انتظار طويل</p>
            </div>
          </div>
        </div>
      </section>

     <section className="services-preview">
        <div className="container">
          <h2 className="section-title">خدماتنا</h2>
          <p className="section-subtitle">نقدم أشمل خدمات طب وجراحة العيون</p>
          
          <div className="services-preview-grid">
            <Link to="/services" className="service-prev-card">
              <i className="ti ti-eye"></i>
              <span>عمليات المياه البيضاء</span>
            </Link>
            
            <Link to="/services" className="service-prev-card">
              {/* تغيير الكلاس إلى ti-eyeglass لضمان ظهور أيقونة النظارة/العدسة */}
              <i className="ti ti-eyeglass"></i>
              <span>زراعة العدسات</span>
            </Link>
            
            <Link to="/services" className="service-prev-card">
              {/* تغيير الكلاس إلى ti-bolt لضمان ظهور أيقونة ليزر/صاعقة سريعة وشغالة */}
              <i className="ti ti-bolt"></i>
              <span>عمليات الليزك</span>
            </Link>
            
            <Link to="/services" className="service-prev-card">
              <i className="ti ti-scan-eye"></i>
              <span>أمراض الشبكية</span>
            </Link>
          </div>
          
          <div className="services-preview-btn">
            <Link to="/services" className="btn-outline">
              <span>عرض جميع الخدمات</span>
              <i className="ti ti-arrow-left"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <h2>هل تعاني من مشكلة في عينيك؟</h2>
            <p>لا تتأخر، احجز موعدك الآن وتأكد من سلامة بصرك</p>
            <Link to="/booking" className="btn-primary">
              <i className="ti ti-calendar"></i>
              <span>احجز موعد</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;