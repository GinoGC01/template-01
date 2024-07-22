import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, e as renderTransition, b as createAstro } from './astro/server_C0UUweck.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_DtAm0TRO.mjs';
/* empty css                          */
import { F as Facebook, L as LinkedIn, E as EmailIcon, t as team } from './LinkedInIcon_ButRw3UX.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { A as Arrow } from './arrow_Bv_3diZt.mjs';
import { $ as $$Back } from './back_Dg2oLrJk.mjs';
/* empty css                                  */
/* empty css                          */

function PhoneIcon() {
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
          d: "M10 20h4v-1h-4zm-3 3q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-7h10V6H7z"
        }
      )
    }
  );
}

function EstudiosIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsxs("g", { fill: "currentColor", children: [
        /* @__PURE__ */ jsx("path", { d: "M12.486 5.414a1 1 0 0 0-.972 0L5.06 9l6.455 3.586a1 1 0 0 0 .972 0L18.94 9l-6.455-3.586zm-1.943-1.749a3 3 0 0 1 2.914 0l8.029 4.46a1 1 0 0 1 0 1.75l-8.03 4.46a3 3 0 0 1-2.913 0l-8.029-4.46a1 1 0 0 1 0-1.75l8.03-4.46z" }),
        /* @__PURE__ */ jsx("path", { d: "M21 8a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zM6 10a1 1 0 0 1 1 1v5.382l4.553 2.276a1 1 0 0 0 .894 0L17 16.382V11a1 1 0 1 1 2 0v6a1 1 0 0 1-.553.894l-5.105 2.553a3 3 0 0 1-2.684 0l-5.105-2.553A1 1 0 0 1 5 17v-6a1 1 0 0 1 1-1z" })
      ] })
    }
  );
}

function ObjetivosIcon() {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 256 256",
      children: /* @__PURE__ */ jsxs("g", { fill: "currentColor", children: [
        /* @__PURE__ */ jsx("path", { d: "M176 128a48 48 0 1 1-48-48a48 48 0 0 1 48 48", opacity: ".2" }),
        /* @__PURE__ */ jsx("path", { d: "M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32l27.72-27.72a40 40 0 1 0 17.87 31.09a8 8 0 1 1 16-.9a56 56 0 1 1-22.38-41.65l22.75-22.75a87.88 87.88 0 1 0 23.13 29.67a8 8 0 0 1 14.44-6.9" })
      ] })
    }
  );
}

function ValoresIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            "fill-rule": "evenodd",
            d: "M1.818 5.272a.75.75 0 0 1 .91.546l.382 1.528a6.709 6.709 0 0 0 4.975 4.904H16a4.124 4.124 0 0 1 4.096 3.642l.649 5.52a.75.75 0 1 1-1.49.176l-.65-5.52A2.624 2.624 0 0 0 16 13.75H7.918l-.08-.018A8.209 8.209 0 0 1 1.654 7.71l-.382-1.528a.75.75 0 0 1 .545-.91",
            "clip-rule": "evenodd"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M8 13.75V18c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-4.25z",
            opacity: ".5"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "6", r: "4", fill: "currentColor" })
      ]
    }
  );
}

