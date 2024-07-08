import { useState, useEffect } from "react";
import "./header.css";
import { WhatsApp } from "../../Icons/WhatsApp";
export default function Header({
  home,
  about,
  contact,
  notices,
  testimonios,
  equipo,
  areasLaborales,
}) {
  const [on, setOn] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleNav = () => {
    setOn(!on);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      // Si el usuario hace scroll, establecer scroll a true
      setScroll(true);
    } else {
      // Si el usuario está en el inicio de la página, establecer scroll a false
      setScroll(false);
    }
  };

  // Agregar el event listener para el evento scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={scroll ? "header-principal scrolled" : "header-principal"}
    >
      <span
        className={on ? "span-on-nav span-nav" : "span-off-nav span-nav"}
        onClick={on ? handleNav : undefined}
      ></span>
      <a href="/" className="header-principal_logo">
        <img src="../../../../images/temp/logo-temp-01.svg" alt="logo-temp" />
        <div className="">
          <strong>Estudio Jurídico</strong>
          <p>Nombre estudio</p>
        </div>
      </a>
      <span className="menu-hamburguesa" onClick={handleNav}>
        <span
          className={
            on ? "menu-hamburguesa_span child-1 " : "menu-hamburguesa_span"
          }
        ></span>
        <span
          className={
            on ? "menu-hamburguesa_span child-2 " : "menu-hamburguesa_span"
          }
        ></span>
        <span
          className={
            on ? "menu-hamburguesa_span child-3 " : "menu-hamburguesa_span"
          }
        ></span>
      </span>
      <nav
        className={
          on
            ? "header-principal_nav header-principal_nav-on"
            : "header-principal_nav"
        }
      >
        <ul>
          <li className="action">
            <a href={home}>Home</a>
          </li>
          <li className="action">
            <a href={about}>Sobre Nosotros</a>
          </li>
          <li className="action">
            <a href={areasLaborales}>Areas Laborales</a>
          </li>
          <li className="action">
            <a href={notices}>Noticias</a>
          </li>
          <li className="action">
            <a href={equipo}>Nuestro Equipo</a>
          </li>
          <li className="action">
            <a href={testimonios}>Testimonios</a>
          </li>
          <li className="contact">
            <a href={contact}>
              <span>Contacto</span> <WhatsApp />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
