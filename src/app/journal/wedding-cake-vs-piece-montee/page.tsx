import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import BlogArticle, { BlogSection } from '@/components/BlogArticle';
import { getArticleBySlug } from '@/data/articles';

const SITE_URL = 'https://www.odysseesucree.com';
const slug = 'wedding-cake-vs-piece-montee';
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
      "Wedding cake ou pièce montée ? C'est la question que se posent la plupart des couples quand vient le moment de choisir le gâteau de mariage. Les deux formats sont excellents, mais ils ne racontent pas la même histoire. Voici tout ce qu'il faut savoir pour trancher.",
  },
  {
    type: 'h2',
    content: "Qu'est-ce qui différencie vraiment les deux ?",
  },
  {
    type: 'p',
    content:
      "La pièce montée est la version française historique du gâteau de mariage : des choux caramélisés empilés en pyramide, reliés par de la nougatine et parfois décorés de dragées ou de fils de sucre filé. Elle existe depuis le XIXe siècle et elle fait partie du patrimoine pâtissier français.",
  },
  {
    type: 'p',
    content:
      "Le wedding cake est l'importation anglo-saxonne, popularisée en France depuis les années 2010. Il s'agit d'un gâteau à plusieurs étages, généralement recouvert de crème au beurre, de ganache ou de pâte à sucre, puis décoré de fleurs fraîches, en sucre ou de motifs personnalisés.",
  },
  {
    type: 'h2',
    content: 'Tableau comparatif : les grandes différences',
  },
  {
    type: 'h3',
    content: 'Esthétique',
  },
  {
    type: 'p',
    content:
      "La pièce montée a un look très traditionnel, doré, vertical. Elle évoque la tradition française et rassure les générations plus âgées. Le wedding cake offre une flexibilité visuelle bien plus grande : minimaliste, fleuri, naked, coloré, à peu près tout est possible.",
  },
  {
    type: 'h3',
    content: 'Goût',
  },
  {
    type: 'p',
    content:
      "La pièce montée joue sur un seul registre : choux, crème pâtissière vanille ou chocolat, caramel. Les variations sont limitées. Le wedding cake autorise bien plus de créativité : biscuit moelleux, ganaches, mousses, fruits frais, insert crémeux. Chaque étage peut avoir son propre parfum.",
  },
  {
    type: 'h3',
    content: 'Ambiance du mariage',
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Mariage classique, traditionnel, famille attachée aux racines : pièce montée.',
      'Mariage chic, moderne, instagrammable, couleurs marquées : wedding cake.',
      'Mariage champêtre ou bohème en extérieur : wedding cake naked cake ou pyramide de macarons.',
      'Mariage mixte, avec deux générations à satisfaire : combiner les deux.',
    ],
  },
  {
    type: 'h3',
    content: 'Nombre de parts',
  },
  {
    type: 'p',
    content:
      "Les deux formats s'adaptent à n'importe quelle taille de mariage. La pièce montée propose en général un chou par personne, parfois deux. Le wedding cake se découpe en parts calculées précisément selon le nombre d'invités et la taille des étages.",
  },
  {
    type: 'h3',
    content: 'Logistique et livraison',
  },
  {
    type: 'p',
    content:
      "La pièce montée est plus robuste au transport : les choux sont compacts, la structure est stable. Le wedding cake demande un transport et un dressage soignés, idéalement par la pâtissière elle-même. Dans les deux cas, il est préférable que le gâteau soit livré et monté sur place le jour J.",
  },
  {
    type: 'h3',
    content: 'Tradition ou modernité ?',
  },
  {
    type: 'p',
    content:
      "La pièce montée symbolise la tradition, le wedding cake la modernité. Si vous êtes partagés, sachez qu'une troisième voie existe : la pyramide de macarons. Elle combine l'aspect vertical de la pièce montée avec la flexibilité esthétique du wedding cake, dans des tons qui s'accordent à votre thème.",
  },
  {
    type: 'h2',
    content: 'Peut-on avoir les deux à son mariage ?',
  },
  {
    type: 'p',
    content:
      "C'est même la formule que nous recommandons pour les grands mariages. Un wedding cake comme pièce maîtresse pour la photo et le partage officiel, complété par une pièce montée de choux (ou une pyramide de macarons) comme dessert principal servi à table. Les grands-parents y trouvent leur compte, les jeunes aussi, et vos photos sont parfaites.",
  },
  {
    type: 'callout',
    content:
      "Conseil d'Aurore : posez-vous deux questions. 1) Quelle image voulez-vous sur la photo la plus importante du mariage ? 2) Qu'est-ce que vos invités, dans leur majorité, préfèrent manger ? La réponse à ces deux questions vous orientera naturellement vers l'un des deux formats ou vers la combinaison des deux.",
  },
  {
    type: 'h2',
    content: 'Les erreurs fréquentes',
  },
  {
    type: 'ul',
    content: '',
    items: [
      'Choisir une pièce montée "parce que c\'est la tradition" alors qu\'on n\'aime pas les choux : décevant.',
      'Choisir un wedding cake à 5 étages sans avoir prévu de lieu stable et frais pour l\'exposer.',
      'Sous-estimer la nougatine pour les invités qui ne peuvent pas croquer dedans (problèmes dentaires).',
      'Penser que le wedding cake est "plus cher par principe" : les deux peuvent coûter autant selon la décoration et les parts.',
    ],
  },
  {
    type: 'h2',
    content: 'En résumé',
  },
  {
    type: 'p',
    content:
      "Il n'y a pas de bon ou de mauvais choix. La pièce montée et le wedding cake sont deux façons différentes de raconter la même chose : célébrer votre union en partageant quelque chose de sucré. Posez-vous sincèrement la question du style qui vous ressemble, de ce qui fera plaisir à vos invités, et faites-vous accompagner par une pâtissière qui sait conseiller les deux.",
  },
  {
    type: 'quote',
    content:
      "Le meilleur gâteau de mariage est celui dont vous vous souviendrez 10 ans plus tard, pas celui qui était à la mode cette année-là.",
  },
];

export default function WeddingCakeVsPieceMonteeArticle() {
  return (
    <>
      <Header />
      <BlogArticle
        article={article}
        sections={sections}
        related={[
          {
            href: '/gateau-mariage-montauban',
            title: 'Tous les gâteaux de mariage',
            description: 'Wedding cake, pièce montée, pyramide de macarons : toute la palette mariage.',
          },
          {
            href: '/wedding-cake-montauban',
            title: 'Wedding cake sur mesure',
            description: 'Notre page dédiée au wedding cake moderne à étages.',
          },
          {
            href: '/journal/choisir-wedding-cake-2026',
            title: 'Comment choisir son wedding cake en 2026',
            description: 'Les tendances, les étages, les parfums, les pièges à éviter.',
          },
        ]}
      />
      <Footer />
      <LegalModals />
    </>
  );
}
