import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import BlogArticle, { BlogSection } from '@/components/BlogArticle';
import { getArticleBySlug } from '@/data/articles';

const SITE_URL = 'https://www.odysseesucree.com';
const slug = 'prix-wedding-cake-2026';
const article = getArticleBySlug(slug)!;
const PAGE_URL = `${SITE_URL}/journal/${slug}`;

export const metadata: Metadata = {
  title: article.metaTitle,
  description: article.metaDescription,
  keywords: article.keywords,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: article.metaTitle,
    description: article.metaDescription,
    url: PAGE_URL,
    type: 'article',
    publishedTime: article.publishedAt,
    authors: ['Aurore Afchain'],
    images: [
      {
        url: `${SITE_URL}${article.cover}`,
        width: 1200,
        height: 630,
        alt: article.coverAlt,
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un wedding cake en moyenne ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "En France, un wedding cake artisanal se situe le plus souvent entre 6 et 12 euros par part, soit environ 300 à 900 euros pour un mariage de 50 à 80 invités. Le prix exact dépend du nombre de parts, du nombre d'étages, de la complexité du décor et des matières premières choisies.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de parts prévoir pour un wedding cake ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Comptez une part par invité si le wedding cake est le dessert principal, et 0,5 à 0,75 part par invité s'il est servi avec un buffet de mignardises. Un wedding cake de 3 étages couvre en général 40 à 70 parts selon le diamètre des étages.",
      },
    },
    {
      '@type': 'Question',
      name: "Quel est le prix d'une pièce montée de mariage ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Une pièce montée artisanale est généralement facturée au chou, avec 1,5 à 2 choux par personne. Pour 50 invités, cela représente 75 à 100 choux, plus le décor en nougatine. Le budget est du même ordre qu'un wedding cake, la décoration personnalisée faisant la différence.",
      },
    },
  ],
};

