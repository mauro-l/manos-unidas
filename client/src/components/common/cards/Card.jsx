import { Link } from "react-router-dom";

const Card = ({ activity }) => {
  const { titulo, descripcion, fundacion, ubicacion, categoria, id } = activity;

  return (
    <div className="mx-auto border-2 card bg-base-100">
      <figure>
        <img
          className="w-full h-40 rounded- "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONpoTa9Jn2WjBLPf31blftCuRH_YG5Pu9Vw&s"
          alt={titulo}
        />
      </figure>
      <div className="card-body p-6 gap-4">
        <div className="inline-flex items-center text-base-content border-base300 gap-2">
          <div className="className=badge badge-ghost gap-4 badge-md rounded-full">{categoria}</div>
        </div>
        <h2 className="card-title text-neutral font-bold text-2xl leading-6 line-clamp-2">{titulo} en {ubicacion.ciudad} </h2>
        <div className="inline-flex gap-2 text-base-300 text-sm w-full ">
          <Link  className="link font-bold text-balance w-1/2 text-primary">{fundacion}</Link>
          <p className="border-l text-neutral border-base-300 ps-3 w-1/2 flex items-center ">{ubicacion.pais}, {ubicacion.ciudad}  </p>
        </div>
        <p className="line-clamp-3">{descripcion}</p>

        <div className="w-full card-actions">
          <Link
            to={`/volunteer/activities/${id}`}
            role="button"
            className="btn btn-outline font-bold border-base-300 w-full mb-1"
          >
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;



