import { HiOutlineEnvelope, HiOutlinePencil } from "react-icons/hi2";
import BtnBack from "@/components/common/buttons/BtnBack.jsx";
import Banner from "@/components/layout/Banner.jsx";
import DropdownActivity from "@/components/modules/dashboard/DropdownActivity.jsx";
import MiniCardsInfo from "@/components/common/cards/MiniCardsInfo.jsx";
import useActivityById from "@/hooks/useActivityById.js";
import { Link, useParams } from "react-router-dom";
import TitleDoubleXL from "@/components/common/headers/TitleDoubleXL.jsx";
import MiniCardInscripFnd from "@/components/common/cards/MiniCardInscripFnd.jsx";
import ModalMessage from "@/components/layout/ModalMessage.jsx";
import { useState } from "react";
import useInscription from "@/hooks/useInscription.js";
import CardListSkt from "@/components/common/skeleton/CardListSkt.jsx";
import Footer from "@/components/layout/Footer.jsx";
import { ROUTES } from "@/routes/index.routes.js";

function ActivityDetailFnd() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const { activity } = useActivityById(id);
  const { loading, error, inscriptions } = useInscription(id, "actividad_id");

  if (error) return error;

  return (
    <>
      <div>
        <Banner className="w-full">
          <div className="space-y-4 lg:space-y-6 lg:container lg:mx-auto">
            <BtnBack>Volver</BtnBack>
            <h3 className="lg:text-6xl lg:font-semibold lg:text-pretty">
              {activity.titulo}
            </h3>
            <p className="text-base font-normal text-neutral-content/65 lg:text-lg">
              {activity.descripcion}
            </p>
            <div className="flex items-center justify-between w-full gap-4 flex-nowrap max-w-max">
              <Link
                to={ROUTES.FOUNDATION.EDIT_PUBLICACIONES(id)}
                role="button"
                className="flex items-center btn btn-neutral btn-sm lg:btn-md py-1.5 flex-1 flex-nowrap text-nowrap"
              >
                <HiOutlinePencil className="w-4 h-4" /> Editar detalles
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="flex items-center flex-nowrap text-nowrap btn btn-neutral btn-sm lg:btn-md py-1.5 px-3 flex-1"
              >
                <HiOutlineEnvelope className="w-5 h-5" />
                Enviar mensaje
              </button>
              <DropdownActivity />
            </div>
          </div>
        </Banner>
        <div className="px-4 pb-20 space-y-6 lg:container lg:px-0 lg:mx-auto">
          <MiniCardsInfo activity={activity} />
          <TitleDoubleXL>Voluntarios inscriptos</TitleDoubleXL>
          <div className="flex flex-col gap-2 lg:flex-row lg:w-full lg:flex-wrap">
            {loading ? (
              <CardListSkt />
            ) : (
              inscriptions.map((ins) => (
                <MiniCardInscripFnd
                  key={ins.inscripcion_id}
                  volId={ins.voluntario_id}
                  status={ins.estado}
                  expectedSkills={activity.habilidades}
                />
              ))
            )}
          </div>
        </div>
        <ModalMessage isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
      <Footer />
    </>
  );
}

export default ActivityDetailFnd;
