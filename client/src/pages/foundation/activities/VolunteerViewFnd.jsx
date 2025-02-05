import { HiMiniCheck, HiMiniXMark } from "react-icons/hi2";
import BtnBack from "@/components/common/buttons/BtnBack.jsx";
import CardWhite from "@/components/common/cards/CardWhite.jsx";
import TitleDoubleXL from "@/components/common/headers/TitleDoubleXL.jsx";
import MiniCardSkt from "@/components/common/skeleton/MiniCardSkt.jsx";
import Banner from "@/components/layout/Banner.jsx";
import Footer from "@/components/layout/Footer.jsx";
import useVolunteer from "@/hooks/useVolunteer.js";
import { useParams } from "react-router-dom";

const VolunteerViewFnd = () => {
  const { id } = useParams();
  const { loading, error, volunteer } = useVolunteer(id);

  if (error) return error;

  return (
    <>
      <Banner>
        <div className="lg:container lg:mx-auto">
          <div className="mb-6">
            <BtnBack>Volver</BtnBack>
          </div>

          {loading ? (
            <MiniCardSkt />
          ) : (
            <div className="flex gap-6">
              <div className="rounded-lg avatar">
                <div className="w-24 rounded-lg lg:w-32 ring-transparent ring-offset-base-100 ring ring-offset-2">
                  <img src={volunteer.foto_perfil} />
                </div>
              </div>

              <div className="flex flex-col items-start justify-center">
                <p className="text-3xl font-bold lg:text-6xl">
                  {volunteer.nombre} {volunteer.apellido}
                </p>
                <p className="text-sm font-normal text-neutral-content/65">
                  {volunteer.ubicacion.ciudad}, {volunteer.ubicacion.provincia},
                  {volunteer.ubicacion.pais}
                </p>
              </div>
            </div>
          )}
        </div>
      </Banner>
      {loading ? (
        <span className="loading loading-bars loading-md "></span>
      ) : (
        <div className="container px-4 lg:px-0 lg:mx-auto lg:pb-32 ">
          <CardWhite>
            Esta es una breve presentación del voluntario, contando datos sobre
            su vida, edad, intereses, etc.
          </CardWhite>

          <div className="lg:px-12">
            <div className="flex flex-col gap-4 lg:gap-6">
              <TitleDoubleXL>Experiencia laboral</TitleDoubleXL>
              <p>{volunteer.profesion}</p>
            </div>

            <div className="divider text-base-300 lg:my-12 "></div>

            <div className="flex flex-col gap-4 lg:gap-6">
              <TitleDoubleXL>Estudios</TitleDoubleXL>
              <p>{volunteer.estudios}</p>
            </div>

            <div className="divider text-base-300 lg:my-12 "></div>

            <div className="flex flex-col gap-4 lg:gap-6">
              <TitleDoubleXL>Habilidades</TitleDoubleXL>
              <div className="flex flex-wrap gap-2">
                {!loading &&
                  volunteer.habilidades.map((skill) => (
                    <div
                      className="badge bg-base-100 lg:badge-ghost lg:badge-lg text-base-content"
                      key={skill.id}
                    >
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>

            <div className="divider text-base-300 lg:my-12 "></div>
            <div className="flex flex-col w-full gap-4 lg:flex-row ">
              <button className="btn btn-primary text-primary-content lg:w-1/2">
                {" "}
                <HiMiniCheck className="text-pri" />
                Aprobar voluntario
              </button>
              <button className="mb-10 btn btn-ghost border-base-300 lg:w-1/2">
                <HiMiniXMark />
                Rechazar voluntario
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default VolunteerViewFnd;

