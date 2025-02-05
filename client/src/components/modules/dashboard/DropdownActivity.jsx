import { HiOutlineLockClosed, HiOutlineTrash } from "react-icons/hi2";
import Dropdown from "../../common/buttons/Dropdown.jsx";

function DropdownActivity() {
  const options = [
    {
      label: "Cerrar inscripción",
      icon: HiOutlineLockClosed,
      onClick: () => console.log("Cerrar inscripción"),
    },
    {
      label: "Eliminar actividad",
      icon: HiOutlineTrash,
      onClick: () => console.log("Eliminar actividad"),
      hidden: true, // Esto lo oculta
    },
  ];
  return <Dropdown options={options} />;
}

export default DropdownActivity;
