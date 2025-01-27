import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../common/Card"; 

const ActivitiesList = () => {
  const [activities, setActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const activitiesPerPage = 3; 

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get("/data/actividades-voluntariado-db.json"); 
        setActivities(res.data); 
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(indexOfFirstActivity, indexOfLastActivity);

  
  const totalPages = Math.ceil(activities.length / activitiesPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentActivities.map((activity) => (
          <Card key={activity.id} activity={activity} />
        ))}
      </div>

      
      <div className="flex justify-center items-center space-x-4">
        <button
          className="btn btn-sm btn-outline"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <div className="btn-group">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`btn btn-sm ${
                currentPage === index + 1 ? "btn-active" : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="btn btn-sm btn-outline"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ActivitiesList;
