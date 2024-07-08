export const subSection = (url, idSubsection) => {
  // Navegar a la sección principal
  window.location.href = url;

  // Una vez cargada la página, desplazarse a la subsección
  window.onload = function () {
    const subsection = document.getElementById(`${idSubsection}`);
    console.log(subsection);
    if (subsection) {
      subsection.scrollIntoView();
    }
  };
};
