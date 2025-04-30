import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";

const Pagination = ({ totalPages, limit, paginate }: { totalPages: number; limit: number; paginate: (n: number) => void }) => {
  const [activePage, setActivePage] = useState(1); // State to track the active page
  const pageNum = [];

  for (let i = 1; i <= Math.ceil(totalPages / limit); i++) {
    pageNum.push(i);
  }

  const handlePageClick = (page: number) => {
    setActivePage(page); // Update the active page
    paginate(page); // Call the paginate function
  };

  return (
    <div className="flex items-center justify-between mt-5 w-full">
      {/* Previous Button */}
      <div
        className={`py-2 px-3 border-2 bg-transparent rounded-[10px] flex items-center justify-around w-auto hover:bg-[#93674f] hover:text-white duration-200 cursor-pointer ${
          activePage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => activePage > 1 && handlePageClick(activePage - 1)}
      >
        <IoMdArrowDropleft size={25} />
        <p className="max-md:hidden">Prev</p>
      </div>

      {/* Page Numbers */}
      <div className="flex items-center justify-between lg:gap-x-2">
        {pageNum.map((item) => (
          <span
            key={item}
            className={`rounded-[10px] cursor-pointer py-2 px-3 text-lg duration-200 border-2 ${
              activePage === item
                ? "bg-[#93674f] text-white border-[#93674f]" // Special style for active page
                : "hover:text-white hover:bg-[#93674f] border-[#93674f]"
            }`}
            onClick={() => handlePageClick(item)}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Next Button */}
      <div
        className={`py-2 px-3 border-2 bg-transparent rounded-[10px] flex items-center justify-around w-auto hover:bg-[#93674f] hover:text-white duration-200 cursor-pointer ${
          activePage === pageNum.length ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => activePage < pageNum.length && handlePageClick(activePage + 1)}
      >
        <p className="max-md:hidden">Next</p>
        <IoMdArrowDropright size={25} />
      </div>
    </div>
  );
};

export default Pagination;