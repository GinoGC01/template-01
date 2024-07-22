import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, e as renderTransition, b as createAstro } from './astro/server_C0UUweck.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_DtAm0TRO.mjs';
import { n as notices } from './notices_l3UNHi7O.mjs';
import { jsx } from 'react/jsx-runtime';
/* empty css                            */
import { $ as $$CardNotice } from './CardNotice_LGbl6IVF.mjs';
/* empty css                          */

function Notices() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 2048 2048",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M1487 768q-59 20-111 52t-97 76h-255V768zm-367 512q0 32 4 64t13 64h-113v-128zm928-768v383q-28-28-60-50t-68-42V640h-128v113q-32-8-64-12t-64-5V384H128v1031q0 25 9 47t26 38t39 26t47 10h842l-128 128H249q-51 0-96-19t-80-54t-53-79t-20-97V256h1792v256zm-512 128H256V512h1280zM256 768h640v640H256zm128 512h384V896H384zm640-256h128v79q-9 25-15 49h-113zm640-128q79 0 149 30t122 82t83 123t30 149q0 80-30 149t-82 122t-123 83t-149 30q-60 0-116-18t-106-54l-437 437q-19 19-45 19t-45-19t-19-45t19-45l437-437q-35-49-53-105t-19-117q0-79 30-149t82-122t122-83t150-30m0 640q53 0 99-20t82-55t55-81t20-100q0-53-20-99t-55-82t-81-55t-100-20q-53 0-99 20t-82 55t-55 81t-20 100q0 53 20 99t55 82t81 55t100 20"
        }
      )
    }
  );
}

function Home() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 32 32",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"
        }
      )
    }
  );
}

const $$MiniNavNotice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-astro-cid-7g7g57an> <li data-astro-cid-7g7g57an> <a href="/" title="Home" data-astro-cid-7g7g57an>${renderComponent($$result, "Home", Home, { "data-astro-cid-7g7g57an": true })}</a> </li> <li data-astro-cid-7g7g57an> <a href="/Noticias" title="Sección de noticias" data-astro-cid-7g7g57an>${renderComponent($$result, "Notices", Notices, { "data-astro-cid-7g7g57an": true })}</a> </li> </ul> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/ancors/miniNavNotice.astro", void 0);

const $$Astro$1 = createAstro();
const $$Noticia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Noticia;
  const { info } = Astro2.props;
  const filteredNotices = notices.filter(
    (noti) => noti.id != info.id && noti.category == info.category
  );
  const slicedNotices = filteredNotices.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-ome57bgm> ${renderComponent($$result, "MiniNavNotice", $$MiniNavNotice, { "data-astro-cid-ome57bgm": true })} <header data-astro-cid-ome57bgm> <span class="antetitle" data-astro-cid-ome57bgm>${info.anteTitle}</span> <h1 data-astro-cid-ome57bgm>${info.title}</h1> <span class="date" data-astro-cid-ome57bgm>${info.date}</span> </header> <article data-astro-cid-ome57bgm> <figure data-astro-cid-ome57bgm> <img${addAttribute(info.images[0], "src")}${addAttribute(`im\xE1gen de ${info.title}`, "alt")} data-astro-cid-ome57bgm${addAttribute(renderTransition($$result, "cufceqcq", "", `image-${info.images[0]}`), "data-astro-transition-scope")}> </figure> <span data-astro-cid-ome57bgm>${info.epigrafe[0]}</span> ${info.body?.map((parrafo) => {
    return renderTemplate`<p data-astro-cid-ome57bgm>${parrafo}</p>`;
  })} </article> ${slicedNotices.length > 0 && renderTemplate`<aside data-astro-cid-ome57bgm> <header data-astro-cid-ome57bgm> <h3 data-astro-cid-ome57bgm>Noticias relacionadas:</h3> </header> <ul data-astro-cid-ome57bgm> ${slicedNotices.map((notice) => {
    return renderTemplate`${renderComponent($$result, "CardNotice", $$CardNotice, { "id": notice.id, "category": notice.category, "date": notice.date, "images": notice.images, "synthesis": notice.synthesis, "title": notice.title, "data-astro-cid-ome57bgm": true })}`;
  })} </ul> </aside>`} <footer class="footer-article_notice" data-astro-cid-ome57bgm> <h3 data-astro-cid-ome57bgm>Palabras claves</h3> <ul data-astro-cid-ome57bgm> ${info.keyWords?.map((keyword) => {
    return renderTemplate`<li data-astro-cid-ome57bgm>${keyword}</li>`;
  })} </ul> </footer> </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/Noticia.astro", "self");

const $$Astro = createAstro();
const $$notice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$notice;
  const { notice } = Astro2.params;
  const info = notices.find((noti) => noti.id == notice);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": info.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Noticia", $$Noticia, { "info": info })} ` })} `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/notices/[notice].astro", void 0);

const $$file = "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/notices/[notice].astro";
const $$url = "/notices/[notice]";

export { $$notice as default, $$file as file, $$url as url };
