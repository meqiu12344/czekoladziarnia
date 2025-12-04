'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Jeśli jesteśmy na stronie głównej, przewijaj do sekcji
    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Jeśli nie jesteśmy na stronie głównej, przejdź tam
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-amber-900/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className={`font-playfair text-2xl lg:text-3xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-amber-900' : 'text-white'
            }`}
          >
            Czekoladziarnia
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {['O nas', 'Menu', 'Galeria', 'Kontakt'].map((item, idx) => {
              const id = ['about', 'menu', 'gallery', 'contact'][idx];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    isScrolled
                      ? 'text-stone-700 hover:bg-amber-50 hover:text-amber-900'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-stone-700' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {['O nas', 'Menu', 'Galeria', 'Kontakt'].map((item, idx) => {
              const id = ['about', 'menu', 'gallery', 'contact'][idx];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-stone-700 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
