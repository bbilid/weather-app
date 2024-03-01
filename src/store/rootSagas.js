import {all} from "redux-saga/effects";
import citySagas from "./sagas/citySagas";
export function* rootSagas() {
	yield all([
		...citySagas,
	]);
}