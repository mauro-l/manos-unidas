import { useState } from "react";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineEnvelope,
  HiOutlinePencil,
  HiOutlineUsers,
} from "react-icons/hi2";
import ModalMessage from "../../layout/ModalMessage.jsx";
import DropdownActivity from "../../modules/dashboard/DropdownActivity.jsx";

function MiniCardFnd({ activity }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="w-full p-4 space-y-4 border rounded-lg border-base-300">
      <div className="flex justify-between">
        <p className="text-lg font-bold truncate text-neutral">
          {activity.titulo}
        </p>
        <div className="inline-flex gap-1.5">
          <button className="p-0 btn-xs btn-ghost">
            <HiOutlinePencil className="text-xl" />
          </button>
          <button
            className="p-0 btn-xs btn-ghost"
            onClick={() => setIsOpen(true)}
          >
            <HiOutlineEnvelope className="text-xl" />
          </button>
          {/* <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="p-0 btn-xs btn-ghost">
              <HiOutlineEllipsisVertical className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] p-0 px-2 shadow"
            >
              <li>
                <button className="inline-flex p-0 text-sm font-normal text-nowrap flex-nowrap btn btn-ghost text-neutral">
                  <HiOutlineXCircle className="text-lg text-secondary" />
                  Cancelar inscripcion
                </button>
              </li>
              <li className="hidden">
                <button className="text-nowrap">
                  <HiOutlineTrash className="text-lg text-secondary" />
                  Elimninar actividad
                </button>
              </li>
            </ul>
          </div> */}
          <DropdownActivity />
        </div>
      </div>
      <div className="flex w-full">
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
      </div>
      <ModalMessage isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </article>
  );
}

export default MiniCardFnd;
