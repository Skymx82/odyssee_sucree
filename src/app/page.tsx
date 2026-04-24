import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Zones from '@/components/Zones';
import Conseils from '@/components/Conseils';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LegalModals from '@/components/LegalModals';

const SITE_URL = 'https://www.odysseesucree.com';

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Comment est calculé le prix d'un wedding cake à Montauban ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chaque wedding cake est une création unique : le prix dépend du nombre de parts, du nombre d'étages, des parfums choisis et de la complexité du travail de cake design. Il n'y a donc pas de tarif affiché sur le site. Chaque devis est personnalisé sur demande après un premier échange avec la mariée. La proposition chiffrée est envoyée sous 24h.",
      },
    },
    {
      '@type': 'Question',
      name: 'Quel délai prévoir pour commander un gâteau sur mesure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pour une création sur mesure, un délai minimum de 7 à 10 jours est conseillé pour les gâteaux d'anniversaire et de 4 à 8 semaines pour un wedding cake afin de réserver la date et préparer le projet ensemble.",
      },
    },
    {
      '@type': 'Question',
      name: 'Livrez-vous les wedding cakes sur le lieu de réception ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Aurore livre et installe personnellement chaque wedding cake sur le lieu de réception à Montauban, Moissac, Castelsarrasin, Caussade, Lafrançaise et dans tout le Tarn-et-Garonne, ainsi qu'autour de Toulouse sur demande.",
      },
    },
    {
      '@type': 'Question',
      name: 'Faut-il un acompte à la commande ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui, un acompte de 30 % est demandé à la validation de la commande pour réserver la date. Le solde est réglé à la livraison ou au retrait de la création.",
      },
    },
    {
      '@type': 'Question',
      name: "Proposez-vous des créations pour les anniversaires d'enfants ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Bien sûr. Layer cakes thématiques (Stitch, Avatar, Halloween), piñata cakes surprises, number cakes : Aurore conçoit des gâteaux d'anniversaire entièrement personnalisés pour les enfants à Montauban.",
      },
    },
    {
      '@type': 'Question',
      name: "Où se trouve l'atelier Odyssée Sucrée ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "L'atelier d'Aurore est situé au 101 Route de l'Honor de Cos, 82220 Puycornet, à environ 25 minutes de Montauban. Les commandes se passent par téléphone ou via le formulaire de contact du site.",
      },
    },
    {
      '@type': 'Question',
      name: "Quelle est la formation d'Aurore ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Aurore est titulaire du CAP Pâtissier. Ancienne professeure des écoles reconvertie par passion, elle a perfectionné son savoir-faire chez deux pâtisseries reconnues de Montauban (Mauranes et Alexandres) puis suivi récemment une formation prestigieuse spécialisée en wedding cake design.",
      },
    },
  ],
};

const homeBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbSchema) }}
      />
      <main className="relative">
        <Header />
        <Hero />
        <Gallery />
        <About />
        <Zones />
        <Conseils />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
      <LegalModals />
    </>
  );
}
