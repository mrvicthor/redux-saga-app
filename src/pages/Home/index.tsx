import { Countries, SearchBar } from "../../components";
import { useSelector } from "react-redux";
import { countrySelector } from "../../features/country/country-selector";
import { themeSelector } from "../../features/theme/theme-selector";
import { ICountry } from "../../model";

const Home = () => {
  const countries = useSelector(countrySelector) ?? [];
  console.log(countries);
  const darkTheme = useSelector(themeSelector);

  // const selectedRegion = useSelector(regionSelector);

  return (
    <section
      className={`${darkTheme ? "bg-[#202C36]" : "bg-[#F2F2F2]"} min-h-[100vh]`}
    >
      <SearchBar />
      <Countries countries={countries as unknown as ICountry[]} />
    </section>
  );
};

export default Home;
