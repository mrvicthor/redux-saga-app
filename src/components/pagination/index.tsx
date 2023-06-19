import { useSelector, useDispatch } from "react-redux";
import {
  paginationSelector,
  totalPagesSelector,
} from "../../features/pagination/pagination-selector";
import { themeSelector } from "../../features/theme/theme-selector";
import { setCurrentPage } from "../../features/pagination/pagination-slice";
import { useAppSelector } from "../../app/store";

const Pagination = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(themeSelector);
  //   const { totalResults, countriesPerPage } = useSelector(paginationSelector);
  const pageNumbers = useAppSelector(totalPagesSelector);
  //   for (let i = 1; i <= Math.ceil(totalResults / countriesPerPage); i++) {
  //     pageNumbers.push(i);
  //   }

  console.log(pageNumbers, "page numbers");
  return (
    <ul className="mt-6 flex justify-center gap-3">
      {pageNumbers?.map((p) => (
        <li
          onClick={() => {
            console.log("Pagination clicked", p);
            dispatch(setCurrentPage(p));
          }}
          className={`${
            darkTheme
              ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
              : "bg-white text-[#111517] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
          } h-8 w-8 rounded-full flex items-center justify-center`}
          key={p}
        >
          {p}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
