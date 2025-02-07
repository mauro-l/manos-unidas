import TitleDoubleXL from "../../components/common/headers/TitleDoubleXL.jsx";
import Banner from "../../components/layout/Banner.jsx";
import { HiMiniPlus } from "react-icons/hi2";
import ActivitiesListFnd from "../../components/modules/activities/ActivitiesListFnd.jsx";
import Footer from "../../components/layout/Footer.jsx";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/index.routes.js";
import useAuth from "../../hooks/useAuth.js";
import useActivitiesByFndId from "../../hooks/useActivitiesByFndId.js";


function DashboardFnd() {
  const { user } = useAuth();

 

  const { loading, activities } = useActivitiesByFndId(user.id);
  if (!loading) 

  return (
    <div>
      <Banner>
        Crea actividades para que los voluntarios se inscriban en tus propuestas
      </Banner>
      <div className="container px-4 pb-10 space-y-6 lg:mx-auto">
        {/* <IncompleteDashboard /> */}
        <div className="flex items-center flex-col space-y-6 lg:space-y-0 lg:flex-row-reverse lg:items-start lg:gap-12 lg:-mt-8 bg-neutral-content lg:p-12 lg:rounded-lg">
          <Link
            to={ROUTES.FOUNDATION.CREAR_PUBLICACIONES}
            role="button"
            className="w-full -mt-5 font-bold text-center lg:mt-0 lg:w-auto btn-primary btn text-primary-content"
          >
            <HiMiniPlus /> Crear una nueva actividad
          </Link>
          <div className="space-y-4">
            <TitleDoubleXL>Voluntarios creados</TitleDoubleXL>
            <p className="text-neutral lg:text-lg">
              Desde aquí podrás revisar o actualizar los detalles de todas tus
              actividades publicadas, enviar mensajes a los voluntarios
              inscriptos o cerrar las inscripciones manualmente.
            </p>
          </div>
        </div>
        {!loading && (
          <ActivitiesListFnd loading={loading} activity={activities} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default DashboardFnd;
