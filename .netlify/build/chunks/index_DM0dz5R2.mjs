import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent, e as renderTransition } from './astro/server_C0UUweck.mjs';
import 'kleur/colors';
import 'html-escaper';
import { W as WhatsApp, $ as $$Layout } from './Layout_DtAm0TRO.mjs';
import { a as $$CallToActions, $ as $$CardNotice } from './CardNotice_LGbl6IVF.mjs';
import { E as EmailIcon, F as Facebook, L as LinkedIn, t as team } from './LinkedInIcon_ButRw3UX.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'clsx';
/* empty css                         */
import { a as areasPracticas } from './areasPractica_B4q_yUGg.mjs';
/* empty css                          */
import { n as notices } from './notices_l3UNHi7O.mjs';
import { A as Arrow } from './arrow_Bv_3diZt.mjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const dataDescription = {
  main: {
    header: {
      title: "Estudio Jurídico Integral",
      subtitle: "Mas de 10 años brindando soluciones legales de excelencia",
    },
    ctaButtons: {
      button01: {
        id: 1,
        blank: false,
        link: "/#Contacto",
        text: "Agendar Turno",
        primaryAction: true,
        styles: false,
        background: "white",
      },
      button02: {
        id: 2,
        blank: false,
        link: "/#Sobre-nosotros",
        text: "Conocer más",
        primaryAction: false,
        styles: false,
      },
    },
  },
  about: {
    content: [
      {
        id: 1,
        title: "lorem ipsum dolor is amet",
        titleActive: false,
        description: [
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor beatae sed, delectus ea accusamus, ipsam similique minus placeat odit, quam dignissimos perspiciatis aliquam debitis doloremque minima accusantium! Obcaecati, itaque animi.",
        ],
        image: "../../../images/temp/about-01.jpg",
      },
      {
        id: 2,
        title: "lorem ipsum dolor is amet",
        titleActive: true,
        description: [
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor beatae sed, delectus ea accusamus, ipsam similique minus placeat odit, quam dignissimos perspiciatis aliquam debitis doloremque minima accusantium! Obcaecati, itaque animi.",
        ],
        image: "../../../images/temp/about-02.jpeg",
      },
    ],
  },
};

const contactos = [
  {
    id: 1,
    nombre: "WhatsApp",
    tipo: "wpp",
    number: "11222333",
    username: "username",
    active: true,
  },
  {
    id: 2,
    nombre: "Email",
    tipo: "email",
    email: "example@example.com",
    username: "username",
    active: true,
  },
  {
    id: 3,
    nombre: "Facebook",
    tipo: "rrss",
    url: "facebook.com",
    username: "username",
    active: true,
  },
  {
    id: 4,
    nombre: "LinkedIn",
    tipo: "rrss",
    url: "LinkedIn.com",
    username: "username",
    active: true,
  },
  {
    id: 5,
    nombre: "Instagram",
    tipo: "rrss",
    url: "Isntagram.com",
    username: "username",
    active: true,
  },
];

function Instagram() {
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
          d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
        }
      )
    }
  );
}

const $$Astro$5 = createAstro();
const $$Rrss = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Rrss;
  const { link, blank, clase, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(blank ? "_blank" : "_self", "target")}${addAttribute(clase, "class")}${addAttribute(`color: ${color}`, "style")} data-astro-cid-mavtfogz> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/ancors/rrss.astro", void 0);

