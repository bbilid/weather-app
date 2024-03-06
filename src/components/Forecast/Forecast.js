import React, {useEffect, useState} from "react";
import "./Forecast.css";

const Forecast = ({currentWeather}) => {
	const [today, setToday] = useState('');

	useEffect(() => {
		if (currentWeather) {
			const today = new Date(currentWeather?.dt * 1000);
			let hour = today.getHours();
			let minute = today.getMinutes();
			let ampm = hour >= 12 ? 'PM' : 'AM';
			hour = hour % 12;
			hour = hour ? hour : 12;
			minute = minute < 10 ? '0' + minute : minute;

			setToday(hour + ':' + minute + '' + ampm);
		}
	}, [currentWeather]);

	return (
		<div className="ForecastContainer">
			<div className="WeekDaysSlider">

			</div>
			<p style={{color: '#ffffff', fontSize: '16px'}}>{today} GTM</p>
			<div className="AirConditions">
				<h5>Air Conditions</h5>
				<p>Wind {currentWeather?.wind?.speed}</p>
				<p>Real Feel {currentWeather?.main?.feels_like}</p>
				<p>Change of rain</p>
				<p>UV index</p>
			</div>
		</div>
	);
};

export default Forecast;