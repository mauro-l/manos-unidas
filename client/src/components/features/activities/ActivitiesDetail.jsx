import axios from "axios";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
  HiMiniCalendarDays,
  HiMiniArrowSmallLeft,
} from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ActivitiesDetail = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/data/actividades-voluntariado-db.json`);
        console.log(res.data);
        console.log(id);
        const actividad = res.data.find((item) => item.id === Number(id)); 
        console.log(actividad);

        if (!actividad) {
          throw new Error("Actividad no encontrada");
        }
        setDetail(actividad);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  const {
    titulo,
    descripcion,
    inscripcion,
    fecha_inicio,
    fecha_fin,
    ubicacion = {},
    fundacion,
    categoria,
    tareas = "",
    habilidades,
    perfil_buscado,
    cupo_disponible,
    disponibilidad,
  } = detail;

  const tareasList = tareas ? tareas.split("\n") : [];

  return (
    <div className="w-full">
      
      <div className="p-4 pt-20 pb-24 bg-[#1F2937] ">
        <div className="flex flex-col space-y-6 text-white">
          <div className="inline-flex text-base font-bold gap-2">
            <HiMiniArrowSmallLeft className="text-xl font-bold " />
            <h2>Volver al listado</h2>
          </div>
          <div className="badge badge-outline bg-[#0891B2] text-xs ">{categoria}</div>
          <h2 className="card-title font-bold text-2xl leading-6">{titulo}</h2>
          <p>{descripcion}</p>
          <div className="inline-flex gap-2 text-sm w-full text-gray-400">
            <h2 className="link font-bold w-1/2">{fundacion}</h2>
            <p className="border-l border-gray-500 pl-2 w-1/2">
              {ubicacion.direccion || "No especificada"},{" "}
              {ubicacion.provincia || "No especificada"},{" "}
              {ubicacion.ciudad || "No especificada"},{" "}
              {ubicacion.pais || "No especificado"}
            </p>
          </div>
        </div>
      </div>

      
      <div>
        <div>
          <HiOutlineClipboardDocumentCheck />
          <p>Inscripción abierta hasta {inscripcion}</p>
        </div>
        <div>
          <HiOutlineUsers />
          <p>Quedan {cupo_disponible} cupos</p>
        </div>
        <div>
          <HiMiniCalendarDays />
          <p>Inicio: {fecha_inicio}</p>
        </div>
        <div>
          <HiMiniCalendarDays />
          <p>Fin: {fecha_fin}</p>
        </div>
      </div>

      
      <div>
        <p>Tareas a realizar:</p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          {tareasList.length > 0 ? (
            tareasList.map((tar, index) => <li key={index}>{tar}</li>)
          ) : (
            <li>No hay tareas especificadas.</li>
          )}
        </ul>
      </div>

      
      <div>{perfil_buscado}</div>
      <div>{habilidades}</div>
      <div>{disponibilidad}</div>
    </div>
  );
};

export default ActivitiesDetail;
