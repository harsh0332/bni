import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Headings font setup
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-headings",
  display: "swap",
});

// Body font setup
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased bg-white min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
