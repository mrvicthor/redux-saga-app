import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { fetching } from "../features/api/api-slice";
import { countrySelector } from "../features/country/country-selector";

const UseInitApp = () => {
  const dispatch = useAppDispatch();
  const countryData = useAppSelector(countrySelector);

  useEffect(() => {
    if (!countryData) {
      dispatch(fetching());
    }
  }, [dispatch, countryData]);
};

export default UseInitApp;
