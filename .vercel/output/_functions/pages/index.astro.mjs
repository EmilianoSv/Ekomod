import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as renderScript } from '../chunks/astro/server_BaK1mv8C.mjs';
import 'piccolore';
import { a as $$Icon, $ as $$Layout } from '../chunks/Icon_DH-xMoPP.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_LqZiRpet.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { B as Button, a as cn, C as ContactForm } from '../chunks/_ContactForm_VirPE25M.mjs';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { useRef, useState } from 'react';
import { MessageSquare, Pencil, Hammer, Home, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Clock, DollarSign, Truck, Leaf, X, ChevronDown } from 'lucide-react';
import { $ as $$Footer } from '../chunks/Footer_B4d38IDJ.mjs';
/* empty css                                 */
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
export { renderers } from '../renderers.mjs';

const background = new Proxy({"src":"/_astro/background-hero-image.12FiSOto.png","width":1440,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/julio/workspace/Ekomod/src/assets/background-hero-image.png";
							}
							
							return target[name];
						}
					});

function HeroContent() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHouses = () => {
    document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center py-12 lg:py-0", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-6 lg:pt-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-left space-y-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut" },
          className: "inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-[#E89B33] rounded-full animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-white text-sm md:text-base font-medium tracking-wide", children: "Construcción modular sostenible" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
          className: "space-y-2",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline gap-x-4 md:gap-y-2", children: [
              /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-black leading-none", children: "Construye" }),
              /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-black leading-none", children: "tu" }),
              /* @__PURE__ */ jsx("div", { className: "text-8xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-linear-to-r from-[#E89B33] via-[#6B8E23] to-[#E89B33] bg-clip-text text-transparent leading-tight", children: "hogar" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-baseline gap-x-3", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/90 font-black leading-none", children: "en solo" }),
              /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#E89B33] font-black leading-none", children: "60 días" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
          className: "text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl",
          children: "Casas modulares premium con diseño personalizado, construcción rápida y materiales sostenibles."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
          className: "flex flex-col sm:flex-row gap-4 pt-2",
          children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                size: "lg",
                onClick: scrollToContact,
                className: "group text-base md:text-lg px-8 py-6 md:px-12 md:py-7 bg-linear-to-r from-[#E89B33] to-[#6B8E23] hover:from-[#d88a2e] hover:to-[#5f7d1f] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#E89B33]/50 hover:scale-[1.02] transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx("span", { children: "Solicita cotización gratis" }),
                  /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 group-hover:translate-x-1 transition-transform", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                onClick: scrollToHouses,
                className: "text-base md:text-lg px-8 py-6 md:px-12 md:py-7 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-md shadow-xl hover:scale-[1.02] transition-all duration-300",
                children: "Explorar modelos"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.7, ease: "easeOut" },
          className: "grid grid-cols-3 gap-8 pt-6",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-black text-[#E89B33] mb-2", children: "60" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base text-white/70 font-medium", children: "Días de construcción" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-black text-[#6B8E23] mb-2", children: "100%" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base text-white/70 font-medium", children: "Sostenible" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-black text-white mb-2", children: "3" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base text-white/70 font-medium", children: "Modelos únicos" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:block relative", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-br from-[#E89B33]/30 to-[#6B8E23]/30 rounded-3xl blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group animate-fade-in-up", style: { animationDelay: "0.3s" }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-linear-to-br from-[#E89B33] to-[#d88a2e] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg", children: /* @__PURE__ */ jsx("svg", { className: "w-7 h-7 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white mb-2", children: "Diseño personalizado" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/70", children: "Adaptamos cada proyecto a tus necesidades específicas" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group animate-fade-in-up", style: { animationDelay: "0.5s" }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-linear-to-br from-[#6B8E23] to-[#5f7d1f] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg", children: /* @__PURE__ */ jsx("svg", { className: "w-7 h-7 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white mb-2", children: "Construcción rápida" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/70", children: "Tu hogar listo en solo 60 días garantizados" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group animate-fade-in-up", style: { animationDelay: "0.7s" }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-linear-to-br from-[#355070] to-[#2a4058] rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg", children: /* @__PURE__ */ jsx("svg", { className: "w-7 h-7 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-white mb-2", children: "Calidad garantizada" }),
            /* @__PURE__ */ jsx("div", { className: "text-white/70", children: "Materiales premium y construcción certificada" })
          ] })
        ] }) })
      ] })
    ] }) })
  ] }) }) });
}

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="inicio" class="h-svh relative overflow-hidden"> <div class="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/50 z-10"></div> <div class="w-full h-full absolute inset-0"> ${renderComponent($$result, "Image", $$Image, { "src": background, "alt": "casas-modulares", "format": "avif", "quality": "high", "class": "w-full h-full object-cover" })} </div> <div class="relative z-20 flex h-full items-center justify-center p-6 md:p-12 lg:p-20"> ${renderComponent($$result, "HeroContent", HeroContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/HeroContent", "client:component-export": "default" })} </div> </section>`;
}, "/home/julio/workspace/Ekomod/src/components/HeroSection.astro", void 0);

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Cuéntanos tu proyecto",
    description: "Nos contactas y nos compartes tu idea. Te asesoramos para encontrar la mejor solución según tu terreno, necesidades y presupuesto."
  },
  {
    number: 2,
    icon: Pencil,
    title: "Diseñamos tu espacio ideal",
    description: "Adaptamos el diseño a tu estilo de vida y preferencias. Te mostramos opciones personalizadas para que elijas la mejor distribución y acabados."
  },
  {
    number: 3,
    icon: Hammer,
    title: "Construimos con rapidez y calidad",
    description: "Fabricamos tu casa modular con materiales de alta calidad y tecnología eficiente, reduciendo tiempos y garantizando un proceso sin complicaciones."
  },
  {
    number: 4,
    icon: Home,
    title: "Te entregamos tu casa lista para disfrutar",
    description: "Cumplimos con nuestra promesa de entrega para que en poco tiempo puedas comenzar a vivir o rentar tu nueva propiedad sin demoras."
  }
];
function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = step.icon;
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      ref,
      initial: { opacity: 0, x: -50 },
      animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
      transition: { duration: 0.5, delay: index * 0.15 },
      className: "relative",
      children: [
        index < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute left-8 top-24 w-0.5 h-full bg-linear-to-b from-[#E89B33] to-[#6B8E23] opacity-30" }),
        /* @__PURE__ */ jsx(Card, { className: "border-2 border-gray-200 hover:border-[#E89B33] transition-all duration-300 hover:shadow-xl bg-white/95 backdrop-blur-sm", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-linear-to-br from-[#E89B33] to-[#6B8E23] flex items-center justify-center shadow-lg", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-white", strokeWidth: 2 }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#355070] flex items-center justify-center text-white font-bold text-sm shadow-md", children: step.number })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-700 leading-relaxed", children: step.description })
          ] })
        ] }) }) })
      ]
    }
  );
}
function WhyChooseUsSteps() {
  return /* @__PURE__ */ jsx("div", { className: "space-y-6 md:space-y-8", children: steps.map((step, index) => /* @__PURE__ */ jsx(StepCard, { step, index }, index)) });
}

