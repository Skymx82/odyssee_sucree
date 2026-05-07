import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import BlogArticle, { BlogSection } from '@/components/BlogArticle';
import { getArticleBySlug } from '@/data/articles';

const SITE_URL = 'https://www.odysseesucree.com';
const slug = 'qu-est-ce-qu-un-wedding-cake';
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
      "Le wedding cake est devenu en quelques années le gâteau de mariage le plus demandé en France. Mais qu'est-ce qu'un wedding cake exactement ? D'où vient-il ? En quoi est-il différent d'une pièce montée traditionnelle ? Voici tout ce qu'il faut savoir, en clair, par une pâtissière artisanale qui en réalise toutes les semaines.",
  },
  {
    type: 'h2',
    content: 'La définition du wedding cake',
  },
  {
    type: 'p',
    content:
      "Le wedding cake, traduit littéralement « gâteau de mariage », est un gâteau à plusieurs étages, généralement composé de couches alternées de biscuit moelleux et de crèmes (ganache montée, crème au beurre, mousse), recouvert d'une finition extérieure (crème, ganache, pâte à sucre) et décoré pour s'accorder au thème du mariage.",
  },
  {
    type: 'p',
    content:
      "Sa caractéristique principale : la structure verticale à étages, du plus grand en bas au plus petit en haut. Les étages reposent les uns sur les autres grâce à un système interne de tiges et de cake boards qui assurent la stabilité, indispensable pour les grandes pièces.",
  },
  {
    type: 'h2',
    content: "L'origine anglo-saxonne",
  },
  {
    type: 'p',
    content:
      "Le wedding cake nous vient des pays anglo-saxons (Royaume-Uni, États-Unis), où il est la forme historique du gâteau de mariage depuis le XIXe siècle. À l'origine, il s'agissait d'un gâteau aux fruits secs très dense, recouvert de pâte d'amandes et de glaçage royal blanc, capable de se conserver plusieurs mois.",
  },
  {
    type: 'p',
    content:
      "Le mariage de Lady Diana et du Prince Charles en 1981 a popularisé l'image du wedding cake monumental à plusieurs étages dans le monde entier. Plus tard, l'émission télévisée Cake Boss et l'essor du cake design sur les réseaux sociaux ont fait évoluer le format vers ce que nous connaissons aujourd'hui : un gâteau spectaculaire visuellement, plus léger en bouche, et entièrement personnalisable.",
  },
  {
    type: 'h2',
    content: 'En France, depuis quand ?',
  },
  {
    type: 'p',
    content:
      "Le wedding cake s'est installé en France au début des années 2010, principalement via les réseaux sociaux (Instagram, Pinterest) et les magazines de mariage. Pendant longtemps, la pièce montée traditionnelle (choux caramélisés en pyramide) régnait sans partage. Le wedding cake est arrivé comme une alternative moderne, plus photogénique, et a séduit les couples qui voulaient sortir du format classique.",
  },
  {
    type: 'p',
    content:
      "Aujourd'hui, dans les régions comme le Tarn-et-Garonne, le wedding cake est devenu une option aussi demandée que la pièce montée pour les mariages. De nombreux couples choisissent même de combiner les deux pour satisfaire toutes les générations.",
  },
  {
    type: 'h2',
    content: 'La différence avec une pièce montée',
  },
  {
    type: 'p',
    content:
      "Pièce montée et wedding cake sont deux choses fondamentalement différentes :",
  },
  {
    type: 'ul',
    content: '',
    items: [
      "La pièce montée est composée de choux caramélisés empilés en pyramide, reliés par de la nougatine, décorés de dragées ou de filaments de sucre.",
      "Le wedding cake est composé d'étages de biscuit fourré, recouverts d'une finition lisse, décorés selon le thème.",
      "La pièce montée a un goût homogène (chou + crème pâtissière), le wedding cake permet plusieurs parfums par étage.",
      "La pièce montée est française et traditionnelle, le wedding cake est anglo-saxon et moderne.",
      "Les deux sont excellents : le choix dépend du style du mariage et du goût des mariés.",
    ],
  },
  {
    type: 'h2',
    content: 'Combien d\'étages pour un wedding cake ?',
  },
  {
    type: 'p',
    content:
      "Le nombre d'étages est calculé selon le nombre d'invités. En général :",
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Jusqu\'à 30 invités : 2 étages, parfois avec un étage factice pour la photo.',
      'De 40 à 80 invités : 3 étages, le format le plus classique.',
      'De 80 à 150 invités : 4 étages, ou 3 étages plus un buffet de mignardises.',
      "Plus de 150 invités : 5 étages, ou combinaison wedding cake + autre dessert.",
    ],
  },
  {
    type: 'h2',
    content: 'Quels parfums dans un wedding cake ?',
  },
  {
    type: 'p',
    content:
      "L'un des grands avantages du wedding cake : chaque étage peut avoir son propre parfum. Les associations les plus demandées en 2026 sont :",
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Vanille et fruits rouges (fraise, framboise) : un classique très consensuel.',
      'Chocolat et caramel beurre salé : pour les couples gourmands.',
      'Citron et crème mousseline : frais, parfait pour un mariage estival.',
      'Pistache et fruits rouges : la tendance forte du moment.',
      'Vanille et praliné : un duo qui plaît à toutes les générations.',
    ],
  },
  {
    type: 'callout',
    content:
      "Conseil d'Aurore : pour un wedding cake à plusieurs étages, prévoir 2 à 3 parfums différents répartis sur les étages. Cela permet à chaque invité de trouver le sien et enrichit le moment du service.",
  },
  {
    type: 'h2',
    content: 'En résumé',
  },
  {
    type: 'p',
    content:
      "Un wedding cake, c'est un gâteau de mariage à étages, d'origine anglo-saxonne, composé de biscuits moelleux et de crèmes, recouvert d'une finition décorée selon le thème du mariage. Plus moderne et photogénique que la pièce montée, plus flexible côté parfums et style, il s'est imposé comme l'un des deux grands formats de gâteau de mariage en France. Le choix entre les deux dépend essentiellement de votre style et de vos invités.",
  },
];

export default function QuEstCeQuUnWeddingCakeArticle() {
  return (
    <>
      <Header />
      <BlogArticle
        article={article}
        sections={sections}
        related={[
          {
            href: '/wedding-cake-montauban',
            title: 'Wedding cake sur mesure Montauban',
            description: 'Notre page dédiée : styles, étages, parfums, fleurs, dégustation.',
          },
          {
            href: '/journal/wedding-cake-vs-piece-montee',
            title: 'Wedding cake ou pièce montée ?',
            description: 'Le comparatif complet pour trancher entre les deux formats.',
          },
          {
            href: '/journal/choisir-wedding-cake-2026',
            title: 'Comment choisir son wedding cake en 2026',
            description: 'Tendances, étages, parfums, pièges à éviter pour bien commander.',
          },
        ]}
      />
      <Footer />
      <LegalModals />
    </>
  );
}
