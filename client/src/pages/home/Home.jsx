import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import CardWhite from "../../components/common/cards/CardWhite.jsx";
import HomeCarrusel from "../../components/modules/homepage/HomeCarrusel.jsx";
import TitleDoubleXL from "../../components/common/headers/TitleDoubleXL.jsx";
import BottomFooter from "../../components/layout/BottomFooter.jsx";

function Home() {
  return (
    <>
      <div className="relative w-full h-[80vh] bg-black/80">
        <div className="flex items-center h-full px-4">
          <div className="w-full space-y-6">
            <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover -z-10 bg-hero-pattern"></div>
            <div className="space-y-6 text-center text-white">
              <h2 className="text-5xl font-semibold">
                ¿Quieres ayudar a tu comunidad?
              </h2>
              <p className="text-neutral-content">
                Explora las distintas oportunidades de voluntariado cerca de tu
                ubicación para realizar actividades que ayuden a cambiar el
                mundo.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/register"
                role="button"
                className="w-full btn btn-primary text-primary-content"
              >
                Quiero ser voluntario
              </Link>
              <Link
                to="/register/foundation"
                role="button"
                className="w-full btn btn-secondary text-secondary-content"
              >
                Soy una fundacion
              </Link>
            </div>
          </div>
        </div>
      </div>
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
              to={"/register"}
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
              Descubre todas las actividades de voluntariado publicadas y elige
              la que mas te interese
            </p>
            <Link
              to={"/volunteer"}
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
              Una vez inscripto, le notificaremos a la fundacion para que
              conozca tu perfil y confirme tu participacion.
            </p>
            <h5 className="mt-3 font-semibold">
              ¡Gracias por querer colaborar!
            </h5>
          </CardWhite>
        </SwiperSlide>
      </Swiper>
      <div className="px-4 py-10">
        <div className="space-y-6">
          <TitleDoubleXL className="text-3xl leading-tree text-balance">
            Explora las oportunidades de voluntariado publicadas
          </TitleDoubleXL>
          <HomeCarrusel />
          <Link
            role="button"
            to={"/volunteer"}
            className="w-full btn btn-primary text-primary-content"
          >
            Ver todas las actividades publicadas
          </Link>
        </div>
      </div>
      <article className="relative">
        <div className="px-4 py-10 space-y-6 bg-black/70">
          <h3 className="text-3xl font-bold leading-tree text-neutral-content/90">
            ¿Tienes una fundación y buscas voluntarios?
          </h3>
          <p className="text-neutral-content/80">
            Crea una cuenta para tu fundación, completa su perfil y publica
            todas las propuestas de voluntariado para que nuestros usuarios
            puedan inscribirse.
          </p>
          <Link
            to={"/register/foundation"}
            role="button"
            className="w-full btn btn-secondary text-secondary-content"
          >
            Registrarme como fundación
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover -z-10 bg-image-cta"></div>
      </article>
      <BottomFooter />
    </>
  );
}

export default Home;
