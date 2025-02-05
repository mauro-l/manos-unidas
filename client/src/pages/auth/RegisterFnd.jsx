import FoundationRegisterForm from "@/components/auth/FoundationRegisterForm.jsx";
import Banner from "@/components/layout/Banner.jsx";
import CardWhite from "@/components/common/cards/CardWhite.jsx";
import Footer from "../../components/layout/Footer.jsx";
import ButtonLink from "../../components/common/buttons/ButtonLink.jsx";

function RegisterFnd() {
  return (
    <div>
      <Banner color="bg-secondary-focus">
        Crea la cuenta para tu fundación y comienza a publicar actividades
      </Banner>
      <div className="p-4 -mt-4 lg:max-w-5xl  lg:-mt-4 lg:mx-auto ">
        <CardWhite>
          <p className="text-sm text-center">
            Para el registro de tu organización, necesitaremos el nombre y
            número de registro para realizar una validación.
          </p>
          <br />
          <p className="text-sm text-center">
            El correo electrónico y contraseña serán necesarios para acceder a
            tu cuenta.
          </p>
        </CardWhite>
        <FoundationRegisterForm />
        <ButtonLink path={"/register"}> 
          Quiero registrarme como voluntario
        </ButtonLink>
        <Footer/>
      </div>
    </div>
  );
}

export default RegisterFnd;
