'use client';

export default function Menu() {
  const menuItems = [
    {
      category: 'Praliny',
      icon: '🍫',
      items: [
        { name: 'Praliny mleczne', description: 'Delikatne praliny z najwyższej jakości czekolady mlecznej', price: '12 zł/100g' },
        { name: 'Praliny gorzkie', description: 'Intensywny smak ciemnej czekolady', price: '14 zł/100g' },
        { name: 'Praliny białe', description: 'Kremowa biała czekolada z dodatkami', price: '13 zł/100g' },
        { name: 'Mix pralin', description: 'Wybór naszych najlepszych pralin', price: '45 zł/500g' },
      ],
    },
    {
      category: 'Gorąca Czekolada',
      icon: '☕',
      items: [
        { name: 'Klasyczna', description: 'Tradycyjna gorąca czekolada', price: '15 zł' },
        { name: 'Z bitą śmietaną', description: 'Gorąca czekolada z domową śmietaną', price: '18 zł' },
        { name: 'Pikantna', description: 'Z nutą chili i cynamonu', price: '17 zł' },
        { name: 'Belgijska', description: 'Premium czekolada belgijska', price: '20 zł' },
      ],
    },
    {
      category: 'Desery',
      icon: '🍰',
      items: [
        { name: 'Brownie czekoladowe', description: 'Wilgotne ciasto z kawałkami czekolady', price: '16 zł' },
        { name: 'Tarta czekoladowa', description: 'Kruche ciasto z kremem czekoladowym', price: '18 zł' },
        { name: 'Czekoladowe fondue', description: 'Do degustacji z owocami', price: '35 zł' },
        { name: 'Lody czekoladowe', description: 'Domowe lody z prawdziwej czekolady', price: '12 zł' },
      ],
    },
  ];

  return (
    <section id="menu" className="py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-24 flex flex-col items-center space-y-6">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-900 rounded-full text-sm font-semibold mb-4">
            Nasze Specjały
          </span>
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-stone-900 mb-6">
            Menu
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto text-center">
            Odkryj naszą wyjątkową ofertę czekoladowych specjałów
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {menuItems.map((section, idx) => {
            const categoryMap: { [key: string]: string } = {
              'Praliny': 'Praliny',
              'Gorąca Czekolada': 'GorąCzekolada',
              'Desery': 'Desery',
            };
            const galleryCategory = categoryMap[section.category] || section.category;

            return (
            <a
              key={section.category}
              href={`/gallery?category=${galleryCategory}`}
              className="group relative bg-gradient-to-br from-stone-50 to-white rounded-3xl p-10 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-amber-200/40 transition-all duration-500 border border-stone-100 hover:border-amber-200 hover:-translate-y-2 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
              <div className="flex flex-col items-center text-center mb-8 gap-3">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{section.icon}</div>
                <h3 className="font-playfair text-2xl font-bold text-stone-900">
                  {section.category}
                </h3>
              </div>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="group/item pb-4 border-b border-stone-100 last:border-0 last:pb-0 hover:bg-amber-50/30 -mx-2 px-2 rounded-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h4 className="font-semibold text-stone-900 group-hover/item:text-amber-900 transition-colors">{item.name}</h4>
                      <span className="text-amber-900 font-bold whitespace-nowrap text-sm bg-amber-100 px-3 py-1 rounded-full shadow-sm">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              </div>
            </a>
            );
          })}
        </div>

        <div className="text-center mt-16 flex flex-col items-center">
          <p className="text-stone-500 mb-6">Wszystkie produkty dostępne również na wynos</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-900 to-orange-900 text-white rounded-full hover:shadow-xl hover:shadow-amber-900/30 transition-all duration-300 font-semibold hover:scale-105"
          >
            Zamów teraz
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
