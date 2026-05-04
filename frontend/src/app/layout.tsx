import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ayemacats Collection - Handcrafted Vintage Scroll Letters",
  description: "A vintage romantic world of handcrafted scroll letters and dried flowers. Words that last forever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ebGaramond.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5ECD7] text-[#3B2A1A] font-serif select-none selection:bg-[#6B1E2E] selection:text-[#F5ECD7]">
        {children}
      </body>
    </html>
  );
}
