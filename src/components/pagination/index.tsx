import { useSelector, useDispatch } from "react-redux";
import {
  currentPageSelector,
  totalPagesSelector,
} from "../../features/pagination/pagination-selector";
import { themeSelector } from "../../features/theme/theme-selector";
import { setCurrentPage } from "../../features/pagination/pagination-slice";
import { useAppSelector } from "../../app/store";

const Pagination = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(themeSelector);
  const currentPage = useSelector(currentPageSelector);
  const totalPages = useAppSelector(totalPagesSelector);
  const maxPagesToShow = 5;

  const getPageNumbers = () => {
    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }
    const halfMaxPages = Math.floor(maxPagesToShow / 2);
    const leftOffset = Math.min(halfMaxPages, currentPage - 1);
    const rightOffset = Math.min(halfMaxPages, totalPages - currentPage);
    const startPage = currentPage - leftOffset;
    const endPage = currentPage + rightOffset;

    const pages = [];

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <ul className="mt-6 flex justify-center gap-3 border-red-400">
      {getPageNumbers().map((p, index) => (
        <li
          onClick={() => dispatch(setCurrentPage(p as number))}
          className={`${
            darkTheme
              ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
              : "bg-white text-[#111517] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
          } h-8 w-8 rounded-full flex items-center justify-center cursor-pointer ${
            currentPage === p && "border-2 border-rose-700"
          }`}
          key={index}
        >
          {p}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
