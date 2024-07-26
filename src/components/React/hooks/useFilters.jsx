import { useState } from "react";

export default function useFilters({ notices }) {
  const [filters, setFilters] = useState({
    content: "all",
    category: "all",
  });

  const noticesFiltered = () => {
    return notices.filter((noticiaFiltrada) => {
      return (
        (filters.content === "all" ||
          noticiaFiltrada.title.toLowerCase().includes(filters.content) ||
          noticiaFiltrada.category.toLowerCase().includes(filters.content)) &&
        (filters.category === "all" ||
          noticiaFiltrada.category === filters.category)
      );
    });
  };

  const handleOnChangeTitle = (e) => {
    const value = e.target.value;
    const newFilters = { ...filters, content: value.toLowerCase() };
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
    filters,
  };
}
