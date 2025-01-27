import { Link } from "react-router-dom";
import FoundationRegisterForm from "../../components/auth/FoundationRegisterForm.jsx";
import Banner from "../../components/common/Banner.jsx";
import CardWhite from "../../components/common/CardWhite.jsx";

function FoundationRegisterPage() {
  return (
    <div>
      <Banner>
        <p>
          Crea la cuenta para tu fundación y comienza a publicar actividades
        </p>
      </Banner>
      <div className="p-4">
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
          Quiero registarme como voluntario
        </Link>
      </div>
    </div>
  );
}

export default FoundationRegisterPage;
