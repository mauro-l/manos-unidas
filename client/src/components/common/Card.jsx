import {Link} from "react-router-dom"

const Card = ({ activity }) => {
  const {
    titulo,
    descripcion,
    fundacion,
    ubicacion,
    categoria,
  } = activity;

 

  return (
    <div className="card bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          className="h-36 w-96"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kp0xUTq4sBK1q-McB-ZgaDGzrzOKymk4_A&s"
          alt={titulo}
        />
      </figure>
      <div className="card-body p-6 gap-4">
        <div className="inline-flex items-center text-[#818181] border-[#818181] gap-2">
          <div className="badge badge-outline">{categoria}</div>
        </div>
        <h2 className="card-title font-bold text-2xl leading-6">{titulo}</h2>
        <div className="inline-flex gap-2 text-[#515151] text-sm w-full ">
          <Link  className="link font-bold text-balance w-1/2">{fundacion}</Link>
          <p className="border-l border-[#D1D5DB] ps-2 w-1/2 ">{ubicacion.pais}, {ubicacion.ciudad}  </p>
        </div>
        <p>{descripcion}</p>
      
        <div className="card-actions justify-end"></div>
        <Link  role="button" className="btn btn-outline font-bold border-[#D1D5DB]">
          Conocer más
        </Link>
      </div>
    </div>
  );
};

export default Card;
