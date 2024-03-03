import React from "react";
import {Link} from "react-router-dom";
import "./ListCities.css";

const ListCities = (props) =>  {
	return (
		<Link to="/" state={{lat: props.lat, loc: props.lon}} style={{textDecoration: "none", color: "#48484a"}}>
			<div className="CityContainer">
				<h3>{props.name}</h3>
				<p>{props.state}{props.state && ','} {props.country}</p>
			</div>
		</Link>
	);
};

export default ListCities;



