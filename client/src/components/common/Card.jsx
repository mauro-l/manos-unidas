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
    <div className="card bg-base-100 border-2 mx-auto">
      <figure>
        <img
          className="h-40 w-full rounded- "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kp0xUTq4sBK1q-McB-ZgaDGzrzOKymk4_A&s"
          alt={titulo}
        />
      </figure>
      <div className="card-body p-6 gap-4">
        <div className="inline-flex items-center text-[#818181] border-[#818181] gap-2">
          <div className="className=badge badge-ghost gap-4 badge-md rounded-full">{categoria}</div>
        </div>
        <h2 className="card-title text-[#374151] font-bold text-2xl leading-6">{titulo}</h2>
        <div className="inline-flex gap-2 text-[#515151] text-sm w-full ">
          <Link  className="link font-bold text-balance w-1/2 text-[#0891B2] ">{fundacion}</Link>
          <p className="border-l text-[#374151] border-[#D1D5DB] ps-2 w-1/2 ">{ubicacion.pais}, {ubicacion.ciudad}  </p>
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
