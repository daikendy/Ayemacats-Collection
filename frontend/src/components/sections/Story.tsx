"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function Story() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

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

  return (
    <section ref={ref} id="story" className="relative overflow-hidden select-none bg-[#EAE0C9]">
      {/* Paper/linen texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply select-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"
        style={{ backgroundRepeat: "repeat" }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-32">
        {/* Image, asymmetric, slightly tilted */}
        <div className={`md:col-span-5 md:pt-16 transition-all duration-600 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[30px]"
        }`}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 -rotate-[2deg] rounded-[2px]"
              style={{ background: "rgba(45,74,62,0.18)" }}
            />
            <figure className="vignette relative overflow-hidden rounded-[2px] rotate-[1.5deg] shadow-[0_25px_50px_-15px_rgba(59,42,26,0.45)]">
              <Image
                src="/our_story_medieval.png"
                alt="A vintage workshop desk with parchment paper, quill pen, dried flowers, and a wax seal stamp."
                width={700}
                height={900}
                className="h-auto w-full object-cover"
              />
            </figure>
            <p className="mt-6 text-center font-script text-xl text-[#6B1E2E]/80">
              ~ the desk where every letter begins ~
            </p>
          </div>
        </div>

        {/* Copy, asymmetric offset */}
        <div className={`md:col-span-7 md:pl-8 flex flex-col justify-center transition-all duration-600 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[30px]"
        }`}>
          <div>
            <p className="font-script text-3xl text-[#6B1E2E]">Our Story</p>
          </div>
          <div>
            <h2 className="mt-3 font-heading text-4xl font-light leading-tight tracking-tight text-[#3B2A1A] md:text-5xl text-balance">
              A small workshop, an old soul,
              <span className="italic text-[#6B1E2E] font-semibold">
                {" "}
                and a great deal of love.
              </span>
            </h2>
          </div>

          <div>
            <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-[#3B2A1A]/85">
              <p>
                Ayemacats Collection began the way most beautiful things do — quietly, in a kitchen
                that smelled of warm wax and dried roses. We were tired of messages that
                disappeared the moment they were read.
              </p>
              <p>
                So we started writing letters. The kind that take an afternoon. The kind you untie
                with both hands. The kind your great-grandchildren might still keep in a drawer,
                faintly perfumed with lavender, two hundred years from now.
              </p>
            </div>
          </div>

          <div>
            <div className="mt-10 flex flex-wrap items-center gap-6 font-heading text-sm uppercase tracking-[0.25em] text-[#3B2A1A]/70">
              <span className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#C9A84C]" />
                Hand-rolled
              </span>
              <span className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#C9A84C]" />
                Wax-sealed
              </span>
              <span className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#C9A84C]" />
                Made in PH
              </span>
            </div>
          </div>

          {/* Founder's note */}
          <div>
            <figure
              className="relative mt-12 flex items-start gap-5 rounded-[2px] border p-5 md:p-6"
              style={{
                borderColor: "rgba(201,168,76,0.5)",
                background: "linear-gradient(180deg, rgba(245,236,215,0.7), rgba(239,226,197,0.4))",
                boxShadow: "0 12px 30px -18px rgba(59,42,26,0.45)",
              }}
            >
              <div className="relative shrink-0">
                <div
                  aria-hidden
                  className="absolute -inset-1 -rotate-[3deg] rounded-full"
                  style={{ background: "rgba(107,30,46,0.18)" }}
                />
                <div className="vignette relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-[#C9A84C]/60 md:h-24 md:w-24">
                  <Image
                    src="/founder-portrait.png"
                    alt="Aya, founder of Ayemacats Collection, writing a letter by candlelight."
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="min-w-0">
                <p className="font-heading text-xs uppercase tracking-[0.28em] text-[#3B2A1A]/65">
                  A note from the founder
                </p>
                <p className="mt-2 font-serif text-base leading-relaxed text-[#3B2A1A]/85 md:text-lg">
                  &ldquo;Every letter is written and sealed by my own hand. If yours arrives less
                  than perfect, write to me — I&apos;ll make it right, always.&rdquo;
                </p>
                <p className="mt-3 font-script text-2xl text-[#6B1E2E]">
                  — Aya
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
