import { HiCalendarDays } from "react-icons/hi2";
import useActivityById from "../../../hooks/useActivityById.js";
import DropdownVolunteering from "../../modules/activities/DropdownVolunteering.jsx";

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
      className={`${className} flex flex-col  p-4 border border-base-300 rounded-lg space-y-4 lg:w-[475px] max-w-[475px] lg:h-[184px] lg:p-6 `}
    >
      <div className="space-y-2 ">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold truncate text-base-neutral text-start">
            {" "}
            {activity.titulo}{" "}
          </h3>
          <DropdownVolunteering />
        </div>
        <div className="flex w-full gap-4 flex-col-2 ">
          <div className="flex items-center w-1/2 ">
            <HiCalendarDays className="mr-2 text-2xl text-secondary " />
            <div className="text-sm">
              <p className="text-neutral">Inicio de actividad </p>
              <p className="font-bold">{activity.fecha_inicio}</p>
            </div>
          </div>

          <div className="flex items-center md:w-1/2">
            <HiCalendarDays className="mr-2 text-2xl text-secondary " />
            <div className="text-sm">
              <p className=" text-neutral"> Fin de actividad </p>
              <p className="font-bold">{activity.fecha_fin}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`badge text-xs font-bold uppercase ${
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
  );
};

export default EventCard;

