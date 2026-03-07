import { HeroHeader } from "@/components/header"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <HeroHeader />
      <div className="pt-10 md:pt-24">
        <Contact />
      </div>
      <Footer />
    </>
  )
}
