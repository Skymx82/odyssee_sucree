import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import CityLanding from '@/components/CityLanding';
import { FAQItem } from '@/components/FAQAccordion';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/patissier-moissac`;

export const metadata: Metadata = {
  title: "Pâtissière à Moissac : Wedding Cake, Anniversaire et Mignardises",
  description:
    "Pâtissière artisanale à Moissac (82200) : wedding cakes, gâteaux d'anniversaire, mignardises de mariage sur commande. Livraison par Aurore depuis Puycornet, à 20 min. Devis gratuit sous 24h.",
  keywords: [
    "pâtissier Moissac",
    "pâtissière Moissac",
    "wedding cake Moissac",
    "gâteau mariage Moissac",
    "gâteau anniversaire Moissac",
    "mignardises Moissac",
    "pâtisserie sur commande Moissac",
    "pâtissier 82200",
    "gâteau sur mesure Moissac",
    "pièce montée Moissac",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pâtissière à Moissac : Wedding Cake et Anniversaires sur Commande",
    description:
      "Wedding cakes, gâteaux d'anniversaire et mignardises à Moissac : livraison par Aurore, pâtissière artisanale installée à 20 min.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/wedding-cake-mariage-elegant-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Wedding cake artisanal livré à Moissac par Odyssée Sucrée',
      },
    ],
  },
};

const faqs: FAQItem[] = [
  {
    question: "Livrez-vous les wedding cakes directement à Moissac ?",
    answer:
      "Oui, Moissac se trouve à environ 20 minutes de l'atelier de Puycornet. Aurore livre et monte personnellement les wedding cakes et pièces montées sur votre lieu de réception : domaine viticole, abbaye, salle des fêtes, mariage à domicile. Le transport d'un gâteau à étages est inclus dans le devis.",
  },
  {
    question: "Quels lieux de réception à Moissac connaissez-vous ?",
    answer:
      "Moissac compte plusieurs lieux de réception très appréciés pour les mariages : domaines viticoles du Tarn-et-Garonne, abbaye Saint-Pierre pour les cérémonies, salles communales, réceptions dans les vergers des Côteaux du Quercy. Aurore s'adapte à chaque contrainte logistique (accès, électricité, horaire de dressage).",
  },
  {
    question: "Combien de temps à l'avance faut-il commander un gâteau pour un mariage à Moissac ?",
    answer:
      "Pour un wedding cake ou une pièce montée de mariage : 3 à 6 mois avant la date, surtout sur les week-ends de mai à septembre. Les créneaux se remplissent vite. Pour un gâteau d'anniversaire ou un buffet plus modeste : 2 à 4 semaines suffisent. N'hésitez pas à nous contacter même à court terme, nous essayons toujours de trouver une solution.",
  },
  {
    question: "Réalisez-vous des gâteaux pour les mariages dans les domaines viticoles autour de Moissac ?",
    answer:
      "Oui régulièrement. Les domaines viticoles du secteur Moissac, Lauzerte, Montjoi sont des lieux très demandés pour les mariages champêtres et chic. Aurore livre sur place avec un wedding cake à étages, une pyramide de macarons ou un buffet de mignardises selon le style souhaité.",
  },
  {
    question: "Quel style de gâteau pour un mariage traditionnel à Moissac ?",
    answer:
      "Pour un mariage traditionnel dans le Tarn-et-Garonne, la pièce montée en choux caramélisés reste la référence. Pour une touche plus moderne, un wedding cake à 3 étages recouvert de crème au beurre avec fleurs fraîches locales fonctionne très bien. Aurore vous conseille selon votre thème et le profil de vos invités.",
  },
  {
    question: "Peut-on vous rencontrer à Moissac ou faut-il venir à l'atelier ?",
    answer:
      "Le premier échange se fait par téléphone ou mail pour définir votre projet. La dégustation (pour les mariages) a lieu à l'atelier de Puycornet, à 20 minutes de Moissac. C'est aussi l'occasion de voir des exemples de décors et de matérialiser votre gâteau avec Aurore.",
  },
  {
    question: "Proposez-vous des gâteaux d'anniversaire spécifiques pour les enfants de Moissac ?",
    answer:
      "Oui, tous les thèmes sont possibles : Disney, super-héros, licornes, Pokémon, Minecraft, thèmes personnalisés. Layer cakes, letter cakes ou piñata cakes avec surprise à l'intérieur. Nous réalisons également des sablés décorés personnalisés pour les goûters d'anniversaire.",
  },
];

export default function PatissierMoissacPage() {
  return (
    <>
      <Header />
      <CityLanding
        city="Moissac"
        slug="moissac"
        postalCode="82200"
        distanceKm={20}
        heroImage="/creations/wedding-cake-mariage-elegant-montauban.jpeg"
        heroAlt="Wedding cake artisanal livré à Moissac par Odyssée Sucrée"
        intro="Wedding cakes, gâteaux d'anniversaire, mignardises de mariage : Aurore livre et monte ses créations artisanales directement chez vous à Moissac et dans le secteur du Quercy Blanc."
        context={`Moissac est l'une de nos zones d'intervention privilégiées. À seulement 20 minutes de l'atelier de Puycornet, la ville est une référence pour les mariages en Tarn-et-Garonne : abbaye Saint-Pierre classée au patrimoine mondial de l'UNESCO, domaines viticoles des Côteaux du Quercy, vergers, salles de réception champêtres.

Depuis plusieurs années, Odyssée Sucrée livre régulièrement des wedding cakes, pièces montées et buffets de mignardises pour les mariages célébrés à Moissac. Aurore connaît bien les contraintes logistiques locales (accès aux domaines, horaires de dressage, températures estivales) et anticipe chaque détail pour que le gâteau arrive et s'installe dans les meilleures conditions.

Moissac est aussi très demandée pour les anniversaires personnalisés, les baptêmes et les communions : les créations sur mesure voyagent aussi bien vers le centre-ville que vers les hameaux alentour.`}
        neighborhoods={[
          'Centre-ville de Moissac',
          'Saint-Benoît',
          'Lizac',
          'Durfort-Lacapelette',
          'Castelsagrat',
          'Lauzerte (10 min supplémentaires)',
          'Malause et Boudou',
        ]}
        deliveryPoints={[
          'Domaines viticoles des Côteaux du Quercy',
          'Abbaye Saint-Pierre de Moissac',
          'Salle Hanin et salles communales',
          'Mariages à domicile et en plein air',
          'Vergers et châteaux privés',
          'Restaurants et traiteurs partenaires',
        ]}
        faqs={faqs}
        related={[
          {
            href: '/wedding-cake-montauban',
            title: 'Wedding cake sur mesure',
            description: "Le guide complet pour tout savoir sur le wedding cake à étages et ses alternatives modernes.",
          },
          {
            href: '/gateau-mariage-montauban',
            title: 'Gâteau et pièce montée de mariage',
            description: "Pièces montées, wedding cakes, pyramides de macarons : toute la palette mariage en un seul endroit.",
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
