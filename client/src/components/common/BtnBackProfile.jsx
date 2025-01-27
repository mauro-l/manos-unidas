import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

function BtnBackProfile() {
  return (
    <Link
      to={"/profile"}
      role="button"
      className="font-bold btn btn-ghost -ms-4"
    >
      <HiArrowLeft className="font-black" />
      Volver al perfil
    </Link>
  );
}

export default BtnBackProfile;
