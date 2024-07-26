import "./sliderTestimonios.css";
import { StarRating } from "../StarRating";
import { User } from "../../../Icons/User";
import GoogleIcon from "../../../Icons/GoogleIcon";
export function CardTestimonios({
  img,
  nombre,
  fecha,
  testimonio,
  puntuacion,
}) {
  return (
    <div className="card-container">
      <figure>
        {img ? (
          <img src={img} alt={`imagen de perfil de ${nombre}`} loading="lazy" />
        ) : (
          <div className="user">
            <User />
          </div>
        )}
      </figure>
      <div className="data">
        <div className="header-data">
          <span className="nombre">{nombre}</span>
          <div className="star-date">
            <StarRating rating={puntuacion} />
            <span className="fecha">{fecha}</span>
          </div>
          <span className="google-icon">
            <GoogleIcon />
          </span>
        </div>
        <p>{testimonio}</p>
      </div>
    </div>
  );
}
