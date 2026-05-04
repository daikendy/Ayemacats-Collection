"use client"

import { useState } from "react"
import Image from "next/image"
import { LucideMenu, LucideX } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#F5ECD7]/80 backdrop-blur-md border-b border-[#D8C3A5]/40 select-none">
      <nav className="px-6 md:px-12 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative size-9 rounded-full overflow-hidden border border-[#C9A84C]/40 select-none shadow-sm">
            <Image 
              src="/logo.jpg" 
              alt="Ayemacats logo" 
              fill 
              sizes="36px"
              className="object-cover" 
            />
          </div>
          <span className="font-heading text-2xl font-bold tracking-widest text-[#3B2A1A]">
            AYEMACATS
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-[#3B2A1A]/80">
          <a href="#hero" className="hover:text-[#6B1E2E] hover:underline underline-offset-4 transition duration-300">Home</a>
          <a href="#story" className="hover:text-[#6B1E2E] hover:underline underline-offset-4 transition duration-300">Our Story</a>
          <a href="#products" className="hover:text-[#6B1E2E] hover:underline underline-offset-4 transition duration-300">Collection</a>
          <a href="#reviews" className="hover:text-[#6B1E2E] hover:underline underline-offset-4 transition duration-300">Letters</a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#products"
            className="hidden md:inline-flex px-4 py-1.5 border border-[#6B1E2E] hover:bg-[#6B1E2E] hover:text-[#F5ECD7] rounded-full text-xs font-medium tracking-widest uppercase transition duration-300"
          >
            Explore
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#3B2A1A] hover:text-[#6B1E2E] transition focus:outline-none select-none cursor-pointer"
          >
            {isOpen ? <LucideX className="size-6" /> : <LucideMenu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Slide-down mobile menu when hamburger is clicked */}
      {isOpen && (
        <div className="md:hidden border-b border-[#D8C3A5]/30 bg-[#F5ECD7] px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a 
            href="#hero" 
            onClick={() => setIsOpen(false)} 
            className="font-heading text-sm font-medium uppercase tracking-wider text-[#3B2A1A] hover:text-[#6B1E2E] transition duration-300 border-b border-[#D8C3A5]/20 pb-2"
          >
            Home
          </a>
          <a 
            href="#story" 
            onClick={() => setIsOpen(false)} 
            className="font-heading text-sm font-medium uppercase tracking-wider text-[#3B2A1A] hover:text-[#6B1E2E] transition duration-300 border-b border-[#D8C3A5]/20 pb-2"
          >
            Our Story
          </a>
          <a 
            href="#products" 
            onClick={() => setIsOpen(false)} 
            className="font-heading text-sm font-medium uppercase tracking-wider text-[#3B2A1A] hover:text-[#6B1E2E] transition duration-300 border-b border-[#D8C3A5]/20 pb-2"
          >
            Collection
          </a>
          <a 
            href="#reviews" 
            onClick={() => setIsOpen(false)} 
            className="font-heading text-sm font-medium uppercase tracking-wider text-[#3B2A1A] hover:text-[#6B1E2E] transition duration-300 border-b border-[#D8C3A5]/20 pb-2"
          >
            Letters
          </a>
          <a 
            href="#products" 
            onClick={() => setIsOpen(false)} 
            className="inline-flex items-center justify-center px-4 py-2 bg-[#6B1E2E] text-[#F5ECD7] rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-[#6B1E2E]/90 transition duration-300 mt-2 cursor-pointer"
          >
            Explore
          </a>
        </div>
      )}
    </header>
  )
}
