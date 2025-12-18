import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_BaK1mv8C.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_DPuNHMCF.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BzE_mJVT.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/julio/workspace/Ekomod/","cacheDir":"file:///home/julio/workspace/Ekomod/node_modules/.astro/","outDir":"file:///home/julio/workspace/Ekomod/dist/","srcDir":"file:///home/julio/workspace/Ekomod/src/","publicDir":"file:///home/julio/workspace/Ekomod/public/","buildClientDir":"file:///home/julio/workspace/Ekomod/dist/client/","buildServerDir":"file:///home/julio/workspace/Ekomod/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.53.5_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cookies.BuN8fn0Z.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cookies.BuN8fn0Z.css"},{"type":"inline","content":"header[data-astro-cid-5blmo7yk].active{transform:translateY(-100%)}\n"}],"routeData":{"route":"/cookies","isIndex":false,"type":"page","pattern":"^\\/cookies\\/?$","segments":[[{"content":"cookies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cookies.astro","pathname":"/cookies","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cookies.BuN8fn0Z.css"},{"type":"inline","content":"header[data-astro-cid-5blmo7yk].active{transform:translateY(-100%)}\n"}],"routeData":{"route":"/privacidad","isIndex":false,"type":"page","pattern":"^\\/privacidad\\/?$","segments":[[{"content":"privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacidad.astro","pathname":"/privacidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cookies.BuN8fn0Z.css"},{"type":"inline","content":"header[data-astro-cid-5blmo7yk].active{transform:translateY(-100%)}\n"}],"routeData":{"route":"/terminos","isIndex":false,"type":"page","pattern":"^\\/terminos\\/?$","segments":[[{"content":"terminos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terminos.astro","pathname":"/terminos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cookies.BuN8fn0Z.css"},{"type":"inline","content":"header[data-astro-cid-5blmo7yk].active{transform:translateY(-100%)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://ekomod.com.co","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/julio/workspace/Ekomod/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/julio/workspace/Ekomod/src/pages/cookies.astro",{"propagation":"none","containsHead":true}],["/home/julio/workspace/Ekomod/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/julio/workspace/Ekomod/src/pages/privacidad.astro",{"propagation":"none","containsHead":true}],["/home/julio/workspace/Ekomod/src/pages/terminos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.53.5_typescript@5.9.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/cookies@_@astro":"pages/cookies.astro.mjs","\u0000@astro-page:src/pages/privacidad@_@astro":"pages/privacidad.astro.mjs","\u0000@astro-page:src/pages/terminos@_@astro":"pages/terminos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BrSgk61n.mjs","/home/julio/workspace/Ekomod/node_modules/.pnpm/@astrojs+vercel@9.0.2_astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6_8f130597c4f930f8382ded7cedbd30d7/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_Xm7Osn2E.mjs","/home/julio/workspace/Ekomod/src/components/FooterContactIcons":"_astro/FooterContactIcons.tNi2x6tN.js","/home/julio/workspace/Ekomod/src/components/HeroContent":"_astro/HeroContent.CG7k5qcM.js","/home/julio/workspace/Ekomod/src/components/WhyChooseUsSteps":"_astro/WhyChooseUsSteps.rAaa_JdK.js","/home/julio/workspace/Ekomod/src/components/HousesCarousel":"_astro/HousesCarousel.C4QC_kbE.js","/home/julio/workspace/Ekomod/src/components/_ContactForm":"_astro/_ContactForm.CDc2aTbf.js","/home/julio/workspace/Ekomod/src/components/BuildWithUsCards":"_astro/BuildWithUsCards.4T8kFiiK.js","/home/julio/workspace/Ekomod/src/components/ProjectGalleryGrid":"_astro/ProjectGalleryGrid.D3y_o6pt.js","/home/julio/workspace/Ekomod/src/components/FAQContent":"_astro/FAQContent.D_e7nuIU.js","@astrojs/react/client.js":"_astro/client.DJwY-2mr.js","/home/julio/workspace/Ekomod/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.CoU3YJR-.js","/home/julio/workspace/Ekomod/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.Bo1071mB.js","/home/julio/workspace/Ekomod/node_modules/.pnpm/astro@5.16.6_@types+node@25.0.3_@vercel+functions@2.2.13_jiti@2.6.1_lightningcss@1.30.2_rollup@4.53.5_typescript@5.9.3/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.QW52Ox2j.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/julio/workspace/Ekomod/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","let c=0;const i=document.getElementById(\"navbar\"),s=document.getElementById(\"mobile-menu-btn\"),d=document.getElementById(\"mobile-menu-close\"),l=document.getElementById(\"mobile-menu\");document.getElementById(\"logo-link\")?.addEventListener(\"click\",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:\"smooth\"})});window.addEventListener(\"scroll\",function(){let e=window.pageYOffset||document.documentElement.scrollTop;e>c&&e>100?i?.classList.add(\"active\"):i?.classList.remove(\"active\"),c=e});s?.addEventListener(\"click\",()=>{l?.classList.remove(\"hidden\"),document.body.style.overflow=\"hidden\"});d?.addEventListener(\"click\",()=>{l?.classList.add(\"hidden\"),document.body.style.overflow=\"\"});document.querySelectorAll(\".mobile-nav-link\").forEach(e=>{e.addEventListener(\"click\",n=>{const t=e.getAttribute(\"href\");if(t&&t.startsWith(\"#\")){n.preventDefault(),l?.classList.add(\"hidden\"),document.body.style.overflow=\"\";const o=document.querySelector(t);o&&o.scrollIntoView({behavior:\"smooth\"})}})});document.querySelectorAll('.nav-link, a[href^=\"#\"]').forEach(e=>{e.addEventListener(\"click\",function(n){const t=this.getAttribute(\"href\");if(t&&t.startsWith(\"#\")&&!this.classList.contains(\"mobile-nav-link\")){n.preventDefault();const o=document.querySelector(t);o&&o.scrollIntoView({behavior:\"smooth\"})}})});"],["/home/julio/workspace/Ekomod/src/components/Footer.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll('footer a[href^=\"#\"]').forEach(t=>{t.addEventListener(\"click\",o=>{const e=t.getAttribute(\"href\");if(e&&e.startsWith(\"#\")){o.preventDefault();const r=document.querySelector(e);r&&r.scrollIntoView({behavior:\"smooth\"})}})});"]],"assets":["/_astro/ekomod-logo.ffq-VXzT.png","/_astro/success.Dtdn2D6-.png","/_astro/render-mod-tipo-s.B6N8OGhr.png","/_astro/logo-ACG.DDdHs1GG.png","/_astro/logo-konstruct.DvzW-gDd.png","/_astro/render-chalet.BWj46F54.png","/_astro/render-mod-tipo-m.gXFJCYDs.png","/_astro/background-hero-image.12FiSOto.png","/_astro/urbanist-latin-wght-normal.D69JTELx.woff2","/_astro/urbanist-latin-ext-wght-normal.Bdxck5Au.woff2","/_astro/cookies.BuN8fn0Z.css","/favicon.svg","/og-image.jpg","/robots.txt","/_astro/BuildWithUsCards.4T8kFiiK.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.QW52Ox2j.js","/_astro/FAQContent.D_e7nuIU.js","/_astro/FooterContactIcons.tNi2x6tN.js","/_astro/HeroContent.CG7k5qcM.js","/_astro/HousesCarousel.C4QC_kbE.js","/_astro/ProjectGalleryGrid.D3y_o6pt.js","/_astro/WhyChooseUsSteps.rAaa_JdK.js","/_astro/_ContactForm.CDc2aTbf.js","/_astro/button.D1vUk63v.js","/_astro/card.DOxfYPGB.js","/_astro/client.DJwY-2mr.js","/_astro/createLucideIcon.CiFODMVP.js","/_astro/index.CMb1yQ5D.js","/_astro/index.DPV4Kj-g.js","/_astro/index.DmmgTij8.js","/_astro/index.mBx5G7H9.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/message-square.Dl-Yiqyg.js","/_astro/phone.Dxm-DWUg.js","/_astro/proxy.CNzl4ryb.js","/_astro/use-in-view.BIS_K-6c.js","/_astro/utils.CkYB-R1u.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"FwbRsLwouMBp4nT5Nus0T3M1lnsj4/QVfiKyJBb5w1s="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
