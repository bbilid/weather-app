import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {Chart} from "chart.js/auto";
import {CategoryScale} from "chart.js";
import time from "../../assets/images/time.png";
import LoadingGif from "../UI/LoadingGif/LoadingGif";
import "./HourForecast.css";

Chart.register(CategoryScale);
const HourForecast = ({currentWeather, hourLoading, hourInf}) => {
	const [data, setData] = useState([]);

	useEffect(() => {

		if (hourInf) {
			hourInf.forEach(item => {
				const date = new Date(item.dt * 1000);
				let hour = date.getHours();
				let minute = date.getMinutes();

				if (hour < 10) {
					hour = '0' + hour;
				} else {
					hour = hour + '';
				}

				if (minute < 10) {
					minute = '0' + minute;
				} else {
					minute = minute + '';
				}

				setData(prevState => ([
					...prevState,
					{ temp: item?.main?.temp,
						date: hour + ':' + minute,
						wind: item?.wind?.speed,
					}
				]));
			});
		}
	}, [hourInf, currentWeather]);

	return (
		<div className="HourForecastContainer">
			<img src={time} alt="Time" className="TimeIcon"/>
			<span className="HourTitle">24-hour forecast</span>
			{hourLoading ? <LoadingGif/> :
				<div className="GraphContainer">
					<Line data={{
						labels: data
							.slice(0, 5)
							.map(data => {
								return data['date'];
							}),
						datasets: [{
							label: '',
							data: [{temp: currentWeather?.main?.temp, wind: currentWeather?.wind?.speed}, ...data]
								.slice(0, 5)
								.map(data => {
									return data['temp'];
								}),
							borderColor: "#D69E36",
							lineTension: 0.8,
						}],
					}}
					options={{
						radius: 0,
						// scales: {
						// 	x: {
						// 		display: false,
						// 	},
						// 	y: {
						// 		display: false,
						// 	},
						// },
						plugins: {
							legend: {
								display: false,
							}
						}
					}}
					/>
				</div>
			}
		</div>
	);
};

export default HourForecast;