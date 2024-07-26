// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./sliderTestimonios.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { CardTestimonios } from "./CardTestimonios";

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
                <CardTestimonios
                  fecha={fecha}
                  img={img}
                  nombre={nombre}
                  testimonio={testimonio}
                  puntuacion={puntuacion}
                />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </>
  );
}
