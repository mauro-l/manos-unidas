import { HiMiniCheck, HiMiniXMark } from "react-icons/hi2";
import BtnBack from "../../../components/common/buttons/BtnBack.jsx";
import CardWhite from "../../../components/common/cards/CardWhite.jsx";
import TitleDoubleXL from "../../../components/common/headers/TitleDoubleXL.jsx";
import MiniCardSkt from "../../../components/common/skeleton/MiniCardSkt.jsx";
import Banner from "../../../components/layout/Banner.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import useVolunteer from "../../../hooks/useVolunteer.js";

const VolunteerViewFnd = () => {
  const { loading, error, volunteer } = useVolunteer("VOL001");

  if (error) return error;

  return (
    <div>
      
      <Banner >
        <div className="lg:container lg:mx-auto">
        <div className="mb-6">
          <BtnBack>Volver</BtnBack>
        </div>

        {loading ? (
          <MiniCardSkt />
        ) : (
          <div className="flex gap-6">
            <div className="avatar rounded-lg">
              <div className="ring-transparent ring-offset-base-100 w-24 rounded-lg ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

            <div className="flex flex-col justify-center items-start">
              <p className="text-3xl font-bold">
                {volunteer.nombre} {volunteer.apellido}
              </p>
              <p className="text-sm text-neutral-content/65 font-normal">
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
        <div className="px-4 container lg:mx-auto lg:mb-32  ">
          <CardWhite>
            Esta es una breve presentación del voluntario, contando datos sobre
            su vida, edad, intereses, etc.
          </CardWhite>

          <div className="lg:px-12">
            <div className="flex flex-col gap-4">
              <TitleDoubleXL>Experiencia laboral</TitleDoubleXL>
              {volunteer.profesion}
            </div>

            <div className="divider text-base-300 lg:my-12 "></div>

            <div className="flex flex-col gap-4">
              <TitleDoubleXL>Estudios</TitleDoubleXL>
              {volunteer.estudios}
            </div>

            <div className="divider  text-base-300 lg:my-12 "></div>

            <div className="flex flex-col gap-4">
              <TitleDoubleXL>Habilidades</TitleDoubleXL>
              <div className=" flex flex-wrap gap-2 ">
                {!loading &&
                  volunteer.habilidades.map((skill) => (
                    <div className="badge bg-base-100  " key={skill.id}>
                      {skill.name}
                    </div>
                  ))}
              </div>
            </div>

            <div className="divider text-base-300  lg:my-12 "></div>
            <div className="flex flex-col w-full gap-4 lg:flex-row ">
              <button className="btn btn-primary text-primary-content lg:w-1/2">
                {" "}
                <HiMiniCheck className="text-pri" />
                Aprobar voluntario
              </button>
              <button className="btn btn-ghost border-base-300 mb-10 lg:w-1/2">
                <HiMiniXMark />
                Rechazar voluntario
              </button>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default VolunteerViewFnd;
