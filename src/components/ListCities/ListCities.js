import React from "react";
import "./ListCities.css";

const ListCities = (props) =>  {
	return (
		<div className="CityContainer">
				<h3>{props.name}</h3>
				<p>{props.state}{props.state && ','} {props.country}</p>
		</div>
	);
};

export default ListCities;



