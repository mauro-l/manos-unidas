import { useState } from "react";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineEnvelope,
  HiOutlinePencil,
  HiOutlineUsers,
} from "react-icons/hi2";
import ModalMessage from "../../layout/ModalMessage.jsx";
import DropdownActivity from "../../modules/dashboard/DropdownActivity.jsx";
import { Link } from "react-router-dom";
import { ROUTES } from "@/routes/index.routes.js";

function MiniCardFnd({ activity }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="w-full p-4 space-y-4 border rounded-lg border-base-300 lg:w-[475px] lg:p-6 lg:space-y-6">
      <div className="flex justify-between">
        <Link
          to={ROUTES.FOUNDATION.DETALLE_PUBLICACIONES(activity._id)}
          className="text-lg font-bold truncate lg:text-xl lg:leading-6 text-neutral"
        >
          {activity.titulo}
        </Link>
        <div className="inline-flex gap-1.5">
          <Link
            to={ROUTES.FOUNDATION.DETALLE_PUBLICACIONES(activity._id)}
            className="p-0 btn-xs btn-ghost"
          >
            <HiOutlinePencil className="text-xl" />
          </Link>

          <button
            className="p-0 btn-xs btn-ghost"
            onClick={() => setIsOpen(true)}
          >
            <HiOutlineEnvelope className="text-xl" />
          </button>
          <DropdownActivity />
        </div>
      </div>
      <div>
        <Link
          to={ROUTES.FOUNDATION.DETALLE_PUBLICACIONES(activity._id)}
          className="flex w-full"
        >
          <div className="flex items-center w-1/2 gap-2">
            <HiOutlineUsers className="text-2xl text-secondary" />
            <span className="text-sm lg:text-base text-neutral">
              <h5 className="leading-3">Voluntarios inscriptos</h5>
              <p className="font-bold">
                {activity.voluntarios_inscriptos}/{activity.cupo_maximo}
              </p>
            </span>
          </div>
          <div className="flex items-center w-1/2 gap-2">
            <HiOutlineClipboardDocumentCheck className="text-2xl text-secondary" />
            <span className="text-sm lg:text-base text-neutral">
              <h5 className="leading-3">Cierre de inscripción</h5>
              <p className="font-bold">{activity.fecha_fin.slice(0, 10)}</p>
            </span>
          </div>
        </Link>
      </div>
      <ModalMessage isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </article>
  );
}

export default MiniCardFnd;
