"use client"

import Image from "next/image"
import { useState } from "react"
import { LucidePlay } from "lucide-react"

const videos = [
  {
    url: "https://www.tiktok.com/@ayemacatcollectionss/video/7324199902571990277?is_from_webapp=1&sender_device=pc&web_id=7452804418628437522",
    poster: "/scroll_letter_unboxing.png",
    caption: "the unboxing that broke the internet",
    views: "4.2M",
    rotate: "md:-rotate-[3deg]",
    nudge: "md:translate-y-4",
  },
  {
    url: "https://www.tiktok.com/@ayemacatcollectionss/video/7457962166247902471?is_from_webapp=1&sender_device=pc&web_id=7452804418628437522",
    poster: "/our_story_medieval.png",
    caption: "how we seal each letter",
    views: "1.8M",
    rotate: "md:rotate-[2deg]",
    nudge: "md:-translate-y-4",
  },
  {
    url: "https://www.tiktok.com/@ayemacatcollectionss/video/7554030059791650055?is_from_webapp=1&sender_device=pc&web_id=7452804418628437522",
    poster: "/dried_flowers_aesthetic.png",
    caption: "behind the workshop door",
    views: "920K",
    rotate: "md:-rotate-[1.5deg]",
    nudge: "md:translate-y-2",
  },
]

export default function TikTok() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [iframeSrc, setIframeSrc] = useState<string>("")

  // Get TikTok Embed URL helper
  const getEmbedUrl = (url: string) => {
    if (url.includes("tiktok.com")) {
      const match = url.match(/video\/(\d+)/)
      if (match && match[1]) {
        return `https://www.tiktok.com/embed/v2/${match[1]}`
      }
    }
    return url
  }

  const openVideo = (url: string) => {
    setIframeSrc(getEmbedUrl(url))
    setActiveVideo(url)
  }

  const closeVideo = () => {
    setIframeSrc("")
    setTimeout(() => {
      setActiveVideo(null)
    }, 50)
  }

  const isTikTok = activeVideo ? activeVideo.includes("tiktok.com") : false

  return (
    <section
      id="viral"
      className="relative overflow-hidden select-none"
      style={{ background: "#2d4a3e" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(at 20% 20%, rgba(245,236,215,0.15) 0px, transparent 55%), radial-gradient(at 80% 80%, rgba(201,168,76,0.18) 0px, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32 flex flex-col gap-16">
        {/* heading on top */}
        <div className="flex flex-col md:flex-row items-center text-center md:items-end md:text-left justify-between gap-8 animate-in fade-in duration-1000">
          <div className="max-w-xl">
            <p className="font-script text-3xl text-[#C9A84C]">
              As seen on TikTok
            </p>
            <h2 className="mt-3 font-heading text-4xl font-light leading-tight tracking-tight text-[#F5ECD7] md:text-6xl text-balance">
              Loved by
              <span className="italic text-[#C9A84C] font-semibold"> seven million</span>
              <br />
              pairs of eyes.
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="max-w-sm font-serif text-lg leading-relaxed text-[#F5ECD7]/80">
              We never planned to go viral. The internet just has a soft spot for slow,
              handmade things. We&apos;re grateful you&apos;re here.
            </p>
            <a
              href="https://www.tiktok.com/@ayemacatcollectionss?_r=1&_t=ZS-9653Ue0VEFm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-heading text-sm uppercase tracking-[0.25em] text-[#C9A84C] underline decoration-2 underline-offset-[6px] hover:text-[#F5ECD7] cursor-pointer transition"
            >
              @ayemacats on TikTok →
            </a>
          </div>
        </div>

        {/* 3 Large Beautiful Cards - Layout Matching Reference Image Exactly */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 max-w-6xl mx-auto w-full">
          {videos.map((v, i) => (
            <div
              key={v.caption}
              onClick={() => openVideo(v.url)}
              className={`group flex flex-col justify-between border border-[#C9A84C]/30 bg-[#2D4A3E] p-4.5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-700 select-none cursor-pointer hover:rotate-0 hover:z-30 h-[520px] md:h-[640px] relative ${v.rotate} ${v.nudge}`}
            >
              {/* Image visual wrapper */}
              <div className="relative flex-1 rounded-lg overflow-hidden border border-[#C9A84C]/20 w-full h-full shadow-inner flex items-center justify-center">
                <Image
                  src={v.poster}
                  alt={v.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 duration-700 transition opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A3E]/40 via-transparent to-transparent pointer-events-none" />

                {/* Play Button exactly from user request */}
                <div className="relative z-20 size-16 rounded-full bg-[#6B1E2E]/80 backdrop-blur-md border border-[#C9A84C] flex items-center justify-center group-hover:scale-110 duration-500 shadow-xl">
                  <LucidePlay className="size-6 text-[#F5ECD7] fill-[#F5ECD7] ml-1" />
                </div>

                {/* Styled Views Badge exactly from reference */}
                <div className="absolute top-4 left-4 bg-[#211d17]/85 backdrop-blur-md border border-[#F5ECD7]/15 rounded-full px-3.5 py-1.5 flex items-center gap-2 z-20 shadow-md">
                  <span className="size-2 bg-red-600 rounded-full animate-pulse"></span>
                  <span className="font-heading text-[11px] tracking-wider text-[#F5ECD7] uppercase select-none">
                    {v.views} Views
                  </span>
                </div>
              </div>

              {/* Sub-card script caption matching exactly from reference */}
              <p className="font-script text-2xl text-[#C9A84C] italic font-normal tracking-wide text-center mt-5 mb-1 px-2 group-hover:text-[#F5ECD7] transition duration-300">
                "{v.caption}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fully Playable Fullscreen Lightbox Modal Video Player */}
      {activeVideo && (
        <div className="fixed inset-0 bg-[#211d17]/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 text-[#F5ECD7] hover:text-[#C9A84C] text-5xl cursor-pointer transition z-50"
          >
            ×
          </button>
          <div className="relative aspect-[9/16] h-[82vh] max-w-md rounded-2xl overflow-hidden border border-[#C9A84C]/40 bg-[#1A1A1A] flex items-center justify-center shadow-2xl">
            {isTikTok ? (
              <iframe
                key={activeVideo}
                src={iframeSrc}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
              />
            ) : (
              <video
                key={activeVideo}
                src={activeVideo}
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
