function BadgeStatus({ estado, role }) {
  const estadoClases = {
    Aprobada: "bg-secondary text-secondary-content ",
    Pendiente: "bg-base-10 text-base-content",
    Rechazada: "bg-accent  text-warning",
    Finalizado: "border border-base-400 text-base-400",
  };

  const getStatusText = (estado, role) => {
    if (role === "fundacion") {
      return estado === "Aprobada"
        ? "Aprobado"
        : estado === "Pendiente"
        ? "Revisión pendiente"
        : estado === "Rechazada"
        ? "Rechazado"
        : estado === "Finalizado"
        ? "Finalizado"
        : "Desconocido";
    } else {
      return estado === "Aprobada"
        ? "Aprobado para participar"
        : estado === "Pendiente"
        ? "Aprobación pendiente"
        : estado === "Rechazada"
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
