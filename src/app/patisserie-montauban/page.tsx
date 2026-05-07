import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion';
import RelatedPages from '@/components/RelatedPages';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { creations } from '@/data/creations';
import { ArrowRight, Phone, Mail, MapPin, Check, Heart, Cake, Sparkles } from 'lucide-react';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/patisserie-montauban`;

export const metadata: Metadata = {
  title: "Pâtisserie à Montauban : Wedding Cake, Anniversaire, Entremets et Tartes",
  description:
    "Pâtisserie artisanale à Montauban (82) : wedding cakes, gâteaux d'anniversaire, entremets, tartes et mignardises sur commande. Aurore, pâtissière CAP, livre Montauban et tout le Tarn-et-Garonne. Devis sous 24h.",
  keywords: [
    'pâtisserie Montauban',
    'pâtissier Montauban',
    'pâtissière Montauban',
    'gâteau Montauban',
    'pâtisserie 82',
    'gâteau sur mesure Montauban',
    'pâtisserie artisanale Montauban',
    'dessert Montauban',
    'entremets Montauban',
    'tarte Montauban',
    'pâtisserie sur commande Montauban',
    'commander gâteau Montauban',
    'pâtisserie Tarn-et-Garonne',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pâtisserie Artisanale à Montauban : Odyssée Sucrée",
    description:
      "La pâtisserie artisanale d'Aurore à Montauban : wedding cakes, gâteaux d'anniversaire, entremets et créations sur mesure pour tous vos événements.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/wedding-cake-mariage-elegant-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Pâtisserie artisanale Odyssée Sucrée à Montauban',
      },
    ],
  },
};

const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: 'Pâtisserie artisanale à Montauban',
  serviceType: 'Pâtisserie sur mesure et créations sucrées',
  provider: {
    '@type': 'Bakery',
    '@id': `${SITE_URL}/#bakery`,
    name: 'Odyssée Sucrée',
  },
  areaServed: [
    { '@type': 'City', name: 'Montauban' },
    { '@type': 'AdministrativeArea', name: 'Tarn-et-Garonne' },
  ],
  description:
    "Pâtisserie artisanale à Montauban : wedding cakes, gâteaux d'anniversaire, entremets, tartes et mignardises sur commande. Aurore, CAP Pâtissier, formée en wedding cake design, livre dans tout le Tarn-et-Garonne.",
  url: PAGE_URL,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Pâtisserie à Montauban', item: PAGE_URL },
  ],
};