const $$WhyChooseUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="porque-elegirnos" class="py-20 md:py-32 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"> <!-- Decorative background elements --> <div class="absolute inset-0 opacity-5"> <div class="absolute top-0 left-0 w-96 h-96 bg-[#E89B33] rounded-full blur-3xl"></div> <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#6B8E23] rounded-full blur-3xl"></div> </div> <div class="container mx-auto px-4 md:px-6 relative z-10"> <div class="text-center mb-12 md:mb-16 max-w-3xl mx-auto"> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-[#E89B33] via-[#6B8E23] to-[#355070] bg-clip-text text-transparent">
Así de fácil es tener tu casa modular
</h2> <p class="text-xl md:text-2xl text-gray-600">
Un proceso simple y transparente de principio a fin
</p> </div> <div class="max-w-4xl mx-auto"> ${renderComponent($$result, "WhyChooseUsSteps", WhyChooseUsSteps, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/WhyChooseUsSteps", "client:component-export": "default" })} </div> <!-- CTA Section --> <div class="mt-16 text-center"> <a href="#contacto" class="inline-block px-12 py-4 bg-linear-to-r from-[#E89B33] to-[#6B8E23] text-white text-lg md:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
Comienza tu proyecto hoy
</a> </div> </div> </section>`;
}, "/home/julio/workspace/Ekomod/src/components/WhyChooseUs.astro", void 0);

const renderTipoS = new Proxy({"src":"/_astro/render-mod-tipo-s.B6N8OGhr.png","width":3509,"height":2141,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/julio/workspace/Ekomod/src/assets/render-mod-tipo-s.png";
							}
							
							return target[name];
						}
					});

const renderTipoM = new Proxy({"src":"/_astro/render-mod-tipo-m.gXFJCYDs.png","width":3883,"height":2309,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/julio/workspace/Ekomod/src/assets/render-mod-tipo-m.png";
							}
							
							return target[name];
						}
					});

const renderChalet = new Proxy({"src":"/_astro/render-chalet.BWj46F54.png","width":3739,"height":3509,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/julio/workspace/Ekomod/src/assets/render-chalet.png";
							}
							
							return target[name];
						}
					});

function HousesCarousel({ houses }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % houses.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + houses.length) % houses.length);
  };
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };
  const currentHouse = houses[currentIndex];
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 },
        className: "w-full h-screen absolute inset-0",
        children: /* @__PURE__ */ jsx(
          Card,
          {
            className: "w-full h-screen rounded-none border-0 relative overflow-hidden",
            style: { backgroundColor: currentHouse.color },
            children: /* @__PURE__ */ jsx(CardContent, { className: "p-0 h-screen", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row h-screen", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-20 z-10", children: /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2, duration: 0.6 },
                  className: "space-y-6 md:space-y-8",
                  children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-5xl md:text-7xl lg:text-8xl text-white font-bold drop-shadow-lg", children: currentHouse.title }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-4xl md:text-6xl lg:text-7xl text-white/95 font-semibold", children: currentHouse.subtitle }),
                      currentHouse.subtitle2 && /* @__PURE__ */ jsx("h4", { className: "text-4xl md:text-6xl lg:text-7xl text-white/95 font-semibold", children: currentHouse.subtitle2 })
                    ] }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        onClick: scrollToContact,
                        size: "lg",
                        className: "mt-6 bg-white/10 hover:bg-white/20 text-white border-2 border-white backdrop-blur-sm text-lg md:text-2xl px-8 py-6 md:px-12 md:py-8 rounded-xl font-semibold transition-all hover:scale-105 w-fit",
                        children: "MÁS INFORMACIÓN"
                      }
                    )
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 relative flex items-center justify-end overflow-visible pr-0 lg:pr-8", children: /* @__PURE__ */ jsx(
                motion.img,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.3, duration: 0.6 },
                  src: currentHouse.image.src,
                  alt: currentHouse.alt,
                  className: "w-full h-auto max-h-[80vh] lg:max-h-[90vh] object-contain drop-shadow-2xl",
                  style: { clipPath: "inset(0 -100% 0 0)" }
                }
              ) })
            ] }) })
          }
        )
      },
      currentIndex
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: prevSlide,
          variant: "outline",
          size: "icon",
          className: "bg-white/20 hover:bg-white/30 border-white/40 text-white backdrop-blur-md rounded-full w-12 h-12 md:w-14 md:h-14",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: houses.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCurrentIndex(index),
          className: `w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"}`,
          "aria-label": `Go to slide ${index + 1}`
        },
        index
      )) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: nextSlide,
          variant: "outline",
          size: "icon",
          className: "bg-white/20 hover:bg-white/30 border-white/40 text-white backdrop-blur-md rounded-full w-12 h-12 md:w-14 md:h-14",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: {
      __html: `
          document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') document.querySelector('[data-prev]')?.click();
            if (e.key === 'ArrowRight') document.querySelector('[data-next]')?.click();
          });
        `
    } })
  ] });
}

