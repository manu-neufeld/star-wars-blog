import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Characters } from "../component/characters.jsx";
import { useParams } from "react-router-dom";

export const Home = () => {
	const [store, actions] = useState(Context);

	return (
		<div className="people-row">
			<Characters />
		</div>
	);
};
