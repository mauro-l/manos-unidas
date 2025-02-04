import axios from "axios";
import { useEffect, useState } from "react";

function useVolunteer(volunteer_id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/data/lista-voluntarios-db.json`);
        const volunteering = res.data.find(
          (vol) => vol.voluntario_id == volunteer_id
        );

        setVolunteer(volunteering);
      } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [volunteer_id]);

  return { loading, error, volunteer };
}

export default useVolunteer;
