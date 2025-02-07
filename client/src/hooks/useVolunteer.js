import { useEffect, useState } from "react";
import { getVolunteerById } from "../services/volunterService.js";

function useVolunteer(volunteer_id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);

        const volunteering = await getVolunteerById(volunteer_id);
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
