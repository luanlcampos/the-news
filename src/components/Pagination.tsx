type PaginationProps = {
  pages: number[];
  active?: number;
};

export default function Pagination({ pages, active }: PaginationProps) {
  return (
    <div className="pagination flex flex-row w-full justify-center my-3 shadow-lg">
      {/* back arrow */}
      <div
        className={`page flex flex-row justify-center items-center text-sm
            border border-gray-400 text-black opacity-50 px-3 py-3
            hover:bg-gray-300 hover:text-black hover:font-bold hover:cursor-pointer
            `}
      >
        <span>{"<"}</span>
      </div>
      {/* page numbers */}
      {pages.map((page, i) => (
        <div
          className={`page flex flex-row justify-center items-center text-sm
          border border-gray-400 text-black opacity-50 px-3 py-3 
          ${active === i ? "bg-gray-400 text-black opacity-100 font-bold" : ""}
          hover:bg-gray-300 hover:text-black hover:font-bold hover:cursor-pointer
          `}
          key={i}
        >
          <span>{page}</span>
        </div>
      ))}
      {/* forward arrow */}
      <div
        className={`page flex flex-row justify-center items-center text-sm
            border border-gray-400 text-black opacity-50 px-3 py-3
            hover:bg-gray-300 hover:text-black hover:font-bold hover:cursor-pointer
            `}
      >
        <span>{">"}</span>
      </div>
    </div>
  );
}
