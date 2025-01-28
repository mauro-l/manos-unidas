import axios from "axios";
import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineUsers,
  HiCalendarDays,
} from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TitleDoubleXL from "../../common/TitleDoubleXL.jsx";
import BtnBack from "../../common/BtnBack.jsx";
import imgActivity from "../../../assets/imagen-actividad.png";
import Banner from "../../common/Banner.jsx";
import MiniCard from "../../common/MiniCard.jsx";

const ActivitiesDetail = () => {
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
        console.log(actividad);

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
            <h2 className="card-title font-bold text-2xl leading-6">
              {titulo}
            </h2>
            <p className="font-normal text-base text-neutral-content  ">
              {descripcion}
            </p>

            <div className="inline-flex gap-2 text-sm w-full ">
              <div className="w-1/3">
                <p className="text-xs text-neutral-content font-normal ">
                  Organizado por
                </p>
                <Link className="link font-semibold  text-primary text-pretty">
                  {fundacion}
                </Link>
              </div>

              <div className="divider divider-neutral divider-horizontal"></div>

              <div className="w-1/2 text-neutral-content font-semibold ">
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
            <MiniCard className="w-60 text-xs"
              icon={HiOutlineClipboardDocumentCheck}
              title={"Inscripción abierta hasta"}
              text={inscripcion}
            />
            <MiniCard className="w-36"
              icon={HiOutlineUsers}
              title={"Quedan"}
              text={cupo_disponible}
            />
          </div>

          <div className="flex w-full h-20 gap-2">
            <MiniCard className="w-48"
              icon={HiCalendarDays}
              title={"Inicio de actividad"}
              text={fecha_inicio}
            />
            <MiniCard className="w-48"
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
          <ul className="list-disc list-inside mt-4 text-gray-700">
            {tareasList.length > 0 ? (
              tareasList.map((tar, index) => <li key={index}>{tar}</li>)
            ) : (
              <li>No hay tareas especificadas.</li>
            )}
          </ul>
        </div>

        <div className="divider my-6"></div>

        <div>
          <TitleDoubleXL className="pb-4">Perfil buscado</TitleDoubleXL>
          <p>{perfil_buscado}</p>
        </div>

        <div className="divider my-6"></div>

        <div>
          <TitleDoubleXL className="pb-4">Habilidades</TitleDoubleXL>
          <p>{habilidades}</p>
        </div>

        <div className="divider my-6 "></div>

        <div>
          <TitleDoubleXL className="pb-4">Disponibilidad</TitleDoubleXL>
          <p>{disponibilidad}</p>
        </div>
        <div className="divider my-6 "></div>
        <div>
          <button className="btn w-full bg-primary text-primary-content  mb-10">
            Quiero inscribirme
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDetail;