const sections: BlogSection[] = [
  {
    type: 'p',
    content:
      "C'est LA question que tous les couples posent, souvent avec un peu de gêne, dès le premier message : combien coûte un wedding cake ? La réponse honnête : ça dépend. Mais \"ça dépend\" ne vous aide pas à construire votre budget mariage. Alors voici un guide transparent, écrit par une pâtissière qui fabrique des wedding cakes toute l'année, avec de vraies fourchettes et les vrais facteurs qui font monter ou baisser le devis.",
  },
  {
    type: 'h2',
    content: 'Les fourchettes de prix constatées en France',
  },
  {
    type: 'p',
    content:
      "Pour un wedding cake artisanal réalisé par un pâtissier ou un cake designer, les tarifs constatés en France se situent le plus souvent entre 6 et 12 euros par part. Pour un mariage de 50 à 80 invités, cela représente un budget global d'environ 300 à 900 euros. En dessous de 5 euros la part, méfiance : il s'agit rarement d'un gâteau entièrement fait main avec des matières premières de qualité.",
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Wedding cake simple (2 étages, décor épuré, 30-40 parts) : entrée de fourchette.',
      'Wedding cake 3 étages avec fleurs fraîches ou en sucre (50-70 parts) : milieu de fourchette.',
      "Wedding cake très travaillé (monogramme peint, fleurs en sucre modelées main, effet dentelle, 4 étages et plus) : haut de fourchette, car chaque détail représente des heures d'atelier.",
    ],
  },
  {
    type: 'callout',
    content:
      "Important : un wedding cake n'est pas un produit sur étagère avec un prix catalogue. C'est une création unique, chiffrée sur devis après un échange sur votre projet. Les fourchettes ci-dessus servent uniquement à vous donner un ordre de grandeur pour votre budget.",
  },
  {
    type: 'h2',
    content: 'Combien de parts faut-il vraiment prévoir ?',
  },
  {
    type: 'p',
    content:
      "Le nombre de parts est le premier facteur du prix, et c'est aussi là que beaucoup de couples surdimensionnent. La règle simple : une part par invité si le wedding cake est le dessert unique du repas. Si le gâteau est accompagné d'un buffet de mignardises ou d'autres desserts, 0,5 à 0,75 part par invité suffit largement.",
  },
  {
    type: 'p',
    content:
      "À titre indicatif, un wedding cake de 3 étages couvre en général 40 à 70 parts selon les diamètres choisis. Astuce de pâtissière pour les grands mariages : plutôt qu'un gâteau à 5 étages spectaculaire mais coûteux, on peut prévoir un wedding cake de présentation de 3 étages et des gâteaux de découpe identiques servis en cuisine. Personne ne voit la différence dans l'assiette, et le budget respire.",
  },
  {
    type: 'h2',
    content: 'Ce qui fait varier le prix (dans les deux sens)',
  },
  {
    type: 'h3',
    content: 'Le décor, poste numéro un',
  },
  {
    type: 'p',
    content:
      "La part d'un wedding cake se mange en trois minutes, mais son décor peut demander des heures. Des fleurs en sucre modelées pétale par pétale, un monogramme peint à la main, un effet dentelle ou un glaçage miroir parfait : c'est du temps d'artisan, et c'est ce qui explique l'essentiel des écarts de prix entre deux gâteaux de même taille.",
  },
  {
    type: 'h3',
    content: 'Les parfums et les matières premières',
  },
  {
    type: 'p',
    content:
      "Vanille de Madagascar, framboises fraîches, chocolat de couverture, pistache : les matières premières nobles coûtent plus cher que les arômes et les fourrages industriels. Un artisan qui travaille des produits frais le répercute forcément, et ça se goûte.",
  },
  {
    type: 'h3',
    content: 'La livraison et le montage sur place',
  },
  {
    type: 'p',
    content:
      "Un wedding cake à étages se transporte démonté ou semi-monté, dans un véhicule réfrigéré ou climatisé, puis se monte et se finalise sur le lieu de réception. Cette prestation logistique, indispensable pour un gâteau qui arrive intact, est incluse ou facturée selon la distance. Pensez à la demander dans le devis.",
  },
  {
    type: 'h2',
    content: 'Et le prix d\'une pièce montée ?',
  },
  {
    type: 'p',
    content:
      "La pièce montée traditionnelle se chiffre différemment : au chou. Comptez 1,5 à 2 choux par personne en dessert principal. Pour 50 invités, cela fait 75 à 100 choux garnis et caramélisés, plus le socle et le décor en nougatine. Au global, le budget d'une belle pièce montée artisanale est du même ordre que celui d'un wedding cake : ce qui fait la différence, c'est le niveau de personnalisation du décor, pas le format.",
  },
  {
    type: 'h2',
    content: 'Wedding cake "pas cher" : les vrais bons plans et les pièges',
  },
  {
    type: 'ul',
    content: '',
    items: [
      "Bon plan : réduire le nombre d'étages exposés et compléter en gâteaux de découpe.",
      'Bon plan : choisir un décor semi-naked ou fleurs fraîches plutôt que 100 % fleurs en sucre.',
      'Bon plan : se marier hors samedi de haute saison, certains artisans sont plus souples sur les dates creuses.',
      "Piège : le gâteau de grande surface à 3 euros la part pour un mariage. Congélation, fourrages industriels, aucun montage sur place : le risque le jour J n'en vaut pas l'économie.",
      "Piège : le prestataire sans mentions légales ni laboratoire déclaré. Pour un repas de 80 personnes, l'hygiène n'est pas négociable.",
    ],
  },
  {
    type: 'h2',
    content: 'Comment se passe un devis chez une pâtissière artisanale ?',
  },
  {
    type: 'p',
    content:
      "Chez Odyssée Sucrée, tout commence par un échange : nombre d'invités, thème et couleurs du mariage, parfums que vous aimez, lieu de réception. À partir de là, Aurore dessine une proposition sur mesure et vous envoie un devis détaillé sous 24h, sans engagement. Un acompte de 30 % réserve votre date, le solde se règle à la livraison. Simple, transparent, sans surprise.",
  },
  {
    type: 'quote',
    content:
      "Un wedding cake n'est pas une dépense au kilo de gâteau : c'est le budget d'un moment. Celui où tout le monde se lève pour la découpe, et dont vos invités reparlent encore des années après.",
  },
];

export default function PrixWeddingCakeArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <BlogArticle
        article={article}
        sections={sections}
        related={[
          {
            href: '/wedding-cake-montauban',
            title: 'Wedding cake sur mesure à Montauban',
            description: 'Découvrez les créations d\'Aurore et demandez votre devis personnalisé sous 24h.',
          },
          {
            href: '/piece-montee-montauban',
            title: 'Pièce montée et croquembouche',
            description: 'La pièce montée traditionnelle ou moderne, chiffrée au chou selon vos invités.',
          },
          {
            href: '/journal/wedding-cake-vs-piece-montee',
            title: 'Wedding cake ou pièce montée ?',
            description: 'Le comparatif complet pour choisir le format adapté à votre mariage.',
          },
        ]}
      />
      <Footer />
      <LegalModals />
    </>
  );
}
