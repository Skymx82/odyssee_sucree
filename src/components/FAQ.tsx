'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';

// Les questions ici sont la copie exacte du JSON-LD FAQPage présent dans layout.tsx.
// Toute modification doit être répercutée des deux côtés pour que le contenu visible
// corresponde au schema indexé par Google.
const faqs = [
  {
    question: "Comment est calculé le prix d'un wedding cake à Montauban ?",
    answer:
      "Chaque wedding cake est une création unique : le prix dépend du nombre de parts, du nombre d'étages, des parfums choisis et de la complexité du travail de cake design. Il n'y a donc pas de tarif affiché sur le site. Chaque devis est personnalisé sur demande après un premier échange avec la mariée. Vous recevez votre proposition chiffrée sous 24h.",
  },
  {
    question: "Quel délai prévoir pour commander un gâteau sur mesure ?",
    answer:
      "Pour une création sur mesure, un délai minimum de 7 à 10 jours est conseillé pour les gâteaux d'anniversaire et de 4 à 8 semaines pour un wedding cake afin de réserver la date et préparer le projet ensemble.",
  },
  {
    question: "Livrez-vous les wedding cakes sur le lieu de réception ?",
    answer:
      "Oui. Aurore livre et installe personnellement chaque wedding cake sur le lieu de réception à Montauban, Moissac, Castelsarrasin, Caussade, Lafrançaise et dans tout le Tarn-et-Garonne, ainsi qu'autour de Toulouse sur demande.",
  },
  {
    question: "Faut-il un acompte à la commande ?",
    answer:
      "Oui, un acompte de 30 % est demandé à la validation de la commande pour réserver la date. Le solde est réglé à la livraison ou au retrait de la création.",
  },
  {
    question: "Proposez-vous des créations pour les anniversaires d'enfants ?",
    answer:
      "Bien sûr. Layer cakes thématiques (Stitch, Avatar, Halloween), piñata cakes surprises, number cakes : Aurore conçoit des gâteaux d'anniversaire entièrement personnalisés pour les enfants à Montauban.",
  },
  {
    question: "Où se trouve l'atelier Odyssée Sucrée ?",
    answer:
      "L'atelier d'Aurore est situé au 101 Route de l'Honor de Cos, 82220 Puycornet, à environ 25 minutes de Montauban. Les commandes se passent par téléphone ou via le formulaire de contact du site.",
  },
  {
    question: "Quelle est la formation d'Aurore ?",
    answer:
      "Aurore est titulaire du CAP Pâtissier. Ancienne professeure des écoles reconvertie par passion, elle a perfectionné son savoir-faire chez deux pâtisseries reconnues de Montauban (Mauranes et Alexandres) puis suivi récemment une formation prestigieuse spécialisée en wedding cake design.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FADADD]/5 via-transparent to-[#D8C7E8]/5" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-8 px-10 py-4 text-sm font-semibold tracking-wider uppercase"
          >
            Questions fréquentes
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-8 max-w-4xl">
            Tout savoir sur nos wedding cakes et gâteaux sur mesure
          </h2>
          <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-3xl">
            Tarifs, délais, livraison à Montauban : retrouvez toutes les réponses pour préparer sereinement
            votre commande chez Odyssée Sucrée.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-white to-[#F3E8FF]/30 rounded-2xl border border-[#D8C7E8]/30 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#2D2D2D]">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 text-[#9B7AB8] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-[#6B6B6B] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
