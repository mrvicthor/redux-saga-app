import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import countryReducer from "../features/country/country-slice";
import apiReducer from "../features/api/api-slice";
import paginationReducer from "../features/pagination/pagination-slice";
import regionReducer from "../features/region/region-slice";
import themeReducer from "../features/theme/theme-slice";
import createSagaMiddleware from "redux-saga";
import countrySaga from "../sagas/country.saga";
import paginationSaga from "../sagas/pagination.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    api: apiReducer,
    country: countryReducer,
    pagination: paginationReducer,
    region: regionReducer,
    theme: themeReducer,
  },
  middleware: (getDM) => getDM().concat(sagaMiddleware),
});

sagaMiddleware.run(countrySaga);
sagaMiddleware.run(paginationSaga);
export default store;

export type AppDispatch = typeof store.dispatch;
export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
