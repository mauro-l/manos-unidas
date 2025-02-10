import { Link } from "react-router-dom";
import BadgeStatus from "../buttons/BadgeStatus.jsx";
import MiniCardSkt from "../skeleton/MiniCardSkt.jsx";
import { ROUTES } from "../../../routes/index.routes.js";

function MiniCardInscripFnd({ loading, error, inscription }) {
  if (error) return error;

  if (loading) {
    return <MiniCardSkt />;
  }

  const matchingSkills =
    inscription.actividad_id.habilidades &&
    inscription.voluntario_id.habilidades.filter((volSkill) =>
      inscription.actividad_id.habilidades.includes(volSkill.nombre)
    );

  return (
    <>
      <section className="p-4 space-y-4 bg-white border rounded-lg border-base-300 lg:w-[475px]">
        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-12 lg:w-16 rounded-2xl">
              <img
                src={inscription.voluntario_id.foto_perfil}
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold lg:text-2xl text-neutral">
              {inscription.voluntario_id.nombre}{" "}
              {inscription.voluntario_id.apellido}
            </h4>
            <p className="text-sm lg:text-base text-base-400">
              {inscription.voluntario_id.ubicacion?.ciudad},{" "}
              {inscription.voluntario_id.ubicacion?.provincia},{" "}
              {inscription.voluntario_id.ubicacion?.pais}
            </p>
          </div>
        </div>
        <p className="text-sm lg:text-base">
          Cumple con{" "}
          <span className="font-bold">
            {matchingSkills.length}/
            {inscription.actividad_id.habilidades.length}
          </span>{" "}
          de las habilidades que buscas
        </p>
        <div className="flex items-center justify-between">
          <Link
            to={ROUTES.FOUNDATION.PERFIL_VOLUNT(inscription._id)}
            className="bg-white btn btn-ghost btn-sm lg:btn-md border-base-300"
          >
            Ver perfil
          </Link>
          <BadgeStatus estado={inscription.estado} role="fundacion" />
        </div>
      </section>
    </>
  );
}

export default MiniCardInscripFnd;
