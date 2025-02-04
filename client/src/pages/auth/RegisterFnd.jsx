import { Link } from "react-router-dom";
import FoundationRegisterForm from "@/components/auth/FoundationRegisterForm.jsx";
import Banner from "@/components/layout/Banner.jsx";
import CardWhite from "@/components/common/cards/CardWhite.jsx";
import Footer from "../../components/layout/Footer.jsx";

function RegisterFnd() {
  return (
    <div>
      <Banner color="bg-secondary-focus">
        Crea la cuenta para tu fundación y comienza a publicar actividades
      </Banner>
      <div className="p-4 -mt-4 lg:max-w-5xl  lg:-mt-4 ">
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
        <Link
          to={"/register"}
          role="button"
          className="w-full my-4 text-center text-black btn btn-link"
        >
          
        </Link>
        <Footer/>
      </div>
    </div>
  );
}

export default RegisterFnd;
