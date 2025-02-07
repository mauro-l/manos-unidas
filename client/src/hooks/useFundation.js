import { useState, useEffect } from "react";
import { getFoundationById } from "../services/fundacionesService.js";

const useFoundation = (id) => {
  const [foundation, setFoundation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFoundation = async (foundationId) => {
      try {
        setLoading(true);
        setError(null); // Reiniciamos el error antes de hacer la solicitud

        const foundations = await getFoundationById(foundationId);

        if (foundations) {
          setFoundation(foundations);
        } else {
          throw new Error("Foundation not found");
        }
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getFoundation(id);
    }
  }, [id]);

  return { foundation, loading, error };
};

export default useFoundation;

