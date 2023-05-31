import { Countries, Pagination, SearchBar } from "../../components";
import { useSelector } from "react-redux";
import { themeSelector } from "../../features/theme/theme-selector";

const Home = () => {
  const darkTheme = useSelector(themeSelector);

  return (
    <section
      className={`${
        darkTheme ? "bg-[#202C36]" : "bg-[#F2F2F2]"
      } min-h-[100vh] pb-10`}
    >
      <SearchBar />
      <Countries />
      <Pagination />
    </section>
  );
};

export default Home;
