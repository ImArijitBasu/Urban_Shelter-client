import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8 space-x-4">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`btn ${currentPage === number ? 'bg-accent text-neutral-white' : 'bg-neutral-white'} border-none`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
