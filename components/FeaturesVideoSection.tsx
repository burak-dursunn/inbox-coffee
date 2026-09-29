const features = [
  {
    emoji: '☕',
    title: 'Kaliteli Kahve, Standart Lezzet',
    desc: 'Özenle seçilmiş kahve çekirdekleri ve gelişmiş demleme sistemiyle her fincanda aynı yüksek kalite ve tutarlı lezzet.',
  },
  {
    emoji: '🥤',
    title: 'Sıcak & Soğuk İçecekler',
    desc: 'Farklı damak zevklerine uygun sıcak ve soğuk içecek seçenekleriyle günün her anında taze içecek deneyimi.',
  },
  {
    emoji: '🌿',
    title: 'Geniş İçerik Seçeneği',
    desc: 'Çekirdek kahve, yaprak çay ve filtre kahve için ayrı demleme alanları; 5 farklı toz içecek haznesi ve 4 profesyonel şurup istasyonu.',
  },
  {
    emoji: '❄️',
    title: 'Gelişmiş Soğutma Sistemi',
    desc: 'Sıcak içecekler için boyler, soğuk içecekler için chiller sistemi — ideal servis sıcaklığı her zaman sabit.',
  },
  {
    emoji: '🧼',
    title: 'Hijyenik & Otomatik Temizlik',
    desc: 'Hermetik kapanan sistem; UV dezenfeksiyon, sineklik koruması ve otomatik yıkama ile yüksek hijyen standartları.',
  },
  {
    emoji: '📱',
    title: 'Akıllı & Kolay Kullanım',
    desc: 'Sezgisel arayüz ile içeceğinizi kolayca seçin; nakit veya nakitsiz ödeme imkânıyla hızlı servis.',
  },
  {
    emoji: '📊',
    title: 'Uzaktan Yönetim',
    desc: 'Satışlar ve malzeme stokları gerçek zamanlı izlenir; dolum ve servis süreçleri daha verimli planlanır.',
  },
  {
    emoji: '⚡',
    title: 'Yüksek Kapasite',
    desc: 'Tek dolumla 300 bardağa kadar üretim kapasitesi. Yüksek kapasiteli hazneler sık dolum ihtiyacını ortadan kaldırır.',
  },
  {
    emoji: '🥄',
    title: 'Her Şey Elinizin Altında',
    desc: 'Bardak, karıştırıcı, pipet, şeker ve peçete hazır. Masa ve çöp ünitesiyle eksiksiz kahve alanı.',
  },
]

export default function FeaturesVideoSection() {
  return (
    <section className="fv-section" id="ozellikler" aria-labelledby="fv-title">

      {/* ── SAĞ: Video — absolute, boydan boya ── */}
      <div className="fv-video-col" aria-hidden="true">
        <div className="fv-video-frame">
          <video
            className="fv-video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Kahve çekirdekleri düşüyor"
          >
            <source src="/scroll-anmiaton/coffee-beans.webm" type="video/webm" />
            <source src="/scroll-anmiaton/coffee-beans.mp4" type="video/mp4" />
          </video>
          <div className="fv-video-border" />
        </div>
      </div>

      {/* ── SOL: İçerik ── */}
      <div className="fv-inner">
        <div className="fv-content">
          <div className="fv-header">
            <span className="fv-eyebrow">Öne Çıkan Özellikler</span>
            <h2 className="fv-title" id="fv-title">
              Kahvede <em>Fark Yaratan</em><br />Teknoloji
            </h2>
            <p className="fv-lead">
              Jetinno JL300 — her detayı düşünülmüş, her fincanda mükemmelliği garanti eden tam otomatik kahve makinesi.
            </p>
          </div>

          <ul className="fv-list" aria-label="Makine özellikleri">
            {features.map(({ emoji, title, desc }) => (
              <li className="fv-item" key={title}>
                <span className="fv-item__emoji" aria-hidden="true">{emoji}</span>
                <div className="fv-item__body">
                  <h3 className="fv-item__title">{title}</h3>
                  <p className="fv-item__desc">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}
