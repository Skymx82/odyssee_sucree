import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import BlogArticle, { BlogSection } from '@/components/BlogArticle';
import { getArticleBySlug } from '@/data/articles';

const SITE_URL = 'https://www.odysseesucree.com';
const slug = 'choisir-wedding-cake-2026';
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

const sections: BlogSection[] = [
  {
    type: 'p',
    content:
      "Le wedding cake est l'un des symboles les plus photographiés du mariage. Il incarne le style du couple, annonce l'ambiance de la réception et cristallise un moment fort du repas. En 2026, les tendances ont évolué : plus de sobriété, plus de fleurs fraîches, des étages mieux pensés. Ce guide vous aide à faire le bon choix avant de contacter votre pâtissière.",
  },
  {
    type: 'h2',
    content: "1. Commencer par le nombre d'invités",
  },
  {
    type: 'p',
    content:
      "C'est le paramètre qui conditionne tout. Un wedding cake est calculé en nombre de parts, et le nombre d'étages découle directement du nombre d'invités. Voici l'ordre de grandeur standard :",
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Jusqu\'à 30 invités : 2 étages suffisent largement, avec parfois un étage factice pour la photo.',
      'De 40 à 80 invités : 3 étages, proportion classique des mariages chic en Tarn-et-Garonne.',
      'De 80 à 150 invités : 4 étages, ou 3 étages complétés par un buffet de mignardises.',
      'Au-delà de 150 invités : 5 étages ou plus, avec souvent un gâteau partagé à couper en plus.',
    ],
  },
  {
    type: 'callout',
    content:
      "Conseil d'Aurore : si vous hésitez entre deux tailles, mieux vaut prévoir un étage factice ou un complément de mignardises plutôt qu'un wedding cake trop petit. Il vaut mieux finir avec quelques parts en trop qu'en manquer.",
  },
  {
    type: 'h2',
    content: '2. Choisir le style : moderne, romantique ou champêtre ?',
  },
  {
    type: 'p',
    content:
      "Trois grandes familles dominent en 2026. Chacune fonctionne avec un type de mariage particulier.",
  },
  {
    type: 'h3',
    content: 'Le wedding cake moderne minimaliste',
  },
  {
    type: 'p',
    content:
      "Finitions nettes, peu de décoration, parfois un simple liseré doré ou une coulée de ganache. Ce style a explosé en 2025 et continue en 2026, notamment pour les mariages contemporains célébrés en ville ou dans des lieux industriels réhabilités.",
  },
  {
    type: 'h3',
    content: 'Le wedding cake fleuri (fleurs fraîches)',
  },
  {
    type: 'p',
    content:
      "La tendance la plus demandée dans le Tarn-et-Garonne en ce moment. Pivoines, roses anciennes, eucalyptus, gypsophile : les fleurs fraîches apportent un supplément d'âme et raccrochent le gâteau à votre bouquet. À prévoir avec votre fleuriste et votre pâtissière ensemble.",
  },
  {
    type: 'h3',
    content: 'Le naked cake ou semi-naked cake',
  },
  {
    type: 'p',
    content:
      "Parfait pour les mariages champêtres, bohèmes ou à la campagne. Le gâteau est partiellement découvert, laissant voir les étages biscuit. Associé à des fruits rouges, des fleurs séchées ou des herbes fraîches, il s'intègre très bien aux réceptions en plein air dans le Quercy.",
  },
  {
    type: 'h2',
    content: '3. Les parfums : plaire au plus grand nombre',
  },
  {
    type: 'p',
    content:
      "Un wedding cake nourrit 50 à 200 personnes. Il doit plaire largement, tout en vous ressemblant. Les associations les plus demandées en 2026 :",
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Vanille et fruits rouges (fraise, framboise) : un classique indémodable qui rassure tout le monde.',
      'Chocolat et caramel beurre salé : pour les couples gourmands, équilibré avec une mousse légère.',
      'Citron et crème mousseline : frais, élégant, parfait pour les mariages d\'été.',
      'Pistache et fruits rouges : la tendance forte du moment, un goût noble et moins commun.',
      'Vanille Madagascar et praliné : le duo le plus rassembleur, en finesse.',
    ],
  },
  {
    type: 'callout',
    content:
      "Conseil d'Aurore : prévoyez 2 ou 3 parfums différents répartis sur les étages. Ça permet à chaque invité de trouver celui qu'il préfère, et ça enrichit le moment du service.",
  },
  {
    type: 'h2',
    content: '4. La décoration : co-construite avec votre fleuriste',
  },
  {
    type: 'p',
    content:
      "Le wedding cake de 2026 n'est plus une pièce isolée : il dialogue avec le reste de la décoration. Pour que l'ensemble soit harmonieux, réfléchissez dès le départ aux éléments suivants :",
  },
  {
    type: 'ul',
    content: '',
    items: [
      'La couleur dominante du mariage : le gâteau s\'aligne généralement dessus.',
      'Les fleurs utilisées pour le bouquet et les centres de table : à reprendre sur le gâteau pour cohérence.',
      'Le support : cake board bois, marbre, miroir, stand en fer forgé selon l\'ambiance.',
      'La place du gâteau dans la salle : central, sur une table dédiée, ou sur un buffet de desserts ?',
    ],
  },
  {
    type: 'h2',
    content: '5. Les pièges à éviter',
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Sous-estimer la chaleur : un wedding cake crème au beurre en juillet en extérieur = catastrophe. Préférer une ganache stable ou un dressage tardif à l\'ombre.',
      'Oublier les dégustations : refuser de goûter les parfums pour "faire confiance" est une erreur classique.',
      'Attendre le dernier mois pour commander : les bons pâtissiers sont réservés 4 à 6 mois avant.',
      'Ne pas poser la question du transport : qui livre le gâteau, quand, comment, et qui le monte sur place ?',
      'Oublier les allergies : toujours signaler les intolérances dès le premier échange.',
    ],
  },
  {
    type: 'h2',
    content: '6. Le budget : sur quoi ça joue',
  },
  {
    type: 'p',
    content:
      "Chaque wedding cake étant unique, les pâtissières artisanales travaillent sur devis. Le tarif dépend du nombre de parts, du nombre d'étages, du type de finition (pâte à sucre, crème au beurre, naked, ganache), de la décoration (fleurs fraîches, décors en sucre) et du lieu de livraison. Pour avoir un vrai ordre de grandeur, demandez un devis personnalisé à votre pâtissière en donnant toutes les informations dès le départ.",
  },
  {
    type: 'h2',
    content: '7. Quand contacter sa pâtissière ?',
  },
  {
    type: 'p',
    content:
      "En 2026, les pâtissières artisanales spécialisées en wedding cake sont très demandées sur les week-ends de mai à septembre. L'idéal est de prendre contact 6 mois avant la date, parfois un an pour les samedis d'été dans les lieux prisés. Cela vous laisse le temps d'organiser la dégustation et d'ajuster le projet en fonction de l'évolution de votre mariage.",
  },
  {
    type: 'quote',
    content:
      "Un beau wedding cake, c'est un gâteau qui vous ressemble. Pas un gâteau parfait sur papier. L'important, c'est qu'il raconte votre histoire et que vos invités s'en souviennent.",
  },
];

export default function ChoisirWeddingCakeArticle() {
  return (
    <>
      <Header />
      <BlogArticle
        article={article}
        sections={sections}
        related={[
          {
            href: '/wedding-cake-montauban',
            title: 'Wedding cake sur mesure à Montauban',
            description: 'Notre page dédiée au wedding cake : styles, étages, parfums, fleurs.',
          },
          {
            href: '/journal/wedding-cake-vs-piece-montee',
            title: 'Wedding cake ou pièce montée ?',
            description: 'Le comparatif détaillé pour trancher entre les deux grands formats.',
          },
          {
            href: '/gateau-mariage-montauban',
            title: 'Tous les gâteaux de mariage',
            description: 'Vue d\'ensemble : wedding cake, pièce montée, pyramide de macarons, naked cake.',
          },
        ]}
      />
      <Footer />
      <LegalModals />
    </>
  );
}
