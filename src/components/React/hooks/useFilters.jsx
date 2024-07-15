import { useState } from "react";

export default function useFilters({ notices }) {
  const [filters, setFilters] = useState({
    title: "all",
    category: "all",
  });

  const noticesFiltered = () => {
    return notices.filter((noticiaFiltrada) => {
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
  return {
    noticesFiltered,
    handleOnChangeCategory,
    handleOnChangeTitle,
    filters,
  };
}
