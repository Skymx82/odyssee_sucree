import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';
import CityLanding from '@/components/CityLanding';
import { FAQItem } from '@/components/FAQAccordion';

const SITE_URL = 'https://www.odysseesucree.com';
const PAGE_URL = `${SITE_URL}/patissier-castelsarrasin`;

export const metadata: Metadata = {
  title: "Pâtissière à Castelsarrasin : Wedding Cake, Anniversaire et Mignardises",
  description:
    "Pâtissière artisanale à Castelsarrasin (82100) : wedding cakes, gâteaux d'anniversaire, mignardises de mariage sur commande. Livraison par Aurore depuis Puycornet. Devis gratuit sous 24h.",
  keywords: [
    "pâtissier Castelsarrasin",
    "pâtissière Castelsarrasin",
    "wedding cake Castelsarrasin",
    "gâteau mariage Castelsarrasin",
    "gâteau anniversaire Castelsarrasin",
    "mignardises Castelsarrasin",
    "pâtisserie sur commande Castelsarrasin",
    "pâtissier 82100",
    "gâteau sur mesure Castelsarrasin",
    "pièce montée Castelsarrasin",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pâtissière à Castelsarrasin : Wedding Cake et Anniversaires sur Commande",
    description:
      "Wedding cakes, gâteaux d'anniversaire et mignardises à Castelsarrasin : livraison par Aurore, pâtissière artisanale installée à 30 min.",
    url: PAGE_URL,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/creations/wedding-cake-mariage-3-etages-montauban.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Wedding cake artisanal livré à Castelsarrasin par Odyssée Sucrée',
      },
    ],
  },
};

const faqs: FAQItem[] = [
  {
    question: "Livrez-vous les wedding cakes directement à Castelsarrasin ?",
    answer:
      "Oui, Castelsarrasin est à environ 30 minutes de l'atelier de Puycornet. Aurore livre et monte personnellement les wedding cakes, pièces montées et buffets de mignardises sur votre lieu de réception. Le transport et le dressage sur place sont inclus dans le devis.",
  },
  {
    question: "Quels types d'événements couvrez-vous à Castelsarrasin ?",
    answer:
      "Tous les événements familiaux et privés : mariages, anniversaires, baptêmes, communions, demandes en mariage, fiançailles, anniversaires d'entreprise, séminaires. Aurore réalise aussi bien des pièces principales (wedding cake, pièce montée) que des buffets de mignardises pour les réceptions de 20 à 200 invités.",
  },
  {
    question: "Quels sont les délais pour commander un gâteau à Castelsarrasin ?",
    answer:
      "Pour un wedding cake ou une pièce montée : idéalement 3 à 6 mois à l'avance pour garantir la date, surtout entre avril et octobre. Pour un gâteau d'anniversaire sur mesure : comptez 2 à 4 semaines. Les commandes de dernière minute sont parfois possibles, contactez-nous pour vérifier les disponibilités.",
  },
  {
    question: "Réalisez-vous des gâteaux pour les salles des fêtes autour de Castelsarrasin ?",
    answer:
      "Oui, les salles des fêtes communales et les salles de réception privées autour de Castelsarrasin sont des lieux où nous intervenons souvent. Aurore connaît les contraintes courantes (frigo disponible ou non, horaire du dressage, accès). Le wedding cake est installé juste avant l'arrivée des invités pour garantir la fraîcheur.",
  },
  {
    question: "Proposez-vous des alternatives au wedding cake classique pour Castelsarrasin ?",
    answer:
      "Bien sûr. Selon votre style, nous proposons : la pièce montée en choux caramélisés (tradition française), la pyramide de macarons (moderne et photogénique), le gâteau partagé ou naked cake (convivial, intime), ou un grand buffet de mignardises en complément ou seul. Certains mariages combinent plusieurs formats.",
  },
  {
    question: "Faites-vous des gâteaux d'anniversaire pour adultes à Castelsarrasin ?",
    answer:
      "Oui, tous âges confondus. Les number cakes (en forme d'âge) sont très demandés pour les 30, 40, 50, 60, 70 ans. Les letter cakes (initiales) fonctionnent très bien pour les anniversaires thématiques. Et les layer cakes sur mesure permettent toutes les personnalisations (photo comestible, thème professionnel, couleurs d'entreprise).",
  },
  {
    question: "Peut-on commander un gâteau sans gluten ou sans lactose à Castelsarrasin ?",
    answer:
      "Oui, sur demande. Nous réalisons des gâteaux sans gluten, sans lactose, ou adaptés à d'autres allergies. Pour les grandes pièces (wedding cake), il est parfois plus pratique de faire un gâteau principal classique et un gâteau individuel adapté pour la ou les personnes concernées. Signalez simplement les allergies dès le premier échange.",
  },
];

