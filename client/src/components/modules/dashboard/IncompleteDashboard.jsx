import CardWarning from "../../common/cards/CardWarning.jsx";
import EmptyDashed from "../../layout/EmptyDashed.jsx";
import ButtonLink from "../../common/buttons/ButtonLink.jsx";
import { HiMiniPlus } from "react-icons/hi2";

function IncompleteDashboard() {
  return (
    <div className="space-y-4">
      <CardWarning>
        <p>
          ¡Recuerda completar el perfil de tu fundación para comenzar a publicar
          actividades!
        </p>
        <ButtonLink path={"/profile"}>Completar perfil</ButtonLink>
      </CardWarning>
      <EmptyDashed>
        <h4 className="text-balance">¡No hay ninguna actividad creada!</h4>
        <button className="mx-auto font-bold opacity-50 btn btn-disabled text-base-300">
          <HiMiniPlus className="text-xl" /> Crear una actividad
        </button>
      </EmptyDashed>
    </div>
  );
}

export default IncompleteDashboard;
