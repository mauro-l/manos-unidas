import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";

function BtnBack( {children} ) {
  const navigate = useNavigate();

  return (
    <button
      className="font-bold text-neutral-content btn btn-ghost text-base inline-flex items-center justify-start m-0 p-0 "
      onClick={() => navigate(-1)}
    >
      <HiArrowLeft className=" text-neutral-content font-extrabold text-xl" />
      {children}
    </button>
  );
}

export default BtnBack;
