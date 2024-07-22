import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, e as renderTransition, d as renderComponent } from './astro/server_C0UUweck.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
/* empty css                          */

const $$Astro$1 = createAstro();
const $$CallToActions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CallToActions;
  const { text, link, blank, primaryAction, color, styles, background } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(`${text} HREF`, "title")}${addAttribute(blank ? "_blank" : "_self", "target")}${addAttribute(primaryAction ? "primaryAction" : "secondaryAction", "class")}${addAttribute(styles ? `background:${background}; color:${color}` : "", "style")} data-astro-cid-scgvltrn> ${text} </a> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/ancors/callToActions.astro", void 0);

const $$Astro = createAstro();
const $$CardNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardNotice;
  const { title, category, synthesis, images, date, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(id, "id")} data-astro-cid-zlcb5gie> <header data-astro-cid-zlcb5gie> <h4 data-astro-cid-zlcb5gie>${title}</h4> <span data-astro-cid-zlcb5gie>${date}</span> </header> <div data-astro-cid-zlcb5gie> <figure data-astro-cid-zlcb5gie> <img${addAttribute(images[0], "src")}${addAttribute(`im\xE1gen sobre ${title}`, "alt")} loading="lazy" data-astro-cid-zlcb5gie${addAttribute(renderTransition($$result, "drtbpajy", "", `image-${images[0]}`), "data-astro-transition-scope")}> </figure> <span data-astro-cid-zlcb5gie>TEMA | <b data-astro-cid-zlcb5gie>${category}</b></span> <p data-astro-cid-zlcb5gie>${synthesis}</p> <div class="button-cta" data-astro-cid-zlcb5gie> ${renderComponent($$result, "CallToActions", $$CallToActions, { "blank": false, "link": `/notices/${id}`, "text": "Ver mas", "styles": true, "color": "#fff", "background": "rgba(0, 0, 0, 0.5)", "data-astro-cid-zlcb5gie": true })} </div> </div> </article> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/cards/CardNotice.astro", "self");

export { $$CardNotice as $, $$CallToActions as a };
