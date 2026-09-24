'use client'

import { useState, type FormEvent } from 'react'

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function ContactSection() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.querySelector('#name') as HTMLInputElement).value.trim()
    const phone = (form.querySelector('#phone') as HTMLInputElement).value.trim()
    if (!name || !phone) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      form.reset()
      setTimeout(() => setSuccess(false), 5000)
    }, 1200)
  }

  return (
    <section className="section section--light" id="iletisim" aria-labelledby="iletisim-title">
      <div className="container">
        <div className="contact-layout">
          {/* Left info */}
          <div className="contact-info" data-animate="fade-left">
            <p className="section__eyebrow">İletişim</p>
            <h2 className="section__title" id="iletisim-title">
              Kahve Otomatı<br /><em>Çözümlerimiz Hakkında</em><br />Bilgi Alın
            </h2>
            <p className="contact-info__desc">
              Lokasyonunuz için en uygun çözümü birlikte belirleyelim.
              Formu doldurun, uzmanımız en kısa sürede sizinle iletişime geçsin.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.42a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                </svg>
                <span>İletişim bilgileri yakında eklenecek</span>
              </div>
              <div className="contact-detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
                <span>E-posta bilgisi yakında eklenecek</span>
              </div>
            </div>
            <a href="https://wa.me/" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp&apos;tan Yazın
            </a>
          </div>

          {/* Right form */}
          <div className="contact-form-wrapper" data-animate="fade-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Ad Soyad *</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Adınızı girin" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Telefon *</label>
                  <input type="tel" id="phone" name="phone" className="form-input" placeholder="05XX XXX XX XX" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">E-posta</label>
                <input type="email" id="email" name="email" className="form-input" placeholder="ornek@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="location" className="form-label">Lokasyon Türü</label>
                <select id="location" name="location" className="form-input form-select">
                  <option value="">Lokasyon türünü seçin</option>
                  <option value="avm">AVM</option>
                  <option value="hastane">Hastane</option>
                  <option value="universite">Üniversite</option>
                  <option value="ofis">Ofis Binası</option>
                  <option value="fabrika">Fabrika</option>
                  <option value="havaalani">Havalimanı / Terminal</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Mesajınız</label>
                <textarea id="message" name="message" className="form-input form-textarea" placeholder="Lokasyonunuz ve beklentileriniz hakkında bilgi verin..." rows={4} />
              </div>
              <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
                {loading ? 'Gönderiliyor...' : 'Başvuru Gönder →'}
              </button>
              {success && (
                <div className="form-success show" role="alert" aria-live="polite">
                  ✓ Başvurunuz alındı! En kısa sürede sizinle iletişime geçeceğiz.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
