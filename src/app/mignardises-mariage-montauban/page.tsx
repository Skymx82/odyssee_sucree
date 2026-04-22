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
import { Sparkles, Cookie, Candy, ArrowRight, Phone, Mail, Check, Gift } from 'lucide-react';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/mignardises-mariage-montauban`;

export const metadata: Metadata = {
  title: "Mignardises et Buffet de Mariage Montauban : Candy Bar, Macarons, Sablés Personnalisés",
  description:
    "Mignardises et buffet sucré de mariage à Montauban : macarons, cannelés, sablés aux initiales, tartelettes, éclairs, candy bar. Aurore, pâtissière artisanale, compose votre buffet sur mesure. Devis gratuit sous 24h.",
  keywords: [
    "mignardises mariage Montauban",
    "buffet sucré mariage Montauban",
    "candy bar mariage Montauban",
    "macarons mariage Tarn-et-Garonne",
    "sablés personnalisés mariage",
    "petits fours mariage Montauban",
    "buffet dessert mariage 82",
    "tartelettes mariage Montauban",
    "wedding sweet table Montauban",
    "cadeaux invités mariage gourmands",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Mignardises et Buffet de Mariage à Montauban",
    description:
      "Composez le buffet sucré de vos rêves : macarons, sablés personnalisés, tartelettes, candy bar. Pâtisserie artisanale Odyssée Sucrée.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/mignardises-buffet-mariage-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Buffet de mignardises de mariage Montauban Odyssée Sucrée',
      },
    ],
  },
};

const mignardisesCreations = creations.filter((c) => c.category === 'mignardises');

const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: 'Mignardises et buffet sucré de mariage à Montauban',
  serviceType: 'Buffet de mignardises, candy bar et sablés personnalisés',
  provider: {
    '@type': 'Bakery',
    '@id': `${SITE_URL}/#bakery`,
    name: 'Odyssée Sucrée',
  },
  areaServed: [
    { '@type': 'City', name: 'Montauban' },
    { '@type': 'City', name: 'Moissac' },
    { '@type': 'City', name: 'Castelsarrasin' },
    { '@type': 'AdministrativeArea', name: 'Tarn-et-Garonne' },
  ],
  description:
    "Création sur mesure de buffets de mignardises pour mariage à Montauban : macarons, cannelés, sablés aux initiales, tartelettes, éclairs, candy bar coordonné au thème du mariage. Devis personnalisé sur demande.",
  url: PAGE_URL,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Mariage', item: PAGE_URL },
    { '@type': 'ListItem', position: 3, name: 'Mignardises mariage Montauban', item: PAGE_URL },
  ],
};

