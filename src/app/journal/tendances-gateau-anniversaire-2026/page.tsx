import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import BlogArticle, { BlogSection } from '@/components/BlogArticle';
import { getArticleBySlug } from '@/data/articles';

const SITE_URL = 'https://www.odysseesucree.com';
const slug = 'tendances-gateau-anniversaire-2026';
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
      "Le gâteau d'anniversaire n'est plus un simple dessert : c'est devenu un élément central de la fête, pensé pour la photo, pour le partage et pour surprendre. En 2026, quatre formats dominent la demande, pour les enfants comme pour les adultes. Voici notre tour d'horizon.",
  },
  {
    type: 'h2',
    content: '1. Le layer cake : le format roi',
  },
  {
    type: 'p',
    content:
      "Le layer cake, c'est le gâteau à étages. Plusieurs couches de biscuit moelleux alternées avec de la crème (ganache montée, crème au beurre, mousse), recouvert d'un glaçage lisse et décoré selon le thème. C'est la base la plus polyvalente : on peut tout faire dessus.",
  },
  {
    type: 'h3',
    content: 'Pour qui ?',
  },
  {
    type: 'p',
    content:
      "Tous les âges. Les enfants adorent les thèmes Disney, Pokémon, licornes, super-héros. Les adolescents préfèrent les teintes pastel ou les références pop culture (Stranger Things, K-pop, sport). Les adultes craquent pour les layer cakes élégants aux fruits rouges et herbes fraîches.",
  },
  {
    type: 'h3',
    content: 'Nombre de parts',
  },
  {
    type: 'p',
    content:
      "Un layer cake classique de 20 cm de diamètre nourrit 10 à 15 personnes. Pour les grands anniversaires (50, 60 invités), on passe sur des layer cakes à 2 étages, voire un format wedding cake miniature.",
  },
  {
    type: 'h2',
    content: "2. Le number cake : l'âge mis en scène",
  },
  {
    type: 'p',
    content:
      "Le number cake (gâteau en forme de chiffres) est devenu l'alternative préférée des anniversaires marquants : 18, 20, 30, 40, 50, 60, 70 ans. Deux couches de biscuit en forme du chiffre, garnies de chantilly, crème pâtissière ou mousseline, puis décorées de fruits frais, macarons, fleurs comestibles ou chocolats.",
  },
  {
    type: 'callout',
    content:
      "Point fort du number cake : il est instantanément reconnaissable sur la photo. Quand on poste un number cake '40' sur Instagram, le message passe immédiatement, même sans légende.",
  },
  {
    type: 'h3',
    content: 'Tendances 2026 pour le number cake',
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Fruits rouges et pistache : le duo le plus demandé cette année.',
      'Chocolat et noisette : plus gourmand, très apprécié pour les 30 et 40 ans.',
      'Citron meringué : frais, parfait pour les anniversaires d\'été.',
      'Décoration florale fraîche : tendance crossover avec les wedding cakes.',
    ],
  },
  {
    type: 'h2',
    content: "3. Le letter cake : personnalisation par l'initiale",
  },
  {
    type: 'p',
    content:
      "Même principe que le number cake, mais avec une lettre. C'est le format idéal pour les anniversaires thématiques (initiales des prénoms, mot symbolique) ou les événements d'entreprise (logo, nom de marque). Les lettres simples fonctionnent mieux : A, B, C, M, H, E, L, J.",
  },
  {
    type: 'h3',
    content: 'Quand choisir un letter cake plutôt qu\'un number cake ?',
  },
  {
    type: 'ul',
    content: '',
    items: [
      "Quand on ne veut pas afficher l'âge mais marquer la personne.",
      'Pour des anniversaires en couple (initiales des prénoms).',
      'Pour un événement d\'entreprise (logo ou initiales de la marque).',
      'Pour une baby shower (initiale du prénom du bébé attendu).',
    ],
  },
  {
    type: 'h2',
    content: "4. Le piñata cake : l'effet wow garanti",
  },
  {
    type: 'p',
    content:
      "Le piñata cake ressemble à un layer cake classique à l'extérieur. La surprise vient de l'intérieur : un cœur creux rempli de bonbons, petits chocolats ou surprises qui tombent en cascade quand on coupe la première part. C'est l'une des tendances les plus virales des dernières années.",
  },
  {
    type: 'h3',
    content: 'Pour qui ?',
  },
  {
    type: 'p',
    content:
      "Principalement les anniversaires d'enfants (effet garanti à la découpe) et les anniversaires marquants d'adultes (30, 40, 50 ans) pour surprendre. C'est aussi très demandé pour les annonces de grossesse (avec des bonbons bleus ou roses à l'intérieur pour révéler le sexe du bébé) et les gender reveals.",
  },
  {
    type: 'h2',
    content: '5. Les tendances transversales 2026',
  },
  {
    type: 'h3',
    content: 'La personnalisation photo comestible',
  },
  {
    type: 'p',
    content:
      "L'impression alimentaire permet désormais de reproduire n'importe quelle photo sur le gâteau. Pour un anniversaire surprise avec la tête du héros du jour, un gâteau de retraite avec une photo de carrière, ou simplement un beau cliché de famille.",
  },
  {
    type: 'h3',
    content: "L'adaptation aux régimes alimentaires",
  },
  {
    type: 'p',
    content:
      "Les demandes sans gluten, sans lactose et vegan explosent. En 2026, un bon pâtissier propose systématiquement des alternatives sans sacrifier le goût. Un layer cake sans gluten aux fruits rouges ou un number cake vegan à la noisette sont devenus courants.",
  },
  {
    type: 'h3',
    content: 'Les palettes de couleurs naturelles',
  },
  {
    type: 'p',
    content:
      "Fini les glaçages fluo. 2026 privilégie les tons naturels : terracotta, sauge, crème, ivoire, rose poudré. Même pour les enfants, les décorations sont plus sobres et plus élégantes, avec des effets aquarelle, des fleurs comestibles et des dorures discrètes.",
  },
  {
    type: 'h2',
    content: '6. Comment choisir le bon format pour votre anniversaire ?',
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Moins de 15 invités : layer cake classique ou small number/letter cake.',
      'Anniversaire marquant (décennies) : number cake, toujours très photographié.',
      'Anniversaire d\'enfant avec effet surprise : piñata cake.',
      'Anniversaire thématique ou d\'entreprise : letter cake.',
      'Grand anniversaire (+30 invités) : layer cake XXL à 2 étages ou combinaison.',
    ],
  },
  {
    type: 'callout',
    content:
      "Conseil d'Aurore : le plus important, c'est que le gâteau raconte quelque chose de la personne fêtée. Un thème, un souvenir, une passion, une couleur préférée. C'est ce qui transforme un beau gâteau en cadeau inoubliable.",
  },
  {
    type: 'h2',
    content: 'En résumé',
  },
  {
    type: 'p',
    content:
      "Quatre formats, mille combinaisons. Layer cake pour la polyvalence, number cake pour les dates marquantes, letter cake pour la personnalisation, piñata cake pour l'effet wow. À vous de choisir celui qui fera mouche pour l'anniversaire à venir. Et quel que soit votre choix, exigez de votre pâtissière un gâteau qui soit aussi bon que beau. C'est ce qui fait la différence entre un gâteau Instagram et un vrai moment de partage.",
  },
];

export default function TendancesAnniversaireArticle() {
  return (
    <>
      <Header />
      <BlogArticle
        article={article}
        sections={sections}
        related={[
          {
            href: '/gateau-anniversaire-montauban',
            title: 'Gâteau d\'anniversaire Montauban',
            description: 'Notre page dédiée : layer cake, number cake, letter cake, piñata cake.',
          },
          {
            href: '/journal/choisir-wedding-cake-2026',
            title: 'Choisir son wedding cake en 2026',
            description: 'Le guide complet sur le wedding cake moderne et ses tendances.',
          },
          {
            href: '/mignardises-mariage-montauban',
            title: 'Mignardises et buffet sucré',
            description: 'Compléter son gâteau par un buffet pour les grands anniversaires.',
          },
        ]}
      />
      <Footer />
      <LegalModals />
    </>
  );
}
