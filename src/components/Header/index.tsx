import { FaMoon, FaSun } from "react-icons/fa";
import { IHeader } from "../../model";

const Header = ({ onToggle, darkTheme }: IHeader) => {
  return (
    <header
      className={`${
        darkTheme
          ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_2px_9px_rgba(0,0,0,0.0532439)]"
          : "bg-white text-[#111517] shadow-[0px_2px_4px_rgba(0,0,0,0.0562443)]"
      } h-[5rem]`}
    >
      <div className="container flex justify-between items-center py-[1.875rem] md:py-6">
        <h1 className="font-extrabold text-[0.875rem] leading-5 md:text-2xl">
          Where in the world?
        </h1>
        <button
          onClick={onToggle}
          className="flex items-center gap-x-2 border-none bg-none outline-none cursor-pointer"
        >
          {darkTheme ? <FaSun color="#f1f1f1" /> : <FaMoon color="#111517" />}
          {darkTheme ? "Light" : "Dark"} Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
