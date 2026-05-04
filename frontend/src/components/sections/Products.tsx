"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

type RecipientKey = "any" | "mom" | "partner" | "friend" | "self"

const recipients: { key: RecipientKey; label: string }[] = [
  { key: "any", label: "Anyone" },
  { key: "mom", label: "Mom" },
  { key: "partner", label: "Partner" },
  { key: "friend", label: "Best Friend" },
  { key: "self", label: "Yourself" },
]

const products = [
  {
    title: "The Scroll Letter",
    price: "₱ 480",
    note: "tied with silk, sealed with wax",
    image: "/scroll_letter_unboxing.png",
    rotate: "-rotate-[3deg]",
    offset: "md:mt-16",
    recommendedFor: ["mom", "self"] as RecipientKey[],
    badge: "Most loved",
    stockNote: "only 14 hand-rolled this week",
  },
  {
    title: "Dried Bouquet",
    price: "₱ 750",
    note: "burgundy roses & lavender",
    image: "/dried_flowers_aesthetic.png",
    rotate: "rotate-[2deg]",
    offset: "md:mt-0",
    recommendedFor: ["friend"] as RecipientKey[],
    badge: null as string | null,
    stockNote: "fresh batch arriving Friday",
  },
  {
    title: "The Heirloom Box",
    price: "₱ 1,280",
    note: "letter, blooms, and a candle",
    image: "/gift_box_wax_seal.png",
    rotate: "-rotate-[1.5deg]",
    offset: "md:mt-24",
    recommendedFor: ["partner", "mom"] as RecipientKey[],
    badge: "Gift favorite",
    stockNote: "made to order · 2-day craft",
  },
]

export default function Products() {
  const [pick, setPick] = useState<RecipientKey>("any")
  const [recipient, setRecipient] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Read the recipient name set from the hero form (sessionStorage)
  useEffect(() => {
    if (typeof window === "undefined") return
    const r = sessionStorage.getItem("ayemacats:recipient")
    if (r) setRecipient(r)
  }, [])

  return (
    <section id="products" className="relative select-none overflow-hidden bg-[#F5ECD7]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-2 animate-in fade-in duration-700">
          <div>
            <p className="font-script text-3xl text-[#6B1E2E]">
              {recipient ? `For ${recipient}` : "Featured"}
            </p>
          </div>
          <div>
            <h2 className="mt-2 font-heading text-4xl font-light leading-tight tracking-tight text-[#3B2A1A] md:text-6xl text-balance">
              Treasures from
              <span className="italic text-[#6B1E2E] font-semibold"> the Collection</span>
            </h2>
          </div>
          <div>
            <p className="mx-auto mt-5 max-w-xl font-serif text-base leading-relaxed text-[#3B2A1A]/75 md:text-lg">
              Scattered like letters across an old wooden desk — each piece is made in small
              batches, never the same twice.
            </p>
          </div>

          {/* For-whom picker */}
          <div className="mt-10">
            <fieldset>
              <legend className="font-script text-xl text-[#6B1E2E]/85">
                Who is it for?
              </legend>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {recipients.map((r) => {
                  const active = pick === r.key
                  return (
                    <button
                      key={r.key}
                      type="button"
                      onClick={() => setPick(r.key)}
                      aria-pressed={active}
                      className={`rounded-full border px-4 py-2 font-heading text-xs uppercase tracking-[0.22em] transition-all cursor-pointer ${
                        active
                          ? "border-[#6B1E2E] bg-[#6B1E2E] text-[#F5ECD7] shadow-[0_4px_12px_rgba(107,30,46,0.3)]"
                          : "border-[#C9A84C]/55 bg-transparent text-[#3B2A1A]/75 hover:border-[#6B1E2E]/60 hover:text-[#6B1E2E]"
                      }`}
                    >
                      {r.label}
                    </button>
                  )
                })}
              </div>
            </fieldset>
          </div>
        </div>

        {/* scattered cards */}
        <div ref={ref} className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {products.map((p, i) => {
            const isRecommended = pick !== "any" && p.recommendedFor.includes(pick)
            const isDimmed = pick !== "any" && !isRecommended
            return (
              <div
                key={p.title}
                className={`group ${p.offset} transition-all duration-600 ease-out`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: isVisible ? `${i * 150}ms` : "0ms",
                }}
              >
                <article
                  className={`relative ${p.rotate} transition-all duration-700 ease-out hover:rotate-0 hover:-translate-y-2 ${
                    isDimmed ? "opacity-55" : "opacity-100"
                  } ${isRecommended ? "-translate-y-2" : ""}`}
                >
                  {/* paper layers behind */}
                  <div
                    aria-hidden
                    className="absolute -inset-2 rotate-[1.5deg] rounded-[2px]"
                    style={{ background: "rgba(107,30,46,0.10)" }}
                  />
                  <div
                    aria-hidden
                    className="absolute -inset-1 -rotate-[0.5deg] rounded-[2px]"
                    style={{ background: "rgba(201,168,76,0.18)" }}
                  />
                  {/* gold ring when recommended */}
                  {isRecommended && (
                    <div
                      aria-hidden
                      className="absolute -inset-3 rounded-[3px]"
                      style={{
                        boxShadow: "0 0 0 2px rgba(201,168,76,0.7), 0 30px 60px -20px rgba(107,30,46,0.45)",
                      }}
                    />
                  )}

                  {/* card */}
                  <div
                    className="relative overflow-hidden rounded-[2px] shadow-[0_20px_40px_-15px_rgba(59,42,26,0.5)]"
                    style={{ background: "#efe2c5" }}
                  >
                    <figure className="vignette relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                        style={{
                          background: "linear-gradient(180deg, rgba(107,30,46,0) 40%, rgba(107,30,46,0.35) 100%)",
                        }}
                      />
                      {/* badges */}
                      {p.badge && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#6B1E2E]/90 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.25em] text-[#F5ECD7] backdrop-blur-sm">
                          {p.badge}
                        </span>
                      )}
                      {isRecommended && (
                        <span className="absolute right-3 top-3 rounded-full bg-[#C9A84C]/95 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.22em] text-[#3B2A1A] shadow-sm">
                          Perfect for{" "}
                          {recipients.find((r) => r.key === pick)?.label.toLowerCase()}
                        </span>
                      )}
                    </figure>

                    <div className="relative p-6 md:p-7">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-heading text-2xl leading-tight text-[#3B2A1A] font-semibold">
                          {p.title}
                        </h3>
                        <span className="font-heading text-lg text-[#6B1E2E] font-medium">
                          {p.price}
                        </span>
                      </div>
                      <p className="mt-2 font-script text-lg text-[#6B1E2E]/80">
                        {p.note}
                      </p>
                      {/* scarcity / craftsmanship line */}
                      <p className="mt-3 flex items-center gap-2 font-serif text-xs italic text-[#3B2A1A]/65">
                        <span aria-hidden className="text-[#6B1E2E]">
                          ✦
                        </span>
                        {p.stockNote}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-[#C9A84C]/30 pt-4">
                        <span className="font-heading text-xs uppercase tracking-[0.3em] text-[#3B2A1A]/60">
                          No. {String(i + 1).padStart(2, "0")} / III
                        </span>
                        <a
                          href="#"
                          className="rounded-full bg-[#6B1E2E] px-4 py-2 font-heading text-xs uppercase tracking-[0.22em] text-[#F5ECD7] shadow-[0_3px_10px_rgba(107,30,46,0.3)] transition duration-300 hover:-translate-y-0.5"
                        >
                          Send one →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
