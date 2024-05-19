import React from "react";

const PaginationButton = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination ">
      {pages.map((page, index) => (
        <button
        key={page} // Using `page` as the key since it's unique
        onClick={() => setCurrentPage(page)}
        className={`${
          page === currentPage ? "bg-red-500" : "bg-[#FFF848]"
        } hover:bg-[#39025] text-black  py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300 ease-in-out m-1`}
      >
       {page}
     </button>
      ))}
    </div>
  );
};

export default PaginationButton;
