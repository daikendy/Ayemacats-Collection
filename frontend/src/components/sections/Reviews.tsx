"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function Reviews() {
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
    <section id="reviews" className="relative bg-[#EAE0C9]/30 border-t border-[#D8C3A5]/30 py-24 px-6 md:px-20 select-none">
      {/* Paper/linen texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply select-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"
        style={{ backgroundRepeat: "repeat" }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* TikTok Section */}
        <div className="flex-1 flex flex-col gap-6 w-full animate-in fade-in duration-1000">
          <span className="font-script text-3xl text-[#2D4A3E] italic tracking-wide">
            Trending Romance
          </span>
          <h3 className="font-heading text-4xl font-light text-[#3B2A1A] leading-tight">
            A Viral Love Story
          </h3>
          <p className="text-[#3B2A1A]/85 text-base leading-relaxed max-w-md">
            Our unique medieval scroll letter unboxings have captivated millions across TikTok and Instagram. Follow the trend and preserve your timeless sentiments today.
          </p>
          <div className="relative w-full h-[280px] rounded-xl overflow-hidden shadow-lg border border-[#D8C3A5]/40 mt-2 bg-[#F5ECD7] flex items-center justify-center">
            <Image 
              src="/scroll_letter_unboxing.png" 
              alt="Trending videos on TikTok"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover blur-[2px] opacity-40 select-none"
            />
            <div className="relative z-10 flex flex-col items-center gap-3 bg-[#F5ECD7]/90 px-6 py-4 rounded-xl border border-[#D8C3A5]/60 shadow-md">
              <span className="font-semibold text-xs tracking-widest text-[#2D4A3E] uppercase select-none">Ayemacats TikTok</span>
              <h4 className="font-heading text-xl font-light text-[#3B2A1A] select-none italic">"Enemies to lovers aesthetic"</h4>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-1.5 bg-[#6B1E2E] text-[#F5ECD7] text-xs rounded-full font-medium tracking-wide hover:bg-[#6B1E2E]/90 hover:scale-102 transition duration-300"
              >
                Watch our Videos
              </a>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div ref={ref} className="flex-1 flex flex-col gap-6 w-full">
          <span className="font-script text-3xl text-[#C9A84C] italic font-normal tracking-wide">
            Precious Testimonials
          </span>
          <h3 className="font-heading text-4xl font-light text-[#3B2A1A] leading-tight">
            Voices of our Court
          </h3>
          
          <div className="flex flex-col gap-6 mt-2">
            {/* Review 1 */}
            <div 
              className="relative bg-[#F9F3E8] border border-[#D8C3A5]/40 p-5 rounded-xl flex flex-col gap-3 shadow-md transform hover:rotate-1 max-w-md self-start transition-all duration-600 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: isVisible ? "0ms" : "0ms",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-base text-[#3B2A1A]">Isabella F.</span>
                <span className="text-xs text-[#2D4A3E] tracking-widest uppercase italic">Manila, PH</span>
              </div>
              <p className="text-[#3B2A1A]/80 italic font-serif text-sm leading-relaxed">
                "Reading this felt exactly like discovering a 200-year-old love letter hidden in a secret compartment. The parchment and wax seal feel incredibly premium and absolutely out of this world."
              </p>
            </div>

            {/* Review 2 */}
            <div 
              className="relative bg-[#F9F3E8] border border-[#D8C3A5]/40 p-5 rounded-xl flex flex-col gap-3 shadow-md transform hover:-rotate-1 max-w-md self-end transition-all duration-600 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: isVisible ? "150ms" : "0ms",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-base text-[#3B2A1A]">Nathaniel D.</span>
                <span className="text-xs text-[#2D4A3E] tracking-widest uppercase italic">Cebu, PH</span>
              </div>
              <p className="text-[#3B2A1A]/80 italic font-serif text-sm leading-relaxed">
                "I ordered the dried flowers bouquet and the royal scroll for our 5th anniversary. My partner was truly brought to tears. Best gift choice I've ever made!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
