"use client"

import { useEffect, useRef, useState } from "react"

const relics = [
  {
    title: "Linen Parchment",
    subtitle: "100% Cotton Paper",
    description: "Sourced from historic mills, our paper features authentic deckled edges and a weight that feels substantial in the hand.",
  },
  {
    title: "Crimson Wax",
    subtitle: "Traditional Beeswax & Resin",
    description: "Melted over an open flame and pressed by hand with a solid brass seal. A permanent, tamper-proof token of affection.",
  },
  {
    title: "Relic Box",
    subtitle: "Scented Treasures",
    description: "Each package arrives with a sprinkle of real dried lavender and crushed rose petals, preserving the fragrance for a lifetime.",
  },
]

export default function Craft() {
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

  return (
    <section id="craft" className="relative overflow-hidden select-none bg-[#F5ECD7] py-24 px-6 md:px-20 border-t border-[#D8C3A5]/30">
      {/* Paper/linen texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply select-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"
        style={{ backgroundRepeat: "repeat" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 text-center relative z-10 animate-in fade-in duration-1000">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-heading uppercase tracking-[0.3em] text-[#C9A84C] font-semibold">
            Our Materials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-[#3B2A1A] tracking-tight">
            The anatomy of <span className="font-script text-4xl md:text-5xl text-[#6B1E2E] italic font-semibold">a relic</span>
          </h2>
          <p className="font-serif text-base md:text-lg text-[#3B2A1A]/75 max-w-xl">
            We don't believe in fleeting digital words. Every physical material we use is curated to survive generations.
          </p>
        </div>

        {/* 3 Physical Material Descriptions */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-4">
          {relics.map((relic, i) => (
            <div
              key={relic.title}
              className="group flex flex-col items-center gap-4 p-8 bg-[#F5ECD7]/50 backdrop-blur-sm border border-[#D8C3A5]/50 rounded-xl shadow-md transition-all duration-700 ease-out hover:scale-[1.03] hover:border-[#C9A84C]/50 cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: isVisible ? `${i * 150}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-center bg-[#6B1E2E]/5 size-12 rounded-full border border-[#6B1E2E]/20 text-[#6B1E2E] font-heading font-black text-lg select-none mb-2">
                0{i + 1}
              </div>
              <h3 className="font-heading text-2xl font-semibold text-[#3B2A1A]">
                {relic.title}
              </h3>
              <span className="font-script text-lg text-[#6B1E2E]/80 -mt-1">
                {relic.subtitle}
              </span>
              <p className="font-serif text-sm md:text-base text-[#3B2A1A]/80 leading-relaxed max-w-xs">
                {relic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
