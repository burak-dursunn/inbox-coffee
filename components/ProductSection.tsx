'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  {
    src: '/özellikler/özellik-resmi-1.jpg',
    alt: 'Jetinno Yüksek Hızlı Mikser',
    caption: 'Yüksek Hızlı Mikser Teknolojisi – Dakikada 20.000 devire kadar ulaşabilen mikser',
  },
  {
    src: '/özellikler/özellik-resmi-2.jpg',
    alt: 'Jetinno Espresso Brewer',
    caption: 'Yüksek Basınçlı Espresso Brewer – Her fincanda mükemmel aroma ve krema',
  },
  {
    src: '/özellikler/özellik-resmi-3.jpg',
    alt: 'Jetinno Hassas Öğütücü',
    caption: 'Hassas Öğütücü – Tutarlı ve taze öğütme teknolojisi',
  },
  {
    src: '/özellikler/özellik-resmi-4.jpg',
    alt: 'Jetinno Hidrolik Sistem',
    caption: 'Gelişmiş Hidrolik Sistem – Kesintisiz ve güvenilir akış kontrolü',
  },
  {
    src: '/özellikler/özellik-resmi-5.jpg',
    alt: 'Jetinno Uzaktan Yönetim',
    caption: 'Uzaktan Telemetri – Gerçek zamanlı takip ve merkezi yönetim',
  },
]

const features = [
  {
    title: '200\'den Fazla Patent',
    desc: 'Jetinno\'nun yenilikçi teknolojileri, her fincanda üstün kahve lezzeti ve her zaman aynı yüksek kaliteyi sunar.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Kaliteli Kahve Çekirdekleri',
    desc: 'Özenle seçilmiş kaliteli kahve çekirdekleriyle, her fincanda taze ve aromatik kahve deneyimi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Sıcak & Soğuk İçecek Seçenekleri',
    desc: 'Sıcak kahvelerden ferahlatıcı soğuk içeceklere kadar farklı damak zevklerine uygun seçenekler.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
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
      <div className="container">
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
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  sizes="(max-width: 1100px) 100vw, 55vw"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
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
