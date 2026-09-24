const specs = [
  {
    num: '01',
    name: 'Dokunmatik Ekran',
    desc: 'Modern kullanıcı arayüzü ve şık menü tasarımıyla kolay ve hızlı kullanım sunar.',
    value: '15.6"',
  },
  {
    num: '02',
    name: 'Geniş Kapasiteli Hazneler',
    desc: '3 kg\'a kadar çekirdek kahve ve 2 litreye kadar hammadde kapasitesiyle daha uzun süre kesintisiz hizmet verir.',
    value: '3 kg + 2 L',
  },
  {
    num: '03',
    name: 'Uzaktan Takip ve Yönetim',
    desc: 'Satışlar, stok durumu ve makine performansı gerçek zamanlı olarak uzaktan takip edilebilir.',
    value: '7/24',
  },
  {
    num: '04',
    name: 'Otomatik Temizleme + UV Hijyen',
    desc: 'Otomatik yıkama sistemi ve UV dezenfeksiyon teknolojisi sayesinde maksimum hijyen ve güvenilir çalışma sağlar.',
    value: 'Otomatik',
  },
  {
    num: '05',
    name: 'Yüksek Kapasiteli Bardak Sistemi',
    desc: '250 bardağa kadar otomatik bardak yükleme kapasitesiyle yoğun müşteri trafiğinde kesintisiz satış imkânı sunar.',
    value: '250',
  },
]

export default function SpecsSection() {
  return (
    <section className="section section--light" id="ozellikler" aria-labelledby="ozellikler-title">
      <div className="container" style={{ maxWidth: 1200, marginInline: 'auto' }}>
        <div className="specs-header">
          <div>
            <h2 className="section__title" id="ozellikler-title">
              JL300 Neden<br />
              <em>Türkiye'deki Kahve Otomatı<br />İşletmeleri İçin İdeal Tercih?</em>
            </h2>
          </div>
          <p className="specs-header__desc">
            Geniş hacimli hammadde hazneleri, otomatik yıkama sistemi, dayanıklı vandalizme karşı
            korumalı gövdesi ve uzaktan telemetri teknolojisi sayesinde Jetinno JL300, yoğun
            kullanıma sahip lokasyonlarda kesintisiz ve verimli satış için ihtiyaç duyduğunuz
            tüm özellikleri bir arada sunar.
          </p>
        </div>

        <div className="specs-layout-new">
          <div className="specs-video-card" data-animate="fade-up">
            <div className="specs-video-embed">
              <iframe
                src="https://www.youtube.com/embed/lfY3lc4hG7U?rel=0&modestbranding=1"
                title="JL300 Video Tanıtımı – Jetinno kahve otomatı"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="specs-video-info">
              <h3 className="specs-video-title">JL300 Video Tanıtımı</h3>
              <p className="specs-video-desc">
                Jetinno JL300'ün kullanıcı arayüzünü, iç donanımını, içecek hazırlama sürecini
                ve gerçek bir işletme ortamındaki performansını yakından inceleyin.
              </p>
              <a href="#iletisim" className="btn btn--gold btn--full" style={{ marginTop: 16 }}>
                MAKİNEYİ İNCELEYİN
              </a>
            </div>
          </div>

          <div className="specs-features-list" data-animate="fade-up">
            {specs.map((feat) => (
              <div className="specs-feat-item" key={feat.num}>
                <div className="specs-feat-num">{feat.num}</div>
                <div className="specs-feat-content">
                  <h4 className="specs-feat-title">{feat.name}</h4>
                  <p className="specs-feat-desc">{feat.desc}</p>
                </div>
                <div className="specs-feat-value">{feat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
