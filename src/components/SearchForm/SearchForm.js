import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {searchCityRequest} from "../../store/actions/cityActions";
import "./SearchForm.css";

const SearchForm = () => {
	const dispatch = useDispatch();
	const [cityName, setCityName] = useState('');

	useEffect(() => {

		if (cityName.length > 2) {
			 dispatch(searchCityRequest(cityName));
		}

	}, [cityName, dispatch]);

	const handleInputChange = (e) => {
		e.preventDefault();

		setCityName(e.target.value);
	};

	const submitFormHandler = (e) => {
		e.preventDefault();

		if (cityName.length > 2) {
			dispatch(searchCityRequest(cityName));
		}
	};

	return (
		<div className="ParentBlock">
			<form className="FormBlock" onSubmit={submitFormHandler}>
				<div className="InputContainer">
					<input
						type="text"
						name='city'
						placeholder="Weather in your city"
						className="Input"
						onChange={handleInputChange}
					/>
				</div>
				<div className="ButtonContainer">
					<button type="submit" className="Button">
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchForm;