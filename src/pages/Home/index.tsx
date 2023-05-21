import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { countrySelector } from "../../features/country/country-selector";
import { themeSelector } from "../../features/theme/theme-selector";
import {
  showRegionSelector,
  regionSelector,
} from "../../features/region/region-selector";
import {
  setShowRegion,
  setSelectedRegion,
} from "../../features/region/region-slice";
import { ICountry } from "../../model";
const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector(countrySelector);
  console.log(countries);
  const darkTheme = useSelector(themeSelector);
  const showRegion = useSelector(showRegionSelector);
  const selectedRegion = useSelector(regionSelector);
  const regions = [
    { id: 1, title: "Africa", value: "Africa" },
    {
      id: 2,
      title: "America",
      value: "America",
    },
    { id: 3, title: "Asia", value: "Asia" },
    { id: 4, title: "Europe", value: "Europe" },
    {
      id: 5,
      title: "Oceania",
      value: "Oceania",
    },
  ];

  const handleShowRegion = () => {
    dispatch(setShowRegion());
  };

  const handleSelectedRegion = (value: string) => {
    console.log(value);
    dispatch(setSelectedRegion(value));
  };

  return (
    <section
      className={`${darkTheme ? "bg-[#202C36]" : "bg-[#F2F2F2]"} min-h-[100vh]`}
    >
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
          {showRegion && (
            <ul
              className={`${
                darkTheme
                  ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_2px_9px_rgba(0,0,0,0.0532439)]"
                  : "bg-white text-[#111517] shadow-[0px_2px_4px_rgba(0,0,0,0.0562443)]"
              } flex flex-col px-6 py-4 gap-y-2 rounded-[5px] text-sm font-normal w-[12.5rem] absolute`}
            >
              {regions.map((region) => (
                <li
                  key={region.id}
                  onClick={() => {
                    handleSelectedRegion(region.value);
                    handleShowRegion();
                  }}
                >
                  {region.value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div
        className={`container mt-8 grid justify-center gap-y-[2.5rem] md:grid-cols-2 md:gap-x-[4.6875rem] md:gap-y-[4.6875rem] lg:grid-cols-4 lg:justify-between`}
      >
        {countries?.map((country: ICountry, i: number) => (
          <div
            key={`${country.name} + ${i}`}
            className={`${
              darkTheme
                ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_2px_9px_rgba(0,0,0,0.0532439)]"
                : "bg-white text-[#111517] shadow-[0px_2px_4px_rgba(0,0,0,0.0562443)]"
            } w-[16.5rem] rounded-[5px] pb-[2.875rem] md:w-full`}
          >
            <div className="h-[10rem] w-full">
              <img
                src={country.flags.svg}
                alt={country.name}
                className="block w-full h-full object-cover rounded-t-[5px]"
              />
            </div>
            <article className="pt-6 px-6">
              <h2 className="text-lg font-extrabold">{country.name.common}</h2>
              <div className="space-y-2 mt-4">
                <p className="text-sm font-semibold leading-4">
                  Population:{" "}
                  <span className="opacity-60">{country.population}</span>
                </p>
                <p className="text-sm font-semibold leading-4">
                  Region: <span className="opacity-60">{country.region}</span>
                </p>
                <p className="text-sm font-semibold leading-4">
                  Capital: <span className="opacity-60">{country.capital}</span>
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
