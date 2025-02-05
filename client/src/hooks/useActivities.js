import axios from "axios";
import { useEffect, useState } from "react";

const useActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/data/actividades-voluntariado-db.json");
        setActivities(res.data);
      } catch (error) {
        setError("Error fetching activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return { loading, activities, error };
};

export default useActivities;
