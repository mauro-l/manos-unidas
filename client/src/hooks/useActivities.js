//import axios from "axios";
import { useEffect, useState } from "react";
import { getActivity } from "../services/actividadesService.js";

const useActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const res = await getActivity();
        /* const res = await axios.get("/data/actividades-voluntariado-db.json"); */
        console.log(res);
        setActivities(res);
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
