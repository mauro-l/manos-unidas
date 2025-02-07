
import { useEffect, useState } from "react";
import { getActivityById } from "../services/actividadesService.js";

const useActivityById = (id) => {
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchDetail = async (id) => {
      try {
        setLoading(true);
        const actividad = await getActivityById(id);

    

        if (!actividad) {
          throw new Error("Actividad no encontrada");
        }
        setActivity(actividad);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail(id);
  }, [id]);

  return { loading, activity, error };
};

export default useActivityById;

