import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="my-8">
      <div className="flex justify-center items-center">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        )}
      </div>
      <p className="text-center mt-4">
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
