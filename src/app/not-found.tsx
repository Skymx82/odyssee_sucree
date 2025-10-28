'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Cake } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FADADD]/10 to-[#F3E8FF]/20 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FADADD]/5 via-transparent to-[#D8C7E8]/5" />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#FADADD]/20 blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-[#D8C7E8]/20 blur-2xl"
      />

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center">
          {/* 404 Number with cake icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Cake className="w-16 h-16 md:w-20 md:h-20 text-[#9B7AB8]" />
              </motion.div>
              <h1 className="text-8xl md:text-9xl font-bold text-[#2D2D2D]">
                404
              </h1>
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  delay: 0.5,
                }}
              >
                <Cake className="w-16 h-16 md:w-20 md:h-20 text-[#FADADD]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Oups ! Cette page n'existe pas
            </h2>
            <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              On dirait que cette création sucrée s'est envolée... 
              <br />
              Mais ne vous inquiétez pas, nous avons plein d'autres délices à vous proposer !
            </p>
          </motion.div>

          {/* Decorative image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/logo.png"
                alt="Odyssée Sucrée"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9B7AB8]/20 to-transparent" />
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <Link href="/#creations">
                <Cake className="w-5 h-5 mr-2" />
                Voir nos créations
              </Link>
            </Button>
          </motion.div>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <button
              onClick={() => window.history.back()}
              className="text-[#9B7AB8] hover:text-[#7A5A98] transition-colors flex items-center gap-2 mx-auto group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg font-medium">Retour à la page précédente</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
