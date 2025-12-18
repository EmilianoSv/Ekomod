import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BaK1mv8C.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Icon_CdguUSTV.mjs';
import { $ as $$Navbar, a as $$Footer } from '../chunks/Footer_BUCoCPra.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-32 pb-20 min-h-screen bg-gray-50"> <div class="container mx-auto px-4 md:px-6 max-w-4xl"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Política de Privacidad</h1> <div class="prose prose-lg max-w-none text-gray-700 space-y-8"> <p class="text-xl text-gray-600">
Última actualización: ${(/* @__PURE__ */ new Date()).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })} </p> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900">1. Información que Recopilamos</h2> <p>
En Ekomod, recopilamos información personal que usted nos proporciona voluntariamente cuando:
</p> <ul class="list-disc pl-6 space-y-2"> <li>Completa nuestro formulario de contacto</li> <li>Solicita una cotización para su proyecto</li> <li>Se comunica con nosotros por correo electrónico o teléfono</li> </ul> <p>
La información que podemos recopilar incluye: nombre completo, dirección de correo electrónico,
						número de teléfono, tipo de proyecto de interés y cualquier mensaje adicional que desee compartir.
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900">2. Uso de la Información</h2> <p>Utilizamos la información recopilada para:</p> <ul class="list-disc pl-6 space-y-2"> <li>Responder a sus consultas y solicitudes de cotización</li> <li>Proporcionarle información sobre nuestros servicios de construcción modular</li> <li>Comunicarnos con usted sobre el progreso de su proyecto</li> <li>Mejorar nuestros servicios y experiencia del usuario</li> <li>Cumplir con obligaciones legales</li> </ul> </section> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900">3. Protección de Datos</h2> <p>
Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger
						su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
						Sin embargo, ningún método de transmisión por Internet es 100% seguro.
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900">4. Compartir Información</h2> <p>
No vendemos, intercambiamos ni transferimos su información personal a terceros externos,
						excepto cuando sea necesario para:
</p> <ul class="list-disc pl-6 space-y-2"> <li>Cumplir con la ley o procesos legales</li> <li>Proteger nuestros derechos o propiedad</li> <li>Proveedores de servicios que nos ayudan a operar nuestro sitio web (bajo acuerdos de confidencialidad)</li> </ul> </section> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900">5. Sus Derechos</h2> <p>De acuerdo con la legislación colombiana de protección de datos, usted tiene derecho a:</p> <ul class="list-disc pl-6 space-y-2"> <li>Acceder a sus datos personales</li> <li>Rectificar datos inexactos o incompletos</li> <li>Solicitar la eliminación de sus datos</li> <li>Revocar su consentimiento en cualquier momento</li> </ul> </section> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900">6. Retención de Datos</h2> <p>
Conservamos su información personal solo durante el tiempo necesario para cumplir con
						los propósitos para los que fue recopilada, o según lo requiera la ley aplicable.
</p> </section> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900">7. Contacto</h2> <p>
Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos,
						puede contactarnos a través de:
</p> <ul class="list-none space-y-2"> <li><strong>Email:</strong> konstruct.soluciones@gmail.com</li> <li><strong>Teléfono:</strong> (+57) 324 4270277</li> </ul> </section> <section class="space-y-4"> <h2 class="text-2xl font-bold text-gray-900">8. Cambios a Esta Política</h2> <p>
Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
						Le notificaremos sobre cambios significativos publicando la nueva política en esta página.
</p> </section> </div> <div class="mt-12 pt-8 border-t border-gray-200"> <a href="/" class="inline-flex items-center gap-2 text-[#355070] hover:text-[#E89B33] font-semibold transition-colors"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path> </svg>
Volver al inicio
</a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/julio/workspace/Ekomod/src/pages/privacidad.astro", void 0);

const $$file = "/home/julio/workspace/Ekomod/src/pages/privacidad.astro";
const $$url = "/privacidad";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacidad,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
