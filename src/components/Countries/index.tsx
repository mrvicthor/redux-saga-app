import { useSelector } from "react-redux";
import { Country } from "..";
import { countrySelector } from "../../features/country/country-selector";
import { ICountry } from "../../model";

const Countries = () => {
  const countries = useSelector(countrySelector) ?? [];
  return (
    <div
      className={`container mt-8 grid justify-center gap-y-[2.5rem] md:grid-cols-2 md:gap-x-[4.6875rem] md:gap-y-[4.6875rem] lg:grid-cols-4 lg:justify-between`}
    >
      {(countries as unknown as ICountry[]).map(
        (country: ICountry, i: number) => (
          <Country country={country} key={i} />
        )
      )}
    </div>
  );
};

export default Countries;
