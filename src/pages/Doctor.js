import React from 'react';
import docImg from '../images/doc.jpg'; // استيراد صورة الدكتور من مكانها الجديد في الـ src
import './Doctor.css';

function Doctor() {
  return (
    <main className="page">
      <div className="page-header doctor-header">
        <h1>عن الدكتور</h1>
        <p>تعرف على د. محمد عمر مصطفى</p>
      </div>

      <div className="container">
        <div className="doctor-grid">
          <div className="doctor-image">
            {/* استخدام المتغير الجديد هنا */}
            <img src={docImg} alt="د. محمد عمر مصطفى" />
          </div>
          <div className="doctor-info">
            <h2>د. محمد عمر مصطفى</h2>
            <p className="doctor-title">استشاري طب وجراحة العيون</p>
            <p className="doctor-bio">
              يتمتع الدكتور محمد عمر مصطفى بخبرة تمتد لأكثر من 20 عاماً في مجال طب وجراحة العيون،
              حاصل على أرقى الشهادات العلمية من مصر وبريطانيا، ويقدم خدماته لآلاف المرضى بأعلى معايير الجودة والأمان.
            </p>

            <div className="qualifications">
              <h3>المؤهلات العلمية</h3>
              <ul>
                <li><i className="ti ti-circle-check"></i> دكتوراه طب وجراحة العيون</li>
                <li><i className="ti ti-circle-check"></i> زمالة طب وجراحة العيون المصرية</li>
                <li><i className="ti ti-circle-check"></i> زمالة المجلس العالمي لطب وجراحة العيون - كامبريدج، انجلترا</li>
                <li><i className="ti ti-circle-check"></i> استشاري جراحات القرنية</li>
                <li><i className="ti ti-circle-check"></i> استشاري تصحيح ضعف الابصار بالليزر</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Doctor;