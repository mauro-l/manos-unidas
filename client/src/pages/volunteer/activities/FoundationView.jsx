import { Link, useParams } from "react-router-dom";

import BtnBack from "@/components/common/buttons/BtnBack.jsx";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import Banner from "@/components/layout/Banner.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import useFoundation from "../../../hooks/useFundation.js";

const FoundationView = () => {
  const { id } = useParams();

  const { foundation, loading, error } = useFoundation(id);

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full">
      <Banner>
        <BtnBack>Volver</BtnBack>

        <div className="flex space-y-4 flex-col-2 ">
          <p>
            {foundation.logo && (
              <img
                src={foundation.logo}
                className="mt-8 border-2 border-white rounded-2xl max-w-24 max-h-28"
              />
            )}
          </p>

          <div className="m-6">
            <h2 className="badge  badge-primary text-sm text-primary-content px-3 py-2.5 m-0 ">
              {foundation.area_principal}
            </h2>

            <h2 className="mt-2 text-3xl font-bold leading-6 card-title text-neutral-content ">
              {foundation.nombre}
            </h2>
            <p className="mt-2 font-sans text-sm text-neutral-content">
              {foundation.ubicacion.pais
                ? `${foundation.ubicacion.direccion}, ${foundation.ubicacion.provincia}, ${foundation.ubicacion.pais}`
                : "Ubicación no disponible"}
            </p>
          </div>
        </div>
      </Banner>

      <div className="p-6 m-4 mb-4 -mt-8 rounded-lg bg-base-100">
        <p>
          Esta es una breve descripción de la fundación, sus orígines, historia,
          propósito y actividades realizadas.
        </p>
      </div>

      <div className="gap-4 m-4">
        <h2 className="font-sans text-2xl font-bold text-neutral">
          Datos de contacto
        </h2>

        <div className="flex mt-4 space-x-2">
          <FaRegEnvelope className="w-5 h-5 text-secondary " />
          <p className="text-sm link "> {foundation.email_contacto}</p>
        </div>

        <div className="flex mt-4 space-x-2">
          <FiPhone className="w-5 h-5 text-secondary " />
          <p>{foundation.telefono}</p>
        </div>

        <div className="flex mt-4 space-x-2">
          <BiLink className="w-5 h-5 text-secondary " />
          <Link> {foundation.web} </Link>
        </div>

        <Link
          to={foundation.donaciones}
          disabled={!foundation.donaciones}
          className="w-full mt-6 mb-10 btn bg-secondary text-primary-content"
        >
          Ayudar con una donacion
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default FoundationView;

