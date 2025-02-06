import { HiOutlineTrash, HiOutlineXCircle,  } from "react-icons/hi2";
import  Dropdown from "../../common/buttons/Dropdown.jsx";

const DropdownVolunteering = () => {
     const options = [
        {
          label: "Cancelar inscripción",
          icon: HiOutlineXCircle,
          onClick: () => console.log("Cerrar inscripción"),
        },
        {
          label: "Eliminar actividad",
          icon: HiOutlineTrash,
          onClick: () => console.log("Eliminar actividad"),
          hidden: true, // Esto lo oculta
        },
      ];
  return (
    <Dropdown
    options={options}/>
  )
}

export default DropdownVolunteering