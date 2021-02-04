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
	let cardLuke = (
		<div className="card more-info">
			<img src={store.imgStarWarsCharacters[SWIndex].img} alt="..." />
			<div className="card-body more-info-body">
				<p className="card-title more-info-name-character">
					{store.starWarsCharactersDescription[SWIndex].name}
				</p>
				<p className="card-text more-info-description">
					{store.descriptionsStarWarsCharacters[SWIndex].description}
				</p>
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
