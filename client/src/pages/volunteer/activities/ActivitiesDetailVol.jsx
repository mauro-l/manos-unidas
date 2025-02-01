import axios from "axios";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
  HiCalendarDays,
} from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../../../components/layout/Banner.jsx";
import BtnBack from "../../../components/common/buttons/BtnBack.jsx";
import MiniCard from "../../../components/common/cards/MiniCard.jsx";
import imgActivity from "../../../assets/imagen-actividad.png";
import TitleDoubleXL from "../../../components/common/headers/TitleDoubleXL.jsx";
import Footer from "../../../components/layout/Footer.jsx";

const ActivitiesDetailVol = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/data/actividades-voluntariado-db.json`);

        const actividad = res.data.find((item) => item.id === Number(id));

        if (!actividad) {
          throw new Error("Actividad no encontrada");
        }
        setDetail(actividad);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  const {titulo, descripcion, inscripcion, fecha_inicio, fecha_fin, ubicacion = {}, fundacion, categoria, tareas = "", habilidades, perfil_buscado, cupo_disponible, disponibilidad, } = detail;

  const tareasList = tareas ? tareas.split("\n") : [];

  return (
    <div className="w-full ">
      <div>
        <Banner>
          <div className="flex flex-col space-y-4 ">
            <div className="flex flex-col">
              <BtnBack> Volver </BtnBack>
              <div className="badge  badge-primary text-sm text-primary-content px-3 py-2.5 m-0 ">
                {categoria}
              </div>
            </div>
            <h2 className="text-2xl font-bold leading-6 card-title lg:text-6xl ">
              {titulo}
            </h2>

            <p className="text-base font-normal text-neutral-content ">
              {descripcion}
            </p>

            <div className="inline-flex w-full gap-2 text-sm ">
              <div className="w-1/3">
                <p className="text-xs font-normal text-neutral-content ">
                  Organizado por
                </p>
                <Link className="font-semibold link text-primary text-pretty"  >
                  {fundacion}
                </Link>
              </div>

              <div className="divider divider-neutral divider-horizontal"></div>

              <div className="w-2/3 font-semibold text-neutral-content ">
                <p className="text-xs font-normal ">Ubicación</p>
                <p>
                  {ubicacion.direccion || "No especificada"},{" "}
                  {ubicacion.provincia || "No especificada"},{" "}
                  {ubicacion.ciudad || "No especificada"},{" "}
                  {ubicacion.pais || "No especificado"}
                </p>
              </div>
            </div>
          </div>
        </Banner>
      </div>

      <div className="p-4 pb-10 ">
        <div className="-mt-8 ">
          <img
            className="mx-auto h-48"
            src={imgActivity}
            alt="Imagen de actividad"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-2 mt-6 ">
          <div className="flex w-full h-20 gap-2 ">
            <MiniCard
              className="text-xs w-2/3"
              icon={HiOutlineClipboardDocumentCheck}
              title={"Inscripción abierta hasta"}
              text={inscripcion}
            />
            <MiniCard
              className="w-1/3"
              icon={HiOutlineUsers}
              title={"Quedan"}
              text={cupo_disponible}
            />
          </div>

          <div className="flex w-full h-20 gap-2">
            <MiniCard
              className="w-3/5"
              icon={HiCalendarDays}
              title={"Inicio de actividad"}
              text={fecha_inicio}
            />
            <MiniCard
              className="w-3/5 "
              icon={HiCalendarDays}
              title={"Fin de actividad"}
              text={fecha_fin}
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
          <p>{perfil_buscado}</p>
        </div>

        <div className="my-6 divider"></div>

        <div>
          <TitleDoubleXL className="pb-4">Habilidades</TitleDoubleXL>
          <p>{habilidades}</p>
        </div>

        <div className="my-6 divider "></div>

        <div>
          <TitleDoubleXL className="pb-4">Disponibilidad</TitleDoubleXL>
          <p>{disponibilidad}</p>
        </div>
        <div className="my-6 divider "></div>
        <div>
          <button 
            className="btn w-full   bg-primary text-primary-content  shadow-2xl"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Quiero inscribirme
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-3xl ">
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
              <div className="modal-action  ">
                <form method="dialog  ">
                  <Link to="/inscriptions/5" className="px-6 py-3 border border-base-300 rounded-xl text-base-content text-sm "  >
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
