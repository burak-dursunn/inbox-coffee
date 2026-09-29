import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import FeaturesVideoSection from '@/components/FeaturesVideoSection'
import ProductDemoSection from '@/components/ProductDemoSection'
import BeveragesSection from '@/components/BeveragesSection'
import SpecsSection from '@/components/SpecsSection'
import ProcessSection from '@/components/ProcessSection'
import GallerySection from '@/components/GallerySection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import AnimationProvider from '@/components/AnimationProvider'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <AnimationProvider />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <FeaturesVideoSection />
        <ProductDemoSection />
        <BeveragesSection />
        <SpecsSection />
        <ProcessSection />
        <GallerySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
