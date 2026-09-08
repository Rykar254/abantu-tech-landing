export type ServiceTierSlug = "growth" | "operations" | "transformation"

export type ServiceTierTone = "gold" | "blue" | "purple"

export type ServiceTier = {
  slug: ServiceTierSlug
  tone: ServiceTierTone
  eyebrow: string
  title: string
  copy: string
  bullets: string[]
  pageUrl: string
  bookingUrl: string
}

export const serviceTiers: ServiceTier[] = [
  {
    slug: "growth",
    tone: "gold",
    eyebrow: "GROWTH",
    title: "Lead Growth Platform",
    copy: "Grow revenue with intelligent lead capture and engagement.",
    bullets: [
      "Always-on lead capture",
      "AI-powered lead qualification",
      "Faster responses across WhatsApp, email, and calls",
    ],
    pageUrl: "/growth",
    bookingUrl: "https://go.abantutech.co.ke/growth/",
  },
  {
    slug: "operations",
    tone: "blue",
    eyebrow: "OPERATIONS",
    title: "Operations Intelligence Platform",
    copy: "Reduce operational friction with AI-powered business assistance.",
    bullets: [
      "Draft quotations in minutes",
      "Automate follow-ups and tasks",
      "Instant access to business knowledge",
      "Improve team productivity",
    ],
    pageUrl: "/operations",
    bookingUrl: "https://go.abantutech.co.ke/operations/",
  },
  {
    slug: "transformation",
    tone: "purple",
    eyebrow: "TRANSFORMATION",
    title: "Business AI Operating System",
    copy: "Build an AI-native organization with enterprise intelligence and autonomous operations.",
    bullets: [
      "Handles higher volume with ease",
      "Deep automation across departments",
      "Sovereign AI with full data ownership",
      "Enterprise-grade intelligence layer",
    ],
    pageUrl: "/transformation",
    bookingUrl: "https://go.abantutech.co.ke/transformation/",
  },
]

export function getServiceTier(slug: ServiceTierSlug): ServiceTier {
  const tier = serviceTiers.find((t) => t.slug === slug)
  if (!tier) throw new Error(`Unknown service tier slug: ${slug}`)
  return tier
}

// Tone-keyed style lookup — every className fragment a tone-aware surface needs.
// Shared between the homepage service cards and the standalone tier pages.
export const toneStyles = {
  gold: {
    bar: "bg-gold",
    chip: "border-gold/40 bg-gold/10 text-gold-foreground",
    text: "text-gold-foreground",
    check: "text-gold",
    ctaBorder: "border-gold/40",
    hoverBorder: "hover:border-gold focus-visible:border-gold",
    hoverFill: "bg-gold",
    hoverTrackBg: "group-hover:bg-gold-foreground/40 group-focus-visible:bg-gold-foreground/40",
    hoverText: "group-hover:text-gold-foreground group-focus-visible:text-gold-foreground",
    hoverArrowBorder: "group-hover:border-gold-foreground group-focus-visible:border-gold-foreground",
    solidBg: "bg-gold",
    solidText: "text-gold-foreground",
    solidBorder: "border-gold",
  },
  blue: {
    bar: "bg-brand-blue",
    chip: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
    text: "text-brand-blue",
    check: "text-brand-blue",
    ctaBorder: "border-brand-blue/30",
    hoverBorder: "hover:border-brand-blue focus-visible:border-brand-blue",
    hoverFill: "bg-brand-blue",
    hoverTrackBg: "group-hover:bg-brand-blue-foreground/40 group-focus-visible:bg-brand-blue-foreground/40",
    hoverText: "group-hover:text-brand-blue-foreground group-focus-visible:text-brand-blue-foreground",
    hoverArrowBorder: "group-hover:border-brand-blue-foreground group-focus-visible:border-brand-blue-foreground",
    solidBg: "bg-brand-blue",
    solidText: "text-brand-blue-foreground",
    solidBorder: "border-brand-blue",
  },
  purple: {
    bar: "bg-brand-purple",
    chip: "border-brand-purple/30 bg-brand-purple/10 text-brand-purple",
    text: "text-brand-purple",
    check: "text-brand-purple",
    ctaBorder: "border-brand-purple/30",
    hoverBorder: "hover:border-brand-purple focus-visible:border-brand-purple",
    hoverFill: "bg-brand-purple",
    hoverTrackBg: "group-hover:bg-brand-purple-foreground/40 group-focus-visible:bg-brand-purple-foreground/40",
    hoverText: "group-hover:text-brand-purple-foreground group-focus-visible:text-brand-purple-foreground",
    hoverArrowBorder: "group-hover:border-brand-purple-foreground group-focus-visible:border-brand-purple-foreground",
    solidBg: "bg-brand-purple",
    solidText: "text-brand-purple-foreground",
    solidBorder: "border-brand-purple",
  },
} as const
