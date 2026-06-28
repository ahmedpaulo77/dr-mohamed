import React, { useState } from 'react';
import { services } from '../data/services';
import './Services.css';

function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="page">
      <div className="page-header services-header">
        <h1>خدماتنا</h1>
        <p>أشمل خدمات طب وجراحة العيون في بنها</p>
      </div>

      <div className="container">
        <div className="services-grid">
          {services.map(service => (
            <div
              className="service-card"
              key={service.id}
              onClick={() => setSelected(service)}
            >
              <div className="service-img-wrap">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-card-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-more">اعرف أكثر</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <i className="ti ti-x"></i>
            </button>
            <div className="modal-img-wrap">
              <img src={selected.img} alt={selected.title} />
            </div>
            <h2>{selected.title}</h2>
            <p>{selected.details}</p>
            <a
              href={`https://wa.me/201206560418?text=${selected.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="modal-btn"
            >
              <i className="ti ti-brand-whatsapp"></i>
              <span>استفسر عن هذه الخدمة</span>
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

export default Services;