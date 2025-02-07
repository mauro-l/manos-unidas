import { useState, useEffect } from "react";
import { getAllInscripciones } from "../services/inscriptionsService.js";

const useInscriptions = (userId) => {
  const [inscriptions, setInscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInscripciones = async () => {
      try {
        const allInscripciones = await getAllInscripciones();
        const userInscripciones = allInscripciones
          .filter((inscripcion) => inscripcion.voluntario_id === userId)
          .map((inscripcion) => ({
            actividad: inscripcion.actividad_id,
            estado: inscripcion.estado, 
          }));
        
        setInscriptions(userInscripciones);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInscripciones();
  }, [userId]);

  return { inscriptions, loading, error };
};

export default useInscriptions;
