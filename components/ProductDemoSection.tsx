'use client'

import { useState } from 'react'

const features = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Vario Demleme Ünitesi',
    desc: 'Otomatik temizleme ve durulama sistemi sayesinde demleme ünitesi sökülmeden kolayca temizlenebilir.',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Hassas Kahve Değirmeni',
    desc: 'İsviçre teknolojisine sahip yüksek hassasiyetli değirmen, öğütme inceliğini 125–850 mikron arasında ayarlayarak mükemmel aroma elde edilmesini sağlar.',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: 'Gelişmiş Hidrolik Sistem',
    desc: '700 ml kapasiteli İsveç üretimi kazan (boiler) ile donatılmıştır. Basınç ve sıcaklık sensörleri sayesinde her fincanda ideal su sıcaklığı korunur.',
  },
  {
    num: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 6.48 7.52 2 2 2" />
        <path d="M12 12c0-5.52 4.48-10 10-10" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Yüksek Hızlı Mikser',
    desc: 'Dakikada 20.000 devire kadar ulaşabilen ayarlanabilir mikser sistemi, süt bazlı içeceklerde yoğun ve pürüzsüz köpük elde edilmesini sağlar.',
  },
  {
    num: '05',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Online Telemetri & Uzaktan Yönetim',
    desc: 'İnternet bağlantısı üzerinden tarifler, makine ayarları, reklam içerikleri, kampanyalar ve yazılım güncellemeleri tek merkezden kolayca yönetilebilir.',
  },
]

export default function ProductDemoSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="pd-section" id="teknoloji" aria-labelledby="pd-title">
      <div className="pd-inner">

        {/* SOL: Video */}
        <div className="pd-video-col">
          <div className="pd-video-wrap">
            <video
              className="pd-video"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Kahve otomatı ürün tanıtım videosu"
            >
              <source src="/özellikler/product-demo.webm" type="video/webm" />
              <source src="/özellikler/product-demo.mp4" type="video/mp4" />
            </video>
            {/* Subtle border/glow overlay */}
            <div className="pd-video-glow" aria-hidden="true" />
          </div>
        </div>

        {/* SAĞ: İçerik */}
        <div className="pd-content">
          <div className="pd-header">
            <span className="pd-eyebrow">Sektör Lideri Teknoloji</span>
            <h2 className="pd-title" id="pd-title">
              Jetinno&apos;yu Kahve Otomatı<br />
              <em>Sektörünün Lideri Yapan Nedir?</em>
            </h2>
          </div>

          <ul className="pd-list" role="list">
            {features.map(({ num, icon, title, desc }, i) => (
              <li
                key={num}
                className={`pd-item${activeFeature === i ? ' pd-item--active' : ''}`}
                onMouseEnter={() => setActiveFeature(i)}
                onClick={() => setActiveFeature(i)}
              >
                <div className="pd-item__left">
                  <span className="pd-item__icon" aria-hidden="true">{icon}</span>
                  <span className="pd-item__num" aria-hidden="true">{num}</span>
                </div>
                <div className="pd-item__body">
                  <h3 className="pd-item__title">{title}</h3>
                  <p className="pd-item__desc">{desc}</p>
                </div>
                <div className="pd-item__arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
