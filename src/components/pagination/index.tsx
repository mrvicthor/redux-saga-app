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
  const pageNumbers = useAppSelector(totalPagesSelector);

  return (
    <ul className="mt-6 flex justify-center gap-3 border-red-400">
      {pageNumbers?.map((p) => (
        <li
          onClick={() => dispatch(setCurrentPage(p))}
          className={`${
            darkTheme
              ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
              : "bg-white text-[#111517] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
          } h-8 w-8 rounded-full flex items-center justify-center ${
            currentPage === p && "border-2 border-rose-700"
          }`}
          key={p}
        >
          {p}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
