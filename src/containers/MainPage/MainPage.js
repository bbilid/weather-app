import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {fetchCityRequest, hourForecastRequest} from "../../store/actions/cityActions";
import "./MainPage.css";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";
import SearchPage from "../SearchPage/SearchPage";

const MainPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const city = useSelector(state => state.cityWeather.city);
	const cityLoading = useSelector(state => state.cityWeather.fetchCityLoading);
	const hourLoading = useSelector(state => state.cityWeather.hourForecastLoading);
	const hourInf = useSelector(state => state.cityWeather.hourForecast);

	useEffect(() => {
		if (location.state !== null) {
			dispatch(fetchCityRequest({lat: location.state.lat, lon: location.state.lon}));
			dispatch(hourForecastRequest({lat: location.state.lat, lon: location.state.lon}));
		}
	}, [dispatch, location]);

	return (
		<div className="Container">
			<div className="MainPage">
				{location.state !== null ?
					<WeatherInfo
						city={city}
						loading={cityLoading}
						hourLoading={hourLoading}
						hourInf={hourInf}
					/> : <SearchPage/>
				}
			</div>
		</div>
	);
};
export default MainPage;