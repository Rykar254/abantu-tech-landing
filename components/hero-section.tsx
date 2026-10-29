"use client"

import Image from "next/image"
import { ArrowRight, ShieldCheck, Clock, ClipboardCheck } from "lucide-react"
import { FlankMotif } from "@/components/flank-motif"
import { useAtsLeadModal } from "@/components/ats-lead-modal"

export function HeroSection() {
  const { openModal } = useAtsLeadModal()

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* subtle background grid */}
      <div aria-hidden="true" className="bg-grid-light pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <FlankMotif tone="gold" className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-foreground">
            Built for Kenyan SMEs
          </FlankMotif>

          <h1 id="hero-heading" className="mt-6 text-pretty text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Save time. Close more business.{" "}
            <span className="text-brand-blue">Reduce admin stress.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We help Kenyan SMEs turn their digital presence into a lead engine first, then layer in
            localized AI tools that help the team follow up, quote, and retrieve business information faster.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-brand-blue px-6 py-3.5 text-sm font-semibold text-brand-blue-foreground shadow-sm transition-colors hover:bg-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Book a discovery call
              <ArrowRight className="size-4 text-gold" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gold bg-transparent px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-colors hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              See the 3-phase path
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 sm:flex sm:max-w-none sm:gap-x-10">
            {[
              { icon: Clock, label: "Faster response times" },
              { icon: ClipboardCheck, label: "Admin time saved" },
              { icon: ShieldCheck, label: "On-site systems you control" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col gap-2">
                <Icon className="size-5 text-brand-blue" aria-hidden="true" />
                <dt className="text-xs font-medium leading-snug text-muted-foreground sm:whitespace-nowrap">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Deep-dark tech showcase container */}
        <div className="relative">
          <div className="rounded-2xl border border-gold/40 bg-ink p-2 shadow-2xl shadow-ink/20 ring-1 ring-ink/5">
            <div className="flex items-center gap-2 px-3 py-2.5">
              <span className="size-2.5 rounded-full bg-gold/70" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-brand-blue/70" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-white/20" aria-hidden="true" />
              <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-white/40">
                next-gen // business solutions
              </span>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/SME_Hero2.png"
                alt="A small business owner writing in a notebook at her shop counter, with an Abantu Tech Solutions AI box device on the shelf beside her"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
