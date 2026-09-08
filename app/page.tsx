import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServiceMatrix } from "@/components/service-matrix"
import { BenchmarksSection } from "@/components/benchmarks-section"
import { EngagementModels } from "@/components/engagement-models"
import { ContactFooter } from "@/components/contact-footer"
import { AtsLeadModal } from "@/components/ats-lead-modal"
import { ServiceBookingModal } from "@/components/service-booking-modal"

export default function Page() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-ring"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <HeroSection />
        <ServiceMatrix />
        <BenchmarksSection />
        <EngagementModels />
        <ContactFooter />
      </main>
      <AtsLeadModal />
      <ServiceBookingModal />
    </>
  )
}
