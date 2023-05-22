import { Country } from "..";
import { ICountry } from "../../model";

interface ICountries {
  countries: ICountry[];
}
const Countries = ({ countries }: ICountries) => {
  return (
    <div
      className={`container mt-8 grid justify-center gap-y-[2.5rem] md:grid-cols-2 md:gap-x-[4.6875rem] md:gap-y-[4.6875rem] lg:grid-cols-4 lg:justify-between`}
    >
      {countries.map((country: ICountry, i: number) => (
        <Country country={country} key={i} />
      ))}
    </div>
  );
};

export default Countries;
