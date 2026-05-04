import Image from "next/image";
import { LucideHeart, LucideArrowRight, LucideMenu } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#F5ECD7] overflow-x-hidden text-[#3B2A1A] font-serif selection:bg-[#6B1E2E] selection:text-[#F5ECD7]">
      {/* Subtle paper/parchment background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"
        style={{ backgroundRepeat: "repeat" }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F5ECD7]/80 backdrop-blur-md border-b border-[#D8C3A5]/40 px-6 md:px-12 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <LucideHeart className="text-[#6B1E2E] fill-[#6B1E2E] animate-pulse duration-2000 size-5" />
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
          <button className="md:hidden text-[#3B2A1A] hover:text-[#6B1E2E] transition">
            <LucideMenu className="size-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-12 md:gap-8 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col items-start gap-6 max-w-xl animate-in fade-in slide-in-from-left-6 duration-1000">
          <span className="font-script text-3xl md:text-4xl text-[#C9A84C] select-none italic font-normal tracking-wide">
            Discover a lost romance...
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-light text-[#3B2A1A] leading-[1.1] tracking-normal">
            Words That Last <br />
            <span className="text-[#6B1E2E] italic font-semibold">Forever</span>
          </h1>
          <p className="text-[#3B2A1A]/90 text-lg md:text-xl font-light leading-relaxed max-w-md">
            Handcrafted vintage scroll letters and dried flower arrangements. Revisit an era of old castles, warm candlelight, and eternal promises.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            {/* CTA Button as Wax Seal */}
            <a
              href="#products"
              className="group relative flex items-center gap-3 bg-[#6B1E2E] hover:bg-[#6B1E2E]/90 text-[#F5ECD7] font-medium text-base tracking-wider rounded-lg px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 duration-300 select-none cursor-pointer border border-transparent overflow-hidden"
            >
              <span className="absolute -left-1 opacity-20 bg-black/40 blur-xl size-12 rounded-full transform scale-0 group-hover:scale-150 duration-500" />
              <div className="relative flex items-center justify-center bg-[#C9A84C]/90 text-white rounded-full size-8 shadow-inner border border-[#F5ECD7]/30 transform group-hover:rotate-12 duration-300">
                <span className="font-heading font-black text-sm tracking-tighter">A</span>
              </div>
              <span className="font-heading tracking-wide">Enter the Collection</span>
              <LucideArrowRight className="size-4 group-hover:translate-x-1 duration-300" />
            </a>
            
            <a 
              href="#story" 
              className="text-sm font-medium tracking-wide border-b border-[#D8C3A5] text-[#3B2A1A]/80 hover:text-[#6B1E2E] hover:border-[#6B1E2E] duration-300 py-1"
            >
              Learn Our History
            </a>
          </div>
        </div>

        {/* Hero image with a vignette overlay */}
        <div className="flex-1 relative w-full h-[400px] md:h-[600px] max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-[#D8C3A5]/50 animate-in fade-in slide-in-from-right-6 duration-1000 transform hover:scale-[1.01] transition-all">
          <Image
            src="/scroll_letter_unboxing.png"
            alt="Handcrafted medieval scroll letter"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover select-none filter sepia-[0.15] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-[#C9A84C]/20 pointer-events-none rounded-2xl" />
        </div>
      </section>

      {/* About / Our Story */}
      <section id="story" className="relative bg-[#EAE0C9]/40 border-y border-[#D8C3A5]/30 py-24 px-6 md:px-20 overflow-hidden select-none">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-xl border border-[#D8C3A5]/40 transform -rotate-1 hover:rotate-0 duration-500 hover:scale-[1.02]">
            <Image
              src="/our_story_medieval.png"
              alt="Antique medieval writing desk"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover select-none filter sepia-[0.2]"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[#C9A84C]/20 pointer-events-none" />
          </div>

          <div className="flex-1 flex flex-col items-start gap-6 max-w-xl">
            <span className="font-script text-3xl md:text-4xl text-[#C9A84C] italic font-normal tracking-wide">
              Written from our hearts...
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#3B2A1A] leading-tight">
              A Legacy of Ancient Romance
            </h2>
            <div className="w-16 h-0.5 bg-[#6B1E2E]/40" />
            <p className="text-[#3B2A1A]/85 font-serif text-lg leading-relaxed">
              Ayemacats Collection was born out of a profound love for traditional storytelling. We recreate the authentic weight of a medieval letter sealed with crimson wax. Like a lost parchment rediscovered in an attic chest, every item carries a timeless, romantic message meant to outlive the fleeting digital era.
            </p>
            <p className="text-[#3B2A1A]/85 font-serif text-lg leading-relaxed">
              Our dried flowers, delicately preserved by expert hands, stand as an enduring tribute to fleeting seasons—a quiet, lasting touch of wild nature for those you hold dearest.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-28 px-6 md:px-20 max-w-7xl mx-auto flex flex-col items-center gap-16 select-none">
        <div className="text-center flex flex-col items-center gap-4 max-w-xl">
          <span className="font-script text-3xl text-[#C9A84C] italic font-normal tracking-wide">
            Treasures of time
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-light text-[#3B2A1A] tracking-tight">
            The Royal Archives
          </h2>
          <p className="text-[#3B2A1A]/70 text-lg md:text-xl font-light">
            Each handcrafted scroll letter and bouquet is made to create a stunning, unforgettable moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
          {/* Product 1: The Royal Scroll */}
          <div className="group relative bg-[#F9F3E8] border border-[#D8C3A5]/50 p-6 rounded-xl flex flex-col gap-6 shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 hover:-rotate-1">
            <div className="relative w-full h-[320px] rounded-lg overflow-hidden border border-[#D8C3A5]/30">
              <Image
                src="/scroll_letter_unboxing.png"
                alt="The Royal Scroll Letter"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover select-none filter contrast-[1.01] transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#6B1E2E]/5 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#2D4A3E] text-xs font-semibold tracking-wider uppercase">Legacy Edition</span>
              <h3 className="font-heading text-2xl font-semibold text-[#3B2A1A] group-hover:text-[#6B1E2E] transition">
                The Royal Scroll
              </h3>
              <p className="text-[#3B2A1A]/75 text-sm leading-relaxed min-h-[60px]">
                An authentic love letter or poem penned onto vintage parchment paper, bound with leather cord, and hand-sealed with wax.
              </p>
              <div className="flex items-center justify-between border-t border-[#D8C3A5]/30 pt-4 mt-2">
                <span className="font-heading font-medium text-xl text-[#3B2A1A]">₱950</span>
                <button className="text-sm font-medium tracking-wide text-[#6B1E2E] hover:text-[#6B1E2E]/70 underline underline-offset-4 transition duration-300 flex items-center gap-1 select-none">
                  Customize
                </button>
              </div>
            </div>
          </div>

          {/* Product 2: Dried Flower Arrangement */}
          <div className="group relative bg-[#F9F3E8] border border-[#D8C3A5]/50 p-6 rounded-xl flex flex-col gap-6 shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 hover:rotate-1">
            <div className="relative w-full h-[320px] rounded-lg overflow-hidden border border-[#D8C3A5]/30">
              <Image
                src="/dried_flowers_aesthetic.png"
                alt="Dried Flower Arrangement"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover select-none filter contrast-[1.01] transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#6B1E2E]/5 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#2D4A3E] text-xs font-semibold tracking-wider uppercase">Everlasting Bloom</span>
              <h3 className="font-heading text-2xl font-semibold text-[#3B2A1A] group-hover:text-[#6B1E2E] transition">
                Winter Rose & Lavender
              </h3>
              <p className="text-[#3B2A1A]/75 text-sm leading-relaxed min-h-[60px]">
                A poetic bouquet of meticulously dried flowers, tied together with rustic jute twine to preserve their raw natural elegance.
              </p>
              <div className="flex items-center justify-between border-t border-[#D8C3A5]/30 pt-4 mt-2">
                <span className="font-heading font-medium text-xl text-[#3B2A1A]">₱1,250</span>
                <button className="text-sm font-medium tracking-wide text-[#6B1E2E] hover:text-[#6B1E2E]/70 underline underline-offset-4 transition duration-300 flex items-center gap-1 select-none">
                  Reserve
                </button>
              </div>
            </div>
          </div>

          {/* Product 3: The Gift Box Collection */}
          <div className="group relative bg-[#F9F3E8] border border-[#D8C3A5]/50 p-6 rounded-xl flex flex-col gap-6 shadow-md hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 hover:-rotate-1">
            <div className="relative w-full h-[320px] rounded-lg overflow-hidden border border-[#D8C3A5]/30">
              <Image
                src="/gift_box_wax_seal.png"
                alt="The Gift Box Collection"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover select-none filter contrast-[1.01] transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#6B1E2E]/5 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#2D4A3E] text-xs font-semibold tracking-wider uppercase">Bespoke Gift</span>
              <h3 className="font-heading text-2xl font-semibold text-[#3B2A1A] group-hover:text-[#6B1E2E] transition">
                The Heritage Box
              </h3>
              <p className="text-[#3B2A1A]/75 text-sm leading-relaxed min-h-[60px]">
                An elegant custom-packaged collection. Perfect for birthdays, weddings, or any milestone that demands true medieval artistry.
              </p>
              <div className="flex items-center justify-between border-t border-[#D8C3A5]/30 pt-4 mt-2">
                <span className="font-heading font-medium text-xl text-[#3B2A1A]">₱2,100</span>
                <button className="text-sm font-medium tracking-wide text-[#6B1E2E] hover:text-[#6B1E2E]/70 underline underline-offset-4 transition duration-300 flex items-center gap-1 select-none">
                  Pre-order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen on TikTok & Customer Reviews */}
      <section id="reviews" className="relative bg-[#EAE0C9]/30 border-t border-[#D8C3A5]/30 py-24 px-6 md:px-20 select-none">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          {/* TikTok Section */}
          <div className="flex-1 flex flex-col gap-6 w-full animate-in fade-in slide-in-from-left-6 duration-1000">
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
          <div className="flex-1 flex flex-col gap-6 w-full animate-in fade-in slide-in-from-right-6 duration-1000">
            <span className="font-script text-3xl text-[#C9A84C] italic font-normal tracking-wide">
              Precious Testimonials
            </span>
            <h3 className="font-heading text-4xl font-light text-[#3B2A1A] leading-tight">
              Voices of our Court
            </h3>
            
            <div className="flex flex-col gap-6 mt-2">
              {/* Review 1 */}
              <div className="relative bg-[#F9F3E8] border border-[#D8C3A5]/40 p-5 rounded-xl flex flex-col gap-3 shadow-md transform hover:rotate-1 duration-300 max-w-md self-start">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-semibold text-base text-[#3B2A1A]">Isabella F.</span>
                  <span className="text-xs text-[#2D4A3E] tracking-widest uppercase italic">Manila, PH</span>
                </div>
                <p className="text-[#3B2A1A]/80 italic font-serif text-sm leading-relaxed">
                  "Reading this felt exactly like discovering a 200-year-old love letter hidden in a secret compartment. The parchment and wax seal feel incredibly premium and absolutely out of this world."
                </p>
              </div>

              {/* Review 2 */}
              <div className="relative bg-[#F9F3E8] border border-[#D8C3A5]/40 p-5 rounded-xl flex flex-col gap-3 shadow-md transform hover:-rotate-1 duration-300 max-w-md self-end">
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

      {/* Footer */}
      <footer className="relative bg-[#3B2A1A] text-[#F5ECD7] py-16 px-6 md:px-12 select-none border-t border-[#D8C3A5]/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#C9A84C] text-white size-8 rounded-full flex items-center justify-center font-heading font-bold select-none shadow-sm">
                A
              </div>
              <span className="font-heading font-bold text-2xl tracking-widest select-none">
                AYEMACATS
              </span>
            </div>
            <p className="text-[#F5ECD7]/60 text-center md:text-left text-sm max-w-md leading-relaxed select-none">
              A vintage romantic destination dedicated to preserving beautiful thoughts and creating lasting medieval moments.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="font-heading text-lg font-light tracking-wide text-[#C9A84C]">Follow the Legacy</span>
            <div className="flex items-center gap-4">
              {/* Social Icons as stylized Wax Seals */}
              <a href="https://shopee.ph" target="_blank" rel="noopener noreferrer" className="size-11 flex items-center justify-center bg-[#C9A84C]/20 hover:bg-[#C9A84C] text-[#F5ECD7] rounded-full border border-[#D8C3A5]/30 hover:scale-105 transition-all duration-300 shadow-md">
                <span className="font-heading font-bold text-base select-none">Sh</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="size-11 flex items-center justify-center bg-[#C9A84C]/20 hover:bg-[#C9A84C] text-[#F5ECD7] rounded-full border border-[#D8C3A5]/30 hover:scale-105 transition-all duration-300 shadow-md">
                <span className="font-heading font-bold text-base select-none">Tk</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="size-11 flex items-center justify-center bg-[#C9A84C]/20 hover:bg-[#C9A84C] text-[#F5ECD7] rounded-full border border-[#D8C3A5]/30 hover:scale-105 transition-all duration-300 shadow-md">
                <span className="font-heading font-bold text-base select-none">Fb</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="size-11 flex items-center justify-center bg-[#C9A84C]/20 hover:bg-[#C9A84C] text-[#F5ECD7] rounded-full border border-[#D8C3A5]/30 hover:scale-105 transition-all duration-300 shadow-md">
                <span className="font-heading font-bold text-base select-none">Ig</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-[#F5ECD7]/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F5ECD7]/40 select-none">
          <p>© 2026 Ayemacats Collection. Handcrafted in the Philippines.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#C9A84C] transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A84C] transition duration-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
