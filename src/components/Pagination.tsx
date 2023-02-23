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
    <div className="pagination flex flex-row w-full justify-center my-3">
      {/* page numbers */}
      {Array.from(Array(numOfPages)).map((page, i) => (
        <button
          onClick={() => setPage(i + 1)}
          className={`page flex flex-row justify-center items-center text-sm
          border border-gray-400 text-black opacity-50 px-3 py-3 
          ${
            active === i + 1
              ? "bg-blue-500 text-white font-bold"
              : "bg-white text-gray-500"
          }
          hover:bg-gray-200 hover:text-black hover:font-bold hover:cursor-pointer
          disabled:cursor-none
          `}
          key={i}
          disabled={active === i + 1}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
