import { FaMoon } from "react-icons/fa";
import { IHeader } from "../../model";

const Header = ({ onToggle, darkTheme }: IHeader) => {
  return (
    <header
      className={`${
        darkTheme
          ? "bg-[#2B3844] text-[#f1f1f1]"
          : "bg-[#f1f1f1] text-[#111517]"
      } h-[5rem]`}
    >
      <div className="px-4 flex justify-between items-center py-[1.875rem]">
        <h1 className="font-extrabold text-[0.875rem] leading-5">
          Where in the world
        </h1>
        <button
          onClick={onToggle}
          className="flex items-center gap-x-2 border-none bg-none outline-none cursor-pointer"
        >
          <FaMoon color={`${darkTheme ? "#f1f1f1" : "#111517"}`} />{" "}
          {darkTheme ? "Light" : "Dark"} Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
