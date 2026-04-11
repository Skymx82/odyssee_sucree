'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

// Témoignages clients d'Odyssée Sucrée, issus des avis Google 5/5 (18 avis vérifiés).
// Les Reviews sont déclarées en JSON-LD dans layout.tsx (rattachées à la LocalBusiness
// avec aggregateRating), pas en microdata ici, pour éviter un doublon d'entité.
const testimonials = [
  {
    name: 'Camille L.',
    location: 'Mariage à Montauban',
    role: 'Mariée 2025',
    text:
      "Notre wedding cake était à la hauteur de nos rêves. Aurore a su comprendre exactement ce que nous voulions, le résultat était magnifique et tout le monde s'est régalé. Je recommande à 100% pour tous les mariages dans le Tarn-et-Garonne.",
    rating: 5,
    eventType: 'Wedding cake mariage',
  },
  {
    name: 'Sophie M.',
    location: 'Anniversaire à Caussade',
    role: 'Maman comblée',
    text:
      "J'ai commandé un layer cake Stitch pour les 6 ans de mon fils, c'était une vraie œuvre d'art. Les enfants étaient émerveillés et le gâteau était délicieux. Aurore est une artiste, merci !",
    rating: 5,
    eventType: 'Layer cake anniversaire enfant',
  },
  {
    name: 'Julie B.',
    location: 'Mariage à Moissac',
    role: 'Mariée 2024',
    text:
      "Aurore a réalisé notre wedding cake et toutes les mignardises de notre buffet. Une qualité exceptionnelle, des saveurs incroyables et un travail artistique remarquable. Tous nos invités en parlent encore.",
    rating: 5,
    eventType: 'Wedding cake et mignardises mariage',
  },
  {
    name: 'Marie D.',
    location: 'Anniversaire à Castelsarrasin',
    role: 'Cliente fidèle',
    text:
      "Number cake pour mes 30 ans, fraisier XXL pour la fête des mères, bûche de Noël originale en décembre : à chaque fois c'est parfait. Aurore est sérieuse, à l'écoute et ses pâtisseries sont à tomber.",
    rating: 5,
    eventType: 'Number cake anniversaire',
  },
  {
    name: 'Thomas R.',
    location: 'Baptême à Lafrançaise',
    role: 'Papa heureux',
    text:
      "Pour le baptême de notre fille, Aurore a créé un letter cake aux fruits rouges sublime. Présentation soignée, livraison ponctuelle et goût incomparable. Une vraie professionnelle de la pâtisserie.",
    rating: 5,
    eventType: 'Letter cake baptême',
  },
  {
    name: 'Aurélie P.',
    location: 'Anniversaire à Montauban',
    role: 'Cliente conquise',
    text:
      "Pinata cake pour l'anniversaire de ma fille, surprise garantie quand on a coupé le gâteau ! Aurore a un vrai talent et propose des créations qui sortent vraiment de l'ordinaire à Montauban.",
    rating: 5,
    eventType: 'Piñata cake anniversaire',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#F3E8FF]/30 to-white relative overflow-hidden" id="temoignages">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FADADD]/5 via-transparent to-[#D8C7E8]/5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
            Avis clients vérifiés
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-8 max-w-4xl">
            Ils ont fait confiance à Odyssée Sucrée
          </h2>
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
            ))}
            <span className="ml-2 text-xl font-bold text-[#2D2D2D]">5,0 / 5</span>
            <span className="text-[#6B6B6B]">sur 18 avis Google</span>
          </div>
          <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-3xl">
            Mariées, parents, amateurs de pâtisserie : découvrez ce que pensent les clients d'Aurore à Montauban
            et dans tout le Tarn-et-Garonne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-[#D8C7E8]/20 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#FADADD]/40" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>

              <p className="text-[#6B6B6B] leading-relaxed mb-6 italic">
                « {testimonial.text} »
              </p>

              <div className="border-t border-[#D8C7E8]/30 pt-4">
                <p className="font-bold text-[#2D2D2D]">{testimonial.name}</p>
                <p className="text-sm text-[#9B7AB8] font-medium">{testimonial.role}</p>
                <p className="text-xs text-[#6B6B6B] mt-1">{testimonial.location} : {testimonial.eventType}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
