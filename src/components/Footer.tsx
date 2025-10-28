'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    entreprise: [
      { label: 'À propos', href: '#apropos' },
      { label: 'Nos créations', href: '#creations' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Mentions légales', href: '#mentions-legales' },
      { label: 'CGV', href: '#cgv' },
      { label: 'Politique de confidentialité', href: '#confidentialite' },
      { label: 'Politique des cookies', href: '#cookies' },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-[#2D2D2D] to-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Odyssée Sucrée"
                width={50}
                height={50}
                className="object-contain"
              />
              <h3 className="text-2xl font-bold text-[#9B7AB8]">
                Odyssée Sucrée
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pâtisserie artisanale d'exception. Créations sur mesure pour vos événements.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/odysseesucree"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#9B7AB8] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/odyssee_sucree/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#9B7AB8] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#FADADD]">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#9B7AB8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#FADADD]">Informations légales</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#9B7AB8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#FADADD]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#9B7AB8]" />
                <span className="text-sm">
                  101 Route de l'Honor de Cos<br />
                  82220 Puycornet
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#9B7AB8]" />
                <a href="tel:+33634849182" className="hover:text-[#9B7AB8] transition-colors text-sm">
                  06 34 84 91 82
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#9B7AB8]" />
                <a href="mailto:odysseesucree82@gmail.com" className="hover:text-[#9B7AB8] transition-colors text-sm">
                  odysseesucree82@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Odyssée Sucrée. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              SIRET : <span className="text-gray-300">938 763 752 00012</span> | 
              Auto-entrepreneur
            </p>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            Site réalisé par{' '}
            <a 
              href="https://www.tolarys-toulouse.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9B7AB8] hover:underline font-medium"
            >
              Tolarys
            </a>
          </p>
        </div>
      </div>

      {/* RGPD Notice */}
      <div className="bg-black/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-gray-400 text-xs text-center">
            🔒 Vos données personnelles sont protégées conformément au RGPD. 
            En utilisant notre formulaire de contact, vous acceptez notre{' '}
            <a href="#confidentialite" className="text-[#9B7AB8] hover:underline">
              politique de confidentialité
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
