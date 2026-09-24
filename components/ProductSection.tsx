'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  {
    src: '/ürün-görselleri/jetinno-tech-mixers.webp',
    alt: 'Jetinno Yüksek Hızlı Mikser',
    caption: 'Yüksek Hızlı Mikser Teknolojisi – Dakikada 20.000 devire kadar ulaşabilen mikser',
  },
  {
    src: '/ürün-görselleri/jetinno-tech-brewer.webp',
    alt: 'Jetinno Espresso Brewer',
    caption: 'Yüksek Basınçlı Espresso Brewer – Her fincanda mükemmel aroma ve krema',
  },
  {
    src: '/ürün-görselleri/jetinno-tech-grinder.webp',
    alt: 'Jetinno Hassas Öğütücü',
    caption: 'Hassas Öğütücü – Tutarlı ve taze öğütme teknolojisi',
  },
  {
    src: '/ürün-görselleri/jetinno-tech-hydraulic.webp',
    alt: 'Jetinno Hidrolik Sistem',
    caption: 'Gelişmiş Hidrolik Sistem – Kesintisiz ve güvenilir akış kontrolü',
  },
  {
    src: '/ürün-görselleri/jetinno-tech-telemetry.webp',
    alt: 'Jetinno Uzaktan Yönetim',
    caption: 'Uzaktan Telemetri – Gerçek zamanlı takip ve merkezi yönetim',
  },
]

const features = [
  {
    title: '20+ Yıllık Sektör Deneyimi',
    desc: 'Uzun yıllara dayanan bilgi birikimi ve tecrübesiyle Jetinno, yüksek kaliteli kahve otomatları geliştirerek sektörün lider markası olmuştur.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M9 3v18M3 9h6"/>
      </svg>
    ),
  },
  {
    title: '200\'den Fazla Patent',
    desc: 'Jetinno\'nun yenilikçi teknolojileri, her fincanda üstün kahve lezzeti ve her zaman aynı yüksek kaliteyi sunar.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    title: '110\'dan Fazla Ülkede Tercih Ediliyor',
    desc: 'Jetinno, güvenilirliği ve üstün performansıyla dünyanın dört bir yanında milyonlarca kahve severin ve işletmenin tercih ettiği global bir markadır.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M2 12h4m12 0h4M12 2v4m0 12v4"/>
      </svg>
    ),
  },
]

export default function ProductSection() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 4500)
    return () => clearInterval(timer)
  }, [current, goTo])

  return (
    <section className="section section--gold" id="urun" aria-labelledby="urun-title">
      <div className="container" style={{maxWidth: 1400}}>
        <div className="section__header text-center">
          <h2 className="section__title" id="urun-title">
            Jetinno'yu Kahve Otomatı<br />
            <em>Sektörünün Lideri Yapan Nedir?</em>
          </h2>
        </div>
        <div className="product-layout">
          {/* Slider — FIX: daha büyük */}
          <div className="product-slider" id="productSlider">
            <div className="slider-dots" aria-hidden="true">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot${current === i ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Slayt ${i + 1}`}
                />
              ))}
            </div>
            {slides.map((slide, i) => (
              <div key={i} className={`slide${current === i ? ' active' : ''}`}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 1100px) 100vw, 55vw"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <p className="slide__caption">{slide.caption}</p>
              </div>
            ))}
            <button
              className="slider-btn slider-btn--prev"
              onClick={() => goTo(current - 1)}
              aria-label="Önceki slayt"
            >
              ‹
            </button>
            <button
              className="slider-btn slider-btn--next"
              onClick={() => goTo(current + 1)}
              aria-label="Sonraki slayt"
            >
              ›
            </button>
          </div>

          {/* Feature cards */}
          <div className="product-features">
            {features.map(({ title, desc, icon }) => (
              <div className="feature-card" key={title}>
                <div className="feature-card__icon">{icon}</div>
                <div>
                  <h3 className="feature-card__title">{title}</h3>
                  <p className="feature-card__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
