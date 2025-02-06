import FoundationRegisterForm from "@/components/auth/FoundationRegisterForm.jsx";
import Banner from "@/components/layout/Banner.jsx";
import CardWhite from "@/components/common/cards/CardWhite.jsx";
import Footer from "../../components/layout/Footer.jsx";
import ButtonLink from "../../components/common/buttons/ButtonLink.jsx";
import { ROUTES } from "../../routes/index.routes.js";

function RegisterFnd() {
  return (
    <div>
      <Banner color="bg-secondary-focus">
        <div className="lg:max-w-[800px] lg:mx-auto ">
          Crea la cuenta para tu fundación y comienza a publicar actividades
        </div>
      </Banner>
      <div className=" lg:max-w-[800px] lg:-mt-4 lg:mx-auto  ">
        <CardWhite className="lg:-mt-8">
          <p className="text-sm text-center lg:text-lg">
            Para el registro de tu organización, necesitaremos el nombre y
            número de registro para realizar una validación.
          </p>
          <br />
          <p className="text-sm text-center lg:text-lg">
            El correo electrónico y contraseña serán necesarios para acceder a
            tu cuenta.
          </p>
        </CardWhite>
        <div className="px-4 -mt-4  lg:max-w-[800px]  lg:-mt-4 lg:mx-auto lg:px-12 lg:pb-32 bg-neutral-content  ">
          <FoundationRegisterForm />
          <div className=" my-6 text-center">
            <ButtonLink path={ROUTES.AUTH.REGISTER_VOLUNTEER}>
              Quiero registrarme como voluntario
            </ButtonLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterFnd;
