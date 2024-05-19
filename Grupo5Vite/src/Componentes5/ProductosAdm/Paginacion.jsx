import React, { useState } from 'react';
import '../../css/Dashboard.css';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState(null);
  const totalPages = 11;

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedButton(pageNumber);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectedButton('previous');
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setSelectedButton('next');
    }
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={currentPage === i ? "current-page" : "page"}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <button
        className={selectedButton === 'previous' ? "previous-page selected" : "previous-page"}
        onClick={handlePreviousClick}
      >
         &#60; Anterior
      </button>
      {renderPages()}
      <button
        className={selectedButton === 'next' ? "next-page selected" : "next-page"}
        onClick={handleNextClick}
      >
        Siguiente  &#62;
      </button>
    </div>
  );
};

export default Pagination;