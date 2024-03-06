import React from "react";
import "./LoadingGif.css";
import loadingGif from "../../../assets/gifs/loading-gif.gif";

const LoadingGif = () => {
	return (
		<div className="LoadingContainer">
			<img src={loadingGif} alt="Loading" className="LoadingImg"/>
		</div>
	)
};

export default LoadingGif;

