import Image from 'next/image'
import Link from 'next/link'

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16, flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.02 2 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const WASmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16, flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16, flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 16, height: 16, flexShrink: 0, marginTop: 2 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const WAFloatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22, flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer">
        <div className="footer__inner">

          <div className="footer__top">

            {/* Brand + contact */}
            <div className="footer__brand">
              <Link href="/" aria-label="CoffeeVar Ana Sayfa">
                <Image
                  src="/images/logo.webp"
                  alt="CoffeeVar Logo"
                  width={130}
                  height={52}
                  loading="lazy"
                  style={{ height: '46px', width: 'auto', filter: 'brightness(2) saturate(.4)' }}
                />
              </Link>
              <p className="footer__tagline">
                Jetinno JL300 otomatları: satış, kiralama, malzeme tedariki ve bakım. Türkiye genelinde teslimat.
              </p>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <PhoneIcon />
                  <span className="footer__contact-empty"></span>
                </div>
                <div className="footer__contact-item">
                  <WASmIcon />
                  <span className="footer__contact-empty"></span>
                </div>
                <div className="footer__contact-item">
                  <MailIcon />
                  <span className="footer__contact-empty"></span>
                </div>
                <div className="footer__contact-item footer__contact-item--address">
                  <MapIcon />
                  <span className="footer__contact-empty"></span>
                </div>
              </div>
            </div>

            {/* Link columns */}
            <div className="footer__cols">
              <div className="footer__col">
                <h4 className="footer__col-title">ÜRÜN</h4>
                <ul>
                  <li><a href="#urun">Jetinno JL300</a></li>
                  <li><a href="#ozellikler">Teknik Özellikler</a></li>
                  <li><a href="#icecekler">İçecek Menüsü</a></li>
                  <li><a href="#galeri">Galeri</a></li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className="footer__col-title">HİZMETLER</h4>
                <ul>
                  <li><a href="#kurulum">Kurulum Süreci</a></li>
                  <li><a href="#iletisim">Kiralama</a></li>
                  <li><a href="#iletisim">Bakım &amp; Teknik Servis</a></li>
                  <li><a href="#iletisim">Malzeme Tedariki</a></li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className="footer__col-title">ŞİRKET HAKKINDA</h4>
                <ul>
                  <li><a href="#iletisim">Hakkımızda</a></li>
                  <li><a href="#iletisim">İletişim</a></li>
                  <li><a href="#faq">SSS</a></li>
                </ul>
              </div>
              <div className="footer__col">
                <h4 className="footer__col-title">ŞEHİRLER</h4>
                <ul>
                  <li><a href="#iletisim">İstanbul</a></li>
                  <li><a href="#iletisim">Ankara</a></li>
                  <li><a href="#iletisim">İzmir</a></li>
                  <li><a href="#iletisim">Bursa</a></li>
                  <li><a href="#iletisim">Antalya</a></li>
                </ul>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="footer__bottom">
            <p className="footer__copy">© {currentYear} CoffeeVar – Antalya, Türkiye · Tüm hakları saklıdır.</p>
          </div>

        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp'tan iletişime geç"
      >
        <WAFloatIcon />
        <span>WhatsApp&apos;tan yazın</span>
      </a>
    </>
  )
}