export default function PatissierCastelsarrasinPage() {
  return (
    <>
      <Header />
      <CityLanding
        city="Castelsarrasin"
        slug="castelsarrasin"
        postalCode="82100"
        distanceKm={30}
        heroImage="/creations/wedding-cake-mariage-3-etages-montauban.jpeg"
        heroAlt="Wedding cake artisanal livré à Castelsarrasin par Odyssée Sucrée"
        intro="Wedding cakes, gâteaux d'anniversaire, mignardises de mariage : Aurore livre et monte ses créations artisanales à Castelsarrasin et dans les communes alentour du Tarn-et-Garonne."
        context={`Castelsarrasin, sous-préfecture du Tarn-et-Garonne, est l'une des zones régulières d'intervention d'Odyssée Sucrée. À environ 30 minutes de l'atelier de Puycornet, la ville et sa couronne accueillent chaque année des dizaines de mariages, anniversaires et événements familiaux pour lesquels Aurore conçoit des gâteaux sur mesure.

Les salles communales, les domaines privés, les restaurants et les réceptions à domicile sont autant de lieux où les wedding cakes et pièces montées sont livrés, installés puis dressés sur place. Le transport des gâteaux à étages demande une logistique précise : Aurore apporte elle-même le gâteau, le monte dans les meilleures conditions et vérifie la tenue avant de partir.

Castelsarrasin est aussi une ville où les gâteaux d'anniversaire personnalisés ont beaucoup de succès : layer cakes pour les enfants, number cakes pour les anniversaires marquants, letter cakes pour les événements thématiques. Tous les styles sont possibles, avec livraison à domicile ou sur votre lieu de fête.`}
        neighborhoods={[
          'Centre-ville de Castelsarrasin',
          'Saint-Jean-de-Cornac',
          'Les Deux-Canaux',
          'La Rode',
          'Moissac (15 min)',
          'Saint-Nicolas-de-la-Grave',
          'Lavit',
        ]}
        deliveryPoints={[
          'Salle du Grand Chêne et salles communales',
          'Domaines viticoles et châteaux privés',
          'Restaurants et traiteurs partenaires',
          'Mariages à domicile',
          'Réceptions en plein air',
          'Anniversaires et fêtes familiales',
        ]}
        faqs={faqs}
        related={[
          {
            href: '/wedding-cake-montauban',
            title: 'Wedding cake sur mesure',
            description: "Le guide complet pour choisir votre wedding cake à étages : styles, étages, parfums, fleurs.",
          },
          {
            href: '/gateau-anniversaire-montauban',
            title: 'Gâteau d\'anniversaire personnalisé',
            description: "Layer cake, number cake, letter cake, piñata cake : tous les formats d'anniversaire sur mesure.",
          },
          {
            href: '/mignardises-mariage-montauban',
            title: 'Mignardises et buffet sucré',
            description: "Buffets de mignardises pour mariages : macarons, sablés personnalisés, mini-tartelettes.",
          },
        ]}
      />
      <Footer />
      <LegalModals />
    </>
  );
}
