"use client"

import Link from "next/link"
import { ArrowLeft, Brain, Check, Settings2, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"
import { useServiceBookingModal } from "@/components/service-booking-modal"
import { toneStyles, type ServiceTier, type ServiceTierSlug } from "@/lib/service-tiers"
import { cn } from "@/lib/utils"

// Icons are React components, so this lookup stays in the client component rather than
// in the plain-data lib/service-tiers.ts module — keyed by slug like service-matrix.tsx's.
const tierIcons: Record<ServiceTierSlug, LucideIcon> = {
  growth: TrendingUp,
  operations: Settings2,
  transformation: Brain,
}

const TESTIMONIAL = {
  quote:
    "Abantu Tech Solutions built our company website, set up our business email systems, and implemented our entire debt collection platform from scratch. Their guidance made our launch smooth and stress-free.",
  name: "Jane Mwango",
  role: "Founder & Managing Director, Integra Collection Agency",
}

export function ServiceTierPage({ tier }: { tier: ServiceTier }) {
  const styles = toneStyles[tier.tone]
  const Icon = tierIcons[tier.slug]
  const { openModal } = useServiceBookingModal()

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Back link */}
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to home
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <FlankMotif tone={tier.tone === "gold" ? "gold" : "blue"} className={cn("text-xs font-semibold uppercase tracking-[0.18em]", styles.text)}>
            {tier.eyebrow}
          </FlankMotif>

          <span
            className={cn(
              "mt-6 inline-flex size-14 items-center justify-center rounded-lg border",
              styles.chip,
            )}
          >
            <Icon className="size-7" aria-hidden="true" />
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            {tier.title}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {tier.copy}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">What&apos;s included</h2>
          <ul className="mt-8 space-y-6 border-t border-border pt-8">
            {tier.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-4">
                <span
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border",
                    styles.chip,
                  )}
                  aria-hidden="true"
                >
                  <Check className={cn("size-4", styles.check)} />
                </span>
                <p className="text-lg font-medium leading-snug text-foreground">{bullet}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonial — general client testimonial, not written for this specific tier */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            What our clients say
          </p>
          <blockquote className="mt-6 text-pretty text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            &ldquo;{TESTIMONIAL.quote}&rdquo;
          </blockquote>
          <footer className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{TESTIMONIAL.name}</span>
            {" — "}
            {TESTIMONIAL.role}
          </footer>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-ink">
        <div className="bg-grid-dark relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to talk about {tier.eyebrow.charAt(0) + tier.eyebrow.slice(1).toLowerCase()}?
            </h2>
            <button
              type="button"
              onClick={() => openModal({ slug: tier.slug, title: tier.title, url: tier.bookingUrl, tone: tier.tone })}
              aria-label={`Book a ${tier.title} session`}
              data-analytics-event={`service_modal_open_${tier.slug}`}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-8 py-3.5 text-sm font-semibold shadow-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                styles.solidBorder,
                styles.solidBg,
                styles.solidText,
              )}
            >
              Book a {tier.eyebrow.charAt(0) + tier.eyebrow.slice(1).toLowerCase()} session
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
