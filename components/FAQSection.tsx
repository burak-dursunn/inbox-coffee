'use client'

import { useState } from 'react'

const faqs = [
  {
    label: 'ŞARTLAR',
    q: 'Hangi Lokasyonlar Daha Uygundur?',
    a: "AVM'ler, havalimanları, otobüs terminalleri, hastaneler, üniversite kampüsleri, ofis binaları, fabrikalar ve benzeri yüksek trafikli lokasyonlar idealdir.",
  },
  {
    label: 'KİRALAMA',
    q: 'Kiralama Modelinde İş Ortağından Neler Beklenir?',
    a: 'Sadece 1 metrekarelik bir alan, elektrik ve su bağlantısı (veya damacana) sağlamanız yeterlidir. Tüm operasyonu biz yönetiyoruz.',
  },
  {
    label: 'SATIN ALMA',
    q: 'Kahve Otomatını Satın Alabilir miyim?',
    a: 'Evet, kiralama modelimizin yanı sıra satın alma opsiyonumuz da mevcuttur.',
  },
  {
    label: 'YATIRIMIN GERİ DÖNÜŞ SÜRESİ',
    q: 'Kahve Otomatının Yatırım Geri Dönüşü Ne Kadar Sürer?',
    a: 'Lokasyonun trafiğine bağlı olarak ortalama 6 ile 12 ay arasında yatırım maliyeti geri dönmektedir.',
  },
  {
    label: 'SERVİS',
    q: 'Elektrik ve Su Giderleri Kime Aittir?',
    a: 'Elektrik ve su tüketim giderleri işletmeye aittir. Makine enerji tasarruflu olup tüketimi çok düşüktür.',
  },
  {
    label: 'GARANTİ',
    q: 'Kahve Otomatı Garanti Kapsamında mı?',
    a: 'Evet, tüm makinelerimiz 2 yıl tam kapsamlı garanti altındadır.',
  },
  {
    label: 'ÖDEME SİSTEMLERİ',
    q: 'Müşteriler Ödemelerini Nasıl Yapabilir?',
    a: 'Kredi kartı, banka kartı, mobil ödeme ve NFC ile temassız ödeme seçenekleri mevcuttur. Nakit ödeme opsiyoneldir.',
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="section section--cream" id="faq" aria-labelledby="faq-title">
      <div className="container" style={{maxWidth: 1400}}>
        
        <div className="faq-header-modern">
          <h2 className="section__title" id="faq-title">
            Sıkça <em>Sorulan Sorular</em>
          </h2>
          <p className="faq-header-modern__desc">
            WhatsApp ve telefon üzerinden müşteri temsilcilerimizle iletişime geçebilir, ortalama 15 dakika içinde geri dönüş alabilirsiniz.
          </p>
        </div>

        <div className="faq-list-modern">
          {faqs.map(({ label, q, a }, i) => {
            const isOpen = openIdx === i
            return (
              <div className={`faq-item-modern${isOpen ? ' open' : ''}`} key={i}>
                <button
                  className="faq-question-modern"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <div className="faq-question-modern__left">
                    <span className="faq-label">{label}</span>
                    <span className="faq-q-text">{q}</span>
                  </div>
                  <div className="faq-icon-modern">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {isOpen ? (
                        <path d="M5 12h14" />
                      ) : (
                        <path d="M12 5v14M5 12h14" />
                      )}
                    </svg>
                  </div>
                </button>
                <div className={`faq-answer-modern${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
                  <p>{a}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="faq-cta-box">
          <div className="faq-cta-box__left">
            <h3 className="faq-cta-box__title">Aradığınız Yanıtı Bulamadınız mı?</h3>
            <p className="faq-cta-box__desc">Uzman ekibimizle iletişime geçin. Sorularınızı en geç 1 saat içinde yanıtlıyoruz.</p>
          </div>
          <a href="#iletisim" className="btn btn--primary">
            Soru Sorun <span>→</span>
          </a>
        </div>

      </div>
    </section>
  )
}
