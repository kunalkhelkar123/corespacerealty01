import React from "react";

const Pagination2 = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 1 : prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === Math.ceil(totalPosts / postsPerPage) ? Math.ceil(totalPosts / postsPerPage) : prevPage + 1));
  };

  return (
    <div className="pagination flex justify-center items-center">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        Previous
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className="pagination-btn"
        >
          {page}
        </button>
      ))}
      <button 
        onClick={goToNextPage}
        disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
        className="pagination-btn"
      >
        Next
      </button >
      <style jsx > {`
        .pagination-btn {
          padding: 12px 5px;
          border-radius: 8px;
          outline: none;
          font-size: 16px;
          margin: 5px;
          transition: background-color 0.3s, transform 0.3s;
        }

        .pagination-btn:hover {
          background-color:   #FFF848;
          transform: scale(1.05);
        }

        .pagination-btn:focus {
          background-color: #FFF848; 
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Pagination2;
