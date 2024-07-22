import { c as createComponent, r as renderTemplate, d as renderComponent } from './astro/server_C0UUweck.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './Layout_DtAm0TRO.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { n as notices } from './notices_l3UNHi7O.mjs';
/* empty css                            */
/* empty css                          */

function Search() {
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
          d: "m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
        }
      )
    }
  );
}

function CardNotices({
  id,
  title,
  images,
  category,
  synthesis,
  date,
  url,
  index
}) {
  return /* @__PURE__ */ jsxs(
    "article",
    {
      id,
      className: ` card-notices_container animate__animated animate__fadeInLeft animate__faster animate__delay-${index}s tipo`,
      children: [
        /* @__PURE__ */ jsxs("header", { children: [
          /* @__PURE__ */ jsx("h4", { children: title }),
          /* @__PURE__ */ jsx("span", { children: date })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-notices_content", children: [
          /* @__PURE__ */ jsx("figure", { children: /* @__PURE__ */ jsx(
            "img",
            {
              src: images[0],
              alt: `imágen sobre ${title}`,
              "transition:name": `image-${images[0]}`,
              loading: "lazy"
            }
          ) }),
          /* @__PURE__ */ jsxs("span", { children: [
            "TEMA | ",
            /* @__PURE__ */ jsx("b", { children: category })
          ] }),
          /* @__PURE__ */ jsx("p", { children: synthesis }),
          /* @__PURE__ */ jsx("div", { className: "button-cta", children: /* @__PURE__ */ jsx("a", { href: url, className: "primaryAction", children: "saber mas" }) })
        ] })
      ]
    }
  );
}

function useFilters({ notices }) {
  const [filters, setFilters] = useState({
    content: "all",
    category: "all"
  });
  const noticesFiltered = () => {
    return notices.filter((noticiaFiltrada) => {
      return (filters.content === "all" || noticiaFiltrada.title.toLowerCase().includes(filters.content) || noticiaFiltrada.category.toLowerCase().includes(filters.content)) && (filters.category === "all" || noticiaFiltrada.category === filters.category);
    });
  };
  const handleOnChangeTitle = (e) => {
    const value = e.target.value;
    const newFilters = { ...filters, content: value };
    setFilters(newFilters);
  };
  const handleOnChangeCategory = (e) => {
    const value = e.target.value;
    const newFilters = { ...filters, category: value };
    setFilters(newFilters);
  };
  return {
    noticesFiltered,
    handleOnChangeCategory,
    handleOnChangeTitle,
    filters
  };
}

function usePagination({ products, noticias, filters, itemsForPage }) {
  const ITEM_FOR_PAGE = itemsForPage;
  const [items, setItems] = useState([]);
  const [currenPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const itemsPage = [...products].splice(0, ITEM_FOR_PAGE);
    setItems(itemsPage);
    setCurrentPage(0);
  }, [noticias, filters]);
  const nextPage = () => {
    const totalElements = products.length;
    const nexPage = currenPage + 1;
    const firstIndex = nexPage * ITEM_FOR_PAGE;
    if (firstIndex >= totalElements) return;
    const itemsPage = [...products].splice(firstIndex, ITEM_FOR_PAGE);
    setItems(itemsPage);
    setCurrentPage(nexPage);
  };
  const prevPage = () => {
    const prevPage2 = currenPage - 1;
    if (prevPage2 < 0) return;
    const firstIndex = prevPage2 * ITEM_FOR_PAGE;
    const itemsPage = [...products].splice(firstIndex, ITEM_FOR_PAGE);
    setItems(itemsPage);
    setCurrentPage(prevPage2);
  };
  const currentPageVisible = currenPage + 1;
  const totalPages = Math.ceil(products.length / ITEM_FOR_PAGE);
  return {
    items,
    nextPage,
    prevPage,
    currentPageVisible,
    totalPages
  };
}

function SectionNotices() {
  const [noticias, setNoticias] = useState([]);
  const itemsForPage = 4;
  useEffect(() => {
    setNoticias(notices);
  }, []);
  const {
    noticesFiltered,
    handleOnChangeCategory,
    handleOnChangeTitle,
    filters
  } = useFilters({ notices: noticias });
  const noticiasFiltradas = noticesFiltered();
  const { items, prevPage, currentPageVisible, totalPages, nextPage } = usePagination({
    products: noticiasFiltradas,
    noticias,
    filters,
    itemsForPage
  });
  return /* @__PURE__ */ jsxs("section", { className: "section-notices", id: "Noticias", children: [
    /* @__PURE__ */ jsxs("header", { className: "filters", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "Noticias" }) }),
      /* @__PURE__ */ jsxs("div", { className: "search_section-notices", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            onChange: handleOnChangeTitle,
            placeholder: "Buscar noticia"
          }
        ),
        /* @__PURE__ */ jsx(Search, {})
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "filters-area", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "categorys", children: "Area: " }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            name: "categorys",
            id: "categorys",
            onChange: handleOnChangeCategory,
            children: [
              /* @__PURE__ */ jsx("option", { value: "all", children: "Todas las Areas" }),
              /* @__PURE__ */ jsx("option", { value: "Derecho Laboral", children: "Derecho Laboral" }),
              /* @__PURE__ */ jsx("option", { value: "Derecho Penal", children: "Derecho Penal" }),
              /* @__PURE__ */ jsx("option", { value: "Derecho Civil", children: "Derecho Civíl" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "notices-container", children: items.map((notice, index) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        CardNotices,
        {
          id: notice.id,
          title: notice.title,
          images: notice.images,
          category: notice.category,
          synthesis: notice.synthesis,
          date: notice.date,
          url: `/notices/${notice.id}`,
          index
        }
      ) }, notice.id);
    }) }),
    items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "pagination", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#Noticias",
          title: "anterior",
          onClick: prevPage,
          disabled: currentPageVisible === 1,
          className: "button-page",
          children: "<"
        }
      ),
      /* @__PURE__ */ jsx("span", { children: ` ${currentPageVisible} / ${totalPages}` }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#Noticias",
          title: "siguiente",
          onClick: nextPage,
          disabled: currentPageVisible === totalPages,
          className: "button-page",
          children: ">"
        }
      )
    ] })
  ] });
}

const $$Noticias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Noticias" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionNotices", SectionNotices, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/components/React/SectionNotices.jsx", "client:component-export": "default" })} ` })} `;
}, "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/Noticias.astro", void 0);

const $$file = "C:/Users/ginoc/OneDrive/Escritorio/templates/template-01/src/pages/Noticias.astro";
const $$url = "/Noticias";

export { $$Noticias as default, $$file as file, $$url as url };
