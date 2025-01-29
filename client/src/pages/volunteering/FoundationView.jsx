import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../../components/common/Banner.jsx";
import BtnBack from "../../components/common/BtnBack.jsx";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BiLink } from "react-icons/bi";

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
    web="Web no disponible"
  } = detail;

  return (
    <div className="w-full">
      <Banner>
        <BtnBack>Volver</BtnBack>

        <div className="flex flex-col-2 space-y-4 ">
          <p>
            {logo && (
              <img src={logo} className=" rounded-2xl max-w-24 max-h-28 mt-8 border-2 border-white  " />
            )}
          </p>

          <div className="m-6">
            <h2 className="badge  badge-primary text-sm text-primary-content px-3 py-2.5 m-0 ">
              {area_principal}
            </h2>

            <h2 className="card-title font-bold text-3xl leading-6 text-neutral-content mt-2 ">
              {nombre}
            </h2>
            <p className="text-sm text-neutral-content font-sans mt-2">
              {ubicacion.pais
                ? `${ubicacion.direccion}, ${ubicacion.provincia}, ${ubicacion.pais}`
                : "Ubicación no disponible"}
            </p>
          </div>
        </div>
      </Banner>

      <div className="  m-4 p-6 mb-4 -mt-8 rounded-lg bg-base-100">
        <p>{descripcion}</p>
      </div>

      <div className="gap-4 m-4">
        <h2 className="text-neutral font-sans font-bold text-2xl">
          Datos de contacto
        </h2>

        <div className="flex  space-x-2 mt-4">
          <FaRegEnvelope className="text-secondary w-5 h-5 " />
          <p className="link  text-sm "> {email}</p>
        </div>

        <div className="flex  space-x-2 mt-4">
        <FiPhone className="text-secondary w-5 h-5  "  />      
          <p>{telefono}</p>
        </div>

        <div className="flex  space-x-2 mt-4">
        <BiLink className="text-secondary w-5 h-5  " />
          <Link > {web} </Link>
        </div>

        <button className="btn w-full bg-secondary text-primary-content  mt-6 mb-10">
            Quiero inscribirme
          </button>
      </div>
    </div>
  );
};

export default FoundationView;
