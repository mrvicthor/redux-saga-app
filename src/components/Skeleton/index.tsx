import { useSelector } from "react-redux";
import { themeSelector } from "../../features/theme/theme-selector";

const Skeleton = () => {
  const darkTheme = useSelector(themeSelector);

  return (
    <div
      className={`${
        darkTheme
          ? "bg-[#2B3844] text-[#f1f1f1] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
          : "bg-white text-[#111517] shadow-[0px_0px_7px_2px_rgba(0,0,0,0.0294384)]"
      } w-[16.5rem] rounded-[5px] pb-[2.875rem] md:w-full`}
    >
      <div className="h-[10rem] w-full skeleton "></div>
      <article className="pt-6 px-6">
        <div className="skeleton skeleton-title" />
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text" />
          </div>
          <div className="flex justify-between">
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text" />
          </div>
          <div className="flex justify-between">
            <div className="skeleton skeleton-text" />
            <div className="skeleton skeleton-text" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Skeleton;
