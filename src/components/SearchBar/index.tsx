import { Regions } from "..";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { themeSelector } from "../../features/theme/theme-selector";
import { setShowRegion } from "../../features/region/region-slice";
import { showRegionSelector } from "../../features/region/region-selector";

const SearchBar = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(themeSelector);
  const showRegion = useSelector(showRegionSelector);

  const handleShowRegion = () => {
    dispatch(setShowRegion());
  };

  return (
    <div
      className="container pt-6 flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between
      "
    >
      <div
        className={`${
          darkTheme
            ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_2px_9px_rgba(0,0,0,0.0532439)]"
            : "bg-white text-[#111517] shadow-[0px_2px_4px_rgba(0,0,0,0.0562443)]"
        } flex h-12 items-center pl-8 gap-x-7 rounded-[5px] md:w-[30rem] md:h-[3.5rem]`}
      >
        <FaSearch />{" "}
        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search for a country..."
        />
      </div>
      <div className="space-y-1">
        <div
          onClick={handleShowRegion}
          className={`${
            darkTheme
              ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_2px_9px_rgba(0,0,0,0.0532439)]"
              : "bg-white text-[#111517] shadow-[0px_2px_4px_rgba(0,0,0,0.0562443)]"
          } flex h-12 items-center px-6 justify-between rounded-[5px] text-sm font-normal w-[12.5rem] md:h-[3.5rem] cursor-pointer`}
        >
          Filter by Region <MdKeyboardArrowDown />
        </div>
        {showRegion && <Regions handleShowRegion={handleShowRegion} />}
      </div>
    </div>
  );
};
export default SearchBar;
