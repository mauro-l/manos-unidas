import { Link } from "react-router-dom";
import { HiMiniArrowLeft } from "react-icons/hi2";

function BtnBackProfile() {
  return (
    <Link
      to={"/profile"}
      role="button"
      className="font-bold btn btn-ghost -ms-4"
    >
      <HiMiniArrowLeft className="font-black" />
      Volver al perfil
    </Link>
  );
}

export default BtnBackProfile;
