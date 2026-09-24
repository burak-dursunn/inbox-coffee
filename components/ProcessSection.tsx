/* Process Section – FIX: eşit boyutlu kutular */

const steps = [
  {
    badge: 'Adım',
    title: 'Başvuru',
    desc: 'Başvurunuzu iletin. CoffeeVar uzmanı en geç 1 saat içinde sizinle iletişime geçsin.',
  },
  {
    badge: 'Adım – İlk 2 Saat',
    title: 'Lokasyon Analizi',
    desc: 'Lokasyonunuzun yaya trafiği ve potansiyeli ücretsiz olarak analiz edilir.',
  },
  {
    badge: '3. Adım – 24 Saat',
    title: 'Sözleşme',
    desc: 'Şeffaf sözleşme koşulları garanti ile iş ortaklığımızı güvence altına alıyoruz.',
  },
  {
    badge: 'Adım – 48 Saat',
    title: 'Kurulum',
    desc: 'Kahve otomatınız teslim edilir, kurulumu tamamlanır ve içecek reçeteleri size özel olarak yapılandırılır.',
  },
  {
    badge: 'Adım – 72 Saat',
    title: 'Hazır!',
    desc: 'Kahve otomatınız hizmet vermeye başlar, müşterileriniz ilk fincanlarını içer.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section section--dark" id="kurulum" aria-labelledby="kurulum-title">
      <div className="container" style={{maxWidth: 1400}}>
        <div className="process-header">
          <div>
            <h2 className="section__title section__title--light" id="kurulum-title">
              Başvurudan İlk Fincana<br />
              <em>Sadece 72 Saatte</em>
            </h2>
          </div>
          <p className="process-header__desc">
            Tüm operasyonel süreçleri CoffeeVar olarak biz yönetiyoruz.
            Sizden beklediğimiz tek şey uygun bir lokasyon ve hizmetten
            yararlanmaya hazır olmanız.
          </p>
        </div>

        <div className="process-steps">
          {steps.map(({ badge, title, desc }) => (
            <article className="process-step" key={title}>
              <div className="process-step__badge">{badge}</div>
              <h3 className="process-step__title">{title}</h3>
              <p className="process-step__desc">{desc}</p>
            </article>
          ))}
        </div>

        <div className="process-cta">
          <a href="#iletisim" className="btn btn--gold">
            Hemen Başvurun →
          </a>
        </div>
      </div>
    </section>
  )
}
