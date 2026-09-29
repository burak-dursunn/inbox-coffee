import Image from 'next/image'

const items: {
  type: 'image' | 'video'
  src?: string
  alt?: string
  badge: string
  tag: string
  title: string
  desc: string
  videoSrc?: string
  videoTitle?: string
}[] = [
  {
    type: 'video',
    videoSrc: 'https://www.youtube.com/embed/lfY3lc4hG7U?rel=0&modestbranding=1',
    videoTitle: 'Jetinno JL300 Video Tanıtımı – CoffeeVar',
    badge: 'CoffeeVar',
    tag: 'Jetinno JL300 Kahve Otomatı',
    title: 'Jetinno JL300 Tanıtımı',
    desc: 'Jetinno JL300\'ü yakından tanıyın.',
  },
  {
    type: 'image',
    src: '/resimler/gallery-1.webp',
    alt: 'İç Mekan Kabini',
    badge: 'CoffeeVar',
    tag: 'İç Mekan Kabini',
    title: 'İç Mekan Kabini',
    desc: 'İç mekân kullanımı için kahve otomatı kabini.',
  },
  {
    type: 'image',
    src: '/resimler/gallery-2.webp',
    alt: 'Dış Mekan Kabini',
    badge: 'CoffeeVar',
    tag: 'Dış Mekan Kabini',
    title: 'Dış Mekan Kabini',
    desc: 'Dış mekân kullanımı için kahve otomatı kabini.',
  },
  {
    type: 'image',
    src: '/resimler/gallery-4.webp',
    alt: 'Erdem Hastanesi Istanbul',
    badge: 'CoffeeVar',
    tag: 'Yerleştirme Örnekleri',
    title: 'Yerleştirme Örnekleri',
    desc: 'CoffeeVar kahve otomatları, farklı otomat ve satış çözümleriyle birlikte kullanılabilir.',
  },
  {
    type: 'image',
    src: '/resimler/gallery-5.webp',
    alt: 'Salı Pazarı AVM',
    badge: 'CoffeeVar',
    tag: 'İş Ortaklarımız',
    title: 'İş Ortaklarımız',
    desc: 'Bizimle Güvenle Çalışan Markalar',
  },
  {
    type: 'image',
    src: '/resimler/gallery-3.webp',
    alt: 'CoffeeVar Yerleşim',
    badge: 'CoffeeVar',
    tag: 'Kurulum & Yerleştirme',
    title: 'Kurulum & Yerleştirme',
    desc: 'Profesyonel kurulum ve yerleştirme süreci.',
  },
  {
    type: 'image',
    src: '/resimler/gallery-6.webp',
    alt: 'CoffeeVar İşletme',
    badge: 'CoffeeVar',
    tag: 'İşletme Ortamı',
    title: 'İşletme Ortamı',
    desc: 'Gerçek ortamda kesintisiz performans.',
  },
  {
    type: 'image',
    src: '/resimler/gallery-7.webp',
    alt: 'CoffeeVar Tanıtım',
    badge: 'CoffeeVar',
    tag: 'Tanıtım Görselleri',
    title: 'Tanıtım Görselleri',
    desc: "Türkiye'ye özel yenilikçi çözümler.",
  },
]


export default function GallerySection() {

  return (
    <section className="gallery-section section" id="galeri" aria-labelledby="galeri-title">
      <div className="container">

        {/* Başlık */}
        <div className="gallery-top">
          <div>
            <p className="section__eyebrow">Uygulama Örnekleri</p>
            <h2 className="section__title" id="galeri-title">
              Galeri
            </h2>
          </div>
          <p className="gallery-top__sub">
            Gerçek lokasyonlardan fotoğraf ve video içerikleri. CoffeeVar kahve otomatları
            Türkiye'nin dört bir yanındaki AVM'ler, hastaneler, iş merkezleri ve
            kamusal alanlarda hizmet vermektedir.
          </p>
        </div>

        {/* Eşit kare kart grid – 3 kolon */}
        <div className="gallery-uniform-grid">
          {items.map((item, i) => (
            <article key={i} className="gallery-uniform-card">
              {/* Görsel alanı */}
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
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                {/* Sol-alt konum etiketi */}
                <span className="gallery-uniform-card__loc">{item.badge}</span>
              </div>

              {/* Alt bilgi */}
              <div className="gallery-uniform-card__body">
                <span className="gallery-uniform-card__tag">{item.tag}</span>
                <p className="gallery-uniform-card__desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
