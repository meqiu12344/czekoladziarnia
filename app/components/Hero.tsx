'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite_3s]"></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl animate-[float_30s_ease-in-out_infinite_6s]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10">
        <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-xl rounded-full text-amber-100 text-sm border border-white/20 shadow-lg shadow-black/10 hover:bg-white/15 transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            Rzemieślnicza czekolada od 2015
          </div>

          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out]">
              Czekoladziarnia
            </span>
            <br />
            <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.2s] bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-transparent">
              Wrocław
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-amber-50/90 max-w-3xl mx-auto leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.4s]">
            Odkryj świat prawdziwej, rzemieślniczej czekolady.<br className="hidden sm:block" />
            Każdy smak to wyjątkowe doświadczenie.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-[fadeInUp_0.8s_ease-out_0.6s]">
            <a
              href="#menu"
              className="group relative px-8 py-4 bg-white text-amber-900 rounded-full hover:bg-amber-50 transition-all duration-300 font-semibold shadow-2xl shadow-black/20 hover:shadow-2xl hover:shadow-amber-400/30 hover:scale-105 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-amber-100 to-orange-100 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center justify-center gap-2">
                Zobacz Menu
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="relative px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-semibold backdrop-blur-sm hover:scale-105 overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-white/5 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative">Odwiedź nas</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs uppercase tracking-wider">Przewiń</span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
