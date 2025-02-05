import axios from "axios";
import { useEffect, useState } from "react";

const useActivityById = (id) => {
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState();

  console.log(typeof id, id);

  useEffect(() => {
    const fetchDetail = async (id) => {
      try {
        setLoading(true);
        const res = await axios.get(`/data/actividades-voluntariado-db.json`);

        const actividad = res.data.find((item) => item.id === Number(id));

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

