import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CallTonyBanner, { MobileCallBar } from "@/components/CallTonyBanner";

export const metadata: Metadata = {
  title: "VanesaSellingComics | Comics, Vintage Toys & Collectibles",
  description: "Shop comics, vintage toys, modern toys, LEGOs, and collectibles with 99.9% positive feedback. Call Tony at (646) 460-5596!",
  keywords: ["comics", "vintage toys", "collectibles", "LEGO", "eBay seller", "Whatnot", "sell comics"],
  openGraph: {
    title: "VanesaSellingComics",
    description: "Your destination for comics and collectibles. Call Tony: (646) 460-5596",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VanesaSellingComics",
    description: "Comics, Vintage Toys & Collectibles - Call (646) 460-5596",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased pb-16 sm:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Floating Call Button - Desktop */}
        <CallTonyBanner variant="floating" />
        {/* Fixed Call Bar - Mobile */}
        <MobileCallBar />
      </body>
    </html>
  );
}
