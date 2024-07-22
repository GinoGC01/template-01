import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, e as renderTransition, b as createAstro, F as Fragment$1 } from './astro/server_C0UUweck.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as areasPracticas } from './areasPractica_B4q_yUGg.mjs';
import { $ as $$Layout } from './Layout_DtAm0TRO.mjs';
import { n as notices } from './notices_l3UNHi7O.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                          */
/* empty css                          */
import { $ as $$Back } from './back_Dg2oLrJk.mjs';
import { $ as $$CardNotice } from './CardNotice_LGbl6IVF.mjs';
/* empty css                          */

function CardPDTRequisitos({ tipo }) {
  const [openItem, setOpenItem] = useState(false);
  const handleItems = () => {
    setOpenItem(!openItem);
  };
  return /* @__PURE__ */ jsxs("div", { className: "CardPDTRequisitos", children: [
    tipo.requisitos.length > 1 && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleItems,
        className: openItem ? "CardPDTRequisitos-button  CardPDTRequisitos-open" : "CardPDTRequisitos-button",
        children: "ver requisitos"
      }
    ),
    openItem && /* @__PURE__ */ jsx("ul", { className: "item-container", children: tipo.requisitos?.map((requisito, index) => {
      return /* @__PURE__ */ jsxs(
        "li",
        {
          className: `animate__animated animate__fadeInLeft animate__faster animate__delay-${index}s requisito`,
          children: [
            "• ",
            requisito
          ]
        },
        index
      );
    }) })
  ] });
}

function PracticaTipo({ practica }) {
  const [openTipo, setOpenTipo] = useState(false);
  const handleTipos = () => {
    setOpenTipo(!openTipo);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    practica.tipo && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleTipos,
        className: openTipo ? "cardPDT-button cardPDT-open" : "cardPDT-button",
        children: practica.tipo.length > 1 ? `TIPOS de ${practica.title}` : `TIPO de ${practica.title}`
      }
    ),
    practica.tipo && openTipo && /* @__PURE__ */ jsx("ul", { className: "tipo-conteiner", children: practica.tipo.map((tipo, index) => {
      return /* @__PURE__ */ jsxs(
        "li",
        {
          className: `animate__animated animate__fadeInLeft animate__faster animate__delay-${index}s tipo`,
          children: [
            /* @__PURE__ */ jsxs("h5", { children: [
              "• ",
              tipo.title
            ] }),
            /* @__PURE__ */ jsx("p", { children: tipo.descripcion }),
            /* @__PURE__ */ jsx(CardPDTRequisitos, { tipo })
          ]
        },
        tipo.id
      );
    }) })
  ] });
}

function CardAreaPractica({ practica }) {
  const [descripcion, setDescripcion] = useState(false);
  const handleDescripcion = () => {
    setDescripcion(!descripcion);
  };
  return /* @__PURE__ */ jsxs("li", { className: "cardAreaPractica-container ", children: [
    /* @__PURE__ */ jsxs("button", { onClick: handleDescripcion, children: [
      /* @__PURE__ */ jsx("span", { children: descripcion ? "-" : "+" }),
      practica.title
    ] }),
    descripcion && /* @__PURE__ */ jsxs("div", { className: "animate__animated animate__fadeInLeft animate__faster details", children: [
      /* @__PURE__ */ jsx("p", { children: practica.practicaDescription }),
      /* @__PURE__ */ jsx(PracticaTipo, { practica })
    ] })
  ] });
}

const $$Astro$1 = createAstro();
const $$AreaLaboral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AreaLaboral;
  const { info } = Astro2.props;
  const SECTION_ID = "#Areas-laborales";
  const noticiasFiltradas = notices.filter(
    (notice) => notice.category == info.nombre
  );
  const shortNotices = noticiasFiltradas.slice(0, 2);
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-zyyqef6j> <header${addAttribute(`background: linear-gradient(0deg,var(--firstvalue) 0%,var(--secondvalue) 100%),url("${info.imagen}");
    background-repeat: no-repeat;
    background-size: cover;`, "style")} data-astro-cid-zyyqef6j> ${renderComponent($$result, "Back", $$Back, { "sectionID": `/${SECTION_ID}`, "data-astro-cid-zyyqef6j": true })} <h3 data-astro-cid-zyyqef6j${addAttribute(renderTransition($$result, "ycny635j", "", `title-${info.nombre}`), "data-astro-transition-scope")}> ${info.nombre} </h3> <h4 data-astro-cid-zyyqef6j> ${info.titulo} </h4> <p data-astro-cid-zyyqef6j> ${info.subtitulo} </p> </header> <div class="practicasDepartamento-container" data-astro-cid-zyyqef6j> <div class="practicasDepartamento-container_list" data-astro-cid-zyyqef6j> <h4 data-astro-cid-zyyqef6j>Practias de Departamento:</h4> <ul data-astro-cid-zyyqef6j> ${info.practicasDepartamento?.map((practica) => {
    return renderTemplate`${renderComponent($$result, "CardAreaPractica", CardAreaPractica, { "practica": practica, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/React/Cards/CardAreaPractica.jsx", "client:component-export": "CardAreaPractica", "data-astro-cid-zyyqef6j": true })}`;
  })} </ul> </div> <div class="practicasDepartamento-container_notices" data-astro-cid-zyyqef6j> <h4 data-astro-cid-zyyqef6j>Noticias relacionadas</h4> ${noticiasFiltradas.length == 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, { "data-astro-cid-zyyqef6j": true }, { "default": ($$result2) => renderTemplate` <p data-astro-cid-zyyqef6j>No hay noticias para mostrar en este momento</p> <a href="/Noticias" data-astro-cid-zyyqef6j>ver noticias</a> ` })}` : renderTemplate`<ul data-astro-cid-zyyqef6j> ${shortNotices?.map((notice) => {
    return renderTemplate`<li data-astro-cid-zyyqef6j> ${renderComponent($$result, "CardNotice", $$CardNotice, { "id": notice.id, "category": notice.category, "date": notice.date, "images": notice.images, "synthesis": notice.synthesis, "title": notice.title, "data-astro-cid-zyyqef6j": true })} </li>`;
  })} ${noticiasFiltradas.length >= 1 && renderTemplate`<a href="/Noticias" class="button-slider" title="Ver todas las noticias" data-astro-cid-zyyqef6j> <span data-astro-cid-zyyqef6j> +</span> </a>`} </ul>`} </div> </div> </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/AreaLaboral.astro", "self");

const $$Astro = createAstro();
const $$area = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$area;
  const { area } = Astro2.params;
  const info = areasPracticas.find((areaPractica) => areaPractica.area == area);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": info.nombre }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AreaLaboral", $$AreaLaboral, { "info": info })} ` })} `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/areas/[area].astro", void 0);

const $$file = "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/areas/[area].astro";
const $$url = "/areas/[area]";

export { $$area as default, $$file as file, $$url as url };
