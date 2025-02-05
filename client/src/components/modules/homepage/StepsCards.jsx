import { Link } from "react-router-dom";
import CardWhite from "../../common/cards/CardWhite.jsx";
import { ROUTES } from "../../../routes/index.routes.js";

function StepsCards() {
  return (
    <div className="relative z-20 flex gap-6">
      <CardWhite className="h-[243px] mt-0 w-[342px] bg-white border border-base-300">
        <div className="flex flex-col items-start">
          <small className="text-sm font-bold uppercase text-secondary">
            paso 1
          </small>
          <h4 className="mb-4 text-xl font-bold leading-5 text-neutral">
            Registrate como voluntario y completa tu perfil
          </h4>
          <p className="leading-5">
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
        </div>
      </CardWhite>

      <CardWhite className="h-[243px] mt-0 w-[342px] bg-white border border-base-300">
        <div className="flex flex-col items-start">
          <small className="text-sm font-bold uppercase text-secondary">
            paso 2
          </small>
          <h4 className="mb-4 text-xl font-bold leading-5 text-neutral">
            Explora las distintas oportunidades de voluntariado
          </h4>
          <p className="leading-5">
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
        </div>
      </CardWhite>
      <CardWhite className="h-[243px] mt-0 border w-[342px] border-base-300">
        <div className="flex flex-col">
          <small className="text-sm font-bold uppercase text-secondary">
            paso 3
          </small>
          <h4 className="mb-4 text-xl font-bold leading-5 text-neutral">
            Inscribite en la actividad que mas te interese
          </h4>
          <p className="leading-5">
            Ingresa a una actividad para conocer el perfil buscado por la
            fundacion, las tareas a realizar y todos los detalles del
            voluntariado.
          </p>
        </div>
      </CardWhite>
      <CardWhite className="h-[243px] mt-0 border w-[342px] border-base-300">
        <div className="flex flex-col items-start">
          <small className="text-sm font-bold uppercase text-secondary">
            paso 4
          </small>
          <h4 className="mb-4 text-xl font-bold leading-5 text-neutral">
            Espera la confirmacion de la organizacion y... ¡listo!
          </h4>
          <p className="leading-5">
            Una vez inscripto, le notificaremos a la fundacion para que conozca
            tu perfil y confirme tu participacion.
          </p>
          <h5 className="mt-3 font-semibold">¡Gracias por querer colaborar!</h5>
        </div>
      </CardWhite>
    </div>
  );
}

export default StepsCards;
