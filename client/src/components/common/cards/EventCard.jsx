import { HiCalendarDays } from "react-icons/hi2";
import useActivityById from "../../../hooks/useActivityById.js";
import DropdownVolunteering from "../../modules/activities/DropdownVolunteering.jsx";
import BadgeStatus from "../buttons/BadgeStatus.jsx";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/index.routes.js";

const EventCard = ({ className, activityId, estado }) => {
  const { loading, activity, error } = useActivityById(activityId);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className={`${className} flex flex-col   p-4 border border-base-300 rounded-lg space-y-4 lg:w-[475px] max-w-[475px] lg:h-[184px] lg:p-6 `}
    >
      <div className="space-y-2 ">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold truncate text-base-neutral text-start">
            {" "}
            {activity.titulo}{" "}
          </h3>
          <DropdownVolunteering />
        </div>
        <Link to={ROUTES.VOLUNTEER.VER_ACTIVIDAD(activityId)}>
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
        </Link>
      </div>

      <BadgeStatus estado={estado} />
    </div>
  );
};

export default EventCard;

