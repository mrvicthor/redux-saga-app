import { Header } from "..";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { themeSelector } from "../../features/theme/theme-selector";
import { setDarkTheme } from "../../features/theme/theme-slice";

const Layout = () => {
  const darkTheme = useSelector(themeSelector);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setDarkTheme());
  };

  return (
    <div className={`${darkTheme ? "bg-[#202C36]" : "bg-white"}`}>
      <Header onToggle={toggleTheme} darkTheme={darkTheme} />
      <Outlet />
    </div>
  );
};

export default Layout;
