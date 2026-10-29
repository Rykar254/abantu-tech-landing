export type ServiceTierSlug = "growth" | "operations" | "transformation"

export type ServiceTierTone = "gold" | "blue" | "purple"

export type ServiceTier = {
  slug: ServiceTierSlug
  tone: ServiceTierTone
  tierNumber: 1 | 2 | 3
  eyebrow: string
  title: string
  copy: string
  bullets: string[]
  pageUrl: string
  bookingUrl: string
  image: string
  imageAlt: string
}

export const serviceTiers: ServiceTier[] = [
  {
    slug: "growth",
    tone: "gold",
    tierNumber: 1,
    eyebrow: "GROWTH",
    title: "ATS Growth Box",
    copy: "Your business files, backups and office automations, in one box you own.",
    bullets: [
      "Every file in one place, backed up automatically.",
      "Routine office tasks run on their own: reminders, reports, filing.",
      "Your files stay reachable in the office even when the internet drops.",
    ],
    pageUrl: "/growth",
    bookingUrl: "https://go.abantutech.co.ke/growth/",
    image: "/images/tiers/ats-growth-box-zimaboard-2.webp",
    imageAlt: "ATS Growth Box device, illustrative render",
  },
  {
    slug: "operations",
    tone: "blue",
    tierNumber: 2,
    eyebrow: "OPERATIONS",
    title: "ATS Operations Box",
    copy: "An AI assistant that works from your own business information, inside your office.",
    bullets: [
      "Quotations drafted in minutes from your own price lists, checked by your team.",
      "Staff get answers from your own documents instead of interrupting you.",
      "Follow-ups tracked and prompted, so they don't depend on memory.",
    ],
    pageUrl: "/operations",
    bookingUrl: "https://go.abantutech.co.ke/operations/",
    image: "/images/tiers/ats-operations-box-minisforum-ai-x1.webp",
    imageAlt: "ATS Operations Box device, illustrative render",
  },
  {
    slug: "transformation",
    tone: "purple",
    tierNumber: 3,
    eyebrow: "TRANSFORMATION",
    title: "ATS Transformation Box",
    copy: "Private AI working across your whole business, for more people and heavier work.",
    bullets: [
      "Automation that spans sales, operations and customer service.",
      "Larger AI models for longer documents and more complex work.",
      "Room for more of your team to use it at once.",
    ],
    pageUrl: "/transformation",
    bookingUrl: "https://go.abantutech.co.ke/transformation/",
    image: "/images/tiers/ats-transformation-box-gmktec-evo-x2.webp",
    imageAlt: "ATS Transformation Box device, illustrative render",
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
