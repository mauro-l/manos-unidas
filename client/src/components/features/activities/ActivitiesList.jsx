import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../common/Card"; 

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const activList = async () => {
      try {
        const res = await axios.get("/data/actividades-voluntariado-db.json"); 
        setActivities(res.data); 
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    activList();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity) => (
        <Card key={activity.id} activity={activity} />
      ))}
    </div>
  );
};

export default ActivitiesList;
