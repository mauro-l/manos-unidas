import ButtonEdit from "../../../components/common/buttons/ButtonEdit.jsx";
import CardInfo from "../../../components/common/cards/CardInfo.jsx";
import Banner from "../../../components/layout/Banner.jsx";
import { HiCheck, HiOutlinePencil } from "react-icons/hi2";
import Footer from "../../../components/layout/Footer.jsx";
import useFoundation from "../../../hooks/useFundation.js";
import { HashLink } from "react-router-hash-link";
import { ROUTES } from "../../../routes/index.routes.js";
import useAuth from "../../../hooks/useAuth.js";

function FoundationProfile() {
  const { user } = useAuth();
  const { foundation, loading, error } = useFoundation(user.id);
  if (loading) {
    return <p>Cargando</p>;
  }


  if (error) return error;

 

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
            <h2 className="text-3xl font-semibold text-pretty">
              {" "}
              {foundation.nombre}{" "}
            </h2>
          </div>

          <div>
            <ul className="px-3 space-y-2 text-sm lg:text-base lg:min-w-96 lg:text-end">
              <li>
                Email:
                <span className="font-normal ms-2 text-neutral-content">
                  {foundation.email}
                </span>
              </li>
              <li className="py-2 border-neutral border-y">
                Número de registro:
                <span className="font-normal ms-2 text-neutral-content">
                  {" "}
                  {foundation.nro_registro}{" "}
                </span>
              </li>
              <li>
                Ubicación:
                <span className="font-normal ms-2 text-neutral-content">
                  {foundation.ubicacion.direccion},
                  {foundation.ubicacion.provincia}, {foundation.ubicacion.pais}
                </span>
              </li>
            </ul>
            <div className="px-3 mt-6 rounded-lg btn-base-100 lg:text-end lg:mt-0">
              <ButtonEdit href={"/edit/info"}>Editar información</ButtonEdit>
            </div>
          </div>
        </div>
      </Banner>

      <div className=" lg:container lg:mx-auto">
        <div className="p-4">
          <CardInfo>
            <p className="text-sm">
              Deberás completar la siguiente información sobre la fundación para
              comenzar a publicar actividades:
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="table table-sm">
                <tbody className="text-sm font-bold text-neutral ">
                  <tr>
                    <th>Número de registro</th>
                    <td className="flex justify-end text-xs font-normal text-base-400">
                      <HiCheck className="text-xl text-secondary" />
                    </td>
                  </tr>

                  <tr>
                    <th>Logo o imagen de la fundación</th>
                    <td className="flex justify-end text-xs font-normal text-base-400">
                      {foundation.logo ? (
                        <HiCheck className="text-xl text-secondary" />
                      ) : (
                        "Pendiente"
                      )}
                    </td>
                  </tr>

                  <tr>
                    <th>Ubicación</th>
                    <td className="flex justify-end text-xs font-normal text-base-400">
                      {foundation.ubicacion?.pais &&
                      foundation.ubicacion?.provincia &&
                      foundation.ubicacion?.ciudad &&
                      foundation.ubicacion?.direccion ? (
                        <HiCheck className="text-xl text-secondary" />
                      ) : (
                        "Pendiente"
                      )}{" "}
                    </td>
                  </tr>

                  <tr>
                    <th>Datos de contacto</th>
                    <td className="flex justify-end text-xs font-normal text-base-400">
                      {" "}
                      {foundation.email &&
                      foundation.telefono &&
                      foundation.web ? (
                        <HiCheck className="text-xl text-secondary" />
                      ) : (
                        "Pendiente"
                      )}{" "}
                    </td>
                  </tr>

                  <tr>
                    <th>Área principal de actividades</th>
                    <td className="flex justify-end text-xs font-normal text-base-400">
                      {foundation.area_principal ? (
                        <HiCheck className="text-xl text-secondary" />
                      ) : (
                        "Pendiente"
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardInfo>

          <div>
            <div className="flex items-center justify-between mt-4 ">
              <h3 className="text-xl font-bold">Sobre la fundacion</h3>
              <HashLink
                smooth
                to={`${ROUTES.FOUNDATION.EDIT_PERFIL}#sobrefundacion`}
              >
                <button className="text-sm font-bold  btn btn-sm lg:bg-base-10">
                  {" "}
                  <HiOutlinePencil className="text-lg" /> Editar
                </button>
              </HashLink>
            </div>
            <p>{foundation.descripcion}</p>
          </div>

          <div className="divider"></div>

          <div>
            <div className="flex items-center justify-between mt-4 ">
              <h3 className="text-xl font-bold">Área de actividades</h3>
              <HashLink
                smooth
                to={`${ROUTES.FOUNDATION.EDIT_PERFIL}#actividades`}
              >
                <button className="text-sm font-bold  btn btn-sm lg:bg-base-10">
                  {" "}
                  <HiOutlinePencil className="text-lg" /> Editar
                </button>
              </HashLink>
            </div>
            <p className="badge badge-md bg-primary text-primary-content">
              {foundation.area_principal}
            </p>
          </div>

          <div className="divider"></div>

          <div>
            <div className="flex items-center justify-between mt-4">
              <h3 className="text-xl font-bold">Datos de contacto</h3>
              <HashLink
                smooth
                to={`${ROUTES.FOUNDATION.EDIT_PERFIL}#contactos`}
              >
                <button className="text-sm font-bold  btn btn-sm lg:bg-base-10">
                  {" "}
                  <HiOutlinePencil className="text-lg" /> Editar
                </button>
              </HashLink>
            </div>

            <div className="flex flex-col gap-4 font-semibold text-start ">
              <div className="flex gap-2">
                <p className="font-bold">Email:</p>
                <p className="font-normal"> {foundation.email} </p>
              </div>
              <div className="flex gap-2 ">
                <p className="font-bold"> Telefono: </p>
                <p className="font-normal">{foundation.telefono}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold"> Web: </p>{" "}
                <p className="font-normal link text-primary">
                  {" "}
                  {foundation.web}
                </p>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div>
            <div className="flex items-center justify-between mt-4">
              <h3 className="text-xl font-bold">Datos para donaciones</h3>
              <HashLink
                smooth
                to={`${ROUTES.FOUNDATION.EDIT_PERFIL}#donaciones`}
              >
                <button className="text-sm font-bold  btn btn-sm lg:bg-base-10">
                  {" "}
                  <HiOutlinePencil className="text-lg" /> Editar
                </button>
              </HashLink>
            </div>
            <p>{foundation.link_donacion}</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default FoundationProfile;
