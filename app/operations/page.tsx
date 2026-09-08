import type { Metadata } from "next"
import { ServiceTierPage } from "@/components/service-tier-page"
import { ServiceBookingModal } from "@/components/service-booking-modal"
import { getServiceTier } from "@/lib/service-tiers"

const tier = getServiceTier("operations")

export const metadata: Metadata = {
  title: `${tier.title} | Abantu Tech Solutions`,
  description: tier.copy,
  alternates: {
    canonical: tier.pageUrl,
  },
  openGraph: {
    title: `${tier.title} | Abantu Tech Solutions`,
    description: tier.copy,
    url: tier.pageUrl,
    siteName: "Abantu Tech Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abantu Tech Solutions — Save time. Close more business. Reduce admin stress.",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
}

export default function Page() {
  return (
    <>
      <ServiceTierPage tier={tier} />
      <ServiceBookingModal />
    </>
  )
}
