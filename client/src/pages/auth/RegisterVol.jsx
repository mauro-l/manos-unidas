import VolunteerRegisterForm from "../../components/auth/VolunteerRegisterForm.jsx";
import Banner from "../../components/layout/Banner.jsx";
import CardWhite from "../../components/common/cards/CardWhite.jsx";
import Footer from "../../components/layout/Footer.jsx";
import { ROUTES } from "../../routes/index.routes.js";
import ButtonLink from "../../components/common/buttons/ButtonLink.jsx";

function RegisterVol() {
  return (
    <div>
      <Banner color="bg-primary-focus  ">
        <div className="lg:max-w-[800px] lg:mx-auto ">
          Registrate como voluntario e inscribite en actividades para ayudar a
          tu comunidad
        </div>
      </Banner>
      <div className=" lg:max-w-[800px]  lg:mx-auto   ">
        <CardWhite className="lg:-mt-8" >
          <p className="text-sm text-center lg:text-lg">
            Deberás completar tu perfil una vez registrado, para poder
            inscribirte en actividades y ser elegible por las fundaciones.
          </p>
        </CardWhite>
        <div className="px-4 -mt-4  lg:max-w-[800px]  lg:-mt-4 lg:mx-auto lg:px-12 lg:pb-32 bg-neutral-content ">
          <VolunteerRegisterForm />
          <div className=" my-6 text-center">
            <ButtonLink path={ROUTES.AUTH.REGISTER_FOUNDATION}>
              Quiero registar mi fundación
            </ButtonLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterVol;