const $$HousesSection = createComponent(($$result, $$props, $$slots) => {
  const houses = [
    {
      id: 1,
      title: "M\xD3DULO TIPO S",
      subtitle: "40m\xB2",
      color: "#E89B33",
      image: renderTipoS,
      alt: "render-tipo-s"
    },
    {
      id: 2,
      title: "CHALET",
      subtitle: "Tipo S 56m\xB2",
      subtitle2: "Tipo M 74m\xB2",
      color: "#6B8E23",
      image: renderChalet,
      alt: "render-chalet"
    },
    {
      id: 3,
      title: "M\xD3DULO TIPO M",
      subtitle: "80m\xB2",
      color: "#355070",
      image: renderTipoM,
      alt: "render-tipo-m"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="modelos" class="w-full"> ${renderComponent($$result, "HousesCarousel", HousesCarousel, { "houses": houses, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/HousesCarousel", "client:component-export": "default" })} </section>`;
}, "/home/julio/workspace/Ekomod/src/components/HousesSection.astro", void 0);

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="py-20 md:py-32 bg-linear-to-br from-[#355070] via-[#2a4058] to-[#1f2f40] relative overflow-hidden"> <!-- Decorative elements --> <div class="absolute inset-0 opacity-10"> <div class="absolute top-10 right-10 w-72 h-72 bg-[#E89B33] rounded-full blur-3xl"></div> <div class="absolute bottom-10 left-10 w-96 h-96 bg-[#6B8E23] rounded-full blur-3xl"></div> </div> <div class="container mx-auto px-4 md:px-6 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start"> <!-- Left side - Info --> <div class="text-white space-y-8 lg:col-span-2"> <div> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
¿Listo para comenzar?
</h2> <p class="text-xl md:text-2xl text-white/80">
Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
</p> </div> <div class="space-y-6"> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0"> ${renderComponent($$result, "Mail", Mail, { "className": "w-6 h-6 text-[#E89B33]" })} </div> <div> <h3 class="font-semibold text-lg mb-1">Email</h3> <a href="mailto:konstruct.soluciones@gmail.com" class="text-white/80 hover:text-white transition-colors">
konstruct.soluciones@gmail.com
</a> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0"> ${renderComponent($$result, "Phone", Phone, { "className": "w-6 h-6 text-[#6B8E23]" })} </div> <div> <h3 class="font-semibold text-lg mb-1">Teléfono</h3> <a href="tel:+573244270277" class="text-white/80 hover:text-white transition-colors">
(+57) 324 4270277
</a> </div> </div> <div class="flex items-start gap-4"> <div class="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0"> ${renderComponent($$result, "MapPin", MapPin, { "className": "w-6 h-6 text-[#E89B33]" })} </div> <div> <h3 class="font-semibold text-lg mb-1">Ubicación</h3> <p class="text-white/80">
Colombia
</p> </div> </div> </div> <div class="pt-8"> <h3 class="font-semibold text-lg mb-4">Horario de atención</h3> <p class="text-white/80">Lunes a Viernes: 8:00 AM - 6:00 PM</p> <p class="text-white/80">Sábados: 9:00 AM - 2:00 PM</p> </div> </div> <!-- Right side - Form --> <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-10 lg:col-span-3"> ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/_ContactForm", "client:component-export": "ContactForm" })} </div> </div> </div> </section>`;
}, "/home/julio/workspace/Ekomod/src/components/ContactUs.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="navbar" class="h-20 w-full bg-white/95 fixed top-0 transition-all duration-300 z-50 backdrop-blur-md border-b border-gray-100" data-astro-cid-5blmo7yk> <div class="container mx-auto px-4 md:px-6 h-full flex items-center justify-between" data-astro-cid-5blmo7yk> <a href="#" class="flex items-center gap-3 group" id="logo-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Icon", $$Icon, { "name": "ekomod-logo", "class": "w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105", "data-astro-cid-5blmo7yk": true })} <span class="text-2xl font-black md:text-3xl bg-linear-to-r from-[#355070] to-[#2a4058] bg-clip-text text-transparent group-hover:from-[#E89B33] group-hover:to-[#6B8E23] transition-all duration-300" data-astro-cid-5blmo7yk>
EKOMOD
</span> </a> <!-- Desktop navigation --> <nav class="hidden md:flex items-center gap-2 lg:gap-4" data-astro-cid-5blmo7yk> <a href="#inicio" class="nav-link relative px-4 py-2 text-gray-600 hover:text-[#355070] font-medium transition-colors group" data-astro-cid-5blmo7yk>
Inicio
<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#E89B33] to-[#6B8E23] group-hover:w-3/4 transition-all duration-300 rounded-full" data-astro-cid-5blmo7yk></span> </a> <a href="#modelos" class="nav-link relative px-4 py-2 text-gray-600 hover:text-[#355070] font-medium transition-colors group" data-astro-cid-5blmo7yk>
Modelos
<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#E89B33] to-[#6B8E23] group-hover:w-3/4 transition-all duration-300 rounded-full" data-astro-cid-5blmo7yk></span> </a> <a href="#galeria" class="nav-link relative px-4 py-2 text-gray-600 hover:text-[#355070] font-medium transition-colors group" data-astro-cid-5blmo7yk>
Galería
<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#E89B33] to-[#6B8E23] group-hover:w-3/4 transition-all duration-300 rounded-full" data-astro-cid-5blmo7yk></span> </a> <a href="#faq" class="nav-link relative px-4 py-2 text-gray-600 hover:text-[#355070] font-medium transition-colors group" data-astro-cid-5blmo7yk>
FAQ
<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#E89B33] to-[#6B8E23] group-hover:w-3/4 transition-all duration-300 rounded-full" data-astro-cid-5blmo7yk></span> </a> <a href="#contacto" class="ml-2 px-6 py-2.5 bg-linear-to-r from-[#355070] to-[#2a4058] text-white rounded-xl font-semibold hover:from-[#E89B33] hover:to-[#d68a24] transition-all duration-300 hover:shadow-lg hover:shadow-[#E89B33]/25 hover:scale-105" data-astro-cid-5blmo7yk>
Contacto
</a> </nav> <!-- Mobile hamburger button --> <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-700 hover:text-[#355070] transition-colors rounded-lg hover:bg-gray-100" aria-label="Abrir menú" data-astro-cid-5blmo7yk> <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </header> <!-- Full-screen mobile menu overlay --> <div id="mobile-menu" class="fixed inset-0 bg-linear-to-br from-[#355070] via-[#2a4058] to-[#1f2f40] z-100 hidden md:hidden transition-opacity duration-300 overflow-hidden" data-astro-cid-5blmo7yk> <!-- Decorative background elements --> <div class="absolute inset-0 overflow-hidden pointer-events-none" data-astro-cid-5blmo7yk> <div class="absolute bottom-20 left-10 w-40 h-40 bg-[#E89B33] rounded-full blur-3xl opacity-20" data-astro-cid-5blmo7yk></div> <div class="absolute top-32 right-10 w-32 h-32 bg-[#6B8E23] rounded-full blur-3xl opacity-20" data-astro-cid-5blmo7yk></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl opacity-5" data-astro-cid-5blmo7yk></div> </div> <div class="flex flex-col h-full relative z-10" data-astro-cid-5blmo7yk> <!-- Header with logo and close button --> <div class="flex items-center justify-between p-4 h-20" data-astro-cid-5blmo7yk> <div class="flex items-center gap-3" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Icon", $$Icon, { "name": "ekomod-logo", "class": "w-10 h-10", "data-astro-cid-5blmo7yk": true })} <span class="text-2xl font-black bg-linear-to-r from-[#E89B33] to-[#6B8E23] bg-clip-text text-transparent" data-astro-cid-5blmo7yk>
EKOMOD
</span> </div> <button id="mobile-menu-close" class="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-all rounded-lg" aria-label="Cerrar menú" data-astro-cid-5blmo7yk> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5blmo7yk></path> </svg> </button> </div> <!-- Navigation links - large and touch-friendly --> <nav class="flex-1 flex flex-col items-center justify-center gap-6 px-6" data-astro-cid-5blmo7yk> <a href="#inicio" class="mobile-nav-link text-2xl text-white/90 font-semibold hover:text-[#E89B33] transition-all py-2 px-6 rounded-xl hover:bg-white/5" data-astro-cid-5blmo7yk>
Inicio
</a> <a href="#modelos" class="mobile-nav-link text-2xl text-white/90 font-semibold hover:text-[#E89B33] transition-all py-2 px-6 rounded-xl hover:bg-white/5" data-astro-cid-5blmo7yk>
Modelos
</a> <a href="#galeria" class="mobile-nav-link text-2xl text-white/90 font-semibold hover:text-[#E89B33] transition-all py-2 px-6 rounded-xl hover:bg-white/5" data-astro-cid-5blmo7yk>
Galería
</a> <a href="#faq" class="mobile-nav-link text-2xl text-white/90 font-semibold hover:text-[#E89B33] transition-all py-2 px-6 rounded-xl hover:bg-white/5" data-astro-cid-5blmo7yk>
FAQ
</a> <a href="#contacto" class="mobile-nav-link mt-4 px-10 py-4 bg-linear-to-r from-[#E89B33] to-[#d68a24] text-white rounded-xl text-xl font-bold hover:shadow-lg hover:shadow-[#E89B33]/30 transition-all" data-astro-cid-5blmo7yk>
Contacto
</a> </nav> <!-- Bottom info --> <div class="p-6 text-center" data-astro-cid-5blmo7yk> <p class="text-white/40 text-sm" data-astro-cid-5blmo7yk>Casas modulares sostenibles</p> </div> </div> </div> ${renderScript($$result, "/home/julio/workspace/Ekomod/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/julio/workspace/Ekomod/src/components/Navbar.astro", void 0);

const advantages = [
  {
    icon: Clock,
    title: "Rapidez",
    description: "Construimos tu casa modular en aproximadamente 60 días, mucho más rápido que una obra tradicional. Así puedes disfrutar tu nuevo espacio sin largas esperas ni demoras.",
    color: "#E89B33"
  },
  {
    icon: DollarSign,
    title: "Costo accesible",
    description: "Te ofrecemos una solución eficiente y económica, con precios claros desde el inicio y sin sobrecostos ocultos. Obtén la mejor relación calidad-precio en tu inversión.",
    color: "#6B8E23"
  },
  {
    icon: Truck,
    title: "Fácil transporte",
    description: "Nuestras casas modulares están diseñadas para ser trasladadas e instaladas con rapidez y precisión, sin complicaciones. Esto nos permite construir en zonas remotas o de difícil acceso sin afectar la calidad.",
    color: "#355070"
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Construimos con un sistema que reduce residuos y optimiza materiales, minimizando el impacto en el entorno. Además, puedes incorporar soluciones eco-friendly como paneles solares.",
    color: "#6B8E23"
  }
];
function AdvantageCard({ advantage, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = advantage.icon;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 50 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
      transition: { duration: 0.5, delay: index * 0.1 },
      children: /* @__PURE__ */ jsx(Card, { className: "group h-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110",
            style: { backgroundColor: `${advantage.color}20` },
            children: /* @__PURE__ */ jsx(
              Icon,
              {
                className: "transition-all duration-300 group-hover:scale-110",
                size: 48,
                style: { color: advantage.color },
                strokeWidth: 1.5
              }
            )
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#355070] transition-colors", children: advantage.title }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-700 leading-relaxed", children: advantage.description })
        ] })
      ] }) })
    }
  );
}
function BuildWithUsCards() {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8", children: advantages.map((advantage, index) => /* @__PURE__ */ jsx(AdvantageCard, { advantage, index }, index)) });
}

const $$BuildWithUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="build-with-us" class="py-20 md:py-32 bg-linear-to-br from-gray-50 to-white"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-12 md:mb-16"> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-[#E89B33] to-[#6B8E23] bg-clip-text text-transparent">
Ventajas de construir con nosotros
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Descubre por qué Ekomod es la mejor opción para tu proyecto de construcción modular
</p> </div> ${renderComponent($$result, "BuildWithUsCards", BuildWithUsCards, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/BuildWithUsCards", "client:component-export": "default" })} </div> </section>`;
}, "/home/julio/workspace/Ekomod/src/components/BuildWithUs.astro", void 0);

const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

function ProjectGalleryGrid({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", children: projects.map((project, index) => /* @__PURE__ */ jsx(
      Card,
      {
        className: "group cursor-pointer overflow-hidden border-2 border-gray-200 hover:border-[#355070] transition-all duration-300 hover:shadow-xl",
        onClick: () => setSelectedProject(project),
        children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden aspect-[4/3]", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: project.image.src,
              alt: project.title,
              className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold bg-[#E89B33] px-3 py-1 rounded-full mb-2 inline-block", children: project.category }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-1", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm opacity-90", children: project.description })
          ] })
        ] }) })
      },
      index
    )) }),
    /* @__PURE__ */ jsx(Dialog, { open: !!selectedProject, onOpenChange: () => setSelectedProject(null), children: /* @__PURE__ */ jsx(DialogContent, { className: "max-w-5xl max-h-[90vh] overflow-auto bg-white", children: selectedProject && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold bg-linear-to-r from-[#E89B33] to-[#6B8E23] text-white px-4 py-2 rounded-full", children: selectedProject.category }) }),
        /* @__PURE__ */ jsx(DialogTitle, { className: "text-3xl md:text-4xl font-bold text-gray-900", children: selectedProject.title }),
        /* @__PURE__ */ jsx(DialogDescription, { className: "text-lg md:text-xl text-gray-600", children: selectedProject.description })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: selectedProject.image.src,
          alt: selectedProject.title,
          className: "w-full h-auto rounded-xl shadow-2xl"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              setSelectedProject(null);
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
            },
            className: "flex-1 px-6 py-3 bg-linear-to-r from-[#E89B33] to-[#6B8E23] text-white rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer",
            children: "Solicitar cotización"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setSelectedProject(null),
            className: "px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all cursor-pointer",
            children: "Cerrar"
          }
        )
      ] })
    ] }) }) })
  ] });
}

