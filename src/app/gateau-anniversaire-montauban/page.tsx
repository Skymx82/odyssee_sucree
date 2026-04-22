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
import { Cake, Gift, Smile, ArrowRight, Phone, Mail, Check } from 'lucide-react';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/gateau-anniversaire-montauban`;

export const metadata: Metadata = {
  title: "Gâteau d'Anniversaire Personnalisé Montauban : Layer Cake, Number Cake, Letter Cake",
  description:
    "Gâteau d'anniversaire sur mesure à Montauban : layer cakes, number cakes, letter cakes, piñata cakes et créations à thème pour enfants et adultes. Cake design artisanal par Aurore. Devis sous 24h.",
  keywords: [
    "gâteau anniversaire Montauban",
    "layer cake Montauban",
    "number cake Montauban",
    "letter cake Montauban",
    "piñata cake Montauban",
    "gâteau anniversaire enfant Montauban",
    "cake designer anniversaire 82",
    "gâteau anniversaire personnalisé Tarn-et-Garonne",
    "gâteau anniversaire 18 ans Montauban",
    "gâteau anniversaire 30 ans Montauban",
    "gâteau anniversaire 40 ans Montauban",
    "gâteau anniversaire 50 ans Montauban",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Gâteau d'Anniversaire Personnalisé à Montauban",
    description:
      "Layer cakes, number cakes, letter cakes et piñata cakes sur mesure par Aurore, pâtissière artisanale à Puycornet près de Montauban.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/layer-cake-anniversaire-personnalise-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: "Gâteau d'anniversaire layer cake personnalisé Odyssée Sucrée Montauban",
      },
    ],
  },
};

const birthdayCreations = creations.filter((c) => c.category === 'birthday');

const servicePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}/#service`,
  name: "Gâteau d'anniversaire sur mesure à Montauban",
  serviceType: "Création de gâteaux d'anniversaire personnalisés",
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
    "Création artisanale de gâteaux d'anniversaire personnalisés à Montauban : layer cakes, number cakes, letter cakes, piñata cakes et gâteaux à thème pour enfants et adultes. Devis personnalisé sur demande.",
  url: PAGE_URL,
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Anniversaire', item: PAGE_URL },
    { '@type': 'ListItem', position: 3, name: "Gâteau d'anniversaire Montauban", item: PAGE_URL },
  ],
};

const cakeTypes = [
  {
    anchor: 'layer-cake',
    name: 'Layer cake personnalisé',
    description:
      "Le layer cake est un gâteau à étages garni de crème, idéal pour les anniversaires gourmands. Aurore le décline en versions thématiques (Disney, Avatar, Halloween, panier de fleurs) pour les enfants comme pour les adultes.",
    image: '/creations/layer-cake-anniversaire-personnalise-montauban.jpeg',
    alt: "Layer cake d'anniversaire personnalisé à Montauban",
  },
  {
    anchor: 'number-cake',
    name: 'Number cake',
    description:
      "Le number cake reproduit le chiffre de votre âge (17, 18, 20, 30, 40, 50 ans) en biscuit sablé, garni de crème mascarpone et fruits frais. Élégant, léger et photogénique.",
    image: '/creations/number-cake-30-ans-anniversaire-montauban.jpeg',
    alt: 'Number cake 30 ans pour anniversaire à Montauban',
  },
  {
    anchor: 'letter-cake',
    name: 'Letter cake',
    description:
      "Le letter cake forme une lettre ou un mot (initiale, prénom). Parfait pour un anniversaire ou un baptême, il combine sablé, crème vanille et fruits frais de saison.",
    image: '/creations/letter-cake-fruits-rouges-anniversaire-montauban.jpeg',
    alt: 'Letter cake fruits rouges anniversaire Montauban',
  },
  {
    anchor: 'pinata-cake',
    name: 'Piñata cake surprise',
    description:
      "Le piñata cake cache un cœur rempli de bonbons qui se déverse à la première coupe. L'effet wow garanti pour un anniversaire d'enfant à Montauban.",
    image: '/creations/pinata-cake-surprise-anniversaire-enfant-montauban.jpeg',
    alt: "Piñata cake surprise anniversaire enfant Montauban",
  },
];

