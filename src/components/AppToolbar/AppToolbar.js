import React, {useRef} from "react";
import "./AppToolbar.css";
import avatar from "../../assets/images/avatar.png";
import weather from "../../assets/images/cloudRain.png";
import explore from "../../assets/images/navigation.png"
import cities from "../../assets/images/vector.png";
import settings from "../../assets/images/settings.png";

const AppToolbar = () => {
	const toolbar = useRef(null);

	const icons = [
		{src: weather, name: 'weather'},
		{src: explore, name: 'explore'},
		{src: cities, name: 'cities'},
		{src: settings, name: 'settings'}
	];

	const avatarClick = () => {
		toolbar.current.classList.toggle("hiddenToolbar");
	};

	return (
		<div className="AppToolbar">
			<div className="AvatarContainer" onClick={avatarClick}>
				<img src={avatar} alt="Avatar" className="Avatar"/>
			</div>
			<div ref={toolbar} className="ToolbarContainer">
				<div className="ToolbarItems">
					{icons.map((icon, index) => (
						<div key={index} className="ToolbarItem">
							<img alt={icon.name} className={icon.name} src={icon.src}/>
							<p className="ToolName">{icon.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AppToolbar;