import { call, put, takeEvery, all } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { fetching, success, error } from "../features/api/api-slice";
import getCountry from "../services/getCountry";
import { ICountryResponse } from "../model";
import { setCountryData } from "../features/country/country-slice";
import { setTotalPages } from "../features/pagination/pagination-slice";

function* fetchCountry() {
  try {
    const response: AxiosResponse<ICountryResponse> = yield call(getCountry);
    console.log("Country saga");
    yield put(setTotalPages());
    yield put(setCountryData(response.data));
    yield put(success());
  } catch (err) {
    yield put(error(err as object));
  }
}

function* countrySaga() {
  yield all([takeEvery(fetching.type, fetchCountry)]);
}

export default countrySaga;
