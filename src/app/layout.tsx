import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.odysseesucree.com";
const OG_IMAGE = `${SITE_URL}/creations/wedding-cake-mariage-elegant-montauban.jpeg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Odyssée Sucrée : Wedding Cake et Pâtissier sur Mesure à Montauban (82)",
    template: "%s | Odyssée Sucrée Montauban",
  },
  description:
    "Pâtisserie artisanale à Montauban spécialisée en wedding cakes, gâteaux d'anniversaire et entremets sur mesure. Aurore, CAP Pâtissier formée en wedding cake design, livre Montauban, Moissac, Castelsarrasin et tout le Tarn-et-Garonne. Devis sous 24h.",
  keywords: [
    "wedding cake Montauban",
    "pâtissier Montauban",
    "pâtisserie Montauban",
    "gâteau anniversaire Montauban",
    "cake design Montauban",
    "wedding cake Tarn-et-Garonne",
    "pièce montée mariage Montauban",
    "pâtissier mariage 82",
    "number cake Montauban",
    "layer cake Montauban",
    "letter cake Montauban",
    "entremets sur commande Montauban",
    "pâtissière artisanale Puycornet",
    "gâteau personnalisé Tarn-et-Garonne",
    "Odyssée Sucrée",
    "Aurore pâtissière Montauban",
    "wedding cake Moissac",
    "wedding cake Castelsarrasin",
    "gâteau mariage Caussade",
  ],
  authors: [{ name: "Aurore Afchain", url: SITE_URL }],
  creator: "Aurore Afchain - Odyssée Sucrée",
  publisher: "Odyssée Sucrée",
  category: "Pâtisserie artisanale",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    title: "Odyssée Sucrée : Wedding Cakes et Pâtisserie sur Mesure à Montauban",
    description:
      "Wedding cakes, gâteaux d'anniversaire et entremets artisanaux par Aurore, pâtissière CAP formée en wedding cake design, à Puycornet près de Montauban (82). Devis sous 24h.",
    url: SITE_URL,
    siteName: "Odyssée Sucrée",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Wedding cake élégant de l'atelier Odyssée Sucrée à Montauban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odyssée Sucrée : Wedding Cakes Montauban",
    description:
      "Pâtisserie artisanale à Montauban : wedding cakes, gâteaux d'anniversaire et créations sur mesure par Aurore, CAP Pâtissier.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

// JSON-LD global : Bakery + LocalBusiness + WebSite. FAQPage et BreadcrumbList sont injectés au niveau de chaque page concernée pour eviter les duplications.
const bakerySchema = {
  "@context": "https://schema.org",
  "@type": ["Bakery", "LocalBusiness"],
  "@id": `${SITE_URL}/#bakery`,
  name: "Odyssée Sucrée",
  alternateName: "Odyssée Sucrée Montauban",
  legalName: "Odyssée Sucrée (Aurore Afchain)",
  image: [
    `${SITE_URL}/logo.png`,
    `${SITE_URL}/creations/wedding-cake-mariage-elegant-montauban.jpeg`,
    `${SITE_URL}/creations/wedding-cake-mariage-3-etages-montauban.jpeg`,
  ],
  logo: `${SITE_URL}/logo.png`,
  description:
    "Pâtisserie artisanale à Montauban spécialisée dans les wedding cakes, gâteaux d'anniversaire et entremets sur mesure. Aurore, CAP Pâtissier formée en wedding cake design, crée des pièces uniques pour mariages et événements dans le Tarn-et-Garonne.",
  url: SITE_URL,
  telephone: "+33634849182",
  email: "odysseesucree82@gmail.com",
  priceRange: "€€",
  paymentAccepted: "Espèces, Virement, Chèque",
  currenciesAccepted: "EUR",
  servesCuisine: ["French", "Pastry", "Cake design"],
  slogan: "L'art de la pâtisserie sur mesure à Montauban",
  foundingDate: "2023",
  vatID: "FR93876375200012",
  address: {
    "@type": "PostalAddress",
    streetAddress: "101 Route de l'Honor de Cos",
    addressLocality: "Puycornet",
    addressRegion: "Occitanie",
    postalCode: "82220",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.1447,
    longitude: 1.4858,
  },
  hasMap: "https://maps.google.com/?q=101+Route+de+l'Honor+de+Cos,+82220+Puycornet",
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#aurore`,
    name: "Aurore Afchain",
    jobTitle: "Pâtissière CAP, spécialiste wedding cake",
    description:
      "Aurore est pâtissière CAP, ancienne professeure des écoles reconvertie par passion. Formée en wedding cake design, elle a perfectionné son savoir-faire chez Mauranes et Alexandres à Montauban avant d'ouvrir son propre atelier Odyssée Sucrée.",
    alumniOf: [
      {
        "@type": "Organization",
        name: "Mauranes Pâtisserie Montauban",
      },
      {
        "@type": "Organization",
        name: "Alexandres Pâtisserie Montauban",
      },
    ],
    worksFor: { "@id": `${SITE_URL}/#bakery` },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Montauban",
    },
    {
      "@type": "City",
      name: "Moissac",
    },
    {
      "@type": "City",
      name: "Castelsarrasin",
    },
    {
      "@type": "City",
      name: "Caussade",
    },
    {
      "@type": "City",
      name: "Lafrançaise",
    },
    {
      "@type": "City",
      name: "Beaumont-de-Lomagne",
    },
    {
      "@type": "AdministrativeArea",
      name: "Tarn-et-Garonne",
    },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 44.1447,
        longitude: 1.4858,
      },
      geoRadius: "50000",
    },
  ],
  knowsAbout: [
    "Wedding cake",
    "Cake design",
    "Pâtisserie de mariage",
    "Layer cake",
    "Number cake",
    "Letter cake",
    "Piñata cake",
    "Entremets sur mesure",
    "Pièce montée",
    "Gâteau d'anniversaire personnalisé",
    "Mignardises de mariage",
    "Bûche de Noël artisanale",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Wedding cake sur mesure Montauban",
        description:
          "Création de wedding cakes uniques pour mariages à Montauban et dans le Tarn-et-Garonne, conçus avec la mariée selon son thème et ses envies.",
        provider: { "@id": `${SITE_URL}/#bakery` },
        areaServed: "Tarn-et-Garonne",
        url: `${SITE_URL}/wedding-cake-montauban`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Gâteau de mariage, pièce montée et pyramide de macarons",
        description:
          "Gâteaux de mariage artisanaux : pièces montées traditionnelles, wedding cakes modernes, pyramides de macarons, gâteaux partagés. Livraison dans tout le Tarn-et-Garonne.",
        provider: { "@id": `${SITE_URL}/#bakery` },
        areaServed: "Tarn-et-Garonne",
        url: `${SITE_URL}/gateau-mariage-montauban`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mignardises et buffet de mariage",
        description:
          "Buffets de mignardises artisanales pour mariages : macarons, sablés personnalisés, mini-tartelettes, candy bar thématique.",
        provider: { "@id": `${SITE_URL}/#bakery` },
        areaServed: "Tarn-et-Garonne",
        url: `${SITE_URL}/mignardises-mariage-montauban`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Gâteau d'anniversaire personnalisé Montauban",
        description:
          "Layer cakes, number cakes, letter cakes et piñata cakes personnalisés pour anniversaires enfants et adultes à Montauban.",
        provider: { "@id": `${SITE_URL}/#bakery` },
        url: `${SITE_URL}/gateau-anniversaire-montauban`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Entremets et tartes sur commande",
        description:
          "Entremets et tartes artisanaux à commander pour vos repas et événements à Montauban et alentours.",
        provider: { "@id": `${SITE_URL}/#bakery` },
      },
    },
  ],
  sameAs: [
    "https://www.instagram.com/odyssee_sucree/",
    "https://www.facebook.com/odysseesucree",
    "https://www.puycornet.com/commerce-et-artisanat/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "18",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Camille L." },
      reviewBody:
        "Notre wedding cake était à la hauteur de nos rêves. Aurore a su comprendre exactement ce que nous voulions, le résultat était magnifique et tout le monde s'est régalé. Je recommande à 100% pour tous les mariages dans le Tarn-et-Garonne.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sophie M." },
      reviewBody:
        "J'ai commandé un layer cake Stitch pour les 6 ans de mon fils, c'était une vraie œuvre d'art. Les enfants étaient émerveillés et le gâteau était délicieux. Aurore est une artiste, merci !",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Julie B." },
      reviewBody:
        "Aurore a réalisé notre wedding cake et toutes les mignardises de notre buffet. Une qualité exceptionnelle, des saveurs incroyables et un travail artistique remarquable. Tous nos invités en parlent encore.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Marie D." },
      reviewBody:
        "Number cake pour mes 30 ans, fraisier XXL pour la fête des mères, bûche de Noël originale en décembre : à chaque fois c'est parfait. Aurore est sérieuse, à l'écoute et ses pâtisseries sont à tomber.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Thomas R." },
      reviewBody:
        "Pour le baptême de notre fille, Aurore a créé un letter cake aux fruits rouges sublime. Présentation soignée, livraison ponctuelle et goût incomparable. Une vraie professionnelle de la pâtisserie.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Aurélie P." },
      reviewBody:
        "Pinata cake pour l'anniversaire de ma fille, surprise garantie quand on a coupé le gâteau ! Aurore a un vrai talent et propose des créations qui sortent vraiment de l'ordinaire à Montauban.",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Odyssée Sucrée",
  alternateName: "Odyssée Sucrée Montauban",
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_URL}/#bakery` },
  about: { "@id": `${SITE_URL}/#bakery` },
  mainEntity: { "@id": `${SITE_URL}/#bakery` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-site-verification" content="o7kycFnqvuiO3LwnA3qDFIc5Ttailkuqu0l2RdeG90Q" />
        <meta name="geo.region" content="FR-82" />
        <meta name="geo.placename" content="Puycornet, Montauban, Tarn-et-Garonne" />
        <meta name="geo.position" content="44.1447;1.4858" />
        <meta name="ICBM" content="44.1447, 1.4858" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bakerySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
