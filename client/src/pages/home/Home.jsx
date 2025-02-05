import { Link } from "react-router-dom";
import useActivities from "@/hooks/useActivities.js";
import HomeCarrusel from "../../components/modules/homepage/HomeCarrusel.jsx";
import TitleDoubleXL from "../../components/common/headers/TitleDoubleXL.jsx";
import BottomFooter from "../../components/layout/BottomFooter.jsx";
import StepsCarrusel from "../../components/modules/homepage/StepsCarrusel.jsx";
import StepsCards from "../../components/modules/homepage/StepsCards.jsx";
import Card from "../../components/common/cards/Card.jsx";
import { ROUTES } from "../../routes/index.routes.js";

function Home() {
  const { loading, activities } = useActivities();
  const currentActivities = activities.slice(0, 4);

  return (
    <>
      <div className="relative w-full h-[80vh]">
        <div className="flex items-center h-full px-4 bg-black/80">
          <div className="w-full space-y-6 lg:justify-center lg:flex">
            <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover -z-10 bg-hero-pattern"></div>
            <div className="space-y-6 text-center text-white lg:max-w-[764px]">
              <h2 className="text-5xl font-semibold lg:text-8xl">
                ¿Quieres ayudar a tu comunidad?
              </h2>
              <p className="text-neutral-content">
                Explora las distintas oportunidades de voluntariado cerca de tu
                ubicación para realizar actividades que ayuden a cambiar el
                mundo.
              </p>
              <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:text-lg">
                <Link
                  to={ROUTES.AUTH.REGISTER_VOLUNTEER}
                  role="button"
                  className="w-full lg:w-auto btn btn-primary text-primary-content"
                >
                  Quiero ser voluntario
                </Link>
                <Link
                  to={ROUTES.AUTH.REGISTER_FOUNDATION}
                  role="button"
                  className="w-full lg:w-auto btn btn-secondary text-secondary-content"
                >
                  Soy una fundacion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <StepsCarrusel />
      </div>
      <div className="container px-4 py-10 mx-auto">
        <div className="hidden lg:block lg:-mt-16 lg:mx-auto">
          <StepsCards />
        </div>
        <div className="space-y-6 lg:py-32">
          <TitleDoubleXL className="text-3xl leading-tree text-balance lg:text-6xl lg:leading-none lg:text-center">
            Explora las oportunidades de voluntariado publicadas
          </TitleDoubleXL>
          <div>
            <div className="lg:hidden">
              <HomeCarrusel loading={loading} activities={activities} />
            </div>
            <div className="hidden lg:flex lg:gap-6">
              {currentActivities.map((activity) => (
                <Card key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
          <div className="lg:flex lg:justify-center">
            <Link
              role="button"
              to={ROUTES.VOLUNTEER.EXPLORAR}
              className="w-full btn btn-primary text-primary-content lg:w-auto"
            >
              Ver todas las actividades publicadas
            </Link>
          </div>
        </div>
      </div>
      <article className="relative">
        <div className="container px-4 py-10 lg:py-32 bg-black/70 lg:bg-transparent lg:bg-gradient-to-r from-black/90 to-transparent lg:w-full">
          <div className="container space-y-6 lg:w-1/2 xl:px-6">
            <h3 className="text-3xl font-bold leading-tree text-neutral-content/90 lg:text-6xl">
              ¿Tienes una fundación y buscas voluntarios?
            </h3>
            <p className="text-neutral-content/80 lg:text-lg">
              Crea una cuenta para tu fundación, completa su perfil y publica
              todas las propuestas de voluntariado para que nuestros usuarios
              puedan inscribirse.
            </p>
            <Link
              to={ROUTES.AUTH.REGISTER_FOUNDATION}
              role="button"
              className="w-full btn btn-secondary text-secondary-content lg:w-auto"
            >
              Registrarme como fundación
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover inset-x-full -z-10 bg-image-cta"></div>
      </article>
      <BottomFooter />
    </>
  );
}

export default Home;
