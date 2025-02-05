import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
  HiCalendarDays,
} from "react-icons/hi2";

import { Link, useParams } from "react-router-dom";
import Banner from "../../../components/layout/Banner.jsx";
import BtnBack from "../../../components/common/buttons/BtnBack.jsx";
import MiniCard from "../../../components/common/cards/MiniCard.jsx";
import imgActivity from "../../../assets/imagen-actividad.png";
import TitleDoubleXL from "../../../components/common/headers/TitleDoubleXL.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import useActivityById from "../../../hooks/useActivityById.js";
import { ROUTES } from "../../../routes/index.routes.js";

const ActivitiesDetailVol = () => {
  const { id } = useParams();
  const { loading, activity, error } = useActivityById(id);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  const tareasList = activity.tareas ? activity.tareas.split("\n") : [];

  return (
    <div className="w-full ">
      <Banner>
        <div className="flex flex-col space-y-4 ">
          <div className="flex flex-col">
            <BtnBack> Volver </BtnBack>
            <div className="badge  badge-primary text-sm text-primary-content px-3 py-2.5 m-0 ">
              {activity.categoria.name || "Cargando..."}
            </div>
          </div>
          <h2 className="text-2xl font-bold leading-6 card-title lg:text-6xl lg:text-red-900 ">
            {activity.titulo}
          </h2>

          <p className="text-base font-normal text-neutral-content ">
            {activity.descripcion}
          </p>

          <div className="inline-flex w-full gap-2 text-sm ">
            <div className="w-1/3">
              <p className="text-xs font-normal text-neutral-content ">
                Organizado por
              </p>
              <Link className="font-semibold link text-primary text-pretty">
                {activity.fundacion_id}
              </Link>
            </div>

            <div className="divider divider-neutral divider-horizontal"></div>

            <div className="w-2/3 font-semibold text-neutral-content ">
              <p className="text-xs font-normal ">Ubicación</p>
              <p>
                {activity.ubicacion.direccion || "No especificada"},{" "}
                {activity.ubicacion.provincia || "No especificada"},{" "}
                {activity.ubicacion.ciudad || "No especificada"},{" "}
                {activity.ubicacion.pais || "No especificado"}
              </p>
            </div>
          </div>
        </div>
      </Banner>

      <div className="p-4 pb-10 ">
        <div className="-mt-8 ">
          <img
            className="h-48 mx-auto"
            src={imgActivity}
            alt="Imagen de actividad"
          />
        </div>
        <div className="flex flex-col gap-2 mt-6 lg:flex-row ">
          <div className="flex w-full h-20 gap-2 ">
            <MiniCard
              className="w-2/3 text-xs"
              icon={HiOutlineClipboardDocumentCheck}
              title={"Inscripción abierta hasta"}
              text={activity.inscripcion}
            />
            <MiniCard
              className="w-2/5"
              icon={HiOutlineUsers}
              title={"Quedan"}
              text={activity.cupo_disponible}
            />
          </div>

          <div className="flex w-full h-20 gap-2">
            <MiniCard
              className="w-3/5"
              icon={HiCalendarDays}
              title={"Inicio de actividad"}
              text={activity.fecha_inicio}
            />
            <MiniCard
              className="w-3/5 "
              icon={HiCalendarDays}
              title={"Fin de actividad"}
              text={activity.fecha_fin}
            />
          </div>
        </div>

        <div>
          <TitleDoubleXL className="mt-6 mb-4">
            Tareas a realizar:
          </TitleDoubleXL>
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            {tareasList.length > 0 ? (
              tareasList.map((tar, index) => <li key={index}>{tar}</li>)
            ) : (
              <li>No hay tareas especificadas.</li>
            )}
          </ul>
        </div>

        <div className="my-6 divider"></div>

        <div>
          <TitleDoubleXL className="pb-4">Perfil buscado</TitleDoubleXL>
          <p>{activity.perfil_buscado}</p>
        </div>

        <div className="my-6 divider"></div>

        <div>
          <TitleDoubleXL className="pb-4">Habilidades</TitleDoubleXL>

          {activity.habilidades.map((skill) => (
            <p key={skill.id}>{skill.name}</p>
          ))}
        </div>

        <div className="my-6 divider "></div>

        <div>
          <TitleDoubleXL className="pb-4">Disponibilidad</TitleDoubleXL>
          <p>{activity.disponibilidad}</p>
        </div>
        <div className="my-6 divider "></div>
        <div>
          <button
            className="w-full shadow-2xl btn bg-primary text-primary-content"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Quiero inscribirme
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="text-3xl font-bold ">
                ¡Gracias por tu interés! Te has inscrito con éxito en la
                actividad
              </h3>
              <p className="py-4 text-sm ">
                Le informaremos a la fundación sobre tu interés, y deberás
                esperar a que confirmen tu participación. Te avisaremos en
                cualquier caso a tu email y dentro de la plataforma.
              </p>

              <p className="py-4 text-sm ">
                Podrás hacer un seguimiento de tus inscripciones desde Mis
                voluntariados.
              </p>
              <div className="w-full ">
                <form method="dialog  ">
                  <Link
                    to={ROUTES.VOLUNTEER.INSCRIPCIONES}
                    className="flex justify-center w-full px-6 py-3 text-sm border border-base-300 rounded-xl text-base-content "
                  >
                    Ir a Mis voluntariados
                  </Link>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActivitiesDetailVol;
