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

function MiniCardFnd({ activity }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="w-full p-4 space-y-4 border rounded-lg border-base-300">
      <div className="flex justify-between">
        <Link
          to={`/activity/detail/${activity.id}`}
          className="text-lg font-bold truncate text-neutral"
        >
          {activity.titulo}
        </Link>
        <div className="inline-flex gap-1.5">
          <Link
            to={`/activity/${activity.id}`}
            role="button"
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
      <Link to={`/activity/detail/${activity.id}`} className="flex w-full">
        <div className="flex items-center w-1/2 gap-2">
          <HiOutlineUsers className="text-2xl text-secondary" />
          <span className="text-sm text-neutral">
            <h5 className="leading-3">Voluntarios inscriptos</h5>
            <p className="font-bold">
              {activity.voluntarios_inscritos}/{activity.cupos_disponibles}
            </p>
          </span>
        </div>
        <div className="flex items-center w-1/2 gap-2">
          <HiOutlineClipboardDocumentCheck className="text-2xl text-secondary" />
          <span className="text-sm text-neutral">
            <h5 className="leading-3">Cierre de inscripción</h5>
            <p className="font-bold">{activity.fecha_fin}</p>
          </span>
        </div>
      </Link>
      <ModalMessage isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </article>
  );
}

export default MiniCardFnd;
