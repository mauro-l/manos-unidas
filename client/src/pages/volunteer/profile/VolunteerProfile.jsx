import { HiCheck } from "react-icons/hi2";
import ButtonEdit from "../../../components/common/buttons/ButtonEdit.jsx";
import CardInfo from "../../../components/common/cards/CardInfo.jsx";
import Banner from "../../../components/layout/Banner.jsx";
import TitleAction from "../../../components/common/headers/TitleAction.jsx";

function VolunteerProfile() {
  return (
    <div>
      <Banner>
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="avatar">
              <div className="w-24 rounded-xl ring-base-10 ring ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h2>Nombre</h2>
          </div>
          <ul className="mb-6 space-y-2 text-sm text-neutral-content">
            <li>
              Email:
              <span className="font-normal ms-2 text-base-200">
                correo@ejemplo.com
              </span>
            </li>
            <li className="border-[#D1D5DB]/30 border-y py-2">
              Contraseña:
              <span className="font-normal ms-2 text-base-200">•••••••••</span>
            </li>
            <li>
              Ubicación:
              <span className="font-normal ms-2 text-base-200">
                ¡Aún no la completaste!
              </span>
            </li>
          </ul>
          <ButtonEdit>Editar mis datos personales</ButtonEdit>
        </div>
      </Banner>
      <div className="px-4 pb-10">
        <CardInfo>
          <p className="text-sm">
            Deberás completar la siguiente información de tu perfil para poder
            inscribirte en actividades y ser elegible por las fundaciones:
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="table table-sm">
              <tbody className="text-sm font-bold text-neutral">
                <tr>
                  <th className="p-0">Número de registro</th>
                  <td className="flex justify-end text-xl text-secondary">
                    <HiCheck />
                  </td>
                </tr>
                <tr>
                  <th className="p-0">Logo o imagen de la fundación</th>
                  <td className="p-0 py-2 font-normal text-base-400 text-end">
                    Pendiente
                  </td>
                </tr>
                <tr>
                  <th className="p-0">Ubicación</th>
                  <td className="text-[#808080]">Pendiente</td>
                </tr>
                <tr>
                  <th className="p-0">Datos de contacto</th>
                  <td className="text-[#808080]">Pendiente</td>
                </tr>
                <tr>
                  <th className="p-0">Área principal de actividades</th>
                  <td className="text-[#808080]">Pendiente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardInfo>
        <TitleAction>Sobre mi</TitleAction>
        <div className="divider"></div>
        <TitleAction>Experiencia laboral</TitleAction>
        <div className="divider"></div>
        <TitleAction>Estudios</TitleAction>
        <div className="divider"></div>
        <TitleAction>Habilidades</TitleAction>
      </div>
    </div>
  );
}

export default VolunteerProfile;
