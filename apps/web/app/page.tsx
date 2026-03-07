import HeroSection from "@/components/hero-section"
import Stats from "@/components/stats"
import Content from "@/components/content"
import Integrations from "@/components/integrations"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <Content />
      <Integrations />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}
