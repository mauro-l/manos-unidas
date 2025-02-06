import { HiCheck, HiOutlinePencil } from "react-icons/hi2";
import ButtonEdit from "../../../components/common/buttons/ButtonEdit.jsx";
import CardInfo from "../../../components/common/cards/CardInfo.jsx";
import Banner from "../../../components/layout/Banner.jsx";
import { ROUTES } from "../../../routes/index.routes.js";
import Footer from "../../../components/layout/Footer.jsx";
import useVolunteer from "../../../hooks/useVolunteer.js";
import { HashLink } from "react-router-hash-link";

function VolunteerProfile() {
  const { loading, error, volunteer } = useVolunteer("VOL001");

  if (loading) {
    return <p>Cargando</p>;
  }

  if (error) return error;

  return (
    <div>
      <Banner>
        <div className="space-y-6 lg:container lg:mx-auto">
          <div className="flex items-center gap-6">
            <div className="avatar">
              <div className="w-24 rounded-xl ring-base-10 ring ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <h2 className="">
              {" "}
              {volunteer.nombre} {volunteer.apellido}{" "}
            </h2>
          </div>
          <ul className="mb-6 space-y-2 text-sm text-neutral-content">
            <li>
              Email:
              <span className="font-normal ms-2 text-base-200">
                {volunteer.email}
              </span>
            </li>
            <li className="border-[#D1D5DB]/30 border-y py-2">
              Contraseña:
              <span className="font-normal ms-2 text-base-200">•••••••••</span>
            </li>
            <li>
              Ubicación:
              <span className="font-normal ms-2 text-base-200">
                {volunteer.ubicacion.ciudad}, {volunteer.ubicacion.provincia},
                {volunteer.ubicacion.pais}
              </span>
            </li>
          </ul>
          <ButtonEdit href={ROUTES.VOLUNTEER.EDIT_DATOS}>
            Editar mis datos personales
          </ButtonEdit>
        </div>
      </Banner>
      <div className="lg:container lg:mx-auto ">
        <div className="p-4">
          <div className="px-4 pb-10">
            <CardInfo>
              <p className="text-sm">
                Deberás completar la siguiente información de tu perfil para
                poder inscribirte en actividades y ser elegible por las
                fundaciones:
              </p>

              <div className="mt-4 overflow-x-auto">
                <table className="table table-sm">
                  <tbody className="text-sm font-bold text-neutral  ">
                    <tr>
                      <th className="p-0">Nombre y apellido</th>
                      <td className="flex justify-end text-xs text-base-400 font-normal">
                        <HiCheck className="text-xl text-secondary" />
                      </td>
                    </tr>
                    <tr>
                      <th className="p-0">Foto de perfil</th>
                      <td className="flex justify-end text-xs text-base-400 font-normal">
                        {volunteer.foto_perfil ? (
                          <HiCheck className="text-xl text-secondary" />
                        ) : (
                          "Pendiente"
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th className="p-0">Ubicación</th>
                      <td className="flex justify-end text-xs text-base-400 font-normal">
                        {volunteer.ubicacion?.pais &&
                        volunteer.ubicacion?.provincia &&
                        volunteer.ubicacion?.ciudad &&
                        volunteer.ubicacion?.direccion ? (
                          <HiCheck className="text-xl text-secondary" />
                        ) : (
                          "Pendiente"
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th className="p-0">Experiencia Laboral</th>
                      <td className="flex justify-end text-xs text-base-400 font-normal">
                        {volunteer.profesion ? (
                          <HiCheck className="text-xl text-secondary" />
                        ) : (
                          "Pendiente"
                        )}{" "}
                      </td>
                    </tr>
                    <tr>
                      <th className="p-0">Estudios</th>
                      <td className="flex justify-end text-xs text-base-400 font-normal">
                        {volunteer.estudios ? (
                          <HiCheck className="text-xl text-secondary" />
                        ) : (
                          "Pendiente"
                        )}{" "}
                      </td>
                    </tr>
                    <tr>
                      <th className="p-0">Habilidades</th>
                      <td className="flex justify-end text-xs text-base-400 font-normal">
                        {volunteer?.habilidades?.length > 0 ? (
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
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-xl font-bold">Sobre mi</h3>
                <HashLink smooth to={`${ROUTES.VOLUNTEER.EDIT_PERFIL}#sobremi`}>
                  <button className=" text-sm font-bold   btn  btn-sm  lg:bg-base-10 ">
                    {" "}
                    <HiOutlinePencil className="text-lg" /> Editar
                  </button>
                </HashLink>
              </div>
              <p>{volunteer.descripcion}</p>
            </div>

            <div className="divider"></div>

            <div>
            <div className="flex items-center justify-between mt-4">
                <h3 className="text-xl font-bold">Experiencia laboral</h3>
                <HashLink smooth to={`${ROUTES.VOLUNTEER.EDIT_PERFIL}#experiencia`}>
                  <button className=" text-sm font-bold   btn  btn-sm  lg:bg-base-10 ">
                    {" "}
                    <HiOutlinePencil className="text-lg" /> Editar
                  </button>
                </HashLink>
              </div>
              <p>{volunteer.profesion}</p>
            </div>

            <div className="divider"></div>

            <div>
            <div className="flex items-center justify-between mt-4">
                <h3 className="text-xl font-bold">Estudios</h3>
                <HashLink smooth to={`${ROUTES.VOLUNTEER.EDIT_PERFIL}#estudios`}>
                  <button className=" text-sm font-bold   btn  btn-sm  lg:bg-base-10 ">
                    {" "}
                    <HiOutlinePencil className="text-lg" /> Editar
                  </button>
                </HashLink>
              </div>
              <p>{volunteer.estudios}</p>
            </div>


            <div className="divider"></div>

            <div>
            <div className="flex items-center justify-between mt-4">
                <h3 className="text-xl font-bold">Habilidades</h3>
                <HashLink smooth to={`${ROUTES.VOLUNTEER.EDIT_PERFIL}#habilidades`}>
                  <button className=" text-sm font-bold   btn  btn-sm  lg:bg-base-10 ">
                    {" "}
                    <HiOutlinePencil className="text-lg" /> Editar
                  </button>
                </HashLink>
              </div>
              <p className="flex flex-wrap gap-2">
                  {!loading &&
                    volunteer.habilidades.map((skill) => (
                      <div
                        className="badge bg-base-100 lg:badge-ghost lg:badge-lg text-base-content"
                        key={skill.id}
                      >
                        {skill.name}
                      </div>
                    ))}
                </p>
            </div>

            
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default VolunteerProfile;
