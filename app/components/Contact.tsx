export default function Contact() {
  return (
    <section id="contact" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background - transparent to show body gradient */}
      <div className="absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-24 flex flex-col items-center space-y-6">
          <span className="inline-block px-4 py-2 bg-amber-900/60 text-amber-100 rounded-full text-sm font-semibold mb-4">
            Skontaktuj się z nami
          </span>
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-amber-50 mb-6">
            Odwiedź nas
          </h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto text-center">
            Zanurz się w świecie czekolady w sercu Wrocławia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="group relative bg-amber-900/40 p-8 rounded-3xl shadow-xl shadow-amber-900/50 hover:shadow-2xl hover:shadow-amber-800/60 transition-all duration-500 border border-amber-800/50 hover:border-amber-700 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 to-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-700 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-amber-50 mb-2">Adres</h3>
                  <p className="text-amber-100 leading-relaxed">
                    Rynek<br />
                    Wrocław, Polska
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-amber-900/40 p-8 rounded-3xl shadow-xl shadow-amber-900/50 hover:shadow-2xl hover:shadow-amber-800/60 transition-all duration-500 border border-amber-800/50 hover:border-amber-700 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 to-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-700 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-amber-50 mb-2">
                    Godziny otwarcia
                  </h3>
                  <div className="text-amber-100 space-y-2">
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Pn - Pt</span>
                      <span>10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-medium">Sb - Nd</span>
                      <span>10:00 - 21:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-amber-900/40 p-8 rounded-3xl shadow-xl shadow-amber-900/50 hover:shadow-2xl hover:shadow-amber-800/60 transition-all duration-500 border border-amber-800/50 hover:border-amber-700 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 to-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-6 relative">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-700 to-amber-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-amber-50 mb-2">Kontakt</h3>
                  <div className="text-amber-100 space-y-1">
                    <p className="break-all">info@czekoladziarnia-wroclaw.pl</p>
                    <p>+48 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://www.facebook.com/CzekoladziarniaWroclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative bg-gradient-to-r from-amber-900 to-orange-900 text-white py-5 rounded-2xl text-center hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-500 font-semibold hover:scale-105 overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Facebook
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group relative bg-gradient-to-r from-amber-900 to-orange-900 text-white py-5 rounded-2xl text-center hover:shadow-2xl hover:shadow-amber-900/40 transition-all duration-500 font-semibold hover:scale-105 overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-amber-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Instagram
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="bg-amber-900/40 rounded-3xl shadow-xl shadow-amber-900/50 overflow-hidden h-[600px] border border-amber-800/50 sticky top-24 hover:shadow-2xl hover:shadow-amber-800/60 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.6424584950436!2d17.031645315745805!3d51.10994897957106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27f1e0a8c2d%3A0x3e6e8c67655e7e01!2sRynek%2C%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
