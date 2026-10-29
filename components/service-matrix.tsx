"use client"

import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"
import { useServiceBookingModal } from "@/components/service-booking-modal"
import { serviceTiers, toneStyles } from "@/lib/service-tiers"
import { cn } from "@/lib/utils"

const phases = serviceTiers

export function ServiceMatrix() {
  const { openModal } = useServiceBookingModal()

  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <FlankMotif tone="blue" className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            Our Solutions
          </FlankMotif>
          <h2 id="services-heading" className="mt-5 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How clients grow with ATS
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Three solutions that work alone or together. Start with the one that fits your business today,
            and add to it as you grow.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {phases.map((phase) => {
              const styles = toneStyles[phase.tone]
              return (
                <article
                  key={phase.title}
                  className="group relative flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-md"
                >
                  <span aria-hidden="true" className={cn("absolute inset-x-0 top-0 h-1 rounded-t-xl", styles.bar)} />
                  <div className="relative mx-auto aspect-square w-full max-w-[200px]">
                    <Image
                      src={phase.image}
                      alt={phase.imageAlt}
                      fill
                      className="object-contain"
                      sizes="200px"
                    />
                  </div>

                  <span className={cn("mt-5 text-xs font-semibold uppercase tracking-[0.14em]", styles.text)}>
                    TIER {phase.tierNumber} · {phase.eyebrow}
                  </span>

                  <h3 className={cn("mt-2 text-lg font-semibold leading-snug", styles.text)}>{phase.title}</h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{phase.copy}</p>

                  <button
                    type="button"
                    onClick={() => openModal({ slug: phase.slug, title: phase.title, url: phase.bookingUrl, tone: phase.tone })}
                    aria-label={`Explore ${phase.title}`}
                    className={cn(
                      "group relative mt-6 flex h-14 items-center justify-center overflow-hidden rounded-full border text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                      styles.ctaBorder,
                      styles.hoverBorder,
                    )}
                  >
                    {/* fill that reveals on hover/focus, standing in for ELEKS's photo+mask */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
                        styles.hoverFill,
                      )}
                    />

                    {/* track line the arrow travels along */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-1/2 h-px w-3/4 -translate-x-1/2 bg-border transition-colors duration-300",
                        styles.hoverTrackBg,
                      )}
                    />

                    {/* label — always visible, just recolours on hover/focus */}
                    <span
                      className={cn(
                        "relative z-10 transition-colors duration-300",
                        styles.hoverText,
                        styles.text,
                      )}
                    >
                      Explore this solution
                    </span>

                    {/* arrow circle sliding left to right along the rail */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-[10%] top-1/2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border bg-card transition-[left,background-color,border-color] duration-500 ease-out group-hover:left-[calc(90%-1rem)] group-hover:bg-transparent group-focus-visible:left-[calc(90%-1rem)] group-focus-visible:bg-transparent",
                        styles.hoverArrowBorder,
                        styles.ctaBorder,
                      )}
                    >
                      <ArrowRight
                        className={cn(
                          "size-4 transition-colors duration-300",
                          styles.hoverText,
                          styles.text,
                        )}
                      />
                    </span>
                  </button>
                </article>
              )
            })}
          </div>

        </div>

        <div className="mt-14 flex flex-col items-center text-center sm:mt-16">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-5 shrink-0 text-brand-blue" aria-hidden="true" />
            <p className="text-base font-semibold text-ink sm:text-lg">
              Built locally. Owned by you. Designed for growth.
            </p>
          </div>
          <p className="mt-2 text-sm font-normal text-muted-foreground">
            Whichever you choose, it runs in your office, belongs to you, and we keep it running.
          </p>
        </div>
      </div>
    </section>
  )
}
