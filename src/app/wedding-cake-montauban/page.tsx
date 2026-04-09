import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { creations } from '@/data/creations';
import { Award, Heart, Sparkles, MapPin, Phone, Mail, ArrowRight, Check } from 'lucide-react';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/wedding-cake-montauban`;

export const metadata: Metadata = {
  title: "Wedding Cake Montauban : Pâtissière Spécialiste Mariage Tarn-et-Garonne",
  description:
    "Wedding cake sur mesure à Montauban par Aurore, pâtissière CAP formée en wedding cake design. Pièces montées élégantes, livraison Montauban, Moissac, Castelsarrasin et tout le 82. Devis sous 24h.",
  keywords: [
    "wedding cake Montauban",
    "wedding cake Tarn-et-Garonne",
    "pâtissière mariage Montauban",
    "pièce montée mariage 82",
    "gâteau mariage Moissac",
    "gâteau mariage Castelsarrasin",
    "cake designer mariage Montauban",
    "wedding cake Caussade",
    "wedding cake Lafrançaise",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Wedding Cake Montauban : Pâtissière Spécialiste Mariage",
    description:
      "Aurore, pâtissière CAP formée en wedding cake design, crée vos pièces montées de mariage sur mesure à Montauban et dans tout le Tarn-et-Garonne.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/wedding-cake-mariage-elegant-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Wedding cake élégant Odyssée Sucrée Montauban',
      },
    ],
  },
};

const weddingCreations = creations.filter((c) => c.category === 'wedding');
const mignardisesMariage = creations.filter((c) => c.category === 'mignardises').slice(0, 4);

const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: 'Wedding cake sur mesure à Montauban',
  serviceType: 'Création de wedding cake et pièce montée de mariage',
  provider: {
    '@type': 'Bakery',
    '@id': `${SITE_URL}/#bakery`,
    name: 'Odyssée Sucrée',
  },
  areaServed: [
    { '@type': 'City', name: 'Montauban' },
    { '@type': 'City', name: 'Moissac' },
    { '@type': 'City', name: 'Castelsarrasin' },
    { '@type': 'City', name: 'Caussade' },
    { '@type': 'City', name: 'Lafrançaise' },
    { '@type': 'AdministrativeArea', name: 'Tarn-et-Garonne' },
  ],
  description:
    "Création artisanale de wedding cakes et pièces montées de mariage sur mesure à Montauban. Aurore, pâtissière CAP formée en wedding cake design, conçoit chaque gâteau de mariage selon le thème et les envies des mariés.",
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '4.50',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      priceCurrency: 'EUR',
      price: '4.50',
      unitText: 'par part',
    },
  },
  url: PAGE_URL,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Wedding cake Montauban', item: PAGE_URL },
  ],
};

