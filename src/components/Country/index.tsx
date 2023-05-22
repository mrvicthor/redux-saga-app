import { useSelector } from "react-redux";
import { themeSelector } from "../../features/theme/theme-selector";
import { ICountry } from "../../model";

interface CountryProps {
  country: ICountry;
}
const Country = ({ country }: CountryProps) => {
  const darkTheme = useSelector(themeSelector);
  return (
    <div
      className={`${
        darkTheme
          ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
          : "bg-white text-[#111517] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
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
            Population: <span className="opacity-60">{country.population}</span>
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
  );
};

export default Country;
