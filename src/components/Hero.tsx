'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  
  // Parallax effects
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="accueil">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-[120vh]"
      >
        <div className="relative w-full h-full">
          <Image
            src="/photos site/wedding cake (2).jpeg"
            alt="Wedding Cake - Odyssée Sucrée"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          {/* Gradient Overlay - Plus sombre pour meilleur contraste */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#9B7AB8]/20 to-[#FADADD]/20" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
          >
            L'art du cake design
            <br />
            <span className="text-[#FADADD] drop-shadow-[0_2px_8px_rgba(250,218,221,0.8)]">
              sur mesure
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Des créations élégantes et gourmandes, façonnées avec passion
            pour sublimer vos moments les plus précieux.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            {/* Primary CTA */}
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-10 py-7 text-base font-semibold shadow-2xl hover:shadow-[#9B7AB8]/50 hover:scale-105 transition-all"
            >
              <a href="#creations">
                Découvrir nos créations
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

            {/* Secondary CTA */}
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full px-10 py-7 text-base font-semibold bg-white/30 backdrop-blur-md text-white border-2 border-white/70 hover:bg-white hover:text-[#9B7AB8] shadow-lg"
            >
              <a href="#contact">
                Commander sur mesure
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
