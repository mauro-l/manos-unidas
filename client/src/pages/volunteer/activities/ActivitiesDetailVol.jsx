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

  const {
    titulo,
    descripcion,
    inscripcion,
    fecha_inicio,
    fecha_fin,
    ubicacion = {},
    fundacion,
    categoria,
    tareas = "",
    habilidades,
    perfil_buscado,
    cupo_disponible,
    disponibilidad,
  } = detail;

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
            <h2 className="text-2xl font-bold leading-6 card-title">
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
                <Link className="font-semibold link text-primary text-pretty">
                  {fundacion}
                </Link>
              </div>

              <div className="divider divider-neutral divider-horizontal"></div>

              <div className="w-1/2 font-semibold text-neutral-content ">
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

      <div className="-mt-8 ">
        <img className="mx-auto" src={imgActivity} alt="Imagen de actividad" />
      </div>

      <div className="p-4 pb-10 ">
        <div className="flex flex-col gap-2 w-96 ">
          <div className="flex w-full h-20 gap-2">
            <MiniCard
              className="text-xs w-60"
              icon={HiOutlineClipboardDocumentCheck}
              title={"Inscripción abierta hasta"}
              text={inscripcion}
            />
            <MiniCard
              className="w-36"
              icon={HiOutlineUsers}
              title={"Quedan"}
              text={cupo_disponible}
            />
          </div>

          <div className="flex w-full h-20 gap-2">
            <MiniCard
              className="w-48"
              icon={HiCalendarDays}
              title={"Inicio de actividad"}
              text={fecha_inicio}
            />
            <MiniCard
              className="w-48"
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
          <button className="w-full mb-10 btn bg-primary text-primary-content">
            Quiero inscribirme
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDetailVol;
