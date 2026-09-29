'use client'

import { useState } from 'react'

const faqs = [
  {
    label: 'TEMİZLİK',
    q: 'Makine Nasıl Temizlenir?',
    a: 'Jetinno JL300, otomatik temizleme ve durulama sistemine sahip Vario Demleme Ünitesi ile donatılmıştır. Demleme ünitesi sökülmeden, yerinde kolayca temizlenebilir. UV dezenfeksiyon teknolojisi ve otomatik yıkama sistemi sayesinde yüksek hijyen standartları sürekli korunur.',
  },
  {
    label: 'KAPASİTE',
    q: 'Makinenin İçecek Kapasitesi Nedir?',
    a: 'Jetinno JL300, tek dolumla 300 bardağa kadar üretim kapasitesi sunar. Yüksek kapasiteli hazneler sayesinde sık dolum ihtiyacı ortadan kalkar. Çekirdek kahve, yaprak çay ve filtre kahve için ayrı demleme alanları; 5 farklı toz içecek haznesi ve 4 profesyonel şurup istasyonu bulunur.',
  },
  {
    label: 'İÇECEKLER',
    q: 'Hangi İçecekler Hazırlanabilir?',
    a: 'Makine; espresso, americano, latte, cappuccino gibi sıcak kahve çeşitlerinin yanı sıra soğuk kahve, milkshake, demleme yaprak çayı, sıcak çikolata, limonata ve protein shake gibi geniş bir yelpazeyi destekler.',
  },
  {
    label: 'SOĞUTMA',
    q: 'Sıcak ve Soğuk İçecek Sistemi Nasıl Çalışır?',
    a: '700 ml kapasiteli İsveç üretimi kazan (boiler), sıcak içecekler için kullanılır. Soğuk içecekler için ise ayrı bir chiller sistemi devreye girer. Basınç ve sıcaklık sensörleri sayesinde her fincanda ideal servis sıcaklığı otomatik olarak korunur.',
  },
  {
    label: 'ÖĞÜTÜCÜ',
    q: 'Kahve Değirmeni Hakkında Neler Bilinmeli?',
    a: 'Makine, İsviçre teknolojisine sahip yüksek hassasiyetli bir kahve değirmenine sahiptir. Öğütme inceliği 125 ile 850 mikron arasında ihtiyaca göre ayarlanabilir. Bu sayede her çekirdek eşit şekilde öğütülerek mükemmel aroma elde edilir.',
  },
  {
    label: 'MİKSER',
    q: 'Mikser Sistemi Nasıl Çalışır?',
    a: 'Dakikada 20.000 devire kadar ulaşabilen ayarlanabilir yüksek hızlı mikser sistemi, süt bazlı içeceklerde yoğun ve pürüzsüz köpük elde edilmesini sağlar. Mikser hızı, içeceğin türüne göre otomatik olarak optimize edilir.',
  },
  {
    label: 'HİJYEN',
    q: 'Hijyen Güvenliği Nasıl Sağlanır?',
    a: 'Makine hermetik olarak kapanan bir sisteme sahiptir; bu sayede dış etkenlerden yalıtılmış hijyenik bir ortam oluşturulur. UV dezenfeksiyon teknolojisi, sineklik koruması ve otomatik yıkama sistemi bir arada çalışarak yüksek hijyen standartlarını sürekli aktif tutar.',
  },
  {
    label: 'UZAKTAN YÖNETİM',
    q: 'Makine Uzaktan Yönetilebilir mi?',
    a: 'Evet. Online telemetri sistemi sayesinde internet bağlantısı üzerinden makineye uzaktan erişim sağlanabilir. Tarifler, makine ayarları, kullanıcı arayüzü, reklam içerikleri, kampanyalar ve yazılım güncellemeleri tek bir panel üzerinden kolayca yönetilebilir.',
  },
  {
    label: 'KULLANIM',
    q: 'Makineyi Kullanmak İçin Teknik Bilgi Gerekli mi?',
    a: 'Hayır. Jetinno JL300, sezgisel dokunmatik ekran arayüzüyle tasarlanmıştır; teknik bilgiye ihtiyaç duymadan kolayca kullanılabilir. Kredi kartı, banka kartı, mobil ödeme ve NFC temassız ödeme seçenekleri standart olarak mevcuttur.',
  },
]

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="section section--cream" id="faq" aria-labelledby="faq-title">
      <div className="container">
        
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
