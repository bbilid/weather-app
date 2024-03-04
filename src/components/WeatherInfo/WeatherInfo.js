import React from "react";
import "./WeatherInfo.css";
import vector from "../../assets/images/vector.png";
import cloud from "../../assets/images/cloud.png";
import rain from "../../assets/images/rain.png";
import storm from "../../assets/images/storm.png";
import sun from "../../assets/images/sun.png";
import sunRain from "../../assets/images/sunRain.png";
import snow from "../../assets/images/snow.png";
import mist from "../../assets/images/mist.png";
import loadingGif from "../../assets/gifs/loading-gif.gif";
import AppToolbar from "../AppToolbar/AppToolbar";
import NotFoundPage from "../../containers/NotFoundPage/NotFoundPage";

const WeatherInfo = ({city, loading}) => {
	const date = new Date();
	const month = date.getMonth();
	const day = date.getDay();
	const year = date.getFullYear();

	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday'];
	const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];

	const currentWeatherIcon = (weather) => {
		switch (weather) {
			case 'Rain' :
				return sunRain
			case 'Clouds' :
				return cloud;
			case 'Thunderstorm' :
				return storm;
			case 'Clear' :
				return sun;
			case 'Drizzle' :
				return rain;
			case 'Snow' :
				return snow;
			default:
				return mist;
		}
	};

	return (
		<>
			{loading ?
			<div className="LoadingContainer">
				<img src={loadingGif} alt="Loading" className="LoadingImg"/>
			</div> : city ?
					<div className="InfoContainer">
						<div className="HeaderInfo">
							<img src={vector} alt="Vector" className="VectorIcon"/>
							<span className="Name">{city?.name && city.name}</span>
							<span className="Symbol">&rsaquo;</span>
							<p className="Weather">{city?.weather && city.weather[0].main}</p>
							<div className="WeatherIconContainer">
								<img
									src={currentWeatherIcon(city?.weather && (city.weather[0] && city.weather[0].main))}
									alt="Icon"
									className="WeatherIcon"
								/>
							</div>
							<p className="Temp">{city?.main && city.main.temp}&deg;C</p>
							<p className="CurrentDate"> {days[day]} | {day} {months[month]} {year}</p>
						</div>
						<div className="ToolbarBlock">
							<AppToolbar/>
						</div>
					</div> : <NotFoundPage/>
			}
		</>
	);
};

export default WeatherInfo;