const $$Astro$4 = createAstro();
const $$RedesSociales = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$RedesSociales;
  const RRSS_ICONS = {
    Facebook,
    LinkedIn,
    Instagram
  };
  const { whatsApp, Email, RRSS } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rrss" data-astro-cid-e42onx2n> ${contactos?.map((contacto) => {
    if (contacto.tipo === "rrss" && RRSS) {
      const iconName = contacto.nombre === "LinkedIn" ? "LinkedIn" : contacto.nombre;
      const Icon = RRSS_ICONS[iconName];
      return renderTemplate`${renderComponent($$result, "Rrss", $$Rrss, { "blank": true, "clase": "max", "link": contacto.url, "color": "white", "data-astro-cid-e42onx2n": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-e42onx2n": true })} ` })}`;
    }
    if (contacto.tipo === "wpp" && whatsApp) {
      return renderTemplate`${renderComponent($$result, "Rrss", $$Rrss, { "blank": true, "clase": "min", "link": contacto.number, "color": "white", "data-astro-cid-e42onx2n": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WhatsApp", WhatsApp, { "data-astro-cid-e42onx2n": true })} ` })}`;
    }
    if (contacto.tipo === "email" && Email) {
      return renderTemplate`${renderComponent($$result, "Rrss", $$Rrss, { "blank": true, "clase": "min", "link": `mailto:${contacto.email}`, "color": "white", "data-astro-cid-e42onx2n": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "EmailIcon", EmailIcon, { "data-astro-cid-e42onx2n": true })} ` })}`;
    }
  })}  </div>`;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sub-sections.astro/RedesSociales.astro", void 0);

function Civil() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 48 48",
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "4",
          children: [
            /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M19 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14" }),
            /* @__PURE__ */ jsx("path", { d: "M32.608 7A6.996 6.996 0 0 1 36 13a6.996 6.996 0 0 1-3.392 6" }),
            /* @__PURE__ */ jsx(
              "path",
              {
                fill: "currentColor",
                d: "M4 40.8V42h30v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C27.92 28 25.68 28 21.2 28h-4.4c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C4 34.08 4 36.32 4 40.8"
              }
            ),
            /* @__PURE__ */ jsx("path", { d: "M44 42v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496" })
          ]
        }
      )
    }
  );
}

function Penal() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 14 14",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          d: "M.5 13.29H8m-1 0v-2.5H1.5v2.5M7.787 1.002L4.202 4.587a1 1 0 0 0 0 1.414l1.584 1.584a1 1 0 0 0 1.414 0L10.785 4a1 1 0 0 0 0-1.414L9.2 1.002a1 1 0 0 0-1.414 0ZM9 5.79l4.5 4.5"
        }
      )
    }
  );
}

function Laboral() {
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
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "1.5",
          d: "M20 22v-3c0-1.886 0-2.828-.586-3.414S17.886 15 16 15h-2l-2 2l-2-2H8c-1.886 0-2.828 0-3.414.586S4 17.114 4 19v3m12-7v7m-8-7v7m7.5-13V7a3.5 3.5 0 1 0-7 0v2a3.5 3.5 0 1 0 7 0m-8-1.5h9M12 2v1.5",
          color: "currentColor"
        }
      )
    }
  );
}

