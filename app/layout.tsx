import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Czekoladziarnia Wrocław | Najlepsza Czekolada we Wrocławiu",
  description: "Czekoladziarnia Wrocław - odkryj wyjątkowy smak czekolady rzemieślniczej. Ręcznie robione praliny, gorąca czekolada i desery czekoladowe. Odwiedź nas we Wrocławiu!",
  keywords: "czekoladziarnia, czekolada, Wrocław, praliny, gorąca czekolada, desery czekoladowe, rzemieślnicza czekolada, słodycze",
  authors: [{ name: "Czekoladziarnia Wrocław" }],
  openGraph: {
    title: "Czekoladziarnia Wrocław | Najlepsza Czekolada",
    description: "Odkryj wyjątkowy smak czekolady rzemieślniczej we Wrocławiu",
    type: "website",
    locale: "pl_PL",
    url: "https://czekoladziarnia-wroclaw.pl",
    images: [
      {
        url: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64372?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Czekoladziarnia Wrocław - praliny czekoladowe",
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Czekoladziarnia Wrocław",
    "image": "https://czekoladziarnia-wroclaw.pl/logo.jpg",
    "@id": "https://czekoladziarnia-wroclaw.pl",
    "url": "https://czekoladziarnia-wroclaw.pl",
    "telephone": "+48123456789",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rynek",
      "addressLocality": "Wrocław",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.1099,
      "longitude": 17.0319
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "21:00"
      }
    ],
    "servesCuisine": "Czekolada, Desery",
    "menu": "https://czekoladziarnia-wroclaw.pl#menu",
    "acceptsReservations": "True"
  };

  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
