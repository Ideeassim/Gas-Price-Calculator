import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
      <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((num) => (
        <button 
          key={num} 
          onClick={() => onPageChange(num)} 
          style={{ fontWeight: num === currentPage ? "bold" : "normal" }}
        >
          {num}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
