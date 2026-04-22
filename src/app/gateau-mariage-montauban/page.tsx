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
import { Heart, Flower2, Users, ArrowRight, Phone, Mail, Check, Sparkles } from 'lucide-react';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/gateau-mariage-montauban`;

export const metadata: Metadata = {
  title: "Gâteau de Mariage Montauban : Pièce Montée, Wedding Cake et Pyramide de Macarons",
  description:
    "Gâteau de mariage à Montauban : pièces montées traditionnelles, wedding cakes modernes, pyramides de macarons, gâteaux partagés. Aurore, pâtissière CAP, livre dans tout le Tarn-et-Garonne. Devis gratuit sous 24h.",
  keywords: [
    "gâteau mariage Montauban",
    "pièce montée Montauban",
    "pièce montée mariage Tarn-et-Garonne",
    "gâteau mariage Moissac",
    "gâteau mariage Castelsarrasin",
    "pièce montée choux Montauban",
    "pyramide macarons mariage",
    "gâteau mariage 82",
    "pâtissier mariage Tarn-et-Garonne",
    "gâteau mariage sur mesure",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Gâteau de Mariage à Montauban : Pièce Montée et Wedding Cake",
    description:
      "Pièces montées traditionnelles, wedding cakes modernes, pyramides de macarons : tous les gâteaux de mariage Odyssée Sucrée à Montauban.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/wedding-cake-mariage-3-etages-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Gâteau de mariage à étages Montauban Odyssée Sucrée',
      },
    ],
  },
};

const weddingCreations = creations.filter((c) => c.category === 'wedding');

const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: 'Gâteau de mariage sur mesure à Montauban',
  serviceType: 'Création de pièces montées et gâteaux de mariage',
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
    { '@type': 'AdministrativeArea', name: 'Tarn-et-Garonne' },
  ],
  description:
    "Création artisanale de gâteaux de mariage sur mesure à Montauban : pièces montées traditionnelles, wedding cakes modernes, pyramides de macarons et gâteaux partagés. Devis personnalisé sur demande.",
  url: PAGE_URL,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Mariage', item: PAGE_URL },
    { '@type': 'ListItem', position: 3, name: 'Gâteau de mariage Montauban', item: PAGE_URL },
  ],
};

const mariageFaqs: FAQItem[] = [
  {
    question: "Quelle est la différence entre gâteau de mariage, wedding cake et pièce montée ?",
    answer:
      "Le « gâteau de mariage » est le terme générique : c'est le dessert central du repas des mariés. La pièce montée est la version française traditionnelle, en choux caramélisés empilés en pyramide (nougatine, croquembouche). Le wedding cake est la version anglo-saxonne moderne, à étages recouverts de crème ou pâte à sucre. Odyssée Sucrée réalise les deux, plus des alternatives contemporaines comme la pyramide de macarons ou le gâteau partagé.",
  },
  {
    question: "Quel gâteau de mariage choisir selon le nombre d'invités ?",
    answer:
      "Jusqu'à 40 invités : un wedding cake à 2 étages ou une pièce montée individuelle. De 40 à 100 invités : wedding cake à 3 étages ou pièce montée traditionnelle à étages. De 100 à 200 invités : wedding cake à 4-5 étages, souvent combiné avec des mignardises ou un buffet sucré pour compléter les parts. Aurore adapte la proposition au nombre d'invités lors du devis.",
  },
  {
    question: "Peut-on combiner plusieurs styles dans le même mariage ?",
    answer:
      "Oui, c'est même une tendance forte à Montauban. On peut avoir un wedding cake comme pièce maîtresse pour la photo et le partage, complété par une pyramide de macarons pour satisfaire les grands-parents attachés à la tradition, et un buffet de mignardises pour le reste du repas. C'est la formule la plus appréciée pour les grandes réceptions.",
  },
  {
    question: "Proposez-vous des gâteaux de mariage sans gluten ou adaptés aux allergies ?",
    answer:
      "Oui, sur demande. Un gâteau entièrement sans gluten ou sans lactose est possible pour les petits et moyens mariages. Pour les grandes pièces montées, nous proposons souvent une version principale classique et un gâteau individuel adapté pour la ou les personnes concernées. Les allergies à signaler au premier échange pour que nous les intégrions au projet.",
  },
  {
    question: "À quelle distance de Montauban livrez-vous un gâteau de mariage ?",
    answer:
      "Zone de livraison principale : tout le Tarn-et-Garonne (Montauban, Moissac, Castelsarrasin, Caussade, Lafrançaise, Beaumont-de-Lomagne, Nègrepelisse, Valence d'Agen, Lauzerte). Sur demande, nous nous déplaçons également sur Toulouse et l'ouest du Tarn. Le transport d'une pièce montée ou d'un wedding cake à étages est délicat : Aurore livre et monte personnellement le gâteau sur votre lieu de réception.",
  },
  {
    question: "Comment se passe la dégustation avant le mariage ?",
    answer:
      "Une fois le projet validé et l'acompte versé, une dégustation peut être organisée à l'atelier de Puycornet sur rendez-vous. Vous goûtez 3 à 4 associations de parfums pour choisir ceux qui iront dans votre gâteau de mariage final. C'est aussi l'occasion de voir des échantillons de décors et de finaliser le design avec Aurore.",
  },
  {
    question: "Comment est calculé le prix d'un gâteau de mariage ?",
    answer:
      "Chaque gâteau de mariage est unique : le tarif dépend du type (pièce montée, wedding cake, pyramide de macarons), du nombre de parts, du travail de décoration, des parfums et du lieu de livraison. Il n'y a pas de tarif affiché sur le site. Vous recevez un devis personnalisé sous 24h après le premier échange.",
  },
];

const mariageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: mariageFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const cakeStyles = [
  {
    icon: Sparkles,
    title: 'Wedding cake moderne à étages',
    text: "La tendance anglo-saxonne qui domine les mariages chic à Montauban : gâteau à plusieurs étages recouvert de crème au beurre, ganache ou pâte à sucre, décoré de fleurs fraîches ou en sucre. Effet wow garanti.",
    link: '/wedding-cake-montauban',
    linkLabel: 'Voir notre page wedding cake',
  },
  {
    icon: Heart,
    title: 'Pièce montée traditionnelle',
    text: "Les fameux choux caramélisés à la nougatine, empilés en pyramide et décorés de dragées ou de filaments de caramel. La pièce montée française reste un classique intergénérationnel pour les mariages en Tarn-et-Garonne.",
  },
  {
    icon: Flower2,
    title: 'Pyramide de macarons',
    text: "Alternative raffinée et photogénique : macarons de couleurs assorties au thème du mariage, dressés en pyramide. Chaque invité repart avec un ou deux macarons — format idéal pour les mariages en extérieur l'été.",
  },
  {
    icon: Users,
    title: 'Gâteau partagé ou naked cake',
    text: "Pour les mariages intimes : un grand gâteau à partager, naked cake rustique ou entremets XXL, servi en parts généreuses à table. Plus familial, plus convivial, parfait pour les réceptions de moins de 50 invités.",
  },
];

export default function GateauMariageMontaubanPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mariageFaqSchema) }}
      />

      <Header />

      <main className="relative pt-20">
        {/* Hero */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/creations/wedding-cake-mariage-3-etages-montauban.jpeg"
            alt="Gâteau de mariage à étages à Montauban, pâtisserie Odyssée Sucrée"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-sm font-semibold uppercase tracking-wider">
              Pâtisserie de mariage à Montauban
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl">
              Gâteau de Mariage sur Mesure à Montauban
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 font-light">
              Pièces montées traditionnelles, wedding cakes modernes, pyramides de macarons, gâteaux partagés :
              tous les styles de gâteaux de mariage par Aurore, dans tout le Tarn-et-Garonne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-base font-semibold shadow-2xl">
                <a href="#devis-mariage">
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
                <a href="#styles">Voir les styles de gâteaux</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xl leading-relaxed text-[#6B6B6B] mb-6">
              Le gâteau de mariage est bien plus qu'un dessert : c'est le point d'orgue symbolique du repas, la
              photo que tout le monde attend, le moment de partage entre les mariés et leurs invités. À Montauban
              et dans tout le Tarn-et-Garonne, Odyssée Sucrée conçoit des gâteaux de mariage qui allient beauté
              visuelle et saveurs artisanales.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B] mb-6">
              Aurore, pâtissière CAP formée en wedding cake design, propose toute la palette possible : de la
              pièce montée traditionnelle aux choux caramélisés pour respecter la tradition française, jusqu'au
              wedding cake moderne à 5 étages inspiré des mariages anglo-saxons, en passant par les alternatives
              élégantes comme la pyramide de macarons ou le gâteau partagé pour les réceptions plus intimes.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B]">
              Cette page vous aide à choisir le style qui correspond à votre mariage selon votre budget, votre
              nombre d'invités, votre thème et vos envies. Si vous cherchez spécifiquement un{' '}
              <Link href="/wedding-cake-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                wedding cake moderne à étages
              </Link>
              , consultez notre page dédiée. Pour un buffet de desserts complet, voyez nos{' '}
              <Link href="/mignardises-mariage-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                mignardises et buffet de mariage
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Les styles */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30" id="styles">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Quel style de gâteau de mariage choisir à Montauban ?
              </h2>
              <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
                4 grandes familles de gâteaux de mariage proposées par Aurore, à combiner ou à choisir seules.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {cakeStyles.map((style, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-[#D8C7E8]/30">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center">
                      <style.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{style.title}</h3>
                      <p className="text-[#6B6B6B] leading-relaxed mb-4">{style.text}</p>
                      {style.link && (
                        <Link
                          href={style.link}
                          className="inline-flex items-center gap-2 text-[#9B7AB8] font-semibold hover:gap-3 transition-all text-sm"
                        >
                          {style.linkLabel}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Nos créations de mariage
              </h2>
              <p className="text-xl text-[#6B6B6B]">
                Inspirations de gâteaux de mariage réalisés par Odyssée Sucrée pour des mariés du Tarn-et-Garonne.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {weddingCreations.slice(0, 9).map((creation) => (
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

        {/* Comment choisir */}
        <section className="py-24 bg-gradient-to-b from-[#F3E8FF]/30 to-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-12 text-center">
              Comment choisir le gâteau de mariage parfait pour votre réception
            </h2>
            <ul className="space-y-4">
              {[
                "Définissez d'abord le nombre d'invités : 40, 80, 150 personnes ? Le choix s'adapte.",
                "Réfléchissez au style du mariage : champêtre, élégant, bohème, traditionnel, moderne.",
                "Tenez compte des générations présentes : la pièce montée rassure les aînés, le wedding cake séduit les jeunes.",
                "Définissez le lieu : outdoor l'été ? Préférer la pyramide de macarons ou le wedding cake sur socle résistant.",
                "Pensez à la dégustation : les parfums doivent plaire à un maximum d'invités, pas seulement aux mariés.",
                "Fixez le moment du partage : dessert principal ou gâteau après-repas ? Cela change le format recommandé.",
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
          badge="Questions mariage"
          title="Tout savoir sur votre gâteau de mariage à Montauban"
          intro="Les questions que les couples nous posent le plus avant de commander."
          items={mariageFaqs}
          id="faq-mariage"
        />

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/30" id="devis-mariage">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Préparez votre gâteau de mariage avec Odyssée Sucrée
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-12">
              Décrivez-nous votre projet, nous vous envoyons un devis personnalisé sous 24h.
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

        {/* Maillage interne */}
        <RelatedPages
          title="Préparez votre mariage de A à Z"
          intro="Les autres prestations et guides Odyssée Sucrée pour vous accompagner."
          links={[
            {
              href: '/wedding-cake-montauban',
              title: 'Wedding cake sur mesure',
              description: "Le guide complet pour tout savoir sur le wedding cake moderne à étages : styles, étages, parfums, fleurs.",
            },
            {
              href: '/mignardises-mariage-montauban',
              title: 'Mignardises et buffet de mariage',
              description: "Complétez le gâteau principal avec un buffet de mignardises : macarons, sablés personnalisés, mini-tartelettes.",
            },
            {
              href: '/journal/wedding-cake-vs-piece-montee',
              title: 'Wedding cake ou pièce montée ?',
              description: "Notre comparatif détaillé pour vous aider à trancher entre les deux grands classiques du gâteau de mariage.",
            },
          ]}
        />

        <Footer />
      </main>
      <LegalModals />
    </>
  );
}
