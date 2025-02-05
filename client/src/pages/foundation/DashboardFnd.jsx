import TitleDoubleXL from "../../components/common/headers/TitleDoubleXL.jsx";
import Banner from "../../components/layout/Banner.jsx";
import { HiMiniPlus } from "react-icons/hi2";
import ActivitiesListFnd from "../../components/modules/activities/ActivitiesListFnd.jsx";
import Footer from "../../components/layout/Footer.jsx";
//import IncompleteDashboard from "../../components/modules/dashboard/IncompleteDashboard.jsx";

function DashboardFnd() {
  return (
    <div>
      <Banner>
        Crea actividades para que los voluntarios se inscriban en tus propuestas
      </Banner>
      <div className="px-4 pb-10 space-y-6">
        {/* <IncompleteDashboard /> */}
        <button className="w-full -mt-5 font-bold text-center btn-primary btn text-primary-content">
          <HiMiniPlus /> Crear una nueva actividad
        </button>
        <div className="space-y-4">
          <TitleDoubleXL>Voluntarios creados</TitleDoubleXL>
          <p className="text-neutral">
            Desde aquí podrás revisar o actualizar los detalles de todas tus
            actividades publicadas, enviar mensajes a los voluntarios inscriptos
            o cerrar las inscripciones manualmente.
          </p>
        </div>
        <ActivitiesListFnd />
      </div>
      <Footer/>
    </div>
  );
}

export default DashboardFnd;
