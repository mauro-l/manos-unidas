import {
  HiCalendarDays,
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
} from "react-icons/hi2";

function MiniCardsInfo({ activity }) {
  return (
    <section className="flex flex-col w-full gap-2 -mt-5 lg:flex-row">
      <div className="flex w-full gap-2 lg:gap-4">
        <div className="flex items-center justify-center h-16 gap-2 border rounded-lg lg:justify-start lg:p-4 lg:h-20 bg-neutral-content grow lg:flex-1 border-base-300">
          <HiOutlineClipboardDocumentCheck className="w-6 h-6 text-secondary" />
          <div className="text-sm text-neutral">
            <h4 className="text-nowrap">Inscripcion abierta hasta</h4>
            <p className="font-bold">{activity.inscripcion || "--/--/--"}</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-16 gap-2 px-4 py-3 border rounded-lg lg:justify-start lg:p-4 lg:h-20 bg-neutral-content grow-0 lg:flex-1 border-base-300">
          <HiOutlineUsers className="w-6 h-6 text-secondary" />
          <div className="text-sm text-neutral">
            <h4 className="text-nowrap">Voluntarios</h4>
            <p className="font-bold">
              {activity.voluntarios_inscritos || "-"}/
              {activity.cupos_disponibles || "--"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <div className="flex items-center justify-center h-16 gap-2 px-4 py-3 border rounded-lg lg:p-4 lg:justify-start lg:h-20 bg-neutral-content border-base-300 grow-0 lg:flex-1">
          <HiCalendarDays className="w-6 h-6 text-secondary" />
          <div className="text-sm text-neutral">
            <h4 className="text-nowrap">Inicio de actividad</h4>
            <p className="font-bold">{activity.fecha_inicio || "--/--/--"}</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-16 gap-2 border rounded-lg lg:p-4 lg:justify-start lg:h-20 bg-neutral-content grow border-base-300 lg:flex-1">
          <HiCalendarDays className="w-6 h-6 text-secondary" />
          <div className="text-sm text-neutral ">
            <h4 className="text-nowrap">Fin de actividad</h4>
            <p className="font-bold">{activity.fecha_fin || "--/--/--"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiniCardsInfo;
