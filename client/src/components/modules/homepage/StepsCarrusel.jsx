import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import CardWhite from "../../common/cards/CardWhite.jsx";
import { ROUTES } from "../../../routes/index.routes.js";

function StepsCarrusel() {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={16}
      freeMode={true}
      className="-mt-6 mySwiper"
    >
      <SwiperSlide className="!w-[350px]">
        <CardWhite className="h-60 mt-0 w-[350px] bg-white border border-base-300">
          <small className="text-sm font-bold uppercase text-secondary">
            paso 1
          </small>
          <h4 className="mt-1 mb-4 text-xl font-bold leading-5 text-neutral">
            Registrate como voluntario y completa tu perfil
          </h4>
          <p>
            Crea tu cuenta con tu email y completa la información de tu perfil
            para que las fundaciones te conozcan.
          </p>
          <Link
            to={ROUTES.AUTH.REGISTER_VOLUNTEER}
            role="button"
            className="px-0 btn btn-link text-primary"
          >
            Crea tu cuenta
          </Link>
        </CardWhite>
      </SwiperSlide>
      <SwiperSlide className="!w-[350px]">
        <CardWhite className="h-60 mt-0 w-[350px] bg-white border border-base-300">
          <small className="text-sm font-bold uppercase text-secondary">
            paso 2
          </small>
          <h4 className="mt-1 mb-4 text-xl font-bold leading-5 text-neutral">
            Explora las distintas oportunidades de voluntariado
          </h4>
          <p>
            Descubre todas las actividades de voluntariado publicadas y elige la
            que mas te interese
          </p>
          <Link
            to={ROUTES.VOLUNTEER.EXPLORAR}
            role="button"
            className="px-0 btn btn-link text-primary"
          >
            Ver todos los voluntariados
          </Link>
        </CardWhite>
      </SwiperSlide>
      <SwiperSlide className="!w-[350px]">
        <CardWhite className="h-60 mt-0 border w-[350px] border-base-300">
          <small className="text-sm font-bold uppercase text-secondary">
            paso 3
          </small>
          <h4 className="mt-1 mb-4 text-xl font-bold leading-5 text-neutral">
            Inscribite en la actividad que mas te interese
          </h4>
          <p>
            Ingresa a una actividad para conocer el perfil buscado por la
            fundacion, las tareas a realizar y todos los detalles del
            voluntariado.
          </p>
        </CardWhite>
      </SwiperSlide>
      <SwiperSlide className="!w-[350px]">
        <CardWhite className="h-60 mt-0 border w-[350px] border-base-300">
          <small className="text-sm font-bold uppercase text-secondary">
            paso 4
          </small>
          <h4 className="mt-1 mb-4 text-xl font-bold leading-5 text-neutral">
            Espera la confirmacion de la organizacion y... ¡listo!
          </h4>
          <p>
            Una vez inscripto, le notificaremos a la fundacion para que conozca
            tu perfil y confirme tu participacion.
          </p>
          <h5 className="mt-3 font-semibold">¡Gracias por querer colaborar!</h5>
        </CardWhite>
      </SwiperSlide>
    </Swiper>
  );
}

export default StepsCarrusel;
