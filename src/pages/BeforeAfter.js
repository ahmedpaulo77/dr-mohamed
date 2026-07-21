import React, { useState } from 'react';
import './BeforeAfter.css';

const cases = [
  {
    id: 1,
    title: 'عملية الليزك',
    description: 'نتائج مذهلة لتصحيح النظر بالليزر',
    img: require('../images/11.jpg'), // استخدام require الدينياميكي هنا
  },
  {
    id: 2,
    title: 'عملية المياه البيضاء',
    description: 'استعادة الرؤية الواضحة بعد إزالة المياه البيضاء',
    img: require('../images/12.jpg'), // استخدام require الدينياميكي هنا
  },
  {
    id: 3,
    title: 'زراعة القرنية',
    description: 'نتائج ناجحة لعمليات زراعة القرنية',
    img: require('../images/13.jpg'), // استخدام require الدينياميكي هنا
  },
];

function Clients() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="page">
      <div className="page-header ba-header">
        <h1>عملاؤنا</h1>
        <p>نتائج حقيقية لمرضانا الكرام</p>
      </div>
      <div className="container">
        <div className="ba-grid">
          {cases.map(item => (
            <div className="client-card" key={item.id} onClick={() => setSelected(item)}>
              <div className="client-img-wrap">
                <img src={item.img} alt={item.title} />
                <div className="client-overlay">
                  <i className="ti ti-zoom-in"></i>
                </div>
              </div>
              <div className="client-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="client-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <i className="ti ti-x"></i>
            </button>
            <img src={selected.img} alt={selected.title} />
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Clients;