const $$Astro$1 = createAstro();
const $$Profesional = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Profesional;
  const {
    nombre,
    especialidades,
    contactos,
    biografia,
    objetivos,
    valores,
    carreras,
    imagen,
    posicion,
    jurisdiccion
  } = Astro2.props;
  const RRSS_ICONS = {
    Facebook,
    LinkedIn
  };
  const SECTION_ID = "#Equipo";
  return renderTemplate`${maybeRenderHead()}<section class="perfil-secction" data-astro-cid-wg5wzm7d> ${renderComponent($$result, "Back", $$Back, { "sectionID": `/${SECTION_ID}`, "data-astro-cid-wg5wzm7d": true })} <figure data-astro-cid-wg5wzm7d> <div class="data-desktop" data-astro-cid-wg5wzm7d> <h1 data-astro-cid-wg5wzm7d>${nombre}</h1> <h2 data-astro-cid-wg5wzm7d> <ul data-astro-cid-wg5wzm7d> ${especialidades?.map((especialidad) => {
    return renderTemplate`<li data-astro-cid-wg5wzm7d>${especialidad}</li>`;
  })} </ul> </h2> <strong data-astro-cid-wg5wzm7d>${posicion}</strong> <span data-astro-cid-wg5wzm7d>
Servicios Jurídicos en
<b data-astro-cid-wg5wzm7d> ${jurisdiccion[1]} </b> </span> </div> <section class="contact-desktop" data-astro-cid-wg5wzm7d> <ul data-astro-cid-wg5wzm7d> <li data-astro-cid-wg5wzm7d><span data-astro-cid-wg5wzm7d>${renderComponent($$result, "PhoneIcon", PhoneIcon, { "data-astro-cid-wg5wzm7d": true })}</span> <p data-astro-cid-wg5wzm7d>${contactos.contactPhone}</p></li> <li data-astro-cid-wg5wzm7d> <a${addAttribute(`mailto:${contactos.email}`, "href")} data-astro-cid-wg5wzm7d> <span data-astro-cid-wg5wzm7d> ${renderComponent($$result, "EmailIcon", EmailIcon, { "data-astro-cid-wg5wzm7d": true })} </span> <p data-astro-cid-wg5wzm7d>${contactos.email}</p> </a> </li> ${contactos.rrss?.map(({ url, username, redSocial }) => {
    const iconName = redSocial === "LinkedIn" ? "LinkedIn" : redSocial;
    const Icon = RRSS_ICONS[iconName];
    return renderTemplate`<li data-astro-cid-wg5wzm7d> <a${addAttribute(url, "href")} data-astro-cid-wg5wzm7d> <span data-astro-cid-wg5wzm7d>${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "data-astro-cid-wg5wzm7d": true })}`}</span> <p data-astro-cid-wg5wzm7d>${username}</p> </a> </li>`;
  })} </ul> </section> <img${addAttribute(imagen[0], "src")}${addAttribute(`im\xE1gen de perfil del abogado ${nombre}`, "alt")} loading="lazy" data-astro-cid-wg5wzm7d${addAttribute(renderTransition($$result, "v6f7ywlp", "", `image-${nombre}`), "data-astro-transition-scope")}> </figure> <section class="content" data-astro-cid-wg5wzm7d> <header data-astro-cid-wg5wzm7d> <div class="data-movil" data-astro-cid-wg5wzm7d> <h1 data-astro-cid-wg5wzm7d>${nombre}</h1> <h2 data-astro-cid-wg5wzm7d> <ul data-astro-cid-wg5wzm7d> ${especialidades?.map((especialidad) => {
    return renderTemplate`<li data-astro-cid-wg5wzm7d>${especialidad}</li>`;
  })} </ul> </h2> <strong data-astro-cid-wg5wzm7d>${posicion}</strong> <span data-astro-cid-wg5wzm7d>