const $$Astro$3 = createAstro();
const $$ListOfAreasLaborales = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ListOfAreasLaborales;
  const AREA_ICONS = {
    Civil,
    Penal,
    Laboral
  };
  const { textCenter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul id="Areas-laborales" data-astro-cid-lb6d5muo> ${areasPracticas?.map(({ area, nombre }) => {
    const iconName = area === "Civil" ? "Civil" : area;
    const Icon = AREA_ICONS[iconName];
    return renderTemplate`<li${addAttribute(textCenter ? "center" : "start", "class")} data-astro-cid-lb6d5muo> ${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "data-astro-cid-lb6d5muo": true })}`}  <a${addAttribute(`/areas/${area}`, "href")} data-astro-cid-lb6d5muo${addAttribute(renderTransition($$result, "7prg5dei", "", `title-${nombre}`), "data-astro-transition-scope")}> ${nombre} </a> </li>`;
  })} </ul> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sub-sections.astro/ListOfAreasLaborales.astro", "self");

const $$Main = createComponent(($$result, $$props, $$slots) => {
  const { main } = dataDescription;
  const { header } = main;
  const { ctaButtons } = main;
  const { button01, button02 } = ctaButtons;
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-pmbfioot> <section class="hero" data-astro-cid-pmbfioot> <div class="hero-content" data-astro-cid-pmbfioot> <div class="rrss" data-astro-cid-pmbfioot> ${renderComponent($$result, "RedesSociales", $$RedesSociales, { "Email": false, "RRSS": true, "whatsApp": false, "data-astro-cid-pmbfioot": true })} </div> <header data-astro-cid-pmbfioot> <h1 data-astro-cid-pmbfioot>${header.title}</h1> <h2 data-astro-cid-pmbfioot>${header.subtitle}</h2> </header> <div class="buttons" data-astro-cid-pmbfioot> ${renderComponent($$result, "CallToActions", $$CallToActions, { "blank": button01.blank, "link": button01.link, "text": button01.text, "primaryAction": button01.primaryAction, "styles": button01.styles, "background": button01.background, "data-astro-cid-pmbfioot": true })} ${renderComponent($$result, "CallToActions", $$CallToActions, { "blank": button02.blank, "link": button02.link, "text": button02.text, "primaryAction": button02.primaryAction, "styles": button02.styles, "data-astro-cid-pmbfioot": true })} </div> </div> <aside class="hero-content-desk" data-astro-cid-pmbfioot> <header data-astro-cid-pmbfioot> <h4 data-astro-cid-pmbfioot>Áreas de practica -</h4> </header> ${renderComponent($$result, "AreasLaborales", $$ListOfAreasLaborales, { "textCenter": false, "data-astro-cid-pmbfioot": true })} </aside> </section> </main> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/Main.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const { about } = dataDescription;
  const { content } = about;
  return renderTemplate`${maybeRenderHead()}<section id="Sobre-nosotros" data-astro-cid-gd3cflq7> <header data-astro-cid-gd3cflq7> <h3 data-astro-cid-gd3cflq7>Sobre Nosotros</h3> </header> ${content?.map((article) => {
    return renderTemplate`<article data-astro-cid-gd3cflq7> <div class="content" data-astro-cid-gd3cflq7> ${article.titleActive && renderTemplate`<h4 data-astro-cid-gd3cflq7>${article.title}</h4>`} <div class="p-content" data-astro-cid-gd3cflq7> ${article.description?.map((parrafo) => {
      return renderTemplate`<p data-astro-cid-gd3cflq7>${parrafo}</p>`;
    })} </div> </div> <img${addAttribute(article.image, "src")}${addAttribute(`im\xE1gen sobre ${article.title}`, "alt")} data-astro-cid-gd3cflq7> </article>`;
  })} </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/About.astro", void 0);

const $$Astro$2 = createAstro();
const $$CTA01 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CTA01;
  const { message, url, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.7) 0%,
          rgba(255, 255, 255, 1) 100%
        ),
        url(${image});
        background-repeat: no-repeat;
        background-position: 15% 50%;
        background-size: cover;`, "style")} data-astro-cid-thf4rh7e> <a${addAttribute(url, "href")} data-astro-cid-thf4rh7e> <span class="content" data-astro-cid-thf4rh7e>${message}</span> <span class="arrow" data-astro-cid-thf4rh7e> ${renderComponent($$result, "Arrow", Arrow, { "data-astro-cid-thf4rh7e": true })} </span> <span class="bg" data-astro-cid-thf4rh7e></span> </a> </div> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/cards/CTA01.astro", void 0);

const $$Notices = createComponent(($$result, $$props, $$slots) => {
  const newNotices = notices.reverse();
  const shortNotices = newNotices.slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section id="Ultimas-noticias" data-astro-cid-sz65svdy> <header data-astro-cid-sz65svdy> <h3 data-astro-cid-sz65svdy>Ultimas noticias</h3> </header> <div class="notices-container" data-astro-cid-sz65svdy> ${shortNotices?.map((notice) => {
    return renderTemplate`${renderComponent($$result, "CardNotice", $$CardNotice, { "id": notice.id, "category": notice.category, "date": notice.date, "images": notice.images, "synthesis": notice.synthesis, "title": notice.title, "data-astro-cid-sz65svdy": true })}`;
  })} ${shortNotices.length % 2 != 0 && renderTemplate`${renderComponent($$result, "CTA01", $$CTA01, { "message": "Ver m\xE1s", "url": "/Noticias", "image": "../../../../../images/temp/notices/noticia-01.jpeg", "data-astro-cid-sz65svdy": true })}`} </div> </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/Notices.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardTeam = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardTeam;
  const { img, nombre, especialidad, presentacion, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(id, "id")} data-astro-cid-uzapn4ra> <div class="button" data-astro-cid-uzapn4ra> ${renderComponent($$result, "CallToActions", $$CallToActions, { "blank": false, "link": `/profesionales/${nombre}`, "text": "Saber mas", "styles": true, "color": "#fff", "background": "rgba(0, 0, 0, 0.5)", "data-astro-cid-uzapn4ra": true })} </div> <section data-astro-cid-uzapn4ra> <header data-astro-cid-uzapn4ra> <h4 data-astro-cid-uzapn4ra>${nombre}</h4> <strong data-astro-cid-uzapn4ra>- ${especialidad[0]} -</strong> </header> <p data-astro-cid-uzapn4ra>${presentacion}</p> </section> <figure data-astro-cid-uzapn4ra> <img${addAttribute(img, "src")}${addAttribute(`Foto de ${nombre}, abogado`, "alt")} loading="lazy" data-astro-cid-uzapn4ra${addAttribute(renderTransition($$result, "7czo73if", "", `image-${nombre}`), "data-astro-transition-scope")}> </figure> </li> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/cards/CardTeam.astro", "self");

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Equipo" data-astro-cid-oq73b7o7> <header data-astro-cid-oq73b7o7> <h3 data-astro-cid-oq73b7o7>Nuestro equipo</h3> </header> <div class="cards-container" data-astro-cid-oq73b7o7> <ul data-astro-cid-oq73b7o7> ${team?.map(({ especialidades, images, nombre, presentacion, id }) => {
    const imagen = images[0];
    return renderTemplate`${renderComponent($$result, "CardTeam", $$CardTeam, { "especialidad": especialidades, "img": imagen, "nombre": nombre, "presentacion": presentacion, "id": id, "data-astro-cid-oq73b7o7": true })}`;
  })} ${team.length % 2 != 0 && renderTemplate`${renderComponent($$result, "CTA01", $$CTA01, { "image": "../../../../../images/temp/background-04.webp", "message": "Contactanos", "url": "#", "data-astro-cid-oq73b7o7": true })}`} </ul> </div> </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/Team.astro", void 0);

const testimonios = [
  {
    id: "1",
    nombre: "Nombre user",
    fecha: "10/06/2024",
    testimonio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos",
    img: "../../../images/temp/user-01.webp",
    puntuacion: 3,
  },
  {
    id: "2",
    nombre: "Nombre user",
    fecha: "10/06/2024",
    testimonio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos",
    img: "../../../images/temp/user-02.jpeg",
    puntuacion: 5,
  },
  {
    id: "3",
    nombre: "Nombre user",
    fecha: "10/06/2024",
    testimonio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos",
    puntuacion: 4,
  },
  {
    id: "4",
    nombre: "Nombre user",
    fecha: "10/06/2024",
    testimonio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos",
    puntuacion: 4,
  },
  {
    id: "5",
    nombre: "Nombre user",
    fecha: "10/06/2024",
    testimonio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos",
    puntuacion: 3,
  },
  {
    id: "6",
    nombre: "Nombre user",
    fecha: "10/06/2024",
    testimonio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem facere similique aspernatur in fuga officia dignissimos",
    puntuacion: 2,
  },
];

function User() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 256",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"
        }
      )
    }
  );
}

function Star({ filled }) {
  return /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: filled ? "gold" : "gray",
      d: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.844 1.5 8.272-7.436-3.896L4.564 23.422 6.064 15.15 0 9.306l8.332-1.151L12 .587z"
    }
  ) });
}

const StarRating = ({ rating }) => {
  return /* @__PURE__ */ jsx("div", { className: "star-rating", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(Star, { filled: star <= rating }, star)) });
};

function TestimoniosSlider({ testimonios }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Swiper,
    {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: false,
      modules: [Navigation, Autoplay],
      className: "mySwiper",
      children: testimonios?.map(
        ({ id, nombre, fecha, testimonio, img, puntuacion }) => {
          return /* @__PURE__ */ jsxs(SwiperSlide, { children: [
            /* @__PURE__ */ jsx("header", { className: "header-slider", children: /* @__PURE__ */ jsx("figure", { children: img ? /* @__PURE__ */ jsx(
              "img",
              {
                src: img,
                alt: `imagen de perfil de ${nombre}`,
                loading: "lazy"
              }
            ) : /* @__PURE__ */ jsx("div", { className: "user", children: /* @__PURE__ */ jsx(User, {}) }) }) }),
            /* @__PURE__ */ jsxs("div", { className: "data", children: [
              /* @__PURE__ */ jsxs("div", { className: "header-data", children: [
                /* @__PURE__ */ jsx("span", { className: "nombre", children: nombre }),
                /* @__PURE__ */ jsx("span", { className: "fecha", children: fecha })
              ] }),
              /* @__PURE__ */ jsx("p", { children: testimonio }),
              /* @__PURE__ */ jsx(StarRating, { rating: puntuacion })
            ] })
          ] }, id);
        }
      )
    }
  ) });
}

const $$Testimonies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="testimonios-section" id="Testimonios" data-astro-cid-r2ben5j7> <header class="header-section" data-astro-cid-r2ben5j7> <h3 data-astro-cid-r2ben5j7>Testiomonios</h3> </header> <dir class="slider-container" data-astro-cid-r2ben5j7> ${renderComponent($$result, "TestimoniosSlider", TestimoniosSlider, { "testimonios": testimonios, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/React/Cards/SliderTestimonios.jsx", "client:component-export": "default", "data-astro-cid-r2ben5j7": true })} </dir> </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/Testimonies.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const RRSS_ICONS = {
    Facebook,
    LinkedIn,
    Instagram
  };
  return renderTemplate`${maybeRenderHead()}<section id="Contacto" data-astro-cid-5cjds2bo> <header data-astro-cid-5cjds2bo> <h3 data-astro-cid-5cjds2bo>Contacto</h3> </header> <article data-astro-cid-5cjds2bo> <header data-astro-cid-5cjds2bo> <h4 data-astro-cid-5cjds2bo>Contamos con los siguientes medios de contacto</h4> </header> <ul data-astro-cid-5cjds2bo> ${contactos?.map((contacto) => {
    if (contacto.tipo === "rrss") {
      const iconName = contacto.nombre === "LinkedIn" ? "LinkedIn" : contacto.nombre;
      const Icon = RRSS_ICONS[iconName];
      return renderTemplate`<li data-astro-cid-5cjds2bo> <a${addAttribute(contacto.url, "href")} data-astro-cid-5cjds2bo> ${renderComponent($$result, "Icon", Icon, { "data-astro-cid-5cjds2bo": true })} </a> </li>`;
    }
    if (contacto.tipo === "wpp") {
      return renderTemplate`<li data-astro-cid-5cjds2bo> <a${addAttribute(contacto.number, "href")} data-astro-cid-5cjds2bo> ${renderComponent($$result, "WhatsApp", WhatsApp, { "data-astro-cid-5cjds2bo": true })} </a> </li>`;
    }
    if (contacto.tipo === "email") {
      return renderTemplate`<li data-astro-cid-5cjds2bo> <a${addAttribute(`mailto: ${contacto.email}`, "href")} data-astro-cid-5cjds2bo> ${renderComponent($$result, "EmailIcon", EmailIcon, { "data-astro-cid-5cjds2bo": true })} </a> </li>`;
    }
  })} </ul> <p data-astro-cid-5cjds2bo>No dudes en consultar</p> <span data-astro-cid-5cjds2bo> ¡Estamos para ayudarte! </span> </article> </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/Contact.astro", void 0);

const $$AreasLaborales = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Areas-laborales" data-astro-cid-uuixnoas> <header data-astro-cid-uuixnoas> <h3 data-astro-cid-uuixnoas>Areas Laborales</h3> </header> ${renderComponent($$result, "ListOfAreasLaborales", $$ListOfAreasLaborales, { "textCenter": true, "data-astro-cid-uuixnoas": true })} </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/AreasLaborales.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Template-01" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "AreasLaborales", $$AreasLaborales, {})} ${renderComponent($$result2, "Notices", $$Notices, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonies", $$Testimonies, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })} `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/index.astro", void 0);

const $$file = "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
