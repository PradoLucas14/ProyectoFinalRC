// src/Pagination.js

import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <BootstrapPagination.Item 
        key={i} 
        active={i === currentPage}
        onClick={() => handlePageClick(i)}
      >
        {i}
      </BootstrapPagination.Item>
    );
  }

  return (
    <BootstrapPagination className="pagination">
      <BootstrapPagination.Prev 
        onClick={() => handlePageClick(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Anterior
      </BootstrapPagination.Prev>
      {pages}
      <BootstrapPagination.Next 
        onClick={() => handlePageClick(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Siguiente
      </BootstrapPagination.Next>
    </BootstrapPagination>
  );
};

export default Pagination;
