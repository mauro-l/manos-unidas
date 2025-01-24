import {Link} from "react-router-dom"

const Card = ({ activity }) => {
  const {
    titulo,
    descripcion,
    fundacion,
    ubicacion,
    categoria,
    /* tareas, */
  } = activity;

 /*  const tareasList = tareas ? tareas.split("\n") : []; */

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
        <div className="inline-flex gap-2 text-[#515151] text-sm">
          <a className="link font-bold text-nowrap">{fundacion}</a>
          <p className="border-l border-[#D1D5DB] ps-2 ">{ubicacion.pais}, {ubicacion.ciudad}  </p>
        </div>
        <p>{descripcion}</p>
       {/*  <ul className="list-disc list-inside mt-4 text-[#515151]">
          {tareasList.map((tar, index) => (
            <li key={index}>{tar}</li>
          ))}
        </ul> */}
        <div className="card-actions justify-end"></div>
        <Link role="button" className="btn btn-outline font-bold border-[#D1D5DB]">
          Conocer más
        </Link>
      </div>
    </div>
  );
};

export default Card;
