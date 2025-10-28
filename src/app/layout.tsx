import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odyssée Sucrée | Pâtisserie Artisanale sur Mesure à Montauban",
  description: "Pâtisserie artisanale d'exception à Puycornet, près de Montauban. Wedding cakes, gâteaux d'anniversaire, entremets sur mesure. CAP Pâtissier, créations uniques pour vos événements.",
  keywords: "pâtisserie Montauban, wedding cake Montauban, gâteau sur mesure, pâtisserie artisanale, cake design Tarn-et-Garonne, gâteau anniversaire, entremets, pâtisserie Puycornet",
  authors: [{ name: "Aurore - Odyssée Sucrée" }],
  creator: "Odyssée Sucrée",
  publisher: "Odyssée Sucrée",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.odysseesucree.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Odyssée Sucrée | Pâtisserie Artisanale sur Mesure",
    description: "Pâtisserie artisanale d'exception à Puycornet, près de Montauban. Wedding cakes et créations sur mesure pour vos événements.",
    url: 'https://www.odysseesucree.com',
    siteName: 'Odyssée Sucrée',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/photos site/wedding cake (2).jpeg',
        width: 1200,
        height: 630,
        alt: 'Odyssée Sucrée - Pâtisserie Artisanale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Odyssée Sucrée | Pâtisserie Artisanale sur Mesure",
    description: "Pâtisserie artisanale d'exception à Montauban. Wedding cakes et créations sur mesure.",
    images: ['/photos site/wedding cake (2).jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google-search-console',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Odyssée Sucrée",
              "image": "https://www.odysseesucree.com/logo.png",
              "description": "Pâtisserie artisanale d'exception spécialisée dans les wedding cakes et créations sur mesure",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "101 Route de l'Honor de Cos",
                "addressLocality": "Puycornet",
                "postalCode": "82220",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.1447,
                "longitude": 1.4858
              },
              "url": "https://www.odysseesucree.com",
              "telephone": "+33634849182",
              "email": "odysseesucree82@gmail.com",
              "priceRange": "€€",
              "servesCuisine": "French",
              "founder": {
                "@type": "Person",
                "name": "Aurore",
                "jobTitle": "Pâtissière CAP"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 44.1447,
                  "longitude": 1.4858
                },
                "geoRadius": "50000"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Wedding Cake sur mesure"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Gâteau d'anniversaire personnalisé"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Entremets artisanaux"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
