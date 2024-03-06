import React from "react";
import AppToolbar from "../AppToolbar/AppToolbar";
import NotFoundPage from "../../containers/NotFoundPage/NotFoundPage";
import HourForecast from "../HourForecast/HourForecast";
import LoadingGif from "../UI/LoadingGif/LoadingGif";
import Forecast from "../Forecast/Forecast";
import "./WeatherInfo.css";
import vector from "../../assets/images/vector.png";
import cloud from "../../assets/images/cloud.png";
import rain from "../../assets/images/rain.png";
import storm from "../../assets/images/storm.png";
import sun from "../../assets/images/sun.png";
import sunRain from "../../assets/images/sunRain.png";
import snow from "../../assets/images/snow.png";
import mist from "../../assets/images/mist.png";
import heart from "../../assets/images/heart.png";
import trees from "../../assets/images/trees.png";
import autumn from "../../assets/images/autumn.png";
import pool from "../../assets/images/pool.png";
import beach from "../../assets/images/beach.png";

const WeatherInfo = ({city, loading, hourLoading, hourInf}) => {
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
			<LoadingGif/> : city ?
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
						<div className="MiddleBlocks">
							<div className="LocationPhotoContainer">
								<img src={heart} alt="Heart" className="Heart"/>
								<span className="Title">Activities in your area</span>
								<div className="PhotosBlock">
									<img src={trees} alt="Place"/>
									<img src={autumn} alt="Place"/>
									<img src={pool} alt="Place"/>
									<img src={beach} alt="Place"/>
								</div>
							</div>
							<div className="HourForeCast">
								<HourForecast
									hourLoading={hourLoading}
									hourInf={hourInf}
									currentWeather={city}
								/>
							</div>
						</div>
						<div className="FiveDaysForeCast">
							<Forecast currentWeather={city}/>
						</div>
					</div> : <NotFoundPage/>
			}
		</>
	);
};

export default WeatherInfo;