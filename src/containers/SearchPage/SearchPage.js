import React from "react";
import {useSelector} from "react-redux";
import SearchForm from "../../components/SearchForm/SearchForm";
import ListCities from "../../components/ListCities/ListCities";
import "./SearchPage.css";

const SearchPage = () => {
	const cities = useSelector(state => state.cityWeather.cities);

	return (
		<div className="SearchContainer">
			<SearchForm/>
			{cities?.length !== 0 &&
				cities.map(city => (
					<ListCities
					  key={city.lat}
					  name={city.name}
					  country={city.country}
					  state={city.hasOwnProperty('state') && city.state}
				  />
			  ))
			}
		</div>
	);
};

export default SearchPage;