import { useState } from "react";
import { postActivity } from "../services/actividadesService";

const usePostActivity = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitActivity = async (activityData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formattedData = {
        ...activityData,
        habilidades: activityData.skills || [],
        ubicacion: {
          pais: activityData.pais || "",
          provincia: activityData.provincia || "",
          ciudad: activityData.ciudad || "",
          direccion: activityData.direccion || "",
        },
        tareas: activityData.tareas
          ? activityData.tareas
              .split("\n")
              .map((t) => t.trim())
              .filter((t) => t)
          : [],
        fecha_inicio: activityData.fecha_inicio
          ? new Date(activityData.fecha_inicio).toISOString()
          : "",
        fecha_fin: activityData.fecha_fin
          ? new Date(activityData.fecha_fin).toISOString()
          : "",
        fecha_limite: activityData.fecha_limite
          ? new Date(activityData.fecha_limite).toISOString()
          : "",
      };

      await postActivity({ body: formattedData });
      setSuccess(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { submitActivity, loading, error, success };
};

export default usePostActivity;
