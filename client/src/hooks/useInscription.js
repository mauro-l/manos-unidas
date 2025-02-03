import axios from "axios";
import { useEffect, useState } from "react";

const useInscription = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    const fetchDetail = async (id) => {
      try {
        setLoading(true);
        const res = await axios.get(`/data/inscripciones-voluntariados-db.json`);

        const actividad = res.data.filter((item) => item.voluntario_id === id);
          console.log(actividad);
          
        if (!actividad) {
          throw new Error("Actividad no encontrada");
        }
        setInscriptions(actividad);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail(id);
  }, [id]);

  return {loading, error, inscriptions};
};

export default useInscription;
