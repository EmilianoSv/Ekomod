import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function FAQContent() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-[#355070] py-6">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
