import { HiCalendarDays } from "react-icons/hi2";
import useActivityById from "../../../hooks/useActivityById.js";

const EventCard = ({ className, activityId, estado }) => {
  const { loading, activity, error } = useActivityById(activityId);
  const estadoClases = {
    aprobado: "bg-secondary text-secondary-content ",
    pendiente: "bg-base-10 text-base-content",
    rechazado: "bg-accent  text-warning",
    finalizado: "border border-base-400 text-base-400",
  };

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className={`${className} flex flex-col  p-4 border border-base-300 rounded-lg space-y-4 `}
    >
      <div className="space-y-2">
        <h3 className="text-lg  font-bold text-base-neutral text-start">
          {" "}
          {activity.titulo}{" "}
        </h3>

        <div className="w-full flex flex-col-2 gap-4 ">
          <div className="w-1/2 flex items-center ">
            <HiCalendarDays className="text-secondary text-2xl mr-2 " />
            <div>
              <p className="text-neutral">Inicio de actividad </p>
              <p className="font-bold">{activity.fecha_inicio}</p>
            </div>
          </div>

          <div className="md:w-1/2 flex items-center">
            <HiCalendarDays className="text-secondary text-2xl mr-2  " />
            <div>
              <p className=" text-neutral"> Fin de actividad </p>
              <p className="font-bold">{activity.fecha_fin}</p>
            </div>
          </div>
        </div>
      </div>

      <div >
      <div
        className={`mt-2 px-3 py-0.5 rounded-full  inline-block text-sm font-bold uppercase ${
          estadoClases[estado] || "bg-base-400 text-neutral "
        }`}
      >
        {estado === "aprobado"
          ? "Aprobado para participar"
          : estado === "pendiente"
          ? "Aprobación pendiente"
          : estado === "rechazado"
          ? "Rechazado"
          : estado === "finalizado"
          ? "Actividad finalizada"
          : "Estado desconocido"}
      </div>
      </div>
    </div>
  );
};

export default EventCard;
