import Banner from "../../components/common/Banner.jsx";
/* import BottomNavbar from "../../components/layout/BottomNavbar.jsx"; */
import examplePic from "../../assets/examplePic.png";
import ButtonEdit from "../../components/common/ButtonEdit.jsx";
import {
  HiOutlineClipboardDocumentList,
  HiCheck,
  HiOutlineUserCircle,
  HiOutlineBellAlert,
} from "react-icons/hi2";

function FoundationProfile() {
  return (
    <>
      <Banner>
        <div className="flex items-center gap-6 px-3 mb-6">
          <figure>
            <img src={examplePic} alt="example pic" />
          </figure>
          <h2 className="text-3xl">Nombre de la fundación</h2>
        </div>
        <ul className="px-3 mb-6 space-y-2 text-sm">
          <li>
            Email:
            <span className="font-normal ms-2 text-white/60">
              correo@ejemplo.com
            </span>
          </li>
          <li className="border-[#D1D5DB]/30 border-y py-2">
            Número de registro:
            <span className="font-normal ms-2 text-white/60">45648979456</span>
          </li>
          <li>
            Ubicación:
            <span className="font-normal ms-2 text-white/60">
              ¡Aún no la completaste!
            </span>
          </li>
        </ul>
        <div className="px-3 ">
          <ButtonEdit>Editar información</ButtonEdit>
        </div>
      </Banner>
      <div className="p-4">
        <div className="w-full p-6 mb-4 -mt-16 bg-white border-[#D1D5DB] border rounded-lg">
          <p className="text-sm">
            Deberás completar la siguiente información sobre la fundación para
            comenzar a publicar actividades:
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="table table-sm">
              <tbody>
                <tr>
                  <th>Número de registro</th>
                  <td className="flex justify-end pr-6 text-xl text-black">
                    <HiCheck />
                  </td>
                </tr>
                <tr>
                  <th>Logo o imagen de la fundación</th>
                  <td className="text-[#808080]">Pendiente</td>
                </tr>
                <tr>
                  <th>Ubicación</th>
                  <td className="text-[#808080]">Pendiente</td>
                </tr>
                <tr>
                  <th>Datos de contacto</th>
                  <td className="text-[#808080]">Pendiente</td>
                </tr>
                <tr>
                  <th>Área principal de actividades</th>
                  <td className="text-[#808080]">Pendiente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold">Sobre la fundacion</h3>
            <ButtonEdit>Editar</ButtonEdit>
          </div>
          <div className="relative">
            <span className="before:content-[' '] before:block before:h-16"></span>
            <div className="absolute border-t border-[#D1D5DB] btm-nav btm-nav-md">
              <button>
                <HiOutlineClipboardDocumentList className="text-xl" />
                <span className="text-xs btm-nav-label">Voluntarios</span>
              </button>
              <button className="active">
                <HiOutlineUserCircle className="text-xl" />
                <span className="text-xs btm-nav-label">
                  Perfil de fundación
                </span>
              </button>
              <button>
                <HiOutlineBellAlert className="text-xl" />
                <span className="text-xs btm-nav-label">Notificaciones</span>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#D1D5DB] my-4">
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-xl font-bold">Datos de contacto</h3>
            <ButtonEdit>Editar</ButtonEdit>
          </div>
        </div>
        <div className="border-t border-[#D1D5DB] my-6">
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-xl font-bold">Datos para donaciones</h3>
            <ButtonEdit>Editar</ButtonEdit>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoundationProfile;
