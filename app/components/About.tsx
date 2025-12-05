export default function About() {
  return (
    <section id="about" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-800/20 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700/20 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite_2s]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <span className="inline-block px-4 py-2 bg-amber-800 text-amber-100 rounded-full text-sm font-semibold">
                Nasza Historia
              </span>
              <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-amber-50 leading-tight text-center lg:text-left">
                Pasja do
                <span className="block text-amber-300">czekolady</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-amber-100 text-lg leading-relaxed">
              <p>
                Witamy w Czekoladziarni Wrocław – miejscu, gdzie pasja do czekolady 
                spotyka się z tradycyjnym rzemiosłem. Od lat tworzymy wyjątkowe 
                czekoladowe kompozycje, które zachwycają nawet najbardziej wymagających 
                smakoszy.
              </p>
              <p>
                Każdy produkt powstaje z najwyższej jakości składników, starannie 
                dobieranych z całego świata. Nasza czekolada to rezultat wieloletniej 
                praktyki i miłości do tego, co robimy.
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="w-16 h-1 bg-gradient-to-r from-amber-700 to-amber-600 rounded"></div>
              <span className="text-amber-200 text-sm font-medium">Od 2015 roku</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-8">
              <div className="group relative bg-amber-900 p-8 rounded-3xl shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-amber-600/40 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center lg:text-left">
                  <div className="text-4xl font-bold bg-gradient-to-br from-amber-300 to-amber-200 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">10+</div>
                  <div className="text-amber-100 font-medium text-sm">Lat doświadczenia</div>
                </div>
              </div>
              <div className="group relative bg-amber-900 p-8 rounded-3xl shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-amber-600/40 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center lg:text-left">
                  <div className="text-4xl font-bold bg-gradient-to-br from-amber-300 to-amber-200 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">100%</div>
                  <div className="text-amber-100 font-medium text-sm">Naturalne składniki</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 pt-12">
              <div className="group relative bg-amber-900 p-8 rounded-3xl shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-amber-600/40 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center lg:text-left">
                  <div className="text-4xl font-bold bg-gradient-to-br from-amber-300 to-amber-200 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">50+</div>
                  <div className="text-amber-100 font-medium text-sm">Rodzajów czekolady</div>
                </div>
              </div>
              <div className="group relative bg-amber-900 p-8 rounded-3xl shadow-lg shadow-black/50 hover:shadow-2xl hover:shadow-amber-600/40 transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center lg:text-left">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-500">❤️</div>
                  <div className="text-amber-100 font-medium text-sm">Robione z pasją</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
