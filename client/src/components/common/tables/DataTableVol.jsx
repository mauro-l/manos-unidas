import { HiMiniCheck } from "react-icons/hi2";

function DataTableVol({ data }) {
  return (
    <table className="table table-sm">
      <tbody className="text-sm font-bold text-red-500">
        <tr>
          <th className="line-through">Nombre y apellido</th>
          <td className="flex justify-end pr-6">
            <HiMiniCheck className="text-2xl text-secondary" />
          </td>
        </tr>
        <tr>
          <th>Logo o imagen de la fundación</th>
          {data.foto_perfil ? (
            <td className="flex justify-end pr-6">
              <HiMiniCheck className="text-2xl text-secondary" />
            </td>
          ) : (
            <td className="text-[#808080]">Pendiente</td>
          )}
        </tr>
        <tr>
          <th>Ubicación</th>
          {data.ubicacion ? (
            <td className="flex justify-end pr-6">
              <HiMiniCheck className="text-2xl text-secondary" />
            </td>
          ) : (
            <td className="text-[#808080]">Pendiente</td>
          )}
        </tr>
        <tr>
          <th>Experiencia laboral</th>
          {data.profesion ? (
            <td className="flex justify-end pr-6">
              <HiMiniCheck className="text-2xl text-secondary" />
            </td>
          ) : (
            <td className="text-[#808080]">Pendiente</td>
          )}
        </tr>
        <tr>
          <th>Estudios</th>
          {data.estudios ? (
            <td className="flex justify-end pr-6">
              <HiMiniCheck className="text-2xl text-secondary" />
            </td>
          ) : (
            <td className="text-[#808080]">Pendiente</td>
          )}
        </tr>
        <tr>
          <th>Habilidades</th>
          {data.estudios ? (
            <td className="flex justify-end pr-6">
              <HiMiniCheck className="text-2xl text-secondary" />
            </td>
          ) : (
            <td className="text-[#808080]">Pendiente</td>
          )}
        </tr>
      </tbody>
    </table>
  );
}

export default DataTableVol;
