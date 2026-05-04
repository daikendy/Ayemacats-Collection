import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative bg-[#3B2A1A] text-[#F5ECD7] py-16 px-6 md:px-12 select-none border-t border-[#D8C3A5]/20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="relative size-10 rounded-full overflow-hidden border border-[#C9A84C]/40 select-none shadow-sm bg-white">
              <Image 
                src="/logo.jpg" 
                alt="Ayemacats logo" 
                fill 
                sizes="40px"
                className="object-cover" 
              />
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
            <a href="https://ph.shp.ee/ov7vr00g?smtt=0.0.9" target="_blank" rel="noopener noreferrer" className="size-11 flex items-center justify-center bg-[#C9A84C]/20 hover:bg-[#C9A84C] text-[#F5ECD7] rounded-full border border-[#D8C3A5]/30 hover:scale-105 transition-all duration-300 shadow-md">
              <span className="font-heading font-bold text-base select-none">Sh</span>
            </a>
            <a href="https://www.tiktok.com/@ayemacatcollectionss?_r=1&_t=ZS-9653Ue0VEFm" target="_blank" rel="noopener noreferrer" className="size-11 flex items-center justify-center bg-[#C9A84C]/20 hover:bg-[#C9A84C] text-[#F5ECD7] rounded-full border border-[#D8C3A5]/30 hover:scale-105 transition-all duration-300 shadow-md">
              <span className="font-heading font-bold text-base select-none">Tk</span>
            </a>
            <a href="https://www.facebook.com/ayemacatcollections" target="_blank" rel="noopener noreferrer" className="size-11 flex items-center justify-center bg-[#C9A84C]/20 hover:bg-[#C9A84C] text-[#F5ECD7] rounded-full border border-[#D8C3A5]/30 hover:scale-105 transition-all duration-300 shadow-md">
              <span className="font-heading font-bold text-base select-none">Fb</span>
            </a>
            <a href="https://www.instagram.com/ayemacatcollections?igsh=bWFheTZ6MnJyb3Ay" target="_blank" rel="noopener noreferrer" className="size-11 flex items-center justify-center bg-[#C9A84C]/20 hover:bg-[#C9A84C] text-[#F5ECD7] rounded-full border border-[#D8C3A5]/30 hover:scale-105 transition-all duration-300 shadow-md">
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
  );
}
