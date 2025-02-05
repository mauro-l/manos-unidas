import { useState, useEffect } from "react";
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

export default useActivitiesByFndId;
