import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {fetchCityRequest} from "../../store/actions/cityActions";
import "./MainPage.css";
import WeatherInfo from "../../components/WeatherInfo/WeatherInfo";

const MainPage = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const city = useSelector(state => state.cityWeather.city);
	const cityLoading = useSelector(state => state.cityWeather.fetchCityLoading);

	useEffect(() => {
		dispatch(fetchCityRequest({lat: location.state.lat, lon: location.state.lon}));
	}, [dispatch, location]);

	return (
		<div className="Container">
			<div className="MainPage">
				<div className="MainInfoContainer">
					<WeatherInfo city={city} loading={cityLoading}/>
				</div>
			</div>
		</div>
	);
};
export default MainPage;