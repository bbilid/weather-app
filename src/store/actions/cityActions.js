import citySlices from "../slices/citySlices";

export const {
	fetchCityRequest,
	fetchCitySuccess,
	fetchCityFailure,
	searchCityRequest,
	searchCitySuccess,
	searchCityFailure,
	hourForecastRequest,
	hourForecastSuccess,
	hourForecastFailure,
} = citySlices.actions;