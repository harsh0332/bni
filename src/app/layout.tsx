import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProvider } from "@/components/ui/ScrollProvider";
import "./globals.css";

// Display headings font setup (Fraunces variable with optical sizing)
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

// UI body font setup (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Technical Mono labels font setup (JetBrains Mono)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BNI Dreamers Indore | Premier Business Referral & Networking Group",
  description: "Welcome to BNI Dreamers Indore, the high-end professional networking and business referral chapter in Indore, Madhya Pradesh. Connect with 40+ leading local businesses.",
  metadataBase: new URL("https://bnidreamers.in"), // Default fallback domain
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicon-192.png",
  },
  openGraph: {
    title: "BNI Dreamers Indore",
    description: "Indore's premier professional networking and business referral chapter of elite entrepreneurs.",
    url: "https://bnidreamers.in",
    siteName: "BNI Dreamers Indore",
    images: [
      {
        url: "/images/banner-generic.jpg",
        width: 1200,
        height: 630,
        alt: "BNI Dreamers Indore Chapter Cover",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BNI Dreamers Indore",
    description: "Indore's premier professional networking and business referral chapter of elite entrepreneurs.",
    images: ["/images/banner-generic.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured data schema markup
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BNI Dreamers Indore",
    "image": "https://bnidreamers.in/images/banner-generic.jpg",
    "description": "Indore's premier professional networking and business referral chapter meeting weekly at Hotel Sayaji.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hotel Sayaji, Vijay Nagar",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.744439",
      "longitude": "75.894364"
    },
    "url": "https://bnidreamers.in",
    "telephone": "+91XXXXXXXXXX", // TODO: Client to confirm before public display
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "07:30",
        "closes": "09:00"
      }
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased bg-paper min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Subtle global fixed noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        <ScrollProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
