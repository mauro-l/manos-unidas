import { useState } from "react";
import Card from "../../common/cards/Card.jsx";
import useActivities from "@/hooks/useActivities.js";

const ActivitiesListVol = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 6;

  const { activities } = useActivities();

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = activities.slice(
    indexOfFirstActivity,
    indexOfLastActivity
  );

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
    <div className="flex flex-col items-center space-y-6 ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {currentActivities.map((activity) => (
          <Card key={activity.id} activity={activity} />
        ))}
      </div>

      <div className="flex items-center justify-center space-x-2">
        <button
          className={`btn btn-sm btn-outline text-primary ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
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
                currentPage === index + 1
                  ? "btn-active bg-primary text-white"
                  : ""
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className={` btn btn-sm btn-outline text-primary ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ActivitiesListVol;

