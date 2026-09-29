import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Tanıtım">
      <div className="hero__content">
        <div className="hero__main">
          <div className="hero__text">
            <h1 className="hero__title">
              İşletmenizin ihtiyacı kahve makinenizi
              <br />
              <em>72 saatte</em> yerinde teslim ediyoruz
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
            </div>
          </div>
          <div className="hero__image-container">
             {/* Boş kalsın dendiği için görsel eklenebilir veya boş bırakılabilir. İhtiyaca göre img eklenecek alan */}
          </div>
        </div>

        <div className="hero__stats" aria-label="Öne çıkan özellikler">
          <div className="stat">
            <span className="stat__value">50+</span>
            <span className="stat__label">İÇECEK SEÇENEĞİ</span>
          </div>
          <div className="stat">
            <span className="stat__value">300</span>
            <span className="stat__label">BARDAK / DOLUM</span>
          </div>
          <div className="stat">
            <span className="stat__value">15.6"</span>
            <span className="stat__label">DOKUNMATİK EKRAN</span>
          </div>
          <div className="stat">
            <span className="stat__value">7/24</span>
            <span className="stat__label">OPERATÖRSÜZ SATIŞ</span>
          </div>
        </div>
      </div>

    </section>
  )
}
