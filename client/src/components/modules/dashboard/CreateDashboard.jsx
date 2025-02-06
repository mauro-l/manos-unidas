import { HiMiniPlus } from "react-icons/hi2";
import EmptyDashed from "../../layout/EmptyDashed.jsx";

function CreateDashboard() {
  return (
    <div className="-mt-5">
      <EmptyDashed>
        <h4 className="text-balance">¡No hay ninguna actividad creada!</h4>
        <button className="mx-auto font-bold btn btn-primary text-primary-content">
          <HiMiniPlus /> Crear una actividad
        </button>
      </EmptyDashed>
    </div>
  );
}

export default CreateDashboard;
