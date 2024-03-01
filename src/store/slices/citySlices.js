import {createSlice} from "@reduxjs/toolkit";

const name = 'city';

const citySlices = createSlice({
	name,
	initialState: {
		city: {},
		cities: [],
		fetchCityLoading: false,
		fetchCityError: null,
		searchCityLoading: false,
		searchCityError: null,
	},
	reducers: {
		fetchCityRequest(state){
			state.fetchCityLoading = true;
		},
		fetchCitySuccess(state, action) {
			state.fetchCityLoading = false;
			state.fetchCityError = null;
			state.city = action.payload;
		},
		fetchCityFailure(state,action) {
			state.fetchCityLoading = false;
			state.fetchCityError = action.payload;
		},
		searchCityRequest(state) {
			state.searchCityLoading = true;
		},
		searchCitySuccess(state, action) {
			state.searchCityLoading = false;
			state.searchCityError = null;
			state.cities = action.payload;
		},
		searchCityFailure(state, action) {
			state.searchCityError = action.payload;
		},
	},
});
export default citySlices;