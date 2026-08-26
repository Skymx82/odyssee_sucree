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
import { Crown, Church, Cake, Sparkles, ArrowRight, Phone, Mail, Check } from 'lucide-react';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/piece-montee-montauban`;

export const metadata: Metadata = {
  title: "Pièce Montée à Montauban : Croquembouche Mariage, Baptême et Communion",
  description:
    "Pièce montée artisanale à Montauban : croquembouche de choux caramélisés, nougatine personnalisée, versions traditionnelles ou modernes. Mariage, baptême, communion, anniversaire. Livraison Tarn-et-Garonne. Devis sous 24h.",
  keywords: [
    "pièce montée Montauban",
    "pièce montée mariage Montauban",
    "croquembouche Montauban",
    "pièce montée mariage",
    "pièce montée moderne",
    "pièce montée traditionnelle",
    "pièce montée baptême",
    "pièce montée communion",
    "croquembouche mariage",
    "pièce montée choux caramélisés",
    "pièce montée Tarn-et-Garonne",
    "pièce montée Toulouse",
    "prix pièce montée mariage",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pièce Montée et Croquembouche à Montauban",
    description:
      "Choux caramélisés, nougatine personnalisée, fleurs fraîches : des pièces montées artisanales pour mariages, baptêmes et communions dans le Tarn-et-Garonne.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/croquembouche-piece-montee-caramel-fleurs-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Croquembouche pièce montée artisanale réalisée à Montauban par Odyssée Sucrée',
      },
    ],
  },
};

const pieceMonteeIds = [
  'croquembouche-piece-montee-montauban',
  'piece-montee-choux-caramel-fleurs-montauban',
  'piece-montee-bapteme-lapin-montauban',
  'piece-montee-bapteme-2-etages-montauban',
  'gateau-anniversaire-choux-caramelises-montauban',
  'choux-cake-personnalise',
];
const pieceMonteeCreations = pieceMonteeIds
  .map((id) => creations.find((c) => c.id === id))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: 'Pièce montée et croquembouche à Montauban',
  serviceType: 'Pièce montée de choux caramélisés pour mariage, baptême, communion et anniversaire',
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
    "Création artisanale de pièces montées et croquembouches à Montauban : choux garnis et caramélisés le jour J, nougatine personnalisée, décor traditionnel ou moderne, pour mariages, baptêmes, communions et anniversaires. Devis personnalisé sous 24h.",
  url: PAGE_URL,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Mariage', item: `${SITE_URL}/gateau-mariage-montauban` },
    { '@type': 'ListItem', position: 3, name: 'Pièce montée Montauban', item: PAGE_URL },
  ],
};

const pieceMonteeFaqs: FAQItem[] = [
  {
    question: "Quel est le prix d'une pièce montée pour 25, 50 ou 100 personnes ?",
    answer:
      "Le tarif d'une pièce montée dépend du nombre de choux (1 à 2 par personne), du décor en nougatine, des fleurs et du niveau de personnalisation. Pour 25 personnes, comptez une pièce montée de 25 à 50 choux ; pour 100 personnes, de 100 à 200 choux répartis sur plusieurs étages. Chaque projet étant unique, Aurore établit un devis personnalisé gratuit sous 24h après un premier échange.",
  },
  {
    question: "Combien de choux par personne faut-il prévoir ?",
    answer:
      "La règle classique est de 1,5 à 2 choux par personne si la pièce montée est le dessert principal, et 1 chou par personne si elle accompagne d'autres desserts (buffet de mignardises, wedding cake). Aurore vous aide à calibrer la pièce selon le format de votre réception.",
  },
  {
    question: "Quelle est la différence entre pièce montée et croquembouche ?",
    answer:
      "Le croquembouche est la pièce montée traditionnelle française : un cône de choux garnis de crème pâtissière, caramélisés et assemblés au caramel, souvent décoré de nougatine. Par extension, la pièce montée désigne aujourd'hui tout montage vertical : cône de choux classique, montage à étages sur socles, ou versions modernes mêlant choux et macarons.",
  },
  {
    question: "Proposez-vous des pièces montées modernes ?",
    answer:
      "Oui. À côté du croquembouche traditionnel, Aurore réalise des pièces montées contemporaines : montages à étages avec fleurs fraîches, choux au craquelin (plus croustillants et moins sucrés que la version tout caramel), nougatine personnalisée avec prénom ou initiales, décor assorti au thème de la réception, ou pyramide de macarons.",
  },
  {
    question: "Faites-vous des pièces montées pour les baptêmes et communions ?",
    answer:
      "Bien sûr. La pièce montée est le dessert emblématique des baptêmes et communions dans le Tarn-et-Garonne. Aurore personnalise le décor selon l'événement : plaque en nougatine avec le prénom de l'enfant, figurines et fleurs adaptées, format calibré au nombre d'invités.",
  },
  {
    question: "Livrez-vous la pièce montée sur le lieu de réception ?",
    answer:
      "Oui. La pièce montée est montée à l'atelier de Puycornet puis livrée et installée par Aurore sur votre lieu de réception : Montauban, Moissac, Castelsarrasin, Caussade, Lafrançaise et tout le Tarn-et-Garonne, ainsi qu'autour de Toulouse sur demande. Les choux sont garnis et caramélisés le jour J pour une fraîcheur parfaite.",
  },
  {
    question: "Quel délai pour commander une pièce montée ?",
    answer:
      "Pour un mariage, réservez votre date 4 à 8 semaines à l'avance, comme pour un wedding cake. Pour un baptême, une communion ou un anniversaire, un délai de 2 à 3 semaines est en général suffisant, selon la saison. Contactez Aurore par téléphone ou via le formulaire pour vérifier la disponibilité de votre date.",
  },
];

const pieceMonteeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pieceMonteeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const formats = [
  {
    icon: Crown,
    title: 'Croquembouche traditionnel',
    text: "Le grand classique français : cône de choux garnis de crème pâtissière vanille ou chocolat, caramélisés et assemblés au caramel, décoré de nougatine et de fleurs. La pièce montée qui traverse les générations.",
  },
  {
    icon: Sparkles,
    title: 'Pièce montée moderne',
    text: "Choux au craquelin plus légers, montage à étages, fleurs fraîches, nougatine gravée au prénom ou aux initiales : une pièce montée contemporaine, assortie aux couleurs de votre réception.",
  },
  {
    icon: Church,
    title: 'Baptême et communion',
    text: "Pièce montée personnalisée pour célébrer votre enfant : plaque en nougatine avec son prénom, décor doux et poétique (lapin, fleurs pastel), format adapté au nombre d'invités.",
  },
  {
    icon: Cake,
    title: 'Anniversaire en choux',
    text: "L'alternative originale au number cake : vos chiffres dessinés en choux caramélisés, avec message d'anniversaire écrit au chocolat. Effet garanti au moment du dessert.",
  },
];

export default function PieceMonteeMontaubanPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pieceMonteeFaqSchema) }}
      />

      <Header />

      <main className="relative pt-20">
        {/* Hero */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/creations/croquembouche-piece-montee-caramel-fleurs-montauban.jpeg"
            alt="Croquembouche pièce montée de choux caramélisés avec nougatine et fleurs, Montauban"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-sm font-semibold uppercase tracking-wider">
              Croquembouche artisanal
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl">
              Pièce Montée à Montauban
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 font-light">
              Choux garnis et caramélisés le jour J, nougatine personnalisée, décor traditionnel ou moderne :
              la pièce montée artisanale pour vos mariages, baptêmes, communions et anniversaires
              dans le Tarn-et-Garonne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-base font-semibold shadow-2xl">
                <a href="#devis-piece-montee">
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
                <a href="#formats-piece-montee">Voir les formats</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xl leading-relaxed text-[#6B6B6B] mb-6">
              La pièce montée est le dessert de cérémonie par excellence en France. Ce moment où le croquembouche
              arrive en salle, choux dorés au caramel et nougatine étincelante, reste gravé dans les mémoires des
              mariages, baptêmes et communions. C'est aussi l'un des desserts les plus techniques de la pâtisserie
              française : caramel au degré près, montage stable, choux garnis à la minute.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B] mb-6">
              Chez Odyssée Sucrée, chaque pièce montée est fabriquée à la main dans l'atelier de Puycornet, à
              25 minutes de Montauban. Les choux sont pochés, garnis de crème pâtissière et caramélisés le jour
              même de votre événement, jamais la veille : c'est la condition d'un chou croustillant dehors et
              fondant dedans. La nougatine est coulée et gravée sur mesure, avec le prénom, les initiales ou la
              date de votre choix.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B]">
              Vous hésitez entre pièce montée et wedding cake ? Lisez notre comparatif{' '}
              <Link href="/journal/wedding-cake-vs-piece-montee" className="text-[#9B7AB8] hover:underline font-medium">
                wedding cake ou pièce montée
              </Link>
              , ou découvrez toutes les formules sur la page{' '}
              <Link href="/gateau-mariage-montauban" className="text-[#9B7AB8] hover:underline font-medium">
                gâteau de mariage à Montauban
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Formats */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30" id="formats-piece-montee">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                4 styles de pièce montée pour vos événements
              </h2>
              <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
                Du croquembouche traditionnel à la pièce montée moderne, chaque création est dessinée avec vous.
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
        {pieceMonteeCreations.length > 0 && (
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                  Nos pièces montées réalisées en Tarn-et-Garonne
                </h2>
                <p className="text-xl text-[#6B6B6B]">
                  Mariages, baptêmes, communions et anniversaires autour de Montauban.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {pieceMonteeCreations.map((creation) => (
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
              Ce qui est inclus avec votre pièce montée
            </h2>
            <ul className="space-y-4">
              {[
                "Échange personnalisé pour définir style, parfums et nombre de choux",
                "Choux pochés, garnis et caramélisés le jour J (jamais la veille)",
                "Crème pâtissière au choix : vanille, chocolat, café, praliné",
                "Nougatine personnalisée : prénom, initiales, date de l'événement",
                "Décor assorti à votre thème : fleurs fraîches, dragées, sujets",
                "Livraison et installation sur le lieu de réception dans tout le Tarn-et-Garonne",
                "Conseils de découpe et de service transmis au traiteur ou à la famille",
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
          badge="Questions pièce montée"
          title="Les questions sur votre pièce montée"
          intro="Prix, nombre de choux, délais, livraison : tout ce qu'il faut savoir avant de commander."
          items={pieceMonteeFaqs}
          id="faq-piece-montee"
        />

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/30" id="devis-piece-montee">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Commandez votre pièce montée sur mesure
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-12">
              Décrivez votre événement, choisissez votre style, recevez votre devis sous 24h.
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
          title="Explorez les autres formats"
          intro="Wedding cake, gâteau de mariage, mignardises : toutes les options pour votre événement."
          links={[
            {
              href: '/gateau-mariage-montauban',
              title: 'Gâteau de mariage à Montauban',
              description: "Pièce montée, wedding cake, pyramide de macarons, fraisier XXL : toutes les formules mariage.",
            },
            {
              href: '/wedding-cake-montauban',
              title: 'Wedding cake sur mesure',
              description: "L'alternative moderne à la pièce montée : gâteau à étages décoré selon votre thème.",
            },
            {
              href: '/journal/wedding-cake-vs-piece-montee',
              title: 'Wedding cake ou pièce montée ?',
              description: "Le comparatif complet pour choisir le format qui correspond à votre mariage.",
            },
          ]}
        />

        <Footer />
      </main>
      <LegalModals />
    </>
  );
}