const faqs: FAQItem[] = [
  {
    question: "Où se trouve l'atelier de la pâtisserie Odyssée Sucrée ?",
    answer:
      "L'atelier d'Aurore est situé au 101 Route de l'Honor de Cos, 82220 Puycornet, à 25 minutes de Montauban. Toutes les créations sont préparées sur place dans un laboratoire artisanal. Les commandes se passent par téléphone, mail ou via le formulaire du site, et la livraison à Montauban est assurée par Aurore elle-même.",
  },
  {
    question: "Quel type de pâtisserie réalisez-vous à Montauban ?",
    answer:
      "Toutes les pâtisseries événementielles et de commande : wedding cakes, pièces montées, gâteaux d'anniversaire (layer cake, number cake, letter cake, piñata cake), entremets sur mesure, tartes artisanales, mignardises de mariage, bûches de Noël, cadeaux gourmands. Tout est sur commande, rien n'est vendu en libre-service.",
  },
  {
    question: "Faut-il commander à l'avance ?",
    answer:
      "Oui. Pour un gâteau d'anniversaire personnalisé : 7 à 10 jours minimum. Pour un wedding cake : 3 à 6 mois. Pour un entremets ou une tarte sans décoration complexe : 48 à 72h peuvent suffire. Plus la commande est demandée à l'avance, plus le créneau et le travail sur le projet sont confortables.",
  },
  {
    question: "Livrez-vous à Montauban et dans les quartiers ?",
    answer:
      "Oui, Aurore livre dans toute la ville de Montauban : centre-ville, Villebourbon, Sapiac, Albasud, Beauséjour, ainsi que les communes limitrophes (Albefeuille-Lagarde, Lamothe-Capdeville, Bressols, Montbeton, Lacourt-Saint-Pierre). Le transport est inclus dans le devis pour les pièces sensibles comme les wedding cakes.",
  },
  {
    question: "Pourquoi choisir une pâtisserie artisanale plutôt qu'une grande surface ?",
    answer:
      "Une pâtisserie artisanale comme Odyssée Sucrée garantit un travail sur mesure, des produits frais et de qualité, des associations de saveurs personnalisées, un échange direct avec la pâtissière qui réalise votre commande. La grande différence : votre gâteau est unique et conçu spécifiquement pour votre événement.",
  },
  {
    question: "Quelle est la formation et l'expérience d'Aurore ?",
    answer:
      "Aurore est titulaire du CAP Pâtissier. Ancienne professeure des écoles reconvertie par passion, elle a perfectionné son savoir-faire chez Mauranes et Alexandres, deux pâtisseries reconnues de Montauban, avant de suivre une formation prestigieuse en wedding cake design. Elle a ouvert son atelier Odyssée Sucrée en 2023 et travaille en direct avec ses clients sans intermédiaire.",
  },
  {
    question: "Proposez-vous des pâtisseries adaptées aux allergies ?",
    answer:
      "Oui, sur demande : sans gluten, sans lactose, vegan. Pour les grandes pièces (wedding cake, gâteau de mariage), il est parfois plus simple de prévoir un gâteau principal classique et un gâteau individuel adapté pour la ou les personnes concernées. Les allergies sont à signaler dès le premier échange pour les intégrer au projet.",
  },
  {
    question: "Comment commander une pâtisserie sur mesure ?",
    answer:
      "Trois étapes simples : 1) Premier échange par téléphone, mail ou via le formulaire pour décrire votre projet (occasion, nombre d'invités, style, parfums). 2) Réception du devis personnalisé sous 24h. 3) Validation avec acompte de 30% pour réserver la date. Une dégustation peut être proposée pour les wedding cakes, à l'atelier de Puycornet.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const categories = [
  {
    icon: Heart,
    title: 'Wedding cakes et gâteaux de mariage',
    text: "Pièces montées traditionnelles, wedding cakes modernes à étages, pyramides de macarons, gâteaux partagés. Toute la palette mariage avec livraison et dressage sur place.",
    href: '/wedding-cake-montauban',
    cta: 'Voir les wedding cakes',
  },
  {
    icon: Cake,
    title: 'Gâteaux d\'anniversaire personnalisés',
    text: "Layer cake, number cake, letter cake, piñata cake. Tous les thèmes pour enfants et adultes : Disney, Pokémon, super-héros, Stranger Things, anniversaires marquants des décennies.",
    href: '/gateau-anniversaire-montauban',
    cta: 'Voir les gâteaux anniversaire',
  },
  {
    icon: Sparkles,
    title: 'Mignardises et buffets sucrés',
    text: "Macarons, sablés personnalisés, mini-tartelettes, candy bar thématique, pyramides de macarons. Idéal en complément ou seul pour vos réceptions.",
    href: '/mignardises-mariage-montauban',
    cta: 'Voir les mignardises',
  },
  {
    icon: Check,
    title: 'Entremets, tartes et créations',
    text: "Entremets 3 chocolats, fraisier, tarte au citron, tiramisu, foret noire, bûches de Noël, baptêmes et communions. La gamme complète sur commande.",
    href: '/#creations',
    cta: 'Voir toutes les créations',
  },
];

export default function PatisserieMontaubanPage() {
  const featured = creations.slice(0, 9);

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="relative pt-20">
        {/* Hero */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/creations/wedding-cake-mariage-elegant-montauban.jpeg"
            alt="Pâtisserie artisanale Odyssée Sucrée à Montauban"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-sm font-semibold uppercase tracking-wider">
              Pâtisserie artisanale à Montauban
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl">
              Pâtisserie à Montauban : Toutes les Créations Sucrées d'Aurore
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 font-light">
              Wedding cakes, gâteaux d'anniversaire, entremets, tartes, mignardises : la pâtisserie
              événementielle artisanale d'Odyssée Sucrée, à Montauban et dans tout le Tarn-et-Garonne.
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

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-8">
              La pâtisserie artisanale qui livre Montauban
            </h2>
            <p className="text-xl leading-relaxed text-[#6B6B6B] mb-6">
              Odyssée Sucrée est la pâtisserie artisanale d'Aurore Afchain, installée à Puycornet, à 25
              minutes du centre-ville de Montauban. Spécialisée dans la pâtisserie événementielle, elle
              conçoit des wedding cakes, des gâteaux d'anniversaire personnalisés, des entremets et des
              mignardises pour tous vos moments importants.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B] mb-6">
              Toutes les créations sont préparées sur commande, à la main, dans le laboratoire de
              l'atelier. Aurore livre elle-même les commandes à Montauban et dans tout le département,
              et installe sur place les pièces qui le nécessitent (wedding cakes, pièces montées).
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B]">
              Pour des prestations spécifiques, consultez nos pages dédiées au{' '}
              <Link href="/wedding-cake-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                wedding cake
              </Link>
              , au{' '}
              <Link href="/gateau-mariage-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                gâteau de mariage
              </Link>
              , au{' '}
              <Link href="/gateau-anniversaire-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                gâteau d'anniversaire
              </Link>{' '}
              ou aux{' '}
              <Link href="/mignardises-mariage-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                mignardises de mariage
              </Link>
              .
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/20 rounded-2xl p-6 text-center border border-[#D8C7E8]/30">
                <MapPin className="w-8 h-8 text-[#9B7AB8] mx-auto mb-3" />
                <p className="font-semibold text-[#2D2D2D]">25 min</p>
                <p className="text-sm text-[#6B6B6B]">de Montauban centre</p>
              </div>
              <div className="bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/20 rounded-2xl p-6 text-center border border-[#D8C7E8]/30">
                <Check className="w-8 h-8 text-[#9B7AB8] mx-auto mb-3" />
                <p className="font-semibold text-[#2D2D2D]">100% artisanal</p>
                <p className="text-sm text-[#6B6B6B]">Tout fait main, sur commande</p>
              </div>
              <div className="bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/20 rounded-2xl p-6 text-center border border-[#D8C7E8]/30">
                <Check className="w-8 h-8 text-[#9B7AB8] mx-auto mb-3" />
                <p className="font-semibold text-[#2D2D2D]">Devis sous 24h</p>
                <p className="text-sm text-[#6B6B6B]">Personnalisé et gratuit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Catégories */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30" id="prestations">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Les 4 grandes familles de notre pâtisserie
              </h2>
              <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
                Chaque catégorie a sa page dédiée avec photos, conseils et formats. Cliquez pour
                approfondir le format qui vous intéresse.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-[#D8C7E8]/30 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center">
                      <c.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#9B7AB8] transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-[#6B6B6B] leading-relaxed mb-4">{c.text}</p>
                      <span className="inline-flex items-center gap-2 text-[#9B7AB8] font-semibold text-sm">
                        {c.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Quelques créations livrées à Montauban
              </h2>
              <p className="text-xl text-[#6B6B6B]">
                Un aperçu du travail d'Aurore : wedding cakes, gâteaux d'anniversaire, entremets et
                tartes réalisés pour des clients de Montauban et du Tarn-et-Garonne.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featured.map((c) => (
                <article
                  key={c.id}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <Image
                    src={c.image}
                    alt={c.alt}
                    title={c.name}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-semibold text-lg mb-1">{c.name}</h3>
                      <p className="text-sm text-white/80">{c.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/#creations"
                className="inline-flex items-center gap-2 text-[#9B7AB8] font-semibold hover:gap-3 transition-all"
              >
                Voir toute la galerie
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir une pâtisserie artisanale */}
        <section className="py-24 bg-gradient-to-b from-[#F3E8FF]/30 to-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-12 text-center">
              Pourquoi choisir Odyssée Sucrée pour votre pâtisserie à Montauban ?
            </h2>
            <ul className="space-y-4">
              {[
                "Une pâtissière unique du début à la fin : c'est Aurore qui conçoit, prépare, livre et installe.",
                "100% sur commande : aucun gâteau industriel, tout est fait main pour votre événement.",
                "Formée en wedding cake design après son CAP Pâtissier et un passage chez Mauranes et Alexandres.",
                "Devis personnalisé sous 24h avec proposition de saveurs et de design selon votre projet.",
                "Livraison à Montauban et dressage sur place pour les pièces sensibles (wedding cake, pièce montée).",
                "Adaptation possible aux allergies : sans gluten, sans lactose, vegan sur demande.",
                "Dégustation à l'atelier disponible pour les mariages, afin de valider les saveurs avant le jour J.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-[#D8C7E8]/20">
                  <Check className="w-6 h-6 text-[#9B7AB8] flex-shrink-0 mt-1" />
                  <span className="text-lg text-[#6B6B6B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <FAQAccordion
          badge="FAQ Pâtisserie Montauban"
          title="Tout savoir sur la pâtisserie Odyssée Sucrée à Montauban"
          intro="Les questions que les clients de Montauban nous posent le plus avant de commander."
          items={faqs}
          id="faq-patisserie"
        />

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/30" id="devis">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Commandez votre pâtisserie sur mesure à Montauban
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-12">
              Décrivez-nous votre projet, vous recevez un devis personnalisé sous 24h.
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

        <RelatedPages
          title="Explorez nos prestations en détail"
          intro="Chaque format a sa page dédiée avec galerie, FAQ et conseils."
          links={[
            {
              href: '/wedding-cake-montauban',
              title: 'Wedding cake Montauban',
              description: "Wedding cakes modernes à étages, fleurs fraîches, naked cake, tendances 2026.",
            },
            {
              href: '/gateau-anniversaire-montauban',
              title: "Gâteau d'anniversaire Montauban",
              description: 'Layer cake, number cake, letter cake, piñata cake pour enfants et adultes.',
            },
            {
              href: '/gateau-mariage-montauban',
              title: 'Gâteau et pièce montée mariage',
              description: 'Pièces montées, wedding cakes, pyramides de macarons : toute la palette.',
            },
          ]}
        />
      </main>

      <Footer />
      <LegalModals />
    </>
  );
}
