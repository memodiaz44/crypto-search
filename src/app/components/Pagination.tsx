// Pagination.js

import React from "react";

interface PaginationProps {
    coinsPerPage: number;
    totalCoins: number;
    currentPage: number; // Add currentPage to the prop types
    paginate: (pageNumber: number) => void;
  }

const Pagination: React.FC<PaginationProps> = ({
    coinsPerPage,
    totalCoins,
    currentPage,
    paginate,
  }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination flex justify-center space-x-2">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          className={`${
            currentPage === pageNumber
              ? "bg-blue-500 text-white"
              : "bg-transparent	 text-gray-600"
          } px-3 py-1 rounded-md` }
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
