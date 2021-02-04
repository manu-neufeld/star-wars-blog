import React from "react";
import "../../styles/home.scss";
import { Characters } from "../component/characters.jsx";

export const Home = () => {
	return (
		<div className="people-row">
			<Characters />
		</div>
	);
};
