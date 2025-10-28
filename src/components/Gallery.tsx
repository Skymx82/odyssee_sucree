'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { creations, categories } from '@/data/creations';
import { Plus } from 'lucide-react';
import Lightbox from '@/components/Lightbox';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredCreations = selectedCategory === 'all'
    ? creations
    : creations.filter(c => c.category === selectedCategory);

  const displayedCreations = showAll ? filteredCreations : filteredCreations.slice(0, 12);
  const hasMore = filteredCreations.length > 12;

  return (
    <section className="py-32 bg-gradient-to-b from-white to-[#F3E8FF]/30" id="creations">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Notre Savoir-Faire
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-8 max-w-4xl">
            Nos Créations
          </h2>
          <p className="text-xl text-[#6B6B6B] leading-relaxed max-w-3xl">
            Découvrez notre collection de pâtisseries artisanales, créées avec passion et savoir-faire
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-5 mb-20"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Button
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setShowAll(false);
                }}
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-105"
              >
                {category.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedCreations.map((creation, index) => (
              <motion.div
                key={creation.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                onClick={() => setSelectedImage(creation.image)}
              >
                <Image
                  src={creation.image}
                  alt={creation.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {creation.name}
                    </h3>
                    <Badge 
                      variant="secondary" 
                      className="bg-white/20 backdrop-blur-sm text-white border-0"
                    >
                      {categories.find(c => c.id === creation.category)?.label}
                    </Badge>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          isOpen={selectedImage !== null}
          imageSrc={selectedImage || ''}
          onClose={() => setSelectedImage(null)}
        />

        {/* Show More Button */}
        {!showAll && hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-16"
          >
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg" 
              className="rounded-full px-10 py-6 text-base font-semibold hover:scale-105"
            >
              <Plus className="w-5 h-5 mr-2" />
              Afficher plus ({filteredCreations.length - 12} créations)
            </Button>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mt-24"
        >
          <p className="text-xl text-[#6B6B6B] mb-10">
            Envie d'une création sur mesure ?
          </p>
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-12 py-7 text-lg font-semibold shadow-xl hover:scale-105"
          >
            <a href="#contact">
              Commander une création
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
