import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import RelatedPages, { RelatedLink } from '@/components/RelatedPages';
import { creations } from '@/data/creations';

export type CityLandingProps = {
  city: string;
  slug: string;
  postalCode: string;
  distanceKm: number;
  intro: string;
  heroImage: string;
  heroAlt: string;
  context: string;
  neighborhoods?: string[];
  deliveryPoints?: string[];
  faqs: FAQItem[];
  related?: RelatedLink[];
};

const SITE_URL = 'https://www.odysseesucree.com';

const services = [
  {
    title: 'Wedding cake et gâteau de mariage',
    text: "Pièces montées traditionnelles, wedding cakes à étages, pyramides de macarons : toute la palette mariage, livrée et installée sur votre lieu de réception.",
    href: '/gateau-mariage-montauban',
  },
  {
    title: 'Gâteau d\'anniversaire personnalisé',
    text: "Layer cakes, number cakes, letter cakes, piñata cakes : gâteaux d'anniversaire sur mesure pour enfants et adultes, tous âges et tous thèmes.",
    href: '/gateau-anniversaire-montauban',
  },
  {
    title: 'Mignardises et buffet sucré',
    text: "Buffets de mignardises pour mariages et événements : macarons, sablés personnalisés, mini-tartelettes, choux, candy bar thématique.",
    href: '/mignardises-mariage-montauban',
  },
  {
    title: 'Créations artisanales sur commande',
    text: "Entremets, tartes, gâteaux de baptême ou de communion, anniversaires d'entreprise : toutes les créations sucrées sur mesure.",
    href: '/#creations',
  },
];

export default function CityLanding({
  city,
  slug,
  postalCode,
  distanceKm,
  intro,
  heroImage,
  heroAlt,
  context,
  neighborhoods,
  deliveryPoints,
  faqs,
  related,
}: CityLandingProps) {
  const pageUrl = `${SITE_URL}/patissier-${slug}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}/#service`,
    name: `Pâtissière artisanale à ${city}`,
    serviceType: 'Pâtisserie sur mesure, gâteaux de mariage et d\'anniversaire',
    provider: {
      '@type': 'Bakery',
      '@id': `${SITE_URL}/#bakery`,
      name: 'Odyssée Sucrée',
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Tarn-et-Garonne',
      },
    },
    description: `Aurore, pâtissière artisanale installée à Puycornet, intervient à ${city} (${postalCode}) pour tous vos gâteaux de mariage, anniversaires et événements. Livraison et dressage sur place.`,
    url: pageUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Zones d\'intervention', item: `${SITE_URL}/#contact` },
      { '@type': 'ListItem', position: 3, name: `Pâtissière à ${city}`, item: pageUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const weddingCreations = creations.filter((c) => c.category === 'wedding').slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative pt-20">
        {/* Hero */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-sm font-semibold uppercase tracking-wider">
              Pâtisserie artisanale à {city}
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl">
              Pâtissière à {city} : Wedding Cakes, Anniversaires et Mignardises
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 font-light">
              {intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-base font-semibold shadow-2xl">
                <a href="#devis">
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-7 text-base font-semibold bg-white/20 backdrop-blur-md text-white border-2 border-white/70 hover:bg-white hover:text-[#9B7AB8]"
              >
                <a href="#prestations">Voir les prestations</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contexte local */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-8">
              Votre pâtissière de confiance à {city}
            </h2>
            <p className="text-xl leading-relaxed text-[#6B6B6B] mb-6 whitespace-pre-line">
              {context}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/20 rounded-2xl p-6 text-center border border-[#D8C7E8]/30">
                <MapPin className="w-8 h-8 text-[#9B7AB8] mx-auto mb-3" />
                <p className="font-semibold text-[#2D2D2D]">{distanceKm} km</p>
                <p className="text-sm text-[#6B6B6B]">de l'atelier de Puycornet</p>
              </div>
              <div className="bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/20 rounded-2xl p-6 text-center border border-[#D8C7E8]/30">
                <Check className="w-8 h-8 text-[#9B7AB8] mx-auto mb-3" />
                <p className="font-semibold text-[#2D2D2D]">Livraison et dressage</p>
                <p className="text-sm text-[#6B6B6B]">sur place à {city}</p>
              </div>
              <div className="bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/20 rounded-2xl p-6 text-center border border-[#D8C7E8]/30">
                <Check className="w-8 h-8 text-[#9B7AB8] mx-auto mb-3" />
                <p className="font-semibold text-[#2D2D2D]">Devis sous 24h</p>
                <p className="text-sm text-[#6B6B6B]">personnalisé et gratuit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prestations */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30" id="prestations">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Nos prestations pâtisserie à {city}
              </h2>
              <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
                Les quatre grandes familles de créations qu'Aurore réalise pour les habitants de {city} et ses environs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-[#D8C7E8]/30 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#9B7AB8] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed mb-4">{s.text}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#9B7AB8]">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quartiers / lieux desservis */}
        {(neighborhoods || deliveryPoints) && (
          <section className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-10 text-center">
                Livraison à {city} et ses environs
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {neighborhoods && (
                  <div className="bg-gradient-to-br from-[#F3E8FF]/30 to-white rounded-2xl p-8 border border-[#D8C7E8]/30">
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Quartiers et villages desservis</h3>
                    <ul className="space-y-2">
                      {neighborhoods.map((n) => (
                        <li key={n} className="flex items-start gap-2 text-[#6B6B6B]">
                          <Check className="w-5 h-5 text-[#9B7AB8] flex-shrink-0 mt-0.5" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {deliveryPoints && (
                  <div className="bg-gradient-to-br from-[#F3E8FF]/30 to-white rounded-2xl p-8 border border-[#D8C7E8]/30">
                    <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Lieux de réception courants</h3>
                    <ul className="space-y-2">
                      {deliveryPoints.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-[#6B6B6B]">
                          <Check className="w-5 h-5 text-[#9B7AB8] flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Galerie */}
        <section className="py-24 bg-gradient-to-b from-[#F3E8FF]/30 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Quelques créations livrées en Tarn-et-Garonne
              </h2>
              <p className="text-lg text-[#6B6B6B]">
                Un aperçu des wedding cakes et gâteaux réalisés par Aurore pour des clients autour de {city}.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {weddingCreations.map((c) => (
                <div
                  key={c.id}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    loading="lazy"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQAccordion
          badge={`FAQ ${city}`}
          title={`Questions fréquentes sur la livraison de gâteaux à ${city}`}
          intro="Tout ce qu'il faut savoir avant de commander."
          items={faqs}
          id={`faq-${slug}`}
        />

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/30" id="devis">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Votre projet pâtisserie à {city}
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-12">
              Parlez-nous de votre événement, nous revenons vers vous avec un devis personnalisé sous 24h.
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
              <a href="/#contact">
                Remplir le formulaire de devis
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        {related && related.length > 0 && (
          <RelatedPages
            title={`Préparez votre événement à ${city}`}
            intro="Nos prestations et guides pour vous accompagner."
            links={related}
          />
        )}
      </main>
    </>
  );
}
