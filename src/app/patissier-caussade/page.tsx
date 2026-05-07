import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import CityLanding from '@/components/CityLanding';
import { FAQItem } from '@/components/FAQAccordion';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/patissier-caussade`;

export const metadata: Metadata = {
  title: "Pâtisserie à Caussade : Wedding Cake, Gâteau Mariage et Anniversaire",
  description:
    "Pâtisserie artisanale à Caussade (82300) : wedding cakes, gâteaux de mariage, anniversaires personnalisés et mignardises sur commande. Aurore livre dans tout le Quercy. Devis gratuit sous 24h.",
  keywords: [
    "pâtissier Caussade",
    "pâtissière Caussade",
    "wedding cake Caussade",
    "gâteau mariage Caussade",
    "gâteau anniversaire Caussade",
    "mignardises Caussade",
    "pâtisserie sur commande Caussade",
    "pâtissier 82300",
    "gâteau sur mesure Caussade",
    "pièce montée Caussade",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pâtissière à Caussade : Wedding Cake et Anniversaires sur Commande",
    description:
      "Wedding cakes, gâteaux d'anniversaire et mignardises à Caussade : livraison par Aurore, pâtissière artisanale installée à 25 min.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/wedding-cake-mariage-elegant-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Wedding cake artisanal livré à Caussade par Odyssée Sucrée',
      },
    ],
  },
};

const faqs: FAQItem[] = [
  {
    question: "Livrez-vous les wedding cakes directement à Caussade ?",
    answer:
      "Oui, Caussade est à environ 25 minutes de l'atelier de Puycornet. Aurore livre et monte elle-même les wedding cakes et pièces montées sur votre lieu de réception, que ce soit au centre-ville, dans un domaine des environs ou dans un mariage à domicile. Le transport et le dressage sont inclus dans le devis.",
  },
  {
    question: "Travaillez-vous avec des domaines de réception autour de Caussade ?",
    answer:
      "Oui, la zone entre Caussade, Nègrepelisse et Monteils compte plusieurs beaux lieux de réception : domaines viticoles, châteaux privés, fermes de caractère, salles communales. Aurore s'adapte à chaque configuration et prévoit le dressage du gâteau au bon moment pour qu'il reste parfait jusqu'au service.",
  },
  {
    question: "Quel gâteau choisir pour un mariage dans le Quercy ?",
    answer:
      "Le Quercy se prête très bien aux mariages champêtres et bohèmes. Un wedding cake naked cake (sans glaçage extérieur, décoré de fruits rouges et de fleurs locales) ou une pyramide de macarons aux teintes naturelles s'intègrent parfaitement aux ambiances rustiques. Pour un mariage plus traditionnel, la pièce montée en choux caramélisés reste une valeur sûre.",
  },
  {
    question: "Réalisez-vous des gâteaux d'anniversaire pour les enfants à Caussade ?",
    answer:
      "Oui, tous les thèmes enfants sont possibles : licornes, dinosaures, super-héros, Disney, Pokémon, princesses, pirates, football, sports, thèmes personnalisés. Layer cakes, number cakes, piñata cakes avec surprise, sablés décorés pour les goûters : nous réalisons tout ce dont vous rêvez pour l'anniversaire de votre enfant.",
  },
  {
    question: "Quel délai faut-il prévoir pour une commande à Caussade ?",
    answer:
      "Pour un mariage (wedding cake, pièce montée, buffet mignardises) : 3 à 6 mois à l'avance pour sécuriser la date. Pour un anniversaire personnalisé : 2 à 4 semaines. Pour un entremets ou un gâteau simple sans décoration complexe : 1 semaine peut suffire selon notre planning. Contactez-nous même tardivement, nous essayons toujours de trouver une solution.",
  },
  {
    question: "Faites-vous des entremets et tartes pour les habitants de Caussade hors événements ?",
    answer:
      "Oui, Aurore prépare aussi des entremets et tartes artisanales sur commande pour vos repas de famille, fêtes privées, ou simplement pour se faire plaisir un dimanche. Entremets 3 chocolats, tarte au citron, fraisier, tiramisu, foret noire et autres classiques revisités. Commande à passer 48 à 72h à l'avance.",
  },
  {
    question: "Peut-on vous rencontrer à Caussade ou faut-il venir à Puycornet ?",
    answer:
      "Le premier échange se fait par téléphone ou mail. Pour les mariages, une dégustation est proposée à l'atelier de Puycornet (25 min de Caussade) sur rendez-vous, afin de choisir les parfums et matérialiser votre projet avec Aurore. Pour les commandes plus simples, tout peut se faire à distance avec envoi de photos et visio si besoin.",
  },
];

export default function PatissierCaussadePage() {
  return (
    <>
      <Header />
      <CityLanding
        city="Caussade"
        slug="caussade"
        postalCode="82300"
        distanceKm={25}
        heroImage="/creations/wedding-cake-mariage-elegant-montauban.jpeg"
        heroAlt="Wedding cake artisanal livré à Caussade par Odyssée Sucrée"
        intro="Wedding cakes, gâteaux d'anniversaire, mignardises de mariage : Aurore livre et monte ses créations artisanales à Caussade et dans le Quercy, au nord du Tarn-et-Garonne."
        context={`Caussade est la porte d'entrée du Quercy, à 25 minutes de l'atelier de Puycornet. C'est une zone où Odyssée Sucrée intervient régulièrement, aussi bien pour des mariages dans les domaines du Bas-Quercy que pour des anniversaires et événements familiaux en centre-ville.

Les paysages du Quercy se prêtent parfaitement aux mariages champêtres, avec wedding cakes naked style rustique décorés de fleurs locales, pyramides de macarons aux tons naturels, ou grands buffets de mignardises servis en extérieur. Aurore connaît plusieurs domaines et lieux de réception entre Caussade, Montpezat-de-Quercy et Monteils, et s'adapte aux spécificités de chaque site.

Pour les habitants de Caussade, nous réalisons aussi toute la gamme d'entremets, tartes et créations sucrées sur commande, hors événements : repas de famille, fêtes privées, cadeaux gourmands. Chaque création est pensée en lien direct avec vous, sans intermédiaire.`}
        neighborhoods={[
          'Centre-ville de Caussade',
          'Septfonds',
          'Monteils',
          'Mirabel',
          'Montpezat-de-Quercy (10 min)',
          'Cayriech et Puylaroque',
          'Nègrepelisse (15 min)',
        ]}
        deliveryPoints={[
          'Domaines et châteaux du Bas-Quercy',
          'Salle Bonnaïs et salles des fêtes locales',
          'Fermes de caractère et gîtes de réception',
          'Mariages à domicile et en plein air',
          'Restaurants et traiteurs partenaires',
          'Anniversaires et baptêmes familiaux',
        ]}
        faqs={faqs}
        related={[
          {
            href: '/gateau-mariage-montauban',
            title: 'Gâteau et pièce montée de mariage',
            description: "Pièces montées, wedding cakes, pyramides de macarons : toute la palette mariage expliquée.",
          },
          {
            href: '/gateau-anniversaire-montauban',
            title: 'Gâteau d\'anniversaire personnalisé',
            description: "Layer cake, number cake, letter cake, piñata cake : tous les formats d'anniversaire sur mesure.",
          },
          {
            href: '/mignardises-mariage-montauban',
            title: 'Mignardises et buffet sucré',
            description: "Compléter le dessert principal avec un buffet de mignardises artisanales.",
          },
        ]}
      />
      <Footer />
      <LegalModals />
    </>
  );
}
