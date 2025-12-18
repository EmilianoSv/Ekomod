import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BaK1mv8C.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Icon } from '../chunks/Icon_AGNatuuD.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina no encontrada - Ekomod", "description": "La p\xE1gina que buscas no existe o ha sido movida." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-[#355070] via-[#2a4058] to-[#1f2f40] flex items-center justify-center p-6 relative overflow-hidden"> <!-- Decorative elements --> <div class="absolute inset-0 opacity-10"> <div class="absolute top-20 right-20 w-72 h-72 bg-[#E89B33] rounded-full blur-3xl"></div> <div class="absolute bottom-20 left-20 w-96 h-96 bg-[#6B8E23] rounded-full blur-3xl"></div> </div> <div class="text-center relative z-10 max-w-2xl mx-auto"> <!-- Logo --> <a href="/" class="inline-flex items-center gap-3 mb-12 hover:opacity-80 transition-opacity"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ekomod-logo", "class": "w-12 h-12" })} <span class="text-white text-3xl font-bold">EKOMOD</span> </a> <!-- 404 Number --> <div class="mb-8"> <span class="text-[150px] md:text-[200px] font-black leading-none bg-gradient-to-r from-[#E89B33] via-[#6B8E23] to-[#E89B33] bg-clip-text text-transparent">
404
</span> </div> <!-- Message --> <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
Página no encontrada
</h1> <p class="text-xl text-white/70 mb-10 max-w-md mx-auto">
Lo sentimos, la página que buscas no existe o ha sido movida a otra ubicación.
</p> <!-- Actions --> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#E89B33] to-[#6B8E23] text-white font-bold rounded-xl shadow-2xl hover:shadow-[#E89B33]/50 hover:scale-[1.02] transition-all duration-300"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg>
Volver al inicio
</a> <a href="/#contact-us" class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-md transition-all duration-300"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
Contáctanos
</a> </div> <!-- Helpful links --> <div class="mt-16 pt-8 border-t border-white/10"> <p class="text-white/50 text-sm mb-4">También puedes visitar:</p> <div class="flex flex-wrap justify-center gap-6 text-white/70"> <a href="/#houses" class="hover:text-[#E89B33] transition-colors">Modelos</a> <a href="/#gallery" class="hover:text-[#E89B33] transition-colors">Galería</a> <a href="/#faq" class="hover:text-[#E89B33] transition-colors">FAQ</a> <a href="/#contact-us" class="hover:text-[#E89B33] transition-colors">Contacto</a> </div> </div> </div> </main> ` })}`;
}, "/home/julio/workspace/Ekomod/src/pages/404.astro", void 0);

const $$file = "/home/julio/workspace/Ekomod/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
