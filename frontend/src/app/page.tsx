import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Products from "@/components/sections/Products";
import TikTok from "@/components/sections/TikTok";
import Reviews from "@/components/sections/Reviews";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F5ECD7] overflow-x-hidden text-[#3B2A1A] font-serif selection:bg-[#6B1E2E] selection:text-[#F5ECD7]">
      {/* Subtle paper/parchment background overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"
        style={{ backgroundRepeat: "repeat" }}
      />

      <Navigation />
      <main>
        <Hero />
        <Story />
        <Products />
        <TikTok />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

