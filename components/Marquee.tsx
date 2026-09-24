import React from 'react'

const CoffeeBean = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="marquee-bean">
    <path d="M12,2C7.3,2,3.4,4.9,2.4,9.3c-0.2,1-0.2,2.3,0,3.4c1,4.4,4.9,7.3,9.6,7.3c4.7,0,8.6-2.9,9.6-7.3 c0.2-1,0.2-2.3,0-3.4C20.6,4.9,16.7,2,12,2z M12.8,17.9C11,17.2,9.9,14.8,9.7,11.5C9.6,8.2,10.6,5.8,12.4,5.1 C14.1,5.8,15.3,8.2,15.4,11.5C15.6,14.8,14.5,17.2,12.8,17.9z"/>
  </svg>
)

export default function Marquee() {
  const topItems = [
    '72 Saatte Kurulum ve Faaliyete Geçiş',
    'Günlük 300 Bardağa Kadar Servis Kapasitesi',
    '50\'den Fazla İçecek Seçeneği',
    '0 TL Başlangıç Yatırımı'
  ]

  const bottomItems = [
    'DEMLEME YAPRAK ÇAY',
    'LİMONATA ÇEŞİTLERİ',
    'MİLKSHAKE',
    'PROTEİN SHAKE',
    'UZAKTAN TAKİP VE YÖNETİM',
    'OTOMATİK YIKAMA + UV HİJYEN SİSTEMİ'
  ]

  // Duplicate for seamless loop
  const allTopItems = [...topItems, ...topItems, ...topItems]
  const allBottomItems = [...bottomItems, ...bottomItems, ...bottomItems]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track marquee__track--top">
        {allTopItems.map((item, i) => (
          <React.Fragment key={`top-item-group-${i}`}>
            <span key={`top-item-${i}`}>{item}</span>
            <span key={`top-dot-${i}`} className="dot"><CoffeeBean /></span>
          </React.Fragment>
        ))}
      </div>
      <div className="marquee__divider"></div>
      <div className="marquee__track marquee__track--bottom">
        {allBottomItems.map((item, i) => (
          <React.Fragment key={`bot-item-group-${i}`}>
            <span key={`bot-item-${i}`}>{item}</span>
            <span key={`bot-dot-${i}`} className="dot-small">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