export default function WeddingCakeMontaubanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="relative pt-20">
        {/* Hero */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/creations/wedding-cake-mariage-elegant-montauban.jpeg"
            alt="Wedding cake élégant pour mariage à Montauban, pâtisserie sur mesure Odyssée Sucrée"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-sm font-semibold uppercase tracking-wider">
              Pâtissière spécialiste wedding cake
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl">
              Wedding Cake sur Mesure à Montauban
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 font-light">
              Aurore, pâtissière CAP formée en wedding cake design, crée la pièce montée de vos rêves pour
              votre mariage à Montauban et dans tout le Tarn-et-Garonne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-base font-semibold shadow-2xl">
                <a href="#devis-wedding">
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-7 text-base font-semibold bg-white/20 backdrop-blur-md text-white border-2 border-white/70 hover:bg-white hover:text-[#9B7AB8]"
              >
                <a href="#galerie-wedding">Voir nos wedding cakes</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir Aurore */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Pourquoi choisir Odyssée Sucrée pour votre wedding cake à Montauban
              </h2>
              <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
                Une pâtissière passionnée, formée aux meilleures techniques, qui transforme votre vision
                en une création unique et inoubliable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Formation prestigieuse en wedding cake design',
                  text: "Aurore a récemment suivi une formation spécialisée en wedding cake auprès de référents reconnus, en plus de son CAP Pâtissier et de son expérience chez Mauranes et Alexandres à Montauban.",
                },
                {
                  icon: Heart,
                  title: '100 % sur mesure, jamais deux fois le même gâteau',
                  text: "Chaque wedding cake est imaginé avec vous : thème du mariage, parfums, étages, fleurs fraîches ou décor en sucre, message personnalisé. Aucune création n'est dupliquée.",
                },
                {
                  icon: Sparkles,
                  title: 'Livraison et installation sur votre lieu de réception',
                  text: "Aurore livre et installe personnellement votre wedding cake à Montauban, Moissac, Castelsarrasin, Caussade, Lafrançaise et dans tout le Tarn-et-Garonne (Toulouse sur demande).",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white to-[#F3E8FF]/30 rounded-2xl p-8 shadow-lg border border-[#D8C7E8]/30"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{item.title}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Le processus de création */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Comment se passe la création de votre wedding cake
              </h2>
              <p className="text-xl text-[#6B6B6B]">
                De la première discussion à l'installation sur place, voici les étapes pour obtenir le wedding
                cake parfait à Montauban.
              </p>
            </div>

            <ol className="space-y-6">
              {[
                {
                  title: '1. Premier échange et devis personnalisé sous 24h',
                  text: "Vous me contactez via le formulaire ou par téléphone. Je vous pose les bonnes questions : date du mariage, lieu de réception, nombre d'invités, thème, envies de saveurs et budget. Vous recevez votre devis personnalisé sous 24h.",
                },
                {
                  title: '2. Validation du projet et acompte de 30 %',
                  text: "Une fois le projet validé ensemble, un acompte de 30 % réserve votre date dans mon planning. Pour un wedding cake, je conseille de réserver 4 à 8 semaines à l'avance, surtout pour la haute saison de mai à septembre.",
                },
                {
                  title: '3. Conception et croquis du design',
                  text: "Je travaille sur le design de votre wedding cake en m'inspirant de votre thème, de vos couleurs, de votre robe et du cadre de la réception. Je vous envoie un croquis ou une référence visuelle pour validation.",
                },
                {
                  title: "4. Fabrication artisanale dans l'atelier",
                  text: "Les biscuits, ganaches, crémeux et décors sont préparés à la main dans mon atelier de Puycornet, avec des produits frais et de qualité. Aucune fabrication industrielle, jamais.",
                },
                {
                  title: '5. Livraison et installation sur votre lieu de réception',
                  text: "Le jour J, je livre et installe personnellement votre wedding cake sur votre lieu de réception. Vérification finale, mise en place des fleurs fraîches, photos : tout est prêt pour votre moment magique.",
                },
              ].map((step, i) => (
                <li key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-[#D8C7E8]/20">
                  <h3 className="text-xl font-bold text-[#9B7AB8] mb-3">{step.title}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Galerie wedding */}
        <section className="py-24 bg-white" id="galerie-wedding">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Quelques wedding cakes et créations de mariage
              </h2>
              <p className="text-xl text-[#6B6B6B]">
                Inspirations pour votre mariage à Montauban : pièces montées, mignardises et sablés personnalisés.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...weddingCreations, ...mignardisesMariage].map((creation) => (
                <article
                  key={creation.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <Image
                    src={creation.image}
                    alt={creation.alt}
                    title={creation.name}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-semibold text-lg mb-1">{creation.name}</h3>
                      <p className="text-sm text-white/80">{creation.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Zone de livraison */}
        <section className="py-24 bg-gradient-to-b from-[#F3E8FF]/30 to-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Wedding cakes livrés dans tout le Tarn-et-Garonne
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-12">
              Aurore se déplace pour livrer et installer vos wedding cakes dans toutes les communes autour de Montauban.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                'Montauban',
                'Moissac',
                'Castelsarrasin',
                'Caussade',
                'Lafrançaise',
                'Beaumont-de-Lomagne',
                'Nègrepelisse',
                'Valence d\'Agen',
                'Puycornet',
                'Molières',
                'Lauzerte',
                'Saint-Antonin-Noble-Val',
              ].map((city) => (
                <div
                  key={city}
                  className="flex items-center justify-center gap-2 bg-white rounded-xl p-4 shadow-sm border border-[#D8C7E8]/30"
                >
                  <MapPin className="w-4 h-4 text-[#9B7AB8]" />
                  <span className="font-medium text-[#2D2D2D]">{city}</span>
                </div>
              ))}
            </div>

            <p className="text-[#6B6B6B] max-w-2xl mx-auto">
              Mariage prévu plus loin ? Nous nous déplaçons aussi sur Toulouse et le nord du Tarn sur demande.
              Contactez-nous pour étudier votre projet.
            </p>
          </div>
        </section>

        {/* CTA Devis */}
        <section className="py-24 bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/30" id="devis-wedding">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Prêt à imaginer votre wedding cake ?
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-12">
              Recevez votre devis personnalisé sous 24h. Contactez Aurore directement par téléphone ou via le
              formulaire de contact d'Odyssée Sucrée.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <a
                href="tel:+33634849182"
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-[#D8C7E8]/30 group"
              >
                <Phone className="w-10 h-10 text-[#9B7AB8] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-[#6B6B6B] font-medium">Téléphone</p>
                <p className="text-2xl font-bold text-[#2D2D2D]">06 34 84 91 82</p>
              </a>
              <a
                href="mailto:odysseesucree82@gmail.com"
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-[#D8C7E8]/30 group"
              >
                <Mail className="w-10 h-10 text-[#9B7AB8] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-[#6B6B6B] font-medium">Email</p>
                <p className="text-lg font-bold text-[#2D2D2D]">odysseesucree82@gmail.com</p>
              </a>
            </div>

            <Button asChild size="lg" className="rounded-full px-12 py-7 text-lg font-semibold shadow-xl">
              <Link href="/#contact">
                Remplir le formulaire de devis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Inclus dans l'offre */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-12 text-center">
              Ce qui est inclus dans votre wedding cake Odyssée Sucrée
            </h2>
            <ul className="space-y-4">
              {[
                'Échange personnalisé pour comprendre votre projet de mariage',
                'Croquis ou référence visuelle de votre wedding cake avant production',
                'Choix des parfums, garnitures et décors avec dégustation possible sur rendez-vous',
                'Fabrication artisanale dans notre atelier avec des produits frais',
                'Livraison et installation sur votre lieu de réception dans le Tarn-et-Garonne',
                'Photos professionnelles de votre wedding cake pour vos souvenirs',
                'Service après-mariage : conseils de conservation et découpe',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#9B7AB8] flex-shrink-0 mt-1" />
                  <span className="text-lg text-[#6B6B6B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Footer />
      </main>
      <LegalModals />
    </>
  );
}
