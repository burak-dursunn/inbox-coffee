'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'

const galleryData = [
  {
    type: 'video',
    videoSrc: 'https://www.youtube.com/embed/lfY3lc4hG7U?rel=0&modestbranding=1',
    videoTitle: 'Jetinno JL300 Video Tanıtımı – CoffeeVar',
    badge: 'Video',
    tag: 'Tanıtım',
    title: 'Jetinno JL300 Tanıtımı',
    desc: 'Jetinno JL300 kahve makinesi tanıtımı.',
    images: []
  },
  {
    type: 'video',
    videoSrc: 'https://www.youtube.com/embed/oSuD-F_XPxI?rel=0&modestbranding=1',
    videoTitle: 'CoffeeVar Shorts',
    badge: 'Shorts',
    tag: 'Kısa Video',
    title: 'CoffeeVar Shorts Tanıtımı',
    desc: 'CoffeeVar deneyimine kısa bir bakış.',
    images: []
  },
  {
    type: 'slider',
    badge: 'CoffeeVar',
    tag: 'Hastaneler & Kurumlar',
    title: 'Kurumsal Yerleşimler',
    desc: 'Hastaneler ve kamusal alanlardaki kurulum örneklerimiz.',
    images: [
      '/gallery/box-4/hastane.webp',
      '/gallery/box-4/ankara1.webp',
      '/gallery/box-4/ankara3.webp',
      '/gallery/box-4/gazi-park.webp',
      '/gallery/box-4/gazi-univer.webp',
      '/gallery/box-4/izmir.webp',
    ]
  },
  {
    type: 'slider',
    badge: 'CoffeeVar',
    tag: 'AVM & Sosyal Alanlar',
    title: 'Sosyal Alan Yerleşimleri',
    desc: 'AVM, market ve sosyal tesislerdeki konumlandırmalarımız.',
    images: [
      '/gallery/box-2/migros_1.webp',
      '/gallery/box-2/migros_2.webp',
      '/gallery/box-2/migros_3.webp',
      '/gallery/box-2/havuz_2.webp',
      '/gallery/box-2/foto1.webp',
      '/gallery/box-2/foto2.webp',
      '/gallery/box-2/foto3.webp',
      '/gallery/box-2/foto4.webp',
    ]
  },
  {
    type: 'slider',
    badge: 'CoffeeVar',
    tag: 'Kafe & Büfeler',
    title: 'Kafe Konseptleri',
    desc: 'Özel kafe ve büfe alanları için kahve köşesi çözümleri.',
    images: [
      '/gallery/box-3/belpabufe.webp',
      '/gallery/box-3/tiffany_1.webp',
      '/gallery/box-3/tiffany_2.webp',
      '/gallery/box-3/tiffany_3.webp',
      '/gallery/box-3/tiffany_4.webp',
    ]
  },
  {
    type: 'slider',
    badge: 'Teknik',
    tag: 'İç Yapı',
    title: 'İç Mekanizma',
    desc: 'Makinenin teknolojik iç yapısı ve bileşenleri.',
    images: [
      '/gallery/box-1/jl300inside.svg',
    ]
  },
]

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images)
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, lightboxImages])

  return (
    <section className="gallery-section section" id="galeri" aria-labelledby="galeri-title">
      <div className="container">
        <div className="gallery-top">
          <div>
            <p className="section__eyebrow">Uygulama Örnekleri</p>
            <h2 className="section__title" id="galeri-title">Galeri</h2>
          </div>
          <p className="gallery-top__sub">
            Gerçek lokasyonlardan fotoğraf ve video içerikleri. CoffeeVar kahve otomatları
            Türkiye'nin dört bir yanındaki AVM'ler, hastaneler, iş merkezleri ve
            kamusal alanlarda hizmet vermektedir.
          </p>
        </div>

        <div className="gallery-uniform-grid">
          {galleryData.map((item, i) => (
            <article key={i} className="gallery-uniform-card">
              <div className="gallery-uniform-card__media">
                {item.type === 'video' ? (
                  <iframe
                    src={item.videoSrc}
                    title={item.videoTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading={i < 3 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <GallerySlider images={item.images} onOpen={(idx) => openLightbox(item.images, idx)} priority={i < 2} />
                )}
                <span className="gallery-uniform-card__loc">{item.badge}</span>
              </div>
              <div className="gallery-uniform-card__body">
                <span className="gallery-uniform-card__tag">{item.tag}</span>
                <p className="gallery-uniform-card__desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button className="gallery-lightbox__close" onClick={closeLightbox} aria-label="Kapat">
            <X size={32} />
          </button>
          
          {lightboxImages.length > 1 && (
            <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Önceki resim">
              <ChevronLeft size={36} />
            </button>
          )}

          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImages[lightboxIndex]}
              alt={`Galeri resmi ${lightboxIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
              quality={90}
            />
          </div>

          {lightboxImages.length > 1 && (
            <button className="gallery-lightbox__nav gallery-lightbox__nav--next" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Sonraki resim">
              <ChevronRight size={36} />
            </button>
          )}
          
          {lightboxImages.length > 1 && (
            <div className="gallery-lightbox__counter">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

function GallerySlider({ images, onOpen, priority }: { images: string[], onOpen: (index: number) => void, priority: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: 'smooth' })
  }

  const scrollRight = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (scrollRef.current) scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="gallery-slider-wrap">
      <div className="gallery-slider-scroll" ref={scrollRef}>
        {images.map((src, idx) => (
          <div key={idx} className="gallery-slider-slide" onClick={() => onOpen(idx)}>
            <Image
              src={src}
              alt={`Galeri ${idx + 1}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority && idx === 0}
            />
            <div className="gallery-slider-expand">
              <Maximize2 size={20} />
            </div>
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="gallery-slider-btn gallery-slider-btn--left" onClick={scrollLeft}><ChevronLeft size={20} /></button>
          <button className="gallery-slider-btn gallery-slider-btn--right" onClick={scrollRight}><ChevronRight size={20} /></button>
        </>
      )}
    </div>
  )
}
