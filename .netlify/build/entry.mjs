import { renderers } from './renderers.mjs';
import { manifest } from './manifest_h0OlL3r9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/areas/_area_.astro.mjs');
const _page3 = () => import('./pages/notices/_notice_.astro.mjs');
const _page4 = () => import('./pages/noticias.astro.mjs');
const _page5 = () => import('./pages/profesionales/_professional_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/areas/[area].astro", _page2],
    ["src/pages/notices/[notice].astro", _page3],
    ["src/pages/Noticias.astro", _page4],
    ["src/pages/profesionales/[professional].astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "df73330f-fc6c-45d0-a036-80599207adfa"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