const anniversaireFaqs: FAQItem[] = [
  {
    question: "Quel type de gâteau d'anniversaire choisir ?",
    answer:
      "Tout dépend de l'occasion, de l'âge et du nombre d'invités. Pour un anniversaire d'enfant, le layer cake thématique ou le piñata cake surprise sont les favoris : ils font le spectacle. Pour un anniversaire adulte chiffré (18, 30, 40, 50 ans), le number cake est le plus élégant et photogénique. Pour un baptême ou un prénom mis à l'honneur, le letter cake est parfait. En cas de doute, Aurore vous conseille selon votre projet au premier échange.",
  },
  {
    question: "Combien de temps à l'avance faut-il commander ?",
    answer:
      "Un délai minimum de 7 à 10 jours est recommandé pour un gâteau d'anniversaire sur mesure. Pour les périodes chargées (fêtes, week-ends d'été, mois de juin), il vaut mieux anticiper 2 à 3 semaines pour être sûr d'avoir la date. Pour une commande dernière minute (moins de 5 jours), nous contacter directement par téléphone pour vérifier les disponibilités.",
  },
  {
    question: "Combien de parts peut faire un gâteau d'anniversaire ?",
    answer:
      "Nos gâteaux s'adaptent à vos besoins : de 6 parts (anniversaire intime) à 50 parts et plus (grande fête). Un layer cake standard fait 12-16 parts. Pour 30 personnes ou plus, on passe à un format XXL ou on combine plusieurs gâteaux. Aurore vous guide au devis selon le nombre d'invités que vous prévoyez.",
  },
  {
    question: "Peut-on choisir le parfum et les allergies ?",
    answer:
      "Oui. Vanille, chocolat, fraise, framboise, caramel, citron, noisette, pistache, passion, coco : les parfums sont au choix. Nous adaptons les recettes aux allergies courantes (œufs, gluten, lait) sur demande, à préciser à la commande. Pour les gâteaux enfants, nous privilégions des recettes peu sucrées et des colorants naturels.",
  },
  {
    question: "Y a-t-il une livraison à Montauban ?",
    answer:
      "La récupération se fait en priorité à l'atelier de Puycornet (25 minutes de Montauban, route de l'Honor de Cos). Une livraison à Montauban et dans un rayon de 30 km est possible sur demande contre supplément. Pour les wedding cakes et gros événements, la livraison est systématiquement incluse dans le devis.",
  },
  {
    question: "Comment fonctionnent les gâteaux à thème (Disney, Halloween, etc.) ?",
    answer:
      "Envoyez-nous une photo d'inspiration, un thème ou un personnage favori de votre enfant. Aurore s'adapte : Stitch, Avatar, licornes, dinosaures, super-héros, panier de fleurs, Halloween, Noël, football, princesse. Chaque décor est reproduit à la main en pâte à sucre ou crème au beurre, jamais en impression industrielle.",
  },
  {
    question: "Comment est calculé le prix d'un gâteau d'anniversaire ?",
    answer:
      "Chaque création est unique : le tarif dépend du type de gâteau (layer, number, letter, piñata), du nombre de parts, du niveau de décoration et du thème choisi. Il n'y a pas de tarif affiché sur le site. Chaque devis est personnalisé sur demande après un premier échange : vous recevez votre proposition chiffrée sous 24h.",
  },
];

const anniversaireFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: anniversaireFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function GateauAnniversaireMontaubanPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(anniversaireFaqSchema) }}
      />

      <Header />

      <main className="relative pt-20">
        {/* Hero */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <Image
            src="/creations/layer-cake-anniversaire-personnalise-montauban.jpeg"
            alt="Gâteau d'anniversaire layer cake personnalisé à Montauban, création Odyssée Sucrée"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <Badge variant="secondary" className="mb-6 px-8 py-3 text-sm font-semibold uppercase tracking-wider">
              Cake design anniversaire à Montauban
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl">
              Gâteau d'Anniversaire Personnalisé à Montauban
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-10 font-light">
              Layer cakes, number cakes, letter cakes, piñata cakes et créations à thème pour enfants et adultes,
              imaginées par Aurore dans son atelier près de Montauban.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-base font-semibold shadow-2xl">
                <a href="#devis-anniversaire">
                  Commander mon gâteau
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-7 text-base font-semibold bg-white/20 backdrop-blur-md text-white border-2 border-white/70 hover:bg-white hover:text-[#9B7AB8]"
              >
                <a href="#types-gateaux">Voir les types de gâteaux</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-xl leading-relaxed text-[#6B6B6B] mb-6">
              Un anniversaire mérite un gâteau qui lui ressemble : ludique pour les enfants, élégant pour les
              adultes, spectaculaire pour les grandes dates. Chez Odyssée Sucrée, à 25 minutes de Montauban, chaque
              gâteau d'anniversaire est conçu sur mesure par Aurore, pâtissière CAP, à partir de votre thème et de
              vos envies.
            </p>
            <p className="text-lg leading-relaxed text-[#6B6B6B]">
              Cette page vous présente les 4 grandes familles de gâteaux d'anniversaire que nous réalisons dans
              tout le Tarn-et-Garonne : layer cakes thématiques, number cakes chiffrés, letter cakes d'initiales et
              piñata cakes surprises. Chaque gâteau peut être entièrement personnalisé : parfums, couleurs, décors,
              nombre de parts, allergies.
            </p>
          </div>
        </section>

        {/* Navigation par ancres */}
        <section className="py-8 bg-[#F3E8FF]/40 border-y border-[#D8C7E8]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-wider mb-4 text-center">
              Sommaire des gâteaux
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {cakeTypes.map((t) => (
                <a
                  key={t.anchor}
                  href={`#${t.anchor}`}
                  className="px-5 py-2 bg-white rounded-full text-sm font-medium text-[#2D2D2D] border border-[#D8C7E8]/40 hover:border-[#9B7AB8] hover:text-[#9B7AB8] transition-all"
                >
                  {t.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Types de gâteaux */}
        <section className="py-24 bg-white" id="types-gateaux">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Quel type de gâteau d'anniversaire choisir à Montauban ?
              </h2>
              <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
                Chez Odyssée Sucrée, vous avez le choix entre 4 grandes familles de gâteaux d'anniversaire,
                chacune entièrement personnalisable.
              </p>
            </div>

            <div className="space-y-20">
              {cakeTypes.map((type, i) => (
                <article key={i} id={type.anchor} className="scroll-mt-32 grid md:grid-cols-2 gap-12 items-center">
                  <div className={i % 2 === 0 ? '' : 'md:order-2'}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={type.image}
                        alt={type.alt}
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 0 ? '' : 'md:order-1'}>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">{type.name}</h3>
                    <p className="text-lg text-[#6B6B6B] leading-relaxed mb-6">{type.description}</p>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 text-[#9B7AB8] font-semibold hover:gap-3 transition-all"
                    >
                      Commander ce type de gâteau
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
                Des gâteaux pour tous les anniversaires
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Smile,
                  title: 'Anniversaires enfants',
                  text: "Layer cakes Disney (Stitch, Avatar), gâteaux Halloween, piñata cakes surprises, gâteaux licorne, dinosaures ou super-héros : chaque enfant a son rêve, Aurore le réalise à Montauban.",
                },
                {
                  icon: Gift,
                  title: 'Anniversaires adultes',
                  text: "18 ans, 20 ans, 30 ans, 40 ans, 50 ans : number cakes élégants, layer cakes gourmands ou letter cakes raffinés pour marquer les anniversaires importants à Montauban.",
                },
                {
                  icon: Cake,
                  title: 'Événements familiaux',
                  text: "Baptêmes, communions, départs en retraite, fêtes de famille : Aurore conçoit des gâteaux personnalisés qui mettent tout le monde d'accord, à Montauban et alentours.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-[#D8C7E8]/30 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{item.title}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed">{item.text}</p>
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
                Nos créations d'anniversaire à Montauban
              </h2>
              <p className="text-xl text-[#6B6B6B]">
                Inspirations pour votre prochain gâteau d'anniversaire personnalisé.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {birthdayCreations.map((creation) => (
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

        {/* Comment commander */}
        <section className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-12 text-center">
              Comment commander votre gâteau d'anniversaire
            </h2>
            <ul className="space-y-4">
              {[
                'Contactez Aurore par téléphone, email ou via le formulaire en précisant la date',
                'Décrivez votre projet : type de gâteau, parfums, thème, nombre de parts',
                'Recevez votre devis personnalisé sous 24h',
                'Validez la commande avec un acompte de 30 % (délai conseillé : 7 à 10 jours minimum)',
                'Récupérez votre gâteau à Puycornet ou demandez la livraison à Montauban',
                'Soufflez les bougies et régalez-vous',
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
          badge="Questions anniversaire"
          title="Les questions les plus fréquentes sur nos gâteaux d'anniversaire"
          intro="Parfums, délais, thèmes, allergies : on répond à tout avant que vous commandiez."
          items={anniversaireFaqs}
          id="faq-anniversaire"
        />

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-[#FADADD]/30 to-[#D8C7E8]/30" id="devis-anniversaire">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
              Prêt à commander votre gâteau d'anniversaire à Montauban ?
            </h2>
            <p className="text-xl text-[#6B6B6B] mb-12">
              Devis gratuit sous 24h. Aurore vous répond personnellement pour préparer ensemble votre création.
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
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Maillage interne */}
        <RelatedPages
          title="Vous préparez un autre événement ?"
          intro="Découvrez les autres prestations et articles qui peuvent vous intéresser."
          links={[
            {
              href: '/wedding-cake-montauban',
              title: 'Wedding cake pour votre mariage',
              description: "Pièce montée à étages, fleurs fraîches, naked cake : toutes nos créations pour les mariages à Montauban et dans le Tarn-et-Garonne.",
            },
            {
              href: '/journal/tendances-gateau-anniversaire-2026',
              title: 'Tendances gâteaux anniversaire 2026',
              description: "Les styles, thèmes et couleurs qui font mouche cette année pour les anniversaires enfants et adultes.",
            },
            {
              href: '/#creations',
              title: 'Toutes nos créations',
              description: "Parcourez l'ensemble de nos pâtisseries : entremets, tartes, mignardises, bûches de Noël et créations saisonnières.",
            },
          ]}
        />

        <Footer />
      </main>
      <LegalModals />
    </>
  );
}
