import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as renderScript, a as renderTemplate, d as addAttribute } from './astro/server_BaK1mv8C.mjs';
import 'piccolore';
import { a as $$Icon } from './Icon_DBagqWEU.mjs';
/* empty css                           */
import { $ as $$Image } from './_astro_assets_LqZiRpet.mjs';
import { jsx } from 'react/jsx-runtime';
import { Mail, Phone, MapPin } from 'lucide-react';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="navbar" class="h-20 w-full bg-white/90 fixed top-0 transition-all duration-300 z-50 backdrop-blur-md shadow-sm" data-astro-cid-5blmo7yk> <div class="container mx-auto px-4 md:px-6 h-full flex items-center justify-between" data-astro-cid-5blmo7yk> <a href="#" class="flex items-center gap-3 hover:opacity-80 transition-opacity" id="logo-link" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Icon", $$Icon, { "name": "ekomod-logo", "class": "w-10 h-10 md:w-12 md:h-12", "data-astro-cid-5blmo7yk": true })} <span class="text-gray-900 text-2xl font-bold md:text-3xl" data-astro-cid-5blmo7yk>EKOMOD</span> </a> <!-- Desktop navigation --> <nav class="hidden md:flex items-center gap-8" data-astro-cid-5blmo7yk> <a href="#container" class="nav-link text-gray-700 hover:text-[#355070] font-medium transition-colors" data-astro-cid-5blmo7yk>
Inicio
</a> <a href="#houses" class="nav-link text-gray-700 hover:text-[#355070] font-medium transition-colors" data-astro-cid-5blmo7yk>
Modelos
</a> <a href="#gallery" class="nav-link text-gray-700 hover:text-[#355070] font-medium transition-colors" data-astro-cid-5blmo7yk>
Galería
</a> <a href="#faq" class="nav-link text-gray-700 hover:text-[#355070] font-medium transition-colors" data-astro-cid-5blmo7yk>
FAQ
</a> <a href="#contact-us" class="px-6 py-2.5 bg-[#355070] text-white rounded-lg font-semibold hover:bg-[#355070]/90 transition-all hover:shadow-md" data-astro-cid-5blmo7yk>
Contacto
</a> </nav> <!-- Mobile hamburger button --> <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-700 hover:text-[#355070] transition-colors" aria-label="Abrir menú" data-astro-cid-5blmo7yk> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </header> <!-- Full-screen mobile menu overlay --> <div id="mobile-menu" class="fixed inset-0 bg-gradient-to-br from-[#355070] via-[#2a4058] to-[#1f2f40] z-[100] hidden md:hidden transition-opacity duration-300" data-astro-cid-5blmo7yk> <div class="flex flex-col h-full" data-astro-cid-5blmo7yk> <!-- Header with logo and close button --> <div class="flex items-center justify-between p-4 h-20" data-astro-cid-5blmo7yk> <div class="flex items-center gap-3" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Icon", $$Icon, { "name": "ekomod-logo", "class": "w-10 h-10", "data-astro-cid-5blmo7yk": true })} <span class="text-white text-2xl font-bold" data-astro-cid-5blmo7yk>EKOMOD</span> </div> <button id="mobile-menu-close" class="p-2 text-white hover:text-[#E89B33] transition-colors" aria-label="Cerrar menú" data-astro-cid-5blmo7yk> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5blmo7yk></path> </svg> </button> </div> <!-- Navigation links - large and touch-friendly --> <nav class="flex-1 flex flex-col items-center justify-center gap-8" data-astro-cid-5blmo7yk> <a href="#container" class="mobile-nav-link text-3xl text-white font-semibold hover:text-[#E89B33] transition-colors" data-astro-cid-5blmo7yk>
Inicio
</a> <a href="#houses" class="mobile-nav-link text-3xl text-white font-semibold hover:text-[#E89B33] transition-colors" data-astro-cid-5blmo7yk>
Modelos
</a> <a href="#gallery" class="mobile-nav-link text-3xl text-white font-semibold hover:text-[#E89B33] transition-colors" data-astro-cid-5blmo7yk>
Galería
</a> <a href="#faq" class="mobile-nav-link text-3xl text-white font-semibold hover:text-[#E89B33] transition-colors" data-astro-cid-5blmo7yk>
FAQ
</a> <a href="#contact-us" class="mobile-nav-link px-8 py-4 bg-[#E89B33] text-white rounded-xl text-2xl font-bold hover:bg-[#d68a24] transition-colors mt-4" data-astro-cid-5blmo7yk>
Contacto
</a> </nav> <!-- Decorative elements --> <div class="absolute bottom-10 left-10 w-32 h-32 bg-[#E89B33] rounded-full blur-3xl opacity-20" data-astro-cid-5blmo7yk></div> <div class="absolute top-20 right-10 w-24 h-24 bg-[#6B8E23] rounded-full blur-3xl opacity-20" data-astro-cid-5blmo7yk></div> </div> </div> ${renderScript($$result, "/home/julio/workspace/Ekomod/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/julio/workspace/Ekomod/src/components/Navbar.astro", void 0);

const logoACG = new Proxy({"src":"/_astro/logo-ACG.DDdHs1GG.png","width":792,"height":612,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/julio/workspace/Ekomod/src/assets/logo-ACG.png";
							}
							
							return target[name];
						}
					});

