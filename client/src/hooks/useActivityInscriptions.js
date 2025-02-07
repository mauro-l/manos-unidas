import { useState, useEffect } from "react";
import { getInscriptionByActivityId } from "../services/inscriptionsService.js";
import { useParams } from "react-router-dom";

const useActivityInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInscriptions = async () => {
      try {
        setLoading(true);

        const allInscriptions = await getInscriptionByActivityId(id);

        // Verificar si data es un array antes de establecerlo
        if (Array.isArray(allInscriptions)) {
          setInscriptions(allInscriptions);
        } else {
          setInscriptions([]);
        }
      } catch (error) {
        if (error === "No hay inscripciones para esta actividad") {
          setInscriptions([]);
          setError(null);
        } else {
          // Para otros errores, establecer el error
          setError(error);
          setInscriptions([]);
        }
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInscriptions();
  }, [id]);

  return { inscriptions, loading, error };
};

export default useActivityInscriptions;

