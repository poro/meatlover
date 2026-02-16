import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailPopup from "@/components/EmailPopup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeatLover - BBQ Grills, Smokers & Meat Delivery Reviews",
  description: "Your trusted source for BBQ equipment reviews, meat subscription comparisons, and everything you need to master the flame. Find the best grills, smokers, and premium meat delivery services.",
  keywords: "bbq, grills, smokers, meat delivery, butcherbox, traeger, weber, kamado joe, meat subscription, bbq reviews",
  openGraph: {
    title: "MeatLover - BBQ Grills, Smokers & Meat Delivery Reviews",
    description: "Your trusted source for BBQ equipment reviews and meat subscription comparisons.",
    type: "website",
    locale: "en_US",
    siteName: "MeatLover",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script defer src="https://analytics.game-agents.com/script.js" data-website-id="91324878-25a2-4a81-a594-50b59404cee7"></script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MeatLover",
              url: "https://meatlover.com",
              logo: "https://meatlover.com/logo.png",
              description: "Your trusted source for BBQ equipment reviews, meat subscription comparisons, and grilling guides.",
              sameAs: [],
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MeatLover",
              url: "https://meatlover.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://meatlover.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-neutral-950 text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <EmailPopup />
      </body>
    </html>
  );
}
