import { Link, useParams } from "react-router-dom";
import Banner from "../../../components/layout/Banner.jsx";
import EmptyDashed from "../../../components/layout/EmptyDashed.jsx";
import InscriptionsListVol from "../../../components/modules/activities/InscriptionsListVol.jsx";
import Footer from "../../../components/layout/Footer.jsx";

const InscriptionsVol = () => {
  const { id } = useParams();
  console.log(id);

  if (Number(id) > 10) {
    return <div className="text-orange-600"> error </div>;
  }

  return (
    <>
      <Banner>
        Revisa el estado de todas tus inscripciones a voluntariados
      </Banner>
      <div className="lg:container lg:mx-auto">
        {Number(id) > 5 ? (
          <div className="text-5xl font-bold text-black">error{id} </div>
        ) : Number(id) < 5 ? (
          <div className="px-4">
            <div className="p-6 mb-4 -mt-8 rounded-lg bg-warning lg:inline-flex lg:w-full lg:justify-between lg:items-center">
              <p className="mb-4 text-warning-content lg:mb-0">
                ¡Recuerda completar la información de tu perfil para para poder
                inscribirte en actividades!
              </p>
              <Link
                className="font-bold link text-primary "
                to="/volunteer/profile/data"
              >
                Completar perfil
              </Link>
            </div>
            <div className="px-4">
              <EmptyDashed>
                <p className="font-bold  text-neutral">
                  ¡Aún no te has inscrito a ningún voluntariado!
                </p>

                <Link
                  to="/volunteer"
                  className="gap-2 font-bold btn btn-primary roundedd-lg text-primary-content "
                >
                  {" "}
                  Explorar actividades publicadas
                </Link>
              </EmptyDashed>
            </div>
          </div>
        ) : Number(id) == 5 ? (
          <div className="px-4 -mt-5 ">
            <EmptyDashed>
              <p className="font-bold  text-neutral">
                ¡Aún no te has inscrito a ningún voluntariado!
              </p>
              <Link
                to="/volunteer"
                className="font-bold rounded-lg btn btn-primary text-primary-content "
              >
                {" "}
                Explorar actividades publicadas
              </Link>
              {/* = de 5  */}{" "}
            </EmptyDashed>
          </div>
        ) : (
          <div className="px-4">
            <div className="p-6 mb-4 -mt-8 rounded-lg bg-base-100">
              <p>
                Desde aquí podrás revisar todas los voluntariados en los que te
                has inscrito, ver las fechas de las actividades o cancelar tu
                inscripción de ser necesario.
              </p>
            </div>

            <InscriptionsListVol />
          </div>
        )}{" "}
        {/* no existe  */}
      </div>
      <Footer/>
    </>
  );
};

export default InscriptionsVol;

