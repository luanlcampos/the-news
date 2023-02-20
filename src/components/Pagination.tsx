import React from "react";

type PaginationProps = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  numOfPages: number;
  active: number;
};

export default function Pagination({
  numOfPages,
  setPage,
  active,
}: PaginationProps) {
  return (
    <div className="pagination flex flex-row w-full justify-center my-3 shadow-lg">
      {/* back arrow */}
      {/* <button
        onClick={() => setPage(active - 1)}
        className={`page flex flex-row justify-center items-center text-sm
            border border-gray-400 text-black opacity-50 px-3 py-3
            hover:bg-gray-300 hover:text-black hover:font-bold hover:cursor-pointer
            disabled:bg-gray-200 disabled:cursor-not-allowed;
            `}
      >
        {"<"}
      </button> */}
      {/* page numbers */}
      {Array.from(Array(numOfPages)).map((page, i) => (
        <button
          onClick={() => setPage(i + 1)}
          className={`page flex flex-row justify-center items-center text-sm
          border border-gray-400 text-black opacity-50 px-3 py-3 
          ${
            active === i + 1
              ? "bg-gray-400 text-black opacity-100 font-bold"
              : ""
          }
          hover:bg-gray-300 hover:text-black hover:font-bold hover:cursor-pointer
          disabled:cursor-none
          `}
          key={i}
          disabled={active === i + 1}
        >
          {i + 1}
        </button>
      ))}
      {/* forward arrow */}
      {/* <button
        onClick={() => setPage(active + 1)}
        disabled={active === numOfPages}
        className={`page flex flex-row justify-center items-center text-sm
            border border-gray-400 text-black opacity-50 px-3 py-3
            hover:bg-gray-300 hover:text-black hover:font-bold hover:cursor-pointer
            `}
      >
        {">"}
      </button> */}
    </div>
  );
}
