'use client';

export default function Gallery() {
  const allImages = [
    {
      title: 'Ręcznie robione praliny',
      image: '/images/choco/1.jpg',
    },
    {
      title: 'Praliny mleczne',
      image: 'images/2.jpg',
    },
    {
      title: 'Gorąca czekolada',
      image: 'images/choco/3.jpg',
    },
    {
      title: 'Desery czekoladowe',
      image: 'images/4.jpg',
    },
    {
      title: 'Torty czekoladowe',
      image: 'images/choco/5.webp',
    },
    {
      title: 'Praliny gorzkie',
      image: 'images/5.jpg',
    },
    {
      title: 'Praliny białe',
      image: 'images/6.jpg',
    },
    {
      title: 'Gorąca z bitą śmietaną',
      image: 'images/choco/2.jpg',
    },
    {
      title: 'Lody czekoladowe',
      image: 'images/choco/4.webp',
    },
  ];

  return (
    <section id="gallery" className="py-32 lg:py-40 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-24 flex flex-col items-center space-y-6">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold mb-4">
            Nasze Kreacje
          </span>
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-stone-900 mb-6">
            Galeria
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto text-center">
            Zobacz, jak wyglądają nasze czekoladowe arcydzieła
          </p>
        </div>

        {/* Gallery Grid - 3 kolumny z 9 zdjęciami */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 mb-16">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={image.image}
                alt={`${image.title} - Czekoladziarnia Wrocław`}
                className="w-full h-full object-cover"
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding={index < 3 ? 'auto' : 'async'}
              />
            </div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl shadow-stone-200/50 p-8 max-w-2xl">
            <p className="text-stone-600 text-lg mb-6">
              Przejrzyj pełną galerię naszych produktów z dodatkowymi zdjęciami i opisami.
              Każdy dzień tworzymy świeże, wyjątkowe kompozycje.
            </p>
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-900 to-orange-900 text-white rounded-full hover:shadow-xl hover:shadow-amber-900/30 transition-all duration-300 font-semibold hover:scale-105"
            >
              Otwórz pełną galerię
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
