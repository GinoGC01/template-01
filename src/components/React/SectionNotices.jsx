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
    usePagination({ products: noticiasFiltradas, noticias, filters });

  return (
    <section className="section-notices">
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
        <div className="filters-area">
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
        </div>
      </header>
      <ul className="notices-container">
        {items.map((notice, index) => {
          return (
            <li key={notice.id}>
              <CardNotices
                id={notice.id}
                title={notice.title}
                images={notice.images}
                category={notice.category}
                synthesis={notice.synthesis}
                date={notice.date}
                url={`/notices/${notice.id}`}
                index={index}
              />
            </li>
          );
        })}
      </ul>
      {items.length > 0 && (
        <div className="pagination">
          <button
            onClick={prevPage}
            disabled={currentPageVisible === 1}
            className="button-page"
          >
            {"<"}
          </button>
          <span>{` ${currentPageVisible} / ${totalPages}`}</span>
          <button
            onClick={nextPage}
            disabled={currentPageVisible === totalPages}
            className="button-page"
          >
            {">"}
          </button>
        </div>
      )}
    </section>
  );
}
