'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

type SubItem = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: SubItem[] };

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Accueil', href: '/#accueil' },
    {
      label: 'Mariage',
      children: [
        { label: 'Wedding cake', href: '/wedding-cake-montauban' },
        { label: 'Gâteau de mariage', href: '/gateau-mariage-montauban' },
        { label: 'Pièce montée', href: '/piece-montee-montauban' },
        { label: 'Mignardises et buffet', href: '/mignardises-mariage-montauban' },
      ],
    },
    {
      label: 'Anniversaire',
      children: [
        { label: 'Vue d\'ensemble', href: '/gateau-anniversaire-montauban' },
        { label: 'Layer cake', href: '/gateau-anniversaire-montauban#layer-cake' },
        { label: 'Number cake', href: '/gateau-anniversaire-montauban#number-cake' },
        { label: 'Letter cake', href: '/gateau-anniversaire-montauban#letter-cake' },
        { label: 'Piñata cake', href: '/gateau-anniversaire-montauban#pinata-cake' },
      ],
    },
    { label: 'Pâtisserie Montauban', href: '/patisserie-montauban' },
    { label: 'Créations', href: '/#creations' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 shadow-sm'
          : 'bg-white/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/#accueil"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 flex items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="Odyssée Sucrée Logo"
              width={50}
              height={50}
              style={{ width: 'auto', height: '50px' }}
              className="object-contain"
            />
            <h1 className="text-2xl lg:text-3xl font-bold text-[#9B7AB8]">
              Odyssée Sucrée
            </h1>
          </motion.a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6">
            {navItems.map((item, index) => {
              if (item.children) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleEnter(item.label)}
                    onMouseLeave={handleLeave}
                  >
                    <motion.button
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-1 text-[#2D2D2D] hover:text-[#9B7AB8] transition-colors duration-300 text-sm font-medium group"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9B7AB8] transition-all duration-300 group-hover:w-full" />
                    </motion.button>

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : -8,
                        pointerEvents: isOpen ? 'auto' : 'none',
                      }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[260px]"
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3 overflow-hidden">
                        {item.children.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className="block px-5 py-2.5 text-sm text-[#2D2D2D] hover:bg-[#FADADD]/30 hover:text-[#9B7AB8] transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                );
              }

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative text-[#2D2D2D] hover:text-[#9B7AB8] transition-colors duration-300 text-sm font-medium group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#9B7AB8] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="hidden md:block"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              <a href="/#contact">
                Commander
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#2D2D2D] z-50 relative"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-20 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-40 border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
      >
        <nav className="px-6 py-4 space-y-1">
          {navItems.map((item, index) => {
            if (item.children) {
              const isGroupOpen = openMobileGroup === item.label;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="border-b border-gray-100 last:border-0"
                >
                  <button
                    onClick={() => setOpenMobileGroup(isGroupOpen ? null : item.label)}
                    className="w-full flex items-center justify-between text-[#2D2D2D] text-lg font-medium py-3"
                    aria-expanded={isGroupOpen}
                  >
                    {item.label}
                    <ChevronDown className={`w-5 h-5 transition-transform ${isGroupOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isGroupOpen ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="pb-3 pl-3 space-y-2">
                      {item.children.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenMobileGroup(null);
                          }}
                          className="block text-[#2D2D2D] hover:text-[#9B7AB8] transition-colors duration-300 text-base py-1.5"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[#2D2D2D] hover:text-[#9B7AB8] transition-colors duration-300 text-lg font-medium py-3 border-b border-gray-100 last:border-0"
              >
                {item.label}
              </motion.a>
            );
          })}

          {/* Mobile CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : -20
            }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="pt-4"
          >
            <Button
              asChild
              size="lg"
              className="w-full rounded-full px-8 py-6 text-base font-semibold shadow-lg"
            >
              <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Commander
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
