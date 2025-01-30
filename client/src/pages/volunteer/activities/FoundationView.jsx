import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import BtnBack from "@/components/common/buttons/BtnBack.jsx";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import Banner from "@/components/layout/Banner.jsx";

const FoundationView = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const detailFoundation = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/data/listado-fundaciones-db.json`);

        const fundacion = res.data.find((item) => item.fundacion_id === id);

        if (!fundacion) {
          throw new Error("Fundación no encontrada");
        }
        setDetail(fundacion);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    detailFoundation();
  }, [id]);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  const {
    nombre = "Nombre no disponible",
    logo = "",
    email = "Email no disponible",
    telefono = "Teléfono no disponible",
    area_principal = "Área no especificada",
    ubicacion = {},
    descripcion = "Descripción no disponible",
    web = "Web no disponible",
  } = detail;

  return (
    <div className="w-full">
      <Banner>
        <BtnBack>Volver</BtnBack>

        <div className="flex space-y-4 flex-col-2 ">
          <p>
            {logo && (
              <img
                src={logo}
                className="mt-8 border-2 border-white rounded-2xl max-w-24 max-h-28"
              />
            )}
          </p>

          <div className="m-6">
            <h2 className="badge  badge-primary text-sm text-primary-content px-3 py-2.5 m-0 ">
              {area_principal}
            </h2>

            <h2 className="mt-2 text-3xl font-bold leading-6 card-title text-neutral-content ">
              {nombre}
            </h2>
            <p className="mt-2 font-sans text-sm text-neutral-content">
              {ubicacion.pais
                ? `${ubicacion.direccion}, ${ubicacion.provincia}, ${ubicacion.pais}`
                : "Ubicación no disponible"}
            </p>
          </div>
        </div>
      </Banner>

      <div className="p-6 m-4 mb-4 -mt-8 rounded-lg bg-base-100">
        <p>{descripcion}</p>
      </div>

      <div className="gap-4 m-4">
        <h2 className="font-sans text-2xl font-bold text-neutral">
          Datos de contacto
        </h2>

        <div className="flex mt-4 space-x-2">
          <FaRegEnvelope className="w-5 h-5 text-secondary " />
          <p className="text-sm link "> {email}</p>
        </div>

        <div className="flex mt-4 space-x-2">
          <FiPhone className="w-5 h-5 text-secondary " />
          <p>{telefono}</p>
        </div>

        <div className="flex mt-4 space-x-2">
          <BiLink className="w-5 h-5 text-secondary " />
          <Link> {web} </Link>
        </div>

        <button className="w-full mt-6 mb-10 btn bg-secondary text-primary-content">
          Quiero inscribirme
        </button>
      </div>
    </div>
  );
};

export default FoundationView;

