"use client"

import { useEffect, useRef, useState } from "react"
import { LucidePenTool, LucideHeart, LucidePackage } from "lucide-react"

const steps = [
  {
    icon: LucidePenTool,
    number: "Step 01",
    title: "Choose Your Recipient",
    description: "Tell us who you're writing to. A mother, a partner, a best friend. We'll make it feel like it was always meant for them.",
  },
  {
    icon: LucideHeart,
    number: "Step 02",
    title: "We Write & Seal by Hand",
    description: "Each letter is pressed onto aged parchment, written slowly, and sealed with crimson wax. No two are ever the same.",
  },
  {
    icon: LucidePackage,
    number: "Step 03",
    title: "Delivered to Their Door",
    description: "Packaged like a relic, shipped with care. They won't know what hit them.",
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" className="relative overflow-hidden select-none bg-[#F5ECD7] py-24 px-6 md:px-20 border-y border-[#D8C3A5]/30">
      {/* Paper/linen texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply select-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"
        style={{ backgroundRepeat: "repeat" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12 text-center animate-in fade-in duration-1000 relative z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs font-heading uppercase tracking-[0.3em] text-[#C9A84C] font-semibold">
            The Process
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-[#3B2A1A] tracking-tight">
            From our hands <span className="font-script text-4xl md:text-6xl text-[#6B1E2E] italic font-semibold">to theirs</span>
          </h2>
          <p className="font-serif text-base md:text-lg text-[#3B2A1A]/75 max-w-xl">
            Every letter begins as a quiet afternoon and ends as something kept forever.
          </p>
        </div>

        {/* Steps display - staggered Intersection Observer animation */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="flex flex-col items-center gap-4 text-center p-6 bg-[#F5ECD7]/40 backdrop-blur-sm border border-[#D8C3A5]/40 rounded-xl shadow-md transition-all duration-600 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: isVisible ? `${i * 200}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-center bg-[#6B1E2E]/10 p-4 rounded-full border border-[#6B1E2E]/20 text-[#6B1E2E] mb-2 transform group-hover:scale-105 duration-300">
                  <Icon className="size-8" />
                </div>
                <span className="font-heading text-xs uppercase tracking-widest text-[#C9A84C] font-semibold">
                  {step.number}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-[#3B2A1A]">
                  {step.title}
                </h3>
                <p className="font-serif text-sm md:text-base text-[#3B2A1A]/80 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
