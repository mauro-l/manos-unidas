import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
  HiCalendarDays,
} from "react-icons/hi2";

import { Link, useParams } from "react-router-dom";
import Banner from "@/components/layout/Banner.jsx";
import BtnBack from "@/components/common/buttons/BtnBack.jsx";
/* import imgActivity from "@/assets/imagen-actividad.png"; */
import TitleDoubleXL from "@/components/common/headers/TitleDoubleXL.jsx";
import Footer from "@/components/layout/Footer.jsx";
import useActivityById from "@/hooks/useActivityById.js";
import { ROUTES } from "@/routes/index.routes.js";

const ActivitiesDetailVol = () => {
  const { id } = useParams();
  const { loading, activity, error } = useActivityById(id);
  console.log(activity);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  /* const tareasList = activity.tareas ? activity.tareas.split("\n") : []; */

  return (
    <div className="w-full ">
      <Banner>
        <div className="flex flex-col space-y-4 ">
          <div className="flex flex-col">
            <BtnBack> Volver </BtnBack>
            <div className="badge  badge-primary text-sm text-primary-content px-3 py-2.5 m-0 ">
              {activity.categoria_id.nombre || "Cargando..."}
            </div>
          </div>
          <h2 className="text-2xl font-bold leading-6 card-title lg:text-6xl ">
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
                {activity.fundacion_id.nombre}
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

      <div className="container p-4 pb-10 lg:mx-auto">
        <div className="-mt-8 ">
          <img
            className="w-full h-48 mx-auto border-2 rounded-lg border-neutral-content lg:object-cover lg:h-[500px]"
            src={activity.imagen}
            alt="Imagen de actividad"
          />
        </div>
        <div className="lg:flex">
          <div className="flex flex-col gap-2 mt-6 lg:flex-col lg:w-2/6">
            <section className="flex flex-col w-full gap-2 lg:flex-col lg:max-w-[300px]">
              <div className="flex w-full gap-2 lg:gap-4 lg:flex-col">
                <div className="flex items-center justify-center h-16 gap-2 border rounded-lg lg:justify-start lg:p-4 lg:h-20 bg-neutral-content grow lg:flex-1 border-base-300">
                  <HiOutlineClipboardDocumentCheck className="w-6 h-6 text-secondary" />
                  <div className="text-sm text-neutral">
                    <h4 className="text-nowrap">Inscripcion abierta hasta</h4>
                    <p className="font-bold">
                      {activity.fecha_limite.slice(0, 10) || "--/--/--"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center h-16 gap-2 px-4 py-3 border rounded-lg lg:justify-start lg:p-4 lg:h-20 bg-neutral-content grow-0 lg:flex-1 border-base-300">
                  <HiOutlineUsers className="w-6 h-6 text-secondary" />
                  <div className="text-sm text-neutral">
                    <h4 className="text-nowrap">Quedan</h4>
                    <p className="font-bold">
                      {activity.cupo_maximo - activity.voluntarios_inscriptos ||
                        "-"}{" "}
                      vacantes
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-2 lg:flex-col">
                <div className="flex items-center justify-center h-16 gap-2 px-4 py-3 border rounded-lg lg:p-4 lg:justify-start lg:h-20 bg-neutral-content border-base-300 grow-0 lg:flex-1">
                  <HiCalendarDays className="w-6 h-6 text-secondary" />
                  <div className="text-sm text-neutral">
                    <h4 className="text-nowrap">Inicio de actividad</h4>
                    <p className="font-bold">
                      {activity.fecha_inicio.slice(0, 10) || "--/--/--"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center h-16 gap-2 border rounded-lg lg:p-4 lg:justify-start lg:h-20 bg-neutral-content grow border-base-300 lg:flex-1">
                  <HiCalendarDays className="w-6 h-6 text-secondary" />
                  <div className="text-sm text-neutral ">
                    <h4 className="text-nowrap">Fin de actividad</h4>
                    <p className="font-bold">
                      {activity.fecha_fin.slice(0, 10) || "--/--/--"}
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <button
              className="hidden w-full shadow-2xl btn bg-primary text-primary-content lg:block lg:w-auto lg:max-w-[300px]"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Quiero inscribirme
            </button>
          </div>
          <div className="lg:w-5/6">
            <div>
              <TitleDoubleXL className="mt-6 mb-4">
                Tareas a realizar:
              </TitleDoubleXL>
              <ul className="mt-4 text-gray-700 list-disc list-inside">
                {activity.tareas.length > 0 ? (
                  activity.tareas.map((tar, index) => (
                    <li key={index}>{tar}</li>
                  ))
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
              <TitleDoubleXL className="pb-4">Habilidades</TitleDoubleXL>{" "}
              {activity.habilidades.map((skill, index) => (
                <p className="badge bg-base-10 me-2" key={index}>
                  {skill}
                </p>
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
                className="w-full shadow-2xl btn bg-primary text-primary-content lg:hidden"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ActivitiesDetailVol;
