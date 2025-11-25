'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function ChristmasPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Vérifier si le popup a déjà été affiché dans cette session
    const popupShown = sessionStorage.getItem('christmas-popup-shown');
    
    if (!popupShown) {
      // Afficher le popup après 4 secondes
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('christmas-popup-shown', 'true');
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-4xl mx-4 w-full md:w-auto">
        <button
          onClick={closePopup}
          className="absolute -top-2 -right-2 z-10 bg-white hover:bg-gray-100 rounded-full shadow-lg p-2 border border-gray-200 transition-colors"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>
        
        <div className={`relative bg-white rounded-lg shadow-2xl transition-all duration-300 ${
          isZoomed ? 'overflow-auto max-h-[95vh]' : 'overflow-hidden'
        }`}>
          <div 
            className={`cursor-pointer transition-transform duration-300 ${
              isZoomed ? 'transform scale-150 origin-top-left p-4' : ''
            }`}
            onClick={toggleZoom}
          >
            <Image
              src="/pub.png"
              alt="Bûches de Noël 2025 - Odyssée Sucrée"
              width={800}
              height={1000}
              className={`w-full h-auto transition-all duration-300 ${
                isZoomed ? 'max-h-none' : 'max-h-[90vh] object-contain'
              }`}
              priority
            />
          </div>
          {!isZoomed && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              Cliquez pour zoomer
            </div>
          )}
        </div>
      </div>
    </div>
  );
}