'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

const checks = [
  'Yalnızca seçkin üreticilerden temin edilen çekirdek kahve kullanılır.',
  'Tüm hammaddeler kalite ve gıda güvenliği sertifikalarına sahiptir.',
  'Şuruplar CoffeeVar\'a özel reçetelerle geliştirilmiştir.',
  'Doğal iri yapraklı siyah çay ile gerçek çay lezzeti sunulur.',
]

const tags = [
  'Sıcak Kahve Çeşitleri',
  'Soğuk Kahve Çeşitleri',
  'Demleme Yaprak Çay',
  'Sıcak Çikolata',
  'Milkshake',
  'Limonata Çeşitleri',
  'Protein Shake',
]

// Büyük arka plan resimleri
const bgSlides = [
  { src: '/menu/ingr4-2.webp', title: 'Sıcak Kahve Çeşitleri' },
  { src: '/menu/ingr5-1.webp', title: 'Soğuk Kahve & Milkshake' },
  { src: '/menu/ingr6-1.webp', title: 'Demleme Yaprak Çay' },
  { src: '/menu/ingr7-1.webp', title: 'Limonata & Soğuk İçecekler' },
  { src: '/menu/ingr8-1.webp', title: 'Özel İçecekler' },
]

// Fullscreen'de gösterilecek tüm menü görselleri
const allMenuImages = [
  { src: '/menu/menu-1.webp', title: 'Menü 1' },
  { src: '/menu/menu-2.webp', title: 'Menü 2' },
  { src: '/menu/menu-3.webp', title: 'Menü 3' },
  { src: '/menu/menu-4.webp', title: 'Menü 4' },
]

export default function BeveragesSection() {
  const [active, setActive] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSlide, setModalSlide] = useState(0)

  const nextBg = useCallback(() => {
    setActive((prev) => (prev + 1) % bgSlides.length)
  }, [])

  // Otomatik arka plan geçişi
  useEffect(() => {
    const interval = setInterval(nextBg, 4000)
    return () => clearInterval(interval)
  }, [nextBg])

  // ESC ile modalı kapat
  useEffect(() => {
    if (!modalOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false)
      if (e.key === 'ArrowRight') setModalSlide((p) => (p + 1) % allMenuImages.length)
      if (e.key === 'ArrowLeft') setModalSlide((p) => (p - 1 + allMenuImages.length) % allMenuImages.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  return (
    <>
      {/* ── Menu Showcase Section ── */}
      <section className="menu-showcase" id="icecekler" aria-labelledby="menu-title">
        <div className="container">
          <div className="menu-showcase__inner">

            {/* Sol: Metin – daha geniş */}
            <div className="menu-text" data-animate="fade-left">
              <p className="section__eyebrow">50+ İçecek Çeşidi</p>
              <h2 className="section__title section__title--large" id="menu-title">
                Türkiye'ye Özel,<br />
                En Kaliteli <em>İçeriklerle</em><br />
                Hazırlanan İçecekler
              </h2>
              <p className="menu-text__body">
                CoffeeVar kahve otomatları; sıcak ve soğuk kahve çeşitleri, demleme
                yaprak çay, limonata, milkshake, sıcak çikolata ve protein shake
                gibi geniş bir içecek yelpazesi sunar. Menü, bulunduğu lokasyonun
                yapısına, hedef müşteri kitlesine ve tüketici alışkanlıklarına göre
                kolayca özelleştirilebilir.
              </p>
              <ul className="menu-check-list">
                {checks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="menu-tag-group">
                {tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Sağ: Menü Slider */}
            <div data-animate="fade-right">
              <div className="menu-slider-wrap">

                {/* Büyük arka plan resimleri – smooth geçiş */}
                <div className="menu-main-img" aria-hidden="true">
                  {bgSlides.map((slide, i) => (
                    <Image
                      key={i}
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className={active === i ? 'active' : ''}
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 45vw"
                      priority={i === 0}
                    />
                  ))}
                </div>

                {/* Karartı gradient */}
                <div className="menu-slider-overlay" aria-hidden="true" />

                {/* Sol-üst MENU badge */}
                <div className="menu-showcase-badge" aria-hidden="true">MENU</div>

                {/* Sağ-üst sayaç */}
                <div className="menu-count-badge" aria-hidden="true">
                  <span className="menu-count-badge__label">50+</span>
                  <span className="menu-count-badge__num">içecek</span>
                  <span className="menu-count-badge__sub">seçeneği</span>
                </div>

                {/* Sol-alt: Menü preview kartı */}
                <button
                  className="menu-preview-card"
                  onClick={() => { setModalSlide(active % allMenuImages.length); setModalOpen(true) }}
                  aria-label="Menüyü tam ekran görüntüle"
                >
                  <div className="menu-preview-card__img">
                    {/* active state'ine göre sırayla değişen menü önizlemesi */}
                    {allMenuImages.map((img, i) => {
                      const isActive = (active % allMenuImages.length) === i;
                      return (
                        <Image
                          key={i}
                          src={img.src}
                          alt={`Menü önizleme ${i + 1}`}
                          fill
                          style={{
                            objectFit: 'cover',
                            opacity: isActive ? 1 : 0,
                            transition: 'opacity 0.6s ease'
                          }}
                          sizes="240px"
                        />
                      )
                    })}
                  </div>
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Fullscreen Menü Modal ── */}
      {modalOpen && (
        <div
          className="menu-fullscreen-overlay"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menü tam ekran görünümü"
        >
          <div
            className="menu-fullscreen-inner"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Kapat */}
            <button
              className="menu-fullscreen-close"
              onClick={() => setModalOpen(false)}
              aria-label="Kapat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Büyük resim */}
            <div className="menu-fullscreen-img">
              {allMenuImages.map((img, i) => (
                <Image
                  key={i}
                  src={img.src}
                  alt={img.title}
                  fill
                  className={modalSlide === i ? 'active' : ''}
                  style={{ objectFit: 'contain' }}
                  sizes="100vw"
                  priority
                />
              ))}
            </div>

            {/* Sol ok */}
            <button
              className="menu-fullscreen-nav menu-fullscreen-nav--prev"
              onClick={() => setModalSlide((p) => (p - 1 + allMenuImages.length) % allMenuImages.length)}
              aria-label="Önceki"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Sağ ok */}
            <button
              className="menu-fullscreen-nav menu-fullscreen-nav--next"
              onClick={() => setModalSlide((p) => (p + 1) % allMenuImages.length)}
              aria-label="Sonraki"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Caption + dots */}
            <div className="menu-fullscreen-footer">
              <span className="menu-fullscreen-title">{allMenuImages[modalSlide].title}</span>
              <div className="menu-fullscreen-dots">
                {allMenuImages.map((_, i) => (
                  <button
                    key={i}
                    className={`menu-fullscreen-dot${modalSlide === i ? ' active' : ''}`}
                    onClick={() => setModalSlide(i)}
                    aria-label={`Slayt ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
