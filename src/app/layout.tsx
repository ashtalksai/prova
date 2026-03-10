import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import Providers from "@/components/providers";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prova.ashketing.com"),
  title: "Prova — Luxury Car Storage Operations",
  description:
    "Operations software for high-end car storage facilities. Bloomberg Terminal meets Porsche Design Center.",
  openGraph: {
    title: "Prova — Luxury Car Storage Operations",
    description:
      "Operations software for high-end car storage facilities. Bloomberg Terminal meets Porsche Design Center.",
    url: "https://prova.ashketing.com",
    siteName: "Prova",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prova — Luxury Car Storage Operations",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prova — Luxury Car Storage Operations",
    description:
      "Operations software for high-end car storage facilities. Bloomberg Terminal meets Porsche Design Center.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorantGaramond.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
