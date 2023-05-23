import { Countries, SearchBar } from "../../components";
import { useSelector } from "react-redux";
import { themeSelector } from "../../features/theme/theme-selector";

const Home = () => {
  const darkTheme = useSelector(themeSelector);

  // const selectedRegion = useSelector(regionSelector);

  return (
    <section
      className={`${darkTheme ? "bg-[#202C36]" : "bg-[#F2F2F2]"} min-h-[100vh]`}
    >
      <SearchBar />
      <Countries />
    </section>
  );
};

export default Home;
