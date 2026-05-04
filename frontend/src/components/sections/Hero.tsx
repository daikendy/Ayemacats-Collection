"use client"

import Image from "next/image"
import { useState, type FormEvent, useEffect, useRef } from "react"
import { LucideArrowRight, LucideX, LucideHeart } from "lucide-react"

export default function Hero() {
  const [recipient, setRecipient] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [typedMessage, setTypedMessage] = useState("")
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

  const fullDraft = `Dearest ${recipient || "One"},

Some thoughts are simply too beautiful to be lost to the cold, fleeting glow of a digital screen. This message was made to be read slowly, by candlelight, and held in your hands—exactly the way letters were meant to be two hundred years ago.

With all my love and devotion.`

  useEffect(() => {
    if (!isPreviewOpen) return

    let index = 0
    setTypedMessage("")

    const interval = setInterval(() => {
      if (index < fullDraft.length) {
        setTypedMessage(fullDraft.slice(0, index + 1))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isPreviewOpen, fullDraft])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (recipient.trim()) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("ayemacats:recipient", recipient.trim())
      }
      setIsPreviewOpen(true)
    }
  }

  const closeAndProceed = () => {
    setIsPreviewOpen(false)
    const el = document.getElementById("products")
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="hero" className="relative overflow-hidden select-none pb-8 animate-in fade-in duration-700">
      {/* Paper/linen texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply select-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"
        style={{ backgroundRepeat: "repeat" }}
      />

      {/* Warm flickering candlelight ambient glow */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay z-0 animate-pulse duration-[3000ms]"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.3) 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-12 md:gap-12 md:px-10 md:pb-24 md:pt-12">

        {/* Copy column */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col items-center text-center md:items-start md:text-left justify-center gap-6 animate-in fade-in slide-in-from-left-6 duration-1000 relative z-20">
          <div className="flex flex-col gap-3">
            {/* Pressed by Hand Detail */}
            <p className="font-script text-2xl text-[#6B1E2E]/80 tracking-wide select-none">
              Est. in a small town, sealed with love
            </p>
            <h1 className="mt-1 font-heading text-7xl leading-[0.95] tracking-tight text-[#3B2A1A] text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light">
              Words That <br />
              <span className="italic text-[#6B1E2E] font-semibold">Last Forever</span>
            </h1>
          </div>

          <p className="mt-2 max-w-xl font-serif text-lg leading-relaxed text-[#3B2A1A]/85 md:text-xl border-t border-b border-[#D8C3A5]/30 py-4">
            Handcrafted scroll letters and dried flower arrangements, written by candlelight in the Philippines. Each one sealed with wax — the way letters were meant to be held, two hundred years ago.
          </p>

          {/* Personalized CTA form */}
          <form
            onSubmit={onSubmit}
            className="mt-4 w-full max-w-xl"
            aria-label="Begin a letter"
          >
            <label
              htmlFor="recipient"
              className="font-script text-xl text-[#6B1E2E] select-none"
            >
              Who are you writing to?
            </label>
            <div
              className="mt-3 flex flex-col gap-3 rounded-[4px] border p-2.5 sm:flex-row sm:items-center shadow-sm"
              style={{
                borderColor: "rgba(201,168,76,0.55)",
                background: "linear-gradient(180deg, rgba(245,236,215,0.85), rgba(239,226,197,0.6))",
              }}
            >
              <input
                id="recipient"
                name="recipient"
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="my mother, my fiancé, my best friend…"
                className="flex-1 bg-transparent px-3 py-2 font-serif text-base italic text-[#3B2A1A] placeholder:text-[#3B2A1A]/45 focus:outline-none"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#6B1E2E] hover:bg-[#6B1E2E]/90 px-6 py-3 font-heading text-sm uppercase tracking-[0.2em] text-[#F5ECD7] shadow-[0_4px_14px_rgba(107,30,46,0.35)] transition duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none"
              >
                <span>Write their letter</span>
                <LucideArrowRight className="size-4 text-[#C9A84C] group-hover:translate-x-1 transition" />
              </button>
            </div>
            <p className="mt-4 flex items-center justify-center md:justify-start gap-3 font-serif text-sm text-[#3B2A1A]/65">
              <span className="h-px w-6 bg-[#C9A84C]" />
              or{" "}
              <a
                href="#story"
                className="font-script text-base text-[#6B1E2E] underline decoration-[#C9A84C] decoration-2 underline-offset-[5px] hover:decoration-[#6B1E2E] transition"
              >
                read our story
              </a>
            </p>
          </form>

          <div className="mt-4 flex items-center justify-center md:justify-start gap-4 font-serif text-sm italic text-[#3B2A1A]/65 select-none">
            <span className="h-px w-10 bg-[#C9A84C]" />
            &ldquo;It arrived like a secret from another century.&rdquo;
          </div>
        </div>

        {/* Image column - Overlapping Staggered Display from your lovely design */}
        <div className="md:col-span-6 lg:col-span-5 relative flex items-center justify-center animate-in fade-in slide-in-from-right-6 duration-1000 select-none h-[420px] md:h-[580px] w-full">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-radial from-[#F3E6C8] via-transparent to-transparent opacity-50 blur-3xl pointer-events-none scale-125 z-0" />

          {/* Layered background visual cards */}
          <div
            aria-hidden
            className="absolute -inset-3 rotate-[1.2deg] rounded-[2px] border border-[#C9A84C]/10 opacity-60 z-0"
            style={{ background: "rgba(107,30,46,0.06)" }}
          />
          <div
            aria-hidden
            className="absolute -inset-1.5 -rotate-[0.8deg] rounded-[2px] border border-[#C9A84C]/15 opacity-60 z-0"
            style={{ background: "rgba(201,168,76,0.08)" }}
          />

          {/* Main larger image (The Scroll Letter) */}
          <div className="absolute w-[85%] h-[85%] top-0 left-0 rounded-2xl overflow-hidden shadow-2xl border border-[#D8C3A5]/60 transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition duration-500 z-10">
            <Image
              src="/scroll_letter_unboxing.png"
              alt="Handcrafted medieval scroll letter"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover select-none filter sepia-[0.12] contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#C9A84C]/30 pointer-events-none rounded-2xl" />
          </div>

          {/* Secondary overlapping smaller image (The Candle Writing Desk) */}
          <div className="absolute w-[55%] h-[55%] bottom-0 right-0 rounded-2xl overflow-hidden shadow-2xl border border-[#C9A84C]/40 transform rotate-6 hover:rotate-2 hover:scale-[1.04] transition duration-500 z-20">
            <Image
              src="/our_story_medieval.png"
              alt="Aesthetic candlelit writing desk"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover select-none filter sepia-[0.08] contrast-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#C9A84C]/30 pointer-events-none rounded-2xl" />
          </div>

          {/* Custom Wax Seal over the visual display */}
          <div className="absolute -right-3 -bottom-3 hidden md:block z-30 select-none">
            <div className="relative size-14 bg-[#6B1E2E] rounded-full border border-[#C9A84C] flex items-center justify-center font-heading text-lg font-black tracking-tighter text-[#C9A84C] shadow-lg transform rotate-12 select-none">
              AC
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Bar - Intersection Observer animation */}
      <div
        ref={ref}
        className={`relative mx-auto mb-0 mt-6 max-w-7xl border-y px-6 py-5 md:px-10 select-none transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        style={{
          borderColor: "rgba(201,168,76,0.45)",
          background: "linear-gradient(180deg, rgba(239,226,197,0.6), rgba(245,236,215,0.3))",
        }}
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-heading text-xs uppercase tracking-[0.28em] text-[#3B2A1A]/75 sm:gap-x-14">
          <li className="flex items-center gap-3">
            <span className="font-serif text-base normal-case tracking-normal text-[#6B1E2E] font-semibold">
              ★ ★ ★ ★ ★
            </span>
            <span className="font-heading">2,400+ Letters Delivered</span>
          </li>
          <li aria-hidden className="hidden h-5 w-px bg-[#C9A84C]/50 sm:block" />
          <li className="flex items-center gap-3">
            <span aria-hidden className="text-base normal-case tracking-normal">
              ✦
            </span>
            <span className="font-heading">Featured on TikTok · 7M views</span>
          </li>
          <li aria-hidden className="hidden h-5 w-px bg-[#C9A84C]/50 sm:block" />
          <li className="flex items-center gap-3">
            <span aria-hidden className="text-base normal-case tracking-normal">
              ✦
            </span>
            <span className="font-heading">Ships nationwide · 2–4 days</span>
          </li>
        </ul>
      </div>

      {/* Emotional Interactive Calligraphy Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-[#3B2A1A]/85 backdrop-blur-md z-[100] flex items-center justify-center p-4 select-none animate-in fade-in duration-300">
          <button
            onClick={() => setIsPreviewOpen(false)}
            className="absolute top-6 right-6 text-[#F5ECD7] hover:text-[#C9A84C] text-4xl cursor-pointer transition z-50 select-none focus:outline-none"
          >
            <LucideX className="size-8" />
          </button>

          <div className="relative max-w-lg w-full bg-[#F5ECD7] border-2 border-[#C9A84C] p-8 md:p-12 rounded-lg shadow-2xl overflow-hidden flex flex-col gap-6 animate-in zoom-in-95 duration-500">
            {/* Paper overlay inside modal */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-multiply select-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"
              style={{ backgroundRepeat: "repeat" }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="font-heading text-xs tracking-widest text-[#C9A84C] uppercase font-semibold block mb-2">
                  Live Preview
                </span>
                <p className="font-script text-3xl text-[#6B1E2E]">Your letter draft</p>
                <div className="h-px w-full bg-[#C9A84C]/30 my-4" />
                <p className="font-serif text-lg leading-relaxed text-[#3B2A1A] min-h-[160px] whitespace-pre-wrap select-none tracking-wide">
                  {typedMessage}
                </p>
              </div>

              {/* Decorative Wax Seal & Next Steps */}
              <div className="mt-8 pt-4 border-t border-[#C9A84C]/30 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#6B1E2E] text-[#C9A84C] border border-[#C9A84C]/50 size-10 rounded-full flex items-center justify-center shadow-lg transform rotate-6 animate-pulse select-none">
                    <LucideHeart className="size-5 fill-[#C9A84C]" />
                  </div>
                  <p className="font-script text-lg text-[#6B1E2E]/80">Written by Aya, hand-sealed with wax.</p>
                </div>
                <button
                  onClick={closeAndProceed}
                  className="w-full flex items-center justify-center gap-3 rounded-xl bg-[#6B1E2E] hover:bg-[#6B1E2E]/90 px-6 py-3.5 font-heading text-sm uppercase tracking-[0.2em] text-[#F5ECD7] shadow-[0_4px_14px_rgba(107,30,46,0.35)] transition duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Select your gift box</span>
                  <LucideArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
