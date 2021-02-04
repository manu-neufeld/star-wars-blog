import React from "react";
// import "../../styles/home.scss";
import { Characters } from "../component/characters.jsx";
import "../../styles/index.scss";

export const Home = () => {
	return (
		<div className="characters-div">
			<h1 className="character-view-title">Personajes</h1>
			<Characters />
		</div>
	);
};
