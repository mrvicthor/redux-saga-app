import { select, put, all, takeEvery } from "redux-saga/effects";
import { totalCountriesSelector } from "../features/country/country-selector";
import { error } from "../features/api/api-slice";
import { setTotalResults } from "../features/pagination/pagination-slice";
import { setCountryData } from "../features/country/country-slice";

function* paginationMetrics() {
  try {
    const totalResults: number = yield select(totalCountriesSelector);
    yield put(setTotalResults(totalResults));
  } catch (err) {
    yield put(error(err as object));
  }
}

function* paginationSaga() {
  yield all([takeEvery(setCountryData.type, paginationMetrics)]);
}

export default paginationSaga;
