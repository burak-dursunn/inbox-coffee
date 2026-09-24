import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProductSection from '@/components/ProductSection'
import BeveragesSection from '@/components/BeveragesSection'
import SpecsSection from '@/components/SpecsSection'
import ProcessSection from '@/components/ProcessSection'
import GallerySection from '@/components/GallerySection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import AnimationProvider from '@/components/AnimationProvider'

export default function Home() {
  return (
    <>
      <AnimationProvider />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ProductSection />
        <BeveragesSection />
        <SpecsSection />
        <ProcessSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
