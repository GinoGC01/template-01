// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { User } from "../../../Icons/User";
import { StarRating } from "../StarRating";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./sliderTestimonios.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function TestimoniosSlider({ testimonios }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {testimonios?.map(
          ({ id, nombre, fecha, testimonio, img, puntuacion }) => {
            return (
              <SwiperSlide key={id}>
                <header className="header-slider">
                  <figure>
                    {img ? (
                      <img
                        src={img}
                        alt={`imagen de perfil de ${nombre}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="user">
                        <User />
                      </div>
                    )}
                  </figure>
                </header>
                <div className="data">
                  <div className="header-data">
                    <span className="nombre">{nombre}</span>
                    <span className="fecha">{fecha}</span>
                  </div>
                  <p>{testimonio}</p>
                  <StarRating rating={puntuacion} />
                </div>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </>
  );
}
