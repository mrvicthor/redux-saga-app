import { useSelector, useDispatch } from "react-redux";
import { themeSelector } from "../../features/theme/theme-selector";
import { setSelectedRegion } from "../../features/region/region-slice";

interface IRegion {
  handleShowRegion: () => void;
}
const Regions = ({ handleShowRegion }: IRegion) => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(themeSelector);
  const regions = [
    { id: 1, title: "Africa", value: "Africa" },
    {
      id: 2,
      title: "America",
      value: "Americas",
    },
    { id: 3, title: "Asia", value: "Asia" },
    { id: 4, title: "Europe", value: "Europe" },
    {
      id: 5,
      title: "Oceania",
      value: "Oceania",
    },
  ];

  const handleSelectedRegion = (value: string) => {
    console.log(value);
    dispatch(setSelectedRegion(value));
  };

  return (
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
          className="cursor-pointer"
        >
          {region.value}
        </li>
      ))}
    </ul>
  );
};

export default Regions;
