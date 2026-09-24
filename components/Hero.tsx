import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Tanıtım">
      <div className="hero__content">
        <div className="hero__main">
          <div className="hero__text">
            <h1 className="hero__title">
              Anahtar teslim <em>kahve işi</em> —
              <br />
              <em>72 saatte</em> hazır
            </h1>
            <p className="hero__subtitle">
              Lokasyonunuz için CoffeeVar'ın özel konfigürasyonunda
              tam otomatik <strong>Jetinno JL300</strong> kahve makinesi.
              Kurulum, ayar ve servis bizden.
            </p>
            <div className="hero__actions">
              <a href="#iletisim" className="btn btn--primary">
                Başvuru gönder <span className="btn-arrow">→</span>
              </a>
              <a href="#urun" className="btn btn--white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: 6}}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                İş ortaklığı şartları
              </a>
            </div>
          </div>
          <div className="hero__image-container">
             {/* Boş kalsın dendiği için görsel eklenebilir veya boş bırakılabilir. İhtiyaca göre img eklenecek alan */}
          </div>
        </div>

        <div className="hero__stats" aria-label="Öne çıkan rakamlar">
          <div className="stat">
            <span className="stat__value">0 TL</span>
            <span className="stat__label">KİRALAMADA BAŞLANGIÇ</span>
          </div>
          <div className="stat">
            <span className="stat__value">20–85%</span>
            <span className="stat__label">CİRODAN PARTNERE</span>
          </div>
          <div className="stat">
            <span className="stat__value">100+</span>
            <span className="stat__label">MEMNUN MÜŞTERİ</span>
          </div>
          <div className="stat">
            <span className="stat__value">7/24</span>
            <span className="stat__label">OPERATÖRSÜZ SATIŞ</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>SCROLL</span>
        <div className="scroll-hint__line" />
      </div>
    </section>
  )
}
