import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";

export const CharacterPersonalDescription = () => {
	const { store } = useContext(Context);
	let theid = useParams();
	let SWIndex = -1;
	for (let index = 0; index < store.starWarsCharactersDescription.length; index++) {
		if (theid.theid == store.starWarsCharactersDescription[index].name) {
			SWIndex = index;
		}
	}
	for (let index = 0; index < store.imgStarWarsCharacters.length; index++) {
		if (theid.theid == store.imgStarWarsCharacters[index].name) {
			SWIndex = index;
		}
	}
	for (let index = 0; index < store.descriptionsStarWarsCharacters.length; index++) {
		if (theid.theid == store.descriptionsStarWarsCharacters[index].name) {
			SWIndex = index;
		}
	}
	console.log("theid :", theid);
	console.log("index :", SWIndex);

	let cardLuke = (
		<div className="card">
			<img src={store.imgStarWarsCharacters[SWIndex].img} alt="..." />
			<div className="card-body">
				<h5 className="card-title">{store.starWarsCharactersDescription[SWIndex].name}</h5>
				<p className="card-text">{store.descriptionsStarWarsCharacters[SWIndex].description}</p>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home!
					</span>
				</Link>
			</div>
		</div>
	);
	return cardLuke;
};
