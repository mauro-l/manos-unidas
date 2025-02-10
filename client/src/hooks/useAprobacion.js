import { useState } from "react";
import { putAprobate } from "../services/inscriptionsService.js";

export const useAprobacion = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const aprobarInscripcion = async (
    inscripcionId,
    voluntarioId,
    actividadId,
    estado
  ) => {
    try {
      setLoading(true);
      setError(null);

      const respuesta = await putAprobate(
        inscripcionId,
        voluntarioId,
        actividadId,
        estado
      );
      return respuesta;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    aprobarInscripcion,
    loading,
    error,
  };
};
