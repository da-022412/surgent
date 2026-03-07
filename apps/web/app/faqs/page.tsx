import { HeroHeader } from "@/components/header"
import Faqs from "@/components/faqs"
import Footer from "@/components/footer"

export default function FaqsPage() {
  return (
    <>
      <HeroHeader />
      <div className="pt-10 md:pt-24">
        <Faqs />
      </div>
      <Footer />
    </>
  )
}
