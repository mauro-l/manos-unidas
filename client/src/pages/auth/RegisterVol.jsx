import { Link } from "react-router-dom";
import VolunteerRegisterForm from "../../components/auth/VolunteerRegisterForm.jsx";
import Banner from "../../components/layout/Banner.jsx";
import CardWhite from "../../components/common/cards/CardWhite.jsx";

function RegisterVol() {
  return (
    <div>
      <Banner>
        Registrate como voluntario e inscribite en actividades para ayudar a tu
        comunidad
      </Banner>
      <div className="p-4">
        <CardWhite>
          <p className="text-sm text-center">
            Deberás completar tu perfil una vez registrado, para poder
            inscribirte en actividades y ser elegible por las fundaciones.
          </p>
        </CardWhite>
        <VolunteerRegisterForm />
        <Link
          to={"/register/foundation"}
          role="button"
          className="w-full my-4 text-center text-black btn btn-link"
        >
          Quiero registar mi fundacion
        </Link>
      </div>
    </div>
  );
}

export default RegisterVol;
