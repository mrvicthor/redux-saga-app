import { useSelector } from "react-redux";
import { Country } from "..";
import {
  countrySelector,
  searchSelector,
} from "../../features/country/country-selector";
import { ICountry } from "../../model";
import { regionSelector } from "../../features/region/region-selector";

const Countries = () => {
  const countries = useSelector(countrySelector) ?? [];
  const searchQuery = useSelector(searchSelector) ?? "";
  const region = useSelector(regionSelector) ?? "";

  // eslint-disable-next-line prefer-const
  let filteredCountries = countries as unknown;
  if (region) {
    filteredCountries = (filteredCountries as ICountry[]).filter(
      (country) => country.region === region
    );
  }

  if (searchQuery) {
    filteredCountries = (filteredCountries as ICountry[]).filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (searchQuery !== "" && !(filteredCountries as ICountry[]).length) {
    return (
      <p className="container mt-8 text-center font-bold">
        Oops! Search not found. Please check spelling..
      </p>
    );
  }

  return (
    <div
      className={`container mt-8 grid justify-center gap-y-[2.5rem] md:grid-cols-2 md:gap-x-[4.6875rem] md:gap-y-[4.6875rem] lg:grid-cols-4 lg:justify-between`}
    >
      {(filteredCountries as unknown as ICountry[]).map(
        (country: ICountry, i: number) => (
          <Country country={country} key={i} />
        )
      )}
    </div>
  );
};

export default Countries;
