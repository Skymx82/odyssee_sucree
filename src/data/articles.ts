export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  cover: string;
  coverAlt: string;
  publishedAt: string; // ISO
  updatedAt?: string;
  readTime: string;
  keywords: string[];
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: 'choisir-wedding-cake-2026',
    title: "Comment choisir son wedding cake en 2026 ?",
    excerpt:
      "Les tendances mariage 2026, les styles à privilégier, les étages selon le nombre d'invités et les pièges à éviter quand on commande son wedding cake.",
    metaTitle: "Comment choisir son wedding cake en 2026 ? Le guide complet",
    metaDescription:
      "Wedding cake 2026 : tendances, nombre d'étages, parfums, décoration florale, pièges à éviter. Le guide complet d'Aurore, pâtissière à Montauban.",
    cover: '/creations/wedding-cake-mariage-elegant-montauban.jpeg',
    coverAlt: "Wedding cake moderne à étages, création Odyssée Sucrée près de Montauban",
    publishedAt: '2026-04-15',
    readTime: '6 min de lecture',
    keywords: [
      'wedding cake 2026',
      'tendances wedding cake',
      'choisir wedding cake',
      'wedding cake Montauban',
      'nombre étages wedding cake',
    ],
    tags: ['Mariage', 'Wedding cake', 'Tendances'],
  },
  {
    slug: 'wedding-cake-vs-piece-montee',
    title: "Wedding cake ou pièce montée : que choisir pour son mariage ?",
    excerpt:
      "Notre comparatif complet entre les deux grands classiques du gâteau de mariage. Budget, esthétique, tradition, nombre de parts, tout ce qui sépare les deux formats.",
    metaTitle: "Wedding cake ou pièce montée : le comparatif pour choisir",
    metaDescription:
      "Wedding cake ou pièce montée ? Comparatif détaillé : budget, style, nombre de parts, tradition, dégustation. Le guide pour choisir sans hésitation.",
    cover: '/creations/wedding-cake-mariage-3-etages-montauban.jpeg',
    coverAlt: "Wedding cake à étages à comparer avec une pièce montée traditionnelle",
    publishedAt: '2026-04-18',
    readTime: '5 min de lecture',
    keywords: [
      'wedding cake vs pièce montée',
      'différence wedding cake pièce montée',
      'pièce montée Montauban',
      'gâteau mariage traditionnel',
      'gâteau mariage moderne',
    ],
    tags: ['Mariage', 'Comparatif', 'Pièce montée'],
  },
  {
    slug: 'tendances-gateau-anniversaire-2026',
    title: "Gâteau d'anniversaire : les tendances 2026 à ne pas manquer",
    excerpt:
      "Layer cake, number cake, letter cake, piñata cake : nos inspirations pour un gâteau d'anniversaire mémorable cette année, pour enfants comme pour adultes.",
    metaTitle: "Gâteau d'anniversaire 2026 : les tendances (layer, number, piñata)",
    metaDescription:
      "Tendances gâteau d'anniversaire 2026 : layer cake, number cake, letter cake, piñata cake. Nos idées et conseils par Odyssée Sucrée à Montauban.",
    cover: '/creations/layer-cake-anniversaire-18-ans-montauban.jpeg',
    coverAlt: "Layer cake personnalisé pour anniversaire, Odyssée Sucrée Montauban",
    publishedAt: '2026-04-20',
    readTime: '7 min de lecture',
    keywords: [
      'tendances gâteau anniversaire 2026',
      'layer cake',
      'number cake',
      'letter cake',
      'piñata cake',
      'gâteau anniversaire Montauban',
    ],
    tags: ['Anniversaire', 'Tendances', 'Layer cake'],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
