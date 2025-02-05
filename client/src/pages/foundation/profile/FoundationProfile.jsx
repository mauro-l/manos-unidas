import ButtonEdit from "../../../components/common/buttons/ButtonEdit.jsx";
import CardInfo from "../../../components/common/cards/CardInfo.jsx";
import TitleAction from "../../../components/common/headers/TitleAction.jsx";
import Banner from "../../../components/layout/Banner.jsx";
import { HiCheck } from "react-icons/hi2";
import Footer from "../../../components/layout/Footer.jsx";
import useFoundation from "../../../hooks/useFundation.js";

function FoundationProfile() {
  const { foundation, loading, error } = useFoundation("FND001");
  if (loading) {
    return <p>Cargando</p>;
  }

  if (error) return error;
  console.log(foundation);

  return (
    <>
      <Banner>


        <div className="lg:flex lg:justify-between">

          <div className="flex items-center gap-6 px-3 mb-6">
            <div className="rounded-lg avatar">
              <div className="w-24 rounded-lg lg:w-32 ring-transparent ring-offset-base-100 ring ring-offset-2">
                <img src={foundation.logo} />
              </div>
            </div>
            <h2 className="text-3xl text-pretty font-semibold">
              {" "}
              {foundation.nombre}{" "}
            </h2>
          </div>


          <div >
            <ul className="px-3  space-y-2 text-sm lg:text-base lg:min-w-96 lg:text-end">
              <li>
                Email:
                <span className="font-normal ms-2 text-neutral-content">
                  {foundation.email}
                </span>
              </li>
              <li className="border-neutral border-y py-2">
                Número de registro:
                <span className="font-normal ms-2 text-neutral-content">
                  {" "}
                  {foundation.nro_registro}{" "}
                </span>
              </li>
              <li>
                Ubicación:
                <span className="font-normal ms-2 text-neutral-content">
                  ¡Aún no la completaste!
                </span>
              </li>
            </ul>
            <div className="px-3 rounded-lg btn-base-100 mt-6 lg:text-end ">
              <ButtonEdit href={"/edit/info"}>Editar información</ButtonEdit>
            </div>
          </div>

        </div>


      </Banner>
      <div className="lg:container lg:mx-auto ">
        <div className="p-4">
          <CardInfo>
            <p className="text-sm">
              Deberás completar la siguiente información sobre la fundación para
              comenzar a publicar actividades:
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="table table-sm">
                <tbody>
                  <tr>
                    <th>Número de registro</th>
                    <td className="flex justify-end pr-6 text-xl text-secondary">
                      <HiCheck />
                    </td>
                  </tr>
                  <tr>
                    <th>Logo o imagen de la fundación</th>
                    <td className="flex justify-end text-neutral">Pendiente</td>
                  </tr>
                  <tr>
                    <th>Ubicación</th>
                    <td className="flex justify-end text-neutral">Pendiente</td>
                  </tr>
                  <tr>
                    <th>Datos de contacto</th>
                    <td className="flex justify-end text-neutral">Pendiente</td>
                  </tr>
                  <tr>
                    <th>Área principal de actividades</th>
                    <td className=" flex justify-end text-neutral">
                      Pendiente
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardInfo>

          <div className="mt-6">
            <TitleAction href={"#"}>Sobre la fundacion</TitleAction>
          </div>
          <div className="border-t border-base-300 my-4">
            <TitleAction href={"#"}>Datos de contacto</TitleAction>
          </div>
          <div className="border-t border-base-300 my-6">
            <TitleAction href={"#"}>Datos para donaciones</TitleAction>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default FoundationProfile;
