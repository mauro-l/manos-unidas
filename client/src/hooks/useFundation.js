import { useState, useEffect } from "react";
import axios from "axios";

const useFoundation = (id) => {
  const [foundation, setFoundation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFoundation = async (foundationId) => {
      try {
        setLoading(true);
        setError(null); // Reiniciamos el error antes de hacer la solicitud

        const response = await axios.get("/data/listado-fundaciones-db.json");
        const foundations = response.data.find(
          (item) => item.fundacion_id === foundationId
        );

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
