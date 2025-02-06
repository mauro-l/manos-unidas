import { useState } from "react";


const Pagination = ({ totalItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1; 

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
  );
};

export default Pagination;
