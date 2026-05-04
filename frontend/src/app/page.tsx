"use client"

import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Craft from "@/components/sections/Craft";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import TikTok from "@/components/sections/TikTok";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F5ECD7] overflow-x-hidden text-[#3B2A1A] font-serif selection:bg-[#6B1E2E] selection:text-[#F5ECD7]">
      <Navigation />
      <main>
        <Hero />
        <Story />
        <Craft />
        <Products />
        <HowItWorks />
        <TikTok />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
