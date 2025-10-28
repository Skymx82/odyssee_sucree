'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      icon: Heart,
      title: "Plus de 15 ans d'enseignement",
      description: "Professeure des écoles passionnée, maman de 3 enfants, avec une passion secrète pour la pâtisserie"
    },
    {
      icon: Sparkles,
      title: "Un rêve qui devient réalité",
      description: "Sur un coup de cœur, la décision de tout changer pour suivre sa passion"
    },
    {
      icon: Award,
      title: "Formation d'excellence",
      description: "Obtention du CAP Pâtissier et expérience chez Mauranes et Alexandres à Montauban"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="apropos">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FADADD]/10 via-transparent to-[#D8C7E8]/10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <Badge 
            variant="secondary" 
            className="mb-8 px-10 py-4 text-sm font-semibold tracking-wider uppercase"
          >
            Mon Histoire
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-8 max-w-4xl">
            Une Passion Devenue Réalité
          </h2>
          <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-3xl">
            De l'enseignement à la pâtisserie, l'histoire d'une reconversion guidée par le cœur
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/photos site/wedding cake (2).jpeg"
                alt="Aurore - Fondatrice d'Odyssée Sucrée"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#9B7AB8]/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#2D2D2D]">Fait avec amour</p>
                  <p className="text-sm text-[#6B6B6B]">Depuis 2023</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#2D2D2D]">
                L'histoire d'Aurore
              </h3>
              
              <div className="space-y-4 text-lg text-[#6B6B6B] leading-relaxed">
                <p>
                  Après plus de <span className="font-semibold text-[#9B7AB8]">15 ans d'enseignement</span> en tant que professeure des écoles, 
                  maman de 3 enfants, j'ai toujours eu une passion secrète : <span className="font-semibold text-[#9B7AB8]">la pâtisserie</span>.
                </p>
                
                <p>
                  Chaque gâteau d'anniversaire, chaque goûter préparé avec amour pour mes enfants, 
                  était une occasion de créer, d'innover, de faire briller les yeux de ceux que j'aime.
                </p>
                
                <p>
                  Un jour, sur un <span className="font-semibold text-[#9B7AB8]">coup de cœur</span>, j'ai pris 
                  la décision de tout changer. De transformer cette passion en métier. De vivre mon rêve.
                </p>
                
                <p>
                  J'ai obtenu mon <span className="font-semibold text-[#9B7AB8]">CAP Pâtissier</span>, puis j'ai eu 
                  la chance de travailler chez <span className="font-semibold text-[#9B7AB8]">Mauranes et Alexandres</span> à 
                  Montauban, des pâtisseries très réputées où j'ai perfectionné mon savoir-faire.
                </p>
                
                <p className="text-xl font-semibold text-[#2D2D2D] pt-4">
                  Aujourd'hui, <span className="bg-gradient-to-r from-[#FADADD] to-[#D8C7E8] bg-clip-text text-transparent">Odyssée Sucrée</span> est 
                  le fruit de ce voyage, de cette aventure sucrée qui ne fait que commencer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-white to-[#F3E8FF]/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D8C7E8]/20">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FADADD] to-[#D8C7E8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#2D2D2D] mb-3">
                  {milestone.title}
                </h4>
                <p className="text-[#6B6B6B] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#FADADD]/20 to-[#D8C7E8]/20 rounded-3xl p-12 border border-[#D8C7E8]/30">
            <blockquote className="text-2xl md:text-3xl font-serif text-[#2D2D2D] italic leading-relaxed">
              "Chaque création est une nouvelle aventure, une odyssée sucrée 
              où passion et savoir-faire se rencontrent pour créer des moments inoubliables."
            </blockquote>
            <p className="mt-6 text-lg font-semibold text-[#9B7AB8]">
              — Aurore, Fondatrice d'Odyssée Sucrée
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
