import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/index.routes.js";

const Card = ({ activity }) => {
  return (
    <div className="mx-auto border-2 card bg-base-100 lg:w-[342px] lg:h-[473px]">
      <figure>
        <img
          className="w-full h-40 rounded-lg "
          src={activity.imagen}
          alt={activity.titulo}
        />
      </figure>
      <div className="gap-4 p-6 card-body">
        <div className="inline-flex items-center gap-2 text-base-content border-base300">
          <div className="gap-4 uppercase rounded-full badge badge-ghost badge-sm text-base-content">
            {activity.categoria_id.nombre}
          </div>
        </div>
        <h2 className="text-2xl font-bold leading-6 card-title text-neutral line-clamp-2">
          {activity.titulo} en {activity.ubicacion.ciudad}
        </h2>
        <div className="inline-flex w-full gap-2 text-sm text-base-300 ">
          <Link
            to={ROUTES.VOLUNTEER.PERFIL_FOUNDATION(activity._id)}
            className="w-1/2 font-bold link text-balance text-primary"
          >
            {activity.fundacion_id.nombre}
          </Link>
          <p className="flex items-center w-1/2 border-l text-neutral border-base-300 ps-3 ">
            {activity.ubicacion.pais}, {activity.ubicacion.ciudad}{" "}
          </p>
        </div>
        <p className="line-clamp-3">{activity.descripcion}</p>

        <div className="w-full card-actions">
          <Link
            to={ROUTES.VOLUNTEER.VER_ACTIVIDAD(activity._id)}
            role="button"
            className="w-full mb-1 font-bold btn btn-outline btn-ghost border-base-300"
          >
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

