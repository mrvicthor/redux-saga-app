import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import { Country, Pagination, Skeleton } from "..";
import {
  countrySelector,
  searchSelector,
} from "../../features/country/country-selector";
import { paginationSelector } from "../../features/pagination/pagination-selector";
import { ICountry } from "../../model";
import { regionSelector } from "../../features/region/region-selector";
import { setTotalResults } from "../../features/pagination/pagination-slice";
const Countries = () => {
  const dispatch = useAppDispatch();
  const countries = useSelector(countrySelector) ?? [];
  const searchQuery = useSelector(searchSelector) ?? "";
  const region = useSelector(regionSelector) ?? "";
  const { totalResults, currentPage, countriesPerPage } =
    useSelector(paginationSelector);
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  console.log(totalResults, firstIndex, lastIndex);
  console.log(countries);

  // eslint-disable-next-line prefer-const
  let filteredCountries = countries as unknown;
  if (region) {
    filteredCountries = (filteredCountries as ICountry[]).filter(
      (country) => country.region === region
    );
    dispatch(
      setTotalResults((filteredCountries as unknown as ICountry[]).length)
    );
  }

  if (searchQuery) {
    filteredCountries = (filteredCountries as ICountry[]).filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    dispatch(
      setTotalResults((filteredCountries as unknown as ICountry[]).length)
    );
  }

  if (searchQuery !== "" && !(filteredCountries as ICountry[]).length) {
    return (
      <p className="container mt-8 text-center font-bold">
        Oops! Search not found. Please check spelling..
      </p>
    );
  }

  if (!(countries as unknown as ICountry[]).length) {
    const skeletons = Array.from(Array(10).keys());
    return (
      <div
        className={`container mt-8 grid justify-center gap-y-[2.5rem] md:grid-cols-2 md:gap-x-[4.6875rem] md:gap-y-[4.6875rem] lg:grid-cols-4 lg:justify-between`}
      >
        {skeletons.map((s, i) => {
          const key = `country-bar--${i}${s}`;
          return <Skeleton key={key} />;
        })}
      </div>
    );
  }

  const currentCountries = (filteredCountries as unknown as ICountry[]).slice(
    firstIndex,
    lastIndex
  );
  return (
    <div
      className={`container mt-8 grid justify-center gap-y-[2.5rem] md:grid-cols-2 md:gap-x-[4.6875rem] md:gap-y-[4.6875rem] lg:grid-cols-4 lg:justify-between`}
    >
      {currentCountries.map((country: ICountry, i: number) => (
        <Country country={country} key={i} />
      ))}

      <Pagination />
    </div>
  );
};

export default Countries;