Servicios Jurídicos en
<b data-astro-cid-wg5wzm7d> ${jurisdiccion[1]} </b> </span> </div> <section class="contact-movil" data-astro-cid-wg5wzm7d> <header data-astro-cid-wg5wzm7d> <h3 data-astro-cid-wg5wzm7d>Contacto</h3> </header> <ul data-astro-cid-wg5wzm7d> <li data-astro-cid-wg5wzm7d>${renderComponent($$result, "PhoneIcon", PhoneIcon, { "data-astro-cid-wg5wzm7d": true })} ${contactos.contactPhone}</li> <li data-astro-cid-wg5wzm7d> <a${addAttribute(`mailto:${contactos.email}`, "href")} data-astro-cid-wg5wzm7d> ${renderComponent($$result, "EmailIcon", EmailIcon, { "data-astro-cid-wg5wzm7d": true })} ${contactos.email}</a> </li> ${contactos.rrss?.map(({ url, username, redSocial }) => {
    const iconName = redSocial === "LinkedIn" ? "LinkedIn" : redSocial;
    const Icon = RRSS_ICONS[iconName];
    return renderTemplate`<li data-astro-cid-wg5wzm7d> <a${addAttribute(url, "href")} data-astro-cid-wg5wzm7d> <span data-astro-cid-wg5wzm7d>${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "data-astro-cid-wg5wzm7d": true })}`}</span> ${username} </a> </li>`;
  })} </ul> </section> </header> <div class="data-content" data-astro-cid-wg5wzm7d> <section data-astro-cid-wg5wzm7d> <header data-astro-cid-wg5wzm7d> <h4 data-astro-cid-wg5wzm7d>${renderComponent($$result, "Arrow", Arrow, { "data-astro-cid-wg5wzm7d": true })} Biografía</h4> </header> <p data-astro-cid-wg5wzm7d>${biografia}</p> <div data-astro-cid-wg5wzm7d> <h4 data-astro-cid-wg5wzm7d>${renderComponent($$result, "ObjetivosIcon", ObjetivosIcon, { "data-astro-cid-wg5wzm7d": true })} Objetivos</h4> <ul class="ul-objetivos" data-astro-cid-wg5wzm7d> ${objetivos?.map((objetivo) => {
    return renderTemplate`<li data-astro-cid-wg5wzm7d>• ${objetivo}</li>`;
  })} </ul> </div> <div data-astro-cid-wg5wzm7d> <h4 data-astro-cid-wg5wzm7d>${renderComponent($$result, "ValoresIcon", ValoresIcon, { "data-astro-cid-wg5wzm7d": true })} Valores y principios</h4> <ul class="ul-valores" data-astro-cid-wg5wzm7d> ${valores?.map((valor) => {
    return renderTemplate`<li data-astro-cid-wg5wzm7d>• ${valor}</li>`;
  })} </ul> </div> <ul data-astro-cid-wg5wzm7d> <h4 data-astro-cid-wg5wzm7d> ${renderComponent($$result, "EstudiosIcon", EstudiosIcon, { "data-astro-cid-wg5wzm7d": true })} ${carreras.length > 1 ? "Carreras" : "Carrera"} </h4> ${carreras?.map((carrera) => {
    return renderTemplate`<ul class="ul-carrera" data-astro-cid-wg5wzm7d> <li class="detail-carrera-first" data-astro-cid-wg5wzm7d> <strong data-astro-cid-wg5wzm7d>${carrera.carrera}</strong> -${" "} ${carrera.universidad[0]} - ${carrera.universidad[1]} </li> <li class="detail-carrera titulo" data-astro-cid-wg5wzm7d>• ${carrera.titulo} </li> <li class="detail-carrera especialidad" data-astro-cid-wg5wzm7d>
• ${carrera.especialidad}${" "} </li> <li class="detail-carrera descripcion" data-astro-cid-wg5wzm7d>
• ${carrera.descripcion} </li> </ul>`;
  })} </ul> </section> </div> </section> </section> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/sections/Profesional.astro", "self");

const $$Astro = createAstro();
const $$professional = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$professional;
  const { professional } = Astro2.params;
  const {
    nombre,
    especialidades,
    posicion,
    jurisdiccion,
    carreras,
    biografia,
    objetivos,
    valores,
    images,
    contact,
    id
  } = team.find((perfil) => perfil.nombre == professional);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": nombre }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Profesional", $$Profesional, { "id": id, "posicion": posicion, "jurisdiccion": jurisdiccion, "imagen": images, "biografia": biografia, "carreras": carreras, "contactos": contact, "especialidades": especialidades, "nombre": nombre, "objetivos": objetivos, "valores": valores })} ` })} `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/profesionales/[professional].astro", void 0);

const $$file = "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/profesionales/[professional].astro";
const $$url = "/profesionales/[professional]";

export { $$professional as default, $$file as file, $$url as url };
