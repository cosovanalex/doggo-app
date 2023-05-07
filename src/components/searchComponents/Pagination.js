import React from 'react';
import '../../main.css';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const visiblePageNumbers = (() => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage === 1) {
      return [1, 2, 3];
    } else if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  })();

  return (
    <nav aria-label="Page navigation" className="page-navigation">
      <ul className="pagination pagination-center">
        <li className="page-item">
          <button
            className={`page-link page-link-button${
              currentPage === 1 ? ' page-link-button-disabled' : ''
            }`}
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          >
            &laquo;
          </button>
        </li>
        {visiblePageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item${pageNumber === currentPage ? ' active' : ''}`}
          >
            <button
              className="page-link page-link-button"
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className={`page-link page-link-button${
              currentPage === totalPages ? ' page-link-button-disabled' : ''
            }`}
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
