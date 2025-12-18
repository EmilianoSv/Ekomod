import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface House {
  id: number;
  title: string;
  subtitle: string;
  subtitle2?: string;
  color: string;
  image: ImageMetadata;
  alt: string;
}

type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  format: string;
};

interface HousesCarouselProps {
  houses: House[];
}

export default function HousesCarousel({ houses }: HousesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % houses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + houses.length) % houses.length);
  };

  const scrollToContact = () => {
    document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentHouse = houses[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-screen absolute inset-0"
        >
          <Card
            className="w-full h-screen rounded-none border-0 relative overflow-hidden"
            style={{ backgroundColor: currentHouse.color }}
          >
            <CardContent className="p-0 h-screen">
              <div className="flex flex-col lg:flex-row h-screen">
                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-6 md:space-y-8"
                  >
                    <h3 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold drop-shadow-lg">
                      {currentHouse.title}
                    </h3>
                    <div className="space-y-2">
                      <h4 className="text-4xl md:text-6xl lg:text-7xl text-white/95 font-semibold">
                        {currentHouse.subtitle}
                      </h4>
                      {currentHouse.subtitle2 && (
                        <h4 className="text-4xl md:text-6xl lg:text-7xl text-white/95 font-semibold">
                          {currentHouse.subtitle2}
                        </h4>
                      )}
                    </div>
                    <Button
                      onClick={scrollToContact}
                      size="lg"
                      className="mt-6 bg-white/10 hover:bg-white/20 text-white border-2 border-white backdrop-blur-sm text-lg md:text-2xl px-8 py-6 md:px-12 md:py-8 rounded-xl font-semibold transition-all hover:scale-105 w-fit"
                    >
                      MÁS INFORMACIÓN
                    </Button>
                  </motion.div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative flex items-center justify-end overflow-visible pr-0 lg:pr-8">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    src={currentHouse.image.src}
                    alt={currentHouse.alt}
                    className="w-full h-auto max-h-[80vh] lg:max-h-[90vh] object-contain drop-shadow-2xl"
                    style={{ clipPath: 'inset(0 -100% 0 0)' }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
        <Button
          onClick={prevSlide}
          variant="outline"
          size="icon"
          className="bg-white/20 hover:bg-white/30 border-white/40 text-white backdrop-blur-md rounded-full w-12 h-12 md:w-14 md:h-14"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {houses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          variant="outline"
          size="icon"
          className="bg-white/20 hover:bg-white/30 border-white/40 text-white backdrop-blur-md rounded-full w-12 h-12 md:w-14 md:h-14"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Keyboard Navigation */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') document.querySelector('[data-prev]')?.click();
            if (e.key === 'ArrowRight') document.querySelector('[data-next]')?.click();
          });
        `
      }} />
    </div>
  );
}
