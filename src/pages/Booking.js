import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [bookingData, setBookingData] = useState({
    service: 'كشف طب وجراحة عيون دوري',
    date: 'الأحد',
    time: '05:00 مساءً',
    name: '',
    phone: ''
  });

  const services = [
    'كشف طب وجراحة عيون دوري',
    'عمليات المياه البيضاء وزراعة العدسات',
    'تصحيح النظر بالفيمتو ليزك',
    'فحص وتحديد مقاس النظارة'
  ];

  const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

  const times = [
    '05:00 مساءً', '05:30 مساءً', '06:00 مساءً', 
    '06:30 مساءً', '07:00 مساءً', '07:30 مساءً', 
    '08:00 مساءً', '08:30 مساءً'
  ];

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // رقم واتساب العيادة الفعلي
    const whatsappNumber = "201206560418";
    
    // صيغة الرسالة الاحترافية المنظمة اللي هتوصل للدكتور
    const message = `*طلب حجز موعد جديد وعاجل*%0A%0A` +
                    `*👤 اسم المريض:* ${bookingData.name}%0A` +
                    `*📞 رقم الهاتف:* ${bookingData.phone}%0A` +
                    `*🩺 الخدمة المطلوبة:* ${bookingData.service}%0A` +
                    `*📅 اليوم المفضل:* ${bookingData.date}%0A` +
                    `*⏰ التوقيت المفضل:* ${bookingData.time}%0A%0A` +
                    `_يرجى الرد على المريض لتأكيد الحجز ومراجعة الدفتر._`;
    
    // فتح الواتساب في تبويب جديد بالرسالة جاهزة
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h2>طلب حجز موعد بالعيادة</h2>
          <p>قم باختيار الموعد المناسب لك، وسيتم توجيهك لتأكيد الحجز فوراً عبر واتساب العيادة</p>
        </div>

        <form onSubmit={handleSubmit} className="modern-booking-form">
          {/* اختيار الخدمة */}
          <div className="form-group">
            <label><i className="ti ti-stethoscope"></i> اختر الخدمة الطبية:</label>
            <select name="service" value={bookingData.service} onChange={handleChange}>
              {services.map((s, index) => <option key={index} value={s}>{s}</option>)}
            </select>
          </div>

          {/* اختيار اليوم والوقت في صف واحد */}
          <div className="form-row">
            <div className="form-group">
              <label><i className="ti ti-calendar"></i> اليوم المفضل:</label>
              <select name="date" value={bookingData.date} onChange={handleChange}>
                {days.map((d, index) => <option key={index} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label><i className="ti ti-clock"></i> التوقيت المفضل:</label>
              <select name="time" value={bookingData.time} onChange={handleChange}>
                {times.map((t, index) => <option key={index} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* بيانات المريض */}
          <div className="form-group">
            <label><i className="ti ti-user"></i> اسم المريض بالكامل:</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="اكتب اسم المريض" 
              value={bookingData.name} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label><i className="ti ti-phone"></i> رقم الهاتف للتواصل:</label>
            <input 
              type="tel" 
              name="phone" 
              required 
              placeholder="مثال: 010XXXXXXXX" 
              value={bookingData.phone} 
              onChange={handleChange} 
            />
          </div>

          {/* زر الارسال */}
          <button type="submit" className="btn-whatsapp-submit">
            <i className="ti ti-brand-whatsapp"></i>
            <span>تأكيد موعد الحجز عبر واتساب</span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default Booking;