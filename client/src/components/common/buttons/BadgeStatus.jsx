function BadgeStatus({ estado, role }) {
  const estadoClases = {
    aprobado: "bg-secondary text-secondary-content ",
    pendiente: "bg-base-10 text-base-content",
    rechazado: "bg-accent  text-warning",
    finalizado: "border border-base-400 text-base-400",
  };

  const getStatusText = (estado, role) => {
    if (role === "fundacion") {
      return estado === "Aprobado"
        ? "Aprobado"
        : estado === "Pendiente"
        ? "Revisión pendiente"
        : estado === "Rechazado"
        ? "Rechazado"
        : estado === "Finalizado"
        ? "Finalizado"
        : "Desconocido";
    } else {
      return estado === "Aprobado"
        ? "Aprobado para participar"
        : estado === "Pendiente"
        ? "Aprobación pendiente"
        : estado === "Rechazado"
        ? "No apto"
        : estado === "Finalizado"
        ? "Actividad finalizada"
        : "Estado desconocido";
    }
  };

  return (
    <div
      className={`badge lg:badge-lg text-xs font-bold uppercase ${
        estadoClases[estado] || "bg-base-400 text-neutral "
      }`}
    >
      {getStatusText(estado, role)}
    </div>
  );
}

export default BadgeStatus;
