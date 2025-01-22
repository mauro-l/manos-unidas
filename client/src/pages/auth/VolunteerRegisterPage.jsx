import { Link } from "react-router-dom";
import VolunteerRegisterForm from "../../components/auth/VolunteerRegisterForm.jsx";
import Banner from "../../components/common/Banner.jsx";

function VolunteerRegisterPage() {
  return (
    <div>
      <Banner>
        <p>
          Registrate como voluntario e inscribite en actividades para ayudar a
          tu comunidad
        </p>
      </Banner>
      <div className="p-4">
        <div className="w-full p-6 mb-4 -mt-8 bg-white rounded-lg">
          <p className="text-sm text-center">
            Deberás completar tu perfil una vez registrado, para poder
            inscribirte en actividades y ser elegible por las fundaciones.
          </p>
        </div>
        <VolunteerRegisterForm />
        <Link
          to={"/foundation/register"}
          role="button"
          className="w-full my-4 text-center text-black btn btn-link"
        >
          Quiero registar mi fundacion
        </Link>
      </div>
    </div>
  );
}

export default VolunteerRegisterPage;
