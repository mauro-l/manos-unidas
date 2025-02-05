import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/index.routes.js";

const Card = ({ activity }) => {
  const { titulo, descripcion, fundacion_id, ubicacion, categoria, id } =
    activity;

  /*   const {} */

  return (
    <div className="mx-auto border-2 card bg-base-100 lg:w-[342px] lg:h-[473px]">
      <figure>
        <img
          className="w-full h-40 rounded- "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONpoTa9Jn2WjBLPf31blftCuRH_YG5Pu9Vw&s"
          alt={titulo}
        />
      </figure>
      <div className="gap-4 p-6 card-body">
        <div className="inline-flex items-center gap-2 text-base-content border-base300">
          <div className="gap-4 uppercase rounded-full badge badge-ghost badge-sm text-base-content">
            {categoria.name}
          </div>
        </div>
        <h2 className="text-2xl font-bold leading-6 card-title text-neutral line-clamp-2">
          {titulo} en {ubicacion.ciudad}{" "}
        </h2>
        <div className="inline-flex w-full gap-2 text-sm text-base-300 ">
          <Link
            to={ROUTES.VOLUNTEER.PERFIL_FOUNDATION(fundacion_id)}
            className="w-1/2 font-bold link text-balance text-primary"
          >
            {fundacion_id}
          </Link>
          <p className="flex items-center w-1/2 border-l text-neutral border-base-300 ps-3 ">
            {ubicacion.pais}, {ubicacion.ciudad}{" "}
          </p>
        </div>
        <p className="line-clamp-3">{descripcion}</p>

        <div className="w-full card-actions">
          <Link
            to={ROUTES.VOLUNTEER.VER_ACTIVIDAD(Number(id))}
            /* to={`/volunteer/activities/${id}`} */
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

