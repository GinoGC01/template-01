import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, d as renderComponent, g as renderHead, f as renderSlot } from './astro/server_C0UUweck.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                            */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/node_modules/astro/components/ViewTransitions.astro", void 0);

function WhatsApp() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"
        }
      )
    }
  );
}

function Header({
  home,
  about,
  contact,
  notices,
  lastNotices,
  // eliminar
  testimonios,
  equipo,
  areasLaborales
  // eliminar
}) {
  const [on, setOn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleNav = () => {
    setOn(!on);
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: scroll ? "header-principal scrolled" : "header-principal",
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: on ? "span-on-nav span-nav" : "span-off-nav span-nav",
            onClick: on ? handleNav : void 0
          }
        ),
        /* @__PURE__ */ jsxs("a", { href: "/", className: "header-principal_logo", children: [
          /* @__PURE__ */ jsx("img", { src: "../../../../images/temp/logo-temp-01.svg", alt: "logo-temp" }),
          /* @__PURE__ */ jsxs("div", { className: "", children: [
            /* @__PURE__ */ jsx("strong", { children: "Estudio Jurídico" }),
            /* @__PURE__ */ jsx("p", { children: "Nombre estudio" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "menu-hamburguesa", onClick: handleNav, children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: on ? "menu-hamburguesa_span child-1 " : "menu-hamburguesa_span"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: on ? "menu-hamburguesa_span child-2 " : "menu-hamburguesa_span"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: on ? "menu-hamburguesa_span child-3 " : "menu-hamburguesa_span"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "nav",
          {
            className: on ? "header-principal_nav header-principal_nav-on" : "header-principal_nav",
            children: /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { className: "action", children: /* @__PURE__ */ jsx("a", { href: home, children: "Home" }) }),
              /* @__PURE__ */ jsx("li", { className: "action", children: /* @__PURE__ */ jsx("a", { href: about, children: "Sobre Nosotros" }) }),
              /* @__PURE__ */ jsx("li", { className: "action", children: /* @__PURE__ */ jsx("a", { href: notices, children: "Noticias" }) }),
              /* @__PURE__ */ jsx("li", { className: "action", children: /* @__PURE__ */ jsx("a", { href: equipo, children: "Equipo" }) }),
              /* @__PURE__ */ jsx("li", { className: "action", children: /* @__PURE__ */ jsx("a", { href: testimonios, children: "Testimonios" }) }),
              /* @__PURE__ */ jsx("li", { className: "contact", children: /* @__PURE__ */ jsxs("a", { href: contact, children: [
                /* @__PURE__ */ jsx("span", { children: "Contacto" }),
                " ",
                /* @__PURE__ */ jsx(WhatsApp, {})
              ] }) })
            ] })
          }
        )
      ]
    }
  );
}

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { srcMaps } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="footer-component" data-astro-cid-fmbcxu7h> <header data-astro-cid-fmbcxu7h> <h4 data-astro-cid-fmbcxu7h>Estudios Jurídoco | 'Nombre estudio'</h4> </header> <div class="content" data-astro-cid-fmbcxu7h> <ul data-astro-cid-fmbcxu7h> <li data-astro-cid-fmbcxu7h> <a href="#" data-astro-cid-fmbcxu7h>Home</a> </li> <li data-astro-cid-fmbcxu7h> <a href="#Sobre-nosotros" data-astro-cid-fmbcxu7h>Sobre Nosotros</a> </li> <li data-astro-cid-fmbcxu7h> <a href="#Noticias" data-astro-cid-fmbcxu7h>Noticias</a> </li> <li data-astro-cid-fmbcxu7h> <a href="#" data-astro-cid-fmbcxu7h>Testimonios</a> </li> <li data-astro-cid-fmbcxu7h> <a href="#" data-astro-cid-fmbcxu7h>Contacto</a> </li> </ul> <iframe${addAttribute(srcMaps, "src")} style="border:0;" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-fmbcxu7h></iframe> </div> <div class="copy" data-astro-cid-fmbcxu7h> <p data-astro-cid-fmbcxu7h>'Nombre estudio' - Todos los derechos reservados © - 2024</p> </div> </footer> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/Footer.astro", void 0);

const src =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.2209768921057!2d-58.77326961151522!3d-34.497281703356265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc985b30889627%3A0x536c6194a99e5b5!2sAv.%20Hector%20Arregui%2C%20Jos%C3%A9%20C.%20Paz%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1717787298274!5m2!1ses!2sar";

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", Header, { "about": "/#Sobre-nosotros", "contact": "/#Contacto", "home": "/", "notices": "/Noticias", "lastNotices": "/#Ultimas-noticias", "testimonios": "/#Testimonios", "equipo": "/#Equipo", "areasLaborales": "/#Areas-laborales", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/React/header", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "srcMaps": src })} </body></html>`;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/layouts/Layout.astro", void 0);

export { $$Layout as $, WhatsApp as W };
