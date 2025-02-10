import { HiMiniCheck, HiMiniXMark } from "react-icons/hi2";
import BtnBack from "@/components/common/buttons/BtnBack.jsx";
import CardWhite from "@/components/common/cards/CardWhite.jsx";
import TitleDoubleXL from "@/components/common/headers/TitleDoubleXL.jsx";
import Banner from "@/components/layout/Banner.jsx";
import Footer from "@/components/layout/Footer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAprobacion } from "@/hooks/useAprobacion.js";
import { getInscriptionsById } from "@/services/inscriptionsService.js";
import LoadingMU from "@/components/common/skeleton/LoadingMU.jsx";
import Alert from "../../../components/layout/Alert.jsx";
import BadgeStatus from "../../../components/common/buttons/BadgeStatus.jsx";

const VolunteerViewFnd = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [inscription, setInscription] = useState(null);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState({
    type: "info",
    title: "",
    message: "",
    isVisible: false,
  });

  const {
    aprobarInscripcion,
    loading: isLoading,
    error: errorFetch,
  } = useAprobacion();

  const showAlert = (type, title, message) => {
    setAlert({
      type,
      title,
      message,
      isVisible: true,
    });
  };

  useEffect(() => {
    const getInscriptionById = async () => {
      try {
        setLoading(true);
        const res = await getInscriptionsById(id);
        console.log(res);
        setInscription(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getInscriptionById();
  }, [id]);

  const handleApproveClick = async () => {
    try {
      const newStatus =
        inscription.estado === "Pendiente" ? "Aprobada" : "Pendiente";

      await aprobarInscripcion(
        inscription._id,
        inscription.voluntario_id._id,
        inscription.actividad_id._id,
        newStatus
      );

      // Actualizar el estado local de la inscripción
      setInscription((prev) => ({
        ...prev,
        estado: newStatus,
      }));

      // Mostrar el mensaje correspondiente
      if (newStatus === "Aprobada") {
        showAlert(
          "success",
          "El voluntario ha sido aprobado",
          "¡Esperamos que su participación sea un éxito!"
        );
      } else {
        showAlert(
          "info",
          "Se ha revocado su aprobación",
          "El voluntario está pendiente de aprobación"
        );
      }
    } catch (error) {
      console.error(error);
      showAlert(
        "error",
        "Hubo problemas, inténtelo más tarde",
        "Disculpen las molestias"
      );
    }
  };

  const handleRejectClick = async () => {
    try {
      await aprobarInscripcion(
        inscription._id,
        inscription.voluntario_id._id,
        inscription.actividad_id._id,
        "Rechazada"
      );

      // Actualizar el estado local de la inscripción
      setInscription((prev) => ({
        ...prev,
        estado: "Rechazada",
      }));

      showAlert(
        "info",
        "Se ha rechazado el perfil del voluntario",
        "Lamentamos que no cumpla con el perfil que buscas"
      );
    } catch (error) {
      console.error(error);
      showAlert(
        "error",
        "Hubo problemas, inténtelo más tarde",
        "Disculpen las molestias"
      );
    }
  };

  if (error || errorFetch) return error;

  return (
    <>
      <Banner>
        <div className="lg:container lg:mx-auto">
          <div className="mb-6">
            <BtnBack>Volver</BtnBack>
          </div>

          {!inscription ? (
            <div className="flex">
              <div className="w-32 h-32 skeleton"></div>
              <div>
                <div className="w-full h-4 skeleton"></div>
                <div className="w-full h-4 skeleton"></div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex gap-6 mb-2">
                <div className="rounded-lg avatar">
                  <div className="w-24 rounded-lg lg:w-32 ring-transparent ring-offset-base-100 ring ring-offset-2">
                    <img
                      src={inscription.voluntario_id.foto_perfil}
                      alt="Perfil"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center">
                  <p className="text-3xl font-bold lg:text-6xl">
                    {inscription.voluntario_id.nombre}{" "}
                    {inscription.voluntario_id.apellido}
                  </p>
                  <p className="text-sm font-normal text-neutral-content/65">
                    {inscription.voluntario_id.ubicacion.ciudad},{" "}
                    {inscription.voluntario_id.ubicacion.provincia},{" "}
                    {inscription.voluntario_id.ubicacion.pais}
                  </p>
                </div>
              </div>
              <BadgeStatus estado={inscription.estado} role="fundacion" />
            </>
          )}
        </div>
      </Banner>

      {!inscription ? (
        <LoadingMU />
      ) : (
        <div className="container px-4 lg:px-0 lg:mx-auto lg:pb-32">
          <CardWhite>
            Esta es una breve presentación del voluntario, contando datos sobre
            su vida, edad, intereses, etc.
          </CardWhite>

          <div className="lg:px-12">
            <div className="flex flex-col gap-4 lg:gap-6">
              <TitleDoubleXL>Experiencia laboral</TitleDoubleXL>
              <p>{inscription.voluntario_id.profesion}</p>
            </div>

            <div className="divider text-base-300 lg:my-12"></div>

            <div className="flex flex-col gap-4 lg:gap-6">
              <TitleDoubleXL>Estudios</TitleDoubleXL>
              <p>{inscription.voluntario_id.estudios}</p>
            </div>

            <div className="divider text-base-300 lg:my-12"></div>

            <div className="flex flex-col gap-4 lg:gap-6">
              <TitleDoubleXL>Habilidades</TitleDoubleXL>
              <div className="flex flex-wrap gap-2">
                {!loading &&
                  inscription.voluntario_id.habilidades.map((skill) => (
                    <div
                      className="badge bg-base-100 lg:badge-ghost lg:badge-lg text-base-content"
                      key={skill._id}
                    >
                      {skill.nombre}
                    </div>
                  ))}
              </div>
            </div>

            <div className="divider text-base-300 lg:my-12"></div>

            <div className="flex flex-col w-full gap-4 lg:flex-row">
              <div className="relative w-full">
                <button
                  className={`w-full lg:mb-10 btn  ${
                    inscription.estado === "Pendiente"
                      ? "btn-primary text-primary-content"
                      : "btn-accent text-accent-content"
                  }`}
                  onClick={handleApproveClick}
                  disabled={isLoading}
                >
                  <HiMiniCheck
                    className={`w-4 h-4 ${
                      inscription.estado !== "Pendiente" && "hidden"
                    }`}
                  />
                  {isLoading ? (
                    <span className="loading loading-ring loading-md"></span>
                  ) : inscription.estado === "Pendiente" ? (
                    "Aprobar voluntario"
                  ) : (
                    "Revocar aprobación"
                  )}
                </button>
              </div>

              <div className="relative w-full ">
                <button
                  className="w-full mb-10 btn btn-ghost border-base-300 "
                  disabled={inscription.estado === "Rechazada" || isLoading}
                  onClick={handleRejectClick}
                >
                  <HiMiniXMark className="w-4 h-4" />
                  {isLoading ? (
                    <span className="loading loading-ring loading-md"></span>
                  ) : (
                    "Rechazar voluntario"
                  )}
                </button>
              </div>
            </div>
          </div>
          <Alert
            type={alert.type}
            title={alert.title}
            message={alert.message}
            isVisible={alert.isVisible}
            onClose={() => setAlert((prev) => ({ ...prev, isVisible: false }))}
          />
        </div>
      )}

      <Footer />
    </>
  );
};

export default VolunteerViewFnd;

