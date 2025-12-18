import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Truck, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

function AdvantageCard({ advantage, index }: { advantage: typeof advantages[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = advantage.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
          <div
            className="shrink-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${advantage.color}20` }}
          >
            <Icon
              className="transition-all duration-300 group-hover:scale-110"
              size={48}
              style={{ color: advantage.color }}
              strokeWidth={1.5}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#355070] transition-colors">
              {advantage.title}
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {advantage.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function BuildWithUsCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
      {advantages.map((advantage, index) => (
        <AdvantageCard key={index} advantage={advantage} index={index} />
      ))}
    </div>
  );
}