const $$ProjectGallery = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "M\xF3dulo Tipo S",
      description: "40m\xB2 de dise\xF1o compacto y funcional",
      image: renderTipoS,
      category: "Modular"
    },
    {
      title: "Chalet",
      description: "Combinaci\xF3n perfecta de espacio y estilo",
      image: renderChalet,
      category: "Premium"
    },
    {
      title: "M\xF3dulo Tipo M",
      description: "80m\xB2 para m\xE1ximo confort",
      image: renderTipoM,
      category: "Modular"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="galeria" class="py-20 md:py-32 bg-white"> <div class="container mx-auto px-4 md:px-6"> <div class="text-center mb-12 md:mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Nuestros Proyectos
</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Explora nuestra gama de casas modulares diseñadas para adaptarse a tus necesidades
</p> </div> ${renderComponent($$result, "ProjectGalleryGrid", ProjectGalleryGrid, { "projects": projects, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/ProjectGalleryGrid", "client:component-export": "default" })} </div> </section>`;
}, "/home/julio/workspace/Ekomod/src/components/ProjectGallery.astro", void 0);

const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const faqs = [
  {
    question: "¿Cuánto tiempo toma la construcción de una casa modular?",
    answer: "El tiempo de construcción varía según el modelo, pero en promedio toma aproximadamente 60 días. Esto es significativamente más rápido que la construcción tradicional, ya que nuestras casas modulares se fabrican en condiciones controladas y luego se ensamblan en el sitio."
  },
  {
    question: "¿Cuál es el rango de precios de las casas modulares?",
    answer: "Nuestros precios varían según el modelo y las personalizaciones. El Módulo Tipo S (40m²) es nuestra opción más accesible, el Módulo Tipo M (80m²) ofrece más espacio, y el Chalet combina ambos modelos. Contáctanos para obtener una cotización personalizada basada en tus necesidades específicas."
  },
  {
    question: "¿Puedo personalizar el diseño de mi casa modular?",
    answer: "¡Absolutamente! Ofrecemos un servicio de diseño personalizado donde trabajamos contigo para adaptar nuestros modelos a tus necesidades y preferencias. Puedes elegir acabados, distribución interior, colores, y agregar características especiales como paneles solares."
  },
  {
    question: "¿Cómo funciona el proceso de entrega e instalación?",
    answer: "Una vez finalizada la fabricación, transportamos los módulos a tu terreno. Nuestro equipo se encarga de la instalación completa, incluyendo cimentación, ensamblaje de módulos, y conexiones de servicios básicos. La instalación típicamente toma solo unos días."
  },
  {
    question: "¿Qué garantía ofrecen en las casas modulares?",
    answer: "Todas nuestras casas modulares vienen con garantía estructural. Utilizamos materiales de alta calidad y procesos de construcción certificados. Te proporcionaremos documentación completa sobre las garantías específicas de cada componente y sistema."
  },
  {
    question: "¿Necesito permisos especiales para instalar una casa modular?",
    answer: "Como cualquier construcción, necesitarás permisos de construcción locales. Te asesoramos en este proceso y proporcionamos toda la documentación técnica necesaria. Los requisitos varían según la ubicación, pero nuestro equipo tiene experiencia en navegación de regulaciones locales."
  },
  {
    question: "¿Las casas modulares son sostenibles?",
    answer: "Sí, nuestras casas son altamente sostenibles. Utilizamos materiales eco-amigables, procesos de construcción eficientes que reducen desperdicios, y ofrecemos opciones de energía solar. Además, el diseño modular permite futuras expansiones o reconfiguraciones sin generar residuos significativos."
  },
  {
    question: "¿Puedo financiar la compra de una casa modular?",
    answer: "Sí, trabajamos con varias instituciones financieras que ofrecen opciones de financiamiento para casas modulares. Durante tu consulta, podemos conectarte con nuestros socios financieros y ayudarte a encontrar la mejor opción de pago para tu proyecto."
  }
];
function FAQContent() {
  return /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full space-y-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(
    AccordionItem,
    {
      value: `item-${index}`,
      className: "border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow",
      children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-lg font-semibold text-gray-900 hover:text-[#355070] py-6", children: faq.question }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-gray-700 pb-6 leading-relaxed", children: faq.answer })
      ]
    },
    index
  )) });
}

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="py-20 md:py-32 bg-linear-to-b from-white to-gray-50"> <div class="container mx-auto px-4 md:px-6 max-w-4xl"> <div class="text-center mb-12 md:mb-16"> <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
Preguntas Frecuentes
</h2> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Encuentra respuestas a las preguntas más comunes sobre nuestras casas modulares
</p> </div> ${renderComponent($$result, "FAQContent", FAQContent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/FAQContent", "client:component-export": "default" })} </div> </section>`;
}, "/home/julio/workspace/Ekomod/src/components/FAQ.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "HousesSection", $$HousesSection, {})} ${renderComponent($$result2, "ProjectGallery", $$ProjectGallery, {})} ${renderComponent($$result2, "BuildWithUs", $$BuildWithUs, {})} ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "ContactUs", $$ContactUs, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/julio/workspace/Ekomod/src/pages/index.astro", void 0);

const $$file = "/home/julio/workspace/Ekomod/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
