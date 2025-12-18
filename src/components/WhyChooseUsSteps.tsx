import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Pencil, Hammer, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

function StepCard({ step, index }: { step: typeof steps[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline connector */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute left-8 top-24 w-0.5 h-full bg-linear-to-b from-[#E89B33] to-[#6B8E23] opacity-30" />
      )}

      <Card className="border-2 border-gray-200 hover:border-[#E89B33] transition-all duration-300 hover:shadow-xl bg-white/95 backdrop-blur-sm">
        <CardContent className="p-6 md:p-8">
          <div className="flex gap-6 items-start">
            {/* Step number circle */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#E89B33] to-[#6B8E23] flex items-center justify-center shadow-lg">
                <Icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#355070] flex items-center justify-center text-white font-bold text-sm shadow-md">
                {step.number}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function WhyChooseUsSteps() {
  return (
    <div className="space-y-6 md:space-y-8">
      {steps.map((step, index) => (
        <StepCard key={index} step={step} index={index} />
      ))}
    </div>
  );
}
