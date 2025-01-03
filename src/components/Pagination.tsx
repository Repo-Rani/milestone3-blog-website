"use client";
import React from "react";
import { PaginationPropTypes } from "../../types/type";
const Pagination = ({
  currentPage,
  onPageChange,
  totalBlogs,
  pageSize,
}: PaginationPropTypes) => {
  const totalPages = Math.ceil(totalBlogs / pageSize);
  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`lg:min-w-9 min-w-[29px] mx-auto rounded-md lg:py-2 lg:px-3 py-1 px-1 border text-center lg:text-sm text-[12px]  transition-all shadow-sm xl:ml-2 ${
            pageNumber === currentPage
              ? "bg-slate-800 text-white border-transparent shadow-md hover:bg-slate-700"
              : "border-slate-300 text-slate-600 hover:bg-slate-800 hover:text-white hover:border-slate-800 shadow-md shadow-slate-300 "
          }`}
        >
          {pageNumber}
        </button>
      )
    );
  };

  return (
    <div className="py-20">
      <div className="flex space-x-1 justify-center items-center">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-md border border-slate-300 lg:py-2 lg:px-3 py-1 px-2 text-center lg:text-sm text-[12px]  transition-all shadow-md shadow-slate-300 hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 "
        >
          Prev
        </button>
        {renderPaginationLinks()}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-md border border-slate-300 lg:py-2 lg:px-3 py-1 px-2  text-center lg:text-sm text-[12px]  transition-all hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2  shadow-md shadow-slate-300 "
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Pagination;
