"use client"

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { LucideArrowRight } from "lucide-react";

export default function Hero() {
  const [recipient, setRecipient] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined" && recipient.trim()) {
      sessionStorage.setItem("ayemacats:recipient", recipient.trim());
    }
    const el = document.getElementById("products");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative overflow-hidden select-none pb-8 animate-in fade-in duration-700">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-8 md:grid-cols-12 md:gap-12 md:px-10 md:pb-24 md:pt-12">
        
        {/* Copy column */}
        <div className="md:col-span-6 lg:col-span-7 flex flex-col items-start justify-center gap-6 animate-in fade-in slide-in-from-left-6 duration-1000 relative z-20">
          <div className="flex flex-col gap-3">
            {/* Pressed by Hand Detail */}
            <p className="font-script text-2xl text-[#6B1E2E]/80 tracking-wide select-none">
              Est. in a small town, sealed with love
            </p>
            <h1 className="mt-1 font-heading text-5xl leading-[0.95] tracking-tight text-[#3B2A1A] text-balance md:text-7xl lg:text-[5.5rem] font-light">
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
            <p className="mt-4 flex items-center gap-3 font-serif text-sm text-[#3B2A1A]/65">
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

          <div className="mt-4 flex items-center gap-4 font-serif text-sm italic text-[#3B2A1A]/65 select-none">
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

      {/* Social Proof Bar */}
      <div
        className="relative mx-auto mb-0 mt-6 max-w-7xl border-y px-6 py-5 md:px-10 animate-in fade-in duration-1000 select-none"
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
    </section>
  );
}
