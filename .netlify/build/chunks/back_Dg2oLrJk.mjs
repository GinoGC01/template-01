import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, b as createAstro } from './astro/server_C0UUweck.mjs';
import 'kleur/colors';
import 'html-escaper';
import { A as Arrow } from './arrow_Bv_3diZt.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Back = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Back;
  const { sectionID } = Astro2.props;
  return renderTemplate`<!-- componente ancor -->${maybeRenderHead()}<span class="back" data-astro-cid-mfhmewzu> <a${addAttribute(sectionID, "href")} data-astro-cid-mfhmewzu>${renderComponent($$result, "Arrow", Arrow, { "data-astro-cid-mfhmewzu": true })}</a> </span> `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/Astro/ancors/back.astro", void 0);

export { $$Back as $ };
