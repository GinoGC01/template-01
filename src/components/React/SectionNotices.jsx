import { useEffect, useState } from "react";
import { Search } from "../../Icons/Search";
import { notices } from "../../data/notices.js";
import { CardNotices } from "./Cards/CardNotices.jsx";
import "./sectionNotices.css";
import useFilters from "./hooks/useFilters.jsx";
import { usePagination } from "./hooks/usePagination.jsx";

export default function SectionNotices() {
  //noticias fetch TODO
  const [noticias, setNoticias] = useState([]);
  const itemsForPage = 4;

  useEffect(() => {
    setNoticias(notices);
  }, []);

  const {
    noticesFiltered,
    handleOnChangeCategory,
    handleOnChangeTitle,
    filters,
  } = useFilters({ notices: noticias });

  const noticiasFiltradas = noticesFiltered();

  const { items, prevPage, currentPageVisible, totalPages, nextPage } =
    usePagination({
      products: noticiasFiltradas,
      noticias,
      filters,
      itemsForPage,
    });

  return (
    <section className="section-notices" id="Noticias">
      <header className="filters">
        <div>
          <h1>Noticias</h1>
        </div>
        <div className="search_section-notices">
          <input
            type="text"
            onChange={handleOnChangeTitle}
            placeholder="Buscar noticia"
          />
          <Search />
        </div>
        {/* <div className="filters-area">
          <label htmlFor="categorys">Area: </label>
          <select
            name="categorys"
            id="categorys"
            onChange={handleOnChangeCategory}
          >
            <option value="all">Todas las Areas</option>
            <option value="Derecho Laboral">Derecho Laboral</option>
            <option value="Derecho Penal">Derecho Penal</option>
            <option value="Derecho Civil">Derecho Civíl</option>
          </select>
        </div> */}
      </header>
      <ul className="notices-container">
        {items.map((notice, index) => {
          return (
            <li key={notice.id}>
              <CardNotices
                id={notice.id}
                title={notice.title}
                category={notice.category}
                images={notice.images}
                synthesis={notice.synthesis}
                date={notice.date}
                index={index}
                url={`/notices/${notice.id}`}
              />
            </li>
          );
        })}
      </ul>
      {items.length > 0 && (
        <div className="pagination">
          <a
            href="#Noticias"
            title="anterior"
            onClick={prevPage}
            disabled={currentPageVisible === 1}
            className="button-page"
          >
            {"<"}
          </a>
          <span>{` ${currentPageVisible} / ${totalPages}`}</span>
          <a
            href="#Noticias"
            title="siguiente"
            onClick={nextPage}
            disabled={currentPageVisible === totalPages}
            className="button-page"
          >
            {">"}
          </a>
        </div>
      )}
    </section>
  );
}
