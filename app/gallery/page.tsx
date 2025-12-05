'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('Praliny');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    // Set page metadata dynamically
    document.title = 'Galeria Produktów | Czekoladziarnia Wrocław';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Przejrzyj pełną galerię naszych czekoladowych produktów - praliny, gorąca czekolada i desery. Każdy produkt zrobiony z miłością w naszej czekoladziarni we Wrocławiu.');
    }
    
    // Check URL params
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, []);

  const categories = [
    { id: 'Praliny', name: 'Praliny', icon: '🍫' },
    { id: 'GorąCzekolada', name: 'Gorąca Czekolada', icon: '☕' },
    { id: 'Desery', name: 'Desery', icon: '🍰' },
  ];

  const imagesByCategory = {
    Praliny: [
      {
        title: 'Ręcznie robione praliny',
        gradient: 'from-amber-400 via-amber-500 to-orange-600',
        emoji: '🍫',
        image: '/images/1.jpg',
      },
      {
        title: 'Praliny mleczne',
        gradient: 'from-amber-500 via-orange-500 to-amber-600',
        emoji: '🍫',
        image: '/images/2.jpg',
      },
      {
        title: 'Praliny gorzkie',
        gradient: 'from-orange-600 via-amber-600 to-orange-700',
        emoji: '🍫',
        image: '/images/3.jpg',
      },
      {
        title: 'Praliny białe',
        gradient: 'from-amber-300 via-orange-300 to-amber-400',
        emoji: '🍫',
        image: '/images/4.jpg',
      },
      {
        title: 'Mix pralin',
        gradient: 'from-orange-500 via-amber-500 to-orange-600',
        emoji: '🎁',
        image: '/images/5.jpg',
      },
    ],
    GorąCzekolada: [
      {
        title: 'Czekolada marshmallow',
        gradient: 'from-orange-400 via-amber-500 to-orange-600',
        emoji: '🍨',
        image: '/images/choco/5.webp',
      },
      {
        title: 'Gorąca czekolada',
        gradient: 'from-orange-500 via-amber-600 to-amber-700',
        emoji: '☕',
        image: '/images/choco/1.jpg',
      },
      {
        title: 'Gorąca z bitą śmietaną',
        gradient: 'from-amber-600 via-orange-500 to-amber-700',
        emoji: '☕',
        image: '/images/choco/2.jpg',
      },
      {
        title: 'Gorąca pikantna',
        gradient: 'from-orange-600 via-red-600 to-amber-700',
        emoji: '🔥',
        image: '/images/choco/3.jpg',
      },
      {
        title: 'Gorąca belgijska',
        gradient: 'from-amber-700 via-orange-600 to-amber-800',
        emoji: '👑',
        image: '/images/choco/4.webp',
      },
    ],
    Desery: [
      {
        title: 'Desery czekoladowe',
        gradient: 'from-amber-600 via-orange-600 to-amber-800',
        emoji: '🍰',
        image: '/images/desers/1.jpg',
      },
      {
        title: 'Torty czekoladowe',
        gradient: 'from-orange-600 via-amber-700 to-orange-800',
        emoji: '🎂',
        image: '/images/desers/2.jpg',
      },
      {
        title: 'Brownies',
        gradient: 'from-amber-700 via-orange-700 to-amber-900',
        emoji: '🧁',
        image: '/images/desers/3.webp',
      },
      {
        title: 'Tarty czekoladowe',
        gradient: 'from-orange-700 via-amber-700 to-orange-800',
        emoji: '🥧',
        image: '/images/desers/4.jpg',
      },
      {
        title: 'Lody czekoladowe',
        gradient: 'from-amber-500 via-orange-500 to-amber-600',
        emoji: '🍦',
        image: '/images/desers/5.webp',
      },
    ],
  };

  const images = imagesByCategory[selectedCategory as keyof typeof imagesByCategory] || [];

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const goToNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };
  const goToPreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center space-y-6">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold">
              Nasza Galeria
            </span>
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-amber-950">
              Zdjęcia Czekolady
            </h1>
            <p className="text-xl text-amber-900 max-w-2xl mx-auto text-center">
              Przejrzyj nasze wyśmienite produkty w pełnej odsłonie
            </p>
          </div>

          {/* Kategorie */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-900 to-orange-900 text-white shadow-lg shadow-amber-900/40 scale-105'
                    : 'bg-white text-stone-900 border-2 border-stone-200 hover:border-amber-300'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            {images.map((image, index) => {
              // Na dużych ekranach: pierwsze zdjęcie 2x2, reszta 1x1
              // Na mniejszych ekranach: wszystkie 1x1
              const isFirst = index === 0;
              const colSpan = isFirst ? 'lg:col-span-2' : 'col-span-1';
              const rowSpan = isFirst ? 'lg:row-span-2' : 'row-span-1';

              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 ${colSpan} ${rowSpan}`}
                  onClick={() => openLightbox(index)}
                >
                  {/* Image */}
                  <img
                    src={image.image}
                    alt={`${image.title} - Produkt Czekoladziarni Wrocław`}
                    className="w-full h-full object-cover"
                    loading={index < 4 ? 'eager' : 'lazy'}
                    decoding={index < 4 ? 'auto' : 'async'}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={images[selectedImageIndex].image}
              alt={`${images[selectedImageIndex].title} - Powiększony widok produktu Czekoladziarni Wrocław`}
              className="max-w-full max-h-full object-contain rounded-xl"
            />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="fixed top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm z-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            {selectedImageIndex > 0 && (
              <button
                onClick={goToPreviousImage}
                className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-4 transition-all duration-200 backdrop-blur-sm z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next Button */}
            {selectedImageIndex < images.length - 1 && (
              <button
                onClick={goToNextImage}
                className="fixed right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-4 transition-all duration-200 backdrop-blur-sm z-50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Counter */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold z-50">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
