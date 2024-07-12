import { useEffect, useState } from "react";
import { Search } from "../../Icons/Search";
import { notices } from "../../data/notices.js";
import { CardNotices } from "./Cards/CardNotices.jsx";
import "./sectionNotices.css";
export default function SectionNotices() {
  const [noticias, setNoticias] = useState([]);

  const [filters, setFilters] = useState({
    title: "all",
    category: "all",
  });

  useEffect(() => {
    setNoticias(notices);
  }, []);

  const noticesFiltered = (noticiasFiltrar) => {
    return noticiasFiltrar.filter((noticiaFiltrada) => {
      return (
        (filters.title === "all" ||
          noticiaFiltrada.title.toLowerCase().includes(filters.title)) &&
        (filters.category === "all" ||
          noticiaFiltrada.category === filters.category)
      );
    });
  };

  const handleOnChangeTitle = (e) => {
    const value = e.target.value;
    const newFilters = { ...filters, title: value };
    setFilters(newFilters);
  };

  const handleOnChangeCategory = (e) => {
    const value = e.target.value;
    const newFilters = { ...filters, category: value };
    setFilters(newFilters);
  };

  const noticiasFiltradas = noticesFiltered(noticias);
  return (
    <section className="section-notices">
      <header className="filters">
        <div>
          <input type="text" onChange={handleOnChangeTitle} />
          <Search />
        </div>
        <div>
          <label htmlFor="categorys">Filtrar por area: </label>
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
      {noticiasFiltradas.map((notice) => {
        return (
          <CardNotices
            id={notice.id}
            title={notice.title}
            images={notice.images}
            category={notice.category}
            synthesis={notice.synthesis}
            date={notice.date}
            url={`/notices/${notice.id}`}
            key={notice.id}
          />
        );
      })}
    </section>
  );
}
