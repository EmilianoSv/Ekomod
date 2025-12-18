import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_BaK1mv8C.mjs';
import 'piccolore';
import { a as $$Icon } from './Icon_DH-xMoPP.mjs';

const $$LegalNavbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="h-20 w-full bg-white/90 fixed top-0 z-50 backdrop-blur-md border-b border-gray-100"> <div class="container mx-auto px-4 md:px-6 h-full flex items-center"> <a href="/" class="flex items-center gap-3 group"> ${renderComponent($$result, "Icon", $$Icon, { "name": "ekomod-logo", "class": "w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-105" })} <span class="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#355070] to-[#2a4058] bg-clip-text text-transparent group-hover:from-[#E89B33] group-hover:to-[#6B8E23] transition-all duration-300">
EKOMOD
</span> </a> </div> </header>`;
}, "/home/julio/workspace/Ekomod/src/components/LegalNavbar.astro", void 0);

export { $$LegalNavbar as $ };
