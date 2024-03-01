import {combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import {configureStore} from "@reduxjs/toolkit";
import {rootSagas} from "./rootSagas";
import citySlices from "./slices/citySlices";

const rootReducer = combineReducers({
	'cityWeather': citySlices.reducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: rootReducer,
	middleware: () => [sagaMiddleware],
	devtools: true,
});

sagaMiddleware.run(rootSagas);

export default store;