import { Link } from "react-router-dom";
import Banner from "../../../components/layout/Banner.jsx";
import EmptyDashed from "../../../components/layout/EmptyDashed.jsx";
import InscriptionsListVol from "../../../components/modules/activities/InscriptionsListVol.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import useAuth from "../../../hooks/useAuth.js";
import ErrorPage from "../../notifications/ErrorPage.jsx";
import { ROUTES } from "../../../routes/index.routes.js";
import useInscriptions from "../../../hooks/useInscriptions.js";

const InscriptionsVol = () => {
  const { user } = useAuth();
  const { inscriptions, loading, error } = useInscriptions(user.id);

 
  if (error) {
    return <ErrorPage />;
  }
  

  return (
    <>
      <Banner>
        Revisa el estado de todas tus inscripciones a voluntariados
      </Banner>
      {loading ? (
        <div className="flex w-full">
          <span className="py-32 mx-auto loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="lg:container lg:mx-auto">
          {inscriptions.length <= 0 ? (
            <div className="px-4 -mt-5 ">
              <EmptyDashed>
                <p className="font-bold text-neutral">
                  ¡Aún no te has inscrito a ningún voluntariado!
                </p>
                <Link
                  to={ROUTES.VOLUNTEER.EXPLORAR}
                  className="font-bold rounded-lg btn btn-primary text-primary-content "
                >
                  Explorar actividades publicadas
                </Link>
              </EmptyDashed>
            </div>
          ) : (
            <div className="px-4">
              <div className="p-6 mb-4 -mt-8 rounded-lg bg-base-100">
                <p>
                  Desde aquí podrás revisar todas los voluntariados en los que
                  te has inscrito, ver las fechas de las actividades o cancelar
                  tu inscripción de ser necesario.
                </p>
              </div>

              <InscriptionsListVol inscriptions={inscriptions} />
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default InscriptionsVol;