const mignardisesFaqs: FAQItem[] = [
  {
    question: "Combien de mignardises par invité prévoir pour un mariage ?",
    answer:
      "La règle classique est de prévoir 3 à 5 pièces de mignardises par personne pour un buffet sucré d'accompagnement du wedding cake, et 6 à 8 pièces si le buffet remplace le dessert principal. Pour un cocktail dinatoire, on monte à 8-10 pièces par invité. Aurore vous aide à calculer précisément selon le format du mariage et les autres desserts prévus.",
  },
  {
    question: "Quelles mignardises proposez-vous pour un mariage ?",
    answer:
      "Macarons (parfums au choix, colorés selon le thème), cannelés, mini éclairs, tartelettes citron meringuée, tartelettes aux fruits rouges, sablés diamant, petites religieuses, mini fraisiers, verrines, chocolats maison. Les mignardises sont composées à la carte selon vos goûts et le style du mariage.",
  },
  {
    question: "Peut-on avoir des sablés personnalisés avec les initiales des mariés ?",
    answer:
      "Oui, c'est l'un de nos formats les plus demandés pour les mariages à Montauban. Sablés en forme de cœur, de lettre ou en rondelles, décorés à la glace royale avec les initiales des mariés, la date du mariage ou un petit message. Parfaits comme cadeaux invités, à offrir en fin de repas ou à disposer sur les tables.",
  },
  {
    question: "Comment organiser un candy bar pour un mariage ?",
    answer:
      "Le candy bar est un buffet sucré thématique en libre service. Nous concevons la table complète : mignardises, sablés, macarons, présentation sur plateaux en cloches, étagères, cadres photo, avec les couleurs de votre mariage. Le matériel (cloches, supports, étiquettes) peut être inclus sur demande. Option sweet table rustique, chic ou bohème.",
  },
  {
    question: "Livrez-vous les mignardises sur le lieu de réception ?",
    answer:
      "Oui, la livraison est incluse pour les commandes supérieures à 50 pièces, dans tout le Tarn-et-Garonne (Montauban, Moissac, Castelsarrasin, Caussade, Lafrançaise). Aurore livre et met en place le buffet sur le lieu de réception avant l'arrivée des invités. Pour les petites quantités, vous pouvez venir récupérer les mignardises à l'atelier de Puycornet.",
  },
  {
    question: "Peut-on commander uniquement des mignardises, sans wedding cake ?",
    answer:
      "Oui, absolument. Beaucoup de mariages choisissent uniquement un buffet de mignardises sans pièce montée : format plus convivial, plus léger, idéal pour les mariages en extérieur ou les cocktails dinatoires. Nous composons un buffet qui fait office de dessert complet.",
  },
  {
    question: "Comment est calculé le prix d'un buffet de mignardises ?",
    answer:
      "Le tarif dépend du type de mignardises choisies, des quantités et du niveau de personnalisation (sablés aux initiales, sweet table avec matériel). Il n'y a pas de tarif public sur le site. Chaque buffet est chiffré sur mesure après un premier échange. Vous recevez le devis sous 24h.",
  },
];

const mignardisesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: mignardisesFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const formats = [
  {
    icon: Sparkles,
    title: 'Buffet de mignardises',
    text: "Assortiment de macarons, cannelés, mini éclairs, tartelettes et sablés, disposé sur plateaux. Format libre-service élégant qui accompagne parfaitement le wedding cake.",
  },
  {
    icon: Cookie,
    title: 'Sablés personnalisés',
    text: "Sablés en forme de cœur, lettre ou initiale, décorés à la glace royale aux couleurs du mariage. Parfaits comme cadeaux invités ou décoration de table.",
  },
  {
    icon: Candy,
    title: 'Candy bar thématique',
    text: "Sweet table complète : mignardises, sablés, pyramide de macarons, supports de présentation (cloches, étagères, étiquettes), harmonisée avec le thème et les couleurs du mariage.",
  },
  {
    icon: Gift,
    title: 'Pyramide de macarons',
    text: "Alternative élégante ou complément au wedding cake : des macarons colorés selon votre palette, dressés en pyramide, à partager en fin de repas.",
  },
];

export default function MignardisesMariageMontaubanPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mignardisesFaqSchema) }}
      />

      <Header />

      <main className="relative pt-20">
        {/* Hero */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src={mignardisesCreations[0]?.image || '/creations/wedding-cake-mariage-elegant-montauban.jpeg'}
            alt="Buffet de mignardises et candy bar de mariage à Montauban, Odyssée Sucrée"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-sm font-semibold uppercase tracking-wider">
              Buffet sucré et candy bar
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl">
              Mignardises et Buffet de Mariage à Montauban
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 font-light">
              Macarons, sablés personnalisés aux initiales, tartelettes, cannelés, candy bar : composez le buffet
              sucré de vos rêves, en complément de votre wedding cake ou seul, partout en Tarn-et-Garonne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-base font-semibold shadow-2xl">
                <a href="#devis-mignardises">
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
                <a href="#formats">Voir les formats de buffet</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xl leading-relaxed text-[#6B6B6B] mb-6">
              Un wedding cake, c'est le moment de la photo. Un buffet de mignardises, c'est tout le reste de la
              soirée : la gourmandise discrète qui circule pendant le cocktail, les sablés aux initiales que les
              invités gardent en souvenir, le candy bar où les enfants (et les adultes) reviennent trois fois. Les
              mignardises sont aujourd'hui un incontournable des mariages modernes en Tarn-et-Garonne.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B] mb-6">
              Chez Odyssée Sucrée, Aurore compose chaque buffet sur mesure, en parfaite cohérence visuelle et
              gustative avec le wedding cake (si vous en commandez un). Chaque pièce est réalisée à la main dans
              l'atelier de Puycornet, à partir de produits frais, sans industriel. Les sablés personnalisés sont
              décorés un par un à la glace royale, les macarons coqués à la main, les tartelettes garnies le matin
              du mariage.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B]">
              Vous pouvez commander les mignardises seules, ou en complément de votre{' '}
              <Link href="/wedding-cake-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                wedding cake
              </Link>
              {' '}ou{' '}
              <Link href="/gateau-mariage-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                gâteau de mariage traditionnel
              </Link>
              {' '}pour un buffet sucré complet.
            </p>
          </div>
        </section>

        {/* Formats */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30" id="formats">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                4 formats de mignardises pour votre mariage à Montauban
              </h2>
              <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
                À choisir seul ou à combiner, selon le style de votre mariage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {formats.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-[#D8C7E8]/30">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center">
                      <f.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{f.title}</h3>
                      <p className="text-[#6B6B6B] leading-relaxed">{f.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        {mignardisesCreations.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                  Nos mignardises et créations de buffet
                </h2>
                <p className="text-xl text-[#6B6B6B]">
                  Inspirations réalisées pour des mariages en Tarn-et-Garonne.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {mignardisesCreations.map((creation) => (
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
        )}

        {/* Ce qui est inclus */}
        <section className="py-24 bg-gradient-to-b from-[#F3E8FF]/30 to-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-12 text-center">
              Ce qui est inclus dans votre buffet de mignardises
            </h2>
            <ul className="space-y-4">
              {[
                "Échange personnalisé pour comprendre le thème et les couleurs de votre mariage",
                'Composition à la carte : vous choisissez parfums, formes et quantités',
                "Sablés personnalisés aux initiales ou à la date du mariage (option)",
                "Candy bar complet avec matériel de présentation sur demande",
                "Fabrication artisanale à l'atelier avec produits frais",
                "Livraison et mise en place sur votre lieu de réception dans le Tarn-et-Garonne",
                "Étiquetage allergènes pour tous les formats",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#9B7AB8] flex-shrink-0 mt-1" />
                  <span className="text-lg text-[#6B6B6B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <FAQAccordion
          badge="Questions mignardises"
          title="Les questions sur votre buffet de mariage"
          intro="Quantités, formats, livraison, personnalisation : les réponses avant de composer votre buffet."
          items={mignardisesFaqs}
          id="faq-mignardises"
        />

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/30" id="devis-mignardises">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Composez votre buffet de mignardises sur mesure
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-12">
              Décrivez votre mariage, choisissez vos formats, recevez votre devis sous 24h.
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

        {/* Maillage interne */}
        <RelatedPages
          title="Complétez votre mariage"
          intro="Les autres prestations pour un mariage parfait en Tarn-et-Garonne."
          links={[
            {
              href: '/wedding-cake-montauban',
              title: 'Wedding cake sur mesure',
              description: "La pièce maîtresse du repas : wedding cake à étages avec fleurs fraîches, le guide complet.",
            },
            {
              href: '/gateau-mariage-montauban',
              title: 'Gâteau de mariage traditionnel',
              description: "Pièce montée aux choux, pyramide de macarons, gâteau partagé : toutes les alternatives au wedding cake.",
            },
            {
              href: '/journal/choisir-wedding-cake-2026',
              title: 'Guide : choisir son wedding cake en 2026',
              description: "Les tendances, les styles et les conseils pratiques pour choisir le gâteau de mariage parfait.",
            },
          ]}
        />

        <Footer />
      </main>
      <LegalModals />
    </>
  );
}
