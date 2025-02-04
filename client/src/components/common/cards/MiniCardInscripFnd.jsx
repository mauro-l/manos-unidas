import useVolunteer from "../../../hooks/useVolunteer.js";
import BadgeStatus from "../buttons/BadgeStatus.jsx";
import MiniCardSkt from "../skeleton/MiniCardSkt.jsx";

function MiniCardInscripFnd({ volId, status, expectedSkills }) {
  const { loading, error, volunteer } = useVolunteer(volId);

  /* console.log(`Número de habilidades coincidentes: ${skillsMatch.length}`);
  console.log(`Habilidades coincidentes:`, skillsMatch); */

  if (error) return error;

  if (loading) {
    return <MiniCardSkt />;
  }

  const skillsMatch =
    expectedSkills &&
    volunteer.habilidades.filter((volSkill) =>
      expectedSkills.some((expectedSkill) => expectedSkill.id === volSkill.id)
    );

  return (
    <section className="p-4 space-y-4 bg-white border rounded-lg border-base-300 lg:w-[475px]">
      <div className="flex gap-4">
        <div className="avatar">
          <div className="w-12 lg:w-16 rounded-2xl">
            <img
              src={volunteer.foto_perfil}
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold lg:text-2xl text-neutral">
            {volunteer.nombre} {volunteer.apellido}
          </h4>
          <p className="text-sm lg:text-base text-base-400">
            {volunteer.ubicacion.ciudad}, {volunteer.ubicacion.provincia},{" "}
            {volunteer.ubicacion.pais}
          </p>
        </div>
      </div>
      <p className="text-sm lg:text-base">
        Cumple con{" "}
        <span className="font-bold">
          {skillsMatch.length}/{expectedSkills.length}
        </span>{" "}
        de las habilidades que buscas
      </p>
      <div className="flex items-center justify-between">
        <button className="bg-white btn btn-ghost btn-sm lg:btn-md border-base-300">
          Ver perfil
        </button>
        <BadgeStatus estado={status} role="fundacion" />
      </div>
    </section>
  );
}

export default MiniCardInscripFnd;
