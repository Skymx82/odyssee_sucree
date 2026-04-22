'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Comment choisir son wedding cake en 2026 ?',
    href: '/journal/choisir-wedding-cake-2026',
    excerpt:
      "Les tendances mariage 2026, les styles à privilégier, les étages selon le nombre d'invités et les pièges à éviter quand on commande son wedding cake.",
    readTime: '6 min de lecture',
  },
  {
    title: 'Wedding cake ou pièce montée : que choisir ?',
    href: '/journal/wedding-cake-vs-piece-montee',
    excerpt:
      "Notre comparatif complet entre les deux grands classiques du gâteau de mariage. Budget, esthétique, tradition, nombre de parts, tout ce qui sépare les deux formats.",
    readTime: '5 min de lecture',
  },
  {
    title: 'Gâteau d\'anniversaire : les tendances 2026',
    href: '/journal/tendances-gateau-anniversaire-2026',
    excerpt:
      "Layer cake, number cake, letter cake, piñata cake : nos inspirations pour un gâteau d'anniversaire mémorable cette année, pour enfants comme pour adultes.",
    readTime: '7 min de lecture',
  },
];

export default function Conseils() {
  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="conseils"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
          >
            Conseils et inspirations
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6 max-w-3xl">
            Les conseils d'Aurore pour votre gâteau
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-2xl">
            Avant de commander votre wedding cake, votre pièce montée ou votre gâteau d'anniversaire,
            prenez le temps de lire nos guides pour faire le meilleur choix.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={article.href}
                className="block h-full bg-gradient-to-br from-white to-[#F3E8FF]/30 rounded-2xl p-8 shadow-md hover:shadow-xl border border-[#D8C7E8]/30 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-[#9B7AB8] font-semibold uppercase tracking-wider mb-3">
                  {article.readTime}
                </p>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#9B7AB8] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#9B7AB8]">
                  Lire l'article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[#9B7AB8] font-semibold hover:gap-3 transition-all"
          >
            Voir tous les articles du journal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
