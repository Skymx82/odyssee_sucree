'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { MapPin, ArrowRight } from 'lucide-react';

const zones = [
  {
    city: 'Montauban',
    href: '/wedding-cake-montauban',
    distance: '30 min',
    description: 'Préfecture du Tarn-et-Garonne, zone principale d\'intervention.',
  },
  {
    city: 'Moissac',
    href: '/patissier-moissac',
    distance: '20 min',
    description: 'Abbaye classée UNESCO, domaines viticoles du Quercy Blanc.',
  },
  {
    city: 'Castelsarrasin',
    href: '/patissier-castelsarrasin',
    distance: '30 min',
    description: 'Sous-préfecture, salles et châteaux de réception.',
  },
  {
    city: 'Caussade',
    href: '/patissier-caussade',
    distance: '25 min',
    description: 'Porte du Quercy, mariages champêtres et domaines.',
  },
];

export default function Zones() {
  return (
    <section
      className="py-24 bg-gradient-to-b from-white to-[#F3E8FF]/30 relative overflow-hidden"
      id="zones"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Badge
            variant="secondary"
            className="mb-6 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
          >
            Zones d'intervention
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6 max-w-3xl">
            Livraison de gâteaux dans tout le Tarn-et-Garonne
          </h2>
          <p className="text-lg text-[#6B6B6B] leading-relaxed max-w-2xl">
            Installée à Puycornet, Aurore livre et dresse elle-même vos wedding cakes et pièces montées
            à Montauban, Moissac, Castelsarrasin, Caussade et dans tout le département.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={zone.href}
                className="block h-full bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-[#D8C7E8]/30 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2D2D] group-hover:text-[#9B7AB8] transition-colors">
                      {zone.city}
                    </h3>
                    <p className="text-xs text-[#9B7AB8] font-semibold uppercase tracking-wider">
                      {zone.distance}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                  {zone.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#9B7AB8]">
                  Voir la page
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-[#6B6B6B] mt-10">
          Nègrepelisse, Lafrançaise, Beaumont-de-Lomagne, Valence d'Agen, Lauzerte, Monclar-de-Quercy et
          autres communes du Tarn-et-Garonne : n'hésitez pas à nous contacter pour vérifier la zone de
          livraison de votre événement.
        </p>
      </div>
    </section>
  );
}
