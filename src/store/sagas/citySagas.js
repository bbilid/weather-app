import {put, takeEvery} from "redux-saga/effects";
import {toast} from "react-toastify";
import axiosApi from "../../axiosApi";
import {openWeatherAPIKey} from "../../config";
import {
	fetchCityFailure,
	fetchCityRequest,
	fetchCitySuccess,
	searchCityFailure, searchCityRequest,
	searchCitySuccess
} from "../actions/cityActions";

export function* fetchCitySaga({payload: city}) {
	try {
		const response = yield axiosApi.get(
			`/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${openWeatherAPIKey}`
		);
		yield put(fetchCitySuccess(response.data));
	} catch (error) {
		yield put(fetchCityFailure(error.response.data));
	}
}

export function* searchCitySaga({payload: city}) {
	try {
		const response = yield axiosApi.get(`/geo/1.0/direct?q=${city}&limit=7&appid=${openWeatherAPIKey}`);

		if (response.data.length === 0) {
			toast.error('Not found!', {theme: "dark"});
			yield put(searchCityFailure({message: 'Not found!'}));
		} else {
			yield put(searchCitySuccess(response.data));
		}
	} catch (error) {
		yield put(searchCityFailure(error.response.data));
		toast.error(error.response.data.error, {theme: "dark"});
	}
}

const citySagas = [
	takeEvery(fetchCityRequest, fetchCitySaga),
	takeEvery(searchCityRequest, searchCitySaga),
];

export default citySagas;