import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroContent() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHouses = () => {
    document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-full flex items-center py-12 lg:py-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-6 lg:pt-8">
          {/* Left side - Content */}
          <div className="text-left space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
            >
              <div className="w-2 h-2 bg-[#E89B33] rounded-full animate-pulse"></div>
              <span className="text-white text-sm md:text-base font-medium tracking-wide">
                Construcción modular sostenible
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="space-y-2"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 md:gap-y-2">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-black leading-none">
                  Construye
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-black leading-none">
                  tu
                </h1>
                <div className="text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-linear-to-r from-[#E89B33] via-[#6B8E23] to-[#E89B33] bg-clip-text text-transparent leading-tight">
                  hogar
                </div>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/90 font-black leading-none">
                  en solo
                </h2>
                <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#E89B33] font-black leading-none">
                  60 días
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl"
            >
              Casas modulares premium con diseño personalizado, construcción rápida y materiales sostenibles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group text-base md:text-lg px-8 py-6 md:px-12 md:py-7 bg-linear-to-r from-[#E89B33] to-[#6B8E23] hover:from-[#d88a2e] hover:to-[#5f7d1f] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#E89B33]/50 hover:scale-[1.02] transition-all duration-300"
              >
                <span>Solicita cotización gratis</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button
                size="lg"
                onClick={scrollToHouses}
                className="text-base md:text-lg px-8 py-6 md:px-12 md:py-7 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-md shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Explorar modelos
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="grid grid-cols-3 gap-8 pt-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-black text-[#E89B33] mb-2">60</div>
                <div className="text-sm md:text-base text-white/70 font-medium">Días de construcción</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-black text-[#6B8E23] mb-2">100%</div>
                <div className="text-sm md:text-base text-white/70 font-medium">Sostenible</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">3</div>
                <div className="text-sm md:text-base text-white/70 font-medium">Modelos únicos</div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Enhanced cards */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#E89B33]/30 to-[#6B8E23]/30 rounded-3xl blur-3xl"></div>
              <div className="relative space-y-4">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-linear-to-br from-[#E89B33] to-[#d88a2e] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xl font-bold text-white mb-2">Diseño personalizado</div>
                      <div className="text-white/70">Adaptamos cada proyecto a tus necesidades específicas</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-linear-to-br from-[#6B8E23] to-[#5f7d1f] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xl font-bold text-white mb-2">Construcción rápida</div>
                      <div className="text-white/70">Tu hogar listo en solo 60 días garantizados</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-linear-to-br from-[#355070] to-[#2a4058] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xl font-bold text-white mb-2">Calidad garantizada</div>
                      <div className="text-white/70">Materiales premium y construcción certificada</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