const logoKonstruct = new Proxy({"src":"/_astro/logo-konstruct.DvzW-gDd.png","width":309,"height":150,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/julio/workspace/Ekomod/src/assets/logo-konstruct.png";
							}
							
							return target[name];
						}
					});

function EmailIcon() {
  return /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-[#E89B33]" });
}
function PhoneIcon() {
  return /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 text-[#6B8E23]" });
}
function MapIcon() {
  return /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-[#355070]" });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-linear-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 md:py-28 relative overflow-hidden"> <!-- Decorative background elements --> <div class="absolute inset-0 opacity-5"> <div class="absolute top-0 right-0 w-96 h-96 bg-[#E89B33] rounded-full blur-3xl"></div> <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#6B8E23] rounded-full blur-3xl"></div> </div> <div class="container mx-auto px-4 md:px-6 relative z-10"> <!-- Top Section --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16"> <!-- Company Info --> <div class="space-y-6 lg:col-span-1"> <div class="space-y-4"> <div class="flex items-center gap-3"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ekomod-logo", "class": "w-12 h-12" })} <span class="text-3xl font-black bg-linear-to-r from-[#E89B33] to-[#6B8E23] bg-clip-text text-transparent">EKOMOD</span> </div> <p class="text-gray-400 leading-relaxed text-base">
Construyendo el futuro con casas modulares sostenibles, rápidas y de alta calidad.
</p> </div> <!-- Social Media --> <div class="space-y-3"> <h4 class="text-sm font-semibold text-gray-300 uppercase tracking-wider">Síguenos</h4> <div class="flex gap-3"> <a href="https://www.instagram.com/konstruct.col/" target="_blank" rel="noopener noreferrer" class="group w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "w-6 h-6 text-white" })} </a> <a href="https://www.facebook.com/profile.php?id=61574504593921" target="_blank" rel="noopener noreferrer" class="group w-12 h-12 bg-linear-to-br from-[#355070] to-blue-600 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 cursor-pointer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebook", "class": "w-6 h-6 text-white" })} </a> </div> </div> </div> <!-- Quick Links --> <div class="space-y-6"> <h3 class="text-xl font-bold mb-6 relative inline-block"> <span class="relative z-10">Enlaces Rápidos</span> <div class="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#E89B33] to-[#6B8E23] rounded-full"></div> </h3> <ul class="space-y-4"> <li> <a href="#container" class="group flex items-center gap-2 text-gray-400 hover:text-[#E89B33] transition-all cursor-pointer"> <span class="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#E89B33] transition-colors"></span> <span class="text-base">Inicio</span> </a> </li> <li> <a href="#houses" class="group flex items-center gap-2 text-gray-400 hover:text-[#E89B33] transition-all cursor-pointer"> <span class="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#E89B33] transition-colors"></span> <span class="text-base">Nuestros Modelos</span> </a> </li> <li> <a href="#gallery" class="group flex items-center gap-2 text-gray-400 hover:text-[#E89B33] transition-all cursor-pointer"> <span class="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#E89B33] transition-colors"></span> <span class="text-base">Galería</span> </a> </li> <li> <a href="#why-choose-us" class="group flex items-center gap-2 text-gray-400 hover:text-[#E89B33] transition-all cursor-pointer"> <span class="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#E89B33] transition-colors"></span> <span class="text-base">Por qué elegirnos</span> </a> </li> <li> <a href="#faq" class="group flex items-center gap-2 text-gray-400 hover:text-[#E89B33] transition-all cursor-pointer"> <span class="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#E89B33] transition-colors"></span> <span class="text-base">Preguntas Frecuentes</span> </a> </li> </ul> </div> <!-- Contact --> <div class="space-y-6"> <h3 class="text-xl font-bold mb-6 relative inline-block"> <span class="relative z-10">Contacto</span> <div class="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#E89B33] to-[#6B8E23] rounded-full"></div> </h3> <ul class="space-y-5"> <li> <a href="mailto:konstruct.soluciones@gmail.com" class="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"> <div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#E89B33]/20 transition-colors"> ${renderComponent($$result, "EmailIcon", EmailIcon, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/FooterContactIcons", "client:component-export": "EmailIcon" })} </div> <div class="flex-1"> <p class="text-xs text-gray-500 mb-1">Email</p> <p class="text-sm wrap-break-word">konstruct.soluciones@gmail.com</p> </div> </a> </li> <li> <a href="tel:+573244270277" class="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"> <div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#6B8E23]/20 transition-colors"> ${renderComponent($$result, "PhoneIcon", PhoneIcon, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/FooterContactIcons", "client:component-export": "PhoneIcon" })} </div> <div class="flex-1"> <p class="text-xs text-gray-500 mb-1">Teléfono</p> <p class="text-sm">(+57) 324 4270277</p> </div> </a> </li> <li class="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors cursor-default"> <div class="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#355070]/20 transition-colors"> ${renderComponent($$result, "MapIcon", MapIcon, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/julio/workspace/Ekomod/src/components/FooterContactIcons", "client:component-export": "MapIcon" })} </div> <div class="flex-1"> <p class="text-xs text-gray-500 mb-1">Ubicación</p> <p class="text-sm">Colombia</p> </div> </li> </ul> <div class="pt-4 border-t border-gray-800"> <h4 class="font-semibold text-sm text-gray-300 mb-3">Horario de atención</h4> <div class="space-y-2 text-sm text-gray-400"> <p class="flex justify-between"> <span>Lunes - Viernes:</span> <span class="font-medium text-gray-300">8AM - 6PM</span> </p> <p class="flex justify-between"> <span>Sábados:</span> <span class="font-medium text-gray-300">9AM - 2PM</span> </p> </div> </div> </div> <!-- Partners --> <div class="space-y-6"> <h3 class="text-xl font-bold mb-6 relative inline-block"> <span class="relative z-10">Construido por</span> <div class="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#E89B33] to-[#6B8E23] rounded-full"></div> </h3> <div class="space-y-6"> <div class="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all group flex items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": logoACG, "alt": "ACG Logo", "format": "avif", "quality": "mid", "class": "w-full max-w-35 opacity-95 group-hover:opacity-100 transition-opacity mx-auto" })} </div> <div class="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all group flex items-center justify-center"> <img${addAttribute(logoKonstruct.src, "src")} alt="Konstruct Logo" class="w-full max-w-40 opacity-95 group-hover:opacity-100 transition-opacity mx-auto" width="309" height="150" loading="lazy" decoding="async"> </div> </div> </div> </div> <!-- Bottom Bar --> <div class="pt-10 border-t border-gray-800/50"> <div class="flex flex-col md:flex-row justify-between items-center gap-6"> <p class="text-gray-500 text-sm text-center md:text-left">
© ${(/* @__PURE__ */ new Date()).getFullYear()} <span class="text-gray-300 font-semibold">Ekomod</span>. Todos los derechos reservados.
</p> <div class="flex gap-8 text-sm"> <a href="/privacidad" class="text-gray-500 hover:text-[#E89B33] transition-colors cursor-pointer relative group"> <span>Privacidad</span> <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E89B33] group-hover:w-full transition-all duration-300"></span> </a> <a href="/terminos" class="text-gray-500 hover:text-[#E89B33] transition-colors cursor-pointer relative group"> <span>Términos</span> <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E89B33] group-hover:w-full transition-all duration-300"></span> </a> <a href="/cookies" class="text-gray-500 hover:text-[#E89B33] transition-colors cursor-pointer relative group"> <span>Cookies</span> <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E89B33] group-hover:w-full transition-all duration-300"></span> </a> </div> </div> </div> </div> </footer> ${renderScript($$result, "/home/julio/workspace/Ekomod/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/julio/workspace/Ekomod/src/components/Footer.astro", void 0);

export { $$Navbar as $, $$Footer as a };
