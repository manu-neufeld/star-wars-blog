import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import luke from "../../img/luke.jpg";
import { Link, useParams } from "react-router-dom";

export const CharacterPersonalDescription = () => {
	const { store, actions } = useContext(Context);
	let theid = useParams();
	let SWIndex = -1;
	for (let index = 0; index < store.starWarsCharactersDescription.length; index++) {
		if (theid.theid == store.starWarsCharactersDescription[index].name) {
			SWIndex = index;
		}
	}
	console.log("theid :", theid);
	console.log("index :", SWIndex);

	let cardLuke = (
		<div className="card">
			<img src={store.imgStarWarsCharacters[index]} alt="..." />
			<div className="card-body">
				<h5 className="card-title">{store.starWarsCharactersDescription[SWIndex].name}</h5>
				<p className="card-text">
					Luke Skywalker, a Force-sensitive human male, was a legendary Jedi Master who fought in the Galactic
					Civil War during the reign of the Galactic Empire. Along with his companions, Princess Leia Organa
					and General Han Solo, Skywalker served on the side of the Alliance to Restore the Republic—an
					organization committed to the downfall of the Galactic Empire and the restoration of democracy.
					Following the war, Skywalker became a living legend, and was remembered as one of the greatest Jedi
					in galactic history.
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
