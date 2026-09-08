"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import { toneStyles, type ServiceTierSlug, type ServiceTierTone } from "@/lib/service-tiers"
import { cn } from "@/lib/utils"

type ServiceBookingPayload = { slug: ServiceTierSlug; title: string; url: string; tone: ServiceTierTone }

export function useServiceBookingModal() {
  const openModal = (service: ServiceBookingPayload) => {
    window.dispatchEvent(new CustomEvent<ServiceBookingPayload>("open-service-booking-modal", { detail: service }))
  }
  return { openModal }
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'

export function ServiceBookingModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [service, setService] = useState<ServiceBookingPayload | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const previouslyFocused = useRef<Element | null>(null)

  const closeModal = useCallback(() => {
    setIsVisible(false)
    window.setTimeout(() => {
      setIsOpen(false)
      setService(null)
    }, 200)
  }, [])

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ServiceBookingPayload>).detail
      previouslyFocused.current = document.activeElement
      setService(detail)
      setIsOpen(true)
      requestAnimationFrame(() => setIsVisible(true))
    }
    window.addEventListener("open-service-booking-modal", handler)
    return () => window.removeEventListener("open-service-booking-modal", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Move focus into the dialog on open, restore it to the trigger on close.
  useEffect(() => {
    if (isOpen) {
      const first = dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR)
      first?.focus()
    } else if (previouslyFocused.current instanceof HTMLElement) {
      previouslyFocused.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // No DOM element carries the close-analytics data attribute for this path —
        // ESC isn't a click. Same closeModal() as the X/backdrop paths otherwise.
        closeModal()
        return
      }
      if (e.key !== "Tab" || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, closeModal])

  if (!isOpen || !service) return null

  const closeAnalyticsEvent = `service_modal_close_${service.slug}`

  const styles = toneStyles[service.tone]

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-200 motion-reduce:transition-none sm:p-4",
        isVisible ? "opacity-100" : "opacity-0",
      )}
      style={{ backgroundColor: "rgba(10,8,6,0.85)" }}
      role="presentation"
      data-analytics-event={closeAnalyticsEvent}
      onClick={closeModal}
    >
      <div
        ref={dialogRef}
        className={cn(
          "flex h-[100dvh] w-full flex-col overflow-hidden border-0 bg-card shadow-2xl transition-all duration-200 motion-reduce:transition-none sm:h-[min(85vh,720px)] sm:max-w-[640px] sm:rounded-2xl sm:border",
          styles.solidBorder,
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-booking-modal-heading"
      >
        <div className={cn("relative flex shrink-0 items-center justify-between gap-4 border-b border-border bg-ink px-5 py-4 sm:px-6")}>
          <h2 id="service-booking-modal-heading" className="text-lg font-bold text-white">
            Book a <span className={styles.text}>{service.title}</span> session
          </h2>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            data-analytics-event={closeAnalyticsEvent}
            className="flex size-11 shrink-0 items-center justify-center rounded-md text-white/50 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative flex-1 bg-background">
          <iframe
            key={service.url}
            src={service.url}
            title={`Book a ${service.title} session`}
            className="absolute inset-0 size-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
