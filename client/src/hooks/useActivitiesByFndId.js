/* import { useState, useEffect } from "react";
import useActivities from "./useActivities";

function useActivitiesByFndId(fundation_id) {
  const [activity, setActivity] = useState(null);
  const { loading, activities, error } = useActivities();

  useEffect(() => {
    if (!loading && activities.length > 0) {
      const foundActivity = activities.filter(
        (act) => act.fundacion_id === fundation_id
      );
      setActivity(foundActivity || null);
    }
  }, [loading, activities, fundation_id]);

  if (error) return { error };

  return { loading, activity };
}

export default useActivitiesByFndId; */

import { useState, useEffect } from "react";
import { getActivityByFundationId } from "../services/actividadesService.js";

const useActivitiesByFndId = (id) => {
  const [activities, setActivities] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getActivitiesFoundation = async (id) => {
      try {
        setLoading(true);
        setError(null); // Reiniciamos el error antes de hacer la solicitud

        /* const response = await axios.get("/data/listado-fundaciones-db.json"); */

        const activity = await getActivityByFundationId(id);

        if (activity) {
          setActivities(activity);
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
      getActivitiesFoundation(id);
    }
  }, [id]);

  return { activities, loading, error };
};

export default useActivitiesByFndId